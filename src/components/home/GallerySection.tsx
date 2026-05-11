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

        <div className="flex justify-center items-center py-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-12 md:p-16 rounded-3xl border border-primary/10 text-center max-w-xl w-full shadow-xl"
          >
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-serif font-medium text-foreground mb-3">Images Uploading Soon</h3>
            <p className="text-muted-foreground leading-relaxed">
              We are currently curating an exclusive visual tour of our world-class fertility facility. Check back shortly to explore our state-of-the-art clinic.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
