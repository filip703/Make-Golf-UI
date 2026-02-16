
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollTelemetry: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setPercentage(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 h-[40vh] z-40 hidden lg:flex flex-col items-center gap-4 mix-blend-difference pointer-events-none">
       {/* Top Marker */}
       <div className="text-[9px] font-mono text-white/40 tracking-widest writing-vertical-rl">
          START
       </div>

       {/* The Line */}
       <div className="w-px h-full bg-white/10 relative">
          <motion.div 
             className="absolute top-0 left-0 w-full bg-brand-mink"
             style={{ height: "100%", scaleY, transformOrigin: "top" }}
          />
       </div>

       {/* The Dynamic Number */}
       <div className="text-[10px] font-mono text-brand-mink font-bold tracking-widest writing-vertical-rl tabular-nums">
          {percentage.toString().padStart(3, '0')}%
       </div>
       
       {/* Bottom Marker */}
       <div className="text-[9px] font-mono text-white/40 tracking-widest writing-vertical-rl">
          END
       </div>
    </div>
  );
};

export default ScrollTelemetry;
