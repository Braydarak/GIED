import React from 'react';
import Header from './components/header';
import HeroSection from './pages/hero';
import PastEventsPage from './pages/pastEvents';
import ContactSection from './pages/contact';
import Footer from './components/footer';


function App() {
  return (
    <div className="bg-turquesa10 text-white">
      <Header /> {/* El header se mantiene */}
      
      <HeroSection /> {/* Hero Section */}
      
      {/* Página de Eventos Pasados */}
      <PastEventsPage /> {/* Renderiza directamente la página de eventos pasados */}
      
      {/* Sección de Contacto */}
      <ContactSection /> {/* Renderizamos la sección de contacto */}
      
      {/* Footer */}
      <Footer /> {/* Footer al final */}
    </div>
  );
}

export default App;