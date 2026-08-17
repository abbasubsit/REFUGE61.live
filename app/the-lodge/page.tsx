import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FullBleedStatement } from "@/components/sections/FullBleedStatement";
import { PillarSection } from "@/components/sections/PillarSection";
import { ComfortList } from "@/components/sections/ComfortList";
import {
  LODGE_HERO,
  LODGE_SECTIONS,
  LODGE_RESET,
  LODGE_CLOSING,
} from "@/lib/theLodge";
import { SITE_NAV_ITEMS } from "@/lib/siteNav";
import { HEADER_LOGO_V4 } from "@/lib/logoV4";

export const metadata: Metadata = {
  title: "The Lodge — REFUGE61",
  description:
    "A Norwegian mountain lodge above the treeline: warm rooms, a shared table, a fire, and direct access to the snow. Remote, simple, and made to be lived in.",
};

// /the-lodge (2026-08-16) — built from Mathieu Bonnier's "The Lodge"
// mock-up PDF. His 9-frame sequence and copy are followed exactly; the
// multi-image mosaic layouts in frames 3/4/7 are rendered as single
// image + text sections instead, per his earlier written direction and to
// stay consistent with the approved homepage. See lib/theLodge.ts for the
// full reasoning and for the two image substitutions made under his
// no-identifiable-faces rule.
//
// Nav opens transparent over the dark aurora hero (no alwaysSolid), the
// same behaviour as every Hero-led page.
export default function TheLodgePage() {
  return (
    <SiteShell
      navItems={SITE_NAV_ITEMS}
      officialLogo={HEADER_LOGO_V4}
      footer={<SiteFooter />}
    >
      <FullBleedStatement
        id="lodge-hero"
        variant="hero"
        headingLevel="h1"
        priority
        eyebrow={LODGE_HERO.eyebrow}
        headline={LODGE_HERO.headline}
        body={LODGE_HERO.body}
        image={LODGE_HERO.image}
        alt={LODGE_HERO.alt}
      />

      {/* Frames 2–5: alternating sides, preserving the mock-up's own
          left/right assignment per frame. */}
      {LODGE_SECTIONS.slice(0, 4).map((section, index) => (
        <PillarSection
          key={section.id}
          pillar={section}
          reverse={index % 2 === 0}
          headingLevel="h2"
        />
      ))}

      <FullBleedStatement
        id="reset"
        eyebrow={LODGE_RESET.eyebrow}
        headline={LODGE_RESET.headline}
        body={LODGE_RESET.body}
        image={LODGE_RESET.image}
        alt={LODGE_RESET.alt}
        objectPosition={LODGE_RESET.objectPosition}
      />

      {/* Frame 7 — continues the alternation past the full-bleed break. */}
      {LODGE_SECTIONS.slice(4).map((section) => (
        <PillarSection key={section.id} pillar={section} reverse headingLevel="h2" />
      ))}

      <ComfortList />

      <FullBleedStatement
        id="closing"
        scrim="tall"
        headline={LODGE_CLOSING.headline}
        body={LODGE_CLOSING.body}
        image={LODGE_CLOSING.image}
        alt={LODGE_CLOSING.alt}
        signature={LODGE_CLOSING.signature}
        note={LODGE_CLOSING.note}
        ctaLabel={LODGE_CLOSING.ctaLabel}
        ctaHref={LODGE_CLOSING.ctaHref}
      />
    </SiteShell>
  );
}
