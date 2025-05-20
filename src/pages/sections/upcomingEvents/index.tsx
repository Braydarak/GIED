import { useNavigate } from "react-router-dom";
import { memo, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import GiedLogo from "../../../assets/images/LOGOTIPO GIED VERSION 2.webp";
import upcoming_events from "../../../data/events.json";
import {
  filterUpcomingEvents,
  formatDate,
  isMobile,
} from "../../../utils/functions";

const UpcomingEvents = () => {
  const navigate = useNavigate();

  const upcomingEvents = filterUpcomingEvents(upcoming_events.events);

  const eventRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    eventRefs.current.forEach((el, index) => {
      if (!el) return;

      gsap.fromTo(
        el,
        {
          opacity: 0,
          x: isMobile ? 100 : 400,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          delay: index * 0.1,
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [upcomingEvents]);

  return (
    <section
      className="bg-white py-20 scroll-mt-24 snap-start"
      id="upcoming-events"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-principal font-panton text-center mb-10">
          Próximos Eventos
        </h2>

        {upcomingEvents.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <span className="text-center text-gray-500 text-2xl mt-10 mb-10 font-montserrat">
              No hay eventos disponibles en este momento{" "}
              <p className="mt-5">
                Puedes seguirnos en{" "}
                <a
                  target="_blank"
                  href="https://www.instagram.com/gied.eventos/"
                  className=" font-panton font-bold text-principal cursor-pointer "
                >
                  INSTAGRAM
                </a>{" "}
                para mantenerte al tanto de nuestras novedades
              </p>
            </span>
            <img src={GiedLogo} className="w-28" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={event.id}
                ref={(el) => {
                  eventRefs.current[index] = el;
                }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
              >
                <picture>
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover aspect-3/2"
                    loading="lazy"
                    data-view-transition-name={`event-image-${event.id}`}
                  />
                </picture>
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-2xl font-panton font-bold text-turquesa80 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-turquesa65 font-montserrat text-sm mb-4">
                    {formatDate(event.date)} - {event.location}
                  </p>
                  <p className="text-gray-600 mb-4 font-montserrat min-h-3 flex-grow">
                    {event.description}
                  </p>
                  <button
                    onClick={() => {
                      if (document.startViewTransition) {
                        document.startViewTransition(() => {
                          navigate(`/event-details/${event.id}`);
                        });
                      } else {
                        navigate(`/event-details/${event.id}`);
                      }
                    }}
                    aria-label={`Ver detalles del evento: ${event.title}`}
                    className="bg-principal text-white py-2 px-10 md:w-auto w-full rounded-lg hover:bg-turquesa80 transition-all duration-300 mt-auto"
                  >
                    Inscribirme
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default memo(UpcomingEvents);
