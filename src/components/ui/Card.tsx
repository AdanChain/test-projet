import type { ReactNode } from "react";
import clsx from "clsx";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-3xl bg-surface border border-border-subtle/60",
        className
      )}
    >
      {children}
    </div>
  );
}

