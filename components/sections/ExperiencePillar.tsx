import Image from "next/image";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { ExperiencePillar as ExperiencePillarData } from "@/lib/experience";

type ExperiencePillarProps = {
  pillar: ExperiencePillarData;
  delayMs: number;
};

/**
 * Static — no hover-scale, no click target (homepage-spec.md §5: this
 * section is looked at, not clicked through; Gallery Preview is the
 * section with an interactive cue). Image and its single-word label are
 * the entire statement — no supporting sentence.
 */
export function ExperiencePillar({ pillar, delayMs }: ExperiencePillarProps) {
  return (
    <RevealOnScroll variant="fade-rise" durationMs={600} delayMs={delayMs}>
      <div>
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-cream">
          <Image
            src={pillar.image}
            alt={pillar.alt}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover"
          />
        </div>
        <h3 className="mt-space-3 text-eyebrow uppercase tracking-[0.12em] text-charcoal">
          {pillar.label}
        </h3>
      </div>
    </RevealOnScroll>
  );
}
