
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail } from 'lucide-react';
import Button from './Button';

const NewsletterModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal after 5 seconds if not seen before
    const timer = setTimeout(() => {
      const hasSeenModal = localStorage.getItem('hasSeenMakeModal_v3');
      if (!hasSeenModal) {
        setIsOpen(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('hasSeenMakeModal_v3', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop with blur */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-md bg-[#181818] border border-white/10 shadow-2xl rounded-2xl overflow-hidden"
          >
            {/* Close Button */}
            <button 
                onClick={handleClose} 
                className="absolute top-4 right-4 p-2 text-brand-polar/40 hover:text-white hover:bg-white/5 rounded-full transition-all z-20"
            >
                <X className="w-5 h-5" />
            </button>

            <div className="p-8 md:p-10 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 text-brand-mink ring-1 ring-white/10">
                    <Mail className="w-5 h-5" />
                </div>
                
                <h3 className="text-2xl font-display font-medium text-white mb-3">
                    The Inner Circle
                </h3>
                
                <p className="text-brand-polar/60 text-sm font-sans leading-relaxed mb-8 max-w-xs">
                    We release production slots in batches. Join the list to get priority access when the next manufacturing window opens.
                </p>

                <form className="w-full space-y-3" onSubmit={(e) => { e.preventDefault(); handleClose(); }}>
                    <input 
                        type="email" 
                        placeholder="your@email.com" 
                        className="w-full bg-[#111] border border-white/10 px-4 py-3 text-sm font-mono text-white focus:outline-none focus:border-brand-mink/50 transition-colors placeholder:text-brand-polar/20 rounded-md text-center"
                    />
                    <Button variant="primary" size="md" className="w-full justify-center rounded-md">
                        Join Waitlist
                    </Button>
                </form>

                <button 
                    onClick={handleClose}
                    className="mt-6 text-[10px] text-brand-polar/30 hover:text-white transition-colors underline decoration-brand-polar/30 underline-offset-4"
                >
                    No thanks, I'll browse first
                </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default NewsletterModal;
