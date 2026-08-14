import Image from "next/image";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { ExperiencePillar as ExperiencePillarData } from "@/lib/experience";

type ExperiencePillarProps = {
  pillar: ExperiencePillarData;
  reverse: boolean;
};

/**
 * Revised 2026-08-14 per Mathieu Bonnier's feedback: the three pillars no
 * longer sit side by side as a three-up mosaic — his opening principle
 * ("remove the mosaics, the three-small-images layouts") names this exact
 * pattern. Each pillar is now its own full-width image/text split, same
 * proportions as Philosophy, alternating sides so the page keeps reading
 * image-left/text-right, then text-left/image-right as it scrolls. Image
 * and its single-word label are still the entire statement — no supporting
 * sentence added.
 */
export function ExperiencePillar({ pillar, reverse }: ExperiencePillarProps) {
  return (
    <RevealOnScroll variant="fade-rise" durationMs={700}>
      <div className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""}`}>
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
          <h3 className="font-display text-display-m uppercase tracking-wide text-charcoal">
            {pillar.label}
          </h3>
        </div>
      </div>
    </RevealOnScroll>
  );
}
