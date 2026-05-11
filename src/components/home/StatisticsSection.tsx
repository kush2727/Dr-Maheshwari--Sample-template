"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring } from "framer-motion";
import { Baby, Activity, Globe, Users } from "lucide-react";

function Counter({ value, suffix = "", delay = 0 }: { value: number, suffix?: string, delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: 2000,
  });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        springValue.set(value);
      }, delay * 1000);
    }
  }, [isInView, value, springValue, delay]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue.toLocaleString()}{suffix}
    </span>
  );
}

const stats = [
  {
    label: "Successful Pregnancies",
    value: 12500,
    suffix: "+",
    icon: Baby,
    color: "text-primary",
  },
  {
    label: "IVF Procedures",
    value: 15000,
    suffix: "+",
    icon: Activity,
    color: "text-secondary",
  },
  {
    label: "International Patients",
    value: 2000,
    suffix: "+",
    icon: Globe,
    color: "text-blue-500",
  },
  {
    label: "Dedicated Staff",
    value: 50,
    suffix: "+",
    icon: Users,
    color: "text-emerald-500",
  },
];

export function StatisticsSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-zinc-900 text-white">
      {/* Background Video/Image Overlay Placeholder */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-zinc-900" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-colors text-center group"
              >
                <div className={`w-16 h-16 rounded-full bg-white/5 mx-auto mb-6 flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110 group-hover:bg-white/10 ${stat.color}`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h4 className="text-4xl md:text-5xl font-serif font-medium mb-3">
                  <Counter value={stat.value} suffix={stat.suffix} delay={index * 0.1} />
                </h4>
                <p className="text-zinc-400 font-medium tracking-wide uppercase text-sm">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
