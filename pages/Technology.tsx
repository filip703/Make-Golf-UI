import React from 'react';
import FadeIn from '../components/FadeIn';

const Technology: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black text-brand-polar pt-20">
      
      {/* Tech Hero */}
      <section className="py-32 container mx-auto px-6 border-b border-white/5">
        <FadeIn>
          <div className="max-w-4xl">
             <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-1.5 bg-brand-mink rounded-full"></div>
                <div className="text-brand-polar/60 font-mono text-xs uppercase tracking-widest">Our Technology Stack</div>
             </div>
             <h1 className="text-5xl md:text-8xl font-display font-medium text-white mb-10 leading-[0.95]">
               Digital Code.<br/>
               <span className="text-brand-polar/20">Physical Reality.</span>
             </h1>
             <p className="text-xl text-brand-polar/60 font-light font-sans max-w-2xl leading-relaxed">
                We have collapsed the supply chain into a single, seamless digital workflow. From launch monitor to laser sintering in 48 hours.
             </p>
          </div>
        </FadeIn>
      </section>

      {/* Step 1: Ingest */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <FadeIn direction="right">
                <div className="relative aspect-video bg-[#111] overflow-hidden rounded-sm border border-white/10 group">
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      poster="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                      className="w-full h-full object-cover opacity-50 mix-blend-screen group-hover:opacity-80 transition-all duration-700"
                    >
                       <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_3840_2160_30fps.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-grid opacity-20"></div>
                    {/* UI Overlay */}
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur px-3 py-1 border border-brand-mink/30 rounded text-[10px] font-mono text-brand-mink">
                      INPUT: TRACKMAN_4
                    </div>
                </div>
             </FadeIn>
             
             <FadeIn>
                <span className="text-brand-mink font-display font-bold text-5xl opacity-20 block mb-6">01</span>
                <h2 className="text-3xl font-display text-white mb-6">Data Ingestion</h2>
                <div className="space-y-6 text-brand-polar/60 font-sans font-light">
                  <p>
                     Every great design begins with truth. We ingest raw CSV data from industry-standard launch monitors (TrackMan, GCQuad, Foresight).
                  </p>
                  <p>
                     Our proprietary engine analyzes thousands of data points—looking specifically at closure rate, attack angle consistency, and lie dynamic—to build a biomechanical profile of your swing.
                  </p>
                </div>
             </FadeIn>
          </div>
        </div>
      </section>

      {/* Step 2: Generative */}
      <section className="py-24 border-b border-white/5 bg-[#0f0f0f]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center lg:flex-row-reverse">
             <FadeIn className="order-2 lg:order-1">
                <span className="text-brand-mink font-display font-bold text-5xl opacity-20 block mb-6">02</span>
                <h2 className="text-3xl font-display text-white mb-6">Generative Design</h2>
                <div className="space-y-6 text-brand-polar/60 font-sans font-light">
                  <p>
                     We don't draw clubs; we grow them. Using topology optimization algorithms, we simulate impact forces to determine exactly where material is needed for structural integrity and where it can be removed for weight distribution.
                  </p>
                  <p>
                     The result is an internal lattice structure that dampens vibration while maximizing MOI (Moment of Inertia) for your specific miss-pattern.
                  </p>
                </div>
             </FadeIn>

             <FadeIn direction="left" className="order-1 lg:order-2">
                <div className="relative aspect-square bg-[#111] overflow-hidden rounded-sm border border-white/10 group">
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      poster="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1974&auto=format&fit=crop"
                      className="w-full h-full object-cover opacity-60 mix-blend-screen group-hover:opacity-100 transition-all duration-700"
                    >
                       <source src="https://videos.pexels.com/video-files/1851190/1851190-uhd_3840_2160_25fps.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-mink/10 to-transparent mix-blend-overlay"></div>
                    <div className="absolute bottom-6 left-6 font-mono text-xs text-brand-polar/60">
                       <div className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-brand-mink rounded-full animate-pulse"></span>
                          SIMULATION RUNNING...
                       </div>
                    </div>
                </div>
             </FadeIn>
          </div>
        </div>
      </section>

      {/* Step 3: Manufacturing */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <FadeIn direction="right">
                <div className="relative aspect-video bg-[#111] overflow-hidden rounded-sm border border-white/10 group">
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      poster="https://images.unsplash.com/photo-1622543925917-0985c7d1e8c3?q=80&w=1974&auto=format&fit=crop"
                      className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"
                    >
                       <source src="https://videos.pexels.com/video-files/4722956/4722956-uhd_3840_2160_25fps.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-brand-mink/5 mix-blend-color-dodge"></div>
                </div>
             </FadeIn>
             
             <FadeIn>
                <span className="text-brand-mink font-display font-bold text-5xl opacity-20 block mb-6">03</span>
                <h2 className="text-3xl font-display text-white mb-6">Additive Manufacturing</h2>
                <div className="space-y-6 text-brand-polar/60 font-sans font-light">
                  <p>
                     Direct Metal Laser Sintering (DMLS) fuses 17-4PH Stainless Steel powder layer by layer. Each layer is 30 microns thick—finer than a human hair.
                  </p>
                  <p>
                     This process allows for complex internal geometries that traditional casting or forging simply cannot replicate. The club head is cured in a vacuum-sealed argon chamber to ensure metallurgical purity.
                  </p>
                </div>
             </FadeIn>
          </div>
        </div>
      </section>

      {/* Partners - Subtle and Credible */}
      <section className="py-24 bg-brand-black">
          <div className="container mx-auto px-6 text-center">
              <h3 className="text-brand-polar/30 font-mono text-[10px] uppercase tracking-[0.3em] mb-12">Engineering Partners</h3>
              <div className="flex flex-wrap justify-center gap-16 md:gap-24 opacity-30 grayscale hover:opacity-60 transition-all duration-500 cursor-default">
                  <div className="text-xl font-bold font-display text-white">SANDVIK</div>
                  <div className="text-xl font-bold font-display text-white">EOS</div>
                  <div className="text-xl font-bold font-display text-white">AUTODESK</div>
                  <div className="text-xl font-bold font-display text-white">NVIDIA</div>
              </div>
          </div>
      </section>

    </div>
  );
};

export default Technology;