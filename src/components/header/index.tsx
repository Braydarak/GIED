import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import gsap from "gsap";
import logo from "../../assets/images/LOGOTIPO GIED VERSION 2.webp";
import InstagramLogo from "../instagramLogo";
import MenuIcon from "../menuIcon";
import CloseIcon from "../closeIcon";
import { useScroll } from "../../context/ScrollContext";
import LanguageDropdown from "../languajeDropdown";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [instagramHovered, setInstagramHovered] = useState(false);
  const [menuHovered, setMenuHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { lenis } = useScroll();
  const menuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const isGalleryPage = /^\/gallery(?:\/\d+)?$/.test(location.pathname);
  const isEventDetailsPage = /^\/event-details(?:\/\d+)?$/.test(
    location.pathname,
  );
  const isTravelPage = /^\/travel(?:\/\d+)?$/.test(location.pathname);

  const defaultColor =
    isEventDetailsPage || isGalleryPage || isTravelPage
      ? "#000000"
      : scrolled
        ? "#000000"
        : "#ffffff";
  const instagramFill = instagramHovered ? "#00a59e" : defaultColor;
  const menuFill = menuHovered ? "#00a59e" : defaultColor;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const menuEl = menuRef.current;
    const overlayEl = overlayRef.current;
    if (!menuEl || !overlayEl) return;

    const isDesktop = window.innerWidth >= 768;
    const targetWidth = isDesktop ? "33.3333%" : "100%";
    const listItems = menuEl.querySelectorAll(".menu-item-container");
    const footerItems = menuEl.querySelectorAll(".menu-footer");

    if (menuOpen) {
      // Disable scroll
      document.body.style.overflow = "hidden";
      if (lenis) lenis.stop();

      const tl = gsap.timeline();

      gsap.set(menuEl, {
        display: "block",
        x: "100%", // Start completely off-screen to the right
        opacity: 1, // Keep opacity 1 for clean slide
        width: targetWidth,
        scaleX: 1, // Reset scale
      });

      gsap.set(overlayEl, {
        display: "block",
        opacity: 0,
      });

      // Set initial state for list items (start from right)
      gsap.set(listItems, {
        x: 100, // Increased distance for more dynamic entry
        opacity: 0,
      });

      // Set initial state for footer items (start from bottom)
      gsap.set(footerItems, {
        y: 20,
        opacity: 0,
      });

      // Animate overlay
      gsap.to(overlayEl, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });

      tl.to(menuEl, {
        x: "0%",
        duration: 0.8, // Slightly longer for smoothness
        ease: "expo.out", // Elegant deceleration
      })
        .to(
          listItems,
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .to(
          footerItems,
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.2",
        ); // Overlap significantly with menu opening
    } else {
      // Enable scroll
      document.body.style.overflow = "";
      if (lenis) lenis.start();

      // Animate overlay out
      gsap.to(overlayEl, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(overlayEl, { display: "none" });
        },
      });

      gsap.to(menuEl, {
        x: "100%", // Slide out to the right
        duration: 0.6,
        ease: "expo.in", // Accelerate out
        onComplete: () => {
          gsap.set(menuEl, { display: "none" });
        },
      });
    }
  }, [lenis, menuOpen]);

  const handleNavigation = (sectionId: string) => {
    setMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 700); // Increased delay to account for navigation + menu closing
    } else {
      // If we are already home, just wait for menu to close slightly
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 120;
      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY;

      if (lenis) {
        lenis.start(); // Ensure lenis is started
        lenis.scrollTo(sectionPosition - headerOffset, {
          duration: 1.2,
          force: true, // Force scroll even if stopped (if supported)
        });
      } else {
        // Fallback to native scroll
        window.scrollTo({
          top: sectionPosition - headerOffset,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 z-50 left-0 w-full flex justify-between items-center p-4 pl-4 pr-4 md:pl-16 md:pr-16 transition-all duration-300 ${
        scrolled ? "bg-turquesa25" : "bg-transparent"
      }`}
    >
      {/* Logo de GIED */}
      <Link
        to="/"
        className="cursor-pointer"
        onClick={() => {
          if (location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
              lenis?.scrollTo(0);
            }, 300);
          } else {
            lenis?.scrollTo(0);
          }
          setMenuOpen(false);
        }}
      >
        <img
          src={logo}
          alt="GIED Logo"
          className="h-12 md:h-24 transition-all duration-300 w-auto aspect-3/2"
        />
      </Link>

      {/* Menú Hamburguesa */}
      <div className="relative flex items-center space-x-2 md:space-x-8 z-50">
        {/* Overlay para cerrar el menú */}
        <div
          ref={overlayRef}
          className="fixed inset-0 bg-black/50 z-40 hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />

        <LanguageDropdown scrolled={scrolled} />

        {/* Instagram */}
        <a
          href="https://www.instagram.com/gied.esports/"
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
          className="z-50 relative"
        >
          <MenuIcon color={menuFill} />
        </button>

        {/* Contenido del menú */}
        <nav
          ref={menuRef}
          className="fixed top-0 right-0 h-full bg-turquesa25 shadow-lg overflow-hidden translate-x-full z-50"
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
          <ul className="flex flex-col items-stretch text-right space-y-0 px-8 pt-4 pb-0 font-montserrat text-2xl h-full">
            <li className="menu-item-container w-full border-b border-gray-300 py-6">
              <span
                onClick={() => handleNavigation("about")}
                className="text-gray-800 hover:text-principal transition cursor-pointer block w-full"
              >
                ¿Que es Gied?
              </span>
            </li>
            <li className="menu-item-container w-full border-b border-gray-300 py-6">
              <span
                onClick={() => handleNavigation("process")}
                className="text-gray-800 hover:text-principal transition cursor-pointer block w-full"
              >
                Nuestros Proceso
              </span>
            </li>

            <li className="menu-item-container w-full border-b border-gray-300 py-6">
              <span
                onClick={() => handleNavigation("services")}
                className="text-gray-800 hover:text-principal transition cursor-pointer block w-full"
              >
                Nuestros Servicios
              </span>
            </li>
            <li className="menu-item-container w-full border-b border-gray-300 py-6">
              <span
                onClick={() => handleNavigation("contact")}
                className="text-gray-800 hover:text-principal transition cursor-pointer block w-full"
              >
                Contáctanos
              </span>
            </li>

            {/* Espaciador flexible para empujar el footer hacia abajo */}
            <li className="flex-grow"></li>

            {/* Footer del menú */}
            <li className="menu-footer pb-8 pt-4">
              <div className="flex flex-col items-end gap-2">
                <div className="flex items-center gap-4 mt-2">
                  <a
                    href="https://www.instagram.com/gied.esports/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  >
                    <InstagramLogo width="24" height="24" fill="#000000" />
                  </a>
                </div>
              </div>
            </li>
          </ul>

          {/* Eliminamos el footer mobile anterior ya que ahora está integrado */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
