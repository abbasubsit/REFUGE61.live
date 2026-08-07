export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  /** Occupies the 2-column x 2-row anchor position in the grid. Exactly one entry should set this. */
  large?: boolean;
};

/**
 * Revised 2026-08-07 per Mathieu Bonnier's feedback on the first draft: the
 * original 6 leaned too heavily on building/accommodation imagery (a
 * bathhouse exterior, a corridor, a bedroom) — three of six images were
 * "the lodge as an object." Replaced with images of people actually living
 * the week: skiing together, cooking outdoors, an evening aurora over the
 * lit cabin. Kept the aerial (the only wide establishing shot in the set)
 * and the sunset ski-track landscape (a "journey," not a building).
 */
export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "aerial-sunrise",
    src: "/images/gallery/gallery-01-aerial-sunrise.jpg",
    alt: "Aerial view of the REFUGE61 estate at sunrise, surrounded by snow.",
    large: true,
  },
  {
    id: "ski-group",
    src: "/images/gallery/gallery-02-ski-group.jpg",
    alt: "A group of friends on cross-country skis in front of the REFUGE61 lodge.",
  },
  {
    id: "aurora-evening",
    src: "/images/gallery/gallery-03-aurora-evening.jpg",
    alt: "The aurora borealis over the lit REFUGE61 cabin at night.",
  },
  {
    id: "outdoor-cooking",
    src: "/images/gallery/gallery-04-outdoor-cooking.jpg",
    alt: "Friends gathered around an open-fire cooking pot outside REFUGE61.",
  },
  {
    id: "ski-touring-portrait",
    src: "/images/gallery/gallery-05-ski-touring-portrait.jpg",
    alt: "Two people pausing together while ski touring at sunset.",
  },
  {
    id: "ski-touring-sunset",
    src: "/images/gallery/gallery-08-ski-touring-sunset.jpg",
    alt: "A ski track in the snow leading toward the REFUGE61 estate at sunset.",
  },
];
