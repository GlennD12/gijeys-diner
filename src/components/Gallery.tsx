import { ImageWithFallback } from "./figma/ImageWithFallback";
import GalleryImages from "../services/gallery";

export function Gallery() {

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="mb-4">Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A glimpse into our culinary artistry and elegant atmosphere
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {GalleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
            >
              <ImageWithFallback
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
