import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PillarSection } from "@/components/sections/PillarSection";
import { Contact } from "@/components/sections/Contact";
import { PRACTICAL_INFO_SECTIONS } from "@/lib/practicalInfo";
import { SITE_NAV_ITEMS } from "@/lib/siteNav";
import { HEADER_LOGO_V4 } from "@/lib/logoV4";

export const metadata: Metadata = {
  title: "Practical Information — REFUGE61",
  description:
    "What to bring for a week at REFUGE61, and how to step from the lodge directly onto 650 kilometres of groomed cross-country ski tracks.",
};

// /practical-information (2026-08-16) — a dedicated editorial page, not a
// hotel-info page. Reuses PillarSection (built for Version 4's pillars,
// generalized to take PillarContent so it isn't coupled to V4's data — see
// components/sections/PillarSection.tsx) for the same image-left/text-right,
// then text-left/image-right rhythm as "Better shared than admired," with
// identical image proportions. Contact is reused unchanged as the closing
// CTA — no new "book now" language invented.
//
// Nav is real routes (Home/The Lodge/Practical Information/Let's Talk), not
// this site's usual same-page anchors — see lib/siteNav.ts for why The
// Lodge and Let's Talk 404 for now (out of scope for this task, and the
// client's own instructions treat /lets-talk as a known future route).
// SiteFooter is new (nothing existed to reuse) and is only wired into this
// page, not retrofitted onto /, /v2, /v3 or /v4.
export default function PracticalInformationPage() {
  return (
    <SiteShell
      navItems={SITE_NAV_ITEMS}
      officialLogo={HEADER_LOGO_V4}
      alwaysSolid
      footer={<SiteFooter />}
    >
      <div className="pt-16 md:pt-20">
        <div className="mx-auto max-w-[1440px] px-space-4 py-space-16 md:px-space-6 md:py-space-20 lg:px-space-8">
          <h1 className="max-w-[20ch] font-display text-display-m text-charcoal md:text-display-l">
            Practical Information
          </h1>
        </div>

        {PRACTICAL_INFO_SECTIONS.map((section, index) => (
          <PillarSection
            key={section.id}
            pillar={section}
            reverse={index % 2 === 1}
            headingLevel="h2"
          />
        ))}

        <Contact />
      </div>
    </SiteShell>
  );
}
