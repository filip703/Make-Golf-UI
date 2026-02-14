
import React from 'react';
import { ExternalLink, Maximize } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import Button from '../components/Button';

const AIFitting: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black pt-20 text-brand-polar">
      
      {/* Hero Section */}
      <section className="relative py-20 border-b border-white/5 overflow-hidden">
         <div className="container mx-auto px-6 relative z-10 text-center">
              <FadeIn>
                <div className="inline-flex items-center gap-3 mb-6 border border-brand-mink/30 bg-brand-mink/5 px-4 py-1 rounded-full">
                  <div className="w-2 h-2 bg-brand-mink rounded-full animate-pulse"></div>
                  <span className="text-brand-mink font-mono text-xs uppercase tracking-widest">Live Engine // v2.4</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-display font-medium text-white mb-6">
                  The Fitting Engine
                </h1>
                <p className="text-xl text-brand-polar/60 font-light font-sans max-w-2xl mx-auto leading-relaxed mb-10">
                  Interact with our biomechanical analysis tool below. In a full session, we ingest your CSV data to auto-populate these fields.
                </p>
              </FadeIn>
         </div>
      </section>

      {/* IFRAME EMBED SECTION */}
      <section className="py-12 bg-[#050505]">
        <div className="container mx-auto px-6">
            <FadeIn delay={0.2} fullWidth>
                <div className="relative w-full h-[800px] border border-white/10 rounded-sm bg-black overflow-hidden shadow-2xl">
                    
                    {/* Fake Browser Header */}
                    <div className="w-full h-10 bg-[#151515] border-b border-white/5 flex items-center justify-between px-4">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                        </div>
                        <div className="text-[10px] font-mono text-brand-polar/30 flex items-center gap-2">
                             <span className="hidden md:inline">https://engine.make.golf/fitting</span>
                        </div>
                        <a href="https://frontend-seven-iota-56.vercel.app/fitting" target="_blank" rel="noopener noreferrer" className="text-brand-polar/40 hover:text-white transition-colors">
                            <Maximize className="w-4 h-4" />
                        </a>
                    </div>

                    {/* The Iframe */}
                    <iframe 
                        src="https://frontend-seven-iota-56.vercel.app/fitting" 
                        className="w-full h-full bg-black"
                        title="Make Golf Fitting Engine"
                        style={{ border: 'none' }}
                    />
                </div>
            </FadeIn>
            
            <div className="mt-8 text-center">
                 <p className="text-xs font-mono text-brand-polar/30 uppercase mb-4">Want the full dashboard experience?</p>
                 <a href="https://frontend-seven-iota-56.vercel.app/dashboard" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="text-xs">Open Partner Dashboard <ExternalLink className="w-3 h-3 ml-2" /></Button>
                 </a>
            </div>
        </div>
      </section>

    </div>
  );
};

export default AIFitting;
