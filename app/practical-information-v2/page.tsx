import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SITE_NAV_ITEMS } from "@/lib/siteNav";
import { HEADER_LOGO_V4 } from "@/lib/logoV4";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { BottomScrim } from "@/components/ui/BottomScrim";
import { AiLabel } from "@/components/ui/AiLabel";

export const metadata: Metadata = {
  title: "Practical Information (B&W) — REFUGE61",
  description: "Functional information about stays at REFUGE61.",
};

const InfoBlock = ({
  eyebrow,
  headline,
  imageSrc,
  imageAlt,
  highlight = false,
  children,
}: {
  eyebrow: string;
  headline: string;
  imageSrc: string;
  imageAlt: string;
  highlight?: boolean;
  children: React.ReactNode;
}) => (
  <RevealOnScroll variant="fade" durationMs={800}>
    <div
      className={`grid grid-cols-1 md:grid-cols-12 gap-space-4 md:gap-space-8 py-space-8 border-t border-charcoal/10 ${highlight ? "bg-cream px-space-4 md:px-space-6" : ""
        }`}
    >
      {/* LEFT SIDE — Section title + small image */}
      <div className="md:col-span-4">
        <h2 className="text-eyebrow uppercase tracking-[0.12em] text-forest mb-space-3">
          {eyebrow}
        </h2>

        <div className="relative w-full aspect-[4/3] overflow-hidden mt-space-5">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover grayscale"
          />
        </div>
      </div>

      {/* RIGHT SIDE — Existing headline + text */}
      <div className="md:col-span-8 flex flex-col gap-space-4 max-w-[62ch]">
        <h3 className="font-display text-display-m italic text-charcoal">
          {headline}
        </h3>

        <div className="text-body-m text-charcoal/85 space-y-space-4">
          {children}
        </div>
      </div>
    </div>
  </RevealOnScroll>
);

export default function PracticalInformationV2Page() {
  return (
    <SiteShell
      navItems={SITE_NAV_ITEMS}
      officialLogo={HEADER_LOGO_V4}
      footer={<SiteFooter />}
    >
      {/* Hero Image — aligned to the homepage hero
          (components/sections/Hero.tsx) 2026-08-22: full-viewport height,
          same padding scale, headline ramp, BottomScrim, drop-shadow and
          load-time entrance animation. */}
      <section className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-charcoal">
        <div className="absolute inset-0 animate-hero-image motion-reduce:animate-none">
          <Image
            src="/images/client-update/bjorkasen_01.jpg"
            alt="Refuge61 Lodge exterior"
            fill
            priority
            sizes="100vw"
            quality={85}
            className="object-cover object-bottom"
          />
        </div>

        <BottomScrim />

        {/* Kept: this photograph is bright at the top, so the nav and logo
            still need their own protection. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-charcoal/55 to-transparent"
        />

        <div className="relative flex flex-1 flex-col justify-end px-space-4 pb-space-12 pt-24 md:px-space-6 md:pb-space-16 md:pt-28 lg:px-space-8">
          <div className="max-w-3xl">
            <h1 className="animate-fade-rise font-display text-display-m text-snow drop-shadow-[0_3px_8px_rgba(0,0,0,0.65)] [animation-delay:200ms] motion-reduce:animate-none md:text-display-l lg:text-display-xl">
              Practical Information
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-snow px-space-4 py-space-16 md:px-space-8 md:py-space-20 lg:px-space-16">
        <div className="max-w-[1200px] mx-auto">

          {/* THE WEEKS */}
          <InfoBlock
            eyebrow="The Weeks"
            headline="Four weeks. A small number of guests (maximum of 14)"
            imageSrc="/images/practical/four-weeks.jpg"
            imageAlt="Winter landscape at REFUGE61"
          >
            <p>
              REFUGE61 will welcome guests for four weeks in winter 2027,
              from Saturday to Saturday:
            </p>

            <ul className="list-disc pl-space-4 space-y-space-2 mt-space-2 mb-space-4">
              <li>Week 8: 20–27 February 2027</li>
              <li>Week 9: 27 February–6 March 2027</li>
              <li>Week 10: 6–13 March 2027</li>
              <li>Week 11: 13–20 March 2027</li>
            </ul>

            <p>Each stay is for seven nights.</p>
          </InfoBlock>

          {/* GETTING THERE */}
          <InfoBlock
            eyebrow="Getting There"
            headline="Remote, but surprisingly easy to reach."
            imageSrc="/images/practical/remote.jpg"
            imageAlt="Guests arriving at REFUGE61"
          >
            <p>
              Fly to Oslo Airport (Gardermoen). The railway station is located
              directly inside the airport.
            </p>

            <p>
              Direct trains on the Dovre Line run north from Oslo Airport to
              Vinstra, with a journey time of approximately three hours.
            </p>

            <p>
              We will meet you at Vinstra station and take you the rest of the
              way to REFUGE61.
            </p>

            <p>
              We will provide recommended train times for each REFUGE61 week
              before your journey.
            </p>

            <p>
              No need to travel into Oslo. No car is needed.
            </p>
          </InfoBlock>

          {/* EXISTING LARGE IMAGE */}
          <RevealOnScroll variant="fade" durationMs={800}>
            <div className="relative aspect-[16/9] w-full my-space-16 overflow-hidden">
              <Image
                src="/images/client-update/REFUGE61_01_arrivee_accueil.jpg"
                alt="Guests arriving at Refuge61"
                fill
                sizes="(min-width: 768px) 100vw, 100vw"
                className="object-cover"
              />
              <AiLabel src="/images/client-update/REFUGE61_01_arrivee_accueil.jpg" />
            </div>
          </RevealOnScroll>

          {/* THE LODGE */}
          <InfoBlock
            eyebrow="The Lodge"
            headline="Simple, warm and comfortable."
            imageSrc="/images/practical/simple-warm.jpg"
            imageAlt="REFUGE61 lodge"
          >
            <p>
              The lodge is made for shared living. Bedrooms are for two people,
              with a washbasin in each room. Toilets are available on every
              floor.
            </p>

            <p>
              Showers and the sauna are in a separate building, just a few
              metres from the main lodge.
            </p>

            <p>Bed linen and towels are provided.</p>
          </InfoBlock>

          {/* MEALS */}
          <InfoBlock
            eyebrow="Meals"
            headline="Around the same table."
            imageSrc="/images/practical/around-the-table.jpg"
            imageAlt="Shared meal at REFUGE61"
          >
            <p>
              Meals are part of the REFUGE61 experience. We prepare, cook and
              eat together, with small teams naturally taking turns in the
              kitchen.
            </p>

            <p>
              There is no restaurant and no room service. Participation is part
              of what makes the week different.
            </p>
          </InfoBlock>

          {/* SKI FROM THE DOOR */}
          <InfoBlock
            eyebrow="Ski From The Door"
            headline="650 kilometres of tracks. Twenty metres from the lodge."
            imageSrc="/images/practical/650km.jpeg"
            imageAlt="Cross-country skiing near REFUGE61"
          >
            <p>
              Just 20 metres from REFUGE61, you can step onto a groomed
              cross-country ski trail, prepared for both classic and skating.
            </p>

            <p>
              From there, the trail connects to a network of around 650
              kilometres of cross-country ski tracks.
            </p>

            <p>
              No transfer. No car. No timetable. Just put on your skis and go —
              with others or alone, for an hour or for the day.
            </p>
          </InfoBlock>

          {/* A TYPICAL DAY */}
          <InfoBlock
            eyebrow="A Typical Day"
            headline="There isn’t really one."
            imageSrc="/images/practical/typical-day.jpg"
            imageAlt="A typical winter day at REFUGE61"
          >
            <p>
              There is no timetable to follow. We have breakfast, look outside,
              talk about the weather and snow conditions — and decide.
            </p>

            <p>
              Some may ski together, others may head out alone. The important
              thing is to be outside, move and enjoy the landscape at your own
              rhythm.
            </p>

            <p>
              Later, we come back to the lodge, cook together and gather around
              the table.
            </p>
          </InfoBlock>

          {/* THE EXPEDITION */}
          <InfoBlock
            eyebrow="The Expedition"
            headline="Beyond the lodge."
            imageSrc="/images/practical/beyond-the-lodge.jpg"
            imageAlt="Winter mountain expedition"
          >
            <p>
              During the week, when weather and snow conditions allow, we plan
              an optional expedition into the mountains, with the possibility
              of spending a night away.
            </p>

            <p>
              Taking part is entirely your choice. Those who prefer to stay at
              the lodge or enjoy a different activity are completely free to do
              so.
            </p>

            <p>
              The expedition is not a race or a test of performance. It is
              simply an opportunity to go further, carry what we need and
              experience the winter landscape differently.
            </p>
          </InfoBlock>

          {/* FITNESS & EXPERIENCE */}
          <InfoBlock
            eyebrow="Fitness & Experience"
            headline="Active, not extreme."
            imageSrc="/images/practical/active-not-extreme.jpg"
            imageAlt="Outdoor winter activity at REFUGE61"
          >
            <p>
              You don’t need to be an athlete. But you should enjoy being
              outside, moving and spending several hours in a winter
              environment.
            </p>

            <p>
              REFUGE61 is about finding your own rhythm — sometimes with the
              group, sometimes alone.
            </p>

            <p>
              It is neither a training camp nor a week spent entirely indoors.
            </p>
          </InfoBlock>

          {/* WHO IS REFUGE61 FOR */}
          <InfoBlock
            eyebrow="Who Is Refuge61 For?"
            headline="More about mindset than performance."
            imageSrc="/images/practical/mindset.jpg"
            imageAlt="Guests enjoying the REFUGE61 experience"
          >
            <p>
              REFUGE61 has been created primarily for active adults over 50.
            </p>

            <p>
              We are looking for people who are curious, independent and happy
              to participate in shared life — people who enjoy being active
              outdoors but don’t need to turn every day into a performance.
            </p>

            <p>
              The balance matters: movement, nature, freedom and time together.
            </p>
          </InfoBlock>

          {/* WHAT TO BRING */}
          <InfoBlock
            eyebrow="What To Bring"
            headline="Bring your own, or use ours."
            imageSrc="/images/practical/bring-your-own.jpg"
            imageAlt="Cross-country skiing equipment"
          >
            <p>
              If you regularly practise cross-country skiing, we recommend
              bringing your own equipment — skis, boots and poles — so you can
              enjoy the week with the equipment you know best.
            </p>

            <p>
              For guests who don’t have their own equipment, Nordic skis, boots
              and poles will be available at REFUGE61 for the duration of the
              week.
            </p>

            <p>
              Bring good winter clothing and footwear suitable for cold
              conditions. Before your stay, we will send you a simple packing
              list.
            </p>

            <p>Bed linen and towels are provided.</p>
          </InfoBlock>

          {/* THE PRICE */}
          <InfoBlock
            eyebrow="The Price"
            headline="€1,800 per person for the week."
            imageSrc="/images/architecture/architecture-lodge-exterior-01.jpg"
            imageAlt="REFUGE61 winter lodge"
            highlight
          >
            <p>
              The price includes seven nights at REFUGE61, all meals at the
              lodge, bed linen and towels, and Nordic skiing equipment (skis,
              boots and poles) for the duration of your stay.
            </p>

            <p>
              There is no online booking and no online payment.
            </p>

            <p>
              Before confirming any stay, Bjorn or Mathieu will have a personal
              conversation with you. We want to make sure that REFUGE61 matches
              what you are looking for — and that you match the spirit of the
              week.
            </p>
          </InfoBlock>

          {/* INSURANCE */}
          <InfoBlock
            eyebrow="Insurance"
            headline="Travel with the right cover."
            imageSrc="/images/lifestyle/lifestyle-family-12.jpg"
            imageAlt="Winter travel at REFUGE61"
          >
            <p>
              Guests are responsible for having appropriate travel and medical
              insurance covering the winter activities they choose to take part
              in during their stay.
            </p>
          </InfoBlock>

          {/* CANCELLATION */}
          <InfoBlock
            eyebrow="Cancellation"
            headline="Plans sometimes change."
            imageSrc="/images/practical/plans-change.jpg"
            imageAlt="Winter landscape around REFUGE61"
          >
            <p>
              Our cancellation conditions are designed to be clear and fair.
            </p>

            <p>
              Full details will be available in our{" "}
              <Link
                href="/terms"
                className="underline hover:text-charcoal/60 transition-colors"
              >
                Terms & Conditions
              </Link>{" "}
              and provided before any stay is confirmed.
            </p>
          </InfoBlock>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-cream px-space-4 py-space-16 md:px-space-8 md:py-space-20 lg:px-space-16 text-center">
        <RevealOnScroll variant="fade" durationMs={800}>
          <div className="max-w-[800px] mx-auto flex flex-col items-center">
            <p className="text-eyebrow uppercase tracking-[0.12em] text-charcoal/60 mb-space-4">
              THINK REFUGE61 MIGHT BE FOR YOU?
            </p>

            <h2 className="font-display text-display-l text-charcoal mb-space-6">
              It starts with a conversation.
            </h2>

            <p className="text-body-l text-charcoal/85 mb-space-8 max-w-[45ch]">
              Tell us a little about yourself, what brings you here and what
              you hope to find. Bjorn or Mathieu will then arrange a time to
              talk with you.
            </p>

            <Link
              href="/lets-talk"
              className="inline-flex items-center justify-center bg-charcoal text-snow px-space-6 py-space-3 font-sans font-medium text-eyebrow uppercase tracking-[0.12em] hover:bg-forest transition-colors duration-300"
            >
              START A CONVERSATION <span className="ml-2">→</span>
            </Link>
          </div>
        </RevealOnScroll>
      </section>
    </SiteShell>
  );
}

