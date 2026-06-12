"use client";

import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Footer() {
  return (
    <footer className="bg-[var(--color-dark-primary)] text-[var(--color-text-light)] pt-24 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-16 border-b border-white/10 pb-16">
          <div className="text-center md:text-left">
            <h2 className="font-serif text-3xl font-bold uppercase tracking-wider mb-6 text-white">
              Verdance
            </h2>
            <p className="text-neutral-400 max-w-xs font-sans">
              Elevating spaces with custom-made luxury furniture. Designed for comfort, built to last.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end w-full md:w-auto">
            <h3 className="font-manrope font-semibold text-lg mb-6 text-white">Stay inspired</h3>
            <div className="flex w-full max-w-sm items-center gap-2 relative">
              <input
                type="email"
                placeholder="info@example.com"
                className="w-full h-12 rounded-full bg-white/5 border border-white/10 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-gold)] transition-all placeholder:text-neutral-500 text-white"
              />
              <Button variant="outline" className="absolute right-1 top-1 bottom-1 h-10 px-6 py-0 border-white/20 text-white hover:border-[var(--color-accent-gold)]">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-neutral-500 font-manrope">
          <div className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
          </div>
          <p>&copy; {new Date().getFullYear()} Verdance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
