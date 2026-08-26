// The live Lodge page. Promoted from /the-lodge-v2 on 2026-08-22 after the
// client selected that version. /the-lodge-v2 now re-exports this file so the
// review URL keeps working and the two cannot drift apart.
import type { Metadata } from "next";
import Image from "next/image";
import { SiteShell } from "@/components/layout/SiteShell";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SITE_NAV_ITEMS } from "@/lib/siteNav";
import { HEADER_LOGO_V4 } from "@/lib/logoV4";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { BottomScrim } from "@/components/ui/BottomScrim";
import { AiLabel } from "@/components/ui/AiLabel";

export const metadata: Metadata = {
  title: "The Lodge — REFUGE61",
  description: "A warm and comfortable home in the Norwegian mountains.",
};

export default function TheLodgePage() {
  return (
    <SiteShell navItems={SITE_NAV_ITEMS} officialLogo={HEADER_LOGO_V4} footer={<SiteFooter />}>
      {/* 1. THE LODGE (Hero) */}
      {/* min-h (not h) so the section grows rather than clipping when the
          content is taller than the viewport — the long headline plus two
          paragraphs overflowed the top on short screens and under browser
          zoom. Flex column + justify-end keeps the text bottom-anchored,
          matching components/sections/Hero.tsx. */}
      <section className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-charcoal">
        {/* Aligned to the homepage hero (components/sections/Hero.tsx)
            2026-08-22: same padding scale, headline ramp, BottomScrim,
            drop-shadow and load-time entrance animation. */}
        <div className="absolute inset-0 animate-hero-image motion-reduce:animate-none">
          <Image
            src="/images/client-update/bb59a1be-4edc-4428-9d2e-7ca161371ea3.jpeg"
            alt="The Lodge in the snow"
            fill
            priority
            sizes="100vw"
            quality={85}
            className="object-cover"
          />
        </div>

        <BottomScrim />

        {/* Top scrim — same fix as the homepage hero (2026-08-26). The logo
            and nav links are white and this photograph is bright sky behind
            them, so without this they wash out. Darkens only the header band
            and fades well above the headline; the photograph is untouched. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-charcoal/60 via-charcoal/25 to-transparent"
        />

        {/* pt clears the fixed header (h-16 / md:h-20) so the headline can
            never sit under the navigation on a short viewport. */}
        <div className="relative flex flex-1 flex-col justify-end px-space-4 pb-space-12 pt-24 md:px-space-6 md:pb-space-16 md:pt-28 lg:px-space-8">
          <div className="max-w-3xl">
            <p className="animate-fade-rise text-eyebrow uppercase tracking-[0.12em] text-snow mb-space-4 [text-shadow:0_1px_2px_rgba(0,0,0,0.95),0_2px_10px_rgba(0,0,0,0.85),0_4px_28px_rgba(0,0,0,0.7)] motion-reduce:animate-none">
              THE LODGE
            </p>
            <h1 className="animate-fade-rise font-display text-display-m text-snow leading-[1.05] [text-shadow:0_1px_2px_rgba(0,0,0,0.95),0_2px_10px_rgba(0,0,0,0.85),0_4px_28px_rgba(0,0,0,0.7)] [animation-delay:200ms] motion-reduce:animate-none md:text-display-l">
              A warm and comfortable home in the Norwegian mountains
            </h1>
            <div className="mt-space-2 max-w-md animate-fade-rise flex flex-col gap-space-4 [animation-delay:400ms] motion-reduce:animate-none">
              <p className="rounded-sm bg-gradient-to-r from-black/45 via-black/25 to-transparent px-3 py-2 text-body-l text-snow [text-shadow:0_1px_2px_rgba(0,0,0,0.95),0_2px_10px_rgba(0,0,0,0.85),0_4px_28px_rgba(0,0,0,0.7)]">
                For the week, the lodge will be our home — a place to relax, share meals and enjoy time together after a day in the mountains.
              </p>

              <p className="rounded-sm bg-gradient-to-r from-black/45 via-black/25 to-transparent px-3 py-2 text-body-l text-snow [text-shadow:0_1px_2px_rgba(0,0,0,0.95),0_2px_10px_rgba(0,0,0,0.85),0_4px_28px_rgba(0,0,0,0.7)]">
                The atmosphere is warm, authentic and relaxed — more a private mountain home than a hotel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. A PLACE APART */}
      <section className="bg-snow">
        <RevealOnScroll variant="fade" durationMs={800}>
          <div className="flex flex-col md:flex-row items-stretch">
            <div className="flex w-full flex-col justify-center px-space-4 py-space-16 md:w-[45%] md:px-space-8 md:py-space-20 lg:px-space-16">
              <p className="text-eyebrow uppercase tracking-[0.12em] text-charcoal/60 mb-space-6">
                A PLACE APART
              </p>
              <div className="flex flex-col gap-space-4 max-w-[42ch]">
                <p className="text-body-l text-charcoal/85">
                  Set in the Norwegian mountains and surrounded by snow and nature, the lodge feels wonderfully removed from everyday life.
                </p>
                <p className="text-body-l text-charcoal/85">
                  There are no crowds and no hotel corridors — just the silence of winter, open space and the feeling of having a mountain home to ourselves.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/5] md:aspect-auto md:w-[55%] md:min-h-[85vh]">
              <Image
                src="/images/client-update/Svart hvitt front øst fasade 01.jpeg"
                alt="Black and white lodge facade"
                fill
                sizes="(min-width: 768px) 55vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* 3. THE ROOMS */}

      <section className="bg-cream px-space-4 py-space-16 md:px-space-8 md:py-space-20 lg:px-space-12">
        <div className="max-w-[1440px] mx-auto">

          {/* TOP — TEXT + RIGHT IMAGE */}

          <RevealOnScroll variant="fade" durationMs={800}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-4 items-stretch">

              {/* LEFT — TEXT */}

              <div className="max-w-[700px]">
                <p className="text-eyebrow uppercase tracking-[0.12em] text-charcoal/60 mb-space-4">
                  THE ROOMS
                </p>

                <h2 className="font-display text-display-m md:text-display-l text-charcoal mb-space-6">
                  Simple, comfortable and private
                </h2>

                <div className="max-w-[55ch] flex flex-col gap-space-4">
                  <p className="text-body-l text-charcoal/85">
                    Accommodation is arranged in comfortable rooms for a maximum of two people.
                  </p>

                  <p className="text-body-l text-charcoal/85">
                    There are no dormitories. Everyone has a proper room in which to rest and recharge after a day outside.
                  </p>

                  <p className="text-body-l text-charcoal/85">
                    The bedrooms are simple, warm and in keeping with the character of the lodge.
                  </p>
                </div>
              </div>

              {/* RIGHT — IMAGE */}

              <div className="relative w-full h-full min-h-[500px] overflow-hidden">
                <Image
                  src="/images/client-update/Bjorkasen hunting lodge in Gala-109.jpeg"
                  alt="Bedroom detail at REFUGE61"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

            </div>
          </RevealOnScroll>

          {/* BOTTOM — TWO MORE ROOM IMAGES */}

          <RevealOnScroll variant="fade" durationMs={800}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-4 mt-space-16">

              {/* IMAGE 2 */}

              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/images/client-update/Bjorkasen hunting lodge in Gala-242.jpeg"
                  alt="Bedroom with yellow walls"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              {/* IMAGE 3 */}

              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/images/client-update/Bjorkasen hunting lodge in Gala-108.jpeg"
                  alt="Bedroom with mounted reindeer"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

            </div>
          </RevealOnScroll>

        </div>
      </section>



      {/* 4. SAUNA & RELAXATION */}

      <section className="bg-snow px-space-4 py-space-16 md:px-space-8 md:py-space-20 lg:px-space-12">
        <div className="max-w-[1440px] mx-auto">

          {/* TEXT + RIGHT IMAGE */}

          <RevealOnScroll variant="fade" durationMs={800}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-4 items-stretch">

              {/* LEFT — TEXT */}

              <div className="max-w-[700px]">
                <p className="text-eyebrow uppercase tracking-[0.12em] text-charcoal/60 mb-space-4">
                  SAUNA & RELAXATION
                </p>

                <h2 className="font-display text-display-m md:text-display-l text-charcoal mb-space-6">
                  Warmth after the cold
                </h2>

                <div className="max-w-[55ch] flex flex-col gap-space-4">
                  <p className="text-body-l text-charcoal/85">
                    After a day in the snow, the sauna is the perfect place to slow down,
                    warm up and relax.
                  </p>

                  <p className="text-body-l text-charcoal/85">
                    And for those who want the full Nordic experience, step outside
                    afterwards into the crisp winter air and snow — before heading back
                    into the warmth.
                  </p>

                  <p className="text-body-l text-charcoal/85">
                    A simple ritual, and one of the pleasures of life in the Norwegian
                    mountains.
                  </p>
                </div>
              </div>

              {/* RIGHT — LARGE IMAGE */}

              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/client-update/Sortie sauna.png"
                  alt="Throwing snow after sauna"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

            </div>
          </RevealOnScroll>

          {/* BOTTOM — TWO MORE IMAGES */}

          <RevealOnScroll variant="fade" durationMs={800}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-4 mt-space-16">

              {/* SAUNA EXTERIOR */}

              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/images/client-update/Bjorkasen hunting lodge in Gala-042.jpeg"
                  alt="Sauna exterior"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              {/* SAUNA INTERIOR */}

              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/images/client-update/Bjorkasen hunting lodge in Gala-045.jpeg"
                  alt="Sauna interior"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

            </div>
          </RevealOnScroll>

        </div>
      </section>


      {/* 5. THE KITCHEN */}
      <section className="bg-cream">
        <RevealOnScroll variant="fade" durationMs={800}>
          <div className="flex flex-col md:flex-row-reverse items-stretch">
            <div className="flex w-full flex-col justify-center px-space-4 py-space-16 md:w-[45%] md:px-space-8 md:py-space-20 lg:px-space-16">
              <p className="text-eyebrow uppercase tracking-[0.12em] text-charcoal/60 mb-space-4">
                THE KITCHEN
              </p>
              <h2 className="font-display text-display-m italic text-charcoal max-w-[15ch]">
                The pleasure of cooking together
              </h2>
              <div className="mt-space-6 flex flex-col gap-space-4 max-w-[42ch]">
                <p className="text-body-l text-charcoal/85">
                  The lodge has a large, fully equipped kitchen, designed for preparing meals together.
                </p>
                <p className="text-body-l text-charcoal/85">
                  Cooking is part of the experience — informal, convivial and shared. Some evenings we cook together, talk, have a drink and simply enjoy being there.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/5] md:aspect-auto md:w-[55%] md:min-h-[85vh]">
              <Image
                src="/images/client-update/bjorkasen_03.jpg"
                alt="Person in the kitchen"
                fill
                sizes="(min-width: 768px) 55vw, 100vw"
                className="object-cover"
              />
              <AiLabel src="/images/client-update/bjorkasen_03.jpeg" />
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* 6. AROUND THE TABLE */}
      <section className="bg-snow">
        <RevealOnScroll variant="fade" durationMs={800}>
          <div className="flex flex-col md:flex-row items-stretch">
            <div className="flex w-full flex-col justify-center px-space-4 py-space-16 md:w-[45%] md:px-space-8 md:py-space-20 lg:px-space-16">
              <p className="text-eyebrow uppercase tracking-[0.12em] text-charcoal/60 mb-space-4">
                AROUND THE TABLE
              </p>
              <h2 className="font-display text-display-m italic text-charcoal max-w-[15ch]">
                The heart of the house
              </h2>
              <div className="mt-space-6 flex flex-col gap-space-4 max-w-[42ch]">
                <p className="text-body-l text-charcoal/85">
                  The large dining room is where everyone comes together.
                </p>
                <p className="text-body-l text-charcoal/85">
                  Breakfast before heading outside, dinner after a day in the snow, a bottle of wine, long conversations around the table — these shared moments are an important part of the week.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/5] md:aspect-auto md:w-[55%] md:min-h-[85vh]">
              <Image
                src="/images/client-update/Repas senioir.png"
                alt="Group having dinner"
                fill
                sizes="(min-width: 768px) 55vw, 100vw"
                className="object-cover"
              />
              <AiLabel src="/images/client-update/Repas senioir.png" />
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* 7. BY THE FIRE */}
      <section className="bg-charcoal">
        <RevealOnScroll variant="fade" durationMs={800}>
          <div className="flex flex-col md:flex-row-reverse items-stretch">
            <div className="flex w-full flex-col justify-center px-space-4 py-space-16 md:w-[45%] md:px-space-8 md:py-space-20 lg:px-space-16">
              <p className="text-eyebrow uppercase tracking-[0.12em] text-snow/60 mb-space-4">
                BY THE FIRE
              </p>
              <h2 className="font-display text-display-m italic text-snow max-w-[15ch]">
                When the day slows down
              </h2>
              <div className="mt-space-6 flex flex-col gap-space-4 max-w-[42ch]">
                <p className="text-body-l text-snow">
                  After skiing, snowshoeing or simply spending the day outdoors, there is nowhere better to end the day than around the fire.
                </p>
                <p className="text-body-l text-snow">
                  A drink, a book, a conversation — or simply doing nothing for a while.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/5] md:aspect-auto md:w-[55%] md:min-h-[85vh]">
              <Image
                src="/images/client-update/Soiree Feu.jpg"
                alt="People sitting by the fireplace"
                fill
                sizes="(min-width: 768px) 55vw, 100vw"
                className="object-cover"
              />
              <AiLabel src="/images/client-update/Soiree Feu.png" />
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* 8. EVERYTHING WE NEED */}
      <section className="bg-snow px-space-4 py-space-16 md:px-space-8 md:py-space-20 lg:px-space-12">
        <div className="max-w-[1440px] mx-auto">
          <RevealOnScroll variant="fade" durationMs={800}>
            <div className="flex flex-col md:flex-row gap-space-12 md:gap-space-16 items-start">
              {/* Left Column */}
              <div className="w-full md:w-1/2">
                <p className="text-eyebrow uppercase tracking-[0.12em] text-charcoal/60 mb-space-6">
                  EVERYTHING WE NEED
                </p>
                <div className="max-w-[45ch] flex flex-col gap-space-6">
                  <p className="text-body-l text-charcoal/85">
                    The lodge offers generous shared spaces, a fully equipped kitchen, a large dining room, comfortable living areas and everything we need to make it our home for the week.
                  </p>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                    {[
                      ["👥", "2 PEOPLE MAX. PER ROOM"],
                      ["🚫", "NO DORMITORIES"],
                      ["🍳", "LARGE SHARED KITCHEN"],
                      ["🍽", "DINING ROOM"],
                      ["🔥", "FIREPLACE"],
                    ].map(([icon, text]) => (
                      <div key={text} className="flex items-center gap-2.5">
                        <span className="text-base">{icon}</span>
                        <span className="text-[11px] text-charcoal/75 font-medium tracking-[0.08em] leading-relaxed">
                          {text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Right Column: The Green Card */}
              <div className="w-full md:w-1/2 flex md:justify-end mt-space-6 md:mt-0">
                <div className="bg-forest p-space-8 md:p-space-12 w-full max-w-[50ch]">
                  <p className="font-sans font-medium text-heading-s text-snow mb-space-4">
                    Simple does not mean basic.
                  </p>
                  <p className="text-body-m text-snow/90 leading-relaxed">
                    The lodge is warm, comfortable and practical. What it deliberately does not offer is hotel service, passive consumption or a programme built around you.
                  </p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </SiteShell>
  );
}
