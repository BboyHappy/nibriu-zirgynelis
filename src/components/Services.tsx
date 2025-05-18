
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
}

const services: Service[] = [
  {
    id: "horseback-riding",
    title: "Jojimo pamokos",
    description: "Išmokite joti saugioje, palaikančioje aplinkoje su mūsų patyrusiais instruktoriais ir švelniais žirgais.",
    price: "Nuo 25 € už pamoką",
    image: "/lovable-uploads/f11ee3e6-a0e2-488e-8b54-626be5c4af92.png",
  },
  {
    id: "nature-hikes",
    title: "Pasivaikščiojimai gamtoje",
    description: "Tyrinėkite nuostabų Nemuno kilpų regioninį parką jodinėdami arba su mūsų draugiškais ūkio šunimis.",
    price: "Nuo 35 € už asmenį",
    image: "/lovable-uploads/a8c23731-eb95-4e42-91db-2a210137ade6.png",
  },
  {
    id: "summer-camps",
    title: "Vaikų vasaros stovyklos",
    description: "Savaitės trukmės nuotykiai, kurių metu vaikai bendrauja su gyvūnais, mokosi apie gamtą ir kuria ilgalaikius prisiminimus.",
    price: "Nuo 200 € už savaitę",
    image: "/lovable-uploads/0d531560-b853-4d0e-aaf2-6b7286ab1632.png",
  },
  {
    id: "photoshoots",
    title: "Fotosesijos ūkyje",
    description: "Įamžinkite gražius prisiminimus mūsų vaizdingame ūkyje su gyvūnais kaip fonu.",
    price: "Nuo 75 € už sesiją",
    image: "/lovable-uploads/4fe840b3-9ff3-49f6-a0dc-444f58373801.png",
  },
];

const Services = () => {
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-active");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const elements = document.querySelectorAll(".fade-in-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="services"
      className="bg-white section-padding"
      ref={sectionRef}
    >
      <div className="container-width">
        <h2 className="text-h2 text-center mb-8 fade-in-on-scroll">
          Atraskite mūsų veiklas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className="overflow-hidden shadow-card fade-in-on-scroll"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="h-[300px] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-h3 mb-2">{service.title}</h3>
                <p className="text-body text-[#757575] mb-4">
                  {service.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-primary">
                    {service.price}
                  </span>
                  <Button className="btn-secondary">Sužinoti daugiau</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
