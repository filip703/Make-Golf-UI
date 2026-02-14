
import React from 'react';
import { motion } from 'framer-motion';
import { CLUB_CATEGORIES } from '../constants';
import Button from '../components/Button';
import FadeIn from '../components/FadeIn';
import { Link } from 'react-router-dom';

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
                Generative<br/>Hardware.
              </h1>
            </div>
            <p className="text-lg font-sans font-light text-brand-black/70 pb-2 leading-relaxed max-w-md">
              From tee to green, every tool in your bag should be an extension of your body. 
              We utilize 17-4PH Stainless Steel and advanced sintering to create geometries that adapt to your biomechanics.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Categories Display */}
      <section className="container mx-auto px-6 py-12">
        <div className="space-y-40">
          {CLUB_CATEGORIES.map((cat, index) => (
            <div key={cat.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-20`}>
              
              {/* Image Side */}
              <motion.div 
                className="w-full lg:w-1/2 aspect-[4/5] bg-black relative overflow-hidden group shadow-2xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                 <img 
                    src={cat.image}
                    alt={cat.name}
                    className="object-cover w-full h-full grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105"
                 />
                 
                 {/* Overlay */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </motion.div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2">
                <FadeIn direction={index % 2 === 1 ? 'left' : 'right'}>
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-brand-mink font-mono text-xs uppercase tracking-widest">Category 0{index + 1}</span>
                    <div className="h-px flex-1 bg-brand-black/10"></div>
                  </div>
                  
                  <h2 className="text-5xl lg:text-7xl font-display font-medium text-brand-black mb-8">{cat.name}</h2>
                  <p className="text-brand-black/70 text-lg font-sans font-light leading-relaxed mb-12 max-w-xl">
                    {cat.desc} Engineered to remove material where it isn't needed and place it exactly where it optimizes your performance.
                  </p>
                  
                  <Link to="/configurator">
                    <Button variant="secondary" className="bg-brand-black text-white hover:bg-brand-mink transition-colors px-10 py-4 shadow-lg hover:shadow-xl" size="md">
                      Configure {cat.name}
                    </Button>
                  </Link>
                </FadeIn>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Manufacturing Note */}
      <section className="bg-brand-black py-32 text-white">
         <div className="container mx-auto px-6 flex flex-col items-center text-center">
            <h3 className="text-3xl md:text-5xl font-display font-medium mb-8">
              Start with your DNA.
            </h3>
            <p className="text-brand-polar/60 max-w-2xl mx-auto font-sans font-light text-lg leading-relaxed mb-12">
               Don't buy off the rack. Create a profile, upload your data, and let our engine design the perfect set for you.
            </p>
            <Link to="/ai-fitting">
                <Button variant="primary" size="lg">GO TO AI FITTING</Button>
            </Link>
         </div>
      </section>
    </div>
  );
};

export default Clubs;
