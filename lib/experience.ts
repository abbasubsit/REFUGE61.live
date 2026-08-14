export type ExperiencePillar = {
  id: string;
  label: string;
  image: string;
  alt: string;
};

/**
 * Move and Reset suggest their theme through landscape/architecture; Gather
 * was revised 2026-08-07 (Mathieu Bonnier's feedback) from an empty log
 * corridor — atmospheric, but it didn't actually suggest people gathering —
 * to a candid of friends playing a card game together. Still a "suggest,
 * don't explain" image (cropped to hands and table, not a staged group
 * portrait), just one that finally matches its own label.
 */
export const EXPERIENCE_PILLARS: ExperiencePillar[] = [
  {
    id: "move",
    label: "Move",
    image: "/images/story/story-ski-tracks-landscape.jpg",
    alt: "A cross-country skier crossing a wide snow landscape near REFUGE61.",
  },
  {
    id: "gather",
    label: "Gather",
    image: "/images/lifestyle/lifestyle-rush-06.jpg",
    alt: "Friends playing a card game together around a wooden table.",
  },
  {
    id: "reset",
    label: "Reset",
    image: "/images/lifestyle/lifestyle-iphone-13.jpg",
    alt: "The REFUGE61 bathhouse, a stone-and-glass building set in snow.",
  },
];
