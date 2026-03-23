import { useRef } from "react";
import { PageShell } from "../components/layout/PageShell.jsx";
import { Hero } from "../components/ui/Hero.jsx";
import { PrimaryButton } from "../components/ui/PrimaryButton.jsx";
import { SectionHeading } from "../components/ui/SectionHeading.jsx";
import { images } from "../data/assets.js";
import { aboutPillars } from "../data/content.js";
import { gsap, ScrollTrigger, useGSAP } from "../lib/gsap.js";

const aboutGalleryImages = [
  images.galleryA,
  images.galleryB,
  images.galleryC,
  images.galleryD,
  images.produceA,
  images.produceD,
];

export function AboutPage() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Portrait parallax and scale
    gsap.to('.about-portrait', {
      yPercent: 20,
      scale: 1.05,
      ease: 'none',
      scrollTrigger: {
        trigger: '.about-portrait-container',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });

    // Pillars stagger with 3D rotation
    gsap.from('.pillar-card', {
      y: 60,
      opacity: 0,
      rotateX: 15,
      duration: 1.2,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.pillars-grid',
        start: 'top 80%',
      }
    });

    // Gallery reveal with scale
    gsap.from('.about-gallery-img-container', {
      clipPath: 'inset(100% 0% 0% 0%)',
      duration: 1.5,
      stagger: 0.1,
      ease: 'power4.inOut',
      scrollTrigger: {
        trigger: '.about-gallery-grid',
        start: 'top 70%',
      }
    });

    gsap.from('.about-gallery-img', {
      scale: 1.3,
      duration: 1.5,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.about-gallery-grid',
        start: 'top 70%',
      }
    });
  }, { scope: containerRef });

  return (
    <PageShell>
      <div ref={containerRef}>
        <Hero
          image={images.aboutHero}
          eyebrow="About me"
          title="Hi, I'm Ginna"
          copy="I'm a private chef. I believe food should feel generous, considered, and rooted in good ingredients, and that a shared meal is one of the best ways to mark a moment."
          primaryCta={<PrimaryButton to="/contact">Get in touch</PrimaryButton>}
        />

        <section className="px-6 py-32 md:px-8">
          <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div className="about-portrait-container relative h-[70vh] overflow-hidden rounded-[3rem]">
              <img
                src={images.portrait}
                alt="Portrait placeholder"
                className="about-portrait absolute -top-[10%] left-0 h-[120%] w-full object-cover origin-center"
              />
            </div>
            <div className="space-y-10">
              <SectionHeading
                eyebrow="My approach"
                title="A meal shared is a moment."
                copy="I cook private dinners built around memorable experiences, thoughtful menus, and food that feels elevated but still genuinely welcoming."
              />
              <p className="text-xl leading-relaxed text-on-surface-variant font-light">
                I care about where ingredients come from, cooking with honesty, and
                making meals that do more than fill people up. I want you to leave
                the table feeling looked after.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low px-6 py-32 md:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="What I buy and cook"
              title="My menus follow the seasons."
              copy="I work with local farmers and artisans where I can, and I choose what’s freshest and best so each menu has its own character and rhythm."
            />
            <div className="pillars-grid mt-20 grid gap-8 md:grid-cols-3 perspective-[1000px]">
              {aboutPillars.map((item) => (
                <article key={item.title} className="pillar-card group rounded-[2.5rem] bg-surface-container p-10 transition-colors hover:bg-surface-container-high shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
                  <span className="material-symbols-outlined text-5xl text-primary transition-transform duration-500 group-hover:scale-110">
                    {item.icon}
                  </span>
                  <h3 className="mt-8 font-serif text-3xl">{item.title}</h3>
                  <p className="mt-4 leading-relaxed text-on-surface-variant">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-32 md:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Gallery"
              title="Dishes and details."
              copy="A few snapshots of the kind of food I love to put on the table."
              align="center"
            />
            <div className="about-gallery-grid mt-20 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {aboutGalleryImages.map((image, index) => (
                <div key={`${image}-${index}`} className="about-gallery-img-container overflow-hidden rounded-[2rem] aspect-[4/5]">
                  <img src={image} alt="" className="about-gallery-img h-full w-full object-cover transition-transform duration-700 hover:scale-110" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
