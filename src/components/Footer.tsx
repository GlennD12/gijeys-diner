import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-8">
          {/* Brand */}
          <div>
            <h3 className="mb-4">La Belle Cuisine</h3>
            <p className="opacity-90">
              Experience the finest culinary journey where tradition meets
              innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="opacity-90 hover:opacity-100 transition-opacity">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="opacity-90 hover:opacity-100 transition-opacity">
                  About
                </a>
              </li>
              <li>
                <a href="#menu" className="opacity-90 hover:opacity-100 transition-opacity">
                  Menu
                </a>
              </li>
              <li>
                <a href="#gallery" className="opacity-90 hover:opacity-100 transition-opacity">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="opacity-90 hover:opacity-100 transition-opacity">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center opacity-90">
          <p>&copy; 2025 La Belle Cuisine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
