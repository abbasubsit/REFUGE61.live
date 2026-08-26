/**
 * Images on the site that were generated with AI rather than photographed.
 *
 * Agreed with Mathieu (2026-08-22): AI-generated imagery must be identifiable
 * to visitors. List supplied by the client; see docs/_image-inventory.md for
 * the full per-page inventory the list was marked against.
 *
 * Paths are matched exactly against the `src` passed to next/image, so they
 * must stay in sync with the components. Adding a path here is all that is
 * needed to make the label appear — see components/ui/AiLabel.tsx.
 */
export const AI_GENERATED_IMAGES: ReadonlySet<string> = new Set([
  "/images/lifestyle/admire.png",
  // "/images/story/move.jpeg",
  // "/images/client-update/bjorkasen_03.jpeg",
  "/images/client-update/Repas senioir.png",
  // "/images/client-update/Soiree Feu.png",
  "/images/client-update/REFUGE61_01_arrivee_accueil.jpg",
]);

export function isAiGenerated(src: string): boolean {
  return AI_GENERATED_IMAGES.has(src);
}
