import { useState } from "react";
import {
  FaLightbulb,
  FaChess,
  FaTools,
  FaUsersCog,
  FaPlay,
  FaChartLine,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const services = [
  {
    title: "Torneos Privados",
    description:
      "Organización de torneos para empresas, clubes o asociaciones. Apostamos por una competición sana, divertida y estructurada para todos los niveles.",
  },
  {
    title: "Competiciones Federadas",
    description:
      "Colaboración estrecha con federaciones deportivas para la creación y gestión de competiciones oficiales, cumpliendo estrictamente la normativa vigente.",
  },
  {
    title: "Campus Deportivos",
    description:
      "Diseño de campus de perfeccionamiento, mixtos o recreativos. Ideales para periodos vacacionales, enfocados en la mejora técnica y la diversión.",
  },
  {
    title: "Clínics Deportivos",
    description:
      "Jornadas formativas impartidas por profesionales cualificados, orientadas al aprendizaje técnico específico y a la transmisión de valores.",
  },
  {
    title: "Diadas Deportivas Populares",
    description:
      "Eventos abiertos a todas las edades para fomentar la actividad física y la convivencia familiar a través del deporte.",
  },
  {
    title: "Carreras Populares y Eventos",
    description:
      "Organización integral de carreras y pruebas deportivas no federadas, cuidando cada detalle logístico, permisos y seguridad de los participantes.",
  },
  {
    title: "Deporte en Edad Escolar",
    description:
      "Gestión y coordinación de actividades extraescolares y deportivas para niños y jóvenes, fomentando hábitos saludables, compañerismo y respeto.",
  },
  {
    title: "Ligas y Campeonatos",
    description:
      "Organización y gestión de ligas regulares y campeonatos puntuales, tanto federados como amateurs, con sistemas de competición adaptados.",
  },
  {
    title: "Instalaciones Públicas",
    description:
      "Gestión integral de instalaciones municipales, optimizando recursos públicos y ofreciendo a la ciudadanía espacios accesibles y de calidad.",
  },
  {
    title: "Gestión de Instalaciones Privadas",
    description:
      "Administración y dinamización de centros deportivos privados, enfocados en mejorar el rendimiento económico, la tasa de uso y la experiencia global del usuario.",
  },
];

const ServicesSection = () => {
  const [showAllServices, setShowAllServices] = useState(false);

  const processSteps = [
    {
      icon: <FaLightbulb />,
      title: "Conceptualización",
      desc: "Diseño de la idea base y definición de objetivos.",
    },
    {
      icon: <FaChess />,
      title: "Planificación",
      desc: "Desarrollo técnico, cronograma y hoja de ruta.",
    },
    {
      icon: <FaTools />,
      title: "Organización",
      desc: "Logística integral: espacios, materiales y permisos.",
    },
    {
      icon: <FaUsersCog />,
      title: "Coordinación",
      desc: "Gestión eficiente de equipos humanos y proveedores.",
    },
    {
      icon: <FaPlay />,
      title: "Ejecución",
      desc: "Dirección in situ del evento garantizando su desarrollo.",
    },
    {
      icon: <FaChartLine />,
      title: "Evaluación",
      desc: "Análisis de resultados y feedback para mejora continua.",
    },
  ];

  const visibleServices = showAllServices ? services : services.slice(0, 6);

  return (
    <section className="bg-white text-black py-16 md:py-24 px-4 md:px-8 lg:px-12 snap-start">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-16 md:gap-24">
        {/* Proceso */}
        <div
          id="process"
          className="bg-turquesa10 p-6 md:p-14 rounded-3xl shadow-lg scroll-mt-24"
        >
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-panton text-principal font-bold mb-4">
              Nuestro Proceso
            </h2>
            <p className="font-montserrat text-gray-500 text-sm md:text-lg">
              Cómo llevamos tu idea a la realidad
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-8 md:gap-6 relative">
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-gray-200 -z-0"></div>

            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative flex flex-col items-center text-center z-10 group"
              >
                <div className="w-20 h-20 md:w-28 md:h-28 bg-white rounded-full flex items-center justify-center text-principal text-2xl md:text-4xl mb-4 md:mb-6 border-4 border-turquesa10 shadow-md group-hover:bg-principal group-hover:text-white transition-colors duration-300">
                  {step.icon}
                </div>
                <div className="bg-turquesa80 text-white rounded-full px-3 py-1 text-[10px] md:text-sm font-bold mb-2">
                  Paso {idx + 1}
                </div>
                <h4 className="text-base md:text-xl lg:text-2xl font-bold text-principal mb-3 font-panton leading-tight h-10 md:h-16 flex items-center justify-center w-full px-1">
                  {step.title}
                </h4>
                <p className="font-montserrat text-xs md:text-sm lg:text-base text-gray-500 hidden md:block px-1 leading-snug">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Servicios */}
        <div id="services" className="text-center scroll-mt-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-panton text-principal font-bold mb-8 md:mb-12">
            Nuestros Servicios
          </h2>
          <p className="text-base md:text-lg font-montserrat mb-10 md:mb-12 max-w-3xl mx-auto text-gray-600 px-2">
            En GIED Esports trabajamos con una amplia variedad de formatos,
            adaptándonos siempre a las necesidades del cliente y garantizando la
            máxima profesionalidad.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-left">
            {visibleServices.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <h3 className="text-lg md:text-xl font-bold font-panton text-principal mb-3 md:mb-4 border-b-2 border-turquesa10 pb-2 inline-block">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-montserrat leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          {services.length > 6 && (
            <div className="flex justify-center mt-12">
              <button
                onClick={() => setShowAllServices(!showAllServices)}
                className="flex items-center gap-2 px-8 py-3 bg-white text-principal border-2 border-principal rounded-full font-bold font-panton hover:bg-principal hover:text-white transition-all duration-300 shadow-md group"
              >
                {showAllServices ? "Mostrar menos" : "Mostrar más"}
                {showAllServices ? (
                  <FaChevronUp className="group-hover:-translate-y-1 transition-transform duration-300" />
                ) : (
                  <FaChevronDown className="group-hover:translate-y-1 transition-transform duration-300" />
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
