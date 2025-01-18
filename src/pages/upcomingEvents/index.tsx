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

// Función para formatear las fechas a 'dd de MMMM, yyyy'
const formatDate = (dateString: string): string => {
  const dateParts = dateString.split("-"); // Descomponer la fecha (dd-mm-yyyy)
  const eventDate = new Date(
    `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`
  ); // Crear un objeto Date con formato yyyy-mm-dd

  // Array de nombres de meses
  const months = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  const day = eventDate.getDate();
  const month = months[eventDate.getMonth()];
  const year = eventDate.getFullYear();

  // Retornar la fecha en formato 'dd de MMMM, yyyy'
  return `${day} de ${month}, ${year}`;
};

const UpcomingEvents = () => {
  const navigate = useNavigate();
  const currentDate = new Date();

  // Filtrar los eventos que aún no han pasado
  const filterUpcomingEvents = (events: Event[]) => {
    return events.filter((event) => {
      const eventDateParts = event.date.split("-"); // Descomponer la fecha (dd-mm-yyyy)
      const eventDate = new Date(
        `${eventDateParts[2]}-${eventDateParts[1]}-${eventDateParts[0]}`
      ); // Crear un objeto Date con formato yyyy-mm-dd
      return eventDate > currentDate; // Mostrar solo eventos que aún no han pasado
    });
  };

  const upcomingEvents = filterUpcomingEvents(upcoming_events.events);

  return (
    <section className="bg-white py-20 scroll-mt-24" id="upcoming-events">
      <div className="container mx-auto px-4">
        {/* Título de la sección */}
        <h2 className="text-4xl font-bold text-principal font-panton text-center mb-10">
          Próximos Eventos
        </h2>

        {/* Listado de eventos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => (
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
                  {formatDate(event.date)} - {event.location} {/* Aquí usamos la función formatDate */}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;