"use client";

import { useMagnetic } from "@/hooks/useMagnetic";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
}

export function MagneticButton({
  children,
  className,
  variant = "primary",
  ...props
}: MagneticButtonProps) {
  const ref = useMagnetic<HTMLButtonElement>(0.35);

  return (
    <button
      ref={ref}
      className={cn(
        "relative rounded-full px-8 py-4 text-sm font-medium tracking-wide transition-colors duration-300",
        variant === "primary"
          ? "bg-white text-black hover:bg-[#e5e5e5]"
          : "border border-white/20 text-white hover:border-white/50",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}