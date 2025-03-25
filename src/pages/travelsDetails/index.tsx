import { useParams } from "react-router-dom";
import { useState } from "react";
import travels from "../../data/travels.json";
import { formatDate, ScrollToTop } from "../../utils/functions";

const TravelsDetails = () => {
  ScrollToTop();
  const { id } = useParams<{ id: string }>();
  const travel = travels.find((t) => t.id === Number(id));

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

  if (!travel) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-turquesa10">
        <h1 className="text-2xl font-bold text-red-500">Viaje no encontrado</h1>
      </div>
    );
  }

  return (
    <section className="bg-turquesa10 pt-32 text-black min-h-screen py-16 px-8 md:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-principal mb-4 font-panton">
          {travel.title}
        </h1>
        <p className="text-lg text-turquesa80 mb-8 font-montserrat">
          {travel.description}
        </p>
      </div>

      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        <img
          src={travel.image}
          alt={travel.title}
          className="md:w-1/2 h-auto object-cover aspect-3/2"
          loading="lazy"
        />
        <div className="p-8 md:w-1/2">
          <h2 className="text-2xl text-turquesa80 font-semibold mb-4 font-panton">
            Detalles del Viaje
          </h2>
          <p className="mb-4 text-turquesa65 font-montserrat">{formatDate(travel.date)}</p>
          <p className="mb-4 font-montserrat text-principal">{travel.long_description}</p>
          <p className="mb-4 text-turquesa80 font-montserrat">
            Salida desde: {travel.departure.city} ({travel.departure.time})
          </p>
          <p className="mb-4 text-turquesa80 font-montserrat">
            Llegada a: {travel.arrival.city} ({travel.arrival.time})
          </p>
        </div>
      </div>

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
            aria-label={`Inscribirme al viaje: ${travel.title}`}
            className="bg-principal text-white px-6 py-3 rounded-lg w-full mt-4 hover:bg-turquesa80 transition-all"
          >
            Inscribirme
          </button>
        </form>
      </div>
    </section>
  );
};

export default TravelsDetails;
