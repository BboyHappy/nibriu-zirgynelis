
import { Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#212121] text-white py-8 px-4">
      <div className="container-width">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">Nibrių žirgynėlis</h3>
            <p className="text-gray-300 mb-4">
              Susisiekite su gamta ir gyvūnais mūsų šeimai draugiškoje kaimo aplinkoje.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=100057225738324&locale=lt_LT"
                className="text-white hover:text-primary transition-colors"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#contact"
                className="text-white hover:text-primary transition-colors"
                aria-label="Email"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Veiklos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-primary transition-colors">
                  Jojimas žirgais
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-primary transition-colors">
                  Pasivaikščiojimai gamtoje
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-primary transition-colors">
                  Vasaros stovyklos
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-primary transition-colors">
                  Fotosesijos ūkyje
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Informacija</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-primary transition-colors">
                  Apie mus
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-primary transition-colors">
                  Atsiliepimai
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Privatumo politika
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Naudojimo sąlygos
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Kontaktai</h3>
            <address className="not-italic text-gray-300">
              <p className="mb-2">Nemuno 10, Prienų r., Nibriai</p>
              <p className="mb-2">LT-12345, Lietuva</p>
              <p className="mb-2">
                <a href="tel:+37012345678" className="hover:text-primary transition-colors">
                  +370 12 345 678
                </a>
              </p>
              <p>
                <a href="mailto:info@nibriuzirgynelis.lt" className="hover:text-primary transition-colors">
                  info@nibriuzirgynelis.lt
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Nibrių žirgynėlis. Visos teisės saugomos.</p>
          <div className="mt-2">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors mx-2">
              Privatumas
            </a>
            <span>|</span>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors mx-2">
              Sąlygos
            </a>
            <span>|</span>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors mx-2">
              Slapukai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
