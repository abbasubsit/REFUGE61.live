import Image from "next/image";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { AiLabel } from "@/components/ui/AiLabel";

export type PillarContent = {
  id: string;
  eyebrow: string;
  headline: string;
  body: string;
  image: string;
  alt: string;
};

type PillarSectionProps = {
  pillar: PillarContent;
  reverse: boolean;
  /** "h3" (default) matches Version 4, where each pillar nests under its own
   *  sr-only h2 wrapper. Pages with no such wrapper (e.g. /practical-information,
   *  where each section sits directly under the page's own h1) should pass "h2". */
  headingLevel?: "h2" | "h3";
};

/**
 * One image + one text column, alternating sides. Built for Version 4's
 * Move/Gather/Reset/Expedition (lib/pillarsV4.ts) and reused as-is by
 * /practical-information (lib/practicalInfo.ts) — both data sources satisfy
 * PillarContent structurally, so this component doesn't need to know which
 * page is using it. The image column intentionally reuses Philosophy's
 * exact proportions (`aspect-[4/5]` / `md:w-[55%]`, same padding scale on
 * the text side) per Mathieu Bonnier's explicit instruction that every
 * section should match "Better shared than admired"'s image size — one
 * consistent visual rhythm across the whole site, not a different photo
 * shape per section or per page.
 */
export function PillarSection({ pillar, reverse, headingLevel = "h3" }: PillarSectionProps) {
  const Heading = headingLevel;
  const paragraphs = pillar.body.split(/\n\n+/);

  return (
    <RevealOnScroll variant="fade" durationMs={800}>
      <div
        id={pillar.id}
        className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""}`}
      >
        <div className="relative aspect-[4/5] w-full md:aspect-auto md:w-[55%]">
          <Image
            src={pillar.image}
            alt={pillar.alt}
            fill
            sizes="(min-width: 768px) 55vw, 100vw"
            className="object-cover"
          />
          <AiLabel src={pillar.image} />
        </div>

        <div className="flex w-full flex-col justify-center px-space-4 py-space-12 md:w-[45%] md:px-space-8 md:py-space-20 lg:px-space-12">
          <p className="text-eyebrow uppercase tracking-[0.12em] text-charcoal/60">
            {pillar.eyebrow}
          </p>
          <Heading className="mt-space-3 max-w-[18ch] font-display text-display-m italic text-charcoal">
            {pillar.headline}
          </Heading>
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={`max-w-[42ch] text-body-l text-charcoal/80 ${
                index === 0 ? "mt-space-4" : "mt-space-3"
              }`}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </RevealOnScroll>
  );
}
