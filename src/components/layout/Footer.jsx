import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-20 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-3">
        <div className="space-y-6">
          <p className="font-serif text-4xl text-stone-50">Ginna</p>
          <p className="max-w-sm text-base leading-relaxed text-stone-400 font-light">
            I&apos;m a private chef: bespoke dining at home, seasonal menus, and
            the kind of meals I love to cook with warmth, care, and ingredients I
            actually believe in.
          </p>
        </div>

        <div className="space-y-6">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-stone-500">On this site</p>
          <div className="flex flex-col gap-4 text-stone-300">
            <Link to="/" className="hover:text-primary transition-colors w-fit">Home</Link>
            <Link to="/about" className="hover:text-primary transition-colors w-fit">About me</Link>
            <Link to="/menus" className="hover:text-primary transition-colors w-fit">Menus</Link>
            <Link to="/contact" className="hover:text-primary transition-colors w-fit">Get in touch</Link>
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-stone-500">Message me</p>
          <div className="flex flex-col gap-4">
            <a href="mailto:hello@chefgeorgina.com" className="text-stone-300 hover:text-primary transition-colors w-fit">hello@chefgeorgina.com</a>
            <a href="https://instagram.com/chefgeorginacrafts" target="_blank" rel="noreferrer" className="text-stone-300 hover:text-primary transition-colors w-fit">@chefgeorginacrafts</a>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-600">
        <p>© {new Date().getFullYear()} Ginna. All rights reserved.</p>
        <p>Designed with care.</p>
      </div>
    </footer>
  );
}
