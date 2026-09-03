import { HashRouter, Route, Routes } from "react-router-dom";
import { ScrollToTop } from "./components/layout/ScrollToTop.jsx";
import { SmoothScroll } from "./components/SmoothScroll.jsx";
import { CustomCursor } from "./components/ui/CustomCursor.jsx";
import { AboutPage } from "./pages/AboutPage.jsx";
import { ContactPage } from "./pages/ContactPage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { MenusPage } from "./pages/MenusPage.jsx";
import { GalleryPage } from "./pages/GalleryPage.jsx";
import { ReviewsPage } from "./pages/ReviewsPage.jsx";
import { FaqPage } from "./pages/FaqPage.jsx";
import { LegalPage } from "./pages/LegalPage.jsx";

export function App() {
  return (
    <HashRouter>
      <SmoothScroll>
        <CustomCursor />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menus" element={<MenusPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/privacy" element={<LegalPage type="privacy" />} />
          <Route path="/terms" element={<LegalPage type="terms" />} />
        </Routes>
      </SmoothScroll>
    </HashRouter>
  );
}
