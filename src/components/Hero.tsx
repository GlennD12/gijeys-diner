import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1759419038843-29749ac4cd2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcmVzdGF1cmFudCUyMGludGVyaW9yfGVufDF8fHx8MTc1OTgwOTAwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Restaurant interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 lg:mb-6">
          Experience Culinary Excellence
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 lg:mb-10 max-w-2xl mx-auto opacity-90">
          Where tradition meets innovation in every dish
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-white/90"
            onClick={() => scrollToSection("menu")}
          >
            View Menu
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10"
            onClick={() => scrollToSection("contact")}
          >
            Reserve a Table
          </Button>
        </div>
      </div>
    </section>
  );
}
