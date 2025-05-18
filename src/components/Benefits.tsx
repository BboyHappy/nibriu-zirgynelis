
import { useEffect, useRef } from "react";
import { Calendar, MapPin, Clock, Users, Image, Book } from "lucide-react";
import { Card } from "@/components/ui/card";
import { LucideProps } from "lucide-react";

interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<LucideProps>;
}

const benefits: Benefit[] = [
  {
    id: "nature",
    title: "Connect with Nature",
    description: "Experience the serene beauty of Nemunas Loops Regional Park, with breathtaking views and fresh air.",
    icon: MapPin,
  },
  {
    id: "family",
    title: "Family Friendly",
    description: "Activities designed for all ages with a warm, welcoming environment for families and children.",
    icon: Users,
  },
  {
    id: "animals",
    title: "Animal Interactions",
    description: "Meet and bond with our friendly horses, dogs, cats, and other farm animals in a safe setting.",
    icon: Book,
  },
  {
    id: "seasonal",
    title: "Seasonal Activities",
    description: "Enjoy unique experiences throughout the year, from summer camps to cozy winter rides.",
    icon: Calendar,
  },
  {
    id: "photos",
    title: "Picture Perfect",
    description: "Stunning natural backdrops for memorable photos and special occasions.",
    icon: Image,
  },
  {
    id: "flexible",
    title: "Flexible Scheduling",
    description: "Book individual sessions or group events that fit your schedule and preferences.",
    icon: Clock,
  },
];

const Benefits = () => {
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
      id="about"
      className="bg-muted section-padding"
      ref={sectionRef}
    >
      <div className="container-width">
        <h2 className="text-h2 text-center mb-8 fade-in-on-scroll">
          Why Choose Nibrių žirgynėlis?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={benefit.id} 
              className="p-6 bg-white shadow-card fade-in-on-scroll"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-h3 mb-2">{benefit.title}</h3>
                <p className="text-body text-[#757575]">
                  {benefit.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
