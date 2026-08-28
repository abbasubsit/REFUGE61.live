import React from "react";
import Image from "next/image";
import { SiteShell } from "@/components/layout/SiteShell";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Accordion } from "@/components/ui/Accordion";
import { BottomScrim } from "@/components/ui/BottomScrim";
import { siteNavItems } from "@/lib/siteNav";
import { type Locale, t } from "@/lib/i18n";
import { HEADER_LOGO_V4, FULL_LOGO_V4 } from "@/lib/logoV4";
import { letsTalkContent } from "@/lib/content/letsTalk";
import { LetsTalkForm } from "@/components/sections/LetsTalkForm";

export function LetsTalkPage({ locale }: { locale: Locale }) {
  const { hero, hosts, beforeQuestionnaire, form, whatHappensNext, faq } =
    letsTalkContent(locale);

  return (
    <SiteShell
      navItems={siteNavItems(locale)}
      officialLogo={HEADER_LOGO_V4}
      footer={<SiteFooter locale={locale} />}
    >
      {/* 1. HERO */}
      {/* Aligned to the homepage hero (components/sections/Hero.tsx) 2026-08-22:
          same padding scale, headline ramp, BottomScrim, drop-shadow and
          load-time entrance animation. min-h (not h) so long copy can never
          be clipped on a short viewport. */}
      <section className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-charcoal">
        <div className="absolute inset-0 animate-hero-image motion-reduce:animate-none">
          <Image
            src="/images/client-update/lets-talk-hero.jpg"
            alt="Refuge61 - Let's Talk"
            fill
            priority
            sizes="100vw"
            quality={85}
            className="object-cover object-center"
          />
        </div>

        <BottomScrim />

        <div className="relative flex flex-1 flex-col justify-end px-space-4 pb-space-12 pt-24 md:px-space-6 md:pb-space-16 md:pt-28 lg:px-space-8">
          <div className="max-w-3xl text-snow">
            <p className="animate-fade-rise text-eyebrow uppercase tracking-[0.12em] text-snow mb-space-4 [text-shadow:0_1px_2px_rgba(0,0,0,0.95),0_2px_10px_rgba(0,0,0,0.85),0_4px_28px_rgba(0,0,0,0.7)] motion-reduce:animate-none">
              {hero.eyebrow}
            </p>
            <h1 className="animate-fade-rise font-display text-display-m text-snow [text-shadow:0_1px_2px_rgba(0,0,0,0.95),0_2px_10px_rgba(0,0,0,0.85),0_4px_28px_rgba(0,0,0,0.7)] [animation-delay:200ms] motion-reduce:animate-none md:text-display-l">
              {hero.headline}
            </h1>
           <div className="mt-space-2 max-w-md animate-fade-rise text-body-l text-snow [animation-delay:400ms] motion-reduce:animate-none space-y-space-4">
  {hero.paragraphs.map((p, i) => (
    <p
      key={i}
      className="rounded-sm bg-gradient-to-r from-black/60 via-black/30 to-transparent px-4 py-2 [text-shadow:0_1px_2px_rgba(0,0,0,0.95),0_2px_10px_rgba(0,0,0,0.75),0_4px_24px_rgba(0,0,0,0.55)]"
    >
      {p}
    </p>
  ))}
</div>
          </div>
        </div>
      </section>

      {/* 2. HOSTS — BJØRN & MATHIEU */}
      <section className="bg-snow py-space-8 md:py-space-12">

        {/* Bjørn & Mathieu */}
        <Container>
          <RevealOnScroll variant="fade" durationMs={800}>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-12 md:gap-space-16 mb-space-16">

              {/* Bjorn */}
              <div>
                <div className="flex items-center gap-space-4 mb-space-6">

                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full bg-cream md:h-28 md:w-28">
                    <Image
                      src="/images/hosts/host-bjorn-bw.jpg"
                      alt="Bjørn Jacob Haugum, co-host of REFUGE61."
                      fill
                      sizes="112px"
                      className="object-cover"
                    />
                  </div>

                  <h2 className="text-heading-s text-charcoal uppercase">
                    {hosts.bjorn.name}
                  </h2>

                </div>

                <div className="text-body-m text-charcoal/80 space-y-space-4">
                  {hosts.bjorn.bio.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>


              {/* Mathieu */}
              <div>
                <div className="flex items-center gap-space-4 mb-space-6">

                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full bg-cream md:h-28 md:w-28">
                    <Image
                      src="/images/hosts/host-mathieu-bw.jpg"
                      alt="Mathieu Bonnier, co-host of REFUGE61."
                      fill
                      sizes="112px"
                      className="object-cover"
                    />
                  </div>

                  <h2 className="text-heading-s text-charcoal uppercase">
                    {hosts.mathieu.name}
                  </h2>

                </div>

                <div className="text-body-m text-charcoal/80 space-y-space-4">
                  {hosts.mathieu.bio.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

            </div>

          </RevealOnScroll>
        </Container>
      </section>

      {/* =========================================================
          TOGETHER — premium editorial layout.
          Replaced two earlier variants (image-with-text-below and a
          centered layout) that were both rendering, so TOGETHER appeared
          twice on the page. Tokens corrected to the design system:
          text-heading-m, space-5, space-10 and space-24 do not exist
          (scale is 1,2,3,4,6,8,12,16,20).
          ========================================================= */}
      <RevealOnScroll variant="fade" durationMs={800}>
        <section className="w-full bg-cream">

          {/* Top large image */}
          <div className="relative aspect-[3/1] min-h-[260px] w-full overflow-hidden md:min-h-[340px]">
            <Image
              src="/images/hosts/host-together.jpg"
              alt="Bjørn and Mathieu standing in front of the REFUGE61 lodge"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-charcoal/5" />
          </div>

          <div className="mx-auto max-w-[1440px] px-space-4 py-space-16 md:px-space-8 md:py-space-20">

            {/* Section header — TOGETHER left, brand lockup right.
                Per Mathieu 2026-08-28: larger type for TOGETHER, and the full
                logo (which already carries "Back to Basics") on the right,
                replacing the separate line of text that used to sit at the
                foot of the right column. */}
            <div className="mb-space-12 grid grid-cols-1 items-center gap-space-6 md:mb-space-16 md:grid-cols-[5fr_7fr] md:gap-space-16">
              <div className="flex items-center gap-space-4">
                <div className="h-[2px] w-12 shrink-0 bg-charcoal/80" />
                <h2 className="font-display text-display-m uppercase tracking-widest text-charcoal">
                  {hosts.together.name}
                </h2>
              </div>

              {/* Sits in the same 7fr column as the body copy below, so the
                  lockup lines up with that text instead of drifting out to
                  the far page edge. */}
              <Image
                src={FULL_LOGO_V4.src}
                alt={FULL_LOGO_V4.alt}
                width={FULL_LOGO_V4.width}
                height={FULL_LOGO_V4.height}
                className="h-16 w-auto md:h-20"
              />
            </div>

            {/* Asymmetrical two-column layout */}
            <div className="grid grid-cols-1 items-start gap-space-12 md:grid-cols-[5fr_7fr] md:gap-space-16">

              {/* Left — pull quote */}
              <div className="space-y-space-6">
                <p className="font-display text-heading-s italic leading-snug text-charcoal">
                  {hosts.together.bio[0]}
                </p>
                <p className="text-body-m leading-relaxed text-charcoal/70 md:text-body-l">{t(locale, "REFUGE61° grew from that shared vision. It is not about following a programme or ticking boxes.")}</p>
              </div>

              {/* Right — detail */}
              <div className="space-y-space-6 text-body-m leading-relaxed text-charcoal/80 md:text-body-l">
                <p>{t(locale, "It is about living together for a few days in a special place, getting outside, sharing meals and experiences, and enjoying the rhythm of winter in the Norwegian mountains.")}</p>
                <p>{t(locale, "With REFUGE61°, we want to create the kind of week we would personally love to experience: simple, active and authentic, with time outdoors, good food, shared moments and the freedom to enjoy the mountains at your own pace.")}</p>

              </div>

            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* 3. BEFORE THE QUESTIONNAIRE */}
      <section className="bg-cream py-space-8 md:py-space-12 text-center">
        <Container>
          <RevealOnScroll variant="fade" durationMs={800}>
            <div className="max-w-2xl mx-auto">
              <h2 className="text-heading-s text-charcoal mb-space-6">
                {beforeQuestionnaire.headline}
              </h2>
              <div className="text-body-l text-charcoal/80 space-y-space-4">
                {beforeQuestionnaire.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      {/* Visual Break */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="/images/client-update/lets-talk-divider.jpg"
          alt="Refuge61 Guests"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </section>

      {/* 4. QUESTIONNAIRE */}
      <section className="bg-snow py-space-8 md:py-space-12">
        <Container>
            <div className="max-w-3xl mx-auto text-center mb-space-12">
              <h2 className="text-heading-s text-charcoal">
                {form.headline}
              </h2>
            </div>
            <LetsTalkForm locale={locale} />
          
        </Container>
      </section>

      {/* 7. WHAT HAPPENS NEXT */}
      <section className="bg-cream py-space-8 md:py-space-12 border-t border-charcoal/10">
        <Container>
          <RevealOnScroll variant="fade" durationMs={800}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-8 md:gap-space-12">
              {whatHappensNext.steps.map((step, i) => (
                <div key={i} className="flex flex-col text-center md:text-left">
                  <span className="text-display-l text-charcoal mb-space-4 leading-none">
                    {step.number}
                  </span>
                  <h3 className="text-eyebrow text-charcoal uppercase tracking-widest mb-space-2">
                    {step.title}
                  </h3>
                  <p className="text-body-m text-charcoal/80">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      {/* 8. FAQ */}
      <section className="bg-snow py-space-8 md:py-space-12">
        <Container>
          <RevealOnScroll variant="fade" durationMs={800}>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-heading-s text-charcoal mb-space-12 text-center md:text-left">{t(locale, "QUESTIONS & ANSWERS")}</h2>
              <Accordion items={faq} />
            </div>
          </RevealOnScroll>
        </Container>
      </section>
    </SiteShell>
  );
}
