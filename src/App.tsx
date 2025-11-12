import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Menu } from "./components/Menu";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Menu />
          <Gallery />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
