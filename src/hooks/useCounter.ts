"use client";

import { useEffect, useState, useRef } from "react";
import { animate, useInView, useMotionValue, useTransform } from "framer-motion";

export function useCounter(target: number, duration: number = 2000) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, target, { duration: duration / 1000, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, target, duration, count]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });
    return () => unsubscribe();
  }, [rounded]);

  return { ref, displayValue };
}
