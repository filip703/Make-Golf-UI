
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Upload, Cpu, FileOutput, ArrowRight, Database, Share2, RefreshCw, Sliders, CheckCircle } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import Button from '../components/Button';

const AIFitting: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1C1C1E] via-[#121212] to-[#0A0A0A] pt-20 text-brand-polar">
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center border-b border-white/5 overflow-hidden">
         {/* Background Tech Video/Image */}
         <div className="absolute inset-0 z-0">
            <img 
               src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
               className="w-full h-full object-cover opacity-20 grayscale mix-blend-overlay"
               alt="Cybernetics"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/90 to-transparent"></div>
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
                  Our browser-based Engine transforms raw launch monitor data into manufacturing-ready CAD files in seconds. No installation required.
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

      {/* The Digital Loop (Updated Workflow) */}
      <section className="py-24 relative">
         <div className="absolute inset-0 bg-gradient-to-b from-[#151515] to-[#121212]"></div>
         <div className="container mx-auto px-6 relative z-10">
            <FadeIn>
               <div className="mb-20 text-center">
                  <h2 className="text-3xl font-display text-white mb-4">The Digital Loop</h2>
                  <p className="text-brand-polar/50 font-mono text-xs uppercase tracking-widest">Data &rarr; Physics &rarr; Manufacturing &rarr; Data</p>
               </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
               
               {/* Step 1: Data Confidence */}
               <div className="glass-panel p-6 group hover:border-brand-mink/30 transition-colors duration-500 flex flex-col h-full rounded-xl">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 text-brand-mink group-hover:scale-110 transition-transform duration-500 border border-white/5 group-hover:bg-brand-mink group-hover:text-white">
                     <Upload className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-display text-white mb-3">1. Scoring</h3>
                  <p className="text-brand-polar/50 text-xs font-mono leading-relaxed mb-6 flex-grow">
                     We ingest your launch monitor data and assign a <span className="text-white">Confidence Score (0-100)</span>. 
                     Low score? We request more inputs. High score? We unlock tighter tolerances.
                  </p>
                  
                  {/* Visual Confidence Meter */}
                  <div className="bg-black/40 p-4 rounded border border-white/5">
                      <div className="flex justify-between items-center mb-2">
                          <span className="text-[9px] font-mono text-brand-polar/60 uppercase">Data Confidence</span>
                          <span className="text-[10px] font-mono text-brand-mink font-bold">87/100</span>
                      </div>
                      <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-brand-mink w-[87%] shadow-[0_0_10px_#FF224C]"></div>
                      </div>
                      <div className="mt-2 text-[9px] font-mono text-green-500 flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" /> SUFFICIENT FOR MODELING
                      </div>
                  </div>
               </div>

               {/* Step 2: Generative Model */}
               <div className="glass-panel p-6 group hover:border-brand-mink/30 transition-colors duration-500 flex flex-col h-full rounded-xl">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 text-brand-mink group-hover:scale-110 transition-transform duration-500 border border-white/5 group-hover:bg-brand-mink group-hover:text-white">
                     <Cpu className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-display text-white mb-3">2. Baseline</h3>
                  <p className="text-brand-polar/50 text-xs font-mono leading-relaxed mb-6 flex-grow">
                     The Engine generates a digital twin of your club head. We automatically map the full set (4-PW) and recommend optimal shaft and grip combinations based on your biomechanics.
                  </p>
                  <div className="border-t border-white/5 pt-4">
                      <div className="flex justify-between text-[10px] font-mono text-brand-polar/40 mb-1">
                          <span>REC. SHAFT</span>
                          <span className="text-white">KBS TGI 95</span>
                      </div>
                      <div className="flex justify-between text-[10px] font-mono text-brand-polar/40">
                          <span>REC. GRIP</span>
                          <span className="text-white">MIDSIZE +2 WRAPS</span>
                      </div>
                  </div>
               </div>

               {/* Step 3: Configurator */}
               <div className="glass-panel p-6 group hover:border-brand-mink/30 transition-colors duration-500 flex flex-col h-full rounded-xl">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 text-brand-mink group-hover:scale-110 transition-transform duration-500 border border-white/5 group-hover:bg-brand-mink group-hover:text-white">
                     <Sliders className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-display text-white mb-3">3. Customize</h3>
                  <p className="text-brand-polar/50 text-xs font-mono leading-relaxed mb-6 flex-grow">
                     We hand the controls to you. Enter the 3D Configurator to tweak aesthetics, add logos, adjust topline thickness, and apply custom finishes. You own the look; Physics owns the performance.
                  </p>
                  <div className="relative h-20 bg-black/50 rounded border border-white/5 overflow-hidden flex items-center justify-center">
                     <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?q=80&w=2071&auto=format&fit=crop')] opacity-20 bg-cover"></div>
                     <span className="text-[10px] font-mono text-white border border-white/20 px-2 py-1 rounded bg-black/50 backdrop-blur">LAUNCH 3D EDITOR</span>
                  </div>
               </div>

               {/* Step 4: Loop */}
               <div className="glass-panel p-6 group hover:border-brand-mink/30 transition-colors duration-500 flex flex-col h-full rounded-xl">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 text-brand-mink group-hover:scale-110 transition-transform duration-500 border border-white/5 group-hover:bg-brand-mink group-hover:text-white">
                     <RefreshCw className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-display text-white mb-3">4. The Loop</h3>
                  <p className="text-brand-polar/50 text-xs font-mono leading-relaxed mb-6 flex-grow">
                     CAD file sent to print. Delivery in 3 weeks. Once in hand, the process restarts: new data collected with the new clubs feeds the Agent, making your next generation even better.
                  </p>
                   <div className="flex items-center gap-2 text-[10px] font-mono text-brand-polar/40 bg-black/50 p-3 rounded border border-white/5">
                      <div className="w-2 h-2 bg-brand-mink rounded-full animate-pulse"></div>
                      AWAITING FEEDBACK DATA...
                   </div>
               </div>

            </div>
         </div>
      </section>

      {/* Deep Dive / Features */}
      <section className="py-24 border-t border-white/5 bg-[#121212]">
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
