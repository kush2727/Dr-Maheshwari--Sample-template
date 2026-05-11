"use client";

import { motion } from "framer-motion";
import { 
  Baby, 
  Activity, 
  Snowflake, 
  ShieldCheck, 
  User, 
  Dna, 
  HeartPulse, 
  Stethoscope,
  ArrowRight
} from "lucide-react";

const treatments = [
  {
    title: "IVF Treatment",
    description: "Advanced In Vitro Fertilization with highly personalized protocols to maximize success rates.",
    icon: Baby,
    color: "bg-primary/10 text-primary",
  },
  {
    title: "IUI Procedure",
    description: "Intrauterine Insemination performed with precision, offering a less invasive fertility option.",
    icon: Activity,
    color: "bg-secondary/20 text-secondary",
  },
  {
    title: "Egg Freezing",
    description: "State-of-the-art vitrification technology to preserve your fertility for the future.",
    icon: Snowflake,
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
  },
  {
    title: "Fertility Preservation",
    description: "Comprehensive options for men and women facing medical treatments affecting fertility.",
    icon: ShieldCheck,
    color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
  },
  {
    title: "Male Infertility",
    description: "Specialized diagnostics and advanced treatments including ICSI and surgical sperm retrieval.",
    icon: User,
    color: "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400",
  },
  {
    title: "Genetic Screening",
    description: "PGT-A and PGT-M testing to ensure the transfer of healthy embryos and reduce miscarriage risks.",
    icon: Dna,
    color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400",
  },
  {
    title: "Hormonal Therapy",
    description: "Targeted endocrine treatments to balance hormones and optimize natural fertility.",
    icon: HeartPulse,
    color: "bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400",
  },
  {
    title: "High-Risk Pregnancy",
    description: "Expert maternal-fetal medicine care ensuring safety for both mother and baby.",
    icon: Stethoscope,
    color: "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function TreatmentsSection() {
  return (
    <section id="treatments" className="py-24 bg-zinc-50 dark:bg-zinc-900/50 relative">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-20 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block"
          >
            Our Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-6"
          >
            Comprehensive <span className="text-gradient">Fertility Treatments</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            We offer a full spectrum of advanced reproductive technologies and personalized care plans tailored to your unique path to parenthood.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {treatments.map((treatment, index) => {
            const Icon = treatment.icon;
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="group relative bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/30 overflow-hidden"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${treatment.color}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-serif font-medium text-foreground mb-3">{treatment.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {treatment.description}
                  </p>
                  
                  <a href="#" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors group/btn">
                    Learn More 
                    <ArrowRight className="w-4 h-4 ml-1 transform transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
