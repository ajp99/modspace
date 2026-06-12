"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/lib/constants";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-[var(--color-dark-primary)] text-[var(--color-light-primary)] py-4 shadow-md" : "bg-transparent text-[var(--color-text-dark)] py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        
        <img src="/modspace-logo.png" width="125px"></img>
        {/* <a href="#" className="font-serif text-2xl font-bold uppercase tracking-wider">
          Mod Space Interior
        </a>
         */}

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 font-manrope text-sm font-medium">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-[var(--color-accent-gold)] transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Button variant={isScrolled ? "glassmorph" : "solid"}>Book a consultation</Button>
        </div>

        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-[var(--color-dark-primary)] text-white py-6 shadow-xl"
          >
            <ul className="flex flex-col items-center gap-6 font-manrope text-lg">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[var(--color-accent-gold)] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <Button variant="solid" onClick={() => setIsMobileMenuOpen(false)}>Book a consultation</Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
