# -*- coding: utf-8 -*-
"""
Swap the long chalet history on The Lodge for the client's shorter rewrite.

His first draft ran to six dense paragraphs plus a five-entry ownership
timeline; the replacement is a lead line, four short paragraphs and a closing
line, in both languages. The timeline goes with it -- there are no longer
enough dates to justify one.
"""
import io
import re

PATH = "components/pages/LodgePage.tsx"

NEW = '''      {/* =========================================================
          9. THE STORY OF BJORKASEN
          The client replaced his own longer draft on 2026-08-29 ("I made
          shorter history of THE LODGE, FR and EN") and supplied both
          languages himself, so the copy lives in lib/content/history.ts
          rather than going through the translation spreadsheet.

          The earlier version's ownership timeline is gone with it: four
          short paragraphs no longer carry enough dates to justify one.
          Kept from that version: the full-bleed black-and-white facade --
          the Swiss-style building the text describes -- and the forest
          ground, which sets the section apart from the present-day content
          above it.
          ========================================================= */}
      <section className="w-full bg-forest">

        {/* Full-bleed facade, title overlaid */}
        <div className="relative aspect-[16/9] w-full overflow-hidden md:aspect-[21/9]">
          <Image
            src="/images/hero/hero-bw-facade-east.jpg"
            alt="The east facade of the Bjorkasen hunting lodge in winter"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-forest via-forest/45 to-charcoal/25"
          />
          <div className="absolute inset-x-0 bottom-0 px-space-4 pb-space-8 md:px-space-8 md:pb-space-12 lg:px-space-12">
            <div className="mx-auto max-w-[1440px]">
              <p className="text-eyebrow uppercase tracking-[0.12em] text-snow/70 mb-space-2">
                {history.eyebrow}
              </p>
              <h2 className="font-display text-display-m text-snow md:text-display-l">
                {history.title}
              </h2>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[1440px] px-space-4 py-space-12 md:px-space-8 md:py-space-16 lg:px-space-12">

          <p className="max-w-[40ch] font-display text-heading-s italic leading-snug text-snow">
            {history.lead}
          </p>

          {/* Four short paragraphs, balanced across two columns so no single
              column runs long on a wide screen. */}
          <div className="mt-space-8 grid grid-cols-1 gap-space-6 md:mt-space-12 md:grid-cols-2 md:gap-space-16">
            <div className="space-y-space-6 text-body-m leading-relaxed text-snow/75 md:text-body-l">
              {history.paragraphs.slice(0, 2).map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="space-y-space-6 text-body-m leading-relaxed text-snow/75 md:text-body-l">
              {history.paragraphs.slice(2).map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>

          {/* Closing line, set apart -- it is the point the section builds to. */}
          <p className="mt-space-12 max-w-[60ch] border-t border-snow/20 pt-space-8 font-display text-heading-s italic leading-snug text-snow md:mt-space-16">
            {history.closing}
          </p>

        </div>
      </section>
'''


def main():
    src = io.open(PATH, encoding="utf-8").read()

    start = src.index("      {/* =========================================================\n          9. HISTORY OF THE CHALET")
    end = src.index("    </SiteShell>")
    src = src[:start] + NEW + "\n" + src[end:]

    src = src.replace(
        'import { type Locale, t } from "@/lib/i18n";',
        'import { type Locale, t } from "@/lib/i18n";\nimport { historyContent } from "@/lib/content/history";',
    )
    src = src.replace(
        "export function LodgePage({ locale }: { locale: Locale }) {",
        "export function LodgePage({ locale }: { locale: Locale }) {\n"
        "  const history = historyContent(locale);\n",
    )
    io.open(PATH, "w", encoding="utf-8").write(src)
    print("history section replaced")


if __name__ == "__main__":
    main()
