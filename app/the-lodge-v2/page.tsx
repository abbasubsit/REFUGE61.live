import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SITE_NAV_ITEMS } from "@/lib/siteNav";
import { HEADER_LOGO_V4 } from "@/lib/logoV4";
import {
  X_HERO,
  X_PLACE_APART,
  X_SLEEP_WELL,
  X_DETAILS,
  X_GATHER,
  X_RESET,
  X_WINTER,
  X_COMFORT,
  X_CLOSING,
} from "@/lib/theLodgeExact";

export const metadata: Metadata = {
  title: "The Lodge — REFUGE61",
  description:
    "A Norwegian mountain lodge above the treeline: warm rooms, a shared table, a fire, and direct access to the snow.",
};

/**
 * /the-lodge-v2 — literal reproduction of the client's mock-up PDF, frame by
 * frame. See lib/theLodgeExact.ts for the content, the image mapping and the
 * two known conflicts with earlier direction (identifiable faces; mosaic
 * layouts) that this version deliberately preserves.
 *
 * Deliberately does NOT reuse PillarSection / FullBleedStatement: those
 * encode the approved design language (Fraunces display type, one image per
 * section, Philosophy's proportions), which is exactly what this version is
 * meant to differ from. The mock-up sets everything in a bold grotesque, so
 * this page uses the site's sans (Inter) throughout rather than the display
 * serif. Layout proportions are measured off the PDF's 960x540 frames.
 *
 * /the-lodge is untouched and remains the design-language version.
 */

// Shared frame chrome: the PDF's cream page with generous margins.
const PAGE = "bg-cream px-space-4 py-space-16 md:px-space-8 md:py-space-20 lg:px-space-12";
const EYEBROW = "text-eyebrow font-semibold uppercase tracking-[0.1em] text-forest";
const H2 = "mt-space-3 font-sans text-[2rem] font-bold leading-[1.12] tracking-[-0.015em] text-charcoal md:text-[2.6rem]";
const BODY = "text-body-l leading-relaxed text-charcoal/85";

export default function TheLodgeExactPage() {
  return (
    <SiteShell
      navItems={SITE_NAV_ITEMS}
      officialLogo={HEADER_LOGO_V4}
      footer={<SiteFooter />}
    >
      {/* ---------- Frame 1 — full-bleed hero ---------- */}
      <section aria-label={X_HERO.headline} className="relative h-[100svh] w-full overflow-hidden bg-charcoal">
        <Image
          src={X_HERO.image}
          alt={X_HERO.alt}
          fill
          priority
          sizes="100vw"
          quality={85}
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-charcoal/25"
        />
        <div className="absolute inset-x-0 bottom-0 px-space-4 pb-space-12 md:px-space-8 md:pb-space-16 lg:px-space-12">
          <h1 className="font-sans text-[2.75rem] font-bold uppercase leading-none tracking-[-0.01em] text-snow md:text-[4rem]">
            {X_HERO.title}
          </h1>
          <p className="mt-space-3 font-sans text-[1.35rem] font-normal text-snow md:text-[1.6rem]">
            {X_HERO.headline}
          </p>
          <p className="mt-space-2 text-body-m text-snow/90">{X_HERO.body}</p>
        </div>
      </section>

      {/* ---------- Frame 2 — text left / square image right ---------- */}
      <section aria-labelledby="x-place" className={PAGE}>
        <div className="mx-auto flex max-w-[1200px] flex-col gap-space-8 md:flex-row md:items-center md:gap-space-12">
          <div className="w-full md:w-[46%]">
            <p className={EYEBROW}>{X_PLACE_APART.eyebrow}</p>
            <h2 id="x-place" className={H2}>
              {X_PLACE_APART.headline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <div className="mt-space-6 flex flex-col gap-space-4">
              {X_PLACE_APART.paragraphs.map((p) => (
                <p key={p} className={BODY}>
                  {p}
                </p>
              ))}
            </div>
          </div>
          <div className="relative aspect-square w-full md:w-[54%]">
            <Image
              src={X_PLACE_APART.image}
              alt={X_PLACE_APART.alt}
              fill
              sizes="(min-width: 768px) 54vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ---------- Frame 3 — full-width intro, then a row of four ---------- */}
      <section aria-labelledby="x-sleep" className={PAGE}>
        <div className="mx-auto max-w-[1200px]">
          <p className={EYEBROW}>{X_SLEEP_WELL.eyebrow}</p>
          <h2 id="x-sleep" className={H2}>
            {X_SLEEP_WELL.headline}
          </h2>
          <p className={`${BODY} mt-space-5 max-w-[95ch]`}>{X_SLEEP_WELL.body}</p>

          <div className="mt-space-8 grid grid-cols-2 gap-space-3 md:grid-cols-4 md:gap-space-4">
            {X_SLEEP_WELL.images.map((img) => (
              <div key={img.src} className="relative aspect-[396/436] w-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 768px) 24vw, 48vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Frame 4 — text left / two unequal images right ---------- */}
      <section aria-labelledby="x-details" className={PAGE}>
        <div className="mx-auto flex max-w-[1200px] flex-col gap-space-8 md:flex-row md:gap-space-12">
          <div className="w-full md:w-[45%]">
            <p className={EYEBROW}>{X_DETAILS.eyebrow}</p>
            <h2 id="x-details" className={H2}>
              {X_DETAILS.headline}
            </h2>
            <p className={`${BODY} mt-space-6`}>{X_DETAILS.body}</p>
          </div>

          {/* Tops aligned, differing heights — as drawn in the PDF. */}
          <div className="grid w-full grid-cols-2 items-start gap-space-4 md:w-[55%]">
            <div className="relative aspect-[410/420] w-full">
              <Image
                src={X_DETAILS.imageSmall.src}
                alt={X_DETAILS.imageSmall.alt}
                fill
                sizes="(min-width: 768px) 27vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[420/700] w-full">
              <Image
                src={X_DETAILS.imageTall.src}
                alt={X_DETAILS.imageTall.alt}
                fill
                sizes="(min-width: 768px) 27vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Frame 5 — half-bleed image left / text right ---------- */}
      <section aria-labelledby="x-gather" className="bg-cream">
        <div className="flex flex-col md:flex-row md:items-stretch">
          <div className="relative aspect-[4/5] w-full md:aspect-auto md:min-h-[85vh] md:w-1/2">
            <Image
              src={X_GATHER.image}
              alt={X_GATHER.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex w-full flex-col justify-center px-space-4 py-space-12 md:w-1/2 md:px-space-12 md:py-space-20">
            <p className={EYEBROW}>{X_GATHER.eyebrow}</p>
            <h2 id="x-gather" className={H2}>
              {X_GATHER.headline}
            </h2>
            <div className="mt-space-6 flex flex-col gap-space-4">
              {X_GATHER.paragraphs.map((p) => (
                <p key={p} className={`${BODY} max-w-[46ch]`}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Frame 6 — full-bleed dark, text upper-left ---------- */}
      <section aria-labelledby="x-reset" className="relative h-[85vh] w-full overflow-hidden bg-charcoal">
        <Image
          src={X_RESET.image}
          alt={X_RESET.alt}
          fill
          sizes="100vw"
          quality={85}
          style={{ objectPosition: X_RESET.objectPosition }}
          className="object-cover"
        />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-charcoal/45" />
        <div className="absolute inset-x-0 top-0 px-space-4 pt-space-16 md:px-space-8 md:pt-space-20 lg:px-space-12">
          <p className="text-eyebrow font-semibold uppercase tracking-[0.1em] text-snow">
            {X_RESET.eyebrow}
          </p>
          <h2
            id="x-reset"
            className="mt-space-3 font-sans text-[2rem] font-bold leading-[1.12] tracking-[-0.015em] text-snow md:text-[2.6rem]"
          >
            {X_RESET.headline}
          </h2>
          <p className="mt-space-5 max-w-[52ch] text-body-l leading-relaxed text-snow/90">
            {X_RESET.body}
          </p>
        </div>
      </section>

      {/* ---------- Frame 7 — text left / two equal tall images right ---------- */}
      <section aria-labelledby="x-winter" className={PAGE}>
        <div className="mx-auto flex max-w-[1200px] flex-col gap-space-8 md:flex-row md:gap-space-12">
          <div className="w-full md:w-[45%]">
            <p className={EYEBROW}>{X_WINTER.eyebrow}</p>
            <h2 id="x-winter" className={H2}>
              {X_WINTER.headline}
            </h2>
            <p className={`${BODY} mt-space-6`}>{X_WINTER.body}</p>
          </div>
          <div className="grid w-full grid-cols-2 gap-space-4 md:w-[55%]">
            {X_WINTER.images.map((img) => (
              <div key={img.src} className="relative aspect-[410/660] w-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 768px) 27vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Frame 8 — list left / rounded green card right ---------- */}
      <section aria-labelledby="x-comfort" className={PAGE}>
        <div className="mx-auto max-w-[1200px]">
          <p className={EYEBROW}>{X_COMFORT.eyebrow}</p>
          <h2 id="x-comfort" className={H2}>
            {X_COMFORT.headline}
          </h2>

          <div className="mt-space-8 flex flex-col gap-space-8 md:flex-row md:gap-space-12">
            <ul className="flex w-full flex-col gap-space-3 md:w-[52%]">
              {X_COMFORT.items.map((item) => (
                <li key={item} className="flex items-start gap-space-3">
                  <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-timber" />
                  <span className={BODY}>{item}</span>
                </li>
              ))}
            </ul>

            <div className="w-full md:w-[48%] md:pt-space-6">
              <div className="rounded-lg bg-forest px-space-6 py-space-6">
                <p className="font-sans text-[1.35rem] font-bold leading-snug text-snow">
                  {X_COMFORT.cardHeadline}
                </p>
                <p className="mt-space-4 text-body-l leading-relaxed text-snow/90">
                  {X_COMFORT.cardBody}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Frame 9 — full-bleed closing + CTA ---------- */}
      <section aria-labelledby="x-closing" className="relative w-full overflow-hidden bg-charcoal py-space-20 md:min-h-[90vh]">
        <Image
          src={X_CLOSING.image}
          alt={X_CLOSING.alt}
          fill
          sizes="100vw"
          quality={85}
          className="object-cover"
        />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-charcoal/45" />
        <div className="relative flex h-full flex-col justify-center px-space-4 md:px-space-8 lg:px-space-12">
          <h2
            id="x-closing"
            className="font-sans text-[2rem] font-bold leading-[1.12] tracking-[-0.015em] text-snow md:text-[2.9rem]"
          >
            {X_CLOSING.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-space-5 max-w-[60ch] text-body-l leading-relaxed text-snow/90">
            {X_CLOSING.body}
          </p>

          <p className="mt-space-12 text-eyebrow font-semibold uppercase tracking-[0.1em] text-snow">
            {X_CLOSING.signature}
          </p>
          <p className="mt-space-3 max-w-[60ch] text-body-m text-snow/85">{X_CLOSING.note}</p>

          <div className="mt-space-6">
            <Link
              href={X_CLOSING.ctaHref}
              className="inline-flex items-center justify-center rounded-full border border-snow px-space-6 py-space-3 text-eyebrow font-semibold uppercase tracking-[0.1em] text-snow transition-colors duration-200 ease-editorial hover:bg-snow hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-snow"
            >
              {X_CLOSING.ctaLabel}
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
