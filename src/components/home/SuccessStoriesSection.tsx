"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Priya & Rahul Sharma",
    location: "Mumbai, India",
    story: "After 5 years of disappointment and two failed cycles elsewhere, DR.Maheshwari M was a beacon of hope. Her personalized approach and the incredible care team made all the difference. We are now blessed with a beautiful baby girl.",
    rating: 5,
    isVideo: true,
  },
  {
    id: 2,
    name: "Sarah & David M.",
    location: "London, UK",
    story: "Traveling to India for IVF was a big decision, but choosing this clinic was the best choice we ever made. The facility is world-class, but it's the genuine warmth and compassion of DR.Maheshwari M that truly stands out.",
    rating: 5,
    isVideo: false,
  },
  {
    id: 3,
    name: "Anjali & Vikram",
    location: "Delhi, India",
    story: "The emotional support we received during our journey here was unparalleled. The transparency in treatment, the advanced labs, and the constant reassurance gave us the strength to keep going. Our twins are our world now.",
    rating: 5,
    isVideo: true,
  },
];

export function SuccessStoriesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  return (
    <section id="success-stories" className="py-24 bg-secondary/5 dark:bg-background relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 right-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 -left-20 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block"
          >
            Real Stories, Real Miracles
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-6"
          >
            Words of <span className="text-gradient">Hope</span>
          </motion.h2>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div className="relative min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col md:flex-row items-center gap-10"
              >
                {/* Video/Image Placeholder Side */}
                <div className="w-full md:w-5/12 aspect-[4/3] rounded-3xl overflow-hidden relative shadow-2xl group cursor-pointer bg-muted">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544126592-807ade215a0b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  
                  {testimonials[currentIndex].isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/50 text-white shadow-xl transform transition-transform group-hover:scale-110">
                        <Play className="w-6 h-6 ml-1" fill="currentColor" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Content Side */}
                <div className="w-full md:w-7/12 glass p-8 md:p-12 rounded-3xl relative">
                  <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10 rotate-180" />
                  
                  <div className="flex space-x-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#d4af37]" fill="#d4af37" />
                    ))}
                  </div>
                  
                  <p className="text-lg md:text-xl text-foreground font-serif leading-relaxed mb-8 italic">
                    "{testimonials[currentIndex].story}"
                  </p>
                  
                  <div>
                    <h4 className="font-serif font-medium text-lg text-foreground">{testimonials[currentIndex].name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonials[currentIndex].location}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center md:justify-end mt-10 md:mt-0 md:absolute md:-bottom-20 md:right-0 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full w-12 h-12 border-primary/20 hover:bg-primary hover:text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full w-12 h-12 border-primary/20 hover:bg-primary hover:text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
