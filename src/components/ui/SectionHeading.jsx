import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "../../lib/gsap";
import { RevealText } from "./RevealText.jsx";

export function SectionHeading({ eyebrow, title, copy, align = "left" }) {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
      }
    });

    if (eyebrow) {
      tl.from('.sh-eyebrow', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
      });
    }

    if (copy) {
      tl.from('.sh-copy', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      }, eyebrow ? "-=0.2" : "0.4");
    }
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={`space-y-6 ${align === "center" ? "text-center" : ""}`}>
      {eyebrow && (
        <p className="sh-eyebrow text-xs font-bold uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
      )}
      <h2 className="sh-title font-serif text-4xl leading-[1.1] md:text-6xl">
        <RevealText text={title} />
      </h2>
      {copy && (
        <p
          className={`sh-copy max-w-2xl text-lg leading-relaxed text-on-surface-variant font-light ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {copy}
        </p>
      )}
    </div>
  );
}
