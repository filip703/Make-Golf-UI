
import React from 'react';
import FadeIn from '../components/FadeIn';
import { Cpu, Layers, Zap, CheckCircle, ShieldCheck, Database, Factory, Printer, Flame, ScanLine, ArrowRight } from 'lucide-react';
import { CLUB_CATEGORIES } from '../constants';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Technology: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black text-brand-polar pt-20 overflow-hidden font-sans selection:bg-brand-mink selection:text-white">
      
      {/* Hero Section */}
      <section className="py-32 container mx-auto px-6 border-b border-white/5 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-mink/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <FadeIn>
          <div className="max-w-4xl relative z-10">
             <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-1.5 bg-brand-mink rounded-full"></div>
                <div className="text-brand-polar/60 font-mono text-xs uppercase tracking-widest">THE TECH STACK</div>
             </div>
             <h1 className="text-5xl md:text-8xl font-display font-medium text-white mb-10 leading-[0.95] uppercase">
               DIGITAL CODE.<br/>
               <span className="text-brand-polar/20">PHYSICAL REALITY.</span>
             </h1>
             <p className="text-xl text-brand-polar/60 font-light font-sans max-w-2xl leading-relaxed">
                We have collapsed the supply chain into a single, seamless digital workflow. From biomechanical simulation to MoldJet™ production in 48 hours.
             </p>
          </div>
        </FadeIn>
      </section>

      {/* --- SECTION: THE HARDWARE - Switched to LIGHT background for contrast --- */}
      <section className="py-24 bg-[#EAEAEA] text-[#1C1C1E] border-b border-black/5">
        <div className="container mx-auto px-6">
           <FadeIn>
              <div className="mb-16">
                 <span className="text-brand-mink font-mono text-xs uppercase tracking-widest block mb-4">APPLIED TECHNOLOGY</span>
                 <h2 className="text-3xl md:text-5xl font-display text-[#1C1C1E] uppercase">HARDWARE APPLICATIONS</h2>
                 <p className="text-[#1C1C1E]/60 mt-4 max-w-2xl">
                    We don't release "collections". We maintain three evolving chassis architectures that serve as blank canvases for your biometric data.
                 </p>
              </div>
           </FadeIn>

           <div className="space-y-32">
             {CLUB_CATEGORIES.map((cat, index) => (
               <div key={cat.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
                 
                 {/* Image Side */}
                 <FadeIn className="w-full lg:w-1/2">
                   <div className="aspect-[4/5] bg-white border border-[#1C1C1E]/10 relative overflow-hidden group shadow-2xl rounded-sm">
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
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>

                      {/* Specs Floating Card */}
                      <div className="absolute bottom-6 left-6 right-6">
                         <div className="flex flex-wrap gap-2">
                            {cat.specs.map((spec, i) => (
                               <div key={i} className="flex items-center gap-2 text-[10px] font-mono text-white/80 bg-black/60 backdrop-blur px-3 py-1 rounded border border-white/10">
                                  {spec}
                               </div>
                            ))}
                         </div>
                      </div>
                   </div>
                 </FadeIn>

                 {/* Text Side - Dark text on Light bg */}
                 <div className="w-full lg:w-1/2">
                   <FadeIn direction={index % 2 === 1 ? 'left' : 'right'}>
                     <div className="flex items-center gap-4 mb-6">
                       <span className="text-brand-mink font-mono text-xs uppercase tracking-widest">ARCHITECTURE 0{index + 1}</span>
                       <div className="h-px flex-1 bg-[#1C1C1E]/10"></div>
                     </div>
                     
                     <h3 className="text-4xl lg:text-6xl font-display font-medium text-[#1C1C1E] mb-4 uppercase">{cat.name}</h3>
                     <p className="text-xl text-[#1C1C1E]/40 font-display mb-8 uppercase">{cat.tagline}</p>
                     
                     <p className="text-[#1C1C1E]/60 text-lg font-sans font-light leading-relaxed mb-10 max-w-xl">
                       {cat.desc} 
                     </p>
                     
                     <div className="flex items-center gap-6">
                       <Link to="/engine">
                          <Button variant="primary" className="uppercase" size="md">
                            CONFIGURE {cat.name}
                          </Button>
                       </Link>
                     </div>
                   </FadeIn>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* --- SECTION 1: MOLDJET DEEP DIVE (The Core Tech) --- */}
      <section className="py-24 bg-[#151515] border-b border-white/5">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              
              <FadeIn>
                 <div className="flex items-center gap-2 text-brand-mink mb-4">
                    <Printer className="w-5 h-5" />
                    <span className="font-mono text-xs uppercase tracking-widest">TRITONE® MOLDJET™ TECHNOLOGY</span>
                 </div>
                 <h2 className="text-4xl font-display text-white mb-6 uppercase">BEYOND LASER SINTERING.</h2>
                 <p className="text-brand-polar/60 font-sans font-light leading-relaxed mb-6">
                    Traditional metal 3D printing (DMLS) requires metal support structures that scar the surface. We use <strong>Tritone MoldJet™</strong>—a revolutionary powder-free process.
                 </p>
                 <p className="text-brand-polar/60 font-sans font-light leading-relaxed mb-8">
                    By printing a transient mold wax alongside a metal paste, we create parts with total geometric freedom. When the mold melts away, it leaves a pristine surface with complex internal lattices that require no mechanical removal.
                 </p>

                 <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-[#1C1C1E] rounded border border-white/5">
                       <ScanLine className="w-6 h-6 text-brand-mink mt-1" />
                       <div>
                          <h4 className="text-white font-bold text-sm uppercase">6 LAYERS PER STEP</h4>
                          <p className="text-xs text-brand-polar/50 font-mono mt-1">High-throughput layering of Mold and Metal Paste simultaneously.</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-[#1C1C1E] rounded border border-white/5">
                       <Flame className="w-6 h-6 text-brand-mink mt-1" />
                       <div>
                          <h4 className="text-white font-bold text-sm uppercase">99% DENSITY SINTERING</h4>
                          <p className="text-xs text-brand-polar/50 font-mono mt-1">Furnace sintering yields fully dense, forged-quality 17-4PH or 316L steel.</p>
                       </div>
                    </div>
                 </div>
              </FadeIn>

              {/* Technical Schematic Visualization */}
              <FadeIn direction="left">
                 <div className="bg-[#1C1C1E] rounded-xl border border-white/10 p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-20">
                       <Factory className="w-24 h-24 text-white" />
                    </div>
                    
                    <h3 className="text-white font-display text-lg mb-8 uppercase tracking-widest border-b border-white/10 pb-4">PROCESS SCHEMATIC</h3>

                    <div className="space-y-8 relative z-10">
                       {/* Step 1 */}
                       <div className="flex gap-6 relative">
                          <div className="flex flex-col items-center">
                             <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-mono text-xs border border-blue-500/50">01</div>
                             <div className="h-full w-px bg-white/10 my-2"></div>
                          </div>
                          <div>
                             <h4 className="text-white font-bold text-sm uppercase">PRINT MOLD (NEGATIVE)</h4>
                             <p className="text-xs text-brand-polar/50 mt-1 mb-2">Inkjet printheads deposit proprietary wax material to define the geometry boundaries.</p>
                             {/* Visual Representation */}
                             <div className="h-2 w-32 bg-[#1a1a1a] border border-white/10 relative overflow-hidden rounded-sm">
                                <div className="absolute left-0 w-1/3 h-full bg-blue-500/50"></div>
                                <div className="absolute right-0 w-1/3 h-full bg-blue-500/50"></div>
                             </div>
                          </div>
                       </div>

                       {/* Step 2 */}
                       <div className="flex gap-6 relative">
                          <div className="flex flex-col items-center">
                             <div className="w-8 h-8 rounded-full bg-brand-mink/20 text-brand-mink flex items-center justify-center font-mono text-xs border border-brand-mink/50">02</div>
                             <div className="h-full w-px bg-white/10 my-2"></div>
                          </div>
                          <div>
                             <h4 className="text-white font-bold text-sm uppercase">FILL METAL PASTE</h4>
                             <p className="text-xs text-brand-polar/50 mt-1 mb-2">Cavities are filled with water-based metal paste (Powder + Binder).</p>
                             <div className="h-2 w-32 bg-[#1a1a1a] border border-white/10 relative overflow-hidden rounded-sm">
                                <div className="absolute left-0 w-1/3 h-full bg-blue-500/50"></div>
                                <div className="absolute left-1/3 w-1/3 h-full bg-brand-mink"></div>
                                <div className="absolute right-0 w-1/3 h-full bg-blue-500/50"></div>
                             </div>
                          </div>
                       </div>

                       {/* Step 3 */}
                       <div className="flex gap-6 relative">
                          <div className="flex flex-col items-center">
                             <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-mono text-xs border border-orange-500/50">03</div>
                          </div>
                          <div>
                             <h4 className="text-white font-bold text-sm uppercase">SINTER & DEBIND</h4>
                             <p className="text-xs text-brand-polar/50 mt-1 mb-2">Heat removes the mold wax completely. Metal particles fuse into a solid object.</p>
                             <div className="h-2 w-32 bg-transparent relative overflow-hidden rounded-sm flex justify-center">
                                <div className="w-1/3 h-full bg-brand-mink shadow-[0_0_10px_rgba(255,34,76,0.8)]"></div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </FadeIn>
           </div>
        </div>
      </section>

      {/* --- SECTION 2: COMPUTATIONAL DESIGN (Telemetry) --- */}
      <section className="py-24 border-b border-white/5 bg-[#121212]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
             
             {/* Right: Telemetry Display (Swapped for flow) */}
             <FadeIn className="order-2 lg:order-1">
                <div className="bg-[#1C1C1E] rounded-xl border border-white/10 p-8 font-mono text-xs relative overflow-hidden shadow-2xl">
                   <div className="absolute top-0 left-0 w-full h-1 bg-brand-mink"></div>
                   <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                      <span className="text-white font-bold uppercase tracking-widest">SIMULATED TELEMETRY // J7 IRON</span>
                      <span className="text-brand-mink animate-pulse">● LIVE</span>
                   </div>
                   
                   <div className="space-y-3 relative z-10">
                      <div className="flex justify-between hover:bg-white/5 p-1 rounded transition-colors">
                         <span className="text-brand-polar/50">Ball Speed</span>
                         <span className="text-brand-mink">196.3 kph</span>
                      </div>
                      <div className="flex justify-between hover:bg-white/5 p-1 rounded transition-colors">
                         <span className="text-brand-polar/50">Push/Pull (deg L-/R+)</span>
                         <span className="text-brand-mink">+0.7</span>
                      </div>
                      <div className="flex justify-between hover:bg-white/5 p-1 rounded transition-colors">
                         <span className="text-brand-polar/50">Launch Angle</span>
                         <span className="text-brand-mink">16 deg</span>
                      </div>
                      <div className="flex justify-between hover:bg-white/5 p-1 rounded transition-colors">
                         <span className="text-brand-polar/50">Back Spin</span>
                         <span className="text-brand-mink">6,768 rpm</span>
                      </div>
                      <div className="flex justify-between hover:bg-white/5 p-1 rounded transition-colors">
                         <span className="text-brand-polar/50">Side Spin</span>
                         <span className="text-brand-mink">+78 rpm</span>
                      </div>
                      <div className="flex justify-between hover:bg-white/5 p-1 rounded transition-colors">
                         <span className="text-brand-polar/50">Club Speed @ Impact</span>
                         <span className="text-brand-mink">276.8 kph</span>
                      </div>
                      <div className="flex justify-between hover:bg-white/5 p-1 rounded transition-colors">
                         <span className="text-brand-polar/50">Efficiency (Smash)</span>
                         <span className="text-brand-mink">1.41</span>
                      </div>
                      <div className="flex justify-between hover:bg-white/5 p-1 rounded transition-colors">
                         <span className="text-brand-polar/50">Closure Rate</span>
                         <span className="text-brand-mink">1,568 deg/sec</span>
                      </div>
                   </div>
                </div>
             </FadeIn>

             {/* Left: Narrative */}
             <FadeIn className="order-1 lg:order-2">
                <div className="flex items-center gap-2 text-brand-mink mb-4">
                   <Cpu className="w-5 h-5" />
                   <span className="font-mono text-xs uppercase tracking-widest">COMPUTATIONAL DESIGN</span>
                </div>
                <h2 className="text-4xl font-display text-white mb-6 uppercase">PARAMETRIC OPTIMIZATION</h2>
                <p className="text-brand-polar/60 font-sans font-light leading-relaxed mb-8">
                   We don't "draw" clubs in CAD. We write algorithms that generate them. 
                   By inputting your specific biomechanics, our engine optimizes the geometry for 
                   ball speed, closure rate, and impact efficiency.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#1C1C1E] p-4 rounded border border-white/5">
                        <span className="text-[10px] font-mono text-brand-polar/40 uppercase block mb-1">Face Impact Hor</span>
                        <span className="text-white font-mono">+3mm (Toe)</span>
                    </div>
                    <div className="bg-[#1C1C1E] p-4 rounded border border-white/5">
                        <span className="text-[10px] font-mono text-brand-polar/40 uppercase block mb-1">Face Impact Vert</span>
                        <span className="text-white font-mono">+4mm (High)</span>
                    </div>
                </div>
             </FadeIn>

          </div>
        </div>
      </section>

      {/* --- SECTION 3: THE DIGITAL CHAIN (Partners) --- */}
      <section className="py-24 bg-[#181818] border-b border-white/5">
         <div className="container mx-auto px-6">
            <FadeIn>
               <div className="text-center mb-16">
                  <span className="text-brand-mink font-mono text-xs uppercase tracking-widest">THE SUPPLY CHAIN</span>
                  <h2 className="text-3xl md:text-5xl font-display text-white mt-4 uppercase">POWERED BY TITANS.</h2>
                  <p className="text-brand-polar/50 max-w-2xl mx-auto mt-4 font-light">
                     We leverage the world's most advanced industrial partners to execute our vision.
                  </p>
               </div>
            </FadeIn>

            <div className="relative">
               {/* Connecting Line (Desktop) */}
               <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-mink/50 to-transparent -translate-y-1/2 z-0"></div>

               <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                  
                  {/* Step 1 */}
                  <FadeIn delay={0.1}>
                     <div className="bg-[#1C1C1E] p-6 border border-white/5 rounded-xl hover:border-brand-mink/50 transition-colors text-center group h-full flex flex-col items-center">
                        <div className="w-12 h-12 bg-black border border-white/10 rounded-full flex items-center justify-center mb-4 text-brand-mink group-hover:scale-110 transition-transform">
                           <Database className="w-5 h-5" />
                        </div>
                        <div className="text-[10px] font-mono text-brand-polar/40 uppercase mb-2">INPUT</div>
                        <h3 className="text-lg font-display text-white mb-2 uppercase">DIGITAL FILES</h3>
                        <p className="text-xs text-brand-polar/50 leading-relaxed">
                            Parametric CAD models generated from your data.
                        </p>
                     </div>
                  </FadeIn>

                  {/* Step 2 */}
                  <FadeIn delay={0.2}>
                     <div className="bg-[#1C1C1E] p-6 border border-white/5 rounded-xl hover:border-brand-mink/50 transition-colors text-center group h-full flex flex-col items-center">
                        <div className="w-12 h-12 bg-black border border-white/10 rounded-full flex items-center justify-center mb-4 text-brand-mink group-hover:scale-110 transition-transform">
                           <Factory className="w-5 h-5" />
                        </div>
                        <div className="text-[10px] font-mono text-brand-polar/40 uppercase mb-2">PRINTING VIA TRITONE</div>
                        <h3 className="text-lg font-display text-white mb-2 uppercase">MOLDJET™ TECH</h3>
                        <p className="text-xs text-brand-polar/50 leading-relaxed">
                            High-density metal printing with <strong>GMH Green Steel</strong>. No supports, just pure geometry.
                        </p>
                     </div>
                  </FadeIn>

                  {/* Step 3 */}
                  <FadeIn delay={0.3}>
                     <div className="bg-[#1C1C1E] p-6 border border-white/5 rounded-xl hover:border-brand-mink/50 transition-colors text-center group h-full flex flex-col items-center">
                        <div className="w-12 h-12 bg-black border border-white/10 rounded-full flex items-center justify-center mb-4 text-brand-mink group-hover:scale-110 transition-transform">
                           <Zap className="w-5 h-5" />
                        </div>
                        <div className="text-[10px] font-mono text-brand-polar/40 uppercase mb-2">POLISHING VIA PLASMOTION</div>
                        <h3 className="text-lg font-display text-white mb-2 uppercase">PLASMA FINISH</h3>
                        <p className="text-xs text-brand-polar/50 leading-relaxed">
                            Electrolyte plasma polishing removes surface roughness while maintaining groove integrity.
                        </p>
                     </div>
                  </FadeIn>

                  {/* Step 4 */}
                  <FadeIn delay={0.4}>
                     <div className="bg-[#1C1C1E] p-6 border border-white/5 rounded-xl hover:border-brand-mink/50 transition-colors text-center group h-full flex flex-col items-center">
                        <div className="w-12 h-12 bg-black border border-white/10 rounded-full flex items-center justify-center mb-4 text-brand-mink group-hover:scale-110 transition-transform">
                           <ShieldCheck className="w-5 h-5" />
                        </div>
                        <div className="text-[10px] font-mono text-brand-polar/40 uppercase mb-2">COATING VIA OERLIKON</div>
                        <h3 className="text-lg font-display text-white mb-2 uppercase">DLC COATING</h3>
                        <p className="text-xs text-brand-polar/50 leading-relaxed">
                            Oerlikon Balzers Diamond-Like Carbon (DLC) for extreme durability and black finish.
                        </p>
                     </div>
                  </FadeIn>

               </div>
            </div>
         </div>
      </section>

      {/* --- SECTION 4: LATTICE & COMPLIANCE --- */}
      <section className="py-24 bg-[#1C1C1E] border-b border-white/5">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               
               <FadeIn className="order-2 lg:order-1">
                  <div className="relative rounded-lg overflow-hidden border border-white/10 group bg-[#202022] aspect-square flex items-center justify-center">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-[#202022]"></div>
                      <img 
                        src="https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/klubbor/grooves.png" 
                        alt="R&A Conforming Face"
                        className="w-[90%] h-[90%] object-contain drop-shadow-2xl opacity-100 group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-grid opacity-10"></div>
                      
                      {/* R&A Badge Overlay */}
                      <div className="absolute bottom-6 right-6 bg-black/80 backdrop-blur border border-white/10 p-3 rounded flex items-center gap-3 shadow-xl z-20">
                         <ShieldCheck className="w-8 h-8 text-brand-mink" />
                         <div>
                            <div className="text-[10px] text-brand-polar/40 font-mono uppercase">CERTIFIED</div>
                            <div className="text-white font-bold text-sm">R&A CONFORMING</div>
                         </div>
                      </div>

                      {/* Grooves Label */}
                      <div className="absolute top-6 left-6 bg-black/40 backdrop-blur px-3 py-1.5 rounded border border-white/5">
                         <div className="flex items-center gap-2">
                             <div className="w-1.5 h-1.5 bg-brand-mink rounded-full animate-pulse"></div>
                             <span className="text-[10px] font-mono text-white/80 uppercase tracking-widest">
                                 CNC MILLED GROOVES
                             </span>
                         </div>
                      </div>
                  </div>
               </FadeIn>

               <FadeIn className="order-1 lg:order-2">
                   <div className="flex items-center gap-2 text-brand-mink mb-4">
                      <Layers className="w-5 h-5" />
                      <span className="font-mono text-xs uppercase tracking-widest">INTERNAL GEOMETRY</span>
                   </div>
                   <h2 className="text-4xl font-display text-white mb-6 uppercase">LATTICE-PRINTED STEEL</h2>
                   <p className="text-brand-polar/60 font-sans font-light leading-relaxed mb-6">
                      MoldJet's ability to print without supports allows us to create free-floating internal lattice structures. 
                      This redistributes mass to the perimeter for high MOI without making the club head larger.
                   </p>
                   
                   <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                         <CheckCircle className="w-5 h-5 text-brand-mink shrink-0 mt-1" />
                         <div>
                            <h4 className="text-white font-display text-lg uppercase">PRECISE WEIGHT DISTRIBUTION</h4>
                            <p className="text-xs text-brand-polar/50 font-mono">Mass is moved to the extreme perimeter for maximum MOI.</p>
                         </div>
                      </li>
                      <li className="flex items-start gap-3">
                         <CheckCircle className="w-5 h-5 text-brand-mink shrink-0 mt-1" />
                         <div>
                            <h4 className="text-white font-display text-lg uppercase">SOUND & ABSORPTION</h4>
                            <p className="text-xs text-brand-polar/50 font-mono">The lattice dampens harsh vibrations, creating a forged-like feel.</p>
                         </div>
                      </li>
                   </ul>
               </FadeIn>

            </div>
         </div>
      </section>

    </div>
  );
};

export default Technology;
