import { Link } from "react-router-dom";
import { Magnetic } from "./Magnetic.jsx";

export function PrimaryButton({ children, to, type = "submit" }) {
  const baseClasses = "inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-bold uppercase tracking-[0.25em] text-on-primary transition-all duration-300 hover:scale-105 hover:bg-primary-fixed hover:shadow-[0_0_30px_rgba(216,197,167,0.3)]";

  if (to) {
    return (
      <Magnetic strength={0.2}>
        <Link to={to} className={baseClasses}>
          {children}
        </Link>
      </Magnetic>
    );
  }

  return (
    <Magnetic strength={0.2}>
      <button type={type} className={baseClasses}>
        {children}
      </button>
    </Magnetic>
  );
}
