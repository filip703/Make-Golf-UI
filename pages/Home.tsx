
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Fingerprint, Dna, Activity, ChevronDown, Sliders, Scan, Database } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import Button from '../components/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { CLUB_CATEGORIES } from '../constants';

const HERO_STATEMENTS = [
  "Precision is Personal.",
  "Your DNA. Your Club.",
  "Metal Grown, Not Forged.",
  "The End of Mass Production."
];

const Home: React.FC = () => {
  const [statementIndex, setStatementIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatementIndex((prev) => (prev + 1) % HERO_STATEMENTS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-brand-black text-brand-polar overflow-hidden font-sans selection:bg-brand-mink selection:text-white">
      
      {/* Hero Section - Rotating Statements */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-black">
        
        {/* Background */}
        <div className="absolute inset-0 z-0">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              poster="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070&auto=format&fit=crop"
              className="w-full h-full object-cover opacity-40 scale-105 grayscale contrast-125"
            >
              <source src="https://videos.pexels.com/video-files/5438870/5438870-uhd_3840_2160_25fps.mp4" type="video/mp4" />
            </video>
            
            {/* Overlays for depth and tech feel */}
            <div className="absolute inset-0 bg-brand-black/60"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#191919_120%)]"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
            
            {/* Scanline Effect */}
            <div className="absolute inset-0 pointer-events-none opacity-30">
               <div className="h-px w-full bg-brand-mink/50 shadow-[0_0_20px_#FF224C] absolute top-0 animate-scan"></div>
            </div>
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-10">
          <div className="max-w-6xl mx-auto text-center">
            
            <FadeIn direction="up">
              <div className="inline-flex items-center gap-4 border border-white/5 bg-black/40 backdrop-blur-md px-6 py-2 rounded-full mb-12 shadow-2xl ring-1 ring-white/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-mink opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-mink"></span>
                </span>
                <span className="text-brand-polar font-mono text-[10px] uppercase tracking-[0.3em]">
                  Generative Golf Architecture
                </span>
              </div>
              
              <div className="h-[200px] md:h-[300px] flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.h1 
                    key={statementIndex}
                    initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-8xl lg:text-9xl font-display font-medium text-white tracking-tighter leading-[0.85]"
                  >
                    {HERO_STATEMENTS[statementIndex]}
                  </motion.h1>
                </AnimatePresence>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <p className="text-lg md:text-2xl text-brand-polar/60 font-sans font-light leading-relaxed max-w-2xl mx-auto mb-14 mt-8">
                We engineer equipment based on your unique biomechanical data.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 w-full justify-center items-center">
                <Link to="/ai-fitting">
                  <Button size="lg" variant="primary" className="min-w-[240px] shadow-[0_0_60px_-15px_rgba(255,34,76,0.5)]">
                    Create Your DNA Profile
                  </Button>
                </Link>
                <Link to="/clubs" className="group flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-brand-polar/60 hover:text-white transition-all px-6 py-4 border border-transparent hover:border-white/10 rounded">
                  <span>View The Collection</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform text-brand-mink" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-polar/30"
        >
          <span className="text-[9px] font-mono uppercase tracking-widest">Explore</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </motion.div>
      </section>

      {/* MAKE DNA SECTION */}
      <section className="py-32 bg-[#050505] relative overflow-hidden border-b border-white/5">
         {/* Background Particles/DNA */}
         <div className="absolute inset-0 z-0">
             <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover opacity-20 mix-blend-screen"
             >
               <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_3840_2160_30fps.mp4" type="video/mp4" />
             </video>
             <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
         </div>

         <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               <FadeIn>
                  <div className="flex items-center gap-3 mb-6">
                     <div className="bg-brand-mink/10 p-2 rounded-full border border-brand-mink/30">
                        <Fingerprint className="text-brand-mink w-5 h-5" />
                     </div>
                     <span className="text-brand-mink font-mono text-xs uppercase tracking-widest">Biomechanical Identity</span>
                  </div>
                  <h2 className="text-5xl md:text-7xl font-display font-medium text-white mb-8">
                     Your Swing.<br/>
                     <span className="text-brand-polar/20">Decoded.</span>
                  </h2>
                  <p className="text-xl text-brand-polar/60 font-light leading-relaxed mb-10">
                     We ingest 10,000+ data points from your swing—club path, face angle, closure rate—to generate a singular biomechanical signature. This isn't just fitting. This is architectural translation.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6 mb-10">
                     <div className="bg-[#0f0f0f] p-6 border-l-2 border-brand-mink relative group overflow-hidden">
                        <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
                            <Database className="w-4 h-4 text-brand-mink" />
                        </div>
                        <div className="text-3xl text-white font-display mb-1">10k+</div>
                        <div className="text-[10px] font-mono uppercase text-brand-polar/40">Data Points Analyzed</div>
                     </div>
                     <div className="bg-[#0f0f0f] p-6 border-l-2 border-brand-mink relative group overflow-hidden">
                        <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
                            <Dna className="w-4 h-4 text-brand-mink" />
                        </div>
                        <div className="text-3xl text-white font-display mb-1">100%</div>
                        <div className="text-[10px] font-mono uppercase text-brand-polar/40">Unique Geometry</div>
                     </div>
                  </div>

                  <Link to="/ai-fitting">
                    <Button variant="outline" className="text-white border-white/20 hover:bg-brand-mink hover:border-brand-mink group">
                       <Scan className="w-4 h-4 mr-2 group-hover:animate-pulse" /> Start DNA Extraction
                    </Button>
                  </Link>
               </FadeIn>
               
               <FadeIn direction="left">
                  <div className="relative aspect-square bg-black border border-white/10 rounded-sm overflow-hidden shadow-2xl group">
                     <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover opacity-40 mix-blend-luminosity"></div>
                     <div className="absolute inset-0 bg-gradient-to-t from-brand-mink/20 to-transparent"></div>
                     
                     {/* Scanning Line Animation */}
                     <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-mink/10 to-transparent h-[20%] w-full animate-scan pointer-events-none z-10"></div>
                     
                     <div className="absolute center inset-0 flex items-center justify-center z-20">
                        {/* Target Reticle */}
                        <div className="relative w-[60%] h-[60%] border border-white/10">
                            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-brand-mink"></div>
                            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-brand-mink"></div>
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-brand-mink"></div>
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-brand-mink"></div>
                            
                            {/* Central Scan Line */}
                            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-px bg-brand-mink/50 shadow-[0_0_10px_#FF224C]"></div>
                            
                            <div className="absolute top-[45%] left-1/2 -translate-x-1/2 bg-black/80 px-2 py-1 text-[9px] font-mono text-brand-mink border border-brand-mink/30 rounded-sm">
                                ACQUIRING TARGET
                            </div>
                        </div>
                     </div>

                     <div className="absolute bottom-8 left-8 z-30">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 bg-brand-mink rounded-full animate-pulse"></div>
                            <div className="font-mono text-xs text-brand-mink">SCANNING...</div>
                        </div>
                        <div className="text-4xl font-display text-white">Subject: 001</div>
                        <div className="text-xs font-mono text-brand-polar/40 mt-1">LAT: 59.3293° N // LNG: 18.0686° E</div>
                     </div>
                  </div>
               </FadeIn>
            </div>
         </div>
      </section>

      {/* CONFIGURATOR USP SECTION - NEW */}
      <section className="py-32 bg-[#080808] border-b border-white/5 relative overflow-hidden">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]"></div>
         
         <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
               
               <div className="w-full lg:w-1/2 order-2 lg:order-1">
                  <FadeIn direction="right">
                      {/* Abstract UI representation of the configurator */}
                      <div className="relative aspect-[4/3] bg-[#000] border border-white/10 rounded-lg overflow-hidden shadow-2xl group">
                          <img 
                            src="https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?q=80&w=2071&auto=format&fit=crop" 
                            alt="CAD Wireframe" 
                            className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale contrast-125 transition-transform duration-1000 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                          
                          {/* Floaters */}
                          <div className="absolute top-6 right-6 flex flex-col gap-2">
                              <div className="bg-black/80 backdrop-blur border border-white/10 p-3 rounded w-32">
                                  <div className="text-[9px] text-brand-polar/50 font-mono mb-1">LOFT ANGLE</div>
                                  <div className="h-1 bg-white/10 rounded overflow-hidden">
                                      <div className="h-full w-[70%] bg-brand-mink"></div>
                                  </div>
                              </div>
                              <div className="bg-black/80 backdrop-blur border border-white/10 p-3 rounded w-32">
                                  <div className="text-[9px] text-brand-polar/50 font-mono mb-1">BLADE LENGTH</div>
                                  <div className="h-1 bg-white/10 rounded overflow-hidden">
                                      <div className="h-full w-[45%] bg-brand-mink"></div>
                                  </div>
                              </div>
                          </div>
                          
                          <div className="absolute bottom-6 left-6">
                              <div className="flex items-center gap-2 text-brand-mink font-mono text-xs animate-pulse">
                                  <div className="w-2 h-2 bg-brand-mink rounded-full"></div>
                                  LIVE PREVIEW
                              </div>
                          </div>
                      </div>
                  </FadeIn>
               </div>

               <div className="w-full lg:w-1/2 order-1 lg:order-2">
                  <FadeIn>
                     <div className="flex items-center gap-3 mb-6">
                        <Sliders className="text-brand-mink w-6 h-6" />
                        <span className="text-brand-mink font-mono text-xs uppercase tracking-widest">The Maker Engine</span>
                     </div>
                     <h2 className="text-5xl md:text-7xl font-display font-medium text-white mb-8">
                        Total Control.<br/>
                        <span className="text-brand-polar/20">Zero Compromise.</span>
                     </h2>
                     <p className="text-xl text-brand-polar/60 font-light leading-relaxed mb-10">
                        Most brands let you choose a shaft and a grip. We let you engineer the head. 
                        Adjust offset, top-line thickness, bounce, and center-of-gravity in real-time. 
                        This is parametric design, accessible in your browser.
                     </p>
                     <Link to="/configurator">
                        <Button variant="primary" size="lg" className="shadow-[0_0_30px_rgba(255,34,76,0.2)]">
                           Open Configurator
                        </Button>
                     </Link>
                  </FadeIn>
               </div>

            </div>
         </div>
      </section>

      {/* The Collection (Updated Categories) */}
      <section className="py-32 bg-[#111] overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="mb-20 flex items-end justify-between border-b border-white/5 pb-8">
            <h2 className="text-5xl md:text-7xl font-display font-medium text-white tracking-tight">
              The<br/>Collection
            </h2>
            <Link to="/clubs">
              <Button variant="outline" size="sm">View All Categories</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {CLUB_CATEGORIES.map((cat, index) => (
               <Link to="/clubs" key={cat.id} className="group relative bg-[#151515] aspect-[4/5] overflow-hidden cursor-pointer hover:bg-[#1a1a1a] transition-colors">
                  <div className="absolute top-6 left-6 z-20">
                    <span className="text-[10px] font-mono text-brand-mink uppercase tracking-widest">0{index + 1} // {cat.name}</span>
                  </div>
                  <img 
                    src={cat.image} 
                    alt={cat.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-3xl font-display text-white mb-2">{cat.name}</h3>
                    <p className="text-brand-polar/50 font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-[200px]">
                      {cat.desc}
                    </p>
                  </div>
               </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
