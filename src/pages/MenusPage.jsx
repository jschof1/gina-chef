import { PageMeta } from "../components/PageMeta.jsx";
import { PageShell } from "../components/layout/PageShell.jsx";
import { Hero } from "../components/ui/Hero.jsx";
import { PrimaryButton } from "../components/ui/PrimaryButton.jsx";
import { SectionHeading } from "../components/ui/SectionHeading.jsx";
import { images } from "../data/assets.js";
import { extras, menuCollections, menuStyles, site } from "../data/content.js";

export function MenusPage() {
  return (
    <PageShell>
      <PageMeta title={`Sample Menus | ${site.brand}`} description="Explore seasonal British, Modern European, Italian and brunch menu ideas from Chef Georgina. Every menu is bespoke." />
      <Hero image={images.menuHero} eyebrow="Menus" title="A beginning, never a fixed script" copy="These menus offer a sense of Chef Georgina’s style. Every menu is designed for your meal, your tastes and your celebration, following the seasons and using local ingredients where possible." primaryCta={<PrimaryButton to="/contact">Create your menu</PrimaryButton>} />

      <section className="px-6 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Bespoke by design" title="Choose the feeling. We’ll shape the food." copy="Plan three to five courses, a family-style sharing table or something completely personal. Dietary and allergen requirements can be accommodated, and children’s menus are available." align="center" />
          <div className="mx-auto mt-12 flex max-w-5xl flex-wrap justify-center gap-3">
            {menuStyles.map((style) => <span key={style} className="rounded-full border border-white/10 bg-surface-container-low px-5 py-3 text-sm text-stone-300">{style}</span>)}
          </div>

          <div className="mt-20 space-y-16">
            {menuCollections.map((collection, index) => (
              <article key={collection.slug} id={collection.slug} className="scroll-mt-28 overflow-hidden rounded-[3rem] border border-white/5 bg-surface-container-low shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
                <div className={`grid lg:grid-cols-2 ${index % 2 ? "" : ""}`}>
                  <div className={index % 2 ? "lg:order-2" : ""}>
                    <img src={collection.image} alt={`${collection.name} menu by Chef Georgina`} className="h-full min-h-[28rem] w-full object-cover" />
                  </div>
                  <div className="flex flex-col justify-center p-8 md:p-12">
                    <p className="text-xs font-bold uppercase tracking-[0.28em] text-primary">{collection.label}</p>
                    <h2 className="mt-5 font-serif text-4xl md:text-6xl">{collection.name}</h2>
                    <p className="mt-6 text-lg leading-relaxed text-on-surface-variant">{collection.intro}</p>
                    <details className="group mt-10">
                      <summary className="inline-flex cursor-pointer list-none items-center gap-3 rounded-full border border-primary/40 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-primary hover:bg-primary hover:text-on-primary">Explore dishes <span className="material-symbols-outlined transition-transform group-open:rotate-45">add</span></summary>
                      <div className="mt-8 grid gap-8 sm:grid-cols-2">
                        {collection.courses.map((course) => <div key={course.title}><h3 className="font-serif text-2xl text-primary">{course.title}</h3><ul className="mt-4 space-y-3 text-sm leading-relaxed text-stone-300">{course.items.map((item) => <li key={item} className="border-b border-white/5 pb-3">{item}</li>)}</ul></div>)}
                      </div>
                    </details>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low px-6 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading eyebrow="A little more" title="Add something special." copy="Optional additions can be included at extra cost. Ask what will work best with your menu, location and occasion." />
          <div className="grid gap-4 sm:grid-cols-2">{extras.map((extra) => <div key={extra} className="flex gap-4 rounded-2xl bg-background p-5"><span className="material-symbols-outlined text-primary">add_circle</span><p>{extra}</p></div>)}</div>
        </div>
      </section>
    </PageShell>
  );
}
