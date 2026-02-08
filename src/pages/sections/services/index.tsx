import {
  FaLightbulb,
  FaChess,
  FaTools,
  FaUsersCog,
  FaPlay,
  FaChartLine,
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

  return (
    <section className="bg-white text-black py-20 px-8 snap-start">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        {/* Proceso */}
        <div
          id="process"
          className="bg-turquesa10 p-10 md:p-14 rounded-3xl shadow-lg scroll-mt-24"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-panton text-principal font-bold mb-4">
              Nuestro Proceso
            </h2>
            <p className="font-montserrat text-gray-500">
              Cómo llevamos tu idea a la realidad
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-gray-200 -z-0"></div>

            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative flex flex-col items-center text-center z-10 group"
              >
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-principal text-3xl mb-6 border-4 border-turquesa10 shadow-md group-hover:bg-principal group-hover:text-white transition-colors duration-300">
                  {step.icon}
                </div>
                <div className="bg-turquesa80 text-white rounded-full px-3 py-1 text-xs font-bold mb-2">
                  Paso {idx + 1}
                </div>
                <h4 className="text-lg font-bold text-principal mb-2 font-panton leading-tight h-12 flex items-center justify-center">
                  {step.title}
                </h4>
                <p className="font-montserrat text-xs text-gray-500 hidden md:block">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Servicios */}
        <div id="services" className="text-center scroll-mt-24">
          <h2 className="text-4xl font-panton text-principal font-bold mb-12">
            Nuestros Servicios
          </h2>
          <p className="text-lg font-montserrat mb-12 max-w-3xl mx-auto text-gray-600">
            En GIED Esports trabajamos con una amplia variedad de formatos,
            adaptándonos siempre a las necesidades del cliente y garantizando la
            máxima profesionalidad.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <h3 className="text-xl font-bold font-panton text-principal mb-4 border-b-2 border-turquesa10 pb-2 inline-block">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-montserrat leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
