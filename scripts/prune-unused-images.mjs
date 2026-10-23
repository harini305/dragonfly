// Removes generated images that no page uses, from public/images/ and the manifest.
// Referenced keys come from the data modules (including keys built in code, such as
// room galleries) plus literal keys in components and pages.
// Usage: node scripts/prune-unused-images.mjs [--dry]
import { readFile, writeFile, readdir, unlink } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = path.resolve(import.meta.dirname, '..');
const manifestPath = path.join(root, 'src/data/image-manifest.json');
const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
const dry = process.argv.includes('--dry');

const used = new Set();
const collect = (value) => {
  if (typeof value === 'string') { if (manifest[value]) used.add(value); return; }
  if (Array.isArray(value)) return value.forEach(collect);
  if (value && typeof value === 'object') Object.values(value).forEach(collect);
};

for (const mod of ['photos', 'rooms', 'events', 'detox', 'site', 'voices']) {
  collect(await import(pathToFileURL(path.join(root, 'src/data', `${mod}.js`)).href));
}

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(full);
    else if (/\.(js|jsx|mjs)$/.test(e.name)) yield full;
  }
}
for await (const file of walk(path.join(root, 'src'))) {
  const text = await readFile(file, 'utf8');
  for (const key of Object.keys(manifest)) if (text.includes(`'${key}'`) || text.includes(`"${key}"`)) used.add(key);
}

const unused = Object.keys(manifest).filter((k) => !used.has(k));
let bytes = 0;
for (const key of unused) {
  for (const [url] of manifest[key].srcset) {
    const file = path.join(root, 'public', url);
    bytes += (await readFile(file)).length;
    if (!dry) await unlink(file);
  }
  if (!dry) delete manifest[key];
}
if (!dry) await writeFile(manifestPath, JSON.stringify(manifest, null, 1) + '\n');
console.log(`${used.size} images used; ${unused.length} unused${dry ? ' (dry run)' : ' removed'} (${Math.round(bytes / 1024)} KB)`);
for (const k of unused) console.log('  -', k);
