import { useState, useEffect } from 'react';
import { AppRouter } from './router';
import Navbar from './components/NavBar';
import MobileNavBar from './components/MobileNavBar';
import './App.css';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isMobile ? <MobileNavBar /> : <Navbar />}
      <AppRouter />
    </>
  );
}

export default App;
