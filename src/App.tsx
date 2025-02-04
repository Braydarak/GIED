import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import HeroSection from './pages/sections/hero';
import PastEventsPage from './pages/sections/pastEvents';
import ContactSection from './pages/sections/contact';
import Footer from './components/footer';
import UpcomingEvents from './pages/sections/upcomingEvents'; // Importar la nueva página
import EventsDetails from './pages/eventsDetails';
import NotFoundPage from './pages/404';
import TravelSection from './pages/sections/travels';
import Gallery from './pages/gallery';

function App() {
  return (
      <div className="bg-turquesa10 text-white">
        <Header /> {/* El header se mantiene */}

        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection /> {/* Hero Section */}
                <UpcomingEvents /> {/* Sección de próximos eventos */}
                <TravelSection />
                <PastEventsPage /> {/* Página de eventos pasados */}
                <ContactSection /> {/* Sección de contacto */}
              </>
            }
          />

          {/* Ruta para la página de detalles del torneo */}
        <Route path="/event-details/:id" element={<EventsDetails />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <Footer /> {/* Footer al final */}
      </div>
  );
}

export default App;