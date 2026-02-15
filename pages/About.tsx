
import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import { MapPin, Target, ShieldCheck, ArrowRight, Dna, Fingerprint, History } from 'lucide-react';
import { ARTICLES } from '../constants'; // Importing article data
import Logo from '../components/Logo';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#111111] pt-20 text-brand-polar selection:bg-brand-mink selection:text-white overflow-hidden">
      
      {/* Hero - Softened "The Truth" */}
      <section className="relative py-32 container mx-auto px-6 border-b border-white/5">
         <FadeIn>
            <div className="max-w-4xl relative z-10">
               <div className="flex items-center gap-3 mb-6">
                  <div className="w-1.5 h-1.5 bg-brand-mink rounded-full"></div>
                  <div className="text-brand-polar/60 font-mono text-xs uppercase tracking-widest">Our Philosophy</div>
               </div>
               <h1 className="text-5xl md:text-7xl font-display font-medium text-white mb-10 leading-[1.1]">
                 Golf Deserves<br/>
                 <span className="text-brand-mink">Better.</span>
               </h1>
               <p className="text-xl text-brand-polar/60 font-light font-sans max-w-2xl leading-relaxed mb-8">
                  For too long, golfers have adapted to their equipment. We believe it should be the other way around. By combining biomechanics with additive manufacturing, we create clubs that are simply an extension of you.
               </p>
            </div>
         </FadeIn>
      </section>

      {/* DNA Section */}
      <section className="py-24 bg-[#151515] border-b border-white/5">
         <div className="container mx-auto px-6">
            <FadeIn>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-display text-white mb-4">The MAKE DNA</h2>
                    <div className="w-12 h-1 bg-brand-mink mx-auto"></div>
                </div>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                <FadeIn delay={0.1}>
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-[#1a1a1a] rounded-full flex items-center justify-center mb-6 text-brand-mink">
                            <Fingerprint className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-display text-white mb-3">Hyper-Personal</h3>
                        <p className="text-brand-polar/60 text-sm leading-relaxed">
                            No two swings are alike. Why should clubs be? We treat your swing signature as a unique blueprint for manufacturing.
                        </p>
                    </div>
                </FadeIn>
                <FadeIn delay={0.2}>
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-[#1a1a1a] rounded-full flex items-center justify-center mb-6 text-brand-mink">
                            <Target className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-display text-white mb-3">Honest Performance</h3>
                        <p className="text-brand-polar/60 text-sm leading-relaxed">
                            We strip away the marketing noise. No "miracle materials" or empty promises. Just physics, geometry, and verifiable data.
                        </p>
                    </div>
                </FadeIn>
                <FadeIn delay={0.3}>
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-[#1a1a1a] rounded-full flex items-center justify-center mb-6 text-brand-mink">
                            <History className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-display text-white mb-3">Sustainable Craft</h3>
                        <p className="text-brand-polar/60 text-sm leading-relaxed">
                            Printing on demand means zero waste inventory. We manufacture in Sweden, reducing the carbon footprint of global shipping.
                        </p>
                    </div>
                </FadeIn>
            </div>
         </div>
      </section>

      {/* Founders / Team - Using Local Assets */}
      <section className="py-32 bg-[#0F0F0F] border-b border-white/5">
         <div className="container mx-auto px-6">
            <FadeIn>
               <div className="text-center mb-20">
                  <span className="text-brand-mink font-mono text-xs uppercase tracking-widest mb-2 block">The Founders</span>
                  <h2 className="text-4xl md:text-5xl font-display text-white">Driven by Data.<br/>United by Golf.</h2>
               </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 max-w-6xl mx-auto">
               
               {/* Founder 1: Mårten */}
               <FadeIn delay={0.1}>
                  <div className="group cursor-default">
                     <div className="aspect-square bg-[#1a1a1a] mb-6 overflow-hidden relative border border-white/5 rounded-sm">
                        <img 
                           src="/assets/founders/marten.png" 
                           alt="Mårten Eker" 
                           className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale"
                           onError={(e) => {e.currentTarget.src = "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop"}} // Fallback
                        />
                        <div className="absolute bottom-3 left-3">
                           <div className="bg-brand-mink text-white px-2 py-0.5 text-[10px] font-bold font-mono">
                              HCP +3.2
                           </div>
                        </div>
                     </div>
                     <div className="border-l border-brand-mink pl-4 transition-all duration-300 group-hover:border-white">
                        <h3 className="text-xl font-display text-white mb-1">Mårten Eker</h3>
                        <p className="text-brand-polar/40 font-mono text-[10px] uppercase tracking-widest mb-3">CEO // Founder</p>
                        <p className="text-brand-polar/60 font-sans text-sm font-light leading-relaxed">
                           Engineer from KTH. 25 years of elite golf experience. Believes complex problems require elegant solutions.
                        </p>
                     </div>
                  </div>
               </FadeIn>

               {/* Founder 2: Filip */}
               <FadeIn delay={0.2}>
                  <div className="group cursor-default">
                     <div className="aspect-square bg-[#1a1a1a] mb-6 overflow-hidden relative border border-white/5 rounded-sm">
                        <img 
                           src="/assets/founders/filip.png" 
                           alt="Filip Hector" 
                           className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale"
                           onError={(e) => {e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"}} // Fallback
                        />
                         <div className="absolute bottom-3 left-3">
                           <div className="bg-white/10 backdrop-blur border border-white/10 text-white px-2 py-0.5 text-[10px] font-bold font-mono">
                              HCP 6.2
                           </div>
                        </div>
                     </div>
                     <div className="border-l border-brand-mink pl-4 transition-all duration-300 group-hover:border-white">
                        <h3 className="text-xl font-display text-white mb-1">Filip Hector</h3>
                        <p className="text-brand-polar/40 font-mono text-[10px] uppercase tracking-widest mb-3">VP // CCO</p>
                        <p className="text-brand-polar/60 font-sans text-sm font-light leading-relaxed">
                           GTM & Ops expert. Specialized in scaling businesses and leveraging the latest technology to improve the player experience.
                        </p>
                     </div>
                  </div>
               </FadeIn>

               {/* Founder 3: Erik */}
               <FadeIn delay={0.3}>
                  <div className="group cursor-default">
                     <div className="aspect-square bg-[#1a1a1a] mb-6 overflow-hidden relative border border-white/5 rounded-sm">
                        <img 
                           src="/assets/founders/erik.png" 
                           alt="Erik Paulsson" 
                           className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale"
                           onError={(e) => {e.currentTarget.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"}} // Fallback
                        />
                         <div className="absolute bottom-3 left-3">
                           <div className="bg-white/10 backdrop-blur border border-white/10 text-white px-2 py-0.5 text-[10px] font-bold font-mono">
                              HCP 16.9
                           </div>
                        </div>
                     </div>
                     <div className="border-l border-brand-mink pl-4 transition-all duration-300 group-hover:border-white">
                        <h3 className="text-xl font-display text-white mb-1">Erik Paulsson</h3>
                        <p className="text-brand-polar/40 font-mono text-[10px] uppercase tracking-widest mb-3">Investor // GTM</p>
                        <p className="text-brand-polar/60 font-sans text-sm font-light leading-relaxed">
                           London-based investor. Ambitious amateur golfer chasing single digits.
                        </p>
                     </div>
                  </div>
               </FadeIn>

            </div>
         </div>
      </section>

      {/* ARTICLES / TRANSMISSIONS */}
      <section className="py-24 bg-[#111111]">
         <div className="container mx-auto px-6">
            <FadeIn>
                <div className="flex items-end justify-between mb-12 border-b border-white/5 pb-6">
                    <div>
                        <span className="text-brand-mink font-mono text-xs uppercase tracking-widest mb-2 block">Make Golf Journal</span>
                        <h2 className="text-3xl md:text-4xl font-display text-white">Insights & Articles</h2>
                        <p className="text-brand-polar/40 text-sm mt-2">Thoughts on design, engineering, and the future of the game.</p>
                    </div>
                    <a href="#" className="hidden md:flex items-center gap-2 text-xs font-mono text-brand-polar/50 hover:text-white transition-colors">
                        VIEW ARCHIVE <ArrowRight className="w-3 h-3" />
                    </a>
                </div>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {ARTICLES.map((article, index) => (
                    <FadeIn key={article.id} delay={index * 0.1}>
                        <div className="group cursor-pointer">
                            <div className="relative aspect-[16/10] bg-[#1a1a1a] overflow-hidden border border-white/5 mb-6">
                                <img 
                                    src={article.image} 
                                    alt={article.title}
                                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-black/80 backdrop-blur border border-white/10 px-2 py-1 text-[9px] font-mono text-brand-mink uppercase tracking-widest">
                                        {article.category}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 mb-2 text-[10px] font-mono text-brand-polar/30 uppercase tracking-widest">
                                <span>{article.date}</span>
                                <span className="w-3 h-px bg-white/10"></span>
                                <span>2 MIN READ</span>
                            </div>
                            <h3 className="text-xl font-display text-white mb-3 group-hover:text-brand-mink transition-colors">{article.title}</h3>
                            <p className="text-brand-polar/50 text-sm font-sans font-light leading-relaxed mb-4">
                                {article.excerpt}
                            </p>
                            <span className="text-brand-polar/40 text-xs font-mono group-hover:text-white transition-colors inline-flex items-center gap-2">
                                Read Article <ArrowRight className="w-3 h-3" />
                            </span>
                        </div>
                    </FadeIn>
                ))}
            </div>
         </div>
      </section>

    </div>
  );
};

export default About;
