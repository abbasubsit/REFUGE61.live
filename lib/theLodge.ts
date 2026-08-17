import type { PillarContent } from "@/components/sections/PillarSection";

/**
 * /the-lodge content (2026-08-16) — copy transcribed verbatim from Mathieu
 * Bonnier's "REFUGE61 – The Lodge" mock-up PDF. Not rewritten, not extended.
 *
 * The PDF's 9-frame sequence is followed exactly. Its *layouts* are not:
 * frames 3, 4 and 7 were drawn as multi-image mosaics at mixed sizes, which
 * his previous round explicitly asked us to remove ("remove the mosaics,
 * the three-small-images layouts and the combinations of photographs in
 * different sizes" / "PLEASE USE SAME SIZE FOR PHOTO AS THE PAGE » BETTER
 * SHARED"). His covering email frames the PDF as showing "the selection of
 * photos, the atmosphere and the rhythm" rather than a pixel spec, and its
 * typography is generic Helvetica rather than the site's Fraunces/Inter —
 * so it's treated as a content/mood brief and rendered in the approved
 * REFUGE61 language: one image + one text column per section, all at
 * Philosophy's proportions, alternating sides (which preserves the PDF's
 * own left/right assignment per frame).
 *
 * Two of his picks were replaced under his own sitewide no-identifiable-faces
 * rule: the firepit group (lifestyle-family-14.jpg, faces clearly
 * recognisable) and the swimsuit-in-snow shot. Substitutes keep each
 * section's meaning and stay face-free. Flagged to Mathieu rather than
 * changed silently.
 */

export const LODGE_HERO = {
  eyebrow: "The Lodge",
  headline: "A refuge above the treeline.",
  body: "Remote. Warm. Simple. A place to live together for a week.",
  image: "/images/gallery/gallery-03-aurora-evening.jpg",
  alt: "The aurora borealis over the lit REFUGE61 lodge at night, snow in the foreground.",
};

/** Frames 2–5 and 7 — image + text, alternating sides. */
export const LODGE_SECTIONS: PillarContent[] = [
  {
    id: "a-place-apart",
    eyebrow: "A place apart",
    headline: "Far enough away to feel different.",
    body: "The lodge sits alone in the Norwegian mountains, surrounded by forest, snow and open plateaus. There are no shops, restaurants or nightlife nearby. That is precisely the point.\n\nOutside, groomed cross-country trails pass only a few metres from the lodge and connect to an extensive Nordic ski network.",
    image: "/images/hero/hero-aerial-winter-wide.jpg",
    alt: "Aerial view of the REFUGE61 lodge standing alone among frost-covered forest and open snow plateaus.",
  },
  {
    id: "sleep-well",
    eyebrow: "Sleep well",
    headline: "Warm rooms. Real character.",
    body: "The bedrooms are comfortable, individual and full of the lodge's personality. Natural timber, simple textiles and quiet views make them places to rest rather than hotel rooms to consume.",
    image: "/images/interiors/interiors-bedroom-10.jpg",
    alt: "A made bed against a timber wall beneath a mounted lynx, warm light from a bedside lamp.",
  },
  {
    id: "details-matter",
    eyebrow: "Details matter",
    headline: "A lodge with a story.",
    body: "Wood, stone, old furniture and objects collected over time give the house its character. Nothing feels designed to impress. It simply feels lived in.",
    image: "/images/story/story-detail-09.jpg",
    alt: "A kitchen counter in the lodge with a glass teapot, a cup and cut tulips in a vase.",
  },
  {
    id: "gather",
    eyebrow: "Gather",
    headline: "The heart of the week.",
    body: "Life at REFUGE61 is based on participation rather than service. We cook together, set the table together and share the ordinary tasks of daily life.\n\nMeals, time outside and long conversations become part of the same experience: the pleasure of creating a small temporary community.",
    // Substituted for the mock-up's firepit group photo (identifiable faces).
    // A laid table under candlelight carries the same "shared meal" meaning
    // with no one in frame.
    image: "/images/story/story-detail-07.jpg",
    alt: "A long table in the lodge laid for dinner under candlelight, with tulips and log walls behind.",
  },
  {
    id: "winter-close-up",
    eyebrow: "Winter, close up",
    headline: "Step outside.",
    body: "The boundary between the lodge and the landscape is deliberately thin. Snow, cold air and simple outdoor rituals are part of the experience.",
    // Substituted for the mock-up's swimsuit-in-snow photo (identifiable
    // face). The bathhouse in deep snow keeps the "outdoor winter ritual"
    // reading without picturing anyone.
    image: "/images/architecture/architecture-bathhouse-exterior-01.jpg",
    alt: "The stone-and-glass bathhouse at REFUGE61 surrounded by deep snow.",
  },
];

/** Frame 6 — full-bleed, text over image. */
export const LODGE_RESET = {
  eyebrow: "Reset",
  headline: "When the day slows down.",
  body: "After skiing, the lodge changes rhythm. A fire, a long table, a book, a drink, a conversation — or simply silence. Nothing is programmed.",
  // The mock-up's own photograph for this frame, identified by Mathieu
  // 2026-08-16. Filed in the library as a generic "Family candid", which is
  // why an earlier pass missed it. Portrait original, so the crop is held on
  // the fire and the tray rather than defaulting to centre.
  image: "/images/lifestyle/lifestyle-family-04.jpg",
  objectPosition: "50% 42%",
  alt: "A fire burning in the lodge's stone fireplace at night, with candles and glasses on a copper tray and wine being poured.",
};

/** Frame 8 — the only section with no photograph, by design. */
export const LODGE_COMFORT = {
  eyebrow: "Comfort, without luxury codes",
  headline: "Everything you need.",
  items: [
    "Comfortable heated bedrooms",
    "Bathrooms and practical wash areas",
    "A fully equipped shared kitchen",
    "Large dining and living spaces",
    "Fireplace and quiet corners",
    "Wi-Fi when you need it",
    "Direct access to the snow and trails",
    "Sauna and outdoor winter rituals",
  ],
  asideHeadline: "Simple does not mean basic.",
  asideBody:
    "The lodge is warm, comfortable and practical. What it deliberately does not offer is hotel service, passive consumption or a programme built around you.",
};

/** Frame 9 — closing statement, full-bleed, with the page's one CTA. */
export const LODGE_CLOSING = {
  headline: "A week here is not about being looked after.",
  body: "It is about living well, moving outside, contributing to the group and rediscovering the pleasure of simple things.",
  signature: "REFUGE61° — Back to Basics",
  note: "Every participation begins with a conversation with Bjørn or Mathieu.",
  ctaLabel: "Let's talk",
  ctaHref: "/lets-talk",
  image: "/images/architecture/architecture-lodge-exterior-03.jpg",
  alt: "The snow-covered plateau seen through the lodge's carved timber arches at dusk.",
};
