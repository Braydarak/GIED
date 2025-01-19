import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import upcoming_events from "../../data/events.json";

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
}

const formatDate = (dateString: string): string => {
  const dateParts = dateString.split("-");
  const eventDate = new Date(`${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`);

  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const day = eventDate.getDate();
  const month = months[eventDate.getMonth()];
  const year = eventDate.getFullYear();

  return `${day} de ${month}, ${year}`;
};

const UpcomingEvents = () => {
  const navigate = useNavigate();
  const currentDate = new Date();

  // Determinar si la pantalla es mobile
  const isMobile = window.innerWidth < 768;

  // Filtrar los eventos que aún no han pasado
  const filterUpcomingEvents = (events: Event[]) => {
    return events.filter((event) => {
      const eventDateParts = event.date.split("-");
      const eventDate = new Date(
        `${eventDateParts[2]}-${eventDateParts[1]}-${eventDateParts[0]}`
      );
      return eventDate > currentDate;
    });
  };

  const upcomingEvents = filterUpcomingEvents(upcoming_events.events);

  return (
    <section className="bg-white py-20 scroll-mt-24" id="upcoming-events">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-principal font-panton text-center mb-10">
          Próximos Eventos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{
                opacity: 0,
                x: isMobile ? 100 : 400, 
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 1.0,
                delay: index * 0.1,
              }}
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-panton font-bold text-turquesa80 mb-2">
                  {event.title}
                </h3>
                <p className="text-turquesa65 font-montserrat text-sm mb-4">
                  {formatDate(event.date)} - {event.location}
                </p>
                <p className="text-gray-600 mb-4 font-montserrat min-h-3">
                  {event.description}
                </p>
                <button
                  onClick={() => navigate(`/event-details/${event.id}`)}
                  className="bg-principal text-white py-2 px-10 md:w-auto w-full rounded-lg hover:bg-turquesa80 transition-all duration-300"
                >
                  Inscribirme
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;