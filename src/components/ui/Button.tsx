import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent.pink focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  const variants: Record<Variant, string> = {
    primary:
      "bg-white text-black hover:bg-[#E5E5E5] active:bg-[#CCCCCC] shadow-pill",
    secondary:
      "bg-surface-soft text-text-primary hover:bg-surface-subtle active:bg-surface",
    ghost:
      "bg-transparent text-text-muted hover:bg-surface-subtle active:bg-surface",
  };

  const sizes: Record<Size, string> = {
    md: "px-6 py-2 text-sm",
    lg: "px-8 py-3 text-base",
  };

  return (
    <button
      className={clsx(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      {children}
    </button>
  );
}

