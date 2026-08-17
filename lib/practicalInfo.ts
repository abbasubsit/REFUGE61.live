import type { PillarContent } from "@/components/sections/PillarSection";

/**
 * /practical-information page content (2026-08-16, client-supplied copy —
 * used verbatim, not rewritten). One source of truth for this page; the
 * page component only lays it out, it doesn't hold copy of its own.
 *
 * Images picked after reviewing the asset library directly against the
 * sitewide no-identifiable-faces rule (see docs/asset-library.md):
 * - What to Bring: lifestyle-rush-04.jpg — skis planted in snow at dusk, no
 *   people in frame at all. Preferred over an "equipment flat-lay" feel;
 *   this reads as atmosphere, not a gear shop.
 * - Ski from the Door: story-ski-touring-sunset.jpg — a groomed double
 *   track (visibly two parallel lanes, matching "classic and skating" in
 *   the copy) leading straight toward the lodge buildings in the distance.
 *   Directly shows the track-to-lodge relationship the copy describes, and
 *   has no people in frame either.
 */
export const PRACTICAL_INFO_SECTIONS: PillarContent[] = [
  {
    id: "what-to-bring",
    eyebrow: "Practical information — What to bring",
    headline: "Bring your own, or use ours.",
    body: "If you regularly practise cross-country skiing, we recommend bringing your own equipment — skis, boots and poles — so you can enjoy the week with the equipment you know best. For guests who don't have their own equipment, Nordic skis, boots and poles will be available at REFUGE61 for the duration of the week.\n\nBring good winter clothing and footwear suitable for cold conditions. Before your stay, we will send you a simple packing list.\n\nBed linen and towels are provided.",
    image: "/images/lifestyle/lifestyle-rush-04.jpg",
    alt: "A pair of cross-country skis planted upright in the snow at dusk.",
  },
  {
    id: "ski-from-the-door",
    eyebrow: "Ski from the door",
    headline: "650 kilometres of tracks. Twenty metres from the lodge.",
    body: "Just 20 metres from REFUGE61, you can step onto a groomed cross-country ski trail, prepared for both classic and skating.\n\nFrom there, the trail connects to a network of around 650 kilometres of cross-country ski tracks.\n\nNo transfer. No car. No timetable. Just put on your skis and go — with others or alone, for an hour or for the day.",
    image: "/images/story/story-ski-touring-sunset.jpg",
    alt: "A groomed classic-and-skating ski track leading across snow toward the REFUGE61 lodge in the distance at sunset.",
  },
];
