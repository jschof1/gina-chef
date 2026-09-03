import { useRef } from "react";
import { PageMeta } from "../components/PageMeta.jsx";
import { PageShell } from "../components/layout/PageShell.jsx";
import { Hero } from "../components/ui/Hero.jsx";
import { PrimaryButton } from "../components/ui/PrimaryButton.jsx";
import { SecondaryButton } from "../components/ui/SecondaryButton.jsx";
import { SectionHeading } from "../components/ui/SectionHeading.jsx";
import { images } from "../data/assets.js";
import { serviceCards, site, testimonials } from "../data/content.js";
import { gsap, ScrollTrigger, useGSAP } from "../lib/gsap.js";

export function HomePage() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Parallax portrait with scale
    gsap.to('.portrait-img', {
      yPercent: 20,
      scale: 1.05,
      ease: 'none',
      scrollTrigger: {
        trigger: '.portrait-container',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });

    // Service cards stagger with slight rotation
    gsap.from('.service-card', {
      y: 80,
      opacity: 0,
      rotateX: 10,
      duration: 1.2,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.services-grid',
        start: 'top 80%',
      }
    });

    // Produce images parallax and rotation
    const produceImages = gsap.utils.toArray('.produce-img');
    produceImages.forEach((img, i) => {
      gsap.to(img, {
        yPercent: i % 2 === 0 ? 15 : -15,
        rotation: i % 2 === 0 ? 2 : -2,
        ease: 'none',
        scrollTrigger: {
          trigger: '.produce-grid',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });
    });

    // Gallery images reveal with scale
    gsap.from('.gallery-img-container', {
      clipPath: 'inset(100% 0% 0% 0%)',
      duration: 1.5,
      stagger: 0.15,
      ease: 'power4.inOut',
      scrollTrigger: {
        trigger: '.gallery-grid',
        start: 'top 70%',
      }
    });

    gsap.from('.gallery-img', {
      scale: 1.3,
      duration: 1.5,
      stagger: 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.gallery-grid',
        start: 'top 70%',
      }
    });

    // Testimonials blur and fade reveal
    gsap.from('.testimonial-card', {
      y: 40,
      opacity: 0,
      filter: 'blur(10px)',
      duration: 1.2,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.testimonials-grid',
        start: 'top 80%',
      }
    });

    // CTA Section reveal
    gsap.from('.cta-section', {
      scale: 0.95,
      opacity: 0,
      duration: 1.2,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 85%',
      }
    });

  }, { scope: containerRef });

  return (
    <PageShell>
      <div ref={containerRef}>
        <PageMeta title="Chef Georgina | Bespoke Private Dining" description="Seasonal, bespoke private dining by Chef Georgina, cooked and hosted in your home or accommodation." />
        <Hero
          image={images.hero}
          eyebrow="Private dining"
          title="A dining experience crafted around you"
          copy="Chef Georgina creates memorable private dining for intimate gatherings, celebrations and get-togethers, with menus inspired by the seasons and British produce."
          primaryCta={<PrimaryButton to="/contact">Enquire about a date</PrimaryButton>}
          secondaryCta={<SecondaryButton to="/menus">See sample menus</SecondaryButton>}
        />

        <section className="bg-surface-container-low px-6 py-32 md:px-8">
          <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-[0.95fr_1.05fr] md:items-center">
            <div className="portrait-container relative h-[80vh] overflow-hidden rounded-[2rem]">
              <img
                src={images.portrait}
                alt="Chef Georgina preparing a private dining menu"
                className="portrait-img absolute -top-[10%] left-0 h-[120%] w-full object-cover origin-center"
              />
            </div>
            <div className="space-y-10">
              <SectionHeading
                eyebrow="How I cook"
                title="Food that feels personal, generous and memorable."
                copy="Indulge in authentic food made from fresh produce and local ingredients. I create a bespoke menu for your home, your guests and the moment you want to share."
              />
              <p className="max-w-2xl text-xl leading-relaxed text-on-surface-variant font-light">
                From a small gathering to a celebratory feast, each dish reflects
                my love of culinary craft and turns dinner into a journey to enjoy together.
              </p>
              <SecondaryButton to="/about">A bit more about me</SecondaryButton>
            </div>
          </div>
        </section>

        <section className="bg-background px-6 py-32 md:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="What you get"
              title="More than dinner: an occasion shaped for you."
              copy="A crafted experience that reflects your tastes and desires, from special celebrations to relaxed gatherings in your own space."
              align="center"
            />
            <div className="services-grid mt-20 grid gap-8 md:grid-cols-3 perspective-[1000px]">
              {serviceCards.map((card) => (
                <article
                  key={card.title}
                  className="service-card group rounded-[2rem] border border-white/5 bg-surface-container-low p-10 shadow-[0_20px_60px_rgba(0,0,0,0.18)] transition-colors hover:border-primary/30"
                >
                  <span className="material-symbols-outlined text-5xl text-primary transition-transform duration-500 group-hover:scale-110">
                    {card.icon}
                  </span>
                  <h3 className="mt-8 font-serif text-3xl">{card.title}</h3>
                  <p className="mt-4 leading-relaxed text-on-surface-variant">{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface-container-lowest px-6 py-32 md:px-8">
          <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-[1.05fr_0.95fr] md:items-center">
            <div className="produce-grid grid grid-cols-2 gap-6">
              {[images.produceA, images.produceB, images.produceC, images.produceD].map(
                (image, index) => (
                  <div
                    key={image}
                    className={`overflow-hidden rounded-[2rem] h-64 md:h-80 ${
                      index % 2 === 0 ? "translate-y-0" : "md:translate-y-12"
                    }`}
                  >
                    <img src={image} alt="" className="produce-img h-[120%] w-full object-cover -translate-y-[10%]" />
                  </div>
                )
              )}
            </div>

            <div className="space-y-10">
              <SectionHeading
                eyebrow="Fresh local ingredients"
                title="Working with the seasons, cooking sustainably."
                copy="The best dishes start with the best ingredients. I use local and seasonal produce wherever possible, supporting independent farmers, producers and artisans."
              />
              <p className="text-xl leading-relaxed text-on-surface-variant font-light">
                Shorter supply chains, thoughtful buying and careful preparation
                support the community, reduce waste and bring authentic flavour to the plate.
              </p>
              <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
                <div>
                  <p className="font-serif text-3xl text-primary">Local Produce</p>
                  <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-stone-500">
                    Sourced with care
                  </p>
                </div>
                <div>
                  <p className="font-serif text-3xl text-primary">Seasonality</p>
                  <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-stone-500">
                    Menus that evolve
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-32 md:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[3rem] border border-white/10 bg-black">
            <div className="relative min-h-[36rem]">
              <img
                src={images.moodBanner}
                alt="Fresh pasta prepared for a Chef Georgina menu"
                className="absolute inset-0 h-full w-full object-cover brightness-[0.45]"
              />
              <div className="absolute inset-0 bg-black/35" />
              <div className="relative mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-6 py-24 text-center">
                <h2 className="font-serif text-6xl leading-tight text-primary md:text-8xl">
                  Fine dining is not just for the restaurant
                </h2>
                <p className="mt-8 max-w-2xl text-xl leading-relaxed text-stone-200 font-light">
                  From relaxed sharing plates to a multi-course celebration,
                  every menu begins with what you love and how you want the occasion to feel.
                </p>
                <div className="mt-12">
                  <PrimaryButton to="/menus">Explore the menus</PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low px-6 py-32 md:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Reviews"
              title="Kind words from the table."
              copy="There is nothing more rewarding than empty plates and happy guests."
              align="center"
            />
            <div className="testimonials-grid mt-20 grid gap-8 md:grid-cols-2">
              {testimonials.slice(0, 2).map((item) => (
                <article
                  key={item.quote}
                  className="testimonial-card rounded-[2.5rem] bg-[#dac8ae] p-12 text-stone-900 shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
                >
                  <p className="font-serif text-5xl leading-tight text-stone-800">“</p>
                  <p className="mt-6 text-xl leading-relaxed font-serif">{item.quote}</p>
                  <p className="mt-8 text-sm font-bold uppercase tracking-wider text-stone-700">{item.attribution}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-stone-600">{item.source}</p>
                </article>
              ))}
            </div>
            <div className="mt-12 text-center"><SecondaryButton to="/reviews">Read more reviews</SecondaryButton></div>
          </div>
        </section>

        <section className="px-6 py-32 md:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Gallery"
              title="The food does most of the talking."
              copy="A few plates and moments from the kind of tables I love to cook for."
              align="center"
            />
            <div className="gallery-grid mt-20 grid gap-6 md:grid-cols-4 md:grid-rows-2 h-[800px]">
              <div className="gallery-img-container overflow-hidden rounded-[2rem] md:col-span-2 md:row-span-2">
                <img src={images.galleryA} alt="A private dining plate by Chef Georgina" className="gallery-img h-full w-full object-cover" />
              </div>
              <div className="gallery-img-container overflow-hidden rounded-[2rem]">
                <img src={images.galleryB} alt="Seasonal ingredients prepared by Chef Georgina" className="gallery-img h-full w-full object-cover" />
              </div>
              <div className="gallery-img-container overflow-hidden rounded-[2rem]">
                <img src={images.galleryC} alt="A plated course from a private dinner" className="gallery-img h-full w-full object-cover" />
              </div>
              <div className="gallery-img-container overflow-hidden rounded-[2rem] md:col-span-2">
                <img src={images.galleryD} alt="Chef Georgina finishing a dish" className="gallery-img h-full w-full object-cover" />
              </div>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-6"><SecondaryButton to="/gallery">View the gallery</SecondaryButton><a href={site.instagramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-bold uppercase tracking-[0.2em] text-primary hover:text-white">Follow {site.instagramHandle}</a></div>
          </div>
        </section>

        <section className="px-6 pb-32 md:px-8">
          <div className="cta-section mx-auto max-w-6xl rounded-[3rem] bg-primary px-8 py-24 text-center text-on-primary md:px-16 shadow-[0_30px_80px_rgba(216,197,167,0.15)]">
            <h2 className="font-serif text-5xl md:text-7xl">Let&apos;s plan your evening</h2>
            <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-on-primary/80 font-light">
              Drop me a message with your date, guest numbers, and the kind of
              night you have in mind. I&apos;ll come back to you from there.
            </p>
            <div className="mt-12">
              <PrimaryButton to="/contact">Get in touch</PrimaryButton>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
