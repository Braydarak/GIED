import { motion } from "framer-motion";
import past_events from "../../data/events.json";
import { filterPastEvents, formatDate } from "../../utils/functions";

const PastEventsPage = () => {
  const pastEvents = filterPastEvents(past_events.events);

  const isMobile = window.innerWidth < 768;

  return (
    <section className="bg-turquesa10 text-white min-h-screen pt-20 pb-20 overflow-x-hidden">
      <h1 className="text-4xl text-center font-panton text-principal font-bold mb-12">
        Eventos Pasados
      </h1>

      {/* Lista de eventos pasados */}
      <div className="max-w-4xl mx-auto space-y-12 md:pl-0 pl-[10px] md:pr-0 pr-[10px]">
        {pastEvents.length > 0 ? (
          pastEvents.map((event, index) => (
            <motion.div
              key={event.id}
              className="bg-principal rounded-lg shadow-lg p-6 flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-6"
              initial={{
                opacity: 0,
                x: isMobile
                  ? index % 2 === 0
                    ? -100
                    : 100
                  : index % 2 === 0
                  ? -600
                  : 600,
              }}
              whileInView={{ opacity: 1, x: 0 }} // Animación al estar en viewport
              viewport={{ once: true, amount: 0.3 }} // Solo animar una vez
              transition={{ duration: 1.0, delay: index * 0.1 }} // Suavidad y cascada
            >
              <img
                src={event.image}
                alt={event.title}
                className="h-48 md:w-48 object-cover rounded-lg w-full"
              />
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
            </motion.div>
          ))
        ) : (
          <p className="text-center text-lg text-white">
            No hay eventos pasados.
          </p>
        )}
      </div>
    </section>
  );
};

export default PastEventsPage;
