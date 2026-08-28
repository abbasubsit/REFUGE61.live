import Image from "next/image";

import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { BottomScrim } from "@/components/ui/BottomScrim";
import { type Locale, t } from "@/lib/i18n";

/**
 * Full-bleed, single static image — no client JS of its own. Every visual
 * beat (image reveal, headline/sub-line/CTA stagger) is a CSS `animation`
 * defined once in app/globals.css and applied here via className, so this
 * section ships zero bytes of client-side JavaScript on its own (only
 * ScrollIndicator, a small isolated child, is a client component).
 *
 * See docs/homepage-spec.md §3 for the full spec this implements.
 */
export function Hero({ locale = "en" }: { locale?: Locale } = {}) {
  return (
    <section
      id="hero"
      aria-label="REFUGE61 — a refuge above the treeline"
      className="relative h-[100svh] w-full overflow-hidden bg-charcoal"
    >
      <div className="absolute inset-0 animate-hero-image motion-reduce:animate-none">
        <Image
          src="/images/hero/hero.png"
          alt="Frost-covered carved timber facade of the REFUGE61 lodge, photographed in black and white."
          fill
          priority
          sizes="100vw"
          quality={85}
          className="object-cover object-[70%_35%] md:object-[62%_40%]"
        />
      </div>

      <BottomScrim />

      {/* Top scrim — the logo and nav links are white and this photograph is
          a pale sky behind them, so without this they wash out (client note,
          2026-08-26: "I think people'll not see our logo, it's too clear").
          Darkens only the header band and fades out well above the headline,
          so the photograph itself is untouched. Same treatment already used
          on /practical-information. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-charcoal/60 via-charcoal/25 to-transparent"
      />

      <div className="relative flex h-full flex-col justify-end px-space-4 pb-space-12 md:px-space-6 md:pb-space-16 lg:px-space-8">
        <div className="max-w-3xl">
          <h1 className="animate-fade-rise font-display text-display-m text-snow drop-shadow-[0_3px_8px_rgba(0,0,0,0.65)] [animation-delay:200ms] motion-reduce:animate-none md:text-display-l lg:text-display-xl">{t(locale, "A refuge above the treeline")}</h1>
          {/* Copy confirmed 2026-08-14 per Mathieu Bonnier's feedback on the
              first build — replaces the earlier placeholder sub-line. */}
         <div className="mt-space-2 max-w-lg animate-fade-rise rounded-sm bg-gradient-to-r from-black/45 via-black/25 to-transparent px-3 py-2 [animation-delay:400ms] motion-reduce:animate-none">
  <p className="max-w-md text-body-l text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">{t(locale, "A remote Norwegian lodge. One week. A small group. Nature, movement and shared life.")}</p>
</div>
          <div className="mt-space-4 animate-fade-rise [animation-delay:550ms] motion-reduce:animate-none">
            
          </div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
