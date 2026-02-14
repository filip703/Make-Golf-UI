
import React from 'react';
import { Layers, Zap, Scan, ArrowRight, Microscope, Ruler, Crosshair } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Technology: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black text-brand-polar pt-20">
      
      {/* Tech Hero */}
      <section className="py-32 container mx-auto px-6 border-b border-white/5 relative overflow-hidden">
        {/* Abstract Data Background */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none overflow-hidden">
           <div className="w-[200%] h-[200%] border border-brand-mink/20 rounded-full absolute -top-1/2 -right-1/2 animate-spin-slow"></div>
           <div className="w-[150%] h-[150%] border border-dashed border-white/10 rounded-full absolute -top-[25%] -right-[25%] animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
        </div>

        <FadeIn>
          <div className="max-w-4xl relative z-10">
             <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-1.5 bg-brand-mink rounded-full animate-pulse"></div>
                <div className="text-brand-polar/60 font-mono text-xs uppercase tracking-widest">Our Technology Stack</div>
             </div>
             <h1 className="text-5xl md:text-8xl font-display font-medium text-white mb-10 leading-[0.95]">
               Digital Code.<br/>
               <span className="text-brand-polar/20">Physical Reality.</span>
             </h1>
             <p className="text-xl text-brand-polar/60 font-light font-sans max-w-2xl leading-relaxed mb-8">
                The golf industry is stuck in the casting age. We have collapsed the supply chain into a single, seamless digital workflow. From launch monitor data to laser sintering in 48 hours.
             </p>
             <Link to="/configurator">
                 <Button variant="outline" className="text-brand-mink border-brand-mink/30 hover:bg-brand-mink hover:text-white">
                    Experience 3D Configurator
                 </Button>
             </Link>
          </div>
        </FadeIn>
      </section>

      {/* --- SECTION 1: THE ANALYSIS (WHY) --- */}
      <section className="py-32 border-b border-white/5 bg-[#080808]">
        <div className="container mx-auto px-6">
            <div className="mb-20">
                <span className="text-brand-mink font-display font-bold text-5xl opacity-20 block mb-6">01</span>
                <h2 className="text-4xl md:text-6xl font-display text-white mb-6">The Analysis Core</h2>
                <p className="text-brand-polar/60 text-lg font-light max-w-3xl">
                    Most fitters look at "what" happened (ball flight). We analyze "why" it happened (delivery dynamics). By ingesting raw CSV data from Trackman or GCQuad, our engine maps your unique delivery DNA.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Visual Matrix */}
                <FadeIn className="bg-[#111] border border-white/5 p-8 rounded-lg shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-20">
                        <Scan className="w-12 h-12 text-brand-polar" />
                    </div>
                    <h3 className="text-white font-display text-2xl mb-8">Parametric Translation Matrix</h3>
                    
                    <div className="space-y-6">
                        {/* Mapping 1 */}
                        <div className="relative">
                            <div className="flex justify-between items-center mb-2 text-xs font-mono uppercase tracking-widest text-brand-polar/50">
                                <span>Input (Biometrics)</span>
                                <span>Output (Geometry)</span>
                            </div>
                            <div className="flex items-center justify-between bg-black/50 p-4 border border-white/10 rounded">
                                <div className="text-brand-mink font-bold">Steep Attack Angle (&gt;5&deg;)</div>
                                <ArrowRight className="w-4 h-4 text-brand-polar/20" />
                                <div className="text-white font-bold text-right">Increased Sole Camber<br/><span className="text-[10px] text-brand-polar/50 font-mono font-normal">Prevents digging</span></div>
                            </div>
                        </div>

                        {/* Mapping 2 */}
                        <div className="relative">
                            <div className="flex items-center justify-between bg-black/50 p-4 border border-white/10 rounded">
                                <div className="text-blue-400 font-bold">Heel Strike Pattern</div>
                                <ArrowRight className="w-4 h-4 text-brand-polar/20" />
                                <div className="text-white font-bold text-right">CG Shifted Toe-ward<br/><span className="text-[10px] text-brand-polar/50 font-mono font-normal">Gear effect correction</span></div>
                            </div>
                        </div>

                        {/* Mapping 3 */}
                        <div className="relative">
                            <div className="flex items-center justify-between bg-black/50 p-4 border border-white/10 rounded">
                                <div className="text-yellow-400 font-bold">High Closure Rate</div>
                                <ArrowRight className="w-4 h-4 text-brand-polar/20" />
                                <div className="text-white font-bold text-right">Reduced Face Progression<br/><span className="text-[10px] text-brand-polar/50 font-mono font-normal">Delays impact timing</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/5 text-center">
                        <div className="inline-flex items-center gap-2 text-[10px] font-mono text-brand-polar/30 uppercase">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            AI Processing Active
                        </div>
                    </div>
                </FadeIn>

                {/* Explanation */}
                <div className="flex flex-col justify-center space-y-12">
                     <FadeIn delay={0.2}>
                         <div className="flex gap-4">
                             <div className="bg-brand-mink/10 p-3 h-fit rounded-sm border border-brand-mink/20">
                                 <Crosshair className="w-6 h-6 text-brand-mink" />
                             </div>
                             <div>
                                 <h4 className="text-white font-display text-xl mb-2">Impact Location Consistency</h4>
                                 <p className="text-brand-polar/50 font-mono text-sm leading-relaxed">
                                     We map your heatmap of strikes. If you consistently miss 4mm high on the face, we vertically elevate the Center of Gravity (CG) to align with your impact, maximizing smash factor and consistency.
                                 </p>
                             </div>
                         </div>
                     </FadeIn>

                     <FadeIn delay={0.4}>
                         <div className="flex gap-4">
                             <div className="bg-white/5 p-3 h-fit rounded-sm border border-white/10">
                                 <Ruler className="w-6 h-6 text-brand-polar" />
                             </div>
                             <div>
                                 <h4 className="text-white font-display text-xl mb-2">Turf Interaction Dynamics</h4>
                                 <p className="text-brand-polar/50 font-mono text-sm leading-relaxed">
                                     Your angle of attack and divot depth dictate the sole geometry. We generate the exact bounce angle and leading edge grind needed to ensure the club exits the turf as efficiently as it enters.
                                 </p>
                             </div>
                         </div>
                     </FadeIn>
                </div>
            </div>
        </div>
      </section>

      {/* --- SECTION 2: THE GENERATION (HOW) --- */}
      <section className="py-32 border-b border-white/5">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center lg:flex-row-reverse">
                 <div className="order-2 lg:order-1">
                    <FadeIn>
                        <span className="text-brand-mink font-display font-bold text-5xl opacity-20 block mb-6">02</span>
                        <h2 className="text-4xl md:text-6xl font-display text-white mb-8">Generative Topology</h2>
                        
                        <div className="space-y-8">
                            <p className="text-brand-polar/60 text-lg font-light">
                                Once the parameters are set, we don't manually draw the club. We grow it. Using <strong>nTopology</strong> software, we run thousands of simulations to create an internal lattice structure.
                            </p>
                            
                            <ul className="space-y-4 border-l-2 border-white/10 pl-6">
                                <li className="flex flex-col">
                                    <strong className="text-white font-display text-lg">Mass Optimization</strong>
                                    <span className="text-brand-polar/50 font-mono text-sm">Material is removed from low-stress areas and redistributed to the perimeter.</span>
                                </li>
                                <li className="flex flex-col">
                                    <strong className="text-white font-display text-lg">Acoustic Tuning</strong>
                                    <span className="text-brand-polar/50 font-mono text-sm">The internal lattice is tuned to dampen specific frequencies, creating a forged-like feel at impact.</span>
                                </li>
                            </ul>
                        </div>
                    </FadeIn>
                 </div>

                 <div className="order-1 lg:order-2">
                    <FadeIn direction="left">
                        <div className="relative aspect-square bg-[#111] overflow-hidden rounded-lg border border-white/10 shadow-[0_0_100px_rgba(255,34,76,0.1)] group">
                             {/* Simulation Video/Gif Placeholder */}
                             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1974&auto=format&fit=crop')] bg-cover opacity-40 mix-blend-luminosity"></div>
                             
                             {/* Overlay UI */}
                             <div className="absolute inset-0 p-8 flex flex-col justify-between">
                                 <div className="flex justify-between items-start">
                                     <div className="bg-black/80 backdrop-blur px-3 py-1 rounded border border-brand-mink/30 text-[10px] font-mono text-brand-mink uppercase">
                                         Topology Optimization
                                     </div>
                                     <div className="text-right">
                                         <div className="text-2xl font-display font-bold text-white">ITERATION 4092</div>
                                         <div className="text-xs font-mono text-brand-polar/50">Mass: 268.4g</div>
                                     </div>
                                 </div>
                                 
                                 {/* Grid Lines */}
                                 <div className="w-full h-px bg-white/20 relative">
                                     <div className="absolute top-0 left-0 h-1 w-[70%] bg-brand-mink"></div>
                                 </div>
                             </div>
                        </div>
                    </FadeIn>
                 </div>
            </div>
        </div>
      </section>

      {/* --- SECTION 3: MANUFACTURING (MATERIAL) --- */}
      <section className="py-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
            <div className="mb-20 text-center">
                 <span className="text-brand-mink font-display font-bold text-5xl opacity-20 block mb-6">03</span>
                 <h2 className="text-4xl md:text-6xl font-display text-white mb-6">Atomic Precision</h2>
                 <p className="text-brand-polar/60 max-w-2xl mx-auto">
                     The end of the foundry. We use Direct Metal Laser Sintering (DMLS) to fuse metal powder into solid objects, layer by micron-thin layer.
                 </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FadeIn delay={0}>
                    <div className="bg-[#151515] p-8 h-full border border-white/5 hover:border-brand-mink/30 transition-colors">
                        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 text-brand-mink">
                            <Layers className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-display text-white mb-3">30 Micron Layers</h3>
                        <p className="text-sm font-mono text-brand-polar/50 leading-relaxed">
                            Our EOS M290 printers lay down stainless steel powder in layers thinner than a human hair. This resolution allows for grooves and textures impossible to mill.
                        </p>
                    </div>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <div className="bg-[#151515] p-8 h-full border border-white/5 hover:border-brand-mink/30 transition-colors">
                        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 text-brand-mink">
                            <Microscope className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-display text-white mb-3">17-4PH Stainless Steel</h3>
                        <p className="text-sm font-mono text-brand-polar/50 leading-relaxed">
                            A precipitation-hardening martensitic stainless steel. We heat treat it to H900 condition, giving it the yield strength of titanium with the soft feel of carbon steel.
                        </p>
                    </div>
                </FadeIn>

                <FadeIn delay={0.4}>
                    <div className="bg-[#151515] p-8 h-full border border-white/5 hover:border-brand-mink/30 transition-colors">
                        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 text-brand-mink">
                            <Zap className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-display text-white mb-3">Vacuum Sintering</h3>
                        <p className="text-sm font-mono text-brand-polar/50 leading-relaxed">
                            The printing occurs in an Argon-filled chamber with &lt; 0.1% oxygen. This creates a part with 99.9% density and zero porosity. Pure metal.
                        </p>
                    </div>
                </FadeIn>
            </div>
        </div>
      </section>

      {/* Partners - Subtle and Credible */}
      <section className="py-24 bg-brand-black border-t border-white/5">
          <div className="container mx-auto px-6 text-center">
              <h3 className="text-brand-polar/30 font-mono text-[10px] uppercase tracking-[0.3em] mb-12">Engineering Partners</h3>
              <div className="flex flex-wrap justify-center gap-16 md:gap-24 opacity-30 grayscale hover:opacity-60 transition-all duration-500 cursor-default select-none">
                  <div className="text-xl font-bold font-display text-white tracking-widest">SANDVIK</div>
                  <div className="text-xl font-bold font-display text-white tracking-widest">EOS</div>
                  <div className="text-xl font-bold font-display text-white tracking-widest">AUTODESK</div>
                  <div className="text-xl font-bold font-display text-white tracking-widest">NVIDIA</div>
              </div>
          </div>
      </section>

    </div>
  );
};

export default Technology;
