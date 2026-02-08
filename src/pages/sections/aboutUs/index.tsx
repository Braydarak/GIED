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

gsap.registerPlugin(ScrollTrigger);

const AboutUsSection = () => {
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
            ¿Qué es <span className="text-turquesa80">GIED</span>?
          </h2>
          <p className="text-xl md:text-2xl font-montserrat font-medium text-gray-700 leading-relaxed">
            GIED Esports nace para profesionalizar y elevar el nivel de los
            eventos deportivos en las Islas Baleares, aportando una visión
            moderna, eficiente y centrada en las personas.
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
                  Fundación y Liderazgo
                </h3>
                <p className="font-montserrat text-gray-600 leading-relaxed">
                  Fundada en diciembre de 2021 por Gabriel y Miguel Quetglas
                  Bover, con una sólida estructura familiar y profesional.
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
                  Gestión Integral
                </h3>
                <p className="font-montserrat text-gray-600 leading-relaxed">
                  Especialistas en la creación, planificación y gestión 360º de
                  eventos y de instalaciones deportivas públicas y privadas.
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
                  ADN Deportivo
                </h3>
                <p className="font-montserrat text-gray-600 leading-relaxed">
                  Equipo formado por deportistas con experiencia real en la
                  organización de torneos, ligas, campus y campeonatos.
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
                  Equipo Experto
                </h3>
              </div>
              <p className="font-montserrat text-gray-200 leading-relaxed">
                Entendemos el deporte desde dentro para ofrecer soluciones
                eficaces.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-1 gap-6">
              {/* 2021 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="text-turquesa80 mb-2 flex justify-center">
                  <FaCalendarAlt size={24} />
                </div>
                <div className="text-4xl font-panton font-bold text-principal mb-1">
                  2021
                </div>
                <div className="text-xs font-bold font-montserrat text-gray-400 tracking-widest uppercase">
                  Año Inicio
                </div>
              </div>

              {/* 100% */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="text-turquesa80 mb-2 flex justify-center">
                  <FaPercentage size={24} />
                </div>
                <div className="text-4xl font-panton font-bold text-principal mb-1">
                  100%
                </div>
                <div className="text-xs font-bold font-montserrat text-gray-400 tracking-widest uppercase">
                  Dedicación
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
