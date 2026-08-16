import Image from "next/image";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { PillarV4 } from "@/lib/pillarsV4";

type PillarSectionProps = {
  pillar: PillarV4;
  reverse: boolean;
};

/**
 * Version 4 only — one image + one text column, alternating sides, used for
 * Move / Gather / Reset / Expedition. The image column intentionally reuses
 * Philosophy's exact proportions (`aspect-[4/5]` / `md:w-[55%]`, same
 * padding scale on the text side) per Mathieu Bonnier's explicit instruction
 * that every section should match "Better shared than admired"'s image size
 * — one consistent visual rhythm across the page, not a different photo
 * shape per section.
 */
export function PillarSection({ pillar, reverse }: PillarSectionProps) {
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
        </div>

        <div className="flex w-full flex-col justify-center px-space-4 py-space-12 md:w-[45%] md:px-space-8 md:py-space-20 lg:px-space-12">
          <p className="text-eyebrow uppercase tracking-[0.12em] text-charcoal/60">
            {pillar.eyebrow}
          </p>
          <h3 className="mt-space-3 max-w-[18ch] font-display text-display-m italic text-charcoal">
            {pillar.headline}
          </h3>
          <p className="mt-space-4 max-w-[42ch] text-body-l text-charcoal/80">
            {pillar.body}
          </p>
        </div>
      </div>
    </RevealOnScroll>
  );
}
