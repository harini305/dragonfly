// Generates resized WebP derivatives from assets-source/ into public/images/ and writes
// src/data/image-manifest.json (intrinsic size + srcset per image). Originals are read-only.
// Usage: node scripts/optimize-images.mjs
import { readdir, mkdir, writeFile, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve(import.meta.dirname, '..');
const srcRoot = path.join(root, 'assets-source');
const outRoot = path.join(root, 'public/images');

const WIDTHS = [480, 800, 1200, 1600];
const QUALITY = 66;

// Detox banners carry baked-in text over most of the frame. These crops keep only
// text-free areas of the original photography (coordinates in original pixels).
const CROPS = {
  'detox/2-4.png': { key: 'detox/gut-parasite-crop', left: 0, top: 0, width: 1020, height: 340 },
  'detox/4-4.png': { key: 'detox/liver-crop', left: 0, top: 0, width: 1245, height: 415 },
  'detox/6.png': { key: 'detox/lymphatic-kidney-crop', left: 0, top: 0, width: 1134, height: 378 },
  'detox/full-body-detox.png': { key: 'detox/full-body-crop', left: 1150, top: 0, width: 738, height: 246 },
};

// Large banners are only used through their crops; the café menu photos and
// event posters never display above ~800px, so they get a smaller width set.
const SKIP_FULL = new Set(Object.keys(CROPS));
const widthsFor = (group) =>
  group.startsWith('cafe/menu') || group === 'events' || group === 'about/pets' ? [480, 800] :
  group === 'brand' ? [320, 640] :
  group.startsWith('rooms/') ? [480, 800, 1200] : WIDTHS;

const slug = (file) => file.replace(/\.[^.]+$/, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (/\.(jpe?g|png)$/i.test(entry.name)) yield full;
  }
}

async function emit(pipelineFactory, meta, key, widths) {
  const group = path.dirname(key);
  const outDir = path.join(outRoot, group);
  await mkdir(outDir, { recursive: true });
  const usable = widths.filter((w) => w < meta.width);
  if (!usable.length || usable.at(-1) < meta.width) usable.push(Math.min(meta.width, widths.at(-1)));
  const unique = [...new Set(usable)];
  const srcset = [];
  let bytes = 0;
  for (const w of unique) {
    const file = path.join(outDir, `${path.basename(key)}-${w}.webp`);
    await pipelineFactory().resize({ width: w, withoutEnlargement: true }).webp({ quality: QUALITY, effort: 5 }).toFile(file);
    bytes += (await stat(file)).size;
    srcset.push([`/images/${group}/${path.basename(key)}-${w}.webp`, w]);
  }
  const largest = unique.at(-1);
  return {
    width: largest,
    height: Math.round((meta.height / meta.width) * largest),
    src: srcset.at(-1)[0],
    srcset,
    kb: Math.round(bytes / 1024),
  };
}

const manifest = {};
for await (const file of walk(srcRoot)) {
  const rel = path.relative(srcRoot, file).replaceAll('\\', '/');
  let group = path.dirname(rel);
  if (group === 'about' && /^PETS-/i.test(path.basename(rel))) group = 'about/pets';
  const meta = await sharp(file).metadata();
  const orient = meta.orientation && meta.orientation >= 5;
  const dims = orient ? { width: meta.height, height: meta.width } : { width: meta.width, height: meta.height };

  if (!SKIP_FULL.has(rel)) {
    const key = `${group}/${slug(path.basename(rel))}`;
    manifest[key] = { source: rel, ...(await emit(() => sharp(file).rotate(), dims, key, widthsFor(group))) };
  }
  const crop = CROPS[rel];
  if (crop) {
    const { key, ...region } = crop;
    manifest[key] = { source: rel, crop: region, ...(await emit(() => sharp(file).extract(region), region, key, [480, 800, 1200])) };
  }
  process.stdout.write('.');
}

const sorted = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
await writeFile(path.join(root, 'src/data/image-manifest.json'), JSON.stringify(sorted, null, 1) + '\n');
const total = Object.values(sorted).reduce((n, m) => n + m.kb, 0);
console.log(`\n${Object.keys(sorted).length} images, ${Math.round(total / 1024)} MB of derivatives`);
