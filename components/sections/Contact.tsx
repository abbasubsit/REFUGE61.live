import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { type Locale, t } from "@/lib/i18n";

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
export function Contact({ locale = "en" }: { locale?: Locale } = {}) {
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
        >{t(locale, "Your week begins here.")}</h2>

        {/* Price, added 2026-09-05: "we want to show our price a little more".
            Sits where the client marked it, between the headline and the
            reply line. The figure carries the display face so it reads as
            part of the statement rather than as small print. */}
        <p className="mt-space-6 font-display text-heading-s text-forest">
          {t(locale, "A different kind of week. €1,800 per person.")}
        </p>
        <p className="mt-space-2 max-w-[38ch] text-body-l text-charcoal/80">
          {t(locale, "And it all starts with a conversation.")}
        </p>

        <p className="mt-space-4 max-w-[38ch] text-body-l text-charcoal/80">
          {t(locale, "Write to us, and we'll reply personally.")}
        </p>
        <Button href="mailto:hello@refuge61.com" variant="primary" className="mt-space-8">
          {t(locale, "START A CONVERSATION")}
        </Button>
      </RevealOnScroll>
    </section>
  );
}
