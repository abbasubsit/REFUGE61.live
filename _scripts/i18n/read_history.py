# -*- coding: utf-8 -*-
"""Dump the client's two chalet-history documents to a UTF-8 text file.

Filenames are matched by glob rather than spelled out: "The Story of
Bjørkåsen EN.docx" contains ø and å, which the shell mangles on the way in.
"""
import glob
import io
import os

DESKTOP = r"C:\Users\Abbas\OneDrive\Desktop\noman"

import docx

out = []
for label, pattern in [("EN", "The Story of Bj*EN.docx"),
                       ("FR", "Histoire du chalet FR.docx")]:
    matches = glob.glob(os.path.join(DESKTOP, pattern))
    if not matches:
        out.append("========== %s : NOT FOUND (%s) ==========" % (label, pattern))
        continue
    out.append("========== %s : %s ==========" % (label, os.path.basename(matches[0])))
    for p in docx.Document(matches[0]).paragraphs:
        t = p.text.strip()
        if t:
            out.append("[%s] %s" % (p.style.name, t))

io.open("_scripts/i18n/_history.txt", "w", encoding="utf-8").write("\n".join(out))
print("\n".join(out))
