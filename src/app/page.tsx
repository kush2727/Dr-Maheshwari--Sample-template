"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
      <section className="relative min-h-[100vh] flex flex-col justify-center pt-24 pb-12 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 z-0 bg-background">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10" />
        </div>

        {/* Floating Particles/Blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-pulse pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-pulse pointer-events-none delay-1000" />

        <div className="container relative z-10 mx-auto px-4 md:px-6 flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center mb-16">
            
            {/* Left Content */}
            <div className="max-w-3xl pt-10 lg:pt-0">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="inline-block py-1.5 px-4 rounded-full bg-white dark:bg-zinc-900 text-primary font-medium text-sm mb-6 border border-primary/20 shadow-sm">
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
                <Button size="lg" variant="outline" className="h-14 px-8 rounded-full border-primary/20 hover:bg-primary/5 text-lg bg-white/50 backdrop-blur-sm dark:bg-black/50">
                  Start Your Journey
                  <ChevronRight className="ml-2 w-5 h-5 text-primary" />
                </Button>
              </motion.div>
            </div>

            {/* Right Image Frame (Reference Style) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative mx-auto w-full max-w-[480px] lg:max-w-none lg:pl-10 mt-10 lg:mt-0"
            >
              {/* Main Framed Image */}
              <div className="relative aspect-[4/5] rounded-[2rem] border-[16px] border-[#C23B7A] overflow-hidden bg-white shadow-2xl relative z-10">
                <Image 
                  src="/doctor-1.jpeg" 
                  alt="DR.Maheshwari M" 
                  fill 
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Decorative Border Accents from Reference */}
              <div className="absolute top-1/2 -left-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md z-20 border-2 border-[#C23B7A]">
                <Award className="w-5 h-5 text-[#C23B7A]" />
              </div>



              {/* Bottom Left Name Card */}
              <div className="absolute -bottom-6 -left-4 md:-bottom-10 md:-left-12 bg-[#FFF8F2] dark:bg-zinc-900 p-5 md:p-6 rounded-2xl shadow-xl z-20 border border-[#F5E6EC] w-[280px]">
                <h4 className="text-[#A0451A] dark:text-[#C23B7A] font-bold text-lg mb-1">DR.Maheshwari M</h4>
                <p className="text-[#A0451A] dark:text-muted-foreground text-sm font-medium mb-2">Managing Director</p>
                <p className="text-[#D3794D] dark:text-zinc-500 text-xs leading-tight">
                  MBBS, MS, Reproductive Medicine<br/>
                  IVF & Fertility Specialist
                </p>
              </div>
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
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h4 className="text-2xl font-serif font-semibold text-foreground">Expert</h4>
                <p className="text-sm text-muted-foreground">Medical Care</p>
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
