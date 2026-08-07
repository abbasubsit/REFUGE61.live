import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

/**
 * The page's last, smallest, quietest moment — deliberately imageless
 * (design-concepts.md: after five sections of photography, ending on
 * stillness reads as confidence, not an unfinished template).
 *
 * Copy revised 2026-08-07 per Mathieu Bonnier's feedback: "Begin your stay"
 * / "Send an Enquiry" read as hospitality-booking language. Replaced with
 * "Your week begins here" / "Start a conversation" — personal, not
 * commercial. Email placeholder changed from stay@ to hello@ for the same
 * reason (still a placeholder either way — needs a real address).
 *
 * Ships a working mailto: link rather than homepage-spec.md §8's original
 * 3-field enquiry form — a form with no backend to submit to isn't more
 * production-ready than a link that actually opens the visitor's mail
 * client, and the brief for this section asked for one heading, one
 * sentence, and one button, not a form.
 */
export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-cream py-space-12 md:py-space-20">
      <RevealOnScroll
        variant="fade-rise"
        durationMs={700}
        className="mx-auto flex max-w-[560px] flex-col items-center px-space-4 text-center"
      >
        <h2
          id="contact-heading"
          className="font-display text-display-m text-charcoal md:text-display-l"
        >
          Your week begins here.
        </h2>
        <p className="mt-space-4 max-w-[38ch] text-body-l text-charcoal/80">
          Write to us, and we&apos;ll reply personally.
        </p>
        <Button href="mailto:hello@refuge61.com" variant="primary" className="mt-space-8">
          Start a conversation
        </Button>
      </RevealOnScroll>
    </section>
  );
}
