
import React from 'react';
import { motion } from 'framer-motion';
import { CLUB_CATEGORIES } from '../constants';
import Button from '../components/Button';
import FadeIn from '../components/FadeIn';
import { ArrowRight, Crosshair, Wind, CircleDashed } from 'lucide-react';

const Clubs: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F7] pt-20 text-[#111] selection:bg-brand-mink selection:text-white font-sans">
      
      {/* Editorial Header - Light Theme */}
      <section className="py-24 container mx-auto px-6">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 border-b border-[#111]/10 pb-16 items-end">
            <div>
              <div className="flex items-center gap-2 mb-6">
                 <span className="w-8 h-px bg-brand-mink"></span>
                 <span className="text-[#111]/60 font-mono text-xs uppercase tracking-widest">
                  Product Architecture
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-display font-medium text-[#111] leading-[0.9] tracking-tight">
                No Collections.<br/>
                <span className="text-[#111]/40">Just Components.</span>
              </h1>
            </div>
            <p className="text-lg font-sans font-light text-[#111]/70 pb-2 leading-relaxed max-w-md">
              We do not release yearly "series" or mass-produced lines. 
              We offer three distinct chassis architectures—Irons, Wedges, and Putters—each serving as a blank canvas for your biomechanical data.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Category Display - Light Mode */}
      <section className="container mx-auto px-6 py-12">
        <div className="space-y-40">
          {CLUB_CATEGORIES.map((cat, index) => (
            <div key={cat.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-20`}>
              
              {/* Image Side - Clean, bright aesthetic */}
              <motion.div 
                className="w-full lg:w-1/2 aspect-[4/5] bg-white relative overflow-hidden group shadow-xl rounded-sm"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                 {/* Primary Image */}
                 <img 
                    src={cat.image}
                    alt={cat.name}
                    className={`absolute inset-0 w-full h-full transition-all duration-1000 grayscale opacity-90 group-hover:grayscale-0 ${
                       cat.secondaryImage 
                         ? 'group-hover:opacity-0' 
                         : 'group-hover:opacity-100'
                    } ${cat.imageClassName || 'object-cover group-hover:scale-105'}`}
                 />

                 {/* Secondary Image (Hover Reveal) */}
                 {cat.secondaryImage && (
                    <img 
                       src={cat.secondaryImage}
                       alt={`${cat.name} secondary`}
                       className={`absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-all duration-1000 grayscale-0 ${
                          cat.imageClassName || 'object-cover group-hover:scale-105'
                       }`}
                    />
                 )}
                 
                 {/* Specs Floating Card */}
                 <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur border border-[#111]/5 px-6 py-4 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0 z-10">
                    <div className="flex flex-col gap-2">
                       {cat.specs.map((spec, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs font-mono text-[#111]/80">
                             <div className="w-1.5 h-1.5 bg-brand-mink rounded-full"></div>
                             {spec}
                          </div>
                       ))}
                    </div>
                 </div>
              </motion.div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2">
                <FadeIn direction={index % 2 === 1 ? 'left' : 'right'}>
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-brand-mink font-mono text-xs uppercase tracking-widest">Architecture 0{index + 1}</span>
                    <div className="h-px flex-1 bg-[#111]/10"></div>
                  </div>
                  
                  <h2 className="text-5xl lg:text-7xl font-display font-medium text-[#111] mb-4">{cat.name}</h2>
                  <p className="text-xl text-[#111]/40 font-display mb-8">{cat.tagline}</p>
                  
                  <p className="text-[#111]/70 text-lg font-sans font-light leading-relaxed mb-12 max-w-xl">
                    {cat.desc} 
                  </p>
                  
                  <div className="flex items-center gap-6">
                    <Button variant="primary" className="shadow-lg hover:shadow-xl" size="md">
                      Configure {cat.name}
                    </Button>
                    <button className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#111]/40 hover:text-brand-mink transition-colors">
                       View Tech Specs <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </FadeIn>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* "One of One" Philosophy Section */}
      <section className="bg-white py-32 border-t border-[#111]/5 mt-20">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-[#F5F5F7] rounded-full flex items-center justify-center mb-6 text-brand-mink">
                        <Crosshair className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-display text-[#111] mb-2">Precision</h3>
                    <p className="text-[#111]/60 text-sm max-w-xs leading-relaxed">
                        0.03mm tolerance. Tighter than any cast club on the market.
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-[#F5F5F7] rounded-full flex items-center justify-center mb-6 text-brand-mink">
                        <Wind className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-display text-[#111] mb-2">Aerodynamics</h3>
                    <p className="text-[#111]/60 text-sm max-w-xs leading-relaxed">
                        Drag-reducing geometries that maintain stability through impact.
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-[#F5F5F7] rounded-full flex items-center justify-center mb-6 text-brand-mink">
                        <CircleDashed className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-display text-[#111] mb-2">Purity</h3>
                    <p className="text-[#111]/60 text-sm max-w-xs leading-relaxed">
                        Single-piece construction. No epoxy, no weights, no shortcuts.
                    </p>
                </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Clubs;
