import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import HeroSection from './pages/hero';
import PastEventsPage from './pages/pastEvents';
import ContactSection from './pages/contact';
import Footer from './components/footer';
import UpcomingEvents from './pages/upcomingEvents'; // Importar la nueva página
import EventsDetails from './pages/eventsDetails';
import NotFoundPage from './pages/404';

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
                <PastEventsPage /> {/* Página de eventos pasados */}
                <ContactSection /> {/* Sección de contacto */}
              </>
            }
          />

          {/* Ruta para la página de detalles del torneo */}
        <Route path="/event-details/:id" element={<EventsDetails />} />
        <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <Footer /> {/* Footer al final */}
      </div>
  );
}

export default App;