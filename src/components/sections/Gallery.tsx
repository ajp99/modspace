"use client";

import { useParallax } from "@/hooks/useParallax";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop", alt: "Modern armchair" },
  { src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop", alt: "Living room setup" },
  { src: "https://images.unsplash.com/photo-1618220179428-22790b46a0eb?q=80&w=2574&auto=format&fit=crop", alt: "Bedroom interior" },
  { src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop", alt: "Sofa detail" }
];

export function Gallery() {
  const { ref: parallaxRef, y: y1 } = useParallax(60);
  const { ref: ref2, y: y2 } = useParallax(-40);

  return (
    <section id="gallery" className="py-24 bg-[var(--color-dark-primary)] text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-16 text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-white">More of our work</h2>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <motion.div ref={parallaxRef} style={{ y: y1 }} className="space-y-8 md:space-y-16 mt-0 md:mt-24">
            <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden group">
              <Image src={galleryImages[0].src} alt={galleryImages[0].alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden group">
              <Image src={galleryImages[2].src} alt={galleryImages[2].alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </motion.div>

          <motion.div ref={ref2} style={{ y: y2 }} className="space-y-8 md:space-y-16 mt-8 md:mt-0">
            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden group">
              <Image src={galleryImages[1].src} alt={galleryImages[1].alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden group">
              <Image src={galleryImages[3].src} alt={galleryImages[3].alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </motion.div>
        </div>

        <div className="mt-20 text-center relative z-20">
          <Link href="/gallery">
            <Button variant="outline" className="border-white/20 text-white hover:border-[var(--color-accent-gold)]">
              View full gallery
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
