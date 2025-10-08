import { Menu, X, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { useTheme } from "./ThemeProvider";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl lg:text-2xl">La Belle Cuisine</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-muted-foreground transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-muted-foreground transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="hover:text-muted-foreground transition-colors"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="hover:text-muted-foreground transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-muted-foreground transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Desktop CTA and Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <Button onClick={() => scrollToSection("contact")}>
              Reserve a Table
            </Button>
          </div>

          {/* Mobile Theme Toggle and Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left py-2 hover:text-muted-foreground transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left py-2 hover:text-muted-foreground transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("menu")}
                className="text-left py-2 hover:text-muted-foreground transition-colors"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-left py-2 hover:text-muted-foreground transition-colors"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left py-2 hover:text-muted-foreground transition-colors"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full mt-2"
              >
                Reserve a Table
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
