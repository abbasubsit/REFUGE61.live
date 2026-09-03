# -*- coding: utf-8 -*-
"""
Read the Danish column out of the PDF print-out of the client's workbook.

Plain text extraction interleaves the five columns unusably, and grouping
words by their y-position splits a row whenever the French and Danish cells
wrap to different numbers of lines. So this works from the table's own ruled
cells instead: the vertical rules give the column edges, the horizontal rules
give the row bands, and each cell is extracted by clipping to that rectangle.

That is exact -- a cell's text is whatever falls inside its box -- so a long
French cell can no longer leak into the Danish column.

Writes _da_pdf.json ({id: {en, da}}) and reports how it differs from the
Danish currently published in lib/content/copy.da.ts.
"""
import collections
import glob
import io
import json
import os
import re

import pymupdf

DESKTOP = r"C:\Users\Abbas\OneDrive\Desktop\noman"
OUT_JSON = "_scripts/i18n/_da_pdf.json"
OUT_DIFF = "_scripts/i18n/_da_pdf_diff.txt"

ID_COL, EN_COL, DA_COL = 0, 2, 4


def rules(page):
    """The x of each vertical rule and the y of each horizontal rule."""
    vert, horiz = collections.Counter(), collections.Counter()
    for drawing in page.get_drawings():
        for item in drawing["items"]:
            if item[0] == "l":
                a, b = item[1], item[2]
                if abs(a.x - b.x) < 0.6 and abs(a.y - b.y) > 3:
                    vert[round(a.x)] += 1
                elif abs(a.y - b.y) < 0.6 and abs(a.x - b.x) > 3:
                    horiz[round(a.y)] += 1
            elif item[0] == "re":
                r = item[1]
                vert[round(r.x0)] += 1
                vert[round(r.x1)] += 1
                horiz[round(r.y0)] += 1
                horiz[round(r.y1)] += 1

    def merge(counter, min_count):
        # Excel draws each rule twice, a fraction of a point apart.
        kept = sorted(x for x, n in counter.items() if n >= min_count)
        out = []
        for x in kept:
            if not out or x - out[-1] > 2:
                out.append(x)
        return out

    return merge(vert, 3), merge(horiz, 1)


def cells(page):
    """Yield (id, english, danish) for every ruled row on the page."""
    xs, ys = rules(page)
    if len(xs) < 6 or len(ys) < 2:
        return

    for top, bottom in zip(ys, ys[1:]):
        if bottom - top < 4:
            continue

        def cell(col):
            rect = pymupdf.Rect(xs[col] + 1, top + 1, xs[col + 1] - 1, bottom - 1)
            return re.sub(r"\s+", " ", page.get_text("text", clip=rect)).strip()

        yield cell(ID_COL), cell(EN_COL), cell(DA_COL)


def parse():
    matches = glob.glob(os.path.join(DESKTOP, "**", "*CHANGES_MAJ*.pdf"), recursive=True)
    if not matches:
        raise SystemExit("no PDF found")
    doc = pymupdf.open(matches[0])

    out = {}
    for page in doc:
        for ident, en, da in cells(page):
            if re.fullmatch(r"T\d{3}", ident):
                out[ident] = {"en": en, "da": da}
    return out


def published():
    src = io.open("lib/content/copy.da.ts", encoding="utf-8").read()
    out = {}
    for m in re.finditer(
        r'(T\d{3}): \{.*?tr: "((?:[^"\\]|\\.)*)"', src, re.S
    ):
        out[m.group(1)] = m.group(2).replace('\\"', '"')
    return out


def main():
    pdf = parse()
    json.dump(pdf, io.open(OUT_JSON, "w", encoding="utf-8"),
              ensure_ascii=False, indent=1)
    live = published()

    same, changed, new_only, blank = 0, [], 0, 0
    for tid in sorted(pdf):
        da = pdf[tid]["da"]
        if not da:
            blank += 1
            continue
        old = live.get(tid)
        if old is None:
            new_only += 1
        elif re.sub(r"\s+", " ", old).strip() == da:
            same += 1
        else:
            changed.append((tid, old, da))

    header = (
        "rows: %d | identical: %d | CHANGED: %d | only in PDF: %d | no Danish: %d"
        % (len(pdf), same, len(changed), new_only, blank)
    )
    body = "\n".join(
        "%s\n   live: %s\n   pdf : %s\n" % (t, o[:170], n[:170]) for t, o, n in changed
    )
    io.open(OUT_DIFF, "w", encoding="utf-8").write(header + "\n\n" + body)
    print(header)


if __name__ == "__main__":
    main()
