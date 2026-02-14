
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Fingerprint, Dna, Activity, ChevronDown, Sliders, Scan, Database, Layers, Zap, Cpu, Code, Play } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import Button from '../components/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { CLUB_CATEGORIES } from '../constants';

const HERO_CONTENT = [
  {
    headline: "Precision is Personal.",
    subheadline: "We engineer equipment based on your unique biomechanical data.",
    cta: "Create Your DNA Profile"
  },
  {
    headline: "Your DNA. Your Club.",
    subheadline: "Generative design that adapts to your swing, not the other way around.",
    cta: "Analyze Your Swing"
  },
  {
    headline: "Metal Grown, Not Forged.",
    subheadline: "Advanced additive manufacturing unlocks performance impossible with casting.",
    cta: "Explore Technology"
  },
  {
    headline: "The End of Mass Production.",
    subheadline: "No inventory. No compromise. Just the perfect club for you.",
    cta: "Start The Engine"
  }
];

const DATA_STREAM = [
  { label: "ATTACK ANGLE", value: "-3.2°", color: "text-brand-mink" },
  { label: "CLUB PATH", value: "+4.1°", color: "text-emerald-400" },
  { label: "FACE TO PATH", value: "-0.8°", color: "text-blue-400" },
  { label: "CLOSURE RATE", value: "1400 d/s", color: "text-yellow-400" },
];

const Home: React.FC = () => {
  const [statementIndex, setStatementIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatementIndex((prev) => (prev + 1) % HERO_CONTENT.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-brand-black text-brand-polar overflow-hidden font-sans selection:bg-brand-mink selection:text-white">
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-black">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
            {/* TODO: Replace with local video from public/videos/hero-loop.mp4 */}
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
            <div className="absolute inset-0 bg-brand-black/60"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#191919_120%)]"></div>
            
            {/* Animated Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>
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
              
              <div className="h-[180px] md:h-[280px] flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.h1 
                    key={statementIndex}
                    initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-8xl lg:text-9xl font-display font-medium text-white tracking-tighter leading-[0.85] px-4"
                  >
                    {HERO_CONTENT[statementIndex].headline}
                  </motion.h1>
                </AnimatePresence>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <div className="h-28 md:h-24 relative flex items-center justify-center mb-10 mt-2 w-full max-w-2xl mx-auto">
                  <AnimatePresence mode="wait">
                    <motion.p 
                        key={statementIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                        className="text-lg md:text-2xl text-brand-polar/60 font-sans font-light leading-relaxed absolute w-full px-4"
                    >
                        {HERO_CONTENT[statementIndex].subheadline}
                    </motion.p>
                  </AnimatePresence>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 w-full justify-center items-center">
                <Link to="/ai-fitting">
                  <Button size="lg" variant="primary" className="min-w-[280px] shadow-[0_0_60px_-15px_rgba(255,34,76,0.5)]">
                     <span className="block min-w-[200px] text-center">
                       {HERO_CONTENT[statementIndex].cta}
                     </span>
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

      {/* --- NEW: VISUAL EVIDENCE (VIDEO SHOWCASE) --- */}
      <section className="bg-[#030303] border-b border-white/5">
         <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Video 1: Manufacturing Process */}
            <div className="relative aspect-video lg:aspect-auto lg:h-[700px] group overflow-hidden border-r border-white/5">
                {/* TODO: Replace source with public/videos/manufacturing.mp4 */}
                <video 
                   autoPlay muted loop playsInline
                   className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                >
                   <source src="https://videos.pexels.com/video-files/3840445/3840445-hd_1920_1080_30fps.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-10 left-10 z-10">
                   <div className="inline-flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-brand-mink rounded-full animate-pulse"></div>
                      <span className="text-[10px] font-mono text-brand-mink uppercase tracking-widest">Live Feed</span>
                   </div>
                   <h3 className="text-3xl font-display text-white mb-2">The Reactor</h3>
                   <p className="text-brand-polar/50 text-sm font-mono max-w-sm">48-hour continuous laser sintering. Growing your geometry atom by atom.</p>
                </div>
                {/* Play Button Overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-16 h-16 rounded-full border border-white/20 bg-black/40 backdrop-blur flex items-center justify-center">
                        <Play className="w-6 h-6 text-white fill-white" />
                    </div>
                </div>
            </div>

            {/* Video 2: The Swing/Result */}
            <div className="relative aspect-video lg:aspect-auto lg:h-[700px] group overflow-hidden">
                {/* TODO: Replace source with public/videos/swing.mp4 */}
                <video 
                   autoPlay muted loop playsInline
                   className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                >
                   <source src="https://videos.pexels.com/video-files/6077718/6077718-uhd_3840_2160_24fps.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-10 left-10 z-10">
                   <div className="inline-flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                      <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest">Performance Validation</span>
                   </div>
                   <h3 className="text-3xl font-display text-white mb-2">Impact Physics</h3>
                   <p className="text-brand-polar/50 text-sm font-mono max-w-sm">Optimized acoustics and dispersion control through generative lattice structures.</p>
                </div>
                {/* Play Button Overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-16 h-16 rounded-full border border-white/20 bg-black/40 backdrop-blur flex items-center justify-center">
                        <Play className="w-6 h-6 text-white fill-white" />
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* --- DNA / BIOMECHANICS HUD SECTION --- */}
      <section className="py-32 bg-[#050505] relative overflow-hidden border-b border-white/5">
         
         {/* Tech Background Elements */}
         <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
             <Dna className="w-96 h-96 text-brand-polar" />
         </div>

         <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
               
               {/* Text Content */}
               <div className="lg:col-span-5">
                  <FadeIn>
                      <div className="flex items-center gap-3 mb-6">
                         <div className="bg-brand-mink/10 p-2 rounded-full border border-brand-mink/30 animate-pulse-slow">
                            <Activity className="text-brand-mink w-5 h-5" />
                         </div>
                         <span className="text-brand-mink font-mono text-xs uppercase tracking-widest">The Algorithm of You</span>
                      </div>
                      
                      <h2 className="text-5xl md:text-7xl font-display font-medium text-white mb-8 leading-tight">
                         Your Swing.<br/>
                         <span className="text-brand-polar/20">Digitized.</span>
                      </h2>
                      
                      <p className="text-xl text-brand-polar/60 font-light leading-relaxed mb-8">
                         We don't guess. We measure. By ingesting raw launch monitor data, we build a <strong>Digital Twin</strong> of your impact conditions.
                      </p>

                      <div className="space-y-6 mb-10 border-l border-white/10 pl-6">
                          <div className="flex flex-col gap-1">
                              <h4 className="text-white font-display text-lg">Swing Sequencing</h4>
                              <p className="text-sm text-brand-polar/50 font-mono">Mapping the kinetic chain from ground to grip.</p>
                          </div>
                          <div className="flex flex-col gap-1">
                              <h4 className="text-white font-display text-lg">Impact Geometry</h4>
                              <p className="text-sm text-brand-polar/50 font-mono">Optimizing CG location for your specific strike pattern.</p>
                          </div>
                          <div className="flex flex-col gap-1">
                              <h4 className="text-white font-display text-lg">Shaft Deflection</h4>
                              <p className="text-sm text-brand-polar/50 font-mono">Timing the kick-point to your tempo.</p>
                          </div>
                      </div>

                      <Link to="/ai-fitting">
                        <Button variant="outline" className="text-white border-white/20 hover:bg-brand-mink hover:border-brand-mink group w-full md:w-auto">
                           <Scan className="w-4 h-4 mr-2" /> 
                           START BIOMETRIC ANALYSIS
                        </Button>
                      </Link>
                  </FadeIn>
               </div>

               {/* VISUAL HUD INTERFACE */}
               <div className="lg:col-span-7 relative">
                   <FadeIn direction="left" delay={0.2}>
                       <div className="relative aspect-[4/3] bg-black border border-white/10 rounded-lg overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] group">
                           
                           {/* Background Video/Image simulating 3D analysis */}
                           <div className="absolute inset-0 z-0">
                                <img 
                                    src="https://images.unsplash.com/photo-1599586120429-4828d5dabb04?q=80&w=2000&auto=format&fit=crop"
                                    className="w-full h-full object-cover opacity-30 grayscale mix-blend-screen"
                                    alt="Analysis Background"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
                           </div>

                           {/* HUD Overlay Elements */}
                           <div className="absolute inset-0 z-10 p-8 flex flex-col justify-between">
                                {/* HUD Header */}
                                <div className="flex justify-between items-start border-b border-white/10 pb-4">
                                    <div>
                                        <div className="text-[10px] font-mono text-brand-mink uppercase tracking-widest mb-1">SUBJECT ID</div>
                                        <div className="text-2xl font-display text-white">MK-0094X</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="flex items-center justify-end gap-2 mb-1">
                                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                            <div className="text-[10px] font-mono text-green-500 uppercase tracking-widest">LIVE FEED</div>
                                        </div>
                                        <div className="text-xs font-mono text-brand-polar/40">120FPS // 4K</div>
                                    </div>
                                </div>

                                {/* Central Focus / Reticle */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/10 rounded-full flex items-center justify-center">
                                    <div className="w-48 h-48 border border-dashed border-white/20 rounded-full animate-spin-slow"></div>
                                    <div className="absolute w-full h-px bg-brand-mink/20"></div>
                                    <div className="absolute h-full w-px bg-brand-mink/20"></div>
                                </div>

                                {/* Dynamic Data Stream */}
                                <div className="space-y-4 max-w-[200px] self-end bg-black/50 backdrop-blur p-4 border border-white/10 rounded-sm">
                                    <div className="text-[9px] font-mono text-brand-polar/40 uppercase mb-2 border-b border-white/10 pb-1">Telemetry</div>
                                    {DATA_STREAM.map((item, idx) => (
                                        <div key={idx} className="flex justify-between items-center">
                                            <span className="text-[10px] font-mono text-brand-polar/70">{item.label}</span>
                                            <span className={`text-xs font-mono font-bold ${item.color}`}>{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                           </div>

                           {/* Scanning Bar */}
                           <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-brand-mink/10 to-transparent h-[15%] w-full animate-scan z-20"></div>
                           
                       </div>
                   </FadeIn>
               </div>

            </div>
         </div>
      </section>

      {/* --- PROCESS BREAKDOWN SECTION --- */}
      <section className="py-24 bg-[#0a0a0a] border-b border-white/5">
          <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                  <h3 className="text-brand-polar/40 font-mono text-[10px] uppercase tracking-[0.3em] mb-4">From Code to Chromium</h3>
                  <h2 className="text-3xl md:text-5xl font-display text-white">The Manufacturing Core</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Step 1 */}
                  <FadeIn delay={0} className="bg-[#111] p-8 border border-white/5 group hover:border-brand-mink/50 transition-colors duration-500">
                      <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-mink group-hover:text-white transition-colors">
                          <Code className="w-6 h-6" />
                      </div>
                      <h4 className="text-xl font-display text-white mb-3">1. Capture</h4>
                      <p className="text-brand-polar/50 text-sm font-mono leading-relaxed">
                          Input data from Trackman or GCQuad creates a biomechanical boundary box for your swing.
                      </p>
                  </FadeIn>

                  {/* Step 2 */}
                  <FadeIn delay={0.2} className="bg-[#111] p-8 border border-white/5 group hover:border-brand-mink/50 transition-colors duration-500">
                      <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-mink group-hover:text-white transition-colors">
                          <Cpu className="w-6 h-6" />
                      </div>
                      <h4 className="text-xl font-display text-white mb-3">2. Generate</h4>
                      <p className="text-brand-polar/50 text-sm font-mono leading-relaxed">
                          Our AI generates 1,000+ variations of head geometry, selecting the one that minimizes dispersion.
                      </p>
                  </FadeIn>

                  {/* Step 3 */}
                  <FadeIn delay={0.4} className="bg-[#111] p-8 border border-white/5 group hover:border-brand-mink/50 transition-colors duration-500">
                      <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-mink group-hover:text-white transition-colors">
                          <Zap className="w-6 h-6" />
                      </div>
                      <h4 className="text-xl font-display text-white mb-3">3. Sinter</h4>
                      <p className="text-brand-polar/50 text-sm font-mono leading-relaxed">
                          Lasers fuse 17-4PH stainless steel powder layer-by-layer (30 microns) into a solid structure.
                      </p>
                  </FadeIn>
              </div>
          </div>
      </section>

      {/* CONFIGURATOR USP SECTION */}
      <section className="py-32 bg-[#080808] border-b border-white/5 relative overflow-hidden">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]"></div>
         
         <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
               
               <div className="w-full lg:w-1/2 order-2 lg:order-1">
                  <FadeIn direction="right">
                      {/* Blueprint Style Visual */}
                      <div className="relative aspect-[4/3] bg-[#000] border border-white/10 rounded-lg overflow-hidden shadow-2xl group">
                          {/* Image */}
                          <img 
                            src="https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?q=80&w=2071&auto=format&fit=crop" 
                            alt="CAD Wireframe" 
                            className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale contrast-125 transition-transform duration-1000 group-hover:scale-105"
                          />
                          
                          {/* Overlay Gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                          
                          {/* Floating Dimensions (Blueprints) */}
                          <div className="absolute top-[20%] left-[20%]">
                              <div className="w-px h-20 bg-brand-mink/50 absolute -left-4"></div>
                              <div className="text-[9px] font-mono text-brand-mink -rotate-90 absolute -left-8 top-8">OFFSET</div>
                          </div>
                          
                          <div className="absolute bottom-6 left-6">
                              <div className="flex items-center gap-2 text-brand-mink font-mono text-xs animate-pulse">
                                  <div className="w-2 h-2 bg-brand-mink rounded-full"></div>
                                  CONFIGURATOR V1.0 PREVIEW
                              </div>
                          </div>

                          <div className="absolute top-6 right-6 flex flex-col items-end gap-2">
                              <div className="text-[9px] font-mono text-brand-polar/40">MODE: EDIT</div>
                              <div className="text-[9px] font-mono text-brand-polar/40">GRID: ON</div>
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
                  
                  {/* Product Image */}
                  <img 
                    src={cat.image} 
                    alt={cat.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  
                  {/* Tech Specs Overlay on Hover */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="bg-black/80 backdrop-blur border border-white/10 p-4 text-center transform scale-95 group-hover:scale-100 transition-transform duration-300">
                          <div className="text-[9px] font-mono text-brand-polar/50 uppercase mb-1">MATERIAL</div>
                          <div className="text-white font-display font-bold mb-3">17-4PH SS</div>
                          <div className="text-[9px] font-mono text-brand-polar/50 uppercase mb-1">PROCESS</div>
                          <div className="text-white font-display font-bold">DMLS PRINT</div>
                      </div>
                  </div>

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
