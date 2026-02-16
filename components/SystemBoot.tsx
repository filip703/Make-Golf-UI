
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SystemBootProps {
  onComplete: () => void;
}

const SystemBoot: React.FC<SystemBootProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const STEPS = [
    "INITIALIZING KERNEL...",
    "LOADING BIOMECHANICS ENGINE...",
    "ESTABLISHING SECURE CONNECTION...",
    "CALIBRATING SENSORS...",
    "SYSTEM READY."
  ];

  useEffect(() => {
    // Check session storage to only run once
    const hasBooted = sessionStorage.getItem('hasBooted_v1');
    if (hasBooted) {
      onComplete();
      return;
    }

    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 5;
      });
    }, 100);

    // Text step animation
    const stepInterval = setInterval(() => {
      setStep(prev => {
        if (prev >= STEPS.length - 1) {
          clearInterval(stepInterval);
          setTimeout(() => {
             sessionStorage.setItem('hasBooted_v1', 'true');
             onComplete();
          }, 800);
          return prev;
        }
        return prev + 1;
      });
    }, 600);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
    };
  }, [onComplete]);

  // If already booted (detected in useEffect), render nothing immediately to avoid flash
  if (sessionStorage.getItem('hasBooted_v1')) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#000000] flex flex-col items-center justify-center text-brand-mink font-mono"
      exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="w-64 md:w-80">
        {/* Logo or Symbol */}
        <div className="flex justify-between items-end mb-2 text-[10px] uppercase tracking-widest text-brand-polar/40">
           <span>Make_OS v2.0</span>
           <span>{Math.min(100, Math.floor(progress))}%</span>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-8">
            <motion.div 
               className="h-full bg-brand-mink"
               style={{ width: `${progress}%` }}
            />
        </div>

        {/* Text Steps */}
        <div className="h-8 flex items-center justify-center">
           <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="text-xs md:text-sm tracking-wider"
              >
                 {STEPS[step]}
              </motion.div>
           </AnimatePresence>
        </div>
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none"></div>
    </motion.div>
  );
};

export default SystemBoot;
