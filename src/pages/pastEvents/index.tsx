import past_events from "../../data/events.json";

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

const PastEventsPage = () => {
  // Obtener la fecha actual
  const currentDate = new Date();

  // Función para comparar las fechas (convertir las fechas dd-mm-yyyy a yyyy-mm-dd)
  const filterPastEvents = (events: Event[]) => {
    return events.filter((event) => {
      const eventDateParts = event.date.split("-"); // Descomponer la fecha (dd-mm-yyyy)
      const eventDate = new Date(
        `${eventDateParts[2]}-${eventDateParts[1]}-${eventDateParts[0]}`
      ); // Crear un objeto Date con formato yyyy-mm-dd
      return eventDate < currentDate; // Mostrar solo eventos pasados
    });
  };

  const pastEvents = filterPastEvents(past_events.events);

  return (
    <div className="bg-turquesa10 text-white min-h-screen pt-20 pb-20">
      <h1 className="text-4xl text-center font-panton text-principal font-bold mb-12">
        Eventos Pasados
      </h1>

      {/* Lista de eventos pasados */}
      <div className="max-w-4xl mx-auto space-y-12 md:pl-0 pl-[10px] md:pr-0 pr-[10px]">
        {pastEvents.length > 0 ? (
          pastEvents.map((event) => (
            <div
              key={event.id}
              className="bg-principal rounded-lg shadow-lg p-6 flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-6"
            >
              <img
                src={event.image}
                alt={event.title}
                className="h-48 md:w-48 object-cover rounded-lg  w-full"
              />
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white font-panton">
                  {event.title}
                </h2>
                <p className="text-lg text-turquesa10 font-monserrat">
                  {formatDate(event.date)} {/* Aquí usamos la función formatDate */}
                </p>
                <p className="text-lg text-turquesa10 font-monserrat">{event.location}</p>
                <p className="text-base text-white mt-4 font-monserrat">
                  {event.description}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-lg text-white">No hay eventos pasados.</p>
        )}
      </div>
    </div>
  );
};

export default PastEventsPage;