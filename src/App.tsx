import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/header";
import HeroSection from "./pages/sections/hero";
import ContactSection from "./pages/sections/contact";
import Footer from "./components/footer";
import NotFoundPage from "./pages/404";

import AboutUsSection from "./pages/sections/aboutUs";
import ServicesSection from "./pages/sections/services";
import LegalNoticePage from "./pages/legal/legalNotice";
import PrivacyPolicyPage from "./pages/legal/privacyPolicy";
import CookiesPolicyPage from "./pages/legal/cookiesPolicy";
import { useScroll } from "./context/ScrollContext";

function App() {
  const location = useLocation();
  const { lenis } = useScroll();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    if (lenis) {
      lenis.start();
      lenis.scrollTo(0, { immediate: true, force: true });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [lenis, location.pathname]);

  return (
    <div className="bg-turquesa10 text-white">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen w-full snap-y snap-mandatory">
              <HeroSection />
              <AboutUsSection />
              <ServicesSection />
              <ContactSection />
            </div>
          }
        />
        <Route path="/aviso-legal" element={<LegalNoticePage />} />
        <Route path="/politica-de-privacidad" element={<PrivacyPolicyPage />} />
        <Route path="/politica-de-cookies" element={<CookiesPolicyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
