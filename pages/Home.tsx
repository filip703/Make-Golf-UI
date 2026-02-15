
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Fingerprint, Activity, Layers, Dna, Maximize } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import Button from '../components/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { CLUB_CATEGORIES, ARTICLES, MOCK_STATS } from '../constants';

const HERO_CONTENT = [
  {
    headline: "Precision is Personal.",
    subheadline: "Engineering equipment based on your unique biomechanical data.",
    cta: "Create Your Profile"
  },
  {
    headline: "Your DNA. Your Club.",
    subheadline: "Generative design that adapts to your swing, giving you the best chance to perform.",
    cta: "Analyze Your Swing"
  },
  {
    headline: "The Future of Fitting.",
    subheadline: "No inventory. No compromise. Just the perfect club for your game.",
    cta: "Start The Engine"
  }
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
      
      {/* Hero Section - Gradient Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#242424] via-[#1A1A1A] to-[#121212]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1592919505780-303950717480?q=80&w=2022&auto=format&fit=crop"
              alt="Golf Club Detail"
              className="w-full h-full object-cover opacity-20 scale-105"
            />
            {/* Soft Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-brand-black/60 to-brand-black"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-10">
          <div className="max-w-6xl mx-auto text-center">
            
            <FadeIn direction="up">
              <div className="inline-flex items-center gap-3 border border-white/10 bg-white/5 backdrop-blur-md px-5 py-2 rounded-full mb-12 shadow-lg">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-mink opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-mink"></span>
                </span>
                <span className="text-brand-polar/90 font-mono text-[10px] uppercase tracking-[0.2em]">
                  The New Standard
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
                    className="text-5xl md:text-7xl lg:text-9xl font-display font-medium text-white tracking-tight leading-[0.95] px-4"
                  >
                    {HERO_CONTENT[statementIndex].headline}
                  </motion.h1>
                </AnimatePresence>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <div className="h-24 relative flex items-center justify-center mb-10 w-full max-w-2xl mx-auto">
                  <AnimatePresence mode="wait">
                    <motion.p 
                        key={statementIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                        className="text-lg md:text-xl text-brand-polar/70 font-sans font-light leading-relaxed absolute w-full px-4"
                    >
                        {HERO_CONTENT[statementIndex].subheadline}
                    </motion.p>
                  </AnimatePresence>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 w-full justify-center items-center">
                <Link to="/engine">
                  <Button size="lg" variant="primary" className="min-w-[240px] rounded-full shadow-[0_4px_20px_rgba(255,34,76,0.3)] hover:shadow-[0_4px_25px_rgba(255,34,76,0.4)]">
                     <span className="block text-center">
                       {HERO_CONTENT[statementIndex].cta}
                     </span>
                  </Button>
                </Link>
                <Link to="/clubs" className="text-sm font-medium text-brand-polar/80 hover:text-white transition-colors flex items-center gap-2 border-b border-transparent hover:border-brand-mink pb-0.5">
                  View Components
                  <ArrowRight className="w-4 h-4" />
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
          <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </motion.div>
      </section>

      {/* --- LIGHT SECTION: PHILOSOPHY --- */}
      <section className="py-32 bg-[#EAEAEA] text-[#1C1C1E]">
         <div className="container mx-auto px-6">
            <FadeIn>
               <div className="max-w-3xl mx-auto text-center mb-24">
                  <h2 className="text-3xl md:text-5xl font-display text-[#1C1C1E] mb-6">Built for the Individual.</h2>
                  <p className="text-lg text-[#1C1C1E]/70 font-light leading-relaxed">
                     Mass production works for t-shirts, not for golf swings. 
                     We stripped away the marketing fluff to focus on what actually matters: 
                     Physics, Geometry, and You.
                  </p>
               </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
               <FadeIn delay={0.1}>
                  <div className="flex flex-col items-center text-center group">
                     <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 text-brand-mink group-hover:scale-110 transition-transform duration-500 shadow-md">
                        <Fingerprint className="w-8 h-8" />
                     </div>
                     <h3 className="text-xl font-display text-[#1C1C1E] mb-3">Your Signature</h3>
                     <p className="text-[#1C1C1E]/60 text-sm leading-relaxed">
                        We capture your biomechanical data to create a club that matches your unique swing DNA, not a market average.
                     </p>
                  </div>
               </FadeIn>
               <FadeIn delay={0.2}>
                  <div className="flex flex-col items-center text-center group">
                     <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 text-brand-mink group-hover:scale-110 transition-transform duration-500 shadow-md">
                        <Activity className="w-8 h-8" />
                     </div>
                     <h3 className="text-xl font-display text-[#1C1C1E] mb-3">Adaptive Design</h3>
                     <p className="text-[#1C1C1E]/60 text-sm leading-relaxed">
                        Our generative AI adapts geometry to optimize center of gravity and MOI specifically for your impact tendencies.
                     </p>
                  </div>
               </FadeIn>
               <FadeIn delay={0.3}>
                  <div className="flex flex-col items-center text-center group">
                     <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 text-brand-mink group-hover:scale-110 transition-transform duration-500 shadow-md">
                        <Layers className="w-8 h-8" />
                     </div>
                     <h3 className="text-xl font-display text-[#1C1C1E] mb-3">Additive Mfg</h3>
                     <p className="text-[#1C1C1E]/60 text-sm leading-relaxed">
                        Printed layer by layer in stainless steel. This method allows for complex internal structures impossible to cast.
                     </p>
                  </div>
               </FadeIn>
            </div>
         </div>
      </section>

      {/* --- MAKE DNA / ENGINE --- */}
      <section className="py-32 bg-[#1C1C1E] relative overflow-hidden border-t border-white/5">
        {/* Background Tech Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#2C2C2E]/20 to-transparent pointer-events-none"></div>
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-brand-mink/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             
             {/* Left: Text Content */}
             <FadeIn>
                <div className="inline-flex items-center gap-2 text-brand-mink mb-6">
                   <Dna className="w-5 h-5" />
                   <span className="font-mono text-xs uppercase tracking-widest">The Make DNA Engine</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-display font-medium text-white mb-6 leading-tight">
                   Your Swing.<br/>Decoded.
                </h2>
                <p className="text-xl text-brand-polar/60 font-light font-sans leading-relaxed mb-10">
                   We don't just fit you; we calculate you. Our proprietary AI analyzes 1,200+ biomechanical data points from your swing to generate a manufacturing blueprint that optimizes dispersion and ball speed.
                </p>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10 border-t border-white/10 pt-8">
                   {MOCK_STATS.map((stat, i) => (
                      <div key={i}>
                         <div className="text-2xl md:text-3xl font-display text-white mb-1">{stat.value}</div>
                         <div className="text-xs font-mono text-brand-polar/40 uppercase tracking-wider">{stat.label}</div>
                      </div>
                   ))}
                </div>

                <Link to="/engine">
                   <Button variant="primary" size="md" className="rounded-full shadow-[0_4px_20px_rgba(255,34,76,0.3)] hover:shadow-[0_4px_25px_rgba(255,34,76,0.4)]">
                      Explore The Engine
                   </Button>
                </Link>
             </FadeIn>

             {/* Right: Visual Abstract */}
             <FadeIn direction="left" delay={0.2}>
                <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-[#151515] group shadow-2xl">
                   <img 
                      src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070&auto=format&fit=crop" 
                      alt="Data Analysis"
                      className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity group-hover:opacity-60 transition-opacity duration-700"
                   />
                   <div className="absolute inset-0 bg-gradient-to-tr from-brand-mink/20 to-transparent mix-blend-overlay"></div>
                   
                   {/* Overlay UI elements to look like analysis */}
                   <div className="absolute bottom-8 left-8 right-8">
                      <div className="flex justify-between text-xs font-mono text-white/60 mb-2">
                         <span>ANALYSIS COMPLETE</span>
                         <span className="text-brand-mink">100%</span>
                      </div>
                      <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                         <div className="h-full bg-brand-mink w-full"></div>
                      </div>
                      <div className="mt-4 grid grid-cols-2 gap-4">
                         <div className="bg-black/40 backdrop-blur p-3 rounded border border-white/10">
                            <div className="text-[10px] text-brand-polar/40 uppercase mb-1">Impact Efficiency</div>
                            <div className="text-lg text-white font-display">1.48 PTR</div>
                         </div>
                         <div className="bg-black/40 backdrop-blur p-3 rounded border border-white/10">
                            <div className="text-[10px] text-brand-polar/40 uppercase mb-1">Spin Axis</div>
                            <div className="text-lg text-white font-display">-2.4°</div>
                         </div>
                      </div>
                   </div>
                </div>
             </FadeIn>

          </div>
        </div>
      </section>

      {/* --- NEW SECTION: 3D STUDIO PREVIEW --- */}
      <section className="py-32 bg-[#151515] relative overflow-hidden border-t border-white/5">
         <div className="container mx-auto px-6">
            <FadeIn>
               <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 text-brand-mink mb-4 justify-center">
                     <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-mink opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-mink"></span>
                     </span>
                     <span className="font-mono text-xs uppercase tracking-widest">Live Beta</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-display text-white mb-6">The Design Studio</h2>
                  <p className="text-brand-polar/60 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                     Total control over every parameter. Adjust loft, lie, offset, and mass properties in real-time with our browser-based CAD engine.
                  </p>
               </div>

               <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group bg-[#000]">
                  {/* The Iframe */}
                  <iframe 
                        src="https://configurator.modelup3d.com/?projectId=oa1oRJb3&token=eyJhbGciOiJIUzI1NiJ9.eyJ2NW4iOjEsImlkIjoxMzQsInA3ZCI6Im9hMW9SSmIzIiwicDlzIjpbImM1ZSIsInJfYzE1YSJdfQ.p-s501nEeYwHvyH2JJUYuSlk5f9rJZ2HbQC58p8DIXc&configurationState=a_29b5d105-ab7f-4511-a8cb-c81eb0f33f2c_7b8382fc-47a7-48ec-bfab-87daf3482240_0_e3685a61-0488-495b-af0a-03f4cd28662b_34.9_5310300e-e063-415e-b008-c54613d8a961_61_1e4aac43-e484-48ef-9549-2d54d4a16715_0_8ce09785-357e-48fb-ae65-422003074fef_77.4_cc947572-79b1-4736-bc9b-90b11a73713a_55.1_bc5871e7-3961-46c3-8fe0-1122e8586405_30.1_c5e62c30-a479-45a4-9879-c828067b840e_4.5_cdf62d42-b88d-4add-9487-21806bcbfe05_9.12_1c129292-ed94-48ea-ae88-309cd2291f1f_32.6_82434f86-8f4a-49bb-be3b-455c356e69bf_9.6_a38a92bf-cdb6-4ea1-b50d-2d108dd75062_14.789_52436bbd-9b9c-46f6-973f-0584ea52d3fe_1.6_b18d42ba-b806-41f9-8702-55359170f28d_2.5_c72f9f2b-c110-492a-851e-3395391883d0_-2.4_480f42a1-ddae-41bd-9d8f-73a47b8c9232_42.7_c0182fe3-ceab-4e11-9249-1ec1a765f0f0_23_22fc43a3-85ce-46b3-9d1f-75422eaf7da0_22.7_d7ae2c3c-6620-4717-b85f-6336c42303fe_14.7_8f9802f1-a672-403a-824e-620e4e93207f_0.436_67832bf3-3810-4db8-8a9d-fe7eb8f8a507_6_e458d1ce-50a5-43b2-9dd0-6297e8325ef5_1.49_14449719-d773-43bd-9741-17ce40106734_2_5e4e18a0-7ddf-4dca-abc3-ebc14804c910_10_c352805c-4369-4674-b1a8-c644bcea716e_2_6c8655d4-2130-4b0e-adea-e9a9b0bd3f3c_1.7_86cd5747-0513-4e1f-aef3-77f323c08da6_3_7c9e3dc2-4ee3-490f-af5a-1e033113ac98_0.45_groove+extend_0_76f64105-1ed0-476d-8fe9-8a0d735dfb25_1.11_1400e927-5c58-40be-9c6b-2fe1cb4e9315_0.955"
                        className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-700 filter grayscale group-hover:grayscale-0"
                        title="3D Configurator"
                        frameBorder="0"
                        scrolling="no"
                  ></iframe>

                  {/* Overlay to link to login */}
                  <a 
                        href="https://maker.make.golf/login" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 group-hover:bg-transparent transition-colors duration-500"
                  >
                        <div className="bg-[#1C1C1E]/90 backdrop-blur-md border border-white/10 pl-6 pr-4 py-3 rounded-full flex items-center gap-4 shadow-2xl transform group-hover:scale-105 transition-all duration-300 group-hover:bg-brand-mink group-hover:border-brand-mink">
                           <span className="text-white font-display uppercase tracking-widest text-xs group-hover:text-black font-bold">Launch Studio</span>
                           <div className="w-8 h-8 rounded-full bg-brand-mink group-hover:bg-black flex items-center justify-center text-black group-hover:text-white transition-colors">
                              <Maximize className="w-4 h-4" />
                           </div>
                        </div>
                  </a>
                  
                  {/* Decorative UI Overlay */}
                  <div className="absolute top-6 left-6 z-0 pointer-events-none hidden md:block">
                        <div className="flex flex-col gap-2">
                           <div className="bg-black/60 backdrop-blur px-3 py-1.5 rounded border border-white/10 text-[10px] font-mono text-brand-mink uppercase flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-brand-mink rounded-full animate-pulse"></div>
                              Rendering: 60FPS
                           </div>
                           <div className="bg-black/60 backdrop-blur px-3 py-1.5 rounded border border-white/10 text-[10px] font-mono text-brand-polar/60 uppercase">
                              Model: MB-02_Proto
                           </div>
                        </div>
                  </div>
               </div>
            </FadeIn>
         </div>
      </section>

      {/* --- PRODUCT ARCHITECTURES --- */}
      <section className="py-32 bg-gradient-to-b from-[#1C1C1E] to-[#121212]">
        <div className="container mx-auto px-6">
          <div className="mb-16 flex items-end justify-between border-b border-white/5 pb-8">
            <div>
               <span className="text-brand-mink font-mono text-xs uppercase tracking-widest mb-2 block">The Hardware</span>
               <h2 className="text-4xl md:text-5xl font-display font-medium text-white tracking-tight">Product Architecture</h2>
            </div>
            <Link to="/clubs" className="hidden md:block">
              <Button variant="outline" size="sm" className="rounded-full">View Components</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CLUB_CATEGORIES.map((cat, index) => (
               <Link to="/clubs" key={cat.id} className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-[#242424] border border-white/5 hover:border-brand-mink/30 transition-colors">
                  <div className="absolute top-6 left-6 z-20">
                    <span className="text-[10px] font-mono text-white/90 bg-black/40 backdrop-blur px-2 py-1 rounded">0{index + 1} // {cat.name}</span>
                  </div>
                  
                  <img 
                    src={cat.image} 
                    alt={cat.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out grayscale group-hover:grayscale-0"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-display text-white mb-1">{cat.name}</h3>
                    <p className="text-brand-polar/70 font-sans text-sm font-light max-w-[200px]">
                      {cat.tagline}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-brand-mink opacity-0 group-hover:opacity-100 transition-opacity">
                       Configure <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
               </Link>
            ))}
          </div>
          
          <div className="mt-8 md:hidden">
             <Link to="/clubs">
                <Button variant="outline" size="sm" className="w-full rounded-full">View All Components</Button>
             </Link>
          </div>
        </div>
      </section>

      {/* --- ARTICLES / JOURNAL --- */}
      <section className="py-24 bg-[#151515] border-t border-white/5">
         <div className="container mx-auto px-6">
            <FadeIn>
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-2xl md:text-3xl font-display text-white">Latest from MAKE</h2>
                    <Link to="/about" className="flex items-center gap-2 text-xs font-mono text-brand-polar/60 hover:text-white transition-colors">
                        READ ALL <ArrowRight className="w-3 h-3" />
                    </Link>
                </div>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {ARTICLES.slice(0, 3).map((article, index) => (
                    <FadeIn key={article.id} delay={index * 0.1}>
                        <Link to="/about" className="group block">
                            <div className="relative aspect-video bg-[#242424] overflow-hidden rounded-lg mb-4 border border-white/5 group-hover:border-white/20 transition-colors">
                                <img 
                                    src={article.image} 
                                    alt={article.title}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                />
                                <div className="absolute top-3 left-3">
                                    <span className="bg-black/60 backdrop-blur px-2 py-1 text-[9px] font-mono text-white rounded">
                                        {article.category}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 mb-2 text-[10px] font-mono text-brand-polar/40 uppercase">
                                <span>{article.date}</span>
                            </div>
                            <h3 className="text-lg font-display text-white mb-2 group-hover:text-brand-mink transition-colors leading-tight">
                                {article.title}
                            </h3>
                            <p className="text-brand-polar/50 text-sm font-sans font-light leading-relaxed line-clamp-2">
                                {article.excerpt}
                            </p>
                        </Link>
                    </FadeIn>
                ))}
            </div>
         </div>
      </section>

    </div>
  );
};

export default Home;
