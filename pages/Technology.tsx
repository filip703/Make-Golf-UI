
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

      {/* Partners - Updated with Correct Data from Deck */}
      <section className="py-24 bg-brand-black">
          <div className="container mx-auto px-6 text-center">
              <h3 className="text-brand-polar/30 font-mono text-[10px] uppercase tracking-[0.3em] mb-12">Supply Chain & Tech Partners</h3>
              <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 transition-all duration-500 hover:opacity-100">
                  
                  {/* Sandvik */}
                  <div className="flex flex-col items-center gap-2 group cursor-default">
                    <div className="w-32 h-12 flex items-center justify-center">
                        <svg viewBox="0 0 200 40" fill="currentColor" className="w-full text-white">
                            <path d="M18.5 28.2L12.1 11.4h-3.6l6.4 16.8h3.6zm13.1-9.9c0-3.6-2.5-5.9-6.3-5.9-2.3 0-4.3.9-5.4 2.5l-.6-2.1h-3.3v16.4h3.7v-9.6c0-1.8 1.1-3 2.8-3 1.6 0 2.6 1.1 2.6 2.9v9.7h3.7v-10.9zm13.2-6.9h-3.7v16.8h3.7v-1.6c1.1 1.2 2.7 1.9 4.8 1.9 3.8 0 6.6-2.9 6.6-7.3 0-4.4-2.8-7.3-6.6-7.3-2.1 0-3.7.7-4.8 1.9v-4.4zm3.7 11.8v-3.2c.6-.9 1.6-1.4 2.7-1.4 1.9 0 3.1 1.5 3.1 4s-1.2 4-3.1 4c-1.1 0-2.1-.5-2.7-1.4v-2zm13.5-11.8l4.4 11.6 4.4-11.6h3.9l-6.4 16.8h-3.8l-6.4-16.8h3.9zm13.3 0h3.7v16.8h-3.7V11.4zm10.7 0h3.7v6.6l5.7-6.6h4.6l-6.1 6.8 6.5 10h-4.6l-4.4-7.2-1.7 1.9v5.3h-3.7V11.4z"/>
                        </svg>
                    </div>
                    <span className="text-[9px] font-mono text-brand-polar/20 opacity-0 group-hover:opacity-100 transition-opacity">ADDITIVE MFG</span>
                  </div>
                  
                  {/* Tritone - Text Placeholder */}
                  <div className="flex flex-col items-center gap-2 group cursor-default">
                    <div className="h-12 flex items-center">
                        <span className="text-2xl font-display font-bold text-white tracking-tight">Tritone</span>
                    </div>
                    <span className="text-[9px] font-mono text-brand-polar/20 opacity-0 group-hover:opacity-100 transition-opacity">MOLDJET TECH</span>
                  </div>

                  {/* Oerlikon - Text Placeholder */}
                  <div className="flex flex-col items-center gap-2 group cursor-default">
                    <div className="h-12 flex items-center">
                        <span className="text-2xl font-display font-bold text-white italic">oerlikon</span>
                    </div>
                    <span className="text-[9px] font-mono text-brand-polar/20 opacity-0 group-hover:opacity-100 transition-opacity">COATING</span>
                  </div>

                  {/* Plasmotion - Text Placeholder */}
                  <div className="flex flex-col items-center gap-2 group cursor-default">
                    <div className="h-12 flex items-center">
                        <span className="text-xl font-display font-light text-white tracking-wider">plasmotion</span>
                    </div>
                    <span className="text-[9px] font-mono text-brand-polar/20 opacity-0 group-hover:opacity-100 transition-opacity">POLISHING</span>
                  </div>

                  {/* Animech - Text Placeholder */}
                  <div className="flex flex-col items-center gap-2 group cursor-default">
                    <div className="h-12 flex items-center">
                        <span className="text-xl font-display font-bold text-white uppercase tracking-wider">ANI<br/>MECH</span>
                    </div>
                    <span className="text-[9px] font-mono text-brand-polar/20 opacity-0 group-hover:opacity-100 transition-opacity">CONFIGURATOR</span>
                  </div>

              </div>
          </div>
      </section>

    </div>
  );
};

export default Technology;
