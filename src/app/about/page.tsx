"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, BookOpen, Heart, Stethoscope, GraduationCap, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 bg-white dark:bg-background">
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-secondary/5">
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
          <div className="absolute -top-40 -right-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block"
            >
              Our Founder
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-serif font-medium text-foreground mb-6"
            >
              Dr. Priya <span className="text-gradient">Maheshwari</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              A globally recognized fertility specialist dedicated to turning the dream of parenthood into a beautiful reality through science and compassion.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Image Column */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-5/12"
            >
              <div className="sticky top-32">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
                  <Image 
                    src="/doctor-portrait.png" 
                    alt="Dr. Maheshwari" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                    <p className="text-white font-serif text-2xl font-medium">Chief Medical Director</p>
                    <p className="text-white/80">MBBS, MS (OBGYN), F.N.B (Reproductive Medicine)</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Text Column */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-7/12 space-y-12"
            >
              <div>
                <h3 className="text-3xl font-serif font-medium text-foreground mb-6">The Journey</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Dr. Maheshwari's journey into reproductive medicine was fueled by a singular passion: to offer hope where there seemed to be none. After completing her specialized training at some of the world's most prestigious medical institutions, she returned with a vision to build a sanctuary for couples struggling with infertility.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Over the past 20 years, she has pioneered several advanced IVF techniques in the region, bringing international standards of care to her patients. Her approach is fundamentally rooted in the belief that emotional well-being is just as critical as medical intervention.
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-serif font-medium text-foreground mb-6">Philosophy & Care</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="glass p-6 rounded-2xl border border-border/50">
                    <Heart className="w-8 h-8 text-secondary mb-4" />
                    <h4 className="font-serif text-xl mb-2">Holistic Healing</h4>
                    <p className="text-muted-foreground text-sm">Treating the mind, body, and soul. We integrate nutritional counseling and psychological support into every IVF cycle.</p>
                  </div>
                  <div className="glass p-6 rounded-2xl border border-border/50">
                    <Stethoscope className="w-8 h-8 text-primary mb-4" />
                    <h4 className="font-serif text-xl mb-2">Evidence-Based</h4>
                    <p className="text-muted-foreground text-sm">Every protocol is backed by the latest scientific research and rigorous clinical data.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-serif font-medium text-foreground mb-6">Credentials & Recognition</h3>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <GraduationCap className="w-6 h-6 text-primary shrink-0 mt-1 mr-4" />
                    <div>
                      <h5 className="font-medium text-lg">Fellowship in Reproductive Medicine</h5>
                      <p className="text-muted-foreground">National Board of Examinations</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Globe className="w-6 h-6 text-primary shrink-0 mt-1 mr-4" />
                    <div>
                      <h5 className="font-medium text-lg">Member of ESHRE & ASRM</h5>
                      <p className="text-muted-foreground">Active contributor to the European and American Societies for Reproductive Medicine.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Award className="w-6 h-6 text-primary shrink-0 mt-1 mr-4" />
                    <div>
                      <h5 className="font-medium text-lg">Excellence in Healthcare Award 2023</h5>
                      <p className="text-muted-foreground">Recognized nationally for outstanding contribution to women's health.</p>
                    </div>
                  </li>
                </ul>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
