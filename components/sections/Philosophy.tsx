import Image from "next/image";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { AiLabel } from "@/components/ui/AiLabel";

/**
 * Purpose: state what REFUGE61 is *for*, once, in prose — not to sell a
 * stay. Image and heading/paragraph fade in together as a single unit
 * (homepage-spec.md §4), never staggered — the pairing is meant to read as
 * one composed statement, not a sequence of beats.
 *
 * Image and copy revised 2026-08-07 per Mathieu Bonnier's feedback: the
 * bedroom photo that ran here read as accommodation marketing, and this is
 * the first major image after the Hero — too early to suggest a room.
 * Replaced with four skiers moving together at dusk (nature + companionship,
 * no building in frame), and rewrote the copy away from "architecture" /
 * "built to impress" language toward the shared, lived-in experience.
 *
 * The image column has no explicit height: with no aspect-ratio set at
 * md+ and next/image's `fill` contributing no intrinsic size, the flex
 * row's height is set entirely by the (short, by design) text column's
 * content, and the image stretches to match it — full-bleed, no letterboxing.
 */
export function Philosophy() {
  return (
    <section id="philosophy" aria-labelledby="philosophy-heading" className="bg-snow">
      <RevealOnScroll variant="fade" durationMs={800}>
        <div className="flex flex-col md:flex-row">
          <div className="relative aspect-[4/5] w-full md:aspect-auto md:w-[55%]">
            <Image
              src="/images/lifestyle/admire.png"
              alt="Four skiers moving together across the snow at dusk, silhouetted against the sky."
              fill
              sizes="(min-width: 768px) 55vw, 100vw"
              className="object-cover"
            />
            <AiLabel src="/images/lifestyle/admire.png" />
          </div>

          <div className="flex w-full flex-col justify-center px-space-4 py-space-12 md:w-[45%] md:px-space-8 md:py-space-20 lg:px-space-12">
            <h2
              id="philosophy-heading"
              className="max-w-[16ch] font-display text-display-m italic text-charcoal"
            >
              Better shared than admired.
            </h2>
            <p className="mt-space-4 max-w-[42ch] text-body-l text-charcoal/80">
              REFUGE61 sits above the treeline for those who come to move
              through the mountains by day and gather around the table by
              night.
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
