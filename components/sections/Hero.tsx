import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { BottomScrim } from "@/components/ui/BottomScrim";

/**
 * Full-bleed, single static image — no client JS of its own. Every visual
 * beat (image reveal, headline/sub-line/CTA stagger) is a CSS `animation`
 * defined once in app/globals.css and applied here via className, so this
 * section ships zero bytes of client-side JavaScript on its own (only
 * ScrollIndicator, a small isolated child, is a client component).
 *
 * See docs/homepage-spec.md §3 for the full spec this implements.
 */
export function Hero() {
  return (
    <section
      id="hero"
      aria-label="REFUGE61 — a refuge above the treeline"
      className="relative h-[100svh] w-full overflow-hidden bg-charcoal"
    >
      <div className="absolute inset-0 animate-hero-image motion-reduce:animate-none">
        <Image
          src="/images/hero/hero-bw-frost-facade.jpg"
          alt="Frost-covered carved timber facade of the REFUGE61 lodge, photographed in black and white."
          fill
          priority
          sizes="100vw"
          quality={85}
          className="object-cover object-[70%_35%] md:object-[62%_40%]"
        />
      </div>

      <BottomScrim />

      <div className="relative flex h-full flex-col justify-end px-space-4 pb-space-12 md:px-space-6 md:pb-space-16 lg:px-space-8">
        <div className="max-w-3xl">
          <h1 className="animate-fade-rise font-display text-display-m text-snow [animation-delay:200ms] motion-reduce:animate-none md:text-display-l lg:text-display-xl">
            A refuge above the treeline
          </h1>
          {/* PLACEHOLDER COPY — needs Mathieu's confirmation (2026-08-07 feedback):
              "reimagined" removed (REFUGE61 didn't invent this place); this
              gestures at continuity/authenticity instead, but the specific
              framing ("old", "still lived in") is a guess, not a fact he's
              confirmed. Replace once he approves the actual history/wording. */}
          <p className="mt-space-2 max-w-md animate-fade-rise text-body-l text-snow/85 [animation-delay:400ms] motion-reduce:animate-none">
            An old hunting lodge, still lived in — shared for a week.
          </p>
          <div className="mt-space-4 animate-fade-rise [animation-delay:550ms] motion-reduce:animate-none">
            <Button href="#philosophy" variant="ghost">
              Discover the Estate
            </Button>
          </div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
