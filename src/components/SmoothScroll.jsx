import { useEffect } from "react";
import { ScrollTrigger } from "../lib/gsap";

/** Wraps the app so ScrollTrigger uses native document scrolling (no smooth-scroll hijack). */
export function SmoothScroll({ children }) {
  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return <>{children}</>;
}
