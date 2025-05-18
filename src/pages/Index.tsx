
import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ScrollToTop from '../utils/ScrollToTop';
import SchemaMarkup from '../utils/SchemaMarkup';

const Index = () => {
  useEffect(() => {
    // Initialize scroll-based animations
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in-on-scroll');
      
      elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        // Check if element is in viewport
        if (position.top < window.innerHeight * 0.9) {
          element.classList.add('fade-in-active');
        }
      });
    };
    
    // Initial check for elements in view
    setTimeout(handleScroll, 100);
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <ScrollToTop />
      <SchemaMarkup />
      <Header />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
