"use client";

import { motion } from "framer-motion";
import { Baby, Activity, Snowflake, ShieldCheck, User, Dna, HeartPulse, Stethoscope, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const detailedTreatments = [
  {
    id: "ivf",
    title: "In Vitro Fertilization (IVF)",
    description: "Our flagship treatment, combining advanced reproductive science with highly personalized protocols. IVF involves stimulating the ovaries, retrieving mature eggs, fertilizing them in our state-of-the-art lab, and transferring the healthiest embryo to the uterus.",
    benefits: ["Highest success rate per cycle", "Allows for genetic testing (PGT)", "Overcomes severe male infertility (with ICSI)", "Bypasses tubal issues"],
    icon: Baby,
    color: "bg-primary/10 text-primary",
  },
  {
    id: "iui",
    title: "Intrauterine Insemination (IUI)",
    description: "A less invasive first-line treatment where specially washed and concentrated sperm is placed directly into the uterus around the time of ovulation. Ideal for couples with unexplained infertility or mild male factor issues.",
    benefits: ["Less invasive and more natural", "Lower cost compared to IVF", "Requires fewer medications", "Quick procedure with no downtime"],
    icon: Activity,
    color: "bg-secondary/20 text-secondary",
  },
  {
    id: "egg-freezing",
    title: "Egg Freezing & Vitrification",
    description: "Preserve your fertility for the future. Using rapid-freezing vitrification technology, we can safely store your healthy eggs until you are ready to build your family, empowering you to control your reproductive timeline.",
    benefits: ["Stops the biological clock", "High survival rate post-thaw", "Provides peace of mind", "Ideal before medical treatments"],
    icon: Snowflake,
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
  },
  {
    id: "genetic-screening",
    title: "Preimplantation Genetic Testing",
    description: "An advanced add-on to IVF that screens embryos for chromosomal abnormalities (PGT-A) or specific inherited genetic diseases (PGT-M) before implantation. This drastically reduces the risk of miscarriage and ensures a healthy baby.",
    benefits: ["Increases IVF success rates", "Reduces risk of miscarriage", "Prevents passing on genetic diseases", "Reduces time to pregnancy"],
    icon: Dna,
    color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400",
  }
];

export default function TreatmentsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 bg-white dark:bg-background">
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-primary/5">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block"
            >
              Our Medical Services
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-serif font-medium text-foreground mb-6"
            >
              Advanced <span className="text-gradient">Fertility Treatments</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Explore our comprehensive range of specialized treatments designed to overcome complex fertility challenges.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Treatments List */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="space-y-24">
            {detailedTreatments.map((treatment, index) => {
              const Icon = treatment.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div 
                  key={treatment.id}
                  id={treatment.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
                >
                  
                  {/* Visual Side */}
                  <div className="w-full md:w-5/12">
                    <div className="aspect-square rounded-3xl glass flex items-center justify-center border border-border/50 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent z-0"></div>
                      <div className={`w-32 h-32 rounded-full ${treatment.color} flex items-center justify-center z-10 transform group-hover:scale-110 transition-transform duration-500 shadow-2xl`}>
                        <Icon className="w-16 h-16" />
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="w-full md:w-7/12">
                    <span className="text-sm font-bold text-muted-foreground mb-2 block tracking-widest uppercase">Treatment 0{index + 1}</span>
                    <h2 className="text-3xl font-serif font-medium text-foreground mb-4">{treatment.title}</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      {treatment.description}
                    </p>

                    <h4 className="font-medium text-foreground mb-4">Key Benefits:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {treatment.benefits.map((benefit, bIndex) => (
                        <li key={bIndex} className="flex items-start space-x-2 text-muted-foreground">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                          <span className="text-sm leading-tight pt-0.5">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <Link href="/#booking">
                      <Button className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 px-8 h-12">
                        Consult About This Treatment
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-zinc-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-medium mb-6">Not sure which treatment is right for you?</h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
            Every journey is unique. Schedule a consultation with DR.Maheshwari M to undergo a comprehensive evaluation and receive a personalized treatment plan.
          </p>
          <Link href="/#booking">
            <Button size="lg" className="h-14 px-10 rounded-full bg-white text-zinc-900 hover:bg-zinc-200 text-lg shadow-xl">
              Book Your Initial Consultation
            </Button>
          </Link>
        </div>
      </section>

    </div>
  );
}
