import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your reservation request! We'll contact you shortly.");
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      info: "123 Gourmet Street, Culinary District, NYC 10001",
    },
    {
      icon: Phone,
      title: "Phone",
      info: "+1 (555) 123-4567",
    },
    {
      icon: Mail,
      title: "Email",
      info: "info@labellecuisine.com",
    },
    {
      icon: Clock,
      title: "Hours",
      info: "Tue-Sun: 5:00 PM - 11:00 PM",
    },
  ];

  return (
    <section id="contact" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="mb-4">Reserve Your Table</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join us for an unforgettable dining experience. Book your table or
            get in touch with us
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="mb-6">Get In Touch</h3>
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="mb-1">{item.title}</h4>
                    <p className="text-muted-foreground">{item.info}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Reservation Form */}
          <Card>
            <CardContent className="p-6 lg:p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block mb-2">
                      Name
                    </label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block mb-2">
                      Date
                    </label>
                    <Input id="date" type="date" required />
                  </div>
                  <div>
                    <label htmlFor="time" className="block mb-2">
                      Time
                    </label>
                    <Input id="time" type="time" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="guests" className="block mb-2">
                    Number of Guests
                  </label>
                  <Input
                    id="guests"
                    type="number"
                    min="1"
                    max="20"
                    placeholder="2"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">
                    Special Requests
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Any dietary restrictions or special occasions?"
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Submit Reservation
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
