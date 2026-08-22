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
 * Image choices all follow his sitewide rule: no identifiable faces.
 * Move and Reset are face-free (distant skier; empty terrace). Expedition
 * uses lifestyle-rush-08.jpg (a tent glowing at dusk in a snow bowl) — no
 * people in frame at all, and distinct in mood from every other image here.
 *
 * Gather answers his "USE PICTURES WITH POTATOES AND VEGETABLES" note
 * directly (2026-08-16, source supplied by Mathieu:
 * "RUSH MISUSAETER/D8722791-...heic"). That file shipped into public/ as
 * lifestyle-rush-09.heic and was never usable — HEIC doesn't render in
 * browsers, a gap docs/asset-library.md §11 already flagged — so it was
 * converted to lifestyle-rush-09-vegetables.jpg for web use. It happens to
 * satisfy both of his requirements at once: a group peeling potatoes,
 * carrots, parsnips and beetroot together, framed above the shoulders so
 * no face is visible. Replaces lifestyle-rush-06.jpg (the card game),
 * which stays in the library and is still used by Version 2/3.
 */
export const PILLARS_V4: PillarV4[] = [
  {
    id: "move",
    eyebrow: "Move",
    headline: "Move through the landscape.",
    body: "Each day begins outside. Ski, walk, explore — at your own pace, together with the group or alone. No programme to complete, no performance to prove. Just the pleasure of moving through a vast winter landscape.",
    image: "/images/story/move.png",
    alt: "A cross-country skier crossing a wide snow landscape near REFUGE61.",
  },
  {
    id: "gather",
    eyebrow: "Gather",
    headline: "Come back together.",
    body: "Life at REFUGE61 happens around the table. We cook together, share the meal, open a bottle, talk and laugh. There is no staff behind the scenes — everyone takes part in making the house come alive.",
    image: "/images/lifestyle/lifestyle-rush-09-vegetables.jpg",
    alt: "Several people peeling potatoes, carrots and parsnips together along a kitchen counter, photographed from the shoulders down.",
  },
  {
    id: "reset",
    eyebrow: "Reset",
    headline: "Make room for something else.",
    body: "A week away from schedules, noise and everyday routines. Time to slow down, read, sit by the fire, step outside or simply do nothing. Sometimes, a little distance is all we need.",
    image: "/images/story/rest.png",
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
