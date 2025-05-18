
import { Facebook, Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#212121] text-white py-8 px-4">
      <div className="container-width">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">Nibrių žirgynėlis</h3>
            <p className="text-gray-300 mb-4">
              Connect with nature and animals in our family-friendly countryside escape.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a
                href="mailto:info@nibriuzirgynelis.lt"
                className="text-white hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Activities</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-primary transition-colors">
                  Horseback Riding
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-primary transition-colors">
                  Nature Hikes
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-primary transition-colors">
                  Summer Camps
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-primary transition-colors">
                  Farm Photoshoots
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-primary transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contact</h3>
            <address className="not-italic text-gray-300">
              <p className="mb-2">Nibrių kaimas, Nemunas Loops Regional Park</p>
              <p className="mb-2">LT-12345, Lithuania</p>
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
          <p>© {new Date().getFullYear()} Nibrių žirgynėlis. All rights reserved.</p>
          <div className="mt-2">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors mx-2">
              Privacy
            </a>
            <span>|</span>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors mx-2">
              Terms
            </a>
            <span>|</span>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors mx-2">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
