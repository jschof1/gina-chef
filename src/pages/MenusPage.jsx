import { useRef } from "react";
import { PageShell } from "../components/layout/PageShell.jsx";
import { Hero } from "../components/ui/Hero.jsx";
import { PrimaryButton } from "../components/ui/PrimaryButton.jsx";
import { SectionHeading } from "../components/ui/SectionHeading.jsx";
import { images } from "../data/assets.js";
import { menuCollections } from "../data/content.js";
import { gsap, ScrollTrigger, useGSAP } from "../lib/gsap.js";

export function MenusPage() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Menu collection stagger
    const collections = gsap.utils.toArray('.menu-collection');
    collections.forEach((collection, i) => {
      gsap.from(collection, {
        y: 80,
        opacity: 0,
        rotateX: 5,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: collection,
          start: 'top 85%',
        }
      });

      // Stagger list items
      const items = collection.querySelectorAll('.menu-item');
      gsap.from(items, {
        x: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: collection,
          start: 'top 70%',
        }
      });

      // Image reveal with scale
      const imgContainer = collection.querySelector('.menu-img-container');
      gsap.from(imgContainer, {
        clipPath: i % 2 === 0 ? 'inset(0% 100% 0% 0%)' : 'inset(0% 0% 0% 100%)',
        duration: 1.5,
        ease: 'power4.inOut',
        scrollTrigger: {
          trigger: collection,
          start: 'top 75%',
        }
      });
      
      const imgEl = collection.querySelector('.menu-img');
      gsap.from(imgEl, {
        scale: 1.3,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: collection,
          start: 'top 75%',
        }
      });
    });
  }, { scope: containerRef });

  return (
    <PageShell>
      <div ref={containerRef}>
        <Hero
          image={images.menuHero}
          eyebrow="Menus"
          title="Sample menus, always tailored by me."
          copy="I write bespoke menus for every booking. What you see below are ideas and flavours I love to cook, not a fixed menu you have to choose from."
          primaryCta={<PrimaryButton to="/contact">Ask me about a menu</PrimaryButton>}
        />

        <section className="px-6 py-32 md:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Bespoke by design"
              title="A few ideas, never a fixed script."
              copy="Every booking starts with a conversation. These samples show the tone of how I cook and the kinds of dishes that might shape your evening."
              align="center"
            />
            <div className="mt-24 space-y-24 perspective-[1000px]">
              {menuCollections.map((collection, index) => (
                <div
                  key={collection.name}
                  className={`menu-collection grid gap-12 rounded-[3rem] border border-white/5 bg-surface-container-low p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.18)] ${
                    index % 2 === 0 ? "md:grid-cols-[1.1fr_0.9fr]" : "md:grid-cols-[0.9fr_1.1fr]"
                  }`}
                >
                  <div className={`flex flex-col justify-center ${index % 2 === 0 ? "" : "md:order-2"}`}>
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">{collection.label}</p>
                    <h2 className="mt-6 font-serif text-4xl md:text-5xl">{collection.name}</h2>
                    <p className="mt-6 max-w-2xl text-xl leading-relaxed text-on-surface-variant font-light">
                      I can shape the night as a multi-course dinner, a canapé-led
                      gathering, or something more relaxed and sharing-style.
                    </p>
                    <ul className="mt-10 space-y-4">
                      {collection.items.map((item) => (
                        <li
                          key={item}
                          className="menu-item rounded-[1.5rem] border border-white/5 bg-black/20 px-6 py-5 text-stone-200 transition-colors hover:bg-black/40 hover:border-white/10"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={index % 2 === 0 ? "" : "md:order-1"}>
                    <div className="menu-img-container h-full overflow-hidden rounded-[2rem] min-h-[400px]">
                      <img src={collection.image} alt="" className="menu-img h-full w-full object-cover" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
