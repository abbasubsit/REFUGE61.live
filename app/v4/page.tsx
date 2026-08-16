import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { Hero } from "@/components/sections/Hero";
import { Philosophy } from "@/components/sections/Philosophy";
import { CinematicVideo } from "@/components/sections/CinematicVideo";
import { PillarSection } from "@/components/sections/PillarSection";
import { Contact } from "@/components/sections/Contact";
import { BrandSignature } from "@/components/sections/BrandSignature";
import { PILLARS_V4, EXPEDITION_V4 } from "@/lib/pillarsV4";
import { NAV_ITEMS_V4 } from "@/lib/navigation";
import { HEADER_LOGO_V4 } from "@/lib/logoV4";

export const metadata: Metadata = {
  title: "REFUGE61 — Version 4",
};

// Version 4 (2026-08-14) — Mathieu Bonnier's third feedback round, applied
// on top of Version 2/3 (both untouched; see app/v2, app/v3). Four changes
// to the rhythm, all per his explicit notes:
//
//  1. Move/Gather/Reset get real explanatory copy (headline + paragraph),
//     not just a single word — same image proportions as Philosophy
//     throughout the page ("PLEASE USE SAME SIZE FOR PHOTO AS ... BETTER
//     SHARED"), via the shared PillarSection component.
//  2. Cinematic Video moves up, right after Philosophy and before
//     Move/Gather/Reset — "I feel the video comes too late in the page."
//  3. A new Expedition ("Go further") section, same image+text layout.
//  4. Gallery and Human Experience are both dropped from the Homepage:
//     Gallery per his explicit "avoid turning the Homepage into a large
//     gallery... we will already have a dedicated Gallery page." Human
//     Experience isn't in his own rhythm list at all — its "living
//     together" theme is now covered by Gather's expanded copy, and its
//     old image (a recognisable group dinner) is exactly what his new
//     no-identifiable-faces rule rules out. Neither component was edited
//     or deleted — just not imported here.
//
// Hero, Philosophy, Cinematic Video and Contact are the exact same
// components Version 2 uses, imported directly — he explicitly said keep
// all four as they are, so there's nothing V4-specific to build for them.
//
// 2026-08-16 — client-final logo delivery layered on top of the above:
// officialLogo swaps the nav's placeholder SVG for the real supplied files
// (see lib/logoV4.ts for which of the 12 delivered files were chosen and
// why), and BrandSignature adds the FULL lockup once, after Contact, as
// the page's one closing brand-signature moment.
export default function HomeV4() {
  return (
    <SiteShell navItems={NAV_ITEMS_V4} officialLogo={HEADER_LOGO_V4}>
      <Hero />
      <Philosophy />
      <CinematicVideo />

      <section id="experience" aria-labelledby="experience-heading" className="bg-snow">
        <h2 id="experience-heading" className="sr-only">
          The Experience
        </h2>
        {PILLARS_V4.map((pillar, index) => (
          <PillarSection key={pillar.id} pillar={pillar} reverse={index % 2 === 0} />
        ))}
      </section>

      <section id="expedition" aria-labelledby="expedition-heading" className="bg-snow">
        <h2 id="expedition-heading" className="sr-only">
          The Expedition
        </h2>
        <PillarSection pillar={EXPEDITION_V4} reverse={PILLARS_V4.length % 2 === 0} />
      </section>

      <Contact />
      <BrandSignature />
    </SiteShell>
  );
}
