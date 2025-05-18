
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Calendar, Clock, Users, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    people: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear error when field is being edited
    if (formErrors[name]) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      errors.name = "Būtina įvesti vardą";
    }
    
    if (!formData.email.trim()) {
      errors.email = "Būtina įvesti el. paštą";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Neteisingas el. pašto formatas";
    }
    
    if (!formData.phone.trim()) {
      errors.phone = "Būtina įvesti telefono numerį";
    }
    
    if (!formData.date.trim()) {
      errors.date = "Būtina pasirinkti datą";
    }
    
    if (!formData.time.trim()) {
      errors.time = "Būtina pasirinkti laiką";
    }
    
    if (!formData.people.trim()) {
      errors.people = "Būtina įvesti žmonių skaičių";
    } else if (isNaN(Number(formData.people)) || Number(formData.people) < 1) {
      errors.people = "Įveskite teisingą skaičių";
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Užklausa išsiųsta!",
        description: "Netrukus su jumis susisieksime, kad patvirtintume jūsų vizitą.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        people: "",
        message: "",
      });
    }, 1500);
  };

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
      id="contact"
      className="bg-muted section-padding"
      ref={sectionRef}
    >
      <div className="container-width">
        <h2 className="text-h2 text-center mb-8 fade-in-on-scroll">
          Rezervuokite savo apsilankymą šiandien!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="fade-in-on-scroll">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Vardas ir pavardė</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Įveskite savo vardą ir pavardę"
                  value={formData.name}
                  onChange={handleChange}
                  className={formErrors.name ? "border-destructive" : ""}
                />
                {formErrors.name && (
                  <span className="text-xs text-destructive">
                    {formErrors.name}
                  </span>
                )}
              </div>

              <div>
                <Label htmlFor="email">El. pašto adresas</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Įveskite savo el. paštą"
                  value={formData.email}
                  onChange={handleChange}
                  className={formErrors.email ? "border-destructive" : ""}
                />
                {formErrors.email && (
                  <span className="text-xs text-destructive">
                    {formErrors.email}
                  </span>
                )}
              </div>

              <div>
                <Label htmlFor="phone">Telefono numeris</Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="Įveskite savo telefono numerį"
                  value={formData.phone}
                  onChange={handleChange}
                  className={formErrors.phone ? "border-destructive" : ""}
                />
                {formErrors.phone && (
                  <span className="text-xs text-destructive">
                    {formErrors.phone}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date">Pageidaujama data</Label>
                  <div className="relative">
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      className={formErrors.date ? "border-destructive" : ""}
                    />
                    {formErrors.date && (
                      <span className="text-xs text-destructive">
                        {formErrors.date}
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <Label htmlFor="time">Pageidaujamas laikas</Label>
                  <div className="relative">
                    <Input
                      id="time"
                      name="time"
                      type="time"
                      value={formData.time}
                      onChange={handleChange}
                      className={formErrors.time ? "border-destructive" : ""}
                    />
                    {formErrors.time && (
                      <span className="text-xs text-destructive">
                        {formErrors.time}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="people">Žmonių skaičius</Label>
                <Input
                  id="people"
                  name="people"
                  type="number"
                  min="1"
                  placeholder="Kiek žmonių dalyvaus?"
                  value={formData.people}
                  onChange={handleChange}
                  className={formErrors.people ? "border-destructive" : ""}
                />
                {formErrors.people && (
                  <span className="text-xs text-destructive">
                    {formErrors.people}
                  </span>
                )}
              </div>

              <div>
                <Label htmlFor="message">Papildoma informacija (neprivaloma)</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Parašykite mums apie savo specifinius reikalavimus ar klausimus"
                  value={formData.message}
                  onChange={handleChange}
                  className="resize-none h-32"
                />
              </div>

              <div className="bg-amber-50 p-3 rounded-md border border-amber-200 mb-4">
                <p className="text-sm text-amber-800 flex items-center">
                  <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>Grupiniai užsakymai turi būti atliekami ne mažiau kaip prieš 5 dienas.</span>
                </p>
              </div>

              <Button
                type="submit"
                className="btn-primary w-full"
                disabled={loading}
              >
                {loading ? "Apdorojama..." : "Pateikti"}
              </Button>
            </form>
          </div>

          <div className="fade-in-on-scroll" style={{ animationDelay: "0.2s" }}>
            <div className="bg-white p-6 rounded-lg shadow-card h-full">
              <h3 className="text-h3 mb-6">Kontaktinė informacija</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="mr-4 text-primary flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Adresas</h4>
                    <p className="text-[#757575]">
                      Nemuno 10, Prienų r., Nibriai<br />
                      LT-12345, Lietuva
                    </p>
                    <a
                      href="https://maps.app.goo.gl/yZWFBnFFxXim4tGq7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-text mt-1 inline-block"
                    >
                      Rodyti žemėlapyje
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="mr-4 text-primary flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Telefonas</h4>
                    <a
                      href="tel:+37012345678"
                      className="text-[#757575] hover:text-primary transition-colors"
                    >
                      +370 12 345 678
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="mr-4 text-primary flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Darbo valandos</h4>
                    <p className="text-[#757575]">
                      Pirmadienis - Penktadienis: 9:00 - 18:00<br />
                      Šeštadienis - Sekmadienis: 10:00 - 16:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Calendar className="mr-4 text-primary flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Užsakymo informacija</h4>
                    <p className="text-[#757575]">
                      Rekomenduojame užsisakyti ne mažiau kaip prieš 3 dienas. Grupiniai užsakymai turėtų būti atliekami ne mažiau kaip prieš 5 dienas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
