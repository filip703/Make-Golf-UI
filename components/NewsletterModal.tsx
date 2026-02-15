
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import Button from './Button';

const NewsletterModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal after 8 seconds
    const timer = setTimeout(() => {
      const hasSeenModal = localStorage.getItem('hasSeenModal');
      if (!hasSeenModal) {
        setIsOpen(true);
      }
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('hasSeenModal', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-brand-black/80 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg z-[101] p-6"
          >
            <div className="bg-[#111] border border-brand-mink/30 shadow-[0_0_100px_rgba(255,34,76,0.15)] relative overflow-hidden">
                {/* Close Button */}
                <button onClick={handleClose} className="absolute top-4 right-4 text-brand-polar/50 hover:text-white transition-colors z-20">
                    <X className="w-5 h-5" />
                </button>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-1 h-full bg-brand-mink"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-mink/5 rounded-full blur-3xl"></div>

                <div className="p-8 relative z-10">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <span className="w-2 h-2 bg-brand-mink rounded-full animate-pulse"></span>
                        <span className="text-[10px] font-mono text-brand-mink uppercase tracking-widest">Early Access</span>
                    </div>
                    
                    <h3 className="text-3xl font-display text-white mb-2">Join The Waitlist</h3>
                    <p className="text-brand-polar/60 font-mono text-xs leading-relaxed mb-6">
                        We are currently limiting access to The Engine to ensure manufacturing quality. 
                        Sign up to get notified when new slots open.
                    </p>

                    <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleClose(); }}>
                        <div>
                            <input 
                                type="email" 
                                placeholder="ENTER YOUR EMAIL" 
                                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm font-mono text-white focus:outline-none focus:border-brand-mink transition-colors placeholder:text-brand-polar/20"
                                autoFocus
                            />
                        </div>
                        <Button variant="primary" size="md" className="w-full justify-between group">
                            Request Access <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </form>

                    <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center">
                        <span className="text-[9px] font-mono text-brand-polar/30 uppercase">Current Wait Time: ~3 Weeks</span>
                        <span className="text-[9px] font-mono text-brand-polar/30 uppercase">Stockholm, SE</span>
                    </div>
                </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default NewsletterModal;
