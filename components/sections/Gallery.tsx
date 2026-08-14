import { GALLERY_IMAGES } from "@/lib/gallery";
import { GalleryTile } from "./GalleryTile";

/**
 * Revised 2026-08-14 per Mathieu Bonnier's feedback: the asymmetric
 * mixed-size grid is gone — each image now gets its own full-bleed screen,
 * stacked with generous space between them, rather than sharing one screen
 * as a mosaic. See GalleryTile for the full reasoning.
 */
export function Gallery() {
  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="bg-snow py-space-16">
      <h2 id="gallery-heading" className="sr-only">
        Gallery
      </h2>

      <div className="flex flex-col gap-space-6">
        {GALLERY_IMAGES.map((image) => (
          <GalleryTile key={image.id} image={image} />
        ))}
      </div>
    </section>
  );
}
