import GiedLogo from "../../assets/images/LOGOTIPO GIED VERSION 2.webp";
import {
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-black pt-16 pb-8 border-t border-gray-100 font-montserrat">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo y descripción */}
          <div className="flex flex-col items-start">
            <img
              src={GiedLogo}
              alt="Logo de GIED"
              className="w-32 mb-6 brightness-0"
            />
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Expertos en gestión integral de eventos deportivos. Hacemos
              realidad tu proyecto con profesionalidad, pasión y compromiso.
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-panton font-bold text-lg mb-6 text-principal">
              Contacto
            </h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <FaEnvelope className="mt-1 text-turquesa65 flex-shrink-0" />
                <a
                  href="mailto:info@giedesports.com"
                  className="hover:text-principal transition-colors"
                >
                  Info@gied.info
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaPhoneAlt className="mt-1 text-turquesa65 flex-shrink-0" />
                <a
                  href="tel:+34600000000"
                  className="hover:text-principal transition-colors"
                >
                  +34 600 000 000
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-turquesa65 flex-shrink-0" />
                <span>Islas Baleares, España</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-panton font-bold text-lg mb-6 text-principal">
              Legal
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-principal transition-colors">
                  Aviso Legal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-principal transition-colors">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-principal transition-colors">
                  Política de Cookies
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h3 className="font-panton font-bold text-lg mb-6 text-principal">
              Síguenos
            </h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/gied.eventos/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-principal hover:bg-principal hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-principal hover:bg-principal hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {currentYear} GIED Esports - Todos los derechos reservados</p>
          <p>
            Web desarrollada por{" "}
            <a
              href="https://brian-darakdjian.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-principal hover:text-turquesa65 transition-colors"
            >
              Brian Darakdjian
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
