import GiedLogo from "../../assets/images/LOGOTIPO GIED VERSION 2.webp";
import InstagramLogo from "../instagramLogo";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-6">
      <div className="container mx-auto flex justify-between flex-col md:flex-row items-center px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-0 md:mb-4">
          <img
            src={GiedLogo}
            alt="Logo de GIED"
            className="w-20 md:w-36 mb-2 md:mb-0 brightness-0"
          />
        </div>
        <div className="flex justify-center flex-col items-center md:items-end">
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/gied.eventos/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block cursor-pointer mb-4"
              aria-label="Instagram"
            >
              <InstagramLogo width="30" height="30" />
            </a>
          </div>
          <span className="text-xs md:text-sm font-montserrat font-semibold">
            © 2025 GIED - Todos los derechos reservados
          </span>
          {/* Texto de diseño */}
          <span className="text-xs md:text-sm text-gray-400 font-montserrat font-semibold mb-2 md:mb-0">
            Web desarrollada por Brian Darakdjian
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
