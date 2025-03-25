import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/LOGOTIPO GIED VERSION 2.webp";
import InstagramLogo from "../instagramLogo";
import MenuIcon from "../menuIcon";
import CloseIcon from "../closeIcon";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [instagramHovered, setInstagramHovered] = useState(false);
  const [menuHovered, setMenuHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isGalleryPage = /^\/gallery(?:\/\d+)?$/.test(location.pathname);
  const isEventDetailsPage = /^\/event-details(?:\/\d+)?$/.test(location.pathname);
  const isTravelPage = /^\/travel(?:\/\d+)?$/.test(location.pathname);

  const defaultColor = isEventDetailsPage || isGalleryPage || isTravelPage ? "#000000" : scrolled ? "#000000" : "#ffffff";
  const instagramFill = instagramHovered ? "#00a59e" : defaultColor;
  const menuFill = menuHovered ? "#00a59e" : defaultColor;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 300);
    } else {
      scrollToSection(sectionId);
    }
    setMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 80;
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: sectionPosition - headerOffset, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 z-50 left-0 w-full flex justify-between items-center p-4 pl-4 pr-4 md:pl-16 md:pr-16 transition-all duration-300 ${
        scrolled ? "bg-turquesa25" : "bg-transparent"
      }`}
    >
      {/* Logo de GIED */}
      <Link to="/" className="cursor-pointer" onClick={() => handleNavigation("hero")}>
        <img src={logo} alt="GIED Logo" className="h-12 md:h-24 transition-all duration-300 w-auto aspect-3/2" />
      </Link>

      {/* Menú Hamburguesa */}
      <div className="relative flex items-center space-x-8">
        {/* Instagram */}
        <a
          href="https://www.instagram.com/gied.eventos/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block cursor-pointer"
          aria-label="Instagram"
          onMouseEnter={() => setInstagramHovered(true)}
          onMouseLeave={() => setInstagramHovered(false)}
        >
          <InstagramLogo width="30" height="30" fill={instagramFill} />
        </a>

        {/* Menú Hamburguesa */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
          onMouseEnter={() => setMenuHovered(true)}
          onMouseLeave={() => setMenuHovered(false)}
        >
          <MenuIcon color={menuFill} />
        </button>

        {/* Contenido del menú */}
        <nav
          className={`fixed top-0 right-0 h-full ${menuOpen ? "w-full md:w-1/3" : "w-0"} bg-turquesa25 shadow-lg transition-all duration-300 overflow-hidden`}
          style={{
            boxShadow: "rgba(0, 0, 0, 0.2) -5px 0px 15px",
          }}
        >
          {/* Botón de cierre dentro del menú */}
          <div className="flex justify-end p-4 mt-8">
            <button onClick={() => setMenuOpen(false)} aria-label="Cerrar menú">
              <CloseIcon color="#000000" />
            </button>
          </div>

          {/* Items del menú */}
          <ul className="flex flex-col items-end text-right space-y-6 p-8 font-montserrat text-2xl gap-8 mr-8">
            <li className="w-max">
              <span
                onClick={() => handleNavigation("upcoming-events")}
                className="text-gray-800 hover:text-principal transition cursor-pointer"
              >
                Próximos Eventos
              </span>
            </li>

            <li className="w-max">
              <span
                onClick={() => handleNavigation("travels")}
                className="text-gray-800 hover:text-principal transition cursor-pointer"
              >
                Viajes
              </span>
            </li>

            <li className="w-max">
              <span
                onClick={() => handleNavigation("past-events")}
                className="text-gray-800 hover:text-principal transition cursor-pointer"
              >
                Eventos Pasados
              </span>
            </li>

            <li className="w-max">
              <Link to="/gallery" className="text-gray-800 hover:text-principal transition cursor-pointer" onClick={() => setMenuOpen(false)}>
                Galería
              </Link>
            </li>

            <li className="w-max">
              <span
                onClick={() => handleNavigation("contact")}
                className="text-gray-800 hover:text-principal transition cursor-pointer"
              >
                Contáctanos
              </span>
            </li>
          </ul>

          {/* Instagram en mobile */}
          <div className="md:hidden absolute bottom-4 w-full flex justify-end items-center pr-8 mb-8">
            <a href="https://www.instagram.com/gied.eventos/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramLogo width="40" height="40" fill="#000000" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;