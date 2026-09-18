import { type ReactNode } from "react";

/** Native CSS smooth scrolling respects touch input and reduced-motion settings. */
export function SmoothScroll({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
