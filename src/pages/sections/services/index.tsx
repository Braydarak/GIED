import { useState } from "react";
import { useTranslation } from "react-i18next";
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

const ServicesSection = () => {
  const { t } = useTranslation();
  const [showAllServices, setShowAllServices] = useState(false);

  const services = [
    {
      title: t("services.list.privateTournaments.title"),
      description: t("services.list.privateTournaments.description"),
    },
    {
      title: t("services.list.federatedCompetitions.title"),
      description: t("services.list.federatedCompetitions.description"),
    },
    {
      title: t("services.list.sportsCamps.title"),
      description: t("services.list.sportsCamps.description"),
    },
    {
      title: t("services.list.sportsClinics.title"),
      description: t("services.list.sportsClinics.description"),
    },
    {
      title: t("services.list.popularSportsDays.title"),
      description: t("services.list.popularSportsDays.description"),
    },
    {
      title: t("services.list.popularRaces.title"),
      description: t("services.list.popularRaces.description"),
    },
    {
      title: t("services.list.schoolSports.title"),
      description: t("services.list.schoolSports.description"),
    },
    {
      title: t("services.list.leagues.title"),
      description: t("services.list.leagues.description"),
    },
    {
      title: t("services.list.publicFacilities.title"),
      description: t("services.list.publicFacilities.description"),
    },
    {
      title: t("services.list.privateFacilities.title"),
      description: t("services.list.privateFacilities.description"),
    },
  ];

  const processSteps = [
    {
      icon: <FaLightbulb />,
      title: t("services.process.steps.conceptualization.title"),
      desc: t("services.process.steps.conceptualization.description"),
    },
    {
      icon: <FaChess />,
      title: t("services.process.steps.planning.title"),
      desc: t("services.process.steps.planning.description"),
    },
    {
      icon: <FaTools />,
      title: t("services.process.steps.organization.title"),
      desc: t("services.process.steps.organization.description"),
    },
    {
      icon: <FaUsersCog />,
      title: t("services.process.steps.coordination.title"),
      desc: t("services.process.steps.coordination.description"),
    },
    {
      icon: <FaPlay />,
      title: t("services.process.steps.execution.title"),
      desc: t("services.process.steps.execution.description"),
    },
    {
      icon: <FaChartLine />,
      title: t("services.process.steps.evaluation.title"),
      desc: t("services.process.steps.evaluation.description"),
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
              {t("services.process.title")}
            </h2>
            <p className="font-montserrat text-gray-500 text-sm md:text-lg">
              {t("services.process.subtitle")}
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
                  {t("services.process.stepLabel", { count: idx + 1 })}
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
            {t("services.title")}
          </h2>
          <p className="text-base md:text-lg font-montserrat mb-10 md:mb-12 max-w-3xl mx-auto text-gray-600 px-2">
            {t("services.description")}
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
                {showAllServices
                  ? t("services.buttons.showLess")
                  : t("services.buttons.showMore")}
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
