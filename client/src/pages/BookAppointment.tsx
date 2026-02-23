import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarIcon, Phone, Clock, MapPin, MessageCircle, CheckCircle } from "lucide-react";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
  "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM",
];

const BookAppointment = () => {
  const [date, setDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({ title: "Appointment Requested!", description: "We'll confirm your appointment shortly." });
  };

  if (submitted) {
    return (
      <Layout>
        <section className="pt-28 pb-20 min-h-[70vh] flex items-center bg-gradient-to-br from-secondary to-teal-50">
          <div className="container mx-auto px-4 text-center max-w-lg">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4">Appointment Requested!</h1>
            <p className="text-muted-foreground mb-8">
              Thank you for choosing PrimeCare. Our team will contact you within 2 hours to confirm your appointment.
            </p>
            <Button onClick={() => setSubmitted(false)}>Book Another Appointment</Button>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="pt-28 pb-16 bg-gradient-to-br from-secondary to-teal-50">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">Schedule a Visit</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Book an Appointment</h1>
          <p className="text-muted-foreground">Choose your preferred date and time. We'll confirm within 2 hours.</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name *</label>
                      <Input placeholder="John Doe" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Phone Number *</label>
                      <Input placeholder="(123) 456-7890" required />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Preferred Date *</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full justify-start text-left font-normal">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : "Select a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Preferred Time *</label>
                      <div className="grid grid-cols-4 gap-2 max-h-40 overflow-y-auto pr-1">
                        {timeSlots.map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setSelectedTime(t)}
                            className={`px-2 py-1.5 rounded-md text-xs font-medium border transition-colors ${selectedTime === t
                              ? "bg-primary text-primary-foreground border-primary"
                              : "bg-background text-muted-foreground border-border hover:border-primary/50"
                              }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Describe Your Problem</label>
                    <Textarea placeholder="Tell us briefly about your symptoms or reason for visit..." rows={4} />
                  </div>

                  <Button type="submit" size="lg" className="w-full text-base">
                    Request Appointment
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="font-semibold text-foreground">Clinic Information</h3>
                <div className="flex items-start gap-3 text-sm">
                  <Clock className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Hours</p>
                    <p className="text-muted-foreground">Mon–Fri: 9 AM – 7 PM</p>
                    <p className="text-muted-foreground">Sat: 9 AM – 2 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <Phone className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-muted-foreground">(123) 456-7890</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Address</p>
                    <p className="text-muted-foreground">123 Medical Center Dr, Suite 200</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Book via WhatsApp</h3>
                <p className="text-sm text-muted-foreground mb-4">Quick booking through WhatsApp message</p>
                <Button variant="outline" className="w-full border-green-300 text-green-700 hover:bg-green-100" asChild>
                  <a href="https://wa.me/11234567890" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4 mr-2" /> Chat on WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BookAppointment;
