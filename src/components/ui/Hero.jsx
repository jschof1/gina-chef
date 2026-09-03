import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "../../lib/gsap";
import { RevealText } from "./RevealText.jsx";

export function Hero({ image, eyebrow, title, copy, primaryCta, secondaryCta }) {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.to('.hero-bg', {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    const tl = gsap.timeline();

    // Background scale down reveal
    tl.from('.hero-img', {
      scale: 1.15,
      duration: 2,
      ease: 'power3.out'
    }, 0);

    tl.from('.hero-eyebrow', {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      delay: 0.2
    }, 0.2)
    .from('.hero-copy', {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    }, "-=0.6")
    .from('.hero-cta', {
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
    }, "-=0.6");

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative flex min-h-screen items-end overflow-hidden pt-24">
      <div className="absolute inset-0 hero-bg overflow-hidden">
        <img
          src={image}
          alt=""
          className="hero-img h-[130%] w-full object-cover brightness-[0.45] -translate-y-[15%] origin-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-background" />
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 md:px-8 md:pb-28">
        {eyebrow && (
          <p className="hero-eyebrow mb-5 text-xs font-bold uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
        )}
        <div className="max-w-4xl">
          <h1 className="font-serif text-5xl leading-[1.1] text-primary md:text-7xl lg:text-8xl">
            <RevealText text={title} delay={0.3} />
          </h1>
          {copy && (
            <p className="hero-copy mt-8 max-w-2xl text-lg leading-relaxed text-stone-200 md:text-xl font-light">
              {copy}
            </p>
          )}
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="hero-cta">{primaryCta}</div>
            <div className="hero-cta">{secondaryCta}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
