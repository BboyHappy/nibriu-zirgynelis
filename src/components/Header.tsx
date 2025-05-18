
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

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
    { name: "Home", href: "#" },
    { name: "Activities", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
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
        </nav>

        <div className="hidden md:block">
          <Button
            className="btn-primary"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Book a Visit
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
              <Button
                className="btn-primary mt-4 w-full"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  setMobileMenuOpen(false);
                }}
              >
                Book a Visit
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
