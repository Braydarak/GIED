
// Un ejemplo de evento pasado. Puedes reemplazar esta información con datos reales.
const pastEvents = [
  {
    id: 1,
    title: 'Torneo de Fútbol 7',
    date: '2024-11-15',
    description: 'Un torneo amistoso de fútbol 7 con equipos locales. ¡Fue un gran evento!',
    imageUrl: '/path-to-image1.jpg',
  },
  {
    id: 2,
    title: 'Maratón de la Ciudad',
    date: '2024-10-30',
    description: 'Una maratón de 42 km con corredores internacionales y locales.',
    imageUrl: '/path-to-image2.jpg',
  },
  {
    id: 3,
    title: 'Partido de Rugby - Final',
    date: '2024-09-22',
    description: 'La final del campeonato de rugby con los dos equipos más competitivos de la temporada.',
    imageUrl: '/path-to-image3.jpg',
  },
];

const PastEventsPage = () => {
  return (
    <div className="bg-white text-white min-h-screen pt-20 pb-20">
      <h1 className="text-4xl text-center font-panton text-principal font-bold mb-12">Eventos Pasados</h1>
      
      {/* Lista de eventos pasados */}
      <div className="max-w-4xl mx-auto space-y-12 md:pl-0  pl-[10px] md:pr-0 pr-[10px]">
        {pastEvents.map((event) => (
          <div key={event.id} className="bg-principal rounded-lg shadow-lg p-6 flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-6">
            <img src={event.imageUrl} alt={event.title} className="h-48 w-48 object-cover rounded-lg" />
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white font-panton">{event.title}</h2>
              <p className="text-lg text-turquesa10 font-monserrat">{event.date}</p>
              <p className="text-base text-white mt-4 font-monserrat">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastEventsPage;