import { useState, useEffect } from "react";
import travelsData from "../../../data/travels.json";
import { useNavigate } from "react-router-dom";
import GiedLogo from '../../../assets/images/LOGOTIPO GIED VERSION 2.webp'

interface Travel {
  id: number;
  title: string;
  image: string;
  date: string;
  description: string;
}

const TravelSection = () => {
  const travel: Travel = travelsData[0];
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(travel.date));
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(travel.date));
    }, 1000);
    return () => clearInterval(timer);
  }, [travel.date]);

  function calculateTimeLeft(targetDate: string) {
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  const isTravelStarted =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  return (
    <section
      className="max-w-4xl snap-start mx-auto space-y-12 px-4 justify-center items-center flex flex-col pb-10 text-center"
      id="travels"
    >
      <h2 className="text-principal font-panton text-4xl mt-8">
        Viajes con GIED
      </h2>

      {isTravelStarted ? (
        <div className="flex flex-col items-center justify-center">
          <span className="text-center text-gray-500 text-2xl mt-10 mb-10 font-montserrat">
            Próximamente anunciaremos nuevos viajes <p className="mt-5">Puedes seguirnos en <a target="_blank" href="https://www.instagram.com/gied.eventos/" className=" font-panton font-bold text-principal cursor-pointer ">INSTAGRAM</a> para mantenerte al tanto de nuestras novedades</p> 
            </span>
            <img src={GiedLogo} className="w-28" />
            </div>
      ) : (
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-6 w-full">
          <img
            src={travel.image}
            alt="Viaje"
            className="object-cover rounded-lg w-[400px] aspect-3/2"
            loading="lazy"
          />
          <div className="p-6 text-center grid grid-rows-3 justify-center">
            <h2 className="text-principal mb-5 text-2xl md:text-4xl font-panton">
              {travel.title}
            </h2>
            {/* Cuenta atrás */}
            <div className="text-2xl md:text-4xl font-bold text-principal mb-4 uppercase">
              {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
              {timeLeft.seconds}s
            </div>
            {/* Descripción */}
            <p className="text-turquesa80 text-l md:text-md mb-6">
              {travel.description}
            </p>
            <button
              className="bg-principal text-white py-2 px-10 md:w-auto w-full rounded-lg hover:bg-turquesa80 transition-all duration-300 mt-auto"
              onClick={() => navigate(`/travel/${travel.id}`)}
              aria-label={`Ver detalles del evento: ${travel.title}`}
            >
              Inscribirme
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default TravelSection;