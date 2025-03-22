import { useState, useEffect } from "react";
import travelsData from "../../../data/travels.json";
import { useNavigate } from "react-router-dom";

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

  return (
    <section
      className=" flex flex-col justify-center items-center bg-turquesa10 pt-20 pb-20"
      id="travels"
    >
      <h2 className="text-principal font-panton text-4xl mb-10">
        Viajes con GIED
      </h2>
      <div className="bg-white flex justify-around shadow-lg rounded-lg overflow-hidden w-[80%] p-4 md:p-4 flex-col md:flex-row">
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
          <p className="text-turquesa80 text-l md:text-md">
            {travel.description}
          </p>
          <button className="bg-principal text-white py-2 px-10 md:w-auto w-full rounded-lg hover:bg-turquesa80 transition-all duration-300 mt-auto"
          onClick={() => navigate(`/travel/${travel.id}`)}
            aria-label={`Ver detalles del evento: ${travel.title}`}
          >
          Inscribirme
        </button>
        </div>
        
      </div>
    </section>
  );
};

export default TravelSection;
