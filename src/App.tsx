import Header from './components/header';
import HeroSection from './pages/hero';
import PastEventsPage from './pages/pastEvents';
import ContactSection from './pages/contact';
import Footer from './components/footer';
import UpcomingEvents from './pages/upcomingEvents';


function App() {
  return (
    <div className="bg-turquesa10 text-white">
      <Header /> {/* El header se mantiene */}
      
      <HeroSection /> {/* Hero Section */}
      
      {/* Página de Eventos Pasados */}
      <PastEventsPage /> {/* Renderiza directamente la página de eventos pasados */}

      <UpcomingEvents /> {/* Renderiza la sección de próximos eventos */}
      
      {/* Sección de Contacto */}
      <ContactSection /> {/* Renderizamos la sección de contacto */}
      
      {/* Footer */}
      <Footer /> {/* Footer al final */}
    </div>
  );
}

export default App;