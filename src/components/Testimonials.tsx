
import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: "testimonial1",
    quote: "Mūsų šeima patyrė nuostabiausią potyri Nibrių žirgynėlyje. Žirgai buvo švelnūs, personalas nepaprastai draugiškas, o kraštovaizdis kvapą gniaužiantis!",
    author: "Laura Jonaitytė",
    role: "Šeimos lankytoja",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
  },
  {
    id: "testimonial2",
    quote: "Mano dukra lankė vasaros stovyklą ir grįžo su didžiuliu pasitikėjimu ir džiaugsmu. Ryšys, kurį ji užmezgė su gyvūnais, buvo tikrai ypatingas.",
    author: "Tomas Petrauskas",
    role: "Tėvas",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
  },
  {
    id: "testimonial3",
    quote: "Aš jau kelis mėnesius lankausi jojimo pamokose, ir mano padaryta pažanga yra neįtikėtina. Instruktoriai yra profesionalūs, kantrūs ir tikrai rūpinasi tiek raiteliais, tiek žirgais.",
    author: "Greta Kazlauskaitė",
    role: "Jojimo mokinė",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
  },
];

const Testimonials = () => {
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
      id="testimonials"
      className="bg-white section-padding"
      ref={sectionRef}
    >
      <div className="container-width">
        <h2 className="text-h2 text-center mb-8 fade-in-on-scroll">
          Patikimas ir svetingas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="p-6 shadow-card fade-in-on-scroll"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="flex flex-col h-full">
                <blockquote className="text-body italic mb-6 flex-grow">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-small text-[#757575]">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 fade-in-on-scroll">
          <div>
            <h3 className="text-h3 mb-4">Mūsų istorija</h3>
            <p className="text-body mb-4">
              Įkurtas 2010 m. šeimos, aistringos žirgams ir gamtai, 
              Nibrių žirgynėlis išaugo į mylimą vietą lankytojams, 
              ieškantiems autentiškų kaimo patirčių. Esame Nemuno kilpų 
              regioninio parko širdyje, kur mūsų ūkis derina tradicinį 
              lietuvišką svetingumą su gilia pagarba gyvūnams ir aplinkai.
            </p>
            <p className="text-body">
              Mūsų misija yra kurti prasmingas sąsajas tarp žmonių, 
              gyvūnų ir gamtos, siūlant patirtis, kurios šviečia, 
              įkvepia ir teikia džiaugsmą visų amžiaus lankytojams.
            </p>
          </div>
          <div>
            <h3 className="text-h3 mb-4">Sauga pirmiausia</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li className="text-body">
                Visoms jojimo veikloms vadovauja profesionalūs instruktoriai
              </li>
              <li className="text-body">
                Teikiami ir privalomi šalmai bei saugos įranga
              </li>
              <li className="text-body">
                Žirgai atrinkti ir apmokyti dėl jų švelnaus temperamento
              </li>
              <li className="text-body">
                Pirmosios pagalbos mokantys darbuotojai visada dalyvauja
              </li>
              <li className="text-body">
                Orams pritaikytas veiklų planavimas ir pritaikymas
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
