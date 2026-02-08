import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaUserTie,
  FaCogs,
  FaRunning,
  FaBrain,
  FaCalendarAlt,
  FaPercentage,
} from "react-icons/fa";
import { useTranslation, Trans } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

const AboutUsSection = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
        },
      });

      // Content Blocks Animation
      gsap.from(".info-card", {
        opacity: 0,
        x: -30,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        },
      });

      // Sidebar Animation
      gsap.from(sidebarRef.current, {
        opacity: 0,
        x: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: sidebarRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-turquesa10 text-black py-24 px-6 md:px-12 scroll-mt-24 overflow-hidden"
      id="about"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Intro Header */}
        <div ref={headerRef} className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-panton text-principal font-bold mb-8 tracking-tight">
            <Trans
              i18nKey="about.title"
              components={{ 0: <span className="text-turquesa80" /> }}
            />
          </h2>
          <p className="text-xl md:text-2xl font-montserrat font-medium text-gray-700 leading-relaxed">
            {t("about.description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Content (Left Column) */}
          <div ref={contentRef} className="lg:col-span-2 flex flex-col gap-6">
            {/* Fundación y Liderazgo */}
            <div className="info-card bg-white p-8 rounded-2xl shadow-sm border-l-4 border-principal hover:shadow-md transition-shadow flex gap-6 items-start">
              <div className="flex-shrink-0 bg-turquesa10 p-4 rounded-xl text-principal text-2xl">
                <FaUserTie />
              </div>
              <div>
                <h3 className="text-2xl font-panton font-bold text-principal mb-3">
                  {t("about.cards.leadership.title")}
                </h3>
                <p className="font-montserrat text-gray-600 leading-relaxed">
                  {t("about.cards.leadership.description")}
                </p>
              </div>
            </div>

            {/* Gestión Integral */}
            <div className="info-card bg-white p-8 rounded-2xl shadow-sm border-l-4 border-turquesa80 hover:shadow-md transition-shadow flex gap-6 items-start">
              <div className="flex-shrink-0 bg-turquesa10 p-4 rounded-xl text-turquesa80 text-2xl">
                <FaCogs />
              </div>
              <div>
                <h3 className="text-2xl font-panton font-bold text-principal mb-3">
                  {t("about.cards.management.title")}
                </h3>
                <p className="font-montserrat text-gray-600 leading-relaxed">
                  {t("about.cards.management.description")}
                </p>
              </div>
            </div>

            {/* ADN Deportivo */}
            <div className="info-card bg-white p-8 rounded-2xl shadow-sm border-l-4 border-principal hover:shadow-md transition-shadow flex gap-6 items-start">
              <div className="flex-shrink-0 bg-turquesa10 p-4 rounded-xl text-principal text-2xl">
                <FaRunning />
              </div>
              <div>
                <h3 className="text-2xl font-panton font-bold text-principal mb-3">
                  {t("about.cards.dna.title")}
                </h3>
                <p className="font-montserrat text-gray-600 leading-relaxed">
                  {t("about.cards.dna.description")}
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar (Right Column) - "Lo del costado" */}
          <div
            ref={sidebarRef}
            className="lg:col-span-1 flex flex-col gap-6 h-full"
          >
            {/* Equipo Experto */}
            <div className="bg-principal text-white p-8 rounded-2xl shadow-lg flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <FaBrain className="text-3xl text-turquesa65" />
                <h3 className="text-2xl font-panton font-bold">
                  {t("about.sidebar.expert.title")}
                </h3>
              </div>
              <p className="font-montserrat text-gray-200 leading-relaxed">
                {t("about.sidebar.expert.description")}
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-1 gap-6">
              {/* 2021 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="text-turquesa80 mb-2 flex justify-center">
                  <FaCalendarAlt size={24} />
                </div>
                <div className="text-4xl font-panton font-bold text-principal mb-1">
                  {t("about.sidebar.stats.year.value")}
                </div>
                <div className="text-xs font-bold font-montserrat text-gray-400 tracking-widest uppercase">
                  {t("about.sidebar.stats.year.label")}
                </div>
              </div>

              {/* 100% */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="text-turquesa80 mb-2 flex justify-center">
                  <FaPercentage size={24} />
                </div>
                <div className="text-4xl font-panton font-bold text-principal mb-1">
                  {t("about.sidebar.stats.dedication.value")}
                </div>
                <div className="text-xs font-bold font-montserrat text-gray-400 tracking-widest uppercase">
                  {t("about.sidebar.stats.dedication.label")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
