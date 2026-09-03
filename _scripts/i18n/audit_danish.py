# -*- coding: utf-8 -*-
"""
Audit the Danish column for mechanical faults before anyone reads it for style.

Catches the things a machine can be sure about: strings left in English,
non-Danish characters that crept in, French leaking into the Danish column,
and length ratios so far off that something was probably truncated or
duplicated.

This says nothing about whether the Danish is *good* -- only that it is not
obviously broken.
"""
import io
import os
import re
import unicodedata

import openpyxl

SRC = os.path.join(
    r"C:\Users\Abbas\OneDrive\Desktop\noman",
    "REFUGE61_Website_V3_FR_corrige_CHANGES_MAJ (1).xlsx",
)
SHEETS = ["HOME", "THE LODGE", "PRACTICAL INFO", "LET'S TALK", "NAVIGATION"]

# Letters that have no business in Danish text.
FOREIGN = re.compile(r"[\u0400-\u04FF\u0370-\u03FF]")           # Cyrillic, Greek
FRENCH_ONLY = re.compile(r"[àâçéèêëîïôùûœ]", re.I)
# Words that would only appear if the English was left in place.
ENGLISH_TELLS = re.compile(
    r"\b(the|and|with|your|from|will|that|this|they|have|about|which|"
    r"guests|week|mountains|lodge)\b", re.I)

wb = openpyxl.load_workbook(SRC)
rows = []
for name in SHEETS:
    for r in wb[name].iter_rows(min_row=4, values_only=True):
        if not r or not r[0]:
            continue
        rows.append({
            "id": str(r[0]).strip(),
            "sheet": name,
            "en": (r[2] or "").strip(),
            "fr": (r[3] or "").strip(),
            "da": (r[4] or "").strip(),
        })

problems = []
for r in rows:
    en, da = r["en"], r["da"]
    if not da:
        problems.append((r, "EMPTY", ""))
        continue
    if da == en and len(en.split()) > 2:
        problems.append((r, "IDENTICAL TO ENGLISH", da[:90]))
        continue
    m = FOREIGN.search(da)
    if m:
        problems.append((r, "NON-LATIN CHARACTER %r" % m.group(0), da[:90]))
    if FRENCH_ONLY.search(da):
        problems.append((r, "FRENCH ACCENTS IN DANISH", da[:90]))
    if da == r["fr"]:
        problems.append((r, "SAME AS FRENCH", da[:90]))
    if len(en.split()) >= 6:
        ratio = len(da.split()) / len(en.split())
        if ratio < 0.55 or ratio > 1.8:
            problems.append((r, "LENGTH RATIO %.2f" % ratio, da[:90]))
    # An English function word surviving inside otherwise-Danish text.
    hits = set(w.lower() for w in ENGLISH_TELLS.findall(da))
    if hits:
        problems.append((r, "ENGLISH WORDS %s" % sorted(hits), da[:90]))

out = ["%d Danish strings checked, %d flagged" % (len(rows), len(problems)), ""]
for r, kind, sample in problems:
    out.append("%s | %s | %s" % (r["id"], r["sheet"], kind))
    out.append("    EN: %s" % r["en"][:110])
    out.append("    DA: %s" % r["da"][:110])
    out.append("")

io.open("_scripts/i18n/_danish_audit.txt", "w", encoding="utf-8").write("\n".join(out))
print(out[0])
