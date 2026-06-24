import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Escuchar from './components/Escuchar/Escuchar';
import Shows from './components/Shows/Shows';
import Acerca from './components/Acerca/Acerca';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';
import AccessControl from './components/AccessControl/AccessControl';
import DisclaimerModal from './components/DisclaimerModal/DisclaimerModal';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  useEffect(() => {
    // Check if the user is already authenticated in this session
    const authStatus = sessionStorage.getItem('angelita_auth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleAccessGranted = () => {
    setIsAuthenticated(true);
    sessionStorage.setItem('angelita_auth', 'true');

    // Show disclaimer once on the user's browser
    const disclaimerSeen = localStorage.getItem('angelita_disclaimer_seen');
    if (disclaimerSeen !== 'true') {
      setShowDisclaimer(true);
    }
  };

  const handleDisclaimerClose = () => {
    setShowDisclaimer(false);
    localStorage.setItem('angelita_disclaimer_seen', 'true');
  };

  if (!isAuthenticated) {
    return <AccessControl onAccessGranted={handleAccessGranted} />;
  }

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Escuchar />
        <Shows />
        <Acerca />
        <Contacto />
      </main>
      <Footer />

      {showDisclaimer && (
        <DisclaimerModal onClose={handleDisclaimerClose} />
      )}
    </div>
  );
}

export default App
