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
import TravelsDetails from './pages/travelsDetails';
import AboutUsSection from './pages/sections/aboutUs';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
      <div className="bg-turquesa10 text-white">
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <div className="min-h-screen w-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory">
                <HeroSection />
                <AboutUsSection />
                <UpcomingEvents />
                <TravelSection />
                <PastEventsPage /> 
                <ContactSection /> 
              </div>
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