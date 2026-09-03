# -*- coding: utf-8 -*-
"""Dump the Danish Terms & Conditions Bjørn sent, to a UTF-8 file."""
import glob
import io
import os

import docx

DESKTOP = r"C:\Users\Abbas\OneDrive\Desktop\noman"
matches = glob.glob(os.path.join(DESKTOP, "**", "*Handels_og_rejsebetingelser*.docx"),
                    recursive=True)

out = []
for path in matches:
    out.append("===== %s =====" % os.path.basename(path))
    for p in docx.Document(path).paragraphs:
        t = p.text.strip()
        if t:
            out.append("[%s] %s" % (p.style.name, t))

io.open("_scripts/i18n/_da_terms.txt", "w", encoding="utf-8").write("\n".join(out))
print("files: %d, paragraphs: %d" % (len(matches), len(out)))
