
import React, { useState } from 'react';
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
import Journal from './pages/Journal';
import ArticlePost from './pages/ArticlePost';
import NotFound from './pages/NotFound';
import CustomCursor from './components/CustomCursor';
import NewsletterModal from './components/NewsletterModal';
import SystemBoot from './components/SystemBoot';
import ScrollTelemetry from './components/ScrollTelemetry';
import PageTransition from './components/PageTransition';
import { AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Extracted routes component to access useLocation hook inside HashRouter context
const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/clubs" element={<PageTransition><Clubs /></PageTransition>} />
        <Route path="/engine" element={<PageTransition><AIFitting /></PageTransition>} />
        <Route path="/configurator" element={<PageTransition><Configurator /></PageTransition>} />
        <Route path="/fitters" element={<PageTransition><Fitters /></PageTransition>} />
        <Route path="/technology" element={<PageTransition><Technology /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        
        {/* Journal Routes */}
        <Route path="/journal" element={<PageTransition><Journal /></PageTransition>} />
        <Route path="/journal/:slug" element={<PageTransition><ArticlePost /></PageTransition>} />
        
        {/* Catch-all 404 */}
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  const [isBooted, setIsBooted] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!isBooted && <SystemBoot onComplete={() => setIsBooted(true)} />}
      </AnimatePresence>

      <div className={`transition-opacity duration-1000 ${isBooted ? 'opacity-100' : 'opacity-0'}`}>
        <HashRouter>
          <ScrollToTop />
          {/* Global UI Elements */}
          <CustomCursor />
          <NewsletterModal />
          <ScrollTelemetry />
          
          <div className="bg-brand-black min-h-screen text-white font-sans selection:bg-brand-mink selection:text-white cursor-none md:cursor-auto"> 
            
            <Navbar />
            <main className="min-h-screen">
               <AnimatedRoutes />
            </main>
            <Footer />
          </div>
        </HashRouter>
      </div>
    </>
  );
};

export default App;
