import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-bold text-lg">
                Prime<span className="text-primary">Care</span>
              </span>
            </div>
            <p className="text-sm opacity-70 leading-relaxed mb-6">
              Providing compassionate, evidence-based healthcare for individuals and families. Your health is our priority.
            </p>
            <div className="flex gap-3">
              {["facebook", "instagram", "twitter", "linkedin"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors text-xs uppercase font-bold"
                >
                  {s[0].toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Dr. Smith", path: "/about" },
                { label: "Our Services", path: "/services" },
                { label: "Book Appointment", path: "/book-appointment" },
                { label: "Patient Reviews", path: "/testimonials" },
                { label: "FAQs", path: "/faq" },
                { label: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Clinic Hours */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-primary">Clinic Hours</h4>
            <ul className="space-y-2.5 text-sm opacity-70">
              <li className="flex items-start gap-2"><Clock className="h-4 w-4 mt-0.5 shrink-0" /> Mon – Fri: 9:00 AM – 7:00 PM</li>
              <li className="flex items-start gap-2"><Clock className="h-4 w-4 mt-0.5 shrink-0" /> Saturday: 9:00 AM – 2:00 PM</li>
              <li className="flex items-start gap-2"><Clock className="h-4 w-4 mt-0.5 shrink-0" /> Sunday: Closed</li>
            </ul>
            <div className="mt-4 p-3 rounded-lg bg-primary/20 text-sm">
              <p className="font-medium text-primary">🚨 Emergency Available</p>
              <p className="opacity-80 mt-1">24/7 on-call for emergencies</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-primary">Contact Info</h4>
            <ul className="space-y-3 text-sm opacity-70">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                123 Medical Center Drive, Suite 200, Springfield, IL 62704
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:+11234567890" className="hover:text-primary transition-colors">(123) 456-7890</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:info@primecare.com" className="hover:text-primary transition-colors">info@primecare.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-50">
          <p>© 2026 PrimeCare Clinic. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
