import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    // Aquí iría la lógica de envío real
  };

  return (
    <section
      className="bg-gray-50 text-black py-20 px-4 md:px-8 lg:px-12 snap-start scroll-mt-24"
      id="contact"
    >
      <div className="max-w-[1240px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Columna Izquierda: Información */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-panton text-principal font-bold mb-6 leading-tight">
                {t("contact.title")} <br className="hidden md:block" />
                <span className="text-turquesa65">{t("contact.subtitle")}</span>
              </h2>
              <p className="text-lg text-gray-600 font-montserrat leading-relaxed max-w-lg">
                {t("contact.description")}
              </p>
            </div>

            <div className="flex flex-col gap-6 mt-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300 group">
                <div className="bg-turquesa10 p-3 rounded-full text-principal text-xl group-hover:bg-principal group-hover:text-white transition-colors duration-300">
                  <FaEnvelope />
                </div>
                <div>
                  <h3 className="font-bold text-principal text-lg font-panton">
                    {t("contact.info.email")}
                  </h3>
                  <a
                    href="mailto:info@giedesports.com"
                    className="font-montserrat text-gray-600 hover:text-turquesa65 transition-colors"
                  >
                    Info@gied.info
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300 group">
                <div className="bg-turquesa10 p-3 rounded-full text-principal text-xl group-hover:bg-principal group-hover:text-white transition-colors duration-300">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h3 className="font-bold text-principal text-lg font-panton">
                    {t("contact.info.phone")}
                  </h3>
                  <a
                    href="tel:+34600000000"
                    className="font-montserrat text-gray-600 hover:text-turquesa65 transition-colors"
                  >
                    +34 600 000 000
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300 group">
                <div className="bg-turquesa10 p-3 rounded-full text-principal text-xl group-hover:bg-principal group-hover:text-white transition-colors duration-300">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3 className="font-bold text-principal text-lg font-panton">
                    {t("contact.info.location")}
                  </h3>
                  <p className="font-montserrat text-gray-600">
                    {t("contact.info.address")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
            {/* Elemento decorativo */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-turquesa10 rounded-bl-full -mr-10 -mt-10 opacity-50 pointer-events-none"></div>

            <h3 className="text-2xl font-bold font-panton text-principal mb-6">
              {t("contact.form.title")}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-bold text-gray-700 font-montserrat ml-1"
                  >
                    {t("contact.form.name.label")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder={t("contact.form.name.placeholder")}
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-turquesa65 focus:outline-none transition-all duration-300 font-montserrat"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-bold text-gray-700 font-montserrat ml-1"
                  >
                    {t("contact.form.email.label")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder={t("contact.form.email.placeholder")}
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-turquesa65 focus:outline-none transition-all duration-300 font-montserrat"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-bold text-gray-700 font-montserrat ml-1"
                >
                  {t("contact.form.message.label")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder={t("contact.form.message.placeholder")}
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full p-4 rounded-xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-turquesa65 focus:outline-none transition-all duration-300 font-montserrat resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-principal text-white py-4 rounded-xl font-bold font-panton text-lg hover:bg-turquesa65 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                {t("contact.form.submit")}
                <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 text-sm" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
