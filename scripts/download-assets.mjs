// Downloads the curated originals into assets-source/<group>/ and records the mapping
// in assets-source/SOURCES.csv. Originals are never modified; derivatives are made by
// scripts/optimize-images.mjs. Usage: node scripts/download-assets.mjs
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import path from 'node:path';
import { selection } from './asset-selection.mjs';

const root = path.resolve(import.meta.dirname, '..');
const manifestPath = path.join(root, 'docs/source-audit/04-assets-manifest.csv');
const outRoot = path.join(root, 'assets-source');

function parseCsv(text) {
  const rows = [];
  let row = [], field = '', quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
      else if (c === '"') quoted = false;
      else field += c;
    } else if (c === '"') quoted = true;
    else if (c === ',') { row.push(field); field = ''; }
    else if (c === '\n') { row.push(field.replace(/\r$/, '')); rows.push(row); row = []; field = ''; }
    else field += c;
  }
  if (field || row.length) { row.push(field); rows.push(row); }
  const [head, ...body] = rows;
  return body.map((r) => Object.fromEntries(head.map((h, i) => [h, r[i]])));
}

const manifest = parseCsv(await readFile(manifestPath, 'utf8'));
const byName = new Map();
for (const r of manifest) if (!byName.has(r.filename)) byName.set(r.filename, r);

const log = [['group', 'filename', 'asset_id', 'original_url', 'original_wh', 'bytes', 'local_path']];
let failures = 0;

for (const [group, filename] of selection) {
  const entry = byName.get(filename);
  if (!entry) { console.error(`NOT IN MANIFEST: ${filename}`); failures++; continue; }
  const dir = path.join(outRoot, group);
  const dest = path.join(dir, filename);
  await mkdir(dir, { recursive: true });
  let bytes;
  try {
    await access(dest);
    bytes = (await readFile(dest)).length;
  } catch {
    let buf;
    for (let attempt = 1; attempt <= 4 && !buf; attempt++) {
      try {
        const res = await fetch(entry.original_url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        buf = Buffer.from(await res.arrayBuffer());
      } catch (err) {
        console.warn(`retry ${attempt} ${filename}: ${err.message}`);
      }
    }
    if (!buf) { console.error(`FAILED: ${entry.original_url}`); failures++; continue; }
    await writeFile(dest, buf);
    bytes = buf.length;
    console.log(`ok ${group}/${filename} (${Math.round(bytes / 1024)} KB)`);
  }
  log.push([group, filename, entry.asset_id, entry.original_url, entry.original_wh, bytes, path.relative(root, dest).replaceAll('\\', '/')]);
}

await writeFile(path.join(outRoot, 'SOURCES.csv'), log.map((r) => r.join(',')).join('\n') + '\n');
console.log(`${log.length - 1} assets recorded, ${failures} failures`);
if (failures) process.exitCode = 1;
