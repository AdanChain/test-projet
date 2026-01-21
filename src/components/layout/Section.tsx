import type { ReactNode } from "react";
import clsx from "clsx";

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
  as?: "section" | "footer";
};

// Vertical rhythm wrapper matching Figma spacing between blocks
export function Section({
  id,
  className,
  children,
  as = "section",
}: SectionProps) {
  const Component = as;
  return (
    <Component id={id} className={clsx(className)}>
      {children}
    </Component>
  );
}

