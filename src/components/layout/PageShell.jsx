import { Footer } from "./Footer.jsx";
import { NavBar } from "./NavBar.jsx";

export function PageShell({ children }) {
  return (
    <div className="min-h-screen bg-background text-on-surface">
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
