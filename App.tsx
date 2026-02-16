
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
import Journal from './pages/Journal';
import ArticlePost from './pages/ArticlePost';
import NotFound from './pages/NotFound';
import CustomCursor from './components/CustomCursor';
import NewsletterModal from './components/NewsletterModal';

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
      {/* Global UI Elements */}
      <CustomCursor />
      <NewsletterModal />
      
      <div className="bg-brand-black min-h-screen text-white font-sans selection:bg-brand-mink selection:text-white cursor-none md:cursor-auto"> 
        {/* Note: 'cursor-none' class on container hides default cursor so custom one shines on desktop */}
        
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clubs" element={<Clubs />} />
            <Route path="/engine" element={<AIFitting />} />
            <Route path="/configurator" element={<Configurator />} />
            <Route path="/fitters" element={<Fitters />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/about" element={<About />} />
            
            {/* Journal Routes */}
            <Route path="/journal" element={<Journal />} />
            <Route path="/journal/:slug" element={<ArticlePost />} />
            
            {/* Catch-all 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
