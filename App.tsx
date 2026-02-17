
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
import IframeView from './components/IframeView';
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
        <Route path="/studio" element={<PageTransition><IframeView src="https://configurator.modelup3d.com/?projectId=oa1oRJb3&token=eyJhbGciOiJIUzI1NiJ9.eyJ2NW4iOjEsImlkIjoxMzQsInA3ZCI6Im9hMW9SSmIzIiwicDlzIjpbImM1ZSIsInJfYzE1YSJdfQ.p-s501nEeYwHvyH2JJUYuSlk5f9rJZ2HbQC58p8DIXc&configurationState=a_7e175a18-1026-47cf-b224-16b8a8b0fa90_eHS_0_aLA_35.4_eLA_62.2_aO_-1_aBL_79_aTH_57.9_eHtH_32_aTpLW_4.7_dGW_0.81_dGDe_0.275_dGDi_2.24_dGTOTw_10.66_dGTEC_0.163_aHHt_34.5_bTTpR_12.833_dGBC_0.146_bTSR_18.207_cSC_2_aTC_4.6_bTAAR_-1.8_bTAR_42.3_eHsBlO_3.9_cSTW_19.7_cSW_19.7_cSHW_14.8_aBkDH_0.401_cSB_5_eHsT_1.55_eHsBPO_8.1_eHsBo_4_eHsR_15_cSLER_1.5_dGFO_1.68_cSBER_3_eCN_0.45_fM_0_dGXtd_0_eHsIC_1.11_eHsOR_0.955_fGB_0_fCG_0_aBkDS_2.01_cTBER_1.5_gLR_-7_gLOfTD_7_gLS_0.44_fML_0_gLOfT_0.13_gSNr__gHNr_10.24_gMNr_0.32_fMNr_0_fIL_0_fMIZ_0_fLorR_0" title="Make Golf Studio" /></PageTransition>} />
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
