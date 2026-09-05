# -*- coding: utf-8 -*-
r"""
Build lib/content/terms.ts from the three source documents.

  English  the approved page, parsed back out of its own JSX at the last
           commit that still held it, so the wording cannot drift
  French   "REFUGE61 Terms&Conditions FR.docx"          (client, 2026-08-28)
  Danish   "REFUGE61_Handels_og_rejsebetingelser_DK.docx" (Bjørn, 2026-08-29)

All three carry the same twenty numbered sections, so they collapse to one
shape: a title, two brand lines, then sections of blocks. A block is a
paragraph, the "Organiser" sub-heading, or the organiser's address, which
arrives as one paragraph of separate lines and is rendered as a tight group.

Note on the Danish: its opening organiser block carries the real company
details (Refuge61 ApS, CVR 46711939) while its closing block still reads
"[Juridisk selskabsnavn]" and "CVR: [indsættes]". That inconsistency is in the
client's own document and is reproduced faithfully rather than silently fixed
-- see the note in the generated file.

Run: python _scripts/i18n/build_terms.py
"""
import glob
import html as html_mod
import io
import json
import os
import re
import subprocess

DESKTOP = os.path.join("C:", os.sep, "Users", "Abbas", "OneDrive", "Desktop", "noman")

# The English lives only in history and in the generated module now:
# app/terms/page.tsx became a thin route wrapper.
EN_SRC_REV = "77780fe:app/terms/page.tsx"
FR_DOCX = os.path.join(DESKTOP, "REFUGE61 Terms&Conditions FR.docx")
DA_GLOB = os.path.join(DESKTOP, "**", "*Handels_og_rejsebetingelser*.docx")
OUT = "lib/content/terms.ts"

H1 = re.compile(r"<h1[^>]*>(.*?)</h1>", re.S)
PLAIN_P = re.compile(r"<p>(.*?)</p>")
NUMBERED = re.compile(r"^\d{1,2}\.\s")
BRAND_LINES = {"REFUGE61°", "BACK TO BASICS", "Back to Basics"}


def parse_en():
    src = subprocess.check_output(
        ["git", "show", EN_SRC_REV], text=True, encoding="utf-8"
    )
    title = H1.search(src).group(1).strip()

    token = re.compile(
        r"<h2[^>]*>(?P<h2>.*?)</h2>"
        r"|<h3[^>]*>(?P<h3>.*?)</h3>"
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
            current["blocks"].append(
                {"kind": "subheading", "text": m.group("h3").strip()}
            )
        elif m.group("addr") is not None:
            current["blocks"].append(
                {"kind": "address",
                 "lines": [x.strip() for x in PLAIN_P.findall(m.group("addr"))]}
            )
        else:
            current["blocks"].append({"kind": "p", "text": m.group("p").strip()})
    return title, sections


def parse_docx(path, title, organiser_word):
    """The two translated documents share one shape; only the word that marks
    the organiser block differs."""
    import docx

    paras = [p.text.strip() for p in docx.Document(path).paragraphs if p.text.strip()]
    sections, current = [], None
    for text in paras:
        if current is None and text in BRAND_LINES:
            continue
        if NUMBERED.match(text):
            current = {"heading": text, "blocks": []}
            sections.append(current)
            continue
        if current is None:
            continue
        if text.lower() == organiser_word.lower():
            current["blocks"].append({"kind": "subheading", "text": organiser_word})
        elif "\n" in text:
            current["blocks"].append(
                {"kind": "address",
                 "lines": [l.strip() for l in text.split("\n") if l.strip()]}
            )
        else:
            current["blocks"].append({"kind": "p", "text": text})
    return title, sections


def parse_fr():
    return parse_docx(FR_DOCX, "CONDITIONS GÉNÉRALES DE SÉJOUR", "Organisateur")


def parse_da():
    matches = glob.glob(DA_GLOB, recursive=True)
    if not matches:
        raise SystemExit("Danish terms document not found")
    return parse_docx(matches[0], "HANDELS- OG REJSEBETINGELSER", "Arrangør")


# Bjørn supplied the company name and CVR number on 2026-08-29, in the Danish
# document. They belong on all three language versions, so the placeholders the
# other two still carry are filled here rather than left visible on a public
# legal page. The Danish document itself is inconsistent -- its opening block
# has the real values while its closing block still has placeholders -- and
# that is corrected too.
#
COMPANY_NAME = "Refuge61 ApS"
CVR = "46711939"
# The mailbox was created at one.com on 2026-09-05. It is the shared address
# rather than either host's personal one, so the page does not have to change
# if one of them steps back from the day-to-day.
EMAIL = "hello@refuge61.com"

ADDRESS_FIXUPS = {
    # English
    "[Legal company name to be inserted once incorporated]": COMPANY_NAME,
    "CVR no.: [to be inserted]": "CVR no.: " + CVR,
    "Email: [to be inserted]": "Email: " + EMAIL,
    # French
    "[Raison sociale à compléter après la création de la société]": COMPANY_NAME,
    "N° CVR : [à compléter]": "N° CVR : " + CVR,
    "E-mail : [à compléter]": "E-mail : " + EMAIL,
    # Danish -- "name: " is a stray label from his template
    "name: Refuge61 Aps": COMPANY_NAME,
    "[Juridisk selskabsnavn]": COMPANY_NAME,
    "CVR: [indsættes]": "CVR: " + CVR,
    "E-mail: [indsættes]": "E-mail: " + EMAIL,
}


def fix_address(lines):
    return [ADDRESS_FIXUPS.get(l, l) for l in lines]


def ts_string(s):
    # The old English page pushed its text through dangerouslySetInnerHTML,
    # which decoded HTML entities. React escapes text nodes, so &apos; would
    # otherwise be shown literally -- decode once, here.
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
                          % ", ".join(ts_string(l) for l in fix_address(b["lines"])))
            else:
                out.write('        { kind: "%s", text: %s },\n'
                          % (b["kind"], ts_string(b["text"])))
        out.write("      ],\n    },\n")
    out.write("  ],\n};\n\n")


HEADER = '''// Terms & Conditions, in English, French and Danish.
//
// Generated by _scripts/i18n/build_terms.py from three sources: the approved
// English page (parsed back out of its own JSX, so the wording cannot drift),
// the French .docx the client sent on 2026-08-28, and the Danish .docx Bjørn
// sent on 2026-08-29.
//
// The company name and CVR number arrived on 2026-08-29, inside the Danish
// document: Refuge61 ApS, CVR 46711939. They are filled into all three
// languages by the generator, so no public legal page shows a placeholder
// where the registered company should be. The Danish document is itself
// inconsistent -- its opening block has the real values while its closing
// block still reads "[Juridisk selskabsnavn]" -- and that is corrected too.
//
// The email address followed on 2026-09-05, once the hello@refuge61.com
// mailbox existed at one.com. This page now carries no placeholders in any
// language.
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

'''


def main():
    en_title, en = parse_en()
    fr_title, fr = parse_fr()
    da_title, da = parse_da()

    print("sections -- EN: %d  FR: %d  DA: %d" % (len(en), len(fr), len(da)))
    if not (len(en) == len(fr) == len(da)):
        print("WARNING: section counts differ")

    out = io.StringIO()
    out.write(HEADER)
    emit("EN", en_title, en, out)
    emit("FR", fr_title, fr, out)
    emit("DA", da_title, da, out)
    out.write(
        "const BY_LOCALE: Record<Locale, TermsContent> = {\n"
        "  en: EN,\n  fr: FR,\n  da: DA,\n};\n\n"
        "export function termsContent(locale: Locale): TermsContent {\n"
        "  return BY_LOCALE[locale];\n}\n"
    )
    io.open(OUT, "w", encoding="utf-8").write(out.getvalue())
    print("wrote", OUT)

    json.dump({"en": en, "fr": fr, "da": da},
              io.open("_scripts/i18n/_terms.json", "w", encoding="utf-8"),
              ensure_ascii=False, indent=1)


if __name__ == "__main__":
    main()
