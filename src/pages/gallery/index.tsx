import { useEffect, useState } from "react";
import eventsData from "../../data/events.json";
import { ScrollToTop } from "../../utils/functions";

const Gallery = () => {
  interface Event {
    id: number;
    title: string;
    date: string;
    location: string;
    description: string;
    long_description: string;
    image: string;
  }
    
    ScrollToTop();

  const [pastEvents, setPastEvents] = useState<Event[]>([]);

  useEffect(() => {
    const today = new Date();

    const filteredAndSortedEvents = eventsData.events
      .filter((event) => {
        const eventDate = new Date(event.date.split("-").reverse().join("-"));
        return eventDate < today;
      })
      .sort((a, b) => {
        const dateA = new Date(a.date.split("-").reverse().join("-"));
        const dateB = new Date(b.date.split("-").reverse().join("-"));
        return dateB.getTime() - dateA.getTime();
      });

    setPastEvents(filteredAndSortedEvents);
  }, []);

  return (
    <div className="min-h-screen flex flex-col pt-32 items-center bg-turquesa10 text-white">
      <h1 className="text-3xl font-bold mb-8 font-panton text-principal">
        Galería de Eventos
      </h1>

      <p className="text-lg text-turquesa80 mb-8 font-montserrat max-w-[36ch] text-center md:max-w-full">
        Selecciona uno de nuestros eventos para ver las imágenes.
      </p>
      {pastEvents.length === 0 ? (
        <p className="text-center text-gray-300">
          Aún no hay eventos con galería disponible.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-8">
          {pastEvents.map((event) => (
            <div key={event.id} className="relative group">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-64 object-cover rounded-lg shadow-lg transition-opacity"
              />
              <div className="absolute bottom-0 bg-black bg-opacity-60 text-white p-4 w-full rounded-b-lg">
                <h2 className="text-lg font-semibold font-panton">
                  {event.title}
                </h2>
                <p className="text-sm text-turquesa65 font-montserrat">
                  {event.date}
                </p>
                <div className="flex justify-end w-full">
                  <a
                    href={`/gallery/${event.id}`}
                    className="mt-2 inline-block text-principal bg-white font-semibold hover:bg-principal hover:text-white py-2 px-6 rounded-lg transition-all duration-300"
                  >
                    Ver Galería
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
