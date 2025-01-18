const Footer = () => {
  return (
    <footer className="bg-turquesa10 text-black py-4">
      <div className="container mx-auto ">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Texto de diseño */}
          <span className="text-xs md:text-sm font-montserrat font-semibold mb-2 md:mb-0">
            Web designed by Brian Darakdjian
          </span>

          {/* Derechos reservados */}
          <span className="text-xs md:text-sm font-montserrat font-semibold">
            © 2025 GIED - Todos los derechos reservados
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;