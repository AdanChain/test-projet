import type { ReactNode, CSSProperties } from "react";
import clsx from "clsx";

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
  as?: "section" | "footer";
  style?: CSSProperties;
};

// Vertical rhythm wrapper matching Figma spacing between blocks
export function Section({
  id,
  className,
  children,
  as = "section",
  style,
}: SectionProps) {
  const Component = as;
  return (
    <Component id={id} className={clsx(className)} style={style}>
      {children}
    </Component>
  );
}

