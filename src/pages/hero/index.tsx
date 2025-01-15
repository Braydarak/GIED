import bg from '../../assets/images/bg-image.png';

const HeroSection = () => {
  return (
    <section
      className="relative bg-black text-white py-20 flex flex-col items-center pt-32 h-screen justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      {/* Superposición para mejorar el contraste */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Contenido */}
      <div className="relative z-10 text-center">
        {/* Título principal */}
        <h1 className="text-5xl font-panton font-bold text-principal mb-4 sm:text-4xl md:text-5xl">
          ¡Bienvenidos a GIED!
        </h1>

        {/* Subtítulo */}
        <p className="text-xl font-panton text-turquesa80 mb-8 sm:text-lg sm:px-6 md:max-w-xl mx-auto">
          Descubre los mejores eventos deportivos y mantente al día con nuestras actividades deportivas exclusivas.
        </p>

        {/* Botón CTA */}
        <button className="bg-principal text-white text-lg py-3 px-10 rounded-lg hover:bg-turquesa80 transition-all ease-in-out duration-300 sm:py-2 sm:px-6">
          Ver Eventos
        </button>
      </div>
    </section>
  );
};

export default HeroSection;