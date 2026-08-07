import Image from "next/image";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { GalleryImage } from "@/lib/gallery";

type GalleryTileProps = {
  image: GalleryImage;
  delayMs: number;
};

/**
 * Static — no hover-scale (homepage-spec.md §7: "an editorial photograph
 * doesn't wiggle when you look at it"). The expand icon is a purely
 * decorative hover cue (aria-hidden, not a button) rather than a lightbox
 * trigger — no lightbox is built in this pass, so nothing here should
 * imply a click does something yet.
 */
export function GalleryTile({ image, delayMs }: GalleryTileProps) {
  return (
    <RevealOnScroll
      variant="fade-rise"
      durationMs={600}
      delayMs={delayMs}
      className={image.large ? "md:col-span-2 md:row-span-2" : undefined}
    >
      <div className="group relative aspect-[4/5] w-full overflow-hidden bg-cream md:aspect-auto md:h-full">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={image.large ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
          className="object-cover"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-space-2 right-space-2 flex h-8 w-8 items-center justify-center rounded-full bg-charcoal/50 opacity-0 transition-opacity duration-200 ease-editorial group-hover:opacity-100 motion-reduce:transition-none"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
            <path
              d="M9 3H3v6M15 3h6v6M9 21H3v-6M15 21h6v-6"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </RevealOnScroll>
  );
}
