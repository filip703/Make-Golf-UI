
import React, { useState } from 'react';
import { ExternalLink, Sliders, Cpu, Crosshair } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import Button from '../components/Button';

const Configurator: React.FC = () => {
  // The official external tool URL
  const MAKER_URL = "https://maker.make.golf/configurator?configurationState=a_7e175a18-1026-47cf-b224-16b8a8b0fa90";
  
  const [hoveredModel, setHoveredModel] = useState<string | null>(null);

  const MODELS = [
    {
      id: 'blade',
      name: 'MB-01 // BLADE',
      desc: 'Pure muscle back geometry with optimized CG location.',
      // Clean, raw metal blade look
      image: 'https://images.unsplash.com/photo-1628256382834-367073b64436?q=80&w=2070&auto=format&fit=crop',
      features: ['Thin Topline', 'Workability', 'High COG']
    },
    {
      id: 'cavity',
      name: 'CB-01 // CAVITY',
      desc: 'Perimeter weighted for forgiveness without sacrificing feel.',
      // Slightly more complex geometry
      image: 'https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?q=80&w=1576&auto=format&fit=crop',
      features: ['Mid Offset', 'Forgiveness', 'Mid COG']
    },
    {
      id: 'hollow',
      name: 'UB-01 // HOLLOW',
      desc: 'Hollow body construction for maximum ball speeds.',
      // High tech/modern look
      image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070&auto=format&fit=crop',
      features: ['Thick Topline', 'Distance', 'Low COG']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1C1C1E] to-[#121212] pt-24 text-brand-polar selection:bg-brand-mink selection:text-white pb-20">
      
      {/* Header */}
      <section className="container mx-auto px-6 mb-16">
        <FadeIn>
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
               <div className="w-1.5 h-1.5 bg-brand-mink rounded-full animate-pulse"></div>
               <div className="text-brand-polar/60 font-mono text-xs uppercase tracking-widest">3D Studio Beta</div>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-medium text-white mb-6">
              Configure Your Weapon.
            </h1>
            <p className="text-xl text-brand-polar/60 font-light font-sans max-w-2xl leading-relaxed">
               Select a chassis architecture to begin. All parameters—loft, lie, offset, and weight distribution—can be adjusted in the 3D engine.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Selector Grid */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {MODELS.map((model, idx) => (
            <FadeIn key={model.id} delay={idx * 0.1}>
              <a 
                href={MAKER_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative block h-[500px] bg-[#242424] rounded-xl overflow-hidden border border-white/5 hover:border-brand-mink/50 transition-all duration-500 shadow-xl"
                onMouseEnter={() => setHoveredModel(model.id)}
                onMouseLeave={() => setHoveredModel(null)}
              >
                {/* Image Background */}
                <div className="absolute inset-0">
                   <img 
                      src={model.image} 
                      alt={model.name}
                      className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700 ease-out"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E] via-[#1C1C1E]/50 to-transparent opacity-90"></div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                   
                   {/* Floating specs (visible on hover) */}
                   <div className={`absolute top-8 left-8 transition-opacity duration-500 ${hoveredModel === model.id ? 'opacity-100' : 'opacity-0'}`}>
                      <div className="flex flex-col gap-2">
                         {model.features.map((feat, i) => (
                            <span key={i} className="text-[10px] font-mono uppercase tracking-widest text-brand-mink bg-black/50 backdrop-blur px-2 py-1 rounded border border-white/10 self-start">
                               {feat}
                            </span>
                         ))}
                      </div>
                   </div>

                   <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex items-center gap-3 mb-3 opacity-60 group-hover:opacity-100 transition-opacity">
                         <span className="text-xs font-mono text-brand-mink">0{idx + 1}</span>
                         <span className="h-px w-8 bg-brand-mink"></span>
                      </div>
                      <h3 className="text-3xl font-display text-white mb-2">{model.name}</h3>
                      <p className="text-brand-polar/60 text-sm font-light leading-relaxed mb-8 max-w-[250px]">
                         {model.desc}
                      </p>
                      
                      <Button variant="outline" size="sm" className="w-full group-hover:bg-brand-mink group-hover:text-white group-hover:border-brand-mink transition-all rounded-md">
                         Launch Configurator <ExternalLink className="w-3 h-3 ml-2" />
                      </Button>
                   </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Direct Link Footer */}
      <section className="container mx-auto px-6 mt-20 border-t border-white/5 pt-12">
         <FadeIn>
            <div className="glass-panel p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-8">
               <div>
                  <h4 className="text-xl font-display text-white mb-2">Already have a fit file?</h4>
                  <p className="text-brand-polar/50 text-sm font-mono">Upload your JSON data to bypass the visual configurator.</p>
               </div>
               <div className="flex gap-4">
                  <Button variant="secondary" size="md" className="rounded-md">Upload Data</Button>
                  <a href={MAKER_URL} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="md" className="rounded-md">Skip to Editor &rarr;</Button>
                  </a>
               </div>
            </div>
         </FadeIn>
      </section>

    </div>
  );
};

export default Configurator;
