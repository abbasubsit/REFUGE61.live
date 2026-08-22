import { isAiGenerated } from "@/lib/aiImages";

type AiLabelProps = {
  /** The same `src` passed to next/image. Renders nothing unless it is listed
   *  in lib/aiImages.ts, so this can be dropped beside any image safely. */
  src: string;
};

/**
 * Discloses that a photograph was generated with AI.
 *
 * Deliberately a persistent caption rather than a hover tooltip: a large share
 * of visitors are on touch devices where hover never fires, and screen readers
 * routinely skip `title` tooltips — so a hover-only disclosure would not
 * actually reach the people it is meant to inform.
 *
 * Kept subtle per Mathieu's brief: 10px, uppercase, sitting in the corner of
 * the frame on a low-opacity charcoal plate so it stays legible over both
 * bright snow and dark timber without competing with the photograph. Sharp
 * 2px corners, matching Button — no blur, no rounded pill.
 *
 * The parent element must be `relative` (every image wrapper on the site
 * already is, because next/image `fill` requires it).
 */
export function AiLabel({ src }: AiLabelProps) {
  if (!isAiGenerated(src)) return null;

  return (
    <span className="pointer-events-none absolute bottom-space-1 right-space-1 rounded-[2px] bg-charcoal/50 px-2 py-1 text-[10px] uppercase leading-none tracking-[0.1em] text-snow/85">
      AI-generated image
    </span>
  );
}
