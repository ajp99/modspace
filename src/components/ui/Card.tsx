import { cn } from "@/lib/cn";
import { VariantProps } from "@/types";
import { forwardRef, HTMLAttributes } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement>, VariantProps {}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "solid", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl p-6 transition-all",
          variant === "solid" && "bg-white shadow-sm border border-neutral-100",
          variant === "glassmorph" && "glassmorph",
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";
