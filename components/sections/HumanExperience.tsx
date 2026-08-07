import Image from "next/image";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { BottomScrim } from "@/components/ui/BottomScrim";

/**
 * Added 2026-08-07 per Mathieu Bonnier's feedback on the first draft: "the
 * lodge is the setting, but the human experience is the real subject."
 * This is the homepage's one dedicated moment for that idea — a single
 * image, a short statement, nothing else. Reuses the same full-bleed +
 * bottom-scrim treatment as Hero and Cinematic Video (the site's existing
 * language for "large, held" photography moments) rather than introducing
 * a new visual pattern.
 *
 * No literal "people cooking in a kitchen" photo exists in the asset
 * library (checked directly — see docs/asset-library.md §6). This uses the
 * closest genuine match found: a candlelit group dinner, seven people,
 * mid-conversation. Flagged for Mathieu to confirm this is the right image,
 * or to supply a stronger one if he has a specific photo in mind.
 */
export function HumanExperience() {
  return (
    <section
      id="together"
      aria-labelledby="together-heading"
      className="bg-snow py-space-12 md:py-space-20"
    >
      <RevealOnScroll variant="fade" durationMs={800}>
        <div className="relative h-[80vh] w-full overflow-hidden bg-charcoal">
          <Image
            src="/images/lifestyle/lifestyle-family-17.jpg"
            alt="Friends gathered around a candlelit table at REFUGE61, mid-conversation over dinner."
            fill
            sizes="100vw"
            className="object-cover"
          />

          <BottomScrim />

          <div className="absolute inset-x-0 bottom-0 px-space-4 pb-space-8 md:px-space-6 md:pb-space-12 lg:px-space-8">
            <h2
              id="together-heading"
              className="max-w-2xl font-display text-display-m text-snow md:text-display-l"
            >
              Live together, for one week.
            </h2>
            <p className="mt-space-2 text-body-l text-snow/85">
              Cooking, moving, and talking — together.
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
