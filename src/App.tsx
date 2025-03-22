import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import HeroSection from './pages/sections/hero';
import PastEventsPage from './pages/sections/pastEvents';
import ContactSection from './pages/sections/contact';
import Footer from './components/footer';
import UpcomingEvents from './pages/sections/upcomingEvents'; 
import EventsDetails from './pages/eventsDetails';
import NotFoundPage from './pages/404';
import TravelSection from './pages/sections/travels';
import Gallery from './pages/gallery';
import EventGallery from './pages/eventGallery';
import TravelsDetails from './pages/travelsGallery';
import AboutUsSection from './pages/sections/aboutUs';

function App() {
  return (
      <div className="bg-turquesa10 text-white">
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <AboutUsSection />
                <UpcomingEvents />
                <TravelSection />
                <PastEventsPage /> 
                <ContactSection /> 
              </>
            }
          />
        <Route path="/event-details/:id" element={<EventsDetails />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path="/gallery/:id" element={<EventGallery />} />
        <Route path="/travel/:id" element={<TravelsDetails />} />
        <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <Footer />
      </div>
  );
}

export default App;