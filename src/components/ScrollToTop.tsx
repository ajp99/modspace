"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/cn";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-6 right-6 p-3 rounded-full bg-[var(--color-accent-gold)] text-[var(--color-dark-primary)] shadow-lg transition-all duration-300 hover:scale-110 z-40",
        isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
