import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Cpu, Layers, ChevronDown } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import Button from '../components/Button';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black text-brand-polar overflow-hidden font-sans selection:bg-brand-mink selection:text-white">
      
      {/* Hero Section - The "Apple x Tesla" Aesthetic */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-black">
        
        {/* Background: Raw Material (Steel Powder) Visualization */}
        <div className="absolute inset-0 z-0">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              poster="https://images.unsplash.com/photo-1635002962487-2c1d43195204?q=80&w=2938&auto=format&fit=crop"
              className="w-full h-full object-cover opacity-60 scale-105"
            >
              {/* Abstract black liquid metal / powder flow */}
              <source src="https://videos.pexels.com/video-files/3045653/3045653-uhd_3840_2160_25fps.mp4" type="video/mp4" />
            </video>
            
            {/* Cinematic Grading Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-black/30 via-transparent to-brand-black"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#191919_120%)]"></div>
            
            {/* The "Laser Sintering" Scan Effect */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
               <div className="h-px w-full bg-brand-mink/50 shadow-[0_0_20px_#FF224C] absolute top-1/2 -translate-y-1/2 animate-scan"></div>
            </div>
        </div>

        {/* Technical HUD Elements (Tesla Style) */}
        <div className="absolute top-24 left-6 md:left-12 hidden md:block opacity-40 mix-blend-screen pointer-events-none">
           <div className="flex flex-col gap-1 font-mono text-[9px] text-brand-polar tracking-widest uppercase">
              <span className="block border-l-2 border-brand-mink pl-2">System: Active</span>
              <span className="pl-2.5">Env: 17-4PH Powder</span>
              <span className="pl-2.5">Layer: 30μm</span>
           </div>
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-10">
          <div className="max-w-5xl mx-auto text-center">
            
            <FadeIn direction="up">
              <div className="inline-flex items-center gap-4 border border-white/5 bg-white/5 backdrop-blur-md px-6 py-2 rounded-full mb-12 shadow-2xl">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-mink opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-mink"></span>
                </span>
                <span className="text-brand-polar font-mono text-[10px] uppercase tracking-[0.3em]">
                  The Future of Ball Striking
                </span>
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-medium text-white tracking-tighter mb-8 leading-[0.85] drop-shadow-2xl">
                Precision is<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">Personal.</span>
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <p className="text-lg md:text-2xl text-brand-polar/60 font-sans font-light leading-relaxed max-w-2xl mx-auto mb-14">
                We engineer clubs that exist for only one swing. <span className="text-brand-polar">Yours.</span><br/>
                <span className="text-sm font-mono opacity-50 mt-2 block">Powered by Generative AI & Additive Manufacturing.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 w-full justify-center items-center">
                <Link to="/configurator">
                  <Button size="lg" variant="primary" className="min-w-[240px] shadow-[0_0_60px_-15px_rgba(255,34,76,0.5)] border border-white/10 text-white hover:scale-105 transition-transform duration-300">
                    Design Your Iron
                  </Button>
                </Link>
                <Link to="/technology" className="group flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-brand-polar/60 hover:text-white transition-all px-6 py-4 border border-transparent hover:border-white/10 rounded">
                  <span>View The Technology</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform text-brand-mink" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-polar/30"
        >
          <span className="text-[9px] font-mono uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </motion.div>
      </section>

      {/* Philosophy / Intro - Elegant Typography */}
      <section className="py-32 bg-brand-black relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-white/10 pt-12">
            <div className="lg:col-span-4">
               <span className="text-brand-mink font-mono text-xs uppercase tracking-widest mb-4 block">The Philosophy</span>
               <h2 className="text-4xl font-display text-white leading-tight">
                 Mass production assumes everyone plays the same. <br/>
                 <span className="text-brand-polar/30">We know they don't.</span>
               </h2>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="space-y-4 group">
                 <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-brand-mink/50 transition-colors">
                    <Activity className="text-brand-mink w-5 h-5 opacity-80" />
                 </div>
                 <h3 className="font-display text-xl text-white">Biomechanical AI</h3>
                 <p className="text-brand-polar/50 text-sm font-mono leading-relaxed">
                   Input your launch monitor data. Our algorithm designs a club head to optimize your specific strike patterns and closure rate.
                 </p>
               </div>
               <div className="space-y-4 group">
                 <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-brand-mink/50 transition-colors">
                    <Cpu className="text-brand-mink w-5 h-5 opacity-80" />
                 </div>
                 <h3 className="font-display text-xl text-white">Generative Geometry</h3>
                 <p className="text-brand-polar/50 text-sm font-mono leading-relaxed">
                   We use topology optimization to place mass exactly where you need it, creating shapes impossible to cast or forge.
                 </p>
               </div>
               <div className="space-y-4 group">
                 <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-brand-mink/50 transition-colors">
                    <Layers className="text-brand-mink w-5 h-5 opacity-80" />
                 </div>
                 <h3 className="font-display text-xl text-white">3D Printed Steel</h3>
                 <p className="text-brand-polar/50 text-sm font-mono leading-relaxed">
                   Printed in 17-4PH Stainless Steel. 30-micron layers. The feel of soft carbon steel with the precision of aerospace engineering.
                 </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Product - Dark, Moody, Technical */}
      <section className="py-24 bg-[#111] overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="mb-16 flex items-end justify-between">
            <h2 className="text-5xl md:text-7xl font-display font-medium text-white tracking-tight">
              The<br/>Collection
            </h2>
            <Link to="/clubs">
              <Button variant="outline" size="sm">View All Models</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {/* Product 1 */}
            <div className="group relative bg-[#151515] aspect-[4/5] overflow-hidden cursor-pointer hover:bg-[#1a1a1a] transition-colors">
               <div className="absolute top-6 left-6 z-20">
                 <span className="text-[10px] font-mono text-brand-mink uppercase tracking-widest">01 // Blade</span>
               </div>
               <img 
                 src="https://images.unsplash.com/photo-1610427847926-22467d5e4620?q=80&w=1974&auto=format&fit=crop" 
                 alt="Blade Iron"
                 className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
               <div className="absolute bottom-8 left-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                 <h3 className="text-2xl font-display text-white mb-1">MG-1 Blade</h3>
                 <p className="text-brand-polar/50 font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                   Tour profile. Max feedback.
                 </p>
               </div>
            </div>

            {/* Product 2 */}
            <div className="group relative bg-[#151515] aspect-[4/5] overflow-hidden cursor-pointer hover:bg-[#1a1a1a] transition-colors">
               <div className="absolute top-6 left-6 z-20">
                 <span className="text-[10px] font-mono text-brand-mink uppercase tracking-widest">02 // Cavity</span>
               </div>
               <img 
                 src="https://images.unsplash.com/photo-1596727284451-b0db0a10c73e?q=80&w=1974&auto=format&fit=crop" 
                 alt="Cavity Iron"
                 className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
               <div className="absolute bottom-8 left-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                 <h3 className="text-2xl font-display text-white mb-1">MG-1 Cavity</h3>
                 <p className="text-brand-polar/50 font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                   Forgiveness meets precision.
                 </p>
               </div>
            </div>

            {/* Product 3 */}
            <div className="group relative bg-[#151515] aspect-[4/5] overflow-hidden cursor-pointer hover:bg-[#1a1a1a] transition-colors">
               <div className="absolute top-6 left-6 z-20">
                 <span className="text-[10px] font-mono text-brand-mink uppercase tracking-widest">03 // Hollow</span>
               </div>
               <img 
                 src="https://images.unsplash.com/photo-1628256382834-367073b64436?q=80&w=2070&auto=format&fit=crop" 
                 alt="Hollow Body"
                 className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
               <div className="absolute bottom-8 left-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                 <h3 className="text-2xl font-display text-white mb-1">MG-X Hollow</h3>
                 <p className="text-brand-polar/50 font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                   Distance. Soft acoustics.
                 </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Pathways - Less Aggressive, More Visually Distinct */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
        
        {/* For Players */}
        <div className="relative group overflow-hidden border-r border-white/5 bg-brand-black">
           {/* Background Video for Golfers */}
           <div className="absolute inset-0 z-0">
             <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                poster="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070&auto=format&fit=crop"
                className="w-full h-full object-cover opacity-40 grayscale group-hover:opacity-60 transition-opacity duration-700"
              >
                <source src="https://videos.pexels.com/video-files/5438870/5438870-uhd_3840_2160_25fps.mp4" type="video/mp4" />
              </video>
           </div>
           
           <div className="absolute inset-0 bg-brand-black/40 z-10"></div>
           
           <div className="relative z-20 flex flex-col justify-end h-full p-12 md:p-24">
             <span className="text-brand-mink font-mono text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-brand-mink"></span> For Golfers
             </span>
             <h2 className="text-4xl md:text-5xl font-display text-white mb-6">Build Your Legacy.</h2>
             <p className="text-brand-polar/60 font-sans font-light mb-10 max-w-sm leading-relaxed">
               Experience the confidence of equipment engineered specifically for your biomechanics.
             </p>
             <div>
               <Link to="/configurator">
                 <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-brand-black">Start Your Build</Button>
               </Link>
             </div>
           </div>
        </div>

        {/* For Fitters */}
        <div className="relative group overflow-hidden bg-brand-black">
           {/* Background Video for Fitters */}
           <div className="absolute inset-0 z-0">
             <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                poster="https://images.unsplash.com/photo-1588681664899-f142de274a2f?q=80&w=1974&auto=format&fit=crop"
                className="w-full h-full object-cover opacity-30 grayscale group-hover:opacity-50 transition-opacity duration-700"
              >
                <source src="https://videos.pexels.com/video-files/852292/852292-hd_1920_1080_30fps.mp4" type="video/mp4" />
              </video>
           </div>
           
           <div className="absolute inset-0 bg-gradient-to-t from-black via-brand-black/80 to-transparent z-10"></div>
           
           <div className="relative z-20 flex flex-col justify-end h-full p-12 md:p-24">
             <span className="text-brand-polar/40 font-mono text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-brand-polar/40"></span> For Professionals
             </span>
             <h2 className="text-4xl md:text-5xl font-display text-white mb-6">The Future of Fitting.</h2>
             <p className="text-brand-polar/60 font-sans font-light mb-10 max-w-sm leading-relaxed">
               Zero inventory. High margins. Transform your studio into a next-generation manufacturing hub.
             </p>
             <div>
               <Link to="/fitters">
                 <Button variant="primary" className="shadow-none">Partner Access</Button>
               </Link>
             </div>
           </div>
        </div>

      </section>

    </div>
  );
};

export default Home;