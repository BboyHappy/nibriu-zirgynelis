
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Set loaded state after a short delay to trigger animations
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative min-h-[600px] w-full flex items-center justify-center pt-[80px] pb-[80px] px-[32px] md:pt-[60px] md:pb-[60px] md:px-[24px] sm:px-[16px] overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/lovable-uploads/66de89ce-e32e-4b3d-83fb-9f791c886bd5.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="home"
    >
      <div className="container-width text-center z-10">
        <h1
          className={`text-h1 text-white max-w-[800px] mx-auto mb-6 sm:text-4xl ${
            loaded ? "animate-fade-in-up" : "opacity-0 translate-y-6"
          }`}
          style={{
            animationDelay: "0s",
          }}
        >
          Patirkite Nibrių žirgynėlio magiją
        </h1>
        <h2
          className={`text-h3 text-white/90 max-w-[900px] mx-auto mb-12 sm:text-xl ${
            loaded ? "animate-fade-in-up" : "opacity-0 translate-y-6"
          }`}
          style={{
            animationDelay: "0.2s",
          }}
        >
          Susisiekite su gamta ir gyvūnais šeimoms draugiškoje kaimo aplinkoje.
        </h2>
        <Button
          className={`btn-primary text-lg shadow-lg ${
            loaded ? "animate-fade-in-up" : "opacity-0 translate-y-6"
          }`}
          style={{
            animationDelay: "0.4s",
          }}
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          Užsisakyti nuotykį
        </Button>
      </div>
    </section>
  );
};

export default Hero;
