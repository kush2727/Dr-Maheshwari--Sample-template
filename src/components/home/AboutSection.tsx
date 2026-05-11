"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, CheckCircle2, Stethoscope, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";


export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-full overflow-hidden border-8 border-white dark:border-background shadow-2xl aspect-[4/5] max-w-md mx-auto">
              <Image 
                src="/doctor-1.jpeg" 
                alt="DR.Maheshwari M" 
                fill 
                className="object-cover"
              />
            </div>
            

          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">Meet The Specialist</span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-6 leading-tight">
              DR.Maheshwari M
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              DR.Maheshwari M is recognized globally for her compassionate approach and exceptional success rates in complex infertility cases.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              She believes that every parenthood journey is unique. By combining cutting-edge medical technology with personalized emotional support, she ensures that you receive the highest standard of care at every step.
            </p>


            <Button size="lg" className="h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg shadow-xl shadow-primary/25">
              Read Full Profile
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
