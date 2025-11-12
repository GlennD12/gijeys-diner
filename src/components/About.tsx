import { Clock, Award, Users } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Clock,
      title: "2+ Years",
      description: "Of culinary excellence",
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Michelin star chef",
    },
    {
      icon: Users,
      title: "Premium Service",
      description: "Unforgettable experience",
    },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="mb-4 lg:mb-6">About Gijey's Diner</h2>
          <p className="text-muted-foreground">
            Founded in 2025, Gijey's Diner has been serving exquisite dishes
            that blend traditional Kapampangan cooking techniques with modern
            innovation. Our passionate team is dedicated to creating
            unforgettable dining experiences using only the finest locally
            sourced ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-4">
                  <Icon size={32} />
                </div>
                <h3 className="mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
