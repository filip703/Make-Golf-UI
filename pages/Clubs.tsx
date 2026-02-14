import React from 'react';
import { motion } from 'framer-motion';
import { CLUB_MODELS } from '../constants';
import Button from '../components/Button';
import FadeIn from '../components/FadeIn';

const Clubs: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-polar pt-20 text-brand-black selection:bg-brand-black selection:text-white">
      {/* Editorial Header */}
      <section className="py-24 container mx-auto px-6">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 border-b border-brand-black/10 pb-16 items-end">
            <div>
              <div className="flex items-center gap-2 mb-6">
                 <span className="w-8 h-px bg-brand-mink"></span>
                 <span className="text-brand-black/60 font-mono text-xs uppercase tracking-widest">
                  The Collection
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-display font-medium text-brand-black leading-none tracking-tight">
                Engineered<br/>To Perform.
              </h1>
            </div>
            <p className="text-lg font-sans font-light text-brand-black/70 pb-2 leading-relaxed max-w-md">
              Three distinct architectures sharing one generative DNA. 
              Each iron is printed from 17-4 Stainless Steel powder and finished by hand in Stockholm.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Models Display */}
      <section className="container mx-auto px-6 py-12">
        <div className="space-y-40">
          {CLUB_MODELS.map((club, index) => (
            <div key={club.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-20`}>
              
              {/* Image Side */}
              <motion.div 
                className="w-full lg:w-1/2 aspect-[4/5] bg-[#E5E7E7] relative overflow-hidden group shadow-2xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                 {/* Distinct Images for each club type (Simulated with better stock) */}
                 <img 
                    src={
                        index === 0 ? "https://images.unsplash.com/photo-1610427847926-22467d5e4620?q=80&w=1974&auto=format&fit=crop" :
                        index === 1 ? "https://images.unsplash.com/photo-1596727284451-b0db0a10c73e?q=80&w=1974&auto=format&fit=crop" :
                        "https://images.unsplash.com/photo-1628256382834-367073b64436?q=80&w=2070&auto=format&fit=crop"
                    }
                    alt={club.name}
                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105"
                 />
                 
                 {/* Technical Specs Overlay - Visible on Hover/Active */}
                 <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="grid grid-cols-2 gap-4 font-mono text-xs">
                       <div>
                          <span className="block text-white/40 uppercase tracking-widest mb-1">Material</span>
                          17-4PH STEEL
                       </div>
                       <div>
                          <span className="block text-white/40 uppercase tracking-widest mb-1">Process</span>
                          DMLS PRINT
                       </div>
                    </div>
                 </div>
              </motion.div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2">
                <FadeIn direction={index % 2 === 1 ? 'left' : 'right'}>
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-brand-mink font-mono text-xs uppercase tracking-widest">Series 0{index + 1}</span>
                    <div className="h-px flex-1 bg-brand-black/10"></div>
                  </div>
                  
                  <h2 className="text-5xl lg:text-6xl font-display font-medium text-brand-black mb-8">{club.name}</h2>
                  <p className="text-brand-black/70 text-lg font-sans font-light leading-relaxed mb-12 max-w-xl">
                    {club.desc} Designed using topology optimization to remove non-structural mass and redistribute it for optimal MOI. The internal lattice structure dampens vibration while maximizing energy transfer.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-12 mb-12 border-t border-brand-black/10 pt-8">
                    <div>
                      <div className="text-3xl font-display text-brand-black mb-1">Soft</div>
                      <div className="text-[10px] text-brand-black/40 uppercase tracking-widest font-mono">Acoustic Profile</div>
                    </div>
                    <div>
                      <div className="text-3xl font-display text-brand-black mb-1">High</div>
                      <div className="text-[10px] text-brand-black/40 uppercase tracking-widest font-mono">MOI Ratio</div>
                    </div>
                  </div>

                  <Button variant="secondary" className="bg-brand-black text-white hover:bg-brand-mink transition-colors px-10 py-4 shadow-lg hover:shadow-xl" size="md">
                    Configure {club.name}
                  </Button>
                </FadeIn>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Manufacturing Note */}
      <section className="bg-brand-polar py-32 border-t border-brand-black/5">
         <div className="container mx-auto px-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 mb-8 text-brand-mink">
               {/* Simple geometric icon */}
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
               </svg>
            </div>
            <h3 className="text-3xl md:text-5xl font-display font-medium text-brand-black mb-8">
              Not Cast. Not Forged. <span className="text-brand-mink">Grown.</span>
            </h3>
            <p className="text-brand-black/60 max-w-2xl mx-auto font-sans font-light text-lg leading-relaxed">
               Our additive manufacturing process builds each club layer by layer, 30 microns at a time. This allows for geometries that are physically impossible to create with traditional molds.
            </p>
         </div>
      </section>
    </div>
  );
};

export default Clubs;