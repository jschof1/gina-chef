import { useMemo, useState } from "react";
import { PageMeta } from "../components/PageMeta.jsx";
import { PageShell } from "../components/layout/PageShell.jsx";
import { Hero } from "../components/ui/Hero.jsx";
import { Field } from "../components/ui/Field.jsx";
import { PrimaryButton } from "../components/ui/PrimaryButton.jsx";
import { SectionHeading } from "../components/ui/SectionHeading.jsx";
import { images } from "../data/assets.js";
import { chefPlatforms, site } from "../data/content.js";

const emptyForm = { name: "", email: "", phone: "", date: "", guests: "", experience: "", dietary: "", details: "", consent: false };

export function ContactPage() {
  const [form, setForm] = useState(emptyForm);
  const [prepared, setPrepared] = useState(false);
  const emailDraft = useMemo(() => {
    const subject = encodeURIComponent(`Private dining enquiry from ${form.name || "website guest"}`);
    const body = encodeURIComponent([
      `Name: ${form.name}`, `Email: ${form.email}`, `Phone: ${form.phone || "Not provided"}`,
      `Preferred date: ${form.date || "Not confirmed"}`, `Guest count: ${form.guests || "Not confirmed"}`,
      `Dining experience: ${form.experience}`, `Dietary or allergen requirements: ${form.dietary || "None supplied"}`,
      "", "Additional details:", form.details || "None supplied",
    ].join("\n"));
    return `mailto:${site.email}?subject=${subject}&body=${body}`;
  }, [form]);

  function updateField(event) {
    const { checked, name, type, value } = event.target;
    setPrepared(false);
    setForm((current) => ({ ...current, [name]: type === "checkbox" ? checked : value }));
  }

  function prepareEmail(event) {
    event.preventDefault();
    setPrepared(true);
  }

  return (
    <PageShell>
      <PageMeta title={`Contact | ${site.brand}`} description="Enquire about available dates, menu options and dietary requirements for a private dining experience with Chef Georgina." />
      <Hero image={images.contactHero} eyebrow="Get in touch" title="A dining experience crafted around you" copy="Tell Georgina about the meal or experience you are looking for. She typically responds within 24 hours and consultations are complimentary." />

      <section className="px-6 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-8">
            <SectionHeading eyebrow="Booking enquiries" title="Tell me about your occasion." copy="Ask about available dates, dietary requirements, locations and menu options, or arrange a phone call." />
            <div className="rounded-[2rem] bg-[#dbc9af] p-8 text-stone-900">
              <p className="text-xs font-bold uppercase tracking-[0.22em]">Contact Georgina</p>
              <div className="mt-5 space-y-3 font-serif text-xl">
                <a className="block hover:underline" href={`mailto:${site.email}`}>{site.email}</a>
                <a className="block hover:underline" href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>
                <a className="block hover:underline" href={site.instagramUrl} target="_blank" rel="noreferrer">{site.instagramHandle}</a>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-surface-container-low p-8">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">If I’m fully booked</p>
              <p className="mt-4 leading-relaxed text-on-surface-variant">If your date is unavailable, these are platforms Georgina’s supplied information says she works with.</p>
              <div className="mt-5 flex flex-wrap gap-3">{chefPlatforms.map((platform) => <a key={platform.label} href={platform.href} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 px-4 py-2 text-sm hover:border-primary hover:text-primary">{platform.label}</a>)}</div>
            </div>
          </div>

          <form onSubmit={prepareEmail} className="rounded-[3rem] border border-white/5 bg-surface-container-low p-7 shadow-[0_20px_60px_rgba(0,0,0,0.18)] md:p-12">
            <div className="grid gap-7 md:grid-cols-2">
              <Field label="Name"><input className="form-field" name="name" required autoComplete="name" value={form.name} onChange={updateField} /></Field>
              <Field label="Email address"><input className="form-field" name="email" type="email" required autoComplete="email" value={form.email} onChange={updateField} /></Field>
              <Field label="Phone"><input className="form-field" name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={updateField} /></Field>
              <Field label="Preferred date"><input className="form-field" name="date" type="date" value={form.date} onChange={updateField} /></Field>
              <Field label="Guest count"><input className="form-field" name="guests" type="number" min="1" inputMode="numeric" value={form.guests} onChange={updateField} /></Field>
              <Field label="Dining experience"><select className="form-field" name="experience" required value={form.experience} onChange={updateField}><option value="">Choose one</option><option>Multi-course private dinner</option><option>Sharing-style celebration</option><option>Brunch</option><option>Afternoon tea</option><option>Something else</option></select></Field>
            </div>
            <div className="mt-7"><Field label="Dietary or allergen requirements"><textarea className="form-field min-h-28 resize-y" name="dietary" value={form.dietary} onChange={updateField} /></Field></div>
            <div className="mt-7"><Field label="Additional details"><textarea className="form-field min-h-40 resize-y" name="details" value={form.details} onChange={updateField} /></Field></div>
            <label className="mt-7 flex cursor-pointer items-start gap-4 text-on-surface-variant"><input type="checkbox" name="consent" required checked={form.consent} onChange={updateField} className="mt-1 h-5 w-5 rounded border-white/20 bg-black/20 text-primary" /><span>I agree that Georgina may use these details to respond to my enquiry by phone or email. My details will not be shared.</span></label>
            <p className="mt-5 text-sm leading-relaxed text-stone-500">This website does not send or store the form. It prepares an email in your own email app so you can review it before choosing to send.</p>
            <div className="mt-8"><PrimaryButton type="submit">Prepare enquiry email</PrimaryButton></div>
            {prepared && <div className="mt-8 rounded-2xl border border-primary/30 bg-primary/10 p-6"><p className="font-semibold text-primary">Your email draft is ready.</p><p className="mt-2 text-sm text-on-surface-variant">Check your details, then open the draft in your email app. Nothing has been sent yet.</p><a href={emailDraft} className="mt-5 inline-flex font-bold uppercase tracking-[0.16em] text-primary underline">Open email draft</a></div>}
          </form>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-8 md:pb-32"><div className="mx-auto max-w-7xl overflow-hidden rounded-[3rem]"><img src={images.contactCake} alt="A celebration cake by Chef Georgina" className="h-[28rem] w-full object-cover" /></div></section>
    </PageShell>
  );
}
