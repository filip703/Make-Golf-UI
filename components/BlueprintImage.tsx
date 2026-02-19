
import React from 'react';
import { motion } from 'framer-motion';
import { Crosshair, Maximize, Target } from 'lucide-react';

interface BlueprintImageProps {
  src: string;
  alt: string;
  className?: string;
  secondarySrc?: string;
}

const BlueprintImage: React.FC<BlueprintImageProps> = ({ src, alt, className = "", secondarySrc }) => {
  return (
    <div className={`relative group overflow-hidden ${className}`}>
      {/* Base Image */}
      <img 
        src={src} 
        alt={alt}
        loading="lazy"
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out 
          ${secondarySrc ? 'group-hover:opacity-0' : 'group-hover:opacity-40 group-hover:grayscale group-hover:scale-105'}
        `}
      />

      {/* Secondary Image (if provided) */}
      {secondarySrc && (
        <img 
            src={secondarySrc}
            alt={`${alt} view 2`}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-60 group-hover:grayscale transition-all duration-700 ease-out group-hover:scale-105"
        />
      )}

      {/* Blueprint Overlay - Only visible on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10">
        
        {/* Grid Background */}
        <div className="absolute inset-0 bg-grid opacity-20 bg-[size:20px_20px]"></div>
        
        {/* Center Crosshair */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-px bg-brand-mink/30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-64 bg-brand-mink/30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
             <Target className="w-8 h-8 text-brand-mink animate-[spin_10s_linear_infinite] opacity-50" strokeWidth={1} />
        </div>

        {/* Corner Markers */}
        <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-brand-mink/60"></div>
        <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-brand-mink/60"></div>
        <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-brand-mink/60"></div>
        <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-brand-mink/60"></div>

        {/* Data Readouts */}
        <div className="absolute top-6 right-6 text-[9px] font-mono text-brand-mink/80 text-right">
           <div className="mb-1">SCANNING_GEOMETRY...</div>
           <div className="flex flex-col gap-0.5 opacity-70">
              <span>TOLERANCE: &lt;0.01mm</span>
              <span>MATERIAL: 17-4PH SS</span>
              <span>DENSITY: 99.8%</span>
           </div>
        </div>

        <div className="absolute bottom-6 left-6 text-[9px] font-mono text-white/60">
           <div className="flex items-center gap-2 mb-1">
              <div className="w-1.5 h-1.5 bg-brand-mink animate-pulse rounded-full"></div>
              <span>LIVE RENDER</span>
           </div>
           <div>COORD: {Math.random().toFixed(4)} , {Math.random().toFixed(4)}</div>
        </div>
        
        {/* Center Label */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-8 bg-black/60 backdrop-blur px-2 py-1 rounded border border-brand-mink/30">
            <span className="text-[10px] font-mono text-brand-mink uppercase tracking-widest">
                Schematic View
            </span>
        </div>

      </div>
    </div>
  );
};

export default BlueprintImage;
