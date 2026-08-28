// Verify every public asset referenced in the source resolves case-sensitively.
//
// Windows and macOS resolve paths case-insensitively, so "Soiree Feu.jpg"
// happily loads a file actually named "Soiree Feu.JPG". Vercel serves from a
// case-sensitive filesystem and returns 404 instead -- an image that works all
// the way through local review then silently vanishes in production, which is
// exactly how the fireplace photograph on The Lodge went missing.
//
// Run: node _scripts/check-assets.mjs
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = process.cwd();
const PUBLIC = join(ROOT, "public");

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

// Every file that actually exists, as a web path, exactly as spelled on disk.
const onDisk = new Set(
  walk(PUBLIC).map((f) => "/" + relative(PUBLIC, f).split("\\").join("/")),
);
const byLower = new Map([...onDisk].map((p) => [p.toLowerCase(), p]));

const sources = walk(join(ROOT, "app"))
  .concat(walk(join(ROOT, "components")), walk(join(ROOT, "lib")))
  .filter((f) => /\.(tsx?|jsx?)$/.test(f));

const REF = /["'`](\/(?:images|videos|logos|fonts)\/[^"'`]+)["'`]/g;

let problems = 0;
let checked = 0;
for (const file of sources) {
  const text = readFileSync(file, "utf8");
  for (const [, ref] of text.matchAll(REF)) {
    checked++;
    if (onDisk.has(ref)) continue;

    const rel = relative(ROOT, file).split("\\").join("/");
    const near = byLower.get(ref.toLowerCase());
    problems++;
    if (near) {
      console.log(`CASE  ${rel}\n      wants ${ref}\n      is    ${near}\n`);
    } else {
      console.log(`MISS  ${rel}\n      wants ${ref}  (no such file)\n`);
    }
  }
}

console.log(
  `${checked} asset reference(s) checked, ${problems} problem(s) found.`,
);
process.exit(problems ? 1 : 0);
