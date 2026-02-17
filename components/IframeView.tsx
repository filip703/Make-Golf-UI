
import React, { useState } from 'react';
import { Loader2, ExternalLink } from 'lucide-react';
import Button from './Button';

interface IframeViewProps {
  src: string;
  title: string;
}

const IframeView: React.FC<IframeViewProps> = ({ src, title }) => {
  const [isLoading, setIsLoading] = useState(true);
  const MAKER_URL = "https://maker.make.golf/configurator?configurationState=a_7e175a18-1026-47cf-b224-16b8a8b0fa90";

  return (
    <div className="min-h-screen bg-brand-black pt-20 flex flex-col relative overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-brand-black z-0">
          <div className="flex flex-col items-center gap-4">
             <Loader2 className="w-8 h-8 text-brand-mink animate-spin" />
             <p className="text-brand-polar/50 font-mono text-xs uppercase tracking-widest">ESTABLISHING UPLINK...</p>
          </div>
        </div>
      )}
      
      {/* Playground Mode Indicator */}
      <div className="absolute top-28 left-6 z-20 pointer-events-none hidden md:block">
          <div className="bg-black/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg text-white pointer-events-auto shadow-xl">
             <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-brand-mink animate-pulse"></div>
                <span className="font-mono text-xs uppercase tracking-widest text-brand-mink">Playground Mode</span>
             </div>
             <p className="text-[10px] text-brand-polar/60 max-w-[200px] leading-relaxed">
                This is an interactive preview. Adjustments made here are for exploration only.
             </p>
          </div>
      </div>

      {/* Footer CTA Overlay */}
      <div className="absolute bottom-8 left-0 right-0 z-20 pointer-events-none flex justify-center px-4">
          <div className="bg-[#1C1C1E]/95 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.5)] flex flex-col sm:flex-row items-center gap-6 pointer-events-auto max-w-xl">
              <div className="text-center sm:text-left">
                  <h4 className="text-white font-display text-sm font-bold">Ready to build for real?</h4>
                  <p className="text-brand-polar/50 text-xs">Launch the full Maker Studio to save your design and export manufacturing specs.</p>
              </div>
              <a href={MAKER_URL} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" size="sm" className="whitespace-nowrap shadow-lg">
                      Open Maker Studio <ExternalLink className="w-3 h-3 ml-2" />
                  </Button>
              </a>
          </div>
      </div>

      <iframe
        src={src}
        title={title}
        className="w-full flex-grow border-none relative z-10"
        style={{ height: 'calc(100vh - 80px)' }} // Full height minus navbar
        onLoad={() => setIsLoading(false)}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; camera; microphone"
        allowFullScreen
      />
    </div>
  );
};

export default IframeView;
