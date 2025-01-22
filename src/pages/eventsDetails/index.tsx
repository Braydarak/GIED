import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import upcoming_events from "../../data/events.json";
import { formatDate } from "../../utils/functions";

const EventsDetails = () => {
  const { id } = useParams<{ id: string }>();
  const event = upcoming_events.events.find((e) => e.id === Number(id));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

      {/* Información del evento con diseño de card */}
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        <img
          src={event.image}
          alt={event.title}
          className="md:w-1/2 h-auto object-cover"
        />
        <div className="p-8 md:w-1/2">
          <h2 className="text-2xl text-turquesa80 font-semibold mb-4 font-panton">
            Detalles del Evento
          </h2>
          <p className="mb-4 text-turquesa65 font-montserrat">{formatDate(event.date)}</p>
          <p className="mb-4 text-turquesa80 font-montserrat">{event.location}</p>
          <p className="mb-4 font-montserrat text-principal">{event.long_description}</p>
        </div>
      </div>

      {/* Formulario de inscripción */}
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-6xl mx-auto mt-12">
        <h2 className="text-2xl font-semibold mb-6 font-panton text-principal">Inscríbete ahora</h2>
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
            aria-label={`Inscribirme al evento: ${event.title}`}
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