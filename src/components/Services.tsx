
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
    title: "Horseback Riding Lessons",
    description: "Learn to ride in a safe, supportive environment with our experienced instructors and gentle horses.",
    price: "From €25 per lesson",
    image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "nature-hikes",
    title: "Scenic Nature Hikes",
    description: "Explore the beautiful Nemunas Loops Regional Park on horseback or with our friendly farm dogs.",
    price: "From €35 per person",
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "summer-camps",
    title: "Children's Summer Camps",
    description: "Week-long adventures where kids connect with animals, learn about nature, and make lifelong memories.",
    price: "From €250 per week",
    image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "photoshoots",
    title: "Farm Photoshoots",
    description: "Capture beautiful memories with our picturesque farm and animals as your backdrop.",
    price: "From €75 per session",
    image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
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
          Explore Our Activities
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
                  <Button className="btn-secondary">Learn More</Button>
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
