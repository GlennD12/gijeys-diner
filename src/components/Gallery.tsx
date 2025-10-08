import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Gallery() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1750943082012-efe6d2fd9e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwZm9vZCUyMHBsYXRpbmd8ZW58MXx8fHwxNzU5ODYxMDgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Gourmet plating",
    },
    {
      url: "https://images.unsplash.com/photo-1676471912422-defa79bd178c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nJTIwc3RlYWt8ZW58MXx8fHwxNzU5ODM4MTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Steak dish",
    },
    {
      url: "https://images.unsplash.com/photo-1712746784296-e62c1cc7b1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGRpc2glMjByZXN0YXVyYW50fGVufDF8fHx8MTc1OTkwMTg0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Pasta dish",
    },
    {
      url: "https://images.unsplash.com/photo-1519351635902-7c60d09cb2ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWFmb29kJTIwcGxhdHRlcnxlbnwxfHx8fDE3NTk4NTU2NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Seafood platter",
    },
    {
      url: "https://images.unsplash.com/photo-1644158776192-2d24ce35da1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0JTIwY2hvY29sYXRlJTIwY2FrZXxlbnwxfHx8fDE3NTk3OTc4MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Chocolate dessert",
    },
    {
      url: "https://images.unsplash.com/photo-1759419038843-29749ac4cd2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcmVzdGF1cmFudCUyMGludGVyaW9yfGVufDF8fHx8MTc1OTgwOTAwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Restaurant atmosphere",
    },
  ];

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
          {images.map((image, index) => (
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
