
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
    quote: "Our family had the most amazing experience at Nibrių žirgynėlis. The horses were gentle, the staff was incredibly friendly, and the scenery was breathtaking!",
    author: "Laura Jonaitis",
    role: "Family visitor",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
  },
  {
    id: "testimonial2",
    quote: "My daughter attended the summer camp and came back with so much confidence and joy. The connection she formed with the animals was truly special.",
    author: "Tomas Petrauskas",
    role: "Parent",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
  },
  {
    id: "testimonial3",
    quote: "I've been taking riding lessons for months now, and the progress I've made is incredible. The instructors are knowledgeable, patient, and truly care about both riders and horses.",
    author: "Greta Kazlauskaitė",
    role: "Riding student",
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
          Trusted and Welcoming
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
            <h3 className="text-h3 mb-4">Our Story</h3>
            <p className="text-body mb-4">
              Founded in 2010 by a family passionate about horses and nature,
              Nibrių žirgynėlis has grown into a beloved destination for visitors
              seeking authentic countryside experiences. Located in the heart of
              Nemunas Loops Regional Park, our farm combines traditional
              Lithuanian hospitality with a deep respect for animals and the
              environment.
            </p>
            <p className="text-body">
              Our mission is to create meaningful connections between people,
              animals, and nature, offering experiences that educate, inspire,
              and bring joy to visitors of all ages.
            </p>
          </div>
          <div>
            <h3 className="text-h3 mb-4">Safety First</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li className="text-body">
                All riding activities supervised by certified instructors
              </li>
              <li className="text-body">
                Helmets and safety equipment provided and required
              </li>
              <li className="text-body">
                Horses selected and trained for their gentle temperament
              </li>
              <li className="text-body">
                Regular safety training for all staff members
              </li>
              <li className="text-body">
                First aid certified personnel always present
              </li>
              <li className="text-body">
                Weather-appropriate activity planning and adjustments
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
