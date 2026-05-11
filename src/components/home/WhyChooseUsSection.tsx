"use client";

import { motion } from "framer-motion";
import { 
  Microscope, 
  HeartHandshake, 
  Scale, 
  Globe2, 
  LineChart, 
  Flower2 
} from "lucide-react";

const features = [
  {
    title: "Advanced Technology",
    description: "Equipped with next-generation IVF labs, AI-assisted embryo selection, and class 10,000 cleanrooms for optimal culture environments.",
    icon: Microscope,
  },
  {
    title: "Personalized Care",
    description: "Every body is different. We design customized protocols based on your unique hormonal, genetic, and physiological profile.",
    icon: HeartHandshake,
  },
  {
    title: "Ethical Treatment",
    description: "Absolute transparency in procedures, pricing, and expected outcomes with strict adherence to medical ethics.",
    icon: Scale,
  },
  {
    title: "International Standards",
    description: "Our protocols, hygiene standards, and success metrics meet and exceed global benchmarks in reproductive medicine.",
    icon: Globe2,
  },
  {
    title: "High Success Rate",
    description: "Consistently delivering success rates that rank among the top fertility centers globally, even in complex cases.",
    icon: LineChart,
  },
  {
    title: "Compassionate Support",
    description: "Infertility is an emotional journey. Our dedicated counselors and care coordinators are with you 24/7.",
    icon: Flower2,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-white dark:bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Sticky Content */}
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block"
            >
              Why Choose Us
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-6 leading-tight"
            >
              The Gold Standard in <span className="text-gradient-gold">Fertility Care</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              We believe in blending the precision of modern science with the warmth of human compassion. Our holistic approach ensures you feel supported, informed, and empowered at every step.
            </motion.p>
          </div>

          {/* Right Grid Content */}
          <div className="lg:w-2/3 w-full">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="glass p-8 rounded-3xl hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/30 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-serif font-medium text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
