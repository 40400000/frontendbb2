import { cn } from "@/lib/utils";
import React from "react";

interface BleedBackgroundSectionProps {
  children: React.ReactNode;
  className?: string;
  backgroundColor?: string; // Allow customizing the background color
}

export function BleedBackgroundSection({
  children,
  className,
  backgroundColor = "bg-white", // Default to white
}: BleedBackgroundSectionProps) {
  return (
    // Section is relative positioning context with vertical padding
    <section className={cn("relative w-full py-16 md:py-24 lg:py-32", className)}>
      {/* Full-width background element */}
      <div
        className={cn(
          "absolute inset-0 w-screen -z-10 left-1/2 -translate-x-1/2",
          backgroundColor
        )}
      ></div>

      {/* Container centers content normally ON TOP of the background */}
      <div className="container relative px-4 md:px-6"> {/* Standard container padding RESTORED */}
        {children}
      </div>
    </section>
  );
} 