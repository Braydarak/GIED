import { useState, useEffect } from 'react';
import logo from '../../assets/images/LOGOTIPO GIED VERSION 2.png';
import InstagramLogo from '../instagramLogo';
import cataluña from '../../assets/images/flags/españa.webp';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    // Escuchar cambios en el tamaño de la pantalla
    window.addEventListener('resize', handleResize);

    return () => {
      // Limpiar el evento en el desmontaje
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 left-0 w-full flex justify-between items-center p-4 pl-4 pr-4 md:pl-16 md:pr-16 transition-all duration-300 ${
        scrolled ? 'bg-turquesa25' : 'bg-transparent'
      }`}
    >
      {/* Logo de GIED */}
      <img
        src={logo}
        alt="GIED Logo"
        className="h-12 md:h-24 transition-all duration-300"
      />

      {/* Logos a la derecha */}
      <div className="flex items-center space-x-8">
        <a
          href="https://www.instagram.com/gied.eventos/"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            transition: 'fill 0.3s ease', 
          }}
        >
          <InstagramLogo
            width={isMobile ? '25' : '30'}
            height={isMobile ? '25' : '30'}
            fill={
              isHovered
                ? '#00a59e'
                : scrolled
                ? '#000000' 
                : '#ffffff'
            }
          />
        </a>

        <img
          src={cataluña}
          alt="Bandera de Cataluña"
          className="rounded-full h-8 w-8"
        />
      </div>
    </header>
  );
};

export default Header;