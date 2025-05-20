
const AboutUsSection = () => {
  return (
    <section className="bg-turquesa10 text-black py-16 px-8 scroll-mt-24 snap-start" id="about">
      <div className="max-w-6xl mx-auto text-center min-h-96 flex flex-col justify-center">
        <h2 className="text-4xl font-panton text-principal font-bold mb-8">
          ¿Qué es GIED?
        </h2>

        <div className="grid md:grid-cols-2 gap-8 w-full justify-center items-start text-lg font-montserrat text-start">
          <p className="leading-relaxed">
            GIED es una organización especializada en la creación y gestión de eventos deportivos de alto nivel. Con experiencia en distintas disciplinas, ofrecemos competencias bien organizadas, con infraestructura de calidad y un ambiente donde la pasión por el deporte se vive al máximo.
          </p>
          <p className="leading-relaxed">
            A través de nuestra web y redes sociales, compartimos momentos inolvidables, inscripciones y toda la información sobre nuestros eventos. Si te apasiona el deporte, ¡seguinos y mantenete al tanto de nuestras próximas competencias!
          </p>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-8 w-full justify-center items-start text-lg font-montserrat text-start">
          <p className="leading-relaxed">
            Nuestro equipo está compuesto por profesionales apasionados por el deporte y la organización de eventos, garantizando experiencias únicas para los participantes y espectadores. Trabajamos con un enfoque innovador, adaptándonos a las últimas tendencias y tecnologías para ofrecer eventos de primer nivel.
          </p>
          <p className="leading-relaxed">
            Además, promovemos el deporte como un medio para la integración social y el desarrollo personal. Creemos que el espíritu deportivo fomenta valores fundamentales como el respeto, la disciplina y el trabajo en equipo. ¡Sumate a nuestra comunidad y viví la emoción de cada competencia!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;