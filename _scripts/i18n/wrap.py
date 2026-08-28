# -*- coding: utf-8 -*-
r"""
Wrap the site's English strings in t(locale, "...") so a page can render in
either language.

Every English string in the approved translation spreadsheet was verified to
appear verbatim in the source, so this matches on the English itself rather
than on hand-placed keys. Two shapes are handled:

  JSX text node   >  Some sentence.  <     ->  >{t(locale, "Some sentence.")}<
  TS string value    "Some sentence."      ->  t(locale, "Some sentence.")

JSX text nodes are matched with \s+ between words, because JSX collapses the
newlines and indentation of a wrapped paragraph into single spaces -- the
source rarely holds a long sentence on one line.

Longest strings are processed first: "The Lodge" is a substring of several
longer strings, and replacing it first would corrupt them.

Run with --check to report what would match without writing anything.
"""
import io, re, sys, json, argparse

def load_entries(page=None):
    data = json.load(io.open("_scripts/i18n/_client_fr_v3.json", encoding="utf-8"))
    out = []
    for sheet, rows in data["sheets"].items():
        for r in rows:
            if not r["fr"] or not r["en"]:
                continue
            out.append(r["en"].strip())
    # Longest first, de-duplicated.
    return sorted(set(out), key=len, reverse=True)

def wrap_file(path, dry_run=False):
    src = io.open(path, encoding="utf-8").read()
    original = src
    hits, misses = [], []

    for en in load_entries():
        esc = en.replace("\\", "\\\\").replace('"', '\\"')
        call = 't(locale, "%s")' % esc

        # Words separated by any run of whitespace, as JSX will collapse it.
        pattern = r"\s+".join(re.escape(w) for w in en.split())

        # 1. A whole JSX text node: > ...text... <  with nothing else in it.
        jsx = re.compile(r"(>)(\s*)" + pattern + r"(\s*)(<)")
        new, n = jsx.subn(lambda m: "%s{%s}%s" % (m.group(1), call, m.group(4)), src)
        if n:
            src = new
            hits.append((en, "jsx", n))
            continue

        # 2. A plain TS string literal, e.g. inside a content object.
        #    A JSX attribute needs braces around the call (foo={t(...)}),
        #    a plain object value does not (foo: t(...)).
        lit = re.compile(r'(?P<attr>\s\w+=)?"' + re.escape(en) + r'"')
        new, n = lit.subn(
            lambda m: (m.group("attr") + "{" + call + "}") if m.group("attr") else call,
            src,
        )
        if n:
            src = new
            hits.append((en, "literal", n))
            continue

        misses.append(en)

    if not dry_run and src != original:
        io.open(path, "w", encoding="utf-8").write(src)
    return hits, misses

if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("paths", nargs="+")
    ap.add_argument("--check", action="store_true")
    a = ap.parse_args()
    total = 0
    for p in a.paths:
        hits, _ = wrap_file(p, dry_run=a.check)
        total += len(hits)
        print("%-52s %3d wrapped" % (p, len(hits)))
    print("TOTAL wrapped: %d" % total)
