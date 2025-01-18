import { useNavigate } from "react-router-dom";
import upcoming_events from "../../data/upcoming_events.json";

const UpcomingEvents = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-turquesa10 py-20 scroll-mt-24" id="upcoming-events">
      <div className="container mx-auto px-4">
        {/* Título de la sección */}
        <h2 className="text-4xl font-bold text-principal font-panton text-center mb-10">
          Próximos Eventos
        </h2>

        {/* Listado de eventos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcoming_events.upcoming_events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Imagen del evento */}
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />

              {/* Detalles del evento */}
              <div className="p-6">
                <h3 className="text-2xl font-panton font-bold text-turquesa80 mb-2">
                  {event.title}
                </h3>
                <p className="text-turquesa65 font-montserrat text-sm mb-4">
                  {event.date} - {event.location}
                </p>
                <p className="text-gray-600 mb-4 font-montserrat min-h-3">
                  {event.description}
                </p>
                <button
                  onClick={() => navigate(`/event-details/${event.id}`)}
                  className="bg-principal text-white py-2 px-4 md:w-auto w-full rounded-lg hover:bg-turquesa80 transition-all duration-300"
                >
                  Más información
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
