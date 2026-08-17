/**
 * /the-lodge-v2 — a deliberately literal reproduction of Mathieu Bonnier's
 * "REFUGE61 – The Lodge" mock-up PDF (2026-08-16): same 9 frames, same copy,
 * same photographs, same layouts including the multi-image rows, the
 * mixed-size pairs and the rounded card.
 *
 * This exists ALONGSIDE /the-lodge (which renders the same content in the
 * approved REFUGE61 design language) so the client can compare the two and
 * keep whichever he prefers. Neither replaces the other.
 *
 * Note: this version intentionally keeps the two photographs containing
 * identifiable faces (frames 5 and 7), because the brief for this version is
 * fidelity to the mock-up he assembled himself. That conflicts with the
 * sitewide no-identifiable-faces rule from his previous round — flagged for
 * him to settle, not silently resolved. /the-lodge has face-free
 * substitutes for both.
 *
 * Every image below was resolved against the asset library by perceptual
 * matching plus visual confirmation; `note` records the ones worth a second
 * look.
 */

export const X_HERO = {
  title: "THE LODGE",
  headline: "A refuge above the treeline.",
  body: "Remote. Warm. Simple. A place to live together for a week.",
  image: "/images/gallery/gallery-03-aurora-evening.jpg",
  alt: "The aurora borealis over the lit REFUGE61 lodge at night.",
};

export const X_PLACE_APART = {
  eyebrow: "A PLACE APART",
  headline: ["Far enough away", "to feel different."],
  paragraphs: [
    "The lodge sits alone in the Norwegian mountains, surrounded by forest, snow and open plateaus. There are no shops, restaurants or nightlife nearby. That is precisely the point.",
    "Outside, groomed cross-country trails pass only a few metres from the lodge and connect to an extensive Nordic ski network.",
  ],
  image: "/images/hero/hero-bw-facade-east.jpg",
  alt: "The dark log facade of the REFUGE61 lodge with white-framed windows, frost-covered trees behind.",
};

export const X_SLEEP_WELL = {
  eyebrow: "SLEEP WELL",
  headline: "Warm rooms. Real character.",
  body: "The bedrooms are comfortable, individual and full of the lodge's personality. Natural timber, simple textiles and quiet views make them places to rest rather than hotel rooms to consume.",
  images: [
    {
      src: "/images/interiors/interiors-bedroom-16.jpg",
      alt: "A bedroom under the eaves with pale panelled walls and a window beside the bed.",
    },
    {
      src: "/images/interiors/interiors-bedroom-19.jpg",
      alt: "A warmly lit timber bedroom with a window and a mounted bird on the wall.",
    },
    {
      src: "/images/interiors/interiors-bedroom-08.jpg",
      alt: "A bed against a timber wall beneath a mounted lynx, with a bedside lamp.",
    },
    {
      src: "/images/interiors/interiors-bedroom-17.jpg",
      alt: "A pale blue bedroom with a white dresser, a gilt mirror and an open door to a warm room beyond.",
    },
  ],
};

export const X_DETAILS = {
  eyebrow: "DETAILS MATTER",
  headline: "A lodge with a story.",
  body: "Wood, stone, old furniture and objects collected over time give the house its character. Nothing feels designed to impress. It simply feels lived in.",
  imageSmall: {
    src: "/images/story/story-detail-01.jpg",
    alt: "A mounted deer head on a timber wall above a bed, beside a curtained window.",
  },
  imageTall: {
    src: "/images/story/story-detail-09.jpg",
    alt: "A kitchen counter with a glass teapot, a cup and pink tulips in a vase.",
  },
};

export const X_GATHER = {
  eyebrow: "GATHER",
  headline: "The heart of the week",
  paragraphs: [
    "Life at REFUGE61 is based on participation rather than service. We cook together, set the table together and share the ordinary tasks of daily life.",
    "Meals, time outside and long conversations become part of the same experience: the pleasure of creating a small temporary community.",
  ],
  // Mock-up's own choice. Contains identifiable faces — see file header.
  image: "/images/lifestyle/lifestyle-family-14.jpg",
  alt: "A group seated outside the lodge around an open fire pit on a sunny winter day.",
};

export const X_RESET = {
  eyebrow: "RESET",
  headline: "When the day slows down.",
  body: "After skiing, the lodge changes rhythm. A fire, a long table, a book, a drink, a conversation - or simply silence. Nothing is programmed.",
  // The mock-up's own photograph, identified by Mathieu 2026-08-16 (source:
  // "PHOTOS DETAIL CHALET/Famille dans le chalet/cfe4dc6c-...JPG"). It was in
  // the library all along as lifestyle-family-04.jpg, bulk-catalogued as a
  // generic "Family candid" — the mis-filing risk docs/asset-library.md §11
  // already flags. Not the same file as interiors-livingroom-06.jpg, which
  // is this same fireplace in daylight with the fire unlit.
  //
  // Portrait (1536x2048); the PDF frame is a landscape crop of it. objectPosition
  // holds the crop on the fire and the tray rather than defaulting to centre.
  image: "/images/lifestyle/lifestyle-family-04.jpg",
  objectPosition: "50% 42%",
  alt: "A fire burning in the lodge's stone fireplace at night, with candles and glasses on a copper tray and wine being poured.",
};

export const X_WINTER = {
  eyebrow: "WINTER, CLOSE UP",
  headline: "Step outside.",
  body: "The boundary between the lodge and the landscape is deliberately thin. Snow, cold air and simple outdoor rituals are part of the experience.",
  images: [
    {
      // Mock-up's own choice. Contains an identifiable face — see file header.
      src: "/images/lifestyle/lifestyle-family-01.jpg",
      alt: "Someone stepping out into deep snow beside the lodge's stone wall after a sauna.",
    },
    {
      src: "/images/lifestyle/lifestyle-family-21.jpg",
      alt: "The bathhouse glass reflecting a pink winter sunset above banked snow.",
    },
  ],
};

export const X_COMFORT = {
  eyebrow: "COMFORT, WITHOUT LUXURY CODES",
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
  cardHeadline: "Simple does not mean basic.",
  cardBody:
    "The lodge is warm, comfortable and practical. What it deliberately does not offer is hotel service, passive consumption or a programme built around you.",
};

export const X_CLOSING = {
  headline: ["A week here is not about", "being looked after."],
  body: "It is about living well, moving outside, contributing to the group and rediscovering the pleasure of simple things.",
  signature: "REFUGE61° -  BACK TO BASICS",
  note: "Every participation begins with a conversation with Bjorn or Mathieu.",
  ctaLabel: "LET'S TALK",
  ctaHref: "/lets-talk",
  image: "/images/lifestyle/lifestyle-family-20.jpg",
  alt: "Snow-covered plateau and pink-lit mountains seen through the lodge's carved timber arches.",
};
