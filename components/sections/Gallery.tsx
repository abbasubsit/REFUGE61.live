import { GALLERY_IMAGES } from "@/lib/gallery";
import { Container } from "@/components/ui/Container";
import { GalleryTile } from "./GalleryTile";

const STAGGER_MS = 100;

/**
 * Asymmetric editorial grid (homepage-spec.md §7): one large tile spans
 * 2 columns x 2 rows, the other five are 1x1 — achieved with plain CSS
 * Grid auto-placement (the large tile is simply first in source order with
 * `col-span-2 row-span-2`; the grid places the rest around it) rather than
 * named template areas. Explicit `auto-rows` values keep row height
 * predictable so the 2-row span lines up cleanly with two stacked 1x1 tiles.
 */
export function Gallery() {
  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="bg-snow py-space-16">
      <Container>
        <h2 id="gallery-heading" className="sr-only">
          Gallery
        </h2>

        <div className="grid grid-cols-1 gap-space-3 md:grid-cols-3 md:auto-rows-[220px] md:gap-space-4 lg:auto-rows-[300px]">
          {GALLERY_IMAGES.map((image, index) => (
            <GalleryTile key={image.id} image={image} delayMs={index * STAGGER_MS} />
          ))}
        </div>
      </Container>
    </section>
  );
}
