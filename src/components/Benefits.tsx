
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
    title: "Pajauskite gamtą",
    description: "Patirkite ramybę Nemuno kilpų regioniniame parke, su kvapą gniaužiančiais vaizdais ir grynu oru.",
    icon: MapPin,
  },
  {
    id: "family",
    title: "Tinka visiems",
    description: "Veiklos skirtos visoms amžiaus grupėms su šilta, svetinga aplinka šeimoms ir vaikams.",
    icon: Users,
  },
  {
    id: "animals",
    title: "Bendravimas su gyvūnais",
    description: "Susipažinkite ir užmegzkite ryšį su mūsų draugiškais žirgais, šunimis, katėmis ir kitais ūkio gyvūnais saugioje aplinkoje.",
    icon: Book,
  },
  {
    id: "seasonal",
    title: "Sezoninės veiklos",
    description: "Mėgaukitės unikaliomis patirtimis visus metus, nuo maudymosi su žirgais iki plaukiojimo Nemune su irklentėmis.",
    icon: Calendar,
  },
  {
    id: "photos",
    title: "Tobulos nuotraukos",
    description: "Nuostabūs gamtos fonai prisiminimams ir ypatingoms progoms.",
    icon: Image,
  },
  {
    id: "flexible",
    title: "Lankstus tvarkaraštis",
    description: "Užsisakykite individualias sesijas arba grupinius renginius, kurie atitinka jūsų tvarkaraštį ir pageidavimus.",
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
          Kodėl rinktis Nibrių žirgynėlį?
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
