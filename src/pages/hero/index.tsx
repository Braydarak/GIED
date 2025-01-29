import { motion } from "framer-motion";
import bg from '../../assets/images/bg-image.webp';
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = () => {
    const section = document.getElementById('upcoming-events');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative bg-black text-white py-20 flex flex-col items-center pt-32 h-screen justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      {/* Contenido */}
      <div className="relative z-10 text-center">
        <motion.h1
          className="text-5xl font-panton font-bold text-principal mb-4 sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, x: isMobile ? -50 : -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          ¡Bienvenidos a GIED!
        </motion.h1>
        <motion.p
          className="text-xl font-panton text-turquesa80 mb-8 sm:text-lg sm:px-6 md:max-w-xl mx-auto"
          initial={{ opacity: 0, x: isMobile ? 50 : 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          Descubre los mejores eventos deportivos y mantente al día con nuestras actividades deportivas exclusivas.
        </motion.p>

        {/* Botón CTA */}
        <motion.button
          onClick={scrollToSection}
          aria-label={`Presionar para ver los próximos eventos`}
          className="bg-principal text-white text-lg py-3 px-10 rounded-lg hover:bg-turquesa80 transition-all ease-in-out duration-300 sm:py-2 sm:px-6"
          initial={{ opacity: 0, y: isMobile ? 20 : 50 }} // Menos desplazamiento en mobile
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          Ver Próximos Eventos
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;