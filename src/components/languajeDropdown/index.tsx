import { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaGlobe } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "es", name: "Español", short: "ES" },
  { code: "en", name: "English", short: "EN" },
  { code: "ca", name: "Català", short: "CA" },
  { code: "de", name: "Deutsch", short: "DE" },
];

const LanguageDropdown = ({ scrolled }: { scrolled: boolean }) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(
    languages.find((lang) => lang.code === i18n.language) || languages[0],
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentLang = languages.find((lang) => lang.code === i18n.language);
    if (currentLang) setSelectedLang(currentLang);
  }, [i18n.language]);

  // Cerrar al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (lang: (typeof languages)[0]) => {
    setSelectedLang(lang);
    setIsOpen(false);
    i18n.changeLanguage(lang.code);
    console.log("Idioma cambiado a:", lang.code);
  };

  const textColor = scrolled ? "text-black" : "text-white";
  const iconColor = scrolled ? "text-black" : "text-white";

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 font-montserrat font-medium transition-colors py-2 px-3 rounded-lg hover:bg-white/10 ${textColor}`}
        aria-label="Seleccionar idioma"
        aria-expanded={isOpen}
      >
        <FaGlobe className={`text-lg ${iconColor}`} />
        <span className="uppercase font-bold text-sm">
          {selectedLang.short}
        </span>
        <FaChevronDown
          className={`text-xs transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          } ${scrolled ? "text-black" : "text-white/80"}`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 overflow-hidden">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang)}
              className={`w-full text-left px-4 py-3 text-sm font-montserrat transition-colors hover:bg-turquesa10 hover:text-principal flex items-center justify-between
                ${
                  selectedLang.code === lang.code
                    ? "text-principal font-bold bg-gray-50"
                    : "text-gray-600"
                }
              `}
            >
              <span>{lang.name}</span>
              {selectedLang.code === lang.code && (
                <span className="w-1.5 h-1.5 rounded-full bg-principal"></span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
