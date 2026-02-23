import { useState } from "react";
import Layout from "@/components/Layout";

const galleryItems = [
  { category: "Clinic Interior", items: [
    { src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop", alt: "Reception area" },
    { src: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=400&fit=crop", alt: "Waiting lounge" },
    { src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop", alt: "Hallway" },
  ]},
  { category: "Treatment Rooms", items: [
    { src: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&h=400&fit=crop", alt: "Consultation room" },
    { src: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600&h=400&fit=crop", alt: "Examination room" },
    { src: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=600&h=400&fit=crop", alt: "Procedure room" },
  ]},
  { category: "Equipment", items: [
    { src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&h=400&fit=crop", alt: "Diagnostic equipment" },
    { src: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=600&h=400&fit=crop", alt: "Lab equipment" },
    { src: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&h=400&fit=crop", alt: "Monitoring devices" },
  ]},
  { category: "Our Team", items: [
    { src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=400&fit=crop", alt: "Medical staff" },
    { src: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&h=400&fit=crop", alt: "Doctor consultation" },
    { src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=400&fit=crop", alt: "Team meeting" },
  ]},
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <Layout>
      <section className="pt-28 pb-16 bg-gradient-to-br from-secondary to-teal-50">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">Our Clinic</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Gallery</h1>
          <p className="text-muted-foreground">Take a virtual tour of our modern, comfortable clinic facilities.</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 space-y-16">
          {galleryItems.map((group) => (
            <div key={group.category}>
              <h2 className="text-2xl font-bold text-foreground mb-6">{group.category}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.items.map((item) => (
                  <button
                    key={item.alt}
                    onClick={() => setLightbox(item.src)}
                    className="group relative overflow-hidden rounded-xl aspect-[3/2] bg-muted"
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors flex items-end">
                      <p className="text-background text-sm font-medium p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                        {item.alt}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-foreground/80 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <img
            src={lightbox.replace("w=600&h=400", "w=1200&h=800")}
            alt="Gallery preview"
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
          />
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
