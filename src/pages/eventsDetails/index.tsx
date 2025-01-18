import { useParams } from "react-router-dom";
import { useState } from "react";
import upcoming_events from "../../data/events.json";


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

const EventsDetails = () => {
  const { id } = useParams<{ id: string }>(); // Obtén el ID del evento desde la URL
  const event = upcoming_events.events.find((e) => e.id === Number(id)); // Busca el evento correspondiente

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`¡Gracias por inscribirte, ${formData.name}!`);
    setFormData({ name: "", email: "", phone: "" });
  };

  if (!event) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-turquesa10">
        <h1 className="text-2xl font-bold text-red-500">Evento no encontrado</h1>
      </div>
    );
  }

  return (
    <section className="bg-turquesa10 pt-32 text-black min-h-screen py-16 px-8 md:px-16">
      {/* Encabezado */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-principal mb-4 font-panton">
          {event.title}
        </h1>
        <p className="text-lg text-turquesa80 mb-8 font-montserrat">
          {event.description}
        </p>
      </div>

      {/* Información del evento */}
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl text-turquesa80 font-semibold mb-4 font-panton">
          Detalles del Evento
        </h2>
        {/* Usamos formatDate para mostrar la fecha formateada */}
        <p className="mb-4 text-turquesa65">{formatDate(event.date)}</p>
        <p className="mb-4 text-turquesa80">{event.location}</p>
        <img src={event.image} alt={event.title} className="w-full rounded-lg mb-4" />
      </div>

      {/* Formulario de inscripción */}
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Inscríbete ahora</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
              Nombre completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-principal"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-principal"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">
              Teléfono
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-principal"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-principal text-white px-6 py-3 rounded-lg w-full mt-4 hover:bg-turquesa80 transition-all"
          >
            Inscribirme
          </button>
        </form>
      </div>
    </section>
  );
};

export default EventsDetails;