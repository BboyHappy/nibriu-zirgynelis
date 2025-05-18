
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Facebook } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { name: "Pagrindinis", href: "#" },
    { name: "Veiklos", href: "#services" },
    { name: "Apie mus", href: "#about" },
    { name: "Atsiliepimai", href: "#testimonials" },
    { name: "Kontaktai", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white/95 shadow-md z-50 transition-all duration-300 ${
        scrolled ? "h-[60px] md:h-[50px]" : "h-[80px] md:h-[60px]"
      }`}
    >
      <div className="container-width h-full flex items-center justify-between">
        <a href="#" className="flex-shrink-0">
          <h1 className="text-xl md:text-lg font-bold text-primary">
            Nibrių žirgynėlis
          </h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-body text-base text-[#212121] hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
          <a
            href="https://www.facebook.com/profile.php?id=100057225738324&locale=lt_LT"
            className="text-[#212121] hover:text-primary transition-colors duration-300"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook size={20} />
          </a>
        </nav>

        <div className="hidden md:block">
          <Button
            className="btn-primary"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Rezervacija
          </Button>
        </div>

        {/* Mobile Navigation Trigger */}
        <button
          className="md:hidden text-[#212121] p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            <X size={24} aria-hidden="true" />
          ) : (
            <Menu size={24} aria-hidden="true" />
          )}
        </button>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-white pt-[80px] md:pt-[60px]">
            <nav className="flex flex-col items-center p-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-body text-lg py-4 text-[#212121] hover:text-primary transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="https://www.facebook.com/profile.php?id=100057225738324&locale=lt_LT"
                className="font-body text-lg py-4 text-[#212121] hover:text-primary transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Facebook size={20} className="inline mr-2" /> Facebook
              </a>
              <Button
                className="btn-primary mt-4 w-full"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  setMobileMenuOpen(false);
                }}
              >
                Rezervacija
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
