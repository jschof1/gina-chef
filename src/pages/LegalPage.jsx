import { Link } from "react-router-dom";
import { PageMeta } from "../components/PageMeta.jsx";
import { PageShell } from "../components/layout/PageShell.jsx";
import { site } from "../data/content.js";

const copy = {
  privacy: {
    title: "Privacy notice",
    intro: "How enquiry information is handled on this website.",
    sections: [
      ["Information you provide", "When you make an enquiry, you may provide your name, email address, phone number, preferred date, guest count, dietary requirements and other event details."],
      ["How it is used", "Georgina’s Kitchen uses this information only to respond to and administer the private-chef services you request. By providing your details, you agree to be contacted by phone or email about that enquiry."],
      ["Sharing", "The supplied policy wording states that your details will not be shared. Any future form provider, analytics or booking integration must be reflected here before it is activated."],
    ],
  },
  terms: {
    title: "Booking terms",
    intro: "A plain-English outline based on Georgina’s supplied booking information.",
    sections: [
      ["Securing your booking", "A booking is secured when the event details are agreed and a 40% deposit is paid. The remaining balance is due by one week before the event, or can be paid sooner."],
      ["Cancellation", "The supplied wording states that the 40% deposit is refundable up to two weeks before the event in an emergency."],
      ["What the quoted cost includes", "The experience includes a bespoke menu, ingredients, preparation, cooking, service, clear-down and travel. Additional dishes, servers and optional extras may cost more and will be agreed separately."],
    ],
  },
};

export function LegalPage({ type }) {
  const page = copy[type];
  return (
    <PageShell>
      <PageMeta title={`${page.title} | ${site.brand}`} description={page.intro} />
      <article className="mx-auto max-w-4xl px-6 pb-24 pt-40 md:px-8 md:pb-32">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Georgina’s Kitchen</p>
        <h1 className="mt-5 font-serif text-5xl md:text-7xl">{page.title}</h1>
        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-on-surface-variant">{page.intro}</p>
        <aside className="mt-10 rounded-2xl border border-amber-300/25 bg-amber-200/10 p-5 text-sm leading-relaxed text-amber-100">Owner/legal review required before launch. This page deliberately reflects only the wording supplied by Georgina and does not fabricate a comprehensive legal policy.</aside>
        <div className="mt-14 space-y-12">
          {page.sections.map(([heading, body]) => <section key={heading}><h2 className="font-serif text-3xl">{heading}</h2><p className="mt-4 leading-relaxed text-on-surface-variant">{body}</p></section>)}
        </div>
        <p className="mt-14 text-on-surface-variant">Questions? Contact <a className="text-primary underline" href={`mailto:${site.email}`}>{site.email}</a> or return to the <Link className="text-primary underline" to="/contact">enquiry page</Link>.</p>
      </article>
    </PageShell>
  );
}
