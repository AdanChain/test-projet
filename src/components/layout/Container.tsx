import type { ReactNode } from "react";
import clsx from "clsx";

type ContainerProps = {
  className?: string;
  children: ReactNode;
};

// Centers content with max-width to mirror 1440px frame while remaining responsive
export function Container({ className, children }: ContainerProps) {
  return (
    <div
      className={clsx(
        "mx-auto w-full max-w-[1120px] px-8",
        "xl:max-w-[1200px]",
        className,
      )}
    >
      {children}
    </div>
  );
}

