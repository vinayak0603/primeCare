import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import {
  Stethoscope, Activity, Shield, Baby, Syringe, Scissors,
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "General Health Checkups",
    desc: "Comprehensive evaluations to assess your overall health status, detect potential issues early, and establish a baseline for ongoing wellness.",
    why: "Regular checkups catch health problems before they become serious, saving you time, money, and worry.",
    benefits: ["Early detection of chronic conditions", "Personalized health recommendations", "Complete blood work & vital assessment"],
    faqs: [
      { q: "How often should I get a checkup?", a: "Adults should have an annual checkup. Those with chronic conditions may need visits every 3–6 months." },
      { q: "What does a checkup include?", a: "Physical examination, blood pressure, blood tests, BMI assessment, and a review of your medical history." },
      { q: "Do I need to fast before a checkup?", a: "If blood work is included, we recommend fasting for 8–12 hours beforehand." },
    ],
  },
  {
    icon: Activity,
    title: "Chronic Disease Management",
    desc: "Expert, ongoing care for conditions like diabetes, hypertension, thyroid disorders, and heart disease. We create personalized management plans.",
    why: "Chronic conditions need consistent monitoring and adjustment to prevent complications and maintain quality of life.",
    benefits: ["Customized treatment plans", "Regular monitoring & adjustments", "Lifestyle and dietary guidance"],
    faqs: [
      { q: "Can chronic conditions be cured?", a: "While many chronic conditions can't be cured, they can be effectively managed to allow a normal, healthy life." },
      { q: "How often will I need follow-ups?", a: "Typically every 1–3 months depending on the condition and its stability." },
      { q: "Will I need medication long-term?", a: "It depends on the condition. Some patients manage through lifestyle changes; others require ongoing medication." },
    ],
  },
  {
    icon: Shield,
    title: "Preventive Health Screening",
    desc: "Proactive screening programs designed to identify risk factors and health issues before symptoms appear.",
    why: "Prevention is better than cure. Early screening significantly reduces the risk of serious health complications.",
    benefits: ["Age-appropriate screening packages", "Cancer risk assessments", "Heart health evaluation"],
    faqs: [
      { q: "At what age should screening start?", a: "Basic screening should begin at age 18, with more comprehensive tests from age 40 onward." },
      { q: "What screenings do you offer?", a: "Blood sugar, cholesterol, cancer markers, thyroid function, ECG, and more." },
      { q: "Are screenings covered by insurance?", a: "Most preventive screenings are covered. We can help verify your coverage." },
    ],
  },
  {
    icon: Baby,
    title: "Pediatric & Family Care",
    desc: "Gentle healthcare for children and comprehensive care for the entire family, from newborns to seniors.",
    why: "A family-focused approach ensures continuity of care and a deeper understanding of hereditary health patterns.",
    benefits: ["Growth & development monitoring", "Vaccination schedules", "Family health history tracking"],
    faqs: [
      { q: "What ages do you treat?", a: "We treat patients of all ages, from infants to elderly family members." },
      { q: "Do you provide vaccinations?", a: "Yes, we follow CDC-recommended vaccination schedules for all age groups." },
      { q: "Can the whole family visit the same doctor?", a: "Absolutely. Dr. Smith provides comprehensive care for every member of the family." },
    ],
  },
  {
    icon: Syringe,
    title: "Vaccinations & Immunizations",
    desc: "Complete immunization services for children and adults, including flu shots, travel vaccines, and routine boosters.",
    why: "Vaccinations are one of the most effective ways to prevent serious diseases and protect community health.",
    benefits: ["Full CDC-recommended schedules", "Travel medicine consultations", "Employer/school compliance records"],
    faqs: [
      { q: "Are vaccines safe?", a: "Yes. All vaccines we administer are FDA-approved and have undergone rigorous safety testing." },
      { q: "Do you offer flu shots?", a: "Yes, we offer annual flu shots typically starting in September each year." },
      { q: "Can adults get vaccinated?", a: "Absolutely. Many adults need boosters or vaccines they may have missed." },
    ],
  },
  {
    icon: Scissors,
    title: "Minor Procedures",
    desc: "In-office procedures including wound care, mole removal, joint injections, and abscess drainage performed safely and efficiently.",
    why: "Many minor procedures can be handled in the clinic without the cost and wait of a hospital visit.",
    benefits: ["Same-day scheduling available", "Local anesthesia for comfort", "Follow-up care included"],
    faqs: [
      { q: "Is local anesthesia used?", a: "Yes, all procedures are performed with appropriate local anesthesia for your comfort." },
      { q: "How long do procedures take?", a: "Most minor procedures take 15–45 minutes depending on complexity." },
      { q: "When can I return to normal activities?", a: "Most patients resume normal activities the same day or within 24–48 hours." },
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      <section className="pt-28 pb-16 bg-gradient-to-br from-secondary to-teal-50">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">Our Expertise</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h1>
          <p className="text-muted-foreground leading-relaxed">
            Comprehensive healthcare services designed around your needs. Each service is delivered with the highest standard of care and professionalism.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 space-y-20">
          {services.map((s, i) => (
            <div key={s.title} className={`grid lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <s.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{s.title}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                <div className="p-4 rounded-xl bg-secondary mb-6">
                  <h4 className="font-semibold text-foreground text-sm mb-1">Why is this important?</h4>
                  <p className="text-sm text-muted-foreground">{s.why}</p>
                </div>
                <h4 className="font-semibold text-foreground text-sm mb-3">Key Benefits</h4>
                <ul className="space-y-2 mb-6">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" /> {b}
                    </li>
                  ))}
                </ul>
                <Button asChild>
                  <Link to="/book-appointment">Book Now</Link>
                </Button>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-4">Frequently Asked Questions</h4>
                    <Accordion type="single" collapsible>
                      {s.faqs.map((f, j) => (
                        <AccordionItem key={j} value={`faq-${j}`}>
                          <AccordionTrigger className="text-sm text-left">{f.q}</AccordionTrigger>
                          <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Services;
