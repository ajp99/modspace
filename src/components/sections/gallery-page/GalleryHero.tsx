"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "@/lib/framer-variants";

export function GalleryHero() {
  return (
    <section className="pt-40 pb-16 bg-[var(--color-dark-primary)] text-[var(--color-text-light)]">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
          className="max-w-3xl mx-auto"
        >
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 text-white">
            Explore Our Portfolio
          </h1>
          <p className="text-neutral-400 text-lg mb-10 leading-relaxed font-sans">
            A curated collection of our finest custom interiors and furniture pieces. 
            Filter by category to find inspiration for your next project.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
