import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  { name: "Sarah Mitchell", text: "Dr. Smith is incredibly thorough and caring. He took the time to explain everything and made me feel at ease. Best doctor I've ever had.", rating: 5, date: "2 weeks ago" },
  { name: "Robert Chen", text: "The clinic is modern and clean. Wait times are minimal, and the staff is always friendly. I've been a patient for 3 years now.", rating: 5, date: "1 month ago" },
  { name: "Emily Parker", text: "Dr. Smith caught a health issue early during my annual checkup that other doctors missed. I'm grateful for his attention to detail.", rating: 5, date: "3 weeks ago" },
  { name: "Michael Torres", text: "Excellent chronic care management. My diabetes has been so much better since I started seeing Dr. Smith. Highly recommended!", rating: 5, date: "1 month ago" },
  { name: "Jennifer Adams", text: "The entire family goes here — from my 4-year-old to my 72-year-old mother. Dr. Smith treats everyone with equal care and patience.", rating: 5, date: "2 months ago" },
  { name: "David Wilson", text: "Very professional environment. The appointment booking process is smooth, and I rarely wait more than 5 minutes past my scheduled time.", rating: 4, date: "1 month ago" },
  { name: "Lisa Nguyen", text: "I was nervous about a minor procedure, but Dr. Smith and his team made it completely painless. Great bedside manner and follow-up care.", rating: 5, date: "6 weeks ago" },
  { name: "James Brown", text: "After years of bouncing between doctors, I finally found one who actually listens. Dr. Smith changed my perspective on healthcare.", rating: 5, date: "3 months ago" },
];

const Testimonials = () => {
  const avgRating = (reviews.reduce((a, r) => a + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <Layout>
      <section className="pt-28 pb-16 bg-gradient-to-br from-secondary to-teal-50">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">Patient Reviews</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">What Our Patients Say</h1>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex items-center gap-1 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-current" />
              ))}
            </div>
            <span className="text-2xl font-bold text-foreground">{avgRating}</span>
            <span className="text-muted-foreground">from {reviews.length * 15}+ reviews</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((r) => (
              <Card key={r.name} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                        {r.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">{r.name}</p>
                        <p className="text-xs text-muted-foreground">{r.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-0.5 text-yellow-500">
                      {[...Array(r.rating)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed italic">"{r.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
