import { useState, useEffect } from 'react';
import logo from '../../assets/images/LOGOTIPO GIED VERSION 2.webp';
import InstagramLogo from '../instagramLogo';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  const isEventDetailsPage = /^\/event-details\/\d+$/.test(location.pathname);

const knownRoutes = ['/', '/home', '/about', '/contact', '/event-details/:id']; // Include all known routes
const is404Page = !knownRoutes.some(route => new RegExp(`^${route.replace(/:\w+/g, '\\d+')}$`).test(location.pathname));

const instagramFill =
  isEventDetailsPage || is404Page
    ? '#000000' 
    : isHovered
    ? '#00a59e'
    : scrolled
    ? '#000000' 
    : '#ffffff'; 

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  return (
    <header
      className={`fixed top-0 z-50 left-0 w-full flex justify-between items-center p-4 pl-4 pr-4 md:pl-16 md:pr-16 transition-all duration-300 ${
        scrolled ? 'bg-turquesa25' : 'bg-transparent'
      }`}
    >
      {/* Logo de GIED */}
      <Link to="/" className="cursor-pointer" onClick={scrollToTop}>
        <img
          src={logo}
          alt="GIED Logo"
          className="h-12 md:h-24 transition-all duration-300 w-full aspect-3/2"
        />
      </Link>

      {/* Logos a la derecha */}
      <div className="flex items-center space-x-8">
        <a
          href="https://www.instagram.com/gied.eventos/"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
          aria-label='Instagram'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            transition: 'fill 0.3s ease', 
          }}
        >
          <InstagramLogo
            width={isMobile ? '25' : '30'}
            height={isMobile ? '25' : '30'}
            fill={instagramFill}
          />
        </a>
      </div>
    </header>
  );
};

export default Header;