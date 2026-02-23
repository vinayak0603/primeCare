import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart, Shield, Stethoscope, Baby, Star, Phone, MapPin, Clock,
  Users, Award, Activity, CheckCircle,
} from "lucide-react";

const services = [
  { icon: Stethoscope, title: "General Health Checkups", desc: "Comprehensive health assessments tailored to your needs" },
  { icon: Activity, title: "Chronic Disease Management", desc: "Expert care for diabetes, hypertension & more" },
  { icon: Shield, title: "Preventive Care", desc: "Stay ahead with proactive health screening programs" },
  { icon: Baby, title: "Pediatric Care", desc: "Gentle, compassionate healthcare for your children" },
];

const trustPoints = [
  { icon: Award, label: "Experienced Doctor", value: "12+ Years" },
  { icon: Activity, label: "Modern Equipment", value: "Latest Tech" },
  { icon: Heart, label: "Personalized Care", value: "1-on-1 Attention" },
  { icon: Users, label: "Happy Patients", value: "5,000+" },
];

const testimonials = [
  { name: "Sarah Mitchell", text: "Dr. Smith is incredibly thorough and caring. He took the time to explain everything and made me feel at ease. Best doctor I've ever had.", rating: 5 },
  { name: "Robert Chen", text: "The clinic is modern and clean. Wait times are minimal, and the staff is always friendly. I've been a patient for 3 years now.", rating: 5 },
  { name: "Emily Parker", text: "Dr. Smith caught a health issue early during my annual checkup that other doctors missed. I'm grateful for his attention to detail.", rating: 5 },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-20 md:pt-0 min-h-[90vh] flex items-center bg-gradient-to-br from-secondary via-background to-teal-50">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="py-12 md:py-24 lg:py-32">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <CheckCircle className="h-4 w-4" /> Trusted by 5,000+ patients
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
              Your Health,{" "}
              <span className="text-primary">Our Priority</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-2 font-medium">
              Dr. John Smith, MBBS, MD
            </p>
            <p className="text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Providing compassionate, evidence-based care for over 12 years. From routine checkups to chronic disease management — your well-being is in expert hands.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="text-base px-8">
                <Link to="/book-appointment">Book Appointment</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base px-8">
                <a href="tel:+11234567890">
                  <Phone className="h-4 w-4 mr-2" /> Call Now
                </a>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <div className="flex items-center gap-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                <strong className="text-foreground">4.8</strong> from 120+ Google Reviews
              </span>
            </div>
          </div>
          <div className="hidden lg:flex justify-center relative">
            <div className="w-[420px] h-[520px] rounded-2xl overflow-hidden shadow-2xl relative group">
              <img
                src="/assets/images/doctor.jpg"
                alt="Dr. John Smith"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            <div className="absolute bottom-8 -left-4 bg-background rounded-xl shadow-lg p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold">12+ Years</p>
                <p className="text-xs text-muted-foreground">Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Strip */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Key Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Card key={s.title} className="group hover:shadow-lg hover:border-primary/30 transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <s.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/services">View All Services →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Trusted Healthcare You Deserve</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map((t) => (
              <div key={t.label} className="text-center p-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <t.icon className="h-8 w-8 text-primary" />
                </div>
                <p className="text-2xl font-bold text-foreground mb-1">{t.value}</p>
                <p className="text-sm text-muted-foreground">{t.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-8 rounded-2xl bg-gradient-to-r from-primary/5 to-teal-50 border border-primary/10">
            <div className="flex items-center gap-1 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 fill-current" />
              ))}
            </div>
            <div className="text-center md:text-left">
              <p className="text-3xl font-bold text-foreground">4.8 / 5.0</p>
              <p className="text-muted-foreground">Based on <strong>120+</strong> Google Reviews</p>
            </div>
            <Button variant="outline" className="ml-auto">
              Read Reviews
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">Patient Stories</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">What Our Patients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card key={t.name} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 text-yellow-500 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4 italic">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                      {t.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <p className="font-medium text-foreground text-sm">{t.name}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">Find Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Clinic Location</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl overflow-hidden h-80 bg-muted flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjYiTiAxMjLCsDI1JzEwLjAiVw!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Clinic Location"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Address</h3>
                  <p className="text-muted-foreground text-sm">123 Medical Center Drive, Suite 200, Springfield, IL 62704</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Hours</h3>
                  <p className="text-muted-foreground text-sm">Mon–Fri: 9 AM – 7 PM · Sat: 9 AM – 2 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Phone</h3>
                  <p className="text-muted-foreground text-sm">(123) 456-7890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-primary py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-primary-foreground text-center md:text-left">
            <h3 className="text-xl font-bold">Need Urgent Medical Attention?</h3>
            <p className="text-primary-foreground/80 text-sm">Our clinic is available for emergency consultations. Call us now.</p>
          </div>
          <Button size="lg" variant="secondary" className="text-base font-semibold" asChild>
            <a href="tel:+11234567890">
              <Phone className="h-5 w-5 mr-2" /> (123) 456-7890
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
