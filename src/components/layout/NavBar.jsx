import { useMemo, useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navLinks, site } from "../../data/content.js";
import { motion, AnimatePresence } from "motion/react";

export function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const links = useMemo(() => navLinks, []);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-white/10 bg-black/70 backdrop-blur-xl py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-8">
        <Link to="/" className="font-serif text-2xl tracking-tight text-stone-50 hover:text-primary transition-colors lg:text-3xl">
          {site.brand}
        </Link>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-8">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative text-[0.65rem] font-semibold uppercase tracking-[0.18em] transition-colors ${
                  isActive ? "text-primary" : "text-stone-300 hover:text-stone-50"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-2 left-0 right-0 h-px bg-primary"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden rounded-full bg-primary px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-on-primary transition-transform hover:scale-105 xl:inline-flex"
          >
            Enquire
          </Link>
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-stone-100 transition-colors hover:bg-white/5 lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="border-t border-white/10 bg-stone-950/95 px-6 py-6 lg:hidden overflow-hidden"
          >
            <nav className="flex flex-col gap-6">
              {links.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `block text-lg font-serif transition-colors ${
                        isActive ? "text-primary" : "text-stone-200 hover:text-stone-50"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <a href={`tel:${site.phoneHref}`} className="mt-2 text-primary">{site.phoneDisplay}</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
