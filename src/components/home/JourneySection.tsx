"use client";

import { motion } from "framer-motion";
import { MessageSquare, Microscope, FileText, Syringe, Baby, HeartHandshake } from "lucide-react";

const steps = [
  {
    title: "Initial Consultation",
    description: "A comprehensive discussion about your medical history, concerns, and family goals.",
    icon: MessageSquare,
  },
  {
    title: "Advanced Diagnosis",
    description: "State-of-the-art testing to accurately identify the underlying causes of infertility.",
    icon: Microscope,
  },
  {
    title: "Personalized Plan",
    description: "Designing a custom treatment protocol tailored specifically to your unique biological needs.",
    icon: FileText,
  },
  {
    title: "The Treatment",
    description: "Undergoing the IVF procedure with continuous monitoring, care, and emotional support.",
    icon: Syringe,
  },
  {
    title: "Pregnancy Care",
    description: "Close monitoring during the crucial early stages of pregnancy to ensure maternal and fetal health.",
    icon: Baby,
  },
  {
    title: "Parenthood",
    description: "Celebrating the arrival of your little one and the beautiful beginning of your family.",
    icon: HeartHandshake,
  },
];

export function JourneySection() {
  return (
    <section className="py-24 bg-white dark:bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block"
          >
            The Path to Success
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-6"
          >
            Your IVF <span className="text-gradient">Journey</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            A step-by-step guide through our holistic and transparent approach to fertility treatment.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/10 via-primary to-secondary/10 -translate-x-1/2 rounded-full opacity-30" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className="relative md:flex items-center justify-between w-full">
                  {/* Icon Node in Center (Desktop only) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full glass border-2 border-primary items-center justify-center z-10 shadow-[0_0_15px_rgba(229,193,88,0.5)]">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Mobile Layout */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="md:hidden flex items-start space-x-4 relative before:absolute before:left-6 before:top-14 before:bottom-[-48px] before:w-0.5 before:bg-primary/20 last:before:hidden"
                  >
                    <div className="w-12 h-12 rounded-full glass border-2 border-primary flex items-center justify-center shrink-0 z-10 shadow-[0_0_10px_rgba(229,193,88,0.3)]">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="glass p-6 rounded-2xl flex-1">
                      <span className="text-xs font-bold text-primary mb-1 block">STEP 0{index + 1}</span>
                      <h3 className="text-xl font-serif font-medium text-foreground mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </motion.div>

                  {/* Desktop Layout - Left Side */}
                  <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`hidden md:block w-5/12 ${isEven ? "text-right pr-12" : "opacity-0"}`}
                  >
                    {isEven && (
                      <div className="glass p-8 rounded-3xl hover:shadow-xl transition-shadow duration-300 relative group overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="text-sm font-bold text-primary mb-2 block tracking-widest">STEP 0{index + 1}</span>
                        <h3 className="text-2xl font-serif font-medium text-foreground mb-3">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    )}
                  </motion.div>

                  {/* Desktop Layout - Right Side */}
                  <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`hidden md:block w-5/12 ${!isEven ? "text-left pl-12" : "opacity-0"}`}
                  >
                    {!isEven && (
                      <div className="glass p-8 rounded-3xl hover:shadow-xl transition-shadow duration-300 relative group overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-l from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="text-sm font-bold text-primary mb-2 block tracking-widest">STEP 0{index + 1}</span>
                        <h3 className="text-2xl font-serif font-medium text-foreground mb-3">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    )}
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
