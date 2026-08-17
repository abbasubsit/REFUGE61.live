import Image from "next/image";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";

type FullBleedStatementProps = {
  id?: string;
  eyebrow?: string;
  headline: string;
  body: string;
  image: string;
  alt: string;
  /** CSS object-position for the image, when centre-cropping loses the subject. */
  objectPosition?: string;
  /** Small print between the body and the CTA (the closing frame's signature/note). */
  signature?: string;
  note?: string;
  ctaLabel?: string;
  ctaHref?: string;
  /** "hero" fills the viewport and skips the scroll reveal (it's already on
   *  screen at load); "section" is the shorter mid-page treatment. */
  variant?: "hero" | "section";
  headingLevel?: "h1" | "h2";
  priority?: boolean;
  /**
   * How far up the frame the bottom gradient reaches. "tall" is for the
   * closing frame, which stacks headline + body + signature + note + CTA
   * and so pushes its top line much higher than the other two.
   */
  scrim?: "medium" | "tall";
};

/**
 * A single photograph held full width with the text sitting over its lower
 * portion — the site's existing language for "large, held" moments (Hero,
 * HumanExperience, CinematicVideo).
 *
 * Built for /the-lodge, which needs this treatment three times (the opening
 * frame, "Reset", and the closing statement) with slightly different
 * content each time — hence one parameterised component instead of three
 * near-identical ones.
 *
 * Uses its own gradient rather than the shared <BottomScrim>: two of the
 * three photographs here are bright exactly where the text sits (a pale
 * sheepskin in the living room; sunlit snow through the arches), and
 * BottomScrim's 35%/70% falloff left the body copy unreadable on both.
 * This is the same idea — a bottom-anchored gradient, never a full-frame
 * tint, so the photograph still reads as a photograph — just carried
 * further up the frame. Kept local so Hero / HumanExperience /
 * CinematicVideo on /, /v2, /v3 and /v4 are untouched.
 */
export function FullBleedStatement({
  id,
  eyebrow,
  headline,
  body,
  image,
  alt,
  objectPosition,
  signature,
  note,
  ctaLabel,
  ctaHref,
  variant = "section",
  headingLevel = "h2",
  priority = false,
  scrim = "medium",
}: FullBleedStatementProps) {
  const Heading = headingLevel;
  const isHero = variant === "hero";

  const frame = (
    <div
      className={`relative w-full overflow-hidden bg-charcoal ${
        isHero ? "h-[100svh]" : "h-[80vh]"
      }`}
    >
      <Image
        src={image}
        alt={alt}
        fill
        priority={priority}
        sizes="100vw"
        quality={85}
        style={objectPosition ? { objectPosition } : undefined}
        className="object-cover"
      />

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/85 via-charcoal/45 to-transparent ${
          scrim === "tall" ? "h-[85%]" : "h-[60%]"
        }`}
      />

      <div className="absolute inset-x-0 bottom-0 px-space-4 pb-space-8 md:px-space-6 md:pb-space-12 lg:px-space-8">
        {eyebrow && (
          <p className="text-eyebrow uppercase tracking-[0.12em] text-snow/70">{eyebrow}</p>
        )}
        <Heading
          className={`mt-space-2 max-w-2xl font-display text-display-m text-snow md:text-display-l ${
            isHero ? "lg:text-display-xl" : ""
          }`}
        >
          {headline}
        </Heading>
        <p className="mt-space-3 max-w-[52ch] text-body-l text-snow/85">{body}</p>

        {signature && (
          <p className="mt-space-6 text-eyebrow uppercase tracking-[0.12em] text-snow">
            {signature}
          </p>
        )}
        {note && <p className="mt-space-2 max-w-[52ch] text-body-m text-snow/80">{note}</p>}

        {ctaLabel && ctaHref && (
          <div className="mt-space-4">
            <Button href={ctaHref} variant="ghost">
              {ctaLabel}
            </Button>
          </div>
        )}
      </div>
    </div>
  );

  // The hero is above the fold at load — wrapping it in a scroll reveal
  // would leave it invisible until the observer fires.
  if (isHero) {
    return (
      <section id={id} aria-label={headline} className="bg-charcoal">
        {frame}
      </section>
    );
  }

  return (
    <section id={id} aria-label={headline} className="bg-snow py-space-12 md:py-space-20">
      <RevealOnScroll variant="fade" durationMs={800}>
        {frame}
      </RevealOnScroll>
    </section>
  );
}
