import { Link } from "react-router-dom";
import { navLinks, site } from "../../data/content.js";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-20 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-3">
        <div className="space-y-6">
          <p className="font-serif text-4xl text-stone-50">{site.brand}</p>
          <p className="max-w-sm text-base leading-relaxed text-stone-400 font-light">
            Bespoke private dining, seasonal British produce and memorable meals,
            cooked and hosted with warmth in your home or accommodation.
          </p>
        </div>

        <div className="space-y-6">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-stone-500">On this site</p>
          <div className="flex flex-col gap-4 text-stone-300">
            {navLinks.map((link) => <Link key={link.to} to={link.to} className="hover:text-primary transition-colors w-fit">{link.label}</Link>)}
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-stone-500">Message me</p>
          <div className="flex flex-col gap-4">
            <a href={`mailto:${site.email}`} className="text-stone-300 hover:text-primary transition-colors w-fit">{site.email}</a>
            <a href={`tel:${site.phoneHref}`} className="text-stone-300 hover:text-primary transition-colors w-fit">{site.phoneDisplay}</a>
            <a href={site.instagramUrl} target="_blank" rel="noreferrer" className="text-stone-300 hover:text-primary transition-colors w-fit">{site.instagramHandle}</a>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-600">
        <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
        <div className="flex gap-5"><Link to="/privacy" className="hover:text-primary">Privacy</Link><Link to="/terms" className="hover:text-primary">Terms</Link></div>
      </div>
    </footer>
  );
}
