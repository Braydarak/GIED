// import { motion } from "framer-motion";
import bg from "../../../assets/images/bg-image.avif";
import { useEffect, useRef, useState } from "react";
import { isMobile, ScrollToTop } from "../../../utils/functions";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();
  ScrollToTop();

  useEffect(() => {
    const handleResize = () => isMobile;
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 },
    );

    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = () => {
    const section = document.getElementById("about");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative bg-black text-white py-20 flex flex-col items-center pt-32 h-screen snap-start justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      {/* Contenido */}
      <div className="relative z-10 text-center">
        <h1
          className="text-5xl font-panton font-bold text-principal mb-4 sm:text-4xl md:text-6xl"
          style={{
            opacity: 1,
            transform: "translateX(0)",
            transition: "opacity 1s ease-out, transform 1s ease-out",
          }}
        >
          {t("hero.title")}
        </h1>
        <p
          className="text-xl font-panton text-turquesa80 mb-8 sm:text-xl sm:px-6 md:max-w-xl mx-auto"
          style={{
            opacity: 1,
            transform: "translateX(0)",
            transition: "opacity 1s ease-out 0.2s, transform 1s ease-out 0.2s",
          }}
        >
          {t("hero.subtitle")}
        </p>

        {/* Botón CTA */}
        <button
          ref={buttonRef}
          onClick={scrollToSection}
          aria-label={t("hero.ctaAria")}
          className={`
            bg-principal text-white text-lg sm:text-xl py-3 px-10 rounded-lg hover:bg-turquesa80
            transition-all ease-in-out duration-700 sm:py-4 sm:px-15
            transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
          `}
        >
          {t("hero.cta")}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
