import { PageMeta } from "../components/PageMeta.jsx";
import { PageShell } from "../components/layout/PageShell.jsx";
import { Hero } from "../components/ui/Hero.jsx";
import { PrimaryButton } from "../components/ui/PrimaryButton.jsx";
import { SectionHeading } from "../components/ui/SectionHeading.jsx";
import { galleryImages, site } from "../data/content.js";
import { images } from "../data/assets.js";

export function GalleryPage() {
  return (
    <PageShell>
      <PageMeta title={`Gallery | ${site.brand}`} description="Taste with your eyes: a selection of private dining dishes and details by Chef Georgina." />
      <Hero image={images.galleryA} eyebrow="Gallery" title="Taste with your eyes" copy="A selection of plates, ingredients and details from Georgina’s private dining tables." primaryCta={<PrimaryButton to="/contact">Plan your table</PrimaryButton>} />
      <section className="px-6 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="From the kitchen" title="Food made to be remembered." copy="Every menu is different. These are glimpses of the craft, colour and care that travel with Georgina to each occasion." align="center" />
          <div className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {galleryImages.map((src, index) => (
              <figure key={src} className="mb-5 break-inside-avoid overflow-hidden rounded-[2rem] bg-surface-container-low">
                <img src={src} alt={`Chef Georgina private dining dish ${index + 1}`} className="w-full object-cover transition-transform duration-700 hover:scale-105" loading={index > 2 ? "lazy" : "eager"} />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
