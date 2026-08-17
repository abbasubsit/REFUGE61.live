import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { LODGE_COMFORT } from "@/lib/theLodge";

/**
 * /the-lodge frame 8 — the page's one section with no photograph, kept that
 * way deliberately: after seven image-led sections it reads as a pause, and
 * the content genuinely is a list.
 *
 * The mock-up set the closing statement in a rounded dark-green card. That's
 * dropped here — Mathieu's "timeless Scandinavian" note lists rounded cards
 * among the things to avoid, and the site has no card pattern anywhere else.
 * The same emphasis is carried by placement and type instead: the statement
 * sits opposite the list as a Fraunces italic pull-quote, matching the
 * treatment "Better shared than admired" already uses.
 */
export function ComfortList() {
  return (
    <section
      id="comfort"
      aria-labelledby="comfort-heading"
      className="bg-snow py-space-16 md:py-space-20"
    >
      <RevealOnScroll variant="fade" durationMs={800}>
        <div className="mx-auto max-w-[1440px] px-space-4 md:px-space-6 lg:px-space-8">
          <p className="text-eyebrow uppercase tracking-[0.12em] text-charcoal/60">
            {LODGE_COMFORT.eyebrow}
          </p>
          <h2
            id="comfort-heading"
            className="mt-space-3 max-w-[18ch] font-display text-display-m italic text-charcoal"
          >
            {LODGE_COMFORT.headline}
          </h2>

          <div className="mt-space-8 flex flex-col gap-space-8 md:flex-row md:gap-space-12">
            <ul className="flex w-full flex-col gap-space-3 md:w-[55%]">
              {LODGE_COMFORT.items.map((item) => (
                <li
                  key={item}
                  className="border-b border-charcoal/10 pb-space-3 text-body-l text-charcoal/80"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="w-full md:w-[45%]">
              <p className="max-w-[24ch] font-display text-heading-s italic text-charcoal">
                {LODGE_COMFORT.asideHeadline}
              </p>
              <p className="mt-space-4 max-w-[42ch] text-body-l text-charcoal/80">
                {LODGE_COMFORT.asideBody}
              </p>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
