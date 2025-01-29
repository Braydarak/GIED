export default function NotFoundPage() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-turquesa10 text-principal font-montserrat overflow-hidden">
        <h1 className="text-8xl font-bold text-turquesa80">404</h1>
        <p className="text-2xl mt-4 font-panton text-turquesa65">Página no encontrada</p>
        <p className="mt-2 text-lg text-turquesa50">
          Lo sentimos, la página que buscas no existe.
        </p>
        <a
          href="/"
          className="mt-6 px-6 py-3 bg-principal text-white rounded-lg shadow-lg hover:bg-turquesa80 transition font-montserrat"
        >
          Volver al inicio
        </a>
      </div>
    );
  }