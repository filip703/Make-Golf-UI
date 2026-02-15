
import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import { MapPin, Target, ShieldCheck, ArrowRight, Users, Trophy } from 'lucide-react';
import { ARTICLES } from '../constants'; // Importing article data

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black pt-20 text-brand-polar selection:bg-brand-mink selection:text-white">
      
      {/* Hero - The Brutal Truth */}
      <section className="relative py-32 container mx-auto px-6 border-b border-white/5">
         <FadeIn>
            <div className="max-w-4xl">
               <div className="flex items-center gap-3 mb-6">
                  <div className="w-1.5 h-1.5 bg-brand-mink rounded-full"></div>
                  <div className="text-brand-polar/60 font-mono text-xs uppercase tracking-widest">The Conviction</div>
               </div>
               <h1 className="text-5xl md:text-7xl font-display font-medium text-white mb-10 leading-[0.95]">
                 Modern Golf Gear<br/>
                 <span className="text-brand-mink">Is A Lie.</span>
               </h1>
               <p className="text-xl text-brand-polar/60 font-light font-sans max-w-2xl leading-relaxed mb-8">
                  We don't do gimmicks, stock club heads, or guesswork. We analyse your swing data, and we 3D print clubs that fit <strong>you</strong>.
               </p>
               <p className="text-lg text-brand-polar/80 font-mono max-w-2xl leading-relaxed border-l-2 border-brand-mink pl-6 italic">
                  "No noise. No hiding. Just you, the result, and golf the way it should be played."
               </p>
            </div>
         </FadeIn>
      </section>

      {/* Vision */}
      <section className="py-24 bg-[#0a0a0a] border-b border-white/5">
         <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <FadeIn>
               <div className="space-y-8">
                  <h2 className="text-3xl font-display text-white">Our Vision</h2>
                  <div className="space-y-6 text-brand-polar/60 font-sans font-light leading-relaxed text-lg">
                     <p>
                        To end the era of one-size-fits-all golf. We envision a game where every club is the perfect extension of the player and their performance.
                     </p>
                     <p>
                        A more enjoyable game where there is no blaming the fit, no more fighting the club.
                     </p>
                     <div className="flex items-center gap-4 pt-4">
                        <div className="flex flex-col">
                           <span className="text-3xl font-display text-white">2.5M</span>
                           <span className="text-[10px] font-mono text-brand-polar/40 uppercase tracking-widest">Clubs Broken Annually</span>
                        </div>
                        <div className="w-px h-10 bg-white/10"></div>
                        <div className="flex flex-col">
                           <span className="text-3xl font-display text-white">44%</span>
                           <span className="text-[10px] font-mono text-brand-polar/40 uppercase tracking-widest">Growth Outside US</span>
                        </div>
                     </div>
                  </div>
               </div>
            </FadeIn>
            <FadeIn direction="left">
               <div className="relative aspect-[4/5] bg-black border border-white/10 p-2">
                  <img 
                    src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1931&auto=format&fit=crop" 
                    alt="Stockholm Design Lab"
                    className="w-full h-full object-cover grayscale opacity-60 hover:opacity-100 transition-opacity duration-700"
                  />
                  <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur px-4 py-2 border border-white/10">
                     <div className="flex items-center gap-2 text-xs font-mono text-white">
                        <MapPin className="w-3 h-3 text-brand-mink" /> Stockholm HQ
                     </div>
                  </div>
               </div>
            </FadeIn>
         </div>
      </section>

      {/* Founders / Team - REAL DATA */}
      <section className="py-32 bg-[#050505] border-b border-white/5">
         <div className="container mx-auto px-6">
            <FadeIn>
               <div className="text-center mb-20">
                  <span className="text-brand-mink font-mono text-xs uppercase tracking-widest mb-2 block">The Team</span>
                  <h2 className="text-4xl md:text-5xl font-display text-white">Built by Founders.<br/>Driven by Data.</h2>
               </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 max-w-6xl mx-auto">
               
               {/* Founder 1: Mårten */}
               <FadeIn delay={0.1}>
                  <div className="group cursor-default">
                     <div className="aspect-square bg-brand-surface mb-6 overflow-hidden relative border border-white/5 rounded-sm">
                        <img 
                           src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop" 
                           alt="Mårten Eker" 
                           className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
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
                           Engineer from KTH with expertise in 7 CAD systems. "Likes it when it's complicated." 25 years of elite golf experience.
                        </p>
                     </div>
                  </div>
               </FadeIn>

               {/* Founder 2: Filip */}
               <FadeIn delay={0.2}>
                  <div className="group cursor-default">
                     <div className="aspect-square bg-brand-surface mb-6 overflow-hidden relative border border-white/5 rounded-sm">
                        <img 
                           src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop" 
                           alt="Filip Hector" 
                           className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
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
                           GTM & Ops expert. Previously CEO at Nonius Nordics. Specialized in business scale-up and leveraging the latest technology.
                        </p>
                     </div>
                  </div>
               </FadeIn>

               {/* Founder 3: Erik */}
               <FadeIn delay={0.3}>
                  <div className="group cursor-default">
                     <div className="aspect-square bg-brand-surface mb-6 overflow-hidden relative border border-white/5 rounded-sm">
                        <img 
                           src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" 
                           alt="Erik Paulsson" 
                           className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
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
                           London-based investor. Exit with Bruce. Enterprise Account Executive at Braze. Ambitious amateur golfer chasing single digits.
                        </p>
                     </div>
                  </div>
               </FadeIn>

            </div>
         </div>
      </section>

      {/* ARTICLES / TRANSMISSIONS */}
      <section className="py-24 bg-brand-black">
         <div className="container mx-auto px-6">
            <FadeIn>
                <div className="flex items-end justify-between mb-12 border-b border-white/5 pb-6">
                    <div>
                        <span className="text-brand-mink font-mono text-xs uppercase tracking-widest mb-2 block">The Journal</span>
                        <h2 className="text-3xl md:text-4xl font-display text-white">Transmissions</h2>
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
                            <div className="relative aspect-[16/10] bg-[#111] overflow-hidden border border-white/5 mb-6">
                                <img 
                                    src={article.image} 
                                    alt={article.title}
                                    className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-brand-black/80 backdrop-blur border border-white/10 px-2 py-1 text-[9px] font-mono text-brand-mink uppercase tracking-widest">
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
