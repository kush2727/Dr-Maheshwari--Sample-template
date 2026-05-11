"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronRight, Heart, Award, Users } from "lucide-react";
import { AboutSection } from "@/components/home/AboutSection";
import { TreatmentsSection } from "@/components/home/TreatmentsSection";
import { JourneySection } from "@/components/home/JourneySection";
import { SuccessStoriesSection } from "@/components/home/SuccessStoriesSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { StatisticsSection } from "@/components/home/StatisticsSection";
import { GallerySection } from "@/components/home/GallerySection";
import { BookingSection } from "@/components/home/BookingSection";
import { FAQSection } from "@/components/home/FAQSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-[position:65%_top] md:bg-center bg-no-repeat"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-white/95 via-white/85 to-white/30 dark:from-background/95 dark:via-background/85 dark:to-background/30" />
        </div>

        {/* Floating Particles/Blobs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-pulse pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-secondary/30 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-pulse pointer-events-none delay-1000" />

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20 backdrop-blur-sm">
                World-Class Fertility Care
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-7xl font-serif font-medium text-foreground leading-[1.1] mb-6"
            >
              Turning Hope Into <br className="hidden md:block" />
              <span className="text-gradient">Parenthood</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl"
            >
              Experience a sanctuary of advanced medical expertise and compassionate care. 
              We blend state-of-the-art IVF technology with personalized treatments to guide you on your journey to parenthood.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg shadow-xl shadow-primary/25">
                <Calendar className="mr-2 w-5 h-5" />
                Book Consultation
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 rounded-full border-primary/20 hover:bg-primary/5 text-lg">
                Start Your Journey
                <ChevronRight className="ml-2 w-5 h-5 text-primary" />
              </Button>
            </motion.div>
          </div>

          {/* Floating Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl"
          >
            <div className="glass p-6 rounded-2xl flex items-center space-x-4 transform transition-transform hover:-translate-y-2 duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-2xl font-serif font-semibold text-foreground">10,000+</h4>
                <p className="text-sm text-muted-foreground">Happy Families</p>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl flex items-center space-x-4 transform transition-transform hover:-translate-y-2 duration-300">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h4 className="text-2xl font-serif font-semibold text-foreground">15+ Years</h4>
                <p className="text-sm text-muted-foreground">Medical Excellence</p>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl flex items-center space-x-4 transform transition-transform hover:-translate-y-2 duration-300">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 text-muted-foreground" />
              </div>
              <div>
                <h4 className="text-2xl font-serif font-semibold text-foreground">95%</h4>
                <p className="text-sm text-muted-foreground">Patient Satisfaction</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <AboutSection />
      <TreatmentsSection />
      <JourneySection />
      <SuccessStoriesSection />
      <WhyChooseUsSection />
      <StatisticsSection />
      <GallerySection />
      <BookingSection />
      <FAQSection />
      
    </div>
  );
}
