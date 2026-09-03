import { PageMeta } from "../components/PageMeta.jsx";
import { PageShell } from "../components/layout/PageShell.jsx";
import { Hero } from "../components/ui/Hero.jsx";
import { PrimaryButton } from "../components/ui/PrimaryButton.jsx";
import { SectionHeading } from "../components/ui/SectionHeading.jsx";
import { images } from "../data/assets.js";
import { faqs, site } from "../data/content.js";

export function FaqPage() {
  return (
    <PageShell>
      <PageMeta title={`What to expect | ${site.brand}`} description="What is included, how booking works, dietary support, deposits and practical details for dining with Chef Georgina." />
      <Hero image={images.faqHero} eyebrow="What to expect" title="Bringing the meal to you" copy="A bespoke menu, thoughtful ingredients, service and clear-down are all part of the experience. Here is how a booking comes together." primaryCta={<PrimaryButton to="/contact">Start an enquiry</PrimaryButton>} />
      <section className="px-6 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="Questions and answers" title="Before we begin." copy="If your question is not covered here, send Georgina a message and arrange a complimentary call." />
          <div className="mt-14 space-y-4">
            {faqs.map((item, index) => (
              <details key={item.question} className="group rounded-[1.5rem] border border-white/10 bg-surface-container-low p-6 open:border-primary/30 md:p-8" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-xl md:text-2xl">
                  {item.question}<span className="material-symbols-outlined text-primary transition-transform group-open:rotate-45">add</span>
                </summary>
                <p className="mt-5 max-w-3xl leading-relaxed text-on-surface-variant">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
