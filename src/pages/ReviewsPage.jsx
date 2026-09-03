import { PageMeta } from "../components/PageMeta.jsx";
import { PageShell } from "../components/layout/PageShell.jsx";
import { Hero } from "../components/ui/Hero.jsx";
import { PrimaryButton } from "../components/ui/PrimaryButton.jsx";
import { SectionHeading } from "../components/ui/SectionHeading.jsx";
import { images } from "../data/assets.js";
import { site, testimonials } from "../data/content.js";

export function ReviewsPage() {
  return (
    <PageShell>
      <PageMeta title={`Reviews | ${site.brand}`} description="Read attributed feedback from private dining guests cooked for by Chef Georgina." />
      <Hero image={images.galleryD} eyebrow="Guest reviews" title="Empty plates. Happy guests." copy="There is nothing more rewarding than a table that has enjoyed every course. Here are a few thoughts from previous dinners." primaryCta={<PrimaryButton to="/contact">Ask about a date</PrimaryButton>} />
      <section className="bg-surface-container-low px-6 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="In their words" title="Kind words from the table." copy="Selected from Georgina’s supplied Yhangry and Take a Chef review collections. Wording has been lightly corrected for spelling and punctuation without changing meaning." align="center" />
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {testimonials.map((review) => (
              <article key={`${review.attribution}-${review.source}`} className="rounded-[2rem] border border-white/5 bg-background p-8 md:p-10">
                <p aria-label="Five stars" className="tracking-[0.25em] text-primary">★★★★★</p>
                <blockquote className="mt-6 font-serif text-2xl leading-relaxed">“{review.quote}”</blockquote>
                <p className="mt-8 text-sm font-bold uppercase tracking-[0.16em] text-stone-400">{review.attribution}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-stone-600">Source: {review.source}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
