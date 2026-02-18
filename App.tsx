
import React, { useState, Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import NewsletterModal from './components/NewsletterModal';
import SystemBoot from './components/SystemBoot';
import ScrollTelemetry from './components/ScrollTelemetry';
import PageTransition from './components/PageTransition';
import AppLayout from './components/AppLayout';
import { AnimatePresence } from 'framer-motion';
import { Loader2 } from 'lucide-react';

// Lazy Load Pages for Performance
const Home = lazy(() => import('./pages/Home'));
const Clubs = lazy(() => import('./pages/Clubs'));
const AIFitting = lazy(() => import('./pages/AIFitting'));
const Configurator = lazy(() => import('./pages/Configurator'));
const Fitters = lazy(() => import('./pages/Fitters'));
const Technology = lazy(() => import('./pages/Technology'));
const About = lazy(() => import('./pages/About'));
const Journal = lazy(() => import('./pages/Journal'));
const ArticlePost = lazy(() => import('./pages/ArticlePost'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Loading Fallback Component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-brand-black">
    <div className="flex flex-col items-center gap-4">
      <Loader2 className="w-8 h-8 text-brand-mink animate-spin" />
      <span className="text-[10px] font-mono uppercase tracking-widest text-brand-polar/40">Loading Asset...</span>
    </div>
  </div>
);

// Extracted routes component to access useLocation hook inside HashRouter context
const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  
  // Check if we are in the "App" (SaaS) section to render different layout
  const isAppRoute = location.pathname.startsWith('/dashboard') || location.pathname.startsWith('/app');

  if (isAppRoute) {
    return (
      <Suspense fallback={<PageLoader />}>
        <AppLayout>
          <Routes location={location} key={location.pathname}>
            <Route path="/dashboard" element={<PageTransition><Dashboard /></PageTransition>} />
            {/* Add more app routes here later */}
          </Routes>
        </AppLayout>
      </Suspense>
    );
  }
  
  return (
    <div className="bg-brand-black min-h-screen text-white font-sans selection:bg-brand-mink selection:text-white cursor-none md:cursor-auto"> 
      <Navbar />
      <main className="min-h-screen">
        <Suspense fallback={<PageLoader />}>
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
        </Suspense>
      </main>
      <Footer />
    </div>
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
          
          <AnimatedRoutes />
          
        </HashRouter>
      </div>
    </>
  );
};

export default App;
