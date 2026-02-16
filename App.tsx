
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Clubs from './pages/Clubs';
import AIFitting from './pages/AIFitting';
import Configurator from './pages/Configurator';
import Fitters from './pages/Fitters';
import Technology from './pages/Technology';
import About from './pages/About';
// IframeView removed as it is no longer used

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="bg-brand-black min-h-screen text-white font-sans selection:bg-brand-mink selection:text-white">
        <Navbar />
        {/* NewsletterModal removed as requested */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clubs" element={<Clubs />} />
            <Route path="/engine" element={<AIFitting />} />
            <Route path="/configurator" element={<Configurator />} />
            <Route path="/fitters" element={<Fitters />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/about" element={<About />} />
            {/* Embedded routes removed due to X-Frame-Options restrictions on external sites */}
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
