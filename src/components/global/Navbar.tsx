"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Calendar } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Treatments", href: "/treatments" },
  { name: "Success Stories", href: "/#success-stories" },
  { name: "Gallery", href: "/#gallery" },
  { name: "FAQ", href: "/#faq" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3 shadow-sm" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col">
          <span className="font-serif text-2xl tracking-tight text-primary font-medium">Dr. Maheshwari</span>
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground">IVF & Fertility Specialist</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="rounded-full border-primary/20 hover:bg-primary/5">
            <Phone className="w-4 h-4 mr-2 text-primary" />
            <span className="text-primary font-medium">+91 98765 43210</span>
          </Button>
          <Button className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20">
            <Calendar className="w-4 h-4 mr-2" />
            Book Consultation
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 glass shadow-xl border-t border-border flex flex-col p-6 space-y-6 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-serif font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-border flex flex-col space-y-4">
              <Button variant="outline" className="w-full justify-center rounded-full border-primary/20 hover:bg-primary/5">
                <Phone className="w-4 h-4 mr-2 text-primary" />
                <span className="text-primary font-medium">+91 98765 43210</span>
              </Button>
              <Button className="w-full justify-center rounded-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <Calendar className="w-4 h-4 mr-2" />
                Book Consultation
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
