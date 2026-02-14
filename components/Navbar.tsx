
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, ExternalLink } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import Button from './Button';
import Logo from './Logo';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Pages that always use a light header/theme
  const isAlwaysLightHeader = ['/clubs', '/fitters'].includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const shouldUseColorTheme = scrolled || isAlwaysLightHeader;

  // External Dashboard URL
  const DASHBOARD_URL = "https://frontend-seven-iota-56.vercel.app/dashboard";

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-brand-black/80 backdrop-blur-xl border-b border-white/5 py-4 shadow-lg' 
          : 'bg-transparent border-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="z-50 relative group block shrink-0">
          <Logo color={shouldUseColorTheme ? "color" : "white"} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`text-[10px] font-mono uppercase tracking-[0.2em] transition-all hover:-translate-y-0.5 whitespace-nowrap ${
                location.pathname === link.path 
                  ? 'text-brand-mink font-bold' 
                  : (shouldUseColorTheme ? 'text-white hover:text-brand-mink' : 'text-brand-polar/80 hover:text-white')
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-6 shrink-0">
           {/* Direct Login Link */}
           <a 
            href={DASHBOARD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-[10px] font-mono transition-colors uppercase tracking-wider flex items-center gap-2 ${
              shouldUseColorTheme ? 'text-white/60 hover:text-white' : 'text-brand-polar/60 hover:text-brand-polar'
            }`}
           >
            Partner Login <ExternalLink className="w-3 h-3" />
          </a>
          <Link to="/configurator">
            <Button variant="primary" size="sm" className="rounded-none px-6">
              Configure
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden z-50 relative transition-colors ${
            isOpen ? 'text-brand-polar' : (shouldUseColorTheme ? 'text-white' : 'text-brand-polar')
          }`}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "tween", duration: 0.4, ease: "circOut" }}
              className="fixed inset-0 bg-brand-black flex flex-col justify-center px-8 z-40 lg:hidden"
            >
              <div className="flex flex-col space-y-6">
                {NAV_LINKS.map((link) => (
                  <Link 
                    key={link.path} 
                    to={link.path}
                    className="text-3xl md:text-4xl font-display font-bold text-brand-polar hover:text-brand-mink transition-colors flex items-center justify-between group"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-mink" />
                  </Link>
                ))}
                <div className="h-px bg-white/10 my-8" />
                
                <a href={DASHBOARD_URL} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button variant="outline" size="lg" className="w-full border-white/20 text-white mb-4">
                    Fitter Login
                  </Button>
                </a>

                <Link to="/configurator" className="w-full">
                  <Button variant="primary" size="lg" className="w-full">
                    Build Yours
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
