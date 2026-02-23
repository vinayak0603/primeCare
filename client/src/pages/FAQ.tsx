import Layout from "@/components/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const faqs = [
  { q: "Is the consultation painful or uncomfortable?", a: "Not at all. General physician consultations are non-invasive. Dr. Smith takes care to ensure your comfort during examinations, and any procedures will be explained beforehand." },
  { q: "How many sessions will I need for my condition?", a: "It depends on the condition. A routine checkup is a single visit. Chronic conditions may require follow-ups every 1–3 months. Dr. Smith will discuss a personalized care plan during your first visit." },
  { q: "What are the consultation fees?", a: "Initial consultations are $150, and follow-up visits are $100. We offer transparent pricing with no hidden costs. Special packages are available for ongoing chronic care management." },
  { q: "Do you accept insurance?", a: "Yes, we accept most major insurance plans including Blue Cross Blue Shield, Aetna, Cigna, UnitedHealthcare, and Medicare. Please contact us to verify your specific coverage." },
  { q: "How do I book an appointment?", a: "You can book online through our website, call us at (123) 456-7890, or send a WhatsApp message. We typically confirm appointments within 2 hours." },
  { q: "What should I bring to my first visit?", a: "Please bring a valid photo ID, your insurance card, a list of current medications, and any recent medical records or test results. Arriving 15 minutes early helps with paperwork." },
  { q: "Do you handle medical emergencies?", a: "We provide urgent care during clinic hours and have a 24/7 on-call service for established patients. For life-threatening emergencies, please call 911 immediately." },
  { q: "Can I get prescriptions refilled?", a: "Yes. Established patients can request prescription refills by calling the clinic or through our patient portal. Please allow 24–48 hours for processing." },
  { q: "Do you provide telemedicine consultations?", a: "Yes, we offer video consultations for follow-up visits, medication reviews, and minor concerns. This is especially convenient for chronic disease management patients." },
  { q: "What age groups do you treat?", a: "We treat patients of all ages — from infants to elderly. As a family care practitioner, Dr. Smith provides comprehensive healthcare for every stage of life." },
];

const FAQ = () => {
  return (
    <Layout>
      <section className="pt-28 pb-16 bg-gradient-to-br from-secondary to-teal-50">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">Got Questions?</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Frequently Asked Questions</h1>
          <p className="text-muted-foreground">Find answers to common questions about our services, fees, and policies.</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border rounded-xl px-6 data-[state=open]:shadow-sm">
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center p-8 rounded-2xl bg-secondary">
            <h3 className="text-xl font-bold text-foreground mb-2">Still have questions?</h3>
            <p className="text-muted-foreground mb-4">Don't hesitate to reach out. We're here to help.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="tel:+11234567890">Call (123) 456-7890</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
