import past_events from "../../../data/events.json";
import { filterPastEvents, formatDate } from "../../../utils/functions";
import { memo, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GiedLogo from '../../../assets/images/LOGOTIPO GIED VERSION 2.webp';

gsap.registerPlugin(ScrollTrigger);

const PastEventsPage = () => {
  const pastEvents = filterPastEvents(past_events.events);
  const eventRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.set(eventRefs.current, { opacity: 1 });

    eventRefs.current.forEach((el, index) => {
      if (!el) return;

      gsap.fromTo(el,
        {
          opacity: 0,
          x: index % 2 === 0 ? 100 : -100,
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
        }
      );
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [pastEvents]);

  return (
    <section className="bg-white snap-start text-white min-h-screen pt-20 pb-20 scroll-mt-24" id="past-events">
      <h1 className="text-4xl text-center font-panton text-principal font-bold mb-12">
        Eventos Pasados
      </h1>

      <div className="max-w-4xl mx-auto space-y-12 md:pl-0 pl-[10px] md:pr-0 pr-[10px]">
        {pastEvents.length > 0 ? (
          pastEvents.map((event, index) => (
            <div
              key={event.id}
              ref={(el) => {
                eventRefs.current[index] = el;
              }}
              className="bg-principal rounded-lg shadow-lg p-6 flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-6"
            >
              <picture>
                <img
                  src={event.image}
                  alt={`Imagen del evento: ${event.title}`} 
                  className="h-48 md:w-48 object-cover rounded-lg w-[400px] aspect-3/2"
                  loading="lazy"
                />
              </picture>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white font-panton">
                  {event.title}
                </h2>
                <p className="text-lg text-turquesa10 font-monserrat">
                  {formatDate(event.date)}
                </p>
                <p className="text-lg text-turquesa10 font-monserrat">
                  {event.location}
                </p>
                <p className="text-base text-white mt-4 font-monserrat">
                  {event.description}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center">
            <span className="text-center text-gray-500 text-2xl mt-10 mb-10 font-montserrat">
              No hay eventos disponibles en este momento <p className="mt-5">Puedes seguirnos en <a target="_blank" href="https://www.instagram.com/gied.eventos/" className=" font-panton font-bold text-principal cursor-pointer ">INSTAGRAM</a> para mantenerte al tanto de nuestras novedades</p> 
            </span>
            <img src={GiedLogo} className="w-28" />
          </div>
        )}
      </div>
    </section>
  );
};

export default memo(PastEventsPage);