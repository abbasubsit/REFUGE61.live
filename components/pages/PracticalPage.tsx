import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { siteNavItems } from "@/lib/siteNav";
import { type Locale, localePrefix, t } from "@/lib/i18n";
import { HEADER_LOGO_V4 } from "@/lib/logoV4";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { BottomScrim } from "@/components/ui/BottomScrim";
import { AiLabel } from "@/components/ui/AiLabel";

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
      className={`grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1.8fr)] gap-space-6 md:gap-space-16 py-space-8 border-t border-charcoal/10 ${
        highlight ? "bg-cream px-space-4 md:px-space-6" : ""
      }`}
    >
      {/* LEFT SIDE — Section title + image */}
      <div className="md:col-span-1 mt-[5px]">
        <h2 className="text-eyebrow text-[14px] uppercase tracking-[0.12em] text-forest mb-space-3">
          {eyebrow}
        </h2>

        <div className="relative w-full aspect-[4/3] overflow-hidden mt-space-5">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(min-width: 768px) 32vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* RIGHT SIDE — Headline + content */}
      <div className="md:col-span-1 flex flex-col gap-space-4 max-w-[62ch]">
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

export function PracticalPage({ locale }: { locale: Locale }) {
  return (
    <SiteShell
      navItems={siteNavItems(locale)}
      officialLogo={HEADER_LOGO_V4}
      footer={<SiteFooter locale={locale} />}
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
            <h1 className="animate-fade-rise font-display text-display-m text-snow drop-shadow-[0_3px_8px_rgba(0,0,0,0.65)] [animation-delay:200ms] motion-reduce:animate-none md:text-display-l lg:text-display-xl">{t(locale, "Practical Information")}</h1>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAP — "Our home at 61 North"
          Added 2026-08-28 at Mathieu's request: "Practical / at start
          after 1st pic", i.e. directly below the hero photograph.

          Rendered with intrinsic width/height and h-auto rather than
          fill+object-cover: the map carries baked-in labels and a legend,
          so any crop would cut information out of it.
          ========================================================= */}
      <section className="w-full bg-cream px-space-2 py-space-12 md:px-space-4 md:py-space-16 lg:px-space-8">
        <div className="mx-auto max-w-[1600px]">
          <RevealOnScroll variant="fade" durationMs={800}>
            <Image
              src="/images/practical/map-norway-refuge61.png"
              alt="Map of southern Norway showing REFUGE61 at Bjorkaisen, north of Vinstra on the 61st parallel. Fly to Oslo, then approximately 2 hours 30 minutes by train from Oslo to Vinstra, then 45 minutes by car from Vinstra to the lodge. Transfers from Vinstra railway station are organised by the hosts."
              width={1536}
              height={1024}
              sizes="(min-width: 1600px) 1600px, 100vw"
              className="h-auto w-full"
            />
          </RevealOnScroll>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-snow px-space-4 py-space-16 md:px-space-8 md:py-space-20 lg:px-space-16">
        <div className="max-w-[1200px] mx-auto">
          {/* THE WEEKS */}
          <InfoBlock
            eyebrow={t(locale, "The Weeks")}
            headline={t(locale, "Four weeks. A small number of guests (maximum of 14)")}
            imageSrc="/images/practical/four-weeks.jpg"
            imageAlt="Winter landscape at REFUGE61"
          >
            <p>{t(locale, "REFUGE61 will welcome guests for four weeks in winter 2027, from Saturday to Saturday:")}</p>

            <ul className="list-disc pl-space-4 space-y-space-2 mt-space-2 mb-space-4">
              <li>{t(locale, "Week 8: 20–27 February 2027")}</li>
              <li>{t(locale, "Week 9: 27 February–6 March 2027")}</li>
              <li>{t(locale, "Week 10: 6–13 March 2027")}</li>
              <li>{t(locale, "Week 11: 13–20 March 2027")}</li>
            </ul>

            <p>{t(locale, "Each stay is for seven nights.")}</p>
          </InfoBlock>

          {/* GETTING THERE */}
          <InfoBlock
            eyebrow={t(locale, "Getting There")}
            headline={t(locale, "Remote, but surprisingly easy to reach.")}
            imageSrc="/images/practical/remote.jpg"
            imageAlt="Guests arriving at REFUGE61"
          >
            <p>{t(locale, "Fly to Oslo Airport (Gardermoen). The railway station is located directly inside the airport.")}</p>

            <p>{t(locale, "Direct trains on the Dovre Line run north from Oslo Airport to Vinstra, with a journey time of approximately three hours.")}</p>

            <p>{t(locale, "We will meet you at Vinstra station and take you the rest of the way to REFUGE61.")}</p>

            <p>{t(locale, "We will provide recommended train times for each REFUGE61 week before your journey.")}</p>

            <p>{t(locale, "No need to travel into Oslo. No car is needed.")}</p>
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
            eyebrow={t(locale, "The Lodge")}
            headline={t(locale, "Simple, warm and comfortable.")}
            imageSrc="/images/practical/simple-warm.jpg"
            imageAlt="REFUGE61 lodge"
          >
            <p>{t(locale, "The lodge is made for shared living. Bedrooms are for two people, with a washbasin in each room. Toilets are available on every floor.")}</p>

            <p>{t(locale, "Showers and the sauna are in a separate building, just a few metres from the main lodge.")}</p>

            <p>{t(locale, "Bed linen and towels are provided.")}</p>
          </InfoBlock>

          {/* MEALS */}
          <InfoBlock
            eyebrow={t(locale, "Meals")}
            headline={t(locale, "Around the same table.")}
            imageSrc="/images/practical/around-the-table.jpg"
            imageAlt="Shared meal at REFUGE61"
          >
            <p>{t(locale, "Meals are part of the REFUGE61 experience. We prepare, cook and eat together, with small teams naturally taking turns in the kitchen.")}</p>

            <p>{t(locale, "There is no restaurant and no room service. Participation is part of what makes the week different.")}</p>
          </InfoBlock>

          {/* SKI FROM THE DOOR */}
          <InfoBlock
            eyebrow={t(locale, "Ski From The Door")}
            headline={t(locale, "650 kilometres of tracks. Twenty metres from the lodge.")}
            imageSrc="/images/practical/650km.jpeg"
            imageAlt="Cross-country skiing near REFUGE61"
          >
            <p>{t(locale, "Just 20 metres from REFUGE61, you can step onto a groomed cross-country ski trail, prepared for both classic and skating.")}</p>

            <p>{t(locale, "From there, the trail connects to a network of around 650 kilometres of cross-country ski tracks.")}</p>

            <p>{t(locale, "No transfer. No car. No timetable. Just put on your skis and go — with others or alone, for an hour or for the day.")}</p>
          </InfoBlock>

          {/* A TYPICAL DAY */}
          <InfoBlock
            eyebrow={t(locale, "A Typical Day")}
            headline={t(locale, "There isn’t really one.")}
            imageSrc="/images/practical/typical-day.jpg"
            imageAlt="A typical winter day at REFUGE61"
          >
            <p>{t(locale, "There is no timetable to follow. We have breakfast, look outside, talk about the weather and snow conditions — and decide.")}</p>

            <p>{t(locale, "Some may ski together, others may head out alone. The important thing is to be outside, move and enjoy the landscape at your own rhythm.")}</p>

            <p>{t(locale, "Later, we come back to the lodge, cook together and gather around the table.")}</p>
          </InfoBlock>

          {/* THE EXPEDITION */}
          <InfoBlock
            eyebrow={t(locale, "The Expedition")}
            headline={t(locale, "Beyond the lodge.")}
            imageSrc="/images/practical/beyond-the-lodge.jpg"
            imageAlt="Winter mountain expedition"
          >
            <p>{t(locale, "During the week, when weather and snow conditions allow, we plan an optional expedition into the mountains, with the possibility of spending a night away.")}</p>

            <p>{t(locale, "Taking part is entirely your choice. Those who prefer to stay at the lodge or enjoy a different activity are completely free to do so.")}</p>

            <p>{t(locale, "The expedition is not a race or a test of performance. It is simply an opportunity to go further, carry what we need and experience the winter landscape differently.")}</p>
          </InfoBlock>

          {/* FITNESS & EXPERIENCE */}
          <InfoBlock
            eyebrow={t(locale, "Fitness & Experience")}
            headline={t(locale, "Active, not extreme.")}
            imageSrc="/images/practical/active-not-extreme.jpg"
            imageAlt="Outdoor winter activity at REFUGE61"
          >
            <p>{t(locale, "You don’t need to be an athlete. But you should enjoy being outside, moving and spending several hours in a winter environment.")}</p>

            <p>{t(locale, "REFUGE61 is about finding your own rhythm — sometimes with the group, sometimes alone.")}</p>

            <p>{t(locale, "It is neither a training camp nor a week spent entirely indoors.")}</p>
          </InfoBlock>

          {/* WHO IS REFUGE61 FOR */}
          <InfoBlock
            eyebrow={t(locale, "Who Is Refuge61 For?")}
            headline={t(locale, "More about mindset than performance.")}
            imageSrc="/images/practical/mindset.jpg"
            imageAlt="Guests enjoying the REFUGE61 experience"
          >
            <p>{t(locale, "REFUGE61 has been created primarily for active adults over 50.")}</p>

            <p>{t(locale, "We are looking for people who are curious, independent and happy to participate in shared life — people who enjoy being active outdoors but don’t need to turn every day into a performance.")}</p>

            <p>{t(locale, "The balance matters: movement, nature, freedom and time together.")}</p>
          </InfoBlock>

          {/* WHAT TO BRING */}
          <InfoBlock
            eyebrow={t(locale, "What To Bring")}
            headline={t(locale, "Bring your own, or use ours.")}
            imageSrc="/images/practical/bring-your-own.jpg"
            imageAlt="Cross-country skiing equipment"
          >
            <p>{t(locale, "If you regularly practise cross-country skiing, we recommend bringing your own equipment — skis, boots and poles — so you can enjoy the week with the equipment you know best.")}</p>

            <p>{t(locale, "For guests who don’t have their own equipment, Nordic skis, boots and poles will be available at REFUGE61 for the duration of the week.")}</p>

            <p>{t(locale, "Bring good winter clothing and footwear suitable for cold conditions. Before your stay, we will send you a simple packing list.")}</p>

            <p>{t(locale, "Bed linen and towels are provided.")}</p>
          </InfoBlock>

          {/* THE PRICE */}
          <InfoBlock
            eyebrow={t(locale, "The Price")}
            headline={t(locale, "€1,800 per person for the week.")}
            imageSrc="/images/architecture/architecture-lodge-exterior-01.jpg"
            imageAlt="REFUGE61 winter lodge"
            highlight
          >
            <p>{t(locale, "The price includes seven nights at REFUGE61, all meals at the lodge, bed linen and towels, and Nordic skiing equipment (skis, boots and poles) for the duration of your stay.")}</p>

            <p>{t(locale, "There is no online booking and no online payment.")}</p>

            <p>{t(locale, "Before confirming any stay, Bjorn or Mathieu will have a personal conversation with you. We want to make sure that REFUGE61 matches what you are looking for — and that you match the spirit of the week.")}</p>
          </InfoBlock>

          {/* INSURANCE */}
          <InfoBlock
            eyebrow={t(locale, "Insurance")}
            headline={t(locale, "Travel with the right cover.")}
            imageSrc="/images/lifestyle/lifestyle-family-12.jpg"
            imageAlt="Winter travel at REFUGE61"
          >
            <p>{t(locale, "Guests are responsible for having appropriate travel and medical insurance covering the winter activities they choose to take part in during their stay.")}</p>
          </InfoBlock>

          {/* CANCELLATION */}
          <InfoBlock
            eyebrow={t(locale, "Cancellation")}
            headline={t(locale, "Plans sometimes change.")}
            imageSrc="/images/practical/plans-change.jpg"
            imageAlt="Winter landscape around REFUGE61"
          >
            <p>{t(locale, "Our cancellation conditions are designed to be clear and fair.")}</p>

            <p>
              {t(locale, "Full details will be available in our")}{" "}
              <Link
                href="/terms"
                className="underline hover:text-charcoal/60 transition-colors"
              >{t(locale, "Terms & Conditions")}</Link>{" "}
              {t(locale, "and provided before any stay is confirmed.")}
            </p>
          </InfoBlock>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-cream px-space-4 py-space-16 md:px-space-8 md:py-space-20 lg:px-space-16 text-center">
        <RevealOnScroll variant="fade" durationMs={800}>
          <div className="max-w-[800px] mx-auto flex flex-col items-center">
            <p className="text-eyebrow uppercase tracking-[0.12em] text-charcoal/60 mb-space-4">{t(locale, "THINK REFUGE61 MIGHT BE FOR YOU?")}</p>

            <h2 className="font-display text-display-l text-charcoal mb-space-6">{t(locale, "It starts with a conversation.")}</h2>

            <p className="text-body-l text-charcoal/85 mb-space-8 max-w-[45ch]">{t(locale, "Tell us a little about yourself, what brings you here and what you hope to find. Bjorn or Mathieu will then arrange a time to talk with you.")}</p>

            <Link
              href={`${localePrefix(locale)}/lets-talk`}
              className="inline-flex items-center justify-center bg-charcoal text-snow px-space-6 py-space-3 font-sans font-medium text-eyebrow uppercase tracking-[0.12em] hover:bg-forest transition-colors duration-300"
            >{t(locale, "START A CONVERSATION")}<span className="ml-2">→</span>
            </Link>
          </div>
        </RevealOnScroll>
      </section>
    </SiteShell>
  );
}