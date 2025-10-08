import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Menu() {
  const menuItems = [
    {
      name: "Grilled Ribeye Steak",
      description: "Premium aged beef with seasonal vegetables and truffle sauce",
      price: "$48",
      image: "https://images.unsplash.com/photo-1676471912422-defa79bd178c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nJTIwc3RlYWt8ZW58MXx8fHwxNzU5ODM4MTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Handmade Pasta",
      description: "Fresh pasta with wild mushrooms, parmesan, and white wine sauce",
      price: "$32",
      image: "https://images.unsplash.com/photo-1712746784296-e62c1cc7b1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGRpc2glMjByZXN0YXVyYW50fGVufDF8fHx8MTc1OTkwMTg0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Fresh Seafood Platter",
      description: "Daily catch including lobster, prawns, and fresh oysters",
      price: "$56",
      image: "https://images.unsplash.com/photo-1519351635902-7c60d09cb2ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWFmb29kJTIwcGxhdHRlcnxlbnwxfHx8fDE3NTk4NTU2NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Chocolate Fondant",
      description: "Rich chocolate cake with vanilla ice cream and berry compote",
      price: "$14",
      image: "https://images.unsplash.com/photo-1644158776192-2d24ce35da1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0JTIwY2hvY29sYXRlJTIwY2FrZXxlbnwxfHx8fDE3NTk3OTc4MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

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
          {menuItems.map((item, index) => (
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
