/**
 * The bottom-anchored gradient used wherever text sits over a photograph
 * (Hero, Cinematic Video) — design-system.md §5: darkens only the bottom
 * third, never the whole frame, so the photograph stays legible as a photo.
 * Extracted here once both sections needed the identical treatment.
 */
export function BottomScrim() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent"
    />
  );
}
