"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Calendar, CheckCircle2 } from "lucide-react";

export function BookingSection() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    treatment: "",
    date: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 5000);
        // Reset form state if desired
      } else {
        console.error("Failed to submit form");
        alert("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-secondary/10 dark:bg-zinc-950">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto glass rounded-3xl overflow-hidden shadow-2xl border border-primary/20">
          <div className="flex flex-col lg:flex-row">
            
            {/* Left Side: Info */}
            <div className="lg:w-5/12 bg-primary p-12 text-primary-foreground relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2" />
              
              <div className="relative z-10">
                <span className="text-white/80 font-medium tracking-wider uppercase text-sm mb-4 block">
                  Take The First Step
                </span>
                <h3 className="text-4xl font-serif font-medium text-white mb-6">
                  Book Your Consultation
                </h3>
                <p className="text-white/90 leading-relaxed mb-12">
                  Begin your journey to parenthood with a comprehensive evaluation and personalized guidance from DR.Maheshwari M. Our care team is ready to support you.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Flexible Scheduling</p>
                      <p className="text-sm text-white/80">In-clinic or virtual consultations available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="lg:w-7/12 p-8 md:p-12 bg-white dark:bg-zinc-900">
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-4 min-h-[400px]"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-green-100/50">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-serif font-medium text-foreground">Request Received</h4>
                  <p className="text-muted-foreground max-w-sm">
                    Thank you! Our care coordinator will contact you shortly to confirm your appointment time.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Full Name</label>
                      <input 
                        required 
                        type="text" 
                        placeholder="e.g. Priya Sharma"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-zinc-50 dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Phone Number</label>
                      <input 
                        required 
                        type="tel" 
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-zinc-50 dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                        onChange={(e) => setFormState({...formState, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email Address</label>
                      <input 
                        required 
                        type="email" 
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-zinc-50 dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Preferred Date</label>
                      <input 
                        required 
                        type="date" 
                        className="w-full px-4 py-3 rounded-xl border border-border bg-zinc-50 dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                        onChange={(e) => setFormState({...formState, date: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Treatment Interest</label>
                    <select 
                      className="w-full px-4 py-3 rounded-xl border border-border bg-zinc-50 dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      onChange={(e) => setFormState({...formState, treatment: e.target.value})}
                    >
                      <option value="">Select an option</option>
                      <option value="ivf">IVF Treatment</option>
                      <option value="iui">IUI Procedure</option>
                      <option value="freezing">Egg Freezing</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Additional Message (Optional)</label>
                    <textarea 
                      rows={4}
                      placeholder="Please share any specific concerns or medical history..."
                      className="w-full px-4 py-3 rounded-xl border border-border bg-zinc-50 dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-medium rounded-xl shadow-lg shadow-primary/25 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Processing...</span>
                    ) : (
                      <>
                        <span>Submit Request</span>
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
