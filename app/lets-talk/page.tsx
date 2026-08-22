import React from "react";
import Image from "next/image";
import { SiteShell } from "@/components/layout/SiteShell";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Accordion } from "@/components/ui/Accordion";
import { BottomScrim } from "@/components/ui/BottomScrim";
import { SITE_NAV_ITEMS } from "@/lib/siteNav";
import { HEADER_LOGO_V4 } from "@/lib/logoV4";
import { LETS_TALK_CONTENT } from "@/lib/content/letsTalk";
import { LetsTalkForm } from "@/components/sections/LetsTalkForm";

export const metadata = {
  title: "Let's Talk | REFUGE61",
};

export default function LetsTalkPage() {
  const { hero, hosts, beforeQuestionnaire, form, whatHappensNext, faq } =
    LETS_TALK_CONTENT;

  return (
    <SiteShell
      navItems={SITE_NAV_ITEMS}
      officialLogo={HEADER_LOGO_V4}
      footer={<SiteFooter />}
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
            <div className="mt-space-2 max-w-md animate-fade-rise text-body-l text-snow [text-shadow:0_1px_2px_rgba(0,0,0,0.95),0_2px_10px_rgba(0,0,0,0.85),0_4px_28px_rgba(0,0,0,0.7)] [animation-delay:400ms] motion-reduce:animate-none space-y-space-4">
              {hero.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. HOSTS — BJØRN & MATHIEU */}
      <section className="bg-snow py-space-16 md:py-space-20">
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

            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-heading-s text-charcoal mb-space-6 uppercase">
                {hosts.together.name}
              </h2>

              <div className="text-body-l text-charcoal/80 space-y-space-4">
                {hosts.together.bio.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      {/* 3. BEFORE THE QUESTIONNAIRE */}
      <section className="bg-cream py-space-16 md:py-space-20 text-center">
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
      <section className="bg-snow py-space-16 md:py-space-20">
        <Container>
            <div className="max-w-3xl mx-auto text-center mb-space-12">
              <h2 className="text-heading-s text-charcoal">
                {form.headline}
              </h2>
            </div>
            <LetsTalkForm />
          
        </Container>
      </section>

      {/* 7. WHAT HAPPENS NEXT */}
      <section className="bg-cream py-space-16 md:py-space-20 border-t border-charcoal/10">
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
      <section className="bg-snow py-space-16 md:py-space-20">
        <Container>
          <RevealOnScroll variant="fade" durationMs={800}>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-heading-s text-charcoal mb-space-12 text-center md:text-left">
                QUESTIONS & ANSWERS
              </h2>
              <Accordion items={faq} />
            </div>
          </RevealOnScroll>
        </Container>
      </section>
    </SiteShell>
  );
}
