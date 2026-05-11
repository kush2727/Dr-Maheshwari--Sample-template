"use client";

import { motion } from "framer-motion";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
    title: "Premium Patient Care",
    category: "Environment",
    aspect: "aspect-square",
  },
  {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    title: "Advanced IVF Labs",
    category: "Technology",
    aspect: "aspect-[4/5]",
  },
  {
    src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop",
    title: "State-of-the-art Equipment",
    category: "Technology",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop",
    title: "Comfortable Wards",
    category: "Environment",
    aspect: "aspect-video",
  },
  {
    src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
    title: "Consultation Rooms",
    category: "Facility",
    aspect: "aspect-square",
  },
  {
    src: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=1964&auto=format&fit=crop",
    title: "Holistic Healing Space",
    category: "Environment",
    aspect: "aspect-[4/5]",
  },
];

export function GallerySection() {
  return (
    <section id="gallery" className="py-24 bg-white dark:bg-zinc-950 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block"
          >
            A Glimpse Inside
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-6"
          >
            World-Class <span className="text-gradient">Facilities</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Explore our state-of-the-art clinic designed to provide a serene, safe, and technologically advanced environment for your fertility journey.
          </motion.p>
        </div>

        {/* Masonry Layout Approximation using Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(0,1fr)]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-3xl group cursor-pointer ${image.aspect} ${index === 3 ? "md:col-span-2 lg:col-span-1 lg:row-span-1" : ""}`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${image.src})` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-primary font-medium tracking-wider uppercase text-xs mb-2 block">
                  {image.category}
                </span>
                <h4 className="text-white text-xl font-serif font-medium">
                  {image.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
