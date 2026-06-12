"use client";

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function useParallax(offset: number = 50) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return { ref, y };
}
