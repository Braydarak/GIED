import { Routes, Route } from "react-router-dom";
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

function App() {
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
