export type PillarV4 = {
  id: string;
  eyebrow: string;
  headline: string;
  body: string;
  image: string;
  alt: string;
};

/**
 * Version 4 only (2026-08-14, Mathieu Bonnier's third feedback round) — the
 * expanded Move/Gather/Reset copy plus the new Expedition pillar. Separate
 * from lib/experience.ts (still used by Version 2 and 3's single-word
 * pillars) so this content can't collide with or drift into those versions.
 *
 * Image choices all follow his new sitewide rule: no identifiable faces.
 * Move and Reset were already face-free (distant skier; empty terrace).
 * Gather keeps lifestyle-rush-06.jpg — already cropped to hands/table, the
 * one partially visible face is angled down and blurred, not identifiable —
 * rather than lifestyle-family-14.jpg (outdoor group cooking), whose faces
 * are clearly recognisable. No literal "potatoes and vegetables" / food-prep
 * photo exists anywhere in the asset library (confirmed directly against
 * docs/asset-library.md §7, which already flagged this same gap) — flagged
 * back to Mathieu rather than guessing with an unrelated image. Expedition
 * uses lifestyle-rush-08.jpg (a tent glowing at dusk in a snow bowl, ski
 * track leading in) — no people in frame at all, and distinct in mood from
 * every other image on the page.
 */
export const PILLARS_V4: PillarV4[] = [
  {
    id: "move",
    eyebrow: "Move",
    headline: "Move through the landscape.",
    body: "Each day begins outside. Ski, walk, explore — at your own pace, together with the group or alone. No programme to complete, no performance to prove. Just the pleasure of moving through a vast winter landscape.",
    image: "/images/story/story-ski-tracks-landscape.jpg",
    alt: "A cross-country skier crossing a wide snow landscape near REFUGE61.",
  },
  {
    id: "gather",
    eyebrow: "Gather",
    headline: "Come back together.",
    body: "Life at REFUGE61 happens around the table. We cook together, share the meal, open a bottle, talk and laugh. There is no staff behind the scenes — everyone takes part in making the house come alive.",
    image: "/images/lifestyle/lifestyle-rush-06.jpg",
    alt: "Friends playing a card game together around a wooden table, faces out of frame.",
  },
  {
    id: "reset",
    eyebrow: "Reset",
    headline: "Make room for something else.",
    body: "A week away from schedules, noise and everyday routines. Time to slow down, read, sit by the fire, step outside or simply do nothing. Sometimes, a little distance is all we need.",
    image: "/images/lifestyle/lifestyle-iphone-13.jpg",
    alt: "An empty snow-covered terrace with a stone fireplace, quiet and still.",
  },
];

export const EXPEDITION_V4: PillarV4 = {
  id: "expedition",
  eyebrow: "Go further",
  headline: "Some days take us further.",
  body: "When conditions allow, we leave the lodge for a longer journey into the mountains — on skis, on foot, carrying what we need for the day. Not a race and not a performance. Simply the pleasure of going somewhere together.",
  image: "/images/lifestyle/lifestyle-rush-08.jpg",
  alt: "A tent glowing orange at dusk in a snow-covered mountain bowl, a ski track leading toward it.",
};
