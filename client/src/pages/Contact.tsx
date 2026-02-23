import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Car } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
  };

  return (
    <Layout>
      <section className="pt-28 pb-16 bg-gradient-to-br from-secondary to-teal-50">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Contact Us</h1>
          <p className="text-muted-foreground">We'd love to hear from you. Reach out for appointments, inquiries, or feedback.</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Clinic Details</h2>
            {[
              { icon: MapPin, label: "Address", text: "123 Medical Center Drive, Suite 200, Springfield, IL 62704" },
              { icon: Phone, label: "Phone", text: "(123) 456-7890" },
              { icon: Mail, label: "Email", text: "info@primecare.com" },
              { icon: Clock, label: "Hours", text: "Mon–Fri: 9 AM – 7 PM · Sat: 9 AM – 2 PM · Sun: Closed" },
              { icon: MapPin, label: "Landmark", text: "Near Springfield Central Hospital, opposite City Park" },
              { icon: Car, label: "Parking", text: "Free parking available in the building garage (Level B1)" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">{item.label}</h3>
                  <p className="text-muted-foreground text-sm">{item.text}</p>
                </div>
              </div>
            ))}

            <div className="rounded-2xl overflow-hidden h-64 mt-6">
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
          </div>

          {/* Contact Form */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name *</label>
                  <Input placeholder="Your name" required />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
                  <Input type="email" placeholder="your@email.com" required />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                  <Input placeholder="(123) 456-7890" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Message *</label>
                  <Textarea placeholder="How can we help you?" rows={5} required />
                </div>
                <Button type="submit" size="lg" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
