"use client";

import { motion } from "framer-motion";
import { scaleIn, viewportConfig } from "@/lib/framer-variants";
import Image from "next/image";

export function Testimonial() {
  return (
    <section className="py-32 bg-[var(--color-light-primary)]">
      <div className="container mx-auto px-6 md:px-12 flex justify-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={scaleIn}
          className="max-w-4xl text-center"
        >
          <div className="mb-10">
            <svg className="w-12 h-12 mx-auto text-[var(--color-accent-gold)] opacity-50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-[var(--color-text-dark)] mb-8">
            "Custom kitchen table is a game-changer! We love the beauty and attention to detail in every piece they created for our new home."
          </h2>
          
          <div className="flex items-center justify-center gap-4">
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[var(--color-accent-gold)]">
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
                alt="Samantha W."
                fill
                className="object-cover"
                sizes="56px"
              />
            </div>
            <div className="text-left">
              <div className="font-manrope font-bold text-[var(--color-text-dark)]">Samantha W.</div>
              <div className="text-sm text-[var(--color-muted-gray)]">Interior Design Client</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
