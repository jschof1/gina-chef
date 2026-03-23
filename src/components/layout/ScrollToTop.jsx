import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "../../lib/gsap.js";

export function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    ScrollTrigger.refresh();
  }, [location.pathname]);

  return null;
}
