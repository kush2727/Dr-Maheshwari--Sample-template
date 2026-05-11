"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, CheckCircle2, Stethoscope, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Years Experience", value: "20+", icon: Stethoscope },
  { label: "Successful IVF Cycles", value: "5000+", icon: CheckCircle2 },
  { label: "Awards Won", value: "15+", icon: Award },
  { label: "Global Certifications", value: "8+", icon: GraduationCap },
];

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
                src="/doctor-portrait.png" 
                alt="Dr. Maheshwari" 
                fill 
                className="object-cover"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full border border-primary/20 -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-secondary/20 -z-10" />
            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl z-20 shadow-xl max-w-xs animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-serif font-medium text-sm text-foreground">Top Fertility Expert</p>
                  <p className="text-xs text-muted-foreground">Awarded 2024</p>
                </div>
              </div>
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
              Dr. Maheshwari
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              With over two decades of dedicated experience in reproductive medicine, Dr. Maheshwari is recognized globally for her compassionate approach and exceptional success rates in complex infertility cases.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              She believes that every parenthood journey is unique. By combining cutting-edge medical technology with personalized emotional support, she ensures that you receive the highest standard of care at every step.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-1">
                      <Icon className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-serif font-semibold text-foreground">{stat.value}</h4>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Button size="lg" className="h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg shadow-xl shadow-primary/25">
              Read Full Profile
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
