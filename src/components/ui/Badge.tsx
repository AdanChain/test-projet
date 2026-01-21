import type { ReactNode } from "react";
import clsx from "clsx";

type BadgeProps = {
  children: ReactNode;
  className?: string;
  tone?: "default" | "pink" | "yellow" | "blue";
};

export function Badge({
  children,
  className,
  tone = "default",
}: BadgeProps) {
  const tones: Record<NonNullable<BadgeProps["tone"]>, string> = {
    default:
      "bg-surface-subtle/80 text-text-muted border border-border-subtle",
    pink: "bg-accent.pink/10 text-accent.pink border border-accent.pink/40",
    yellow:
      "bg-accent.yellow/10 text-accent.yellow border border-accent.yellow/40",
    blue: "bg-accent.blue/10 text-accent.blue border border-accent.blue/40",
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

