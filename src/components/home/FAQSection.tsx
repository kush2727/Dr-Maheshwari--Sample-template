"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is the success rate of IVF at your clinic?",
    answer: "Our clinic maintains one of the highest success rates globally, averaging around 65-70% for women under 35. However, individual success rates depend on various factors including age, medical history, and the specific fertility issues being treated."
  },
  {
    question: "How long does a typical IVF cycle take?",
    answer: "A standard IVF cycle typically takes about 4 to 6 weeks from the initial consultation to the pregnancy test. This includes ovarian stimulation, egg retrieval, fertilization in the lab, and embryo transfer."
  },
  {
    question: "Are there any side effects of fertility treatments?",
    answer: "Some women may experience mild side effects from fertility medications, such as bloating, mood swings, or minor bruising at injection sites. Severe complications like Ovarian Hyperstimulation Syndrome (OHSS) are rare due to our precise monitoring."
  },
  {
    question: "Do you offer genetic screening for embryos?",
    answer: "Yes, we offer advanced Preimplantation Genetic Testing (PGT-A and PGT-M) to screen embryos for chromosomal abnormalities and specific genetic diseases before transfer, significantly improving the chances of a healthy pregnancy."
  },
  {
    question: "What is the age limit for undergoing IVF?",
    answer: "While age is a crucial factor in fertility, we do not have a strict cut-off. We evaluate each patient individually. For women over 40, we might discuss customized protocols or the option of using donor eggs to maximize success."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-zinc-50 dark:bg-zinc-900/50 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block"
          >
            Common Questions
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-6"
          >
            Patient <span className="text-gradient">FAQs</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`glass rounded-2xl overflow-hidden border ${isOpen ? "border-primary/30 shadow-md" : "border-border/50"} transition-all duration-300`}
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between bg-transparent focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-serif font-medium text-lg text-left pr-4 text-foreground">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? "bg-primary text-white" : "bg-primary/10 text-primary"}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 text-muted-foreground leading-relaxed border-t border-border/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
