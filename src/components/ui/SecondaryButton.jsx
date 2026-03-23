import { Link } from "react-router-dom";
import { Magnetic } from "./Magnetic.jsx";

export function SecondaryButton({ children, to }) {
  return (
    <Magnetic strength={0.2}>
      <Link
        to={to}
        className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-[0.25em] text-stone-100 transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:border-white/40"
      >
        {children}
      </Link>
    </Magnetic>
  );
}
