import Layout from "@/components/Layout";
import { Award, BookOpen, GraduationCap, Heart, Users, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const timeline = [
  { year: "2008", title: "MBBS – Springfield Medical University", desc: "Graduated with honors" },
  { year: "2011", title: "MD – Internal Medicine", desc: "Residency at City General Hospital" },
  { year: "2012", title: "Fellowship in Primary Care", desc: "Advanced training in chronic disease management" },
  { year: "2013", title: "Founded PrimeCare", desc: "Established independent practice" },
];

const certifications = [
  "Board Certified in Internal Medicine",
  "Advanced Cardiac Life Support (ACLS)",
  "Pediatric Advanced Life Support (PALS)",
  "Certified Diabetes Educator",
  "Fellow, American College of Physicians",
  "National Board Certification",
];

const stats = [
  { value: "12+", label: "Years Experience" },
  { value: "5,000+", label: "Patients Treated" },
  { value: "15,000+", label: "Consultations" },
  { value: "98%", label: "Patient Satisfaction" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-28 pb-20 bg-gradient-to-br from-secondary to-teal-50">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">About the Doctor</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Dr. John Smith,{" "}
              <span className="text-primary">MBBS, MD</span>
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With over 12 years of dedicated practice, Dr. John Smith has built a reputation for providing thorough, compassionate, and evidence-based healthcare. His approach combines the precision of modern medicine with the warmth of old-fashioned doctor-patient relationships.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Growing up in a family of healthcare professionals, Dr. Smith was drawn to medicine from an early age. He witnessed firsthand how a skilled and caring physician can transform lives — and that became his life's mission.
            </p>
            <Button asChild>
              <Link to="/book-appointment">Book a Consultation</Link>
            </Button>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-md h-96 rounded-2xl overflow-hidden shadow-xl relative group">
              <img
                src="/assets/images/clinic.jpg"
                alt="PrimeCare Clinic"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center text-primary-foreground">
              <p className="text-3xl md:text-4xl font-bold">{s.value}</p>
              <p className="text-sm opacity-80 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <Heart className="h-10 w-10 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-foreground mb-6">Treatment Philosophy</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            "I believe in treating the whole person, not just symptoms. Every patient deserves to be heard, understood, and cared for with dignity. My goal is to empower patients with knowledge about their health while providing the highest standard of medical care."
          </p>
          <p className="mt-4 text-foreground font-medium">— Dr. John Smith</p>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <GraduationCap className="h-8 w-8 text-primary mx-auto mb-3" />
            <h2 className="text-3xl font-bold text-foreground">Education & Career</h2>
          </div>
          <div className="space-y-6">
            {timeline.map((t, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold shrink-0">
                    {t.year.slice(2)}
                  </div>
                  {i < timeline.length - 1 && <div className="w-0.5 flex-1 bg-primary/20 mt-2" />}
                </div>
                <div className="pb-6">
                  <p className="text-xs text-primary font-medium">{t.year}</p>
                  <h3 className="font-semibold text-foreground">{t.title}</h3>
                  <p className="text-sm text-muted-foreground">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <Award className="h-8 w-8 text-primary mx-auto mb-3" />
            <h2 className="text-3xl font-bold text-foreground">Certifications & Awards</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((c) => (
              <div key={c} className="flex items-center gap-3 p-4 rounded-xl bg-secondary">
                <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                <p className="text-sm font-medium text-foreground">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
