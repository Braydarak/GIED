import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
  };

  return (
    <section className="bg-turquesa10 text-black py-16 px-8 scroll-mt-24" id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-panton text-principal font-bold mb-8">Contáctanos</h2>
        <p className="text-lg mb-8 font-montserrat">
          ¿Tienes alguna duda o pregunta?{" "}
          <p>Déjanos un mensaje y nos pondremos en contacto contigo.</p>
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-2 p-3 rounded-md border-2 border-turquesa65 focus:outline-none focus:border-turquesa80"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-medium">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-2 p-3 rounded-md border-2 border-turquesa65 focus:outline-none focus:border-turquesa80"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-medium">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full mt-2 p-3 rounded-md border-2 border-turquesa65 focus:outline-none focus:border-turquesa80"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            aria-label={`Enviar mensaje a GIED para ponerme en contacto`}
            className="bg-principal text-white py-3 px-8 rounded-md font-semibold hover:bg-turquesa65 transition duration-300"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
