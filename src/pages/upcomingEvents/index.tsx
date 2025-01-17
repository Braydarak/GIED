const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      title: "Carrera de montaña 2025",
      date: "20 de Febrero, 2025",
      location: "Soller, Mallorca",
      description:
        "Una experiencia única para los amantes del deporte al aire libre.",
      image: "https://lacasadeltrailrunning.com/wp-content/uploads/2019/12/trail-running-cosa-mi-serve.jpg", // Reemplazar con URL de la imagen real
    },
    {
      id: 2,
      title: "Triatlón Costero",
      date: "15 de Marzo, 2025",
      location: "Palma, Mallorca",
      description: "Nadar, correr y pedalear junto al mar.",
      image: "https://triatletasenred.sport.es/wp-content/uploads/100x100-Half-2019.jpg",
    },
    {
      id: 3,
      title: "Torneo de Fútbol Infantil",
      date: "10 de Abril, 2025",
      location: "Son Servera, Mallorca",
      description: "Un evento deportivo para disfrutar en familia.",
      image: "https://ytg-prod.imgix.net/img/news/q7EUifaAK0DQ3skzemDqjs2cE70aWy27WBtjcTtS.jpg",
    },
  ];

  return (
    <section className="bg-turquesa10 py-20 scroll-mt-24" id="upcoming-events">
      <div className="container mx-auto px-4">
        {/* Título de la sección */}
        <h2 className="text-4xl font-bold text-principal font-panton text-center mb-10">
          Próximos Eventos
        </h2>

        {/* Listado de eventos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
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
                <button className="bg-principal text-white py-2 px-4 md:w-auto w-full rounded-lg hover:bg-turquesa80 transition-all duration-300">
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
