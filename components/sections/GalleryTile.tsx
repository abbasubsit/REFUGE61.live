import Image from "next/image";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { GalleryImage } from "@/lib/gallery";

type GalleryTileProps = {
  image: GalleryImage;
};

/**
 * Revised 2026-08-14 per Mathieu Bonnier's feedback: no more grid of mixed
 * tile sizes — "the photographs are strong enough to stand alone, we don't
 * need to multiply them on the same screen." Each image is now its own
 * full-bleed moment, the same visual language as HumanExperience and
 * Cinematic Video, rather than a clickable-looking grid tile — so the old
 * hover expand-icon affordance (which implied a lightbox that was never
 * built) is gone too.
 */
export function GalleryTile({ image }: GalleryTileProps) {
  return (
    <RevealOnScroll variant="fade" durationMs={800}>
      <div className="relative h-[80vh] w-full overflow-hidden bg-charcoal">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </RevealOnScroll>
  );
}
