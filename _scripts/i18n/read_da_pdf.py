# -*- coding: utf-8 -*-
"""
Extract the Danish column from the PDF print-out of the client's workbook,
and compare it with the Danish already published.

Bjørn sent a PDF of "…CHANGES_MAJ.xlsm" while the Danish on the site came from
the .xlsx he sent earlier. Those are different files, so the point of this is
to find out whether the PDF carries a newer Danish than what is live.

Rows in the PDF are matched by their T-id, which appears at the start of each
row of the printed table.
"""
import glob
import io
import os
import re

import fitz  # pymupdf

DESKTOP = r"C:\Users\Abbas\OneDrive\Desktop\noman"
matches = glob.glob(os.path.join(DESKTOP, "**", "*CHANGES_MAJ*.pdf"), recursive=True)
if not matches:
    raise SystemExit("no PDF found")

doc = fitz.open(matches[0])
text = "\n".join(page.get_text() for page in doc)

io.open("_scripts/i18n/_da_pdf_raw.txt", "w", encoding="utf-8").write(text)
print("file: %s" % os.path.basename(matches[0]))
print("pages: %d, characters: %d" % (doc.page_count, len(text)))
print("T-ids found: %d" % len(set(re.findall(r"\bT\d{3}\b", text))))
