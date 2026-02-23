import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, ArrowRight } from "lucide-react";

const posts = [
  {
    title: "When to See a Doctor for a Persistent Cough",
    excerpt: "A cough that lasts more than three weeks could signal an underlying condition. Learn when it's time to seek professional help and what to expect during your visit.",
    date: "Feb 10, 2026",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&h=400&fit=crop",
    category: "General Health",
  },
  {
    title: "The Importance of Annual Health Checkups",
    excerpt: "Regular health checkups are the cornerstone of preventive care. Discover why skipping them could cost you more than just money in the long run.",
    date: "Jan 28, 2026",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    category: "Preventive Care",
  },
  {
    title: "Managing Diabetes: A Complete Guide",
    excerpt: "Living with diabetes doesn't mean giving up the life you love. This guide covers diet, exercise, medication, and monitoring strategies for effective management.",
    date: "Jan 15, 2026",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop",
    category: "Chronic Care",
  },
];

const Blog = () => {
  return (
    <Layout>
      <section className="pt-28 pb-16 bg-gradient-to-br from-secondary to-teal-50">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">Health Insights</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Blog</h1>
          <p className="text-muted-foreground">Expert health tips and insights from Dr. Smith and our medical team.</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.title} className="group overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">{post.category}</span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <CalendarDays className="h-3 w-3" /> {post.date}
                    </span>
                  </div>
                  <h3 className="font-bold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                  <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary font-medium text-sm">
                    Read More <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
