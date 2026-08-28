# -*- coding: utf-8 -*-
"""
Build lib/content/terms.ts from the two sources of truth:

  English  app/terms/page.tsx        (the approved page, parsed back to data)
  French   "REFUGE61 Terms&Conditions FR.docx" (sent by the client 2026-08-28)

Both documents carry the same twenty numbered sections, so they collapse to
one shape: a title, two brand lines, then a list of sections, each with a
heading and a list of blocks. A block is either a paragraph, the "Organiser"
sub-heading, or the organiser address (rendered as a tight group rather than
spaced paragraphs).

The English is parsed out of the JSX rather than retyped so the page's
approved wording cannot drift during the refactor; _scripts/i18n/verify_terms.py
then diffs the rendered text before and after.
"""
import html as html_mod
import io
import json
import re
import subprocess

# The English is read from the last commit that still held the full JSX --
# app/terms/page.tsx is now a thin route wrapper, so the wording only exists
# in history and in the generated lib/content/terms.ts.
EN_SRC_REV = "77780fe:app/terms/page.tsx"
FR_DOCX = r"C:\Users\Abbas\OneDrive\Desktop\noman\REFUGE61 Terms&Conditions FR.docx"
OUT = "lib/content/terms.ts"

H1 = re.compile(r'<h1[^>]*>(.*?)</h1>', re.S)
H2 = re.compile(r'<h2[^>]*>(.*?)</h2>')
H3 = re.compile(r'<h3[^>]*>(.*?)</h3>')
PARA = re.compile(r'<p dangerouslySetInnerHTML=\{\{ __html: "(.*?)" \}\} />')
PLAIN_P = re.compile(r'<p>(.*?)</p>')
ADDR_DIV = re.compile(r'<div className="pt-4 space-y-2">(.*?)</div>', re.S)


def parse_en():
    src = subprocess.check_output(
        ["git", "show", EN_SRC_REV], text=True, encoding="utf-8"
    )
    title = H1.search(src).group(1).strip()

    # Walk the markup in order, so paragraphs stay attached to their section.
    token = re.compile(
        r'<h2[^>]*>(?P<h2>.*?)</h2>'
        r'|<h3[^>]*>(?P<h3>.*?)</h3>'
        r'|<div className="pt-4 space-y-2">(?P<addr>.*?)</div>'
        r'|<p dangerouslySetInnerHTML=\{\{ __html: "(?P<p>.*?)" \}\} />',
        re.S,
    )
    sections, current = [], None
    for m in token.finditer(src):
        if m.group("h2") is not None:
            current = {"heading": m.group("h2").strip(), "blocks": []}
            sections.append(current)
        elif current is None:
            continue  # the two brand lines above section 1
        elif m.group("h3") is not None:
            current["blocks"].append({"kind": "subheading", "text": m.group("h3").strip()})
        elif m.group("addr") is not None:
            lines = [x.strip() for x in PLAIN_P.findall(m.group("addr"))]
            current["blocks"].append({"kind": "address", "lines": lines})
        else:
            current["blocks"].append({"kind": "p", "text": m.group("p").strip()})
    return title, sections


def parse_fr():
    import docx

    doc = docx.Document(FR_DOCX)
    paras = [p.text.strip() for p in doc.paragraphs if p.text.strip()]

    title = "CONDITIONS GÉNÉRALES DE SÉJOUR"
    heading = re.compile(r"^\d{1,2}\.\s")
    sections, current = [], None
    for text in paras:
        if text in ("REFUGE61°", "BACK TO BASICS") and current is None:
            continue
        if heading.match(text):
            current = {"heading": text, "blocks": []}
            sections.append(current)
            continue
        if current is None:
            continue
        if text.upper() == "ORGANISATEUR":
            current["blocks"].append({"kind": "subheading", "text": "Organisateur"})
        elif "\n" in text:
            # The organiser block arrives as one paragraph of separate lines.
            current["blocks"].append(
                {"kind": "address", "lines": [l.strip() for l in text.split("\n") if l.strip()]}
            )
        else:
            current["blocks"].append({"kind": "p", "text": text})
    return title, sections


def ts_string(s):
    # The old page pushed these strings through dangerouslySetInnerHTML, which
    # decoded HTML entities. React escapes text nodes, so &apos; would now be
    # shown literally -- decode once, here, instead.
    s = html_mod.unescape(s)
    return '"' + s.replace("\\", "\\\\").replace('"', '\\"') + '"'


def emit(name, title, sections, out):
    out.write("const %s: TermsContent = {\n" % name)
    out.write("  title: %s,\n" % ts_string(title))
    out.write("  sections: [\n")
    for sec in sections:
        out.write("    {\n      heading: %s,\n      blocks: [\n" % ts_string(sec["heading"]))
        for b in sec["blocks"]:
            if b["kind"] == "address":
                out.write('        { kind: "address", lines: [%s] },\n'
                          % ", ".join(ts_string(l) for l in b["lines"]))
            else:
                out.write('        { kind: "%s", text: %s },\n' % (b["kind"], ts_string(b["text"])))
        out.write("      ],\n    },\n")
    out.write("  ],\n};\n\n")


def main():
    en_title, en = parse_en()
    fr_title, fr = parse_fr()
    print("EN sections: %d   FR sections: %d" % (len(en), len(fr)))
    if len(en) != len(fr):
        print("WARNING: section counts differ")

    out = io.StringIO()
    out.write('''// Terms & Conditions, English and French.
//
// Generated by _scripts/i18n/build_terms.py from two sources: the approved
// English page (parsed back out of its own JSX, so the wording cannot drift)
// and the French .docx the client sent on 2026-08-28.
//
// The English still carries its "[to be inserted]" placeholders -- company
// name, CVR number and email -- and the French carries the same gaps. They
// are the client's to fill once the company is incorporated.
//
// DO NOT EDIT BY HAND -- change the source documents and regenerate.

import type { Locale } from "@/lib/i18n";

export type TermsBlock =
  | { kind: "p"; text: string }
  | { kind: "subheading"; text: string }
  | { kind: "address"; lines: readonly string[] };

export type TermsSection = {
  heading: string;
  blocks: readonly TermsBlock[];
};

export type TermsContent = {
  title: string;
  sections: readonly TermsSection[];
};

''')
    emit("EN", en_title, en, out)
    emit("FR", fr_title, fr, out)
    out.write('export function termsContent(locale: Locale): TermsContent {\n'
              '  return locale === "fr" ? FR : EN;\n}\n')
    io.open(OUT, "w", encoding="utf-8").write(out.getvalue())
    print("wrote", OUT)

    json.dump({"en": en, "fr": fr},
              io.open("_scripts/i18n/_terms.json", "w", encoding="utf-8"),
              ensure_ascii=False, indent=1)


if __name__ == "__main__":
    main()
