
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Calendar, Clock, Users, Phone } from "lucide-react";

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
      errors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    }
    
    if (!formData.date.trim()) {
      errors.date = "Date is required";
    }
    
    if (!formData.time.trim()) {
      errors.time = "Time is required";
    }
    
    if (!formData.people.trim()) {
      errors.people = "Number of people is required";
    } else if (isNaN(Number(formData.people)) || Number(formData.people) < 1) {
      errors.people = "Please enter a valid number";
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
        title: "Booking Submitted!",
        description: "We will contact you shortly to confirm your visit.",
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
          Book Your Visit Today!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="fade-in-on-scroll">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
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
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
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
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
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
                  <Label htmlFor="date">Preferred Date</Label>
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
                  <Label htmlFor="time">Preferred Time</Label>
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
                <Label htmlFor="people">Number of People</Label>
                <Input
                  id="people"
                  name="people"
                  type="number"
                  min="1"
                  placeholder="How many people will join?"
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
                <Label htmlFor="message">Additional Information (Optional)</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us any specific requirements or questions"
                  value={formData.message}
                  onChange={handleChange}
                  className="resize-none h-32"
                />
              </div>

              <Button
                type="submit"
                className="btn-primary w-full"
                disabled={loading}
              >
                {loading ? "Processing..." : "Submit"}
              </Button>
            </form>
          </div>

          <div className="fade-in-on-scroll" style={{ animationDelay: "0.2s" }}>
            <div className="bg-white p-6 rounded-lg shadow-card h-full">
              <h3 className="text-h3 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="mr-4 text-primary flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-[#757575]">
                      Nibrių kaimas, Nemunas Loops Regional Park<br />
                      LT-12345, Lithuania
                    </p>
                    <a
                      href="https://goo.gl/maps/examplemap"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-text mt-1 inline-block"
                    >
                      View on map
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="mr-4 text-primary flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
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
                    <h4 className="font-semibold mb-1">Working Hours</h4>
                    <p className="text-[#757575]">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday - Sunday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Calendar className="mr-4 text-primary flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Booking Information</h4>
                    <p className="text-[#757575]">
                      We recommend booking at least 3 days in advance. Group bookings should be made at least 2 weeks in advance.
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
