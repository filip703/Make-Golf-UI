import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Upload, Cpu, FileOutput, ArrowRight, Database, Share2 } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import Button from '../components/Button';

const AIFitting: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black pt-20 text-brand-polar">
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center border-b border-white/5 overflow-hidden">
         {/* Background Tech Video/Image */}
         <div className="absolute inset-0 z-0">
            <img 
               src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
               className="w-full h-full object-cover opacity-20 grayscale"
               alt="Cybernetics"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/90 to-transparent"></div>
            <div className="absolute inset-0 bg-grid opacity-10"></div>
         </div>

         <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <FadeIn>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 bg-brand-mink rounded-full animate-pulse"></div>
                  <span className="text-brand-mink font-mono text-xs uppercase tracking-widest">Live Platform // v2.4</span>
                </div>
                <h1 className="text-5xl md:text-8xl font-display font-medium text-white mb-8 leading-[0.9]">
                  The Engine of<br/>
                  <span className="text-brand-polar/30">Optimization.</span>
                </h1>
                <p className="text-xl text-brand-polar/60 font-light font-sans max-w-xl leading-relaxed mb-10">
                  Our browser-based AI Fitting Engine transforms raw launch monitor data into manufacturing-ready CAD files in seconds. No installation required.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <a href="https://frontend-seven-iota-56.vercel.app/dashboard" target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" size="lg" className="group shadow-[0_0_40px_rgba(255,34,76,0.2)]">
                      Launch Dashboard <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"/>
                    </Button>
                  </a>
                  <Button variant="outline" size="lg" className="border-white/10 hover:border-white text-white">
                    View Demo Data
                  </Button>
                </div>
              </FadeIn>
            </div>
         </div>
      </section>

      {/* Interface Preview / "How it works" */}
      <section className="py-24 bg-[#0F0F0F] relative">
         <div className="container mx-auto px-6">
            <FadeIn>
               <div className="mb-20 text-center">
                  <h2 className="text-3xl font-display text-white mb-4">Workflow Architecture</h2>
                  <p className="text-brand-polar/50 font-mono text-xs uppercase tracking-widest">From CSV to STL in 3 steps</p>
               </div>
            </FadeIn>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
               {/* Connecting Lines (Desktop) */}
               <div className="hidden lg:block absolute top-12 left-[20%] right-[20%] h-px bg-gradient-to-r from-brand-mink/0 via-brand-mink/30 to-brand-mink/0 border-t border-dashed border-white/10 z-0"></div>

               {/* Step 1 */}
               <div className="relative z-10 bg-brand-surface border border-white/5 p-8 group hover:border-brand-mink/30 transition-colors duration-500">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-8 text-brand-mink group-hover:scale-110 transition-transform duration-500 border border-white/5 group-hover:bg-brand-mink group-hover:text-white">
                     <Upload className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-display text-white mb-4">1. Ingest Data</h3>
                  <p className="text-brand-polar/50 text-sm font-mono leading-relaxed mb-6">
                     Upload raw CSV exports directly from TrackMan, Foresight, or FlightScope. Our parser normalizes the data instantly.
                  </p>
                  <div className="bg-black/50 p-4 rounded text-[10px] font-mono text-brand-polar/40 border border-white/5">
                     <div className="flex justify-between mb-1"><span>Club Speed</span><span className="text-brand-mink">98.2 mph</span></div>
                     <div className="flex justify-between mb-1"><span>Attack Angle</span><span className="text-brand-mink">-4.1 deg</span></div>
                     <div className="flex justify-between"><span>Closure Rate</span><span className="text-brand-mink">2400 dps</span></div>
                  </div>
               </div>

               {/* Step 2 */}
               <div className="relative z-10 bg-brand-surface border border-white/5 p-8 group hover:border-brand-mink/30 transition-colors duration-500">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-8 text-brand-mink group-hover:scale-110 transition-transform duration-500 border border-white/5 group-hover:bg-brand-mink group-hover:text-white">
                     <Cpu className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-display text-white mb-4">2. Generative Solve</h3>
                  <p className="text-brand-polar/50 text-sm font-mono leading-relaxed mb-6">
                     The AI analyzes dispersion patterns and simulates 10,000+ geometry variations to find the optimal MOI and CG location.
                  </p>
                  <div className="relative h-24 bg-black/50 rounded border border-white/5 overflow-hidden flex items-center justify-center">
                     <div className="absolute inset-0 bg-[url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzM0MzM0MzM0MzM0MzM0MzM0MzM0MzM0MzM0MzM0MzM0MzM0MzM0MyZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/3o7TKs4iG3vU8p9g5y/giphy.gif')] opacity-10 bg-cover mix-blend-screen"></div>
                     <span className="text-xs font-mono text-brand-mink animate-pulse">PROCESSING...</span>
                  </div>
               </div>

               {/* Step 3 */}
               <div className="relative z-10 bg-brand-surface border border-white/5 p-8 group hover:border-brand-mink/30 transition-colors duration-500">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-8 text-brand-mink group-hover:scale-110 transition-transform duration-500 border border-white/5 group-hover:bg-brand-mink group-hover:text-white">
                     <FileOutput className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-display text-white mb-4">3. Production File</h3>
                  <p className="text-brand-polar/50 text-sm font-mono leading-relaxed mb-6">
                     Receive a verified manufacturing file linked to the player's unique ID. Send directly to our Stockholm print farm.
                  </p>
                  <button className="w-full py-3 bg-brand-mink/10 border border-brand-mink/30 text-brand-mink text-xs font-mono hover:bg-brand-mink hover:text-white transition-all uppercase">
                     Download .STL
                  </button>
               </div>
            </div>
         </div>
      </section>

      {/* Deep Dive / Features */}
      <section className="py-24 border-t border-white/5">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
               <FadeIn>
                  <div className="relative rounded border border-white/10 overflow-hidden shadow-2xl group">
                     <div className="absolute top-0 w-full h-8 bg-[#1a1a1a] border-b border-white/5 flex items-center px-4 gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                     </div>
                     <img 
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                        className="w-full object-cover opacity-60 group-hover:opacity-80 transition-opacity grayscale group-hover:grayscale-0 duration-700"
                        alt="Dashboard Interface"
                     />
                     {/* Overlay UI Mockup */}
                     <div className="absolute inset-0 pt-8 flex items-center justify-center pointer-events-none">
                        <div className="text-center">
                           <div className="inline-block px-4 py-2 bg-brand-black/80 backdrop-blur border border-brand-mink/50 text-brand-mink font-mono text-xs mb-2">
                              DISPERSION REDUCED 42%
                           </div>
                        </div>
                     </div>
                  </div>
               </FadeIn>
               <FadeIn direction="left">
                  <h2 className="text-4xl font-display text-white mb-8">Client Management <br/> Built In.</h2>
                  <div className="space-y-8">
                     <div className="flex gap-4">
                        <Database className="w-6 h-6 text-brand-mink shrink-0 mt-1" />
                        <div>
                           <h4 className="text-white font-display text-lg mb-2">Historical DNA</h4>
                           <p className="text-brand-polar/50 text-sm font-mono leading-relaxed">
                              Every swing, every configuration, and every club is stored in the player's permanent digital locker.
                           </p>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <Share2 className="w-6 h-6 text-brand-mink shrink-0 mt-1" />
                        <div>
                           <h4 className="text-white font-display text-lg mb-2">Seamless Re-ordering</h4>
                           <p className="text-brand-polar/50 text-sm font-mono leading-relaxed">
                              As the player's swing speed increases, simply update the input data and order a new head optimized for their new biomechanics.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="mt-12">
                     <a href="https://frontend-seven-iota-56.vercel.app/dashboard" target="_blank" rel="noopener noreferrer">
                        <Button variant="secondary" className="bg-white text-black hover:bg-gray-200">
                           Access Client Database
                        </Button>
                     </a>
                  </div>
               </FadeIn>
            </div>
         </div>
      </section>

    </div>
  );
};

export default AIFitting;