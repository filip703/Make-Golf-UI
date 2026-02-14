
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Zap, ArrowRight } from 'lucide-react';
import Button from './Button';

const BetaPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check session storage to prevent showing on every reload in the same session
    const hasSeen = sessionStorage.getItem('hasSeenBetaPopup');
    if (!hasSeen) {
        // Show after 3.5 seconds
        const timer = setTimeout(() => setIsOpen(true), 3500);
        return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('hasSeenBetaPopup', 'true');
  };

  return (
    <AnimatePresence>
        {isOpen && (
            <>
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleClose}
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                />
                
                {/* Modal Window */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-[#0a0a0a] border border-white/10 shadow-[0_0_80px_rgba(255,34,76,0.15)] z-[70]"
                >
                     {/* Decorative Top Border */}
                     <div className="h-1 w-full bg-brand-mink"></div>
                     
                     <div className="p-8 relative">
                         <button 
                            onClick={handleClose} 
                            className="absolute top-4 right-4 text-brand-polar/30 hover:text-white transition-colors"
                         >
                            <X className="w-5 h-5" />
                         </button>

                         <div className="flex items-center gap-3 mb-6">
                            <div className="bg-brand-mink/10 p-2 rounded-full border border-brand-mink/30 animate-pulse">
                                <Zap className="w-5 h-5 text-brand-mink" />
                            </div>
                            <span className="text-brand-mink font-mono text-[10px] uppercase tracking-widest">System Broadcast</span>
                         </div>

                         <h3 className="text-3xl font-display text-white mb-4">Beta Access Open</h3>
                         <p className="text-brand-polar/60 font-sans font-light mb-8 leading-relaxed text-sm">
                            We are currently accepting a limited intake of new users for the parametric fitting engine. Secure your spot in the manufacturing queue before the window closes.
                         </p>

                         <div className="flex flex-col gap-3">
                             <a href="https://make.golf/#sign-up" onClick={handleClose} className="w-full">
                                <Button variant="primary" className="w-full justify-between group">
                                    APPLY FOR BETA <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                             </a>
                             <button 
                                onClick={handleClose} 
                                className="text-[10px] font-mono text-brand-polar/30 hover:text-white uppercase tracking-wider text-center py-2 transition-colors"
                             >
                                Close Window
                             </button>
                         </div>
                     </div>
                </motion.div>
            </>
        )}
    </AnimatePresence>
  );
}

export default BetaPopup;
