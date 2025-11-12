import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import MenuLists from "../services/menu";

export function Menu() {

  return (
    <section id="menu" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="mb-4">Our Signature Dishes</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each dish is carefully crafted by our award-winning chef using the
            finest ingredients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {MenuLists.map((item, index) => (
            <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
              <div className="relative h-48 lg:h-56 overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4 lg:p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="flex-1">{item.name}</h3>
                  <span className="text-primary ml-2">{item.price}</span>
                </div>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
