import { useState } from "react";
import emailjs from "emailjs-com";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";

export function Contact() {
  const emailJsUserId = import.meta.env.VITE_EMAILJS_USER_ID || '';
  const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
  const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';

  console.log("EmailJS User ID:", emailJsUserId);
  console.log("EmailJS Service ID:", emailJsServiceId);
  console.log("EmailJS Template ID:", emailJsTemplateId);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    num_of_guests: '',
    special_requests: ''
  });

  const handleChange = (e: React.FormEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  emailjs.init(emailJsUserId);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare email data for EmailJS
    const templateParams = {
      name: formData.name,
      email: formData.email,
      date: formData.date,
      time: formData.time,
      num_of_guests: formData.num_of_guests,
      special_requests: formData.special_requests
    };

    try {
      // Send the email using EmailJS
      const response = await emailjs.send(
        emailJsServiceId,   // Replace with your EmailJS service ID
        emailJsTemplateId,   // Replace with your EmailJS template ID
        templateParams,
        emailJsUserId        // Replace with your EmailJS user ID
      );

      console.log('Email sent successfully:', response);
      alert('Reservation submitted successfully!');

      // Reset form
      setFormData({
        name: '',
        email: '',
        date: '',
        time: '',
        num_of_guests: '',
        special_requests: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error submitting your reservation.');
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      info: "Brgy. Tabun , Mabalacat City, Pampanga, Philippines",
    },
    {
      icon: Phone,
      title: "Phone",
      info: "09489423043",
    },
    {
      icon: Mail,
      title: "Email",
      info: "gijeys@gmail.com",
    },
    {
      icon: Clock,
      title: "Hours",
      info: "Mon-Sat: 9:00 AM - 11:00 PM",
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
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block mb-2">
                      Date
                    </label>
                    <Input
                      id="date"
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block mb-2">
                      Time
                    </label>
                    <Input
                      id="time"
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="guests" className="block mb-2">
                    Number of Guests
                  </label>
                  <Input
                    id="guests"
                    type="number"
                    name="num_of_guests"
                    min="1"
                    max="20"
                    placeholder="2"
                    value={formData.num_of_guests}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="special_requests" className="block mb-2">
                    Special Requests
                  </label>
                  <Textarea
                    id="special_requests"
                    name="special_requests"
                    value={formData.special_requests}
                    onChange={handleChange}
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
