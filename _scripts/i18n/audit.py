# -*- coding: utf-8 -*-
"""Report approved strings that are not reachable by t() on any page."""
import io, json, re, glob

FILES = (glob.glob("components/pages/*.tsx") + glob.glob("components/sections/*.tsx")
         + glob.glob("components/layout/*.tsx") + glob.glob("lib/*.ts")
         + glob.glob("lib/content/*.ts"))
blob = "\n".join(io.open(f, encoding="utf-8").read() for f in FILES)

# t(...) may be reformatted across lines by prettier, so match loosely on the
# call opening and then on the words of the string.
data = json.load(io.open("_scripts/i18n/_client_fr_v3.json", encoding="utf-8"))
extra = io.open("lib/content/copy.fr.extra.ts", encoding="utf-8").read()

missing = []
for sheet, rows in data["sheets"].items():
    if sheet == "TERMS":
        continue
    for r in rows:
        en = (r["en"] or "").strip()
        fr = (r["fr"] or "").strip()
        if not (en and fr):
            continue
        words = r"\s+".join(re.escape(w) for w in en.split())
        if re.search(r't\(\s*locale,\s*\n?\s*"\s*' + words, blob):
            continue
        # or reachable through an alias in copy.fr.extra.ts
        if re.search(r'"' + re.escape(fr[:40]), extra):
            continue
        missing.append("%s | %s | %s" % (r["id"], sheet, en[:80]))

io.open("_scripts/i18n/_unwrapped.txt", "w", encoding="utf-8").write("\n".join(missing))
print("%d approved strings not reachable" % len(missing))
