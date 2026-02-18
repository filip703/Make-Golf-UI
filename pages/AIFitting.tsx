
import React from 'react';
import { ExternalLink, ArrowRight, Maximize, Upload, Factory, ScanLine, Flame, Smartphone, Signal, RefreshCw } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import Button from '../components/Button';
import CircularFlow from '../components/CircularFlow';
import { Link } from 'react-router-dom';

const AIFitting: React.FC = () => {
  const SIGNUP_URL = "https://frontend-seven-iota-56.vercel.app/signup";
  // The long token URL for the specific configuration state used in the teaser
  const TEASER_IFRAME_URL = "https://configurator.modelup3d.com/?projectId=oa1oRJb3&token=eyJhbGciOiJIUzI1NiJ9.eyJ2NW4iOjEsImlkIjoxMzQsInA3ZCI6Im9hMW9SSmIzIiwicDlzIjpbImM1ZSIsInJfYzE1YSJdfQ.p-s501nEeYwHvyH2JJUYuSlk5f9rJZ2HbQC58p8DIXc&configurationState=a_29b5d105-ab7f-4511-a8cb-c81eb0f33f2c_7b8382fc-47a7-48ec-bfab-87daf3482240_0_e3685a61-0488-495b-af0a-03f4cd28662b_34.9_5310300e-e063-415e-b008-c54613d8a961_61_1e4aac43-e484-48ef-9549-2d54d4a16715_0_8ce09785-357e-48fb-ae65-422003074fef_77.4_cc947572-79b1-4736-bc9b-90b11a73713a_55.1_bc5871e7-3961-46c3-8fe0-1122e8586405_30.1_c5e62c30-a479-45a4-9879-c828067b840e_4.5_cdf62d42-b88d-4add-9487-21806bcbfe05_9.12_1c129292-ed94-48ea-ae88-309cd2291f1f_32.6_82434f86-8f4a-49bb-be3b-455c356e69bf_9.6_a38a92bf-cdb6-4ea1-b50d-2d108dd75062_14.789_52436bbd-9b9c-46f6-973f-0584ea52d3fe_1.6_b18d42ba-b806-41f9-8702-55359170f28d_2.5_c72f9f2b-c110-492a-851e-3395391883d0_-2.4_480f42a1-ddae-41bd-9d8f-73a47b8c9232_42.7_c0182fe3-ceab-4e11-9249-1ec1a765f0f0_23_22fc43a3-85ce-46b3-9d1f-75422eaf7da0_22.7_d7ae2c3c-6620-4717-b85f-6336c42303fe_14.7_8f9802f1-a672-403a-824e-620e4e93207f_0.436_67832bf3-3810-4db8-8a9d-fe7eb8f8a507_6_e458d1ce-50a5-43b2-9dd0-6297e8325ef5_1.49_14449719-d773-43bd-9741-17ce40106734_2_5e4e18a0-7ddf-4dca-abc3-ebc14804c910_10_c352805c-4369-4674-b1a8-c644bcea716e_2_6c8655d4-2130-4b0e-adea-e9a9b0bd3f3c_1.7_86cd5747-0513-4e1f-aef3-77f323c08da6_3_7c9e3dc2-4ee3-490f-af5a-1e033113ac98_0.45_groove+extend_0_76f64105-1ed0-476d-8fe9-8a0d735dfb25_1.11_1400e927-5c58-40be-9c6b-2fe1cb4e9315_0.955";

  const SUPPORTED_HARDWARE = [
    { name: "Trackman", icon: "TM" },
    { name: "GCQuad", icon: "GC" },
    { name: "FlightScope", icon: "FS" },
    { name: "Garmin", icon: "R10" },
    { name: "FullSwing", icon: "FS" },
  ];

  return (
    <div className="min-h-screen bg-brand-black pt-20 text-brand-polar overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative py-24 border-b border-white/5 overflow-hidden">
         {/* Background Tech Video/Image */}
         <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-mink/5 via-brand-black to-brand-black z-0"></div>
            <div className="absolute inset-0 bg-grid opacity-10 z-0"></div>
         </div>

         <div className="container mx-auto px-6 relative z-10 text-center">
            <FadeIn>
                <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="w-1.5 h-1.5 bg-brand-mink rounded-full animate-pulse"></div>
                  <span className="text-brand-polar/80 font-mono text-[10px] uppercase tracking-widest">MAKE DNA PLATFORM</span>
                </div>
                <h1 className="text-5xl md:text-8xl font-display font-medium text-white mb-8 leading-[0.9] uppercase">
                  Circular By Design.
                </h1>
                <p className="text-xl text-brand-polar/60 font-light font-sans max-w-2xl mx-auto leading-relaxed mb-12">
                  Make Golf isn't just a club manufacturer. It's a closed-loop operating system for your game. Data informs design. Design drives production. Play generates new data.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" size="lg" className="group shadow-[0_0_40px_rgba(255,34,76,0.2)] uppercase">
                      Create Golfer Profile <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"/>
                    </Button>
                  </a>
                </div>
            </FadeIn>
         </div>
      </section>

      {/* --- THE CIRCLE (STRATEGY VISUALIZATION) --- */}
      <section className="py-24 bg-[#151515] border-b border-white/5 relative overflow-hidden">
         <div className="container mx-auto px-6">
            <FadeIn>
               <div className="text-center mb-10">
                  <h2 className="text-2xl font-mono text-brand-polar/40 uppercase tracking-widest">The System</h2>
               </div>
               <CircularFlow />
            </FadeIn>
         </div>
      </section>

      {/* --- PHASE 1: DATA INTELLIGENCE --- */}
      <section id="phase-1" className="py-32 bg-[#1C1C1E] border-b border-white/5 relative">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               
               {/* Left: Narrative */}
               <FadeIn>
                  <div className="mb-6">
                     <span className="text-brand-mink font-mono text-xs uppercase tracking-widest">Phase 1: Data Intelligence</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-display text-white mb-6 uppercase">
                     Not a Form.<br/>An Intelligence.
                  </h2>
                  <p className="text-lg text-brand-polar/60 leading-relaxed mb-8">
                     We don't ask you what you want. We calculate what you need. <strong>Agent 00</strong> ingests raw launch monitor data to analyze your unique biomechanical signature—attack angle, face-to-path, closure rate, and impact consistency.
                  </p>
                  
                  {/* Supported Hardware Marquee */}
                  <div className="mb-8">
                     <p className="text-xs font-mono text-brand-polar/40 uppercase tracking-widest mb-4">Supported Data Inputs</p>
                     <div className="flex gap-4 flex-wrap">
                        {SUPPORTED_HARDWARE.map((hw, i) => (
                           <div key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded flex items-center gap-2">
                               <div className="w-2 h-2 rounded-full bg-green-500"></div>
                               <span className="text-xs font-mono text-white uppercase">{hw.name}</span>
                           </div>
                        ))}
                        <div className="px-4 py-2 bg-brand-mink/10 border border-brand-mink/20 rounded flex items-center gap-2">
                            <Upload className="w-3 h-3 text-brand-mink" />
                            <span className="text-xs font-mono text-brand-mink uppercase">JSON Upload</span>
                        </div>
                     </div>
                  </div>

                  <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer">
                     <Button variant="outline" size="sm" className="uppercase">Launch Agent 00</Button>
                  </a>
               </FadeIn>

               {/* Right: Mockup of the Chat Interface */}
               <FadeIn direction="left">
                  <div className="bg-white rounded-xl overflow-hidden shadow-2xl max-w-md mx-auto border border-white/10 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                     {/* Fake Browser Header */}
                     <div className="bg-[#F5F5F7] px-4 py-3 border-b border-[#E5E5E5] flex items-center justify-between">
                        <div className="flex items-center gap-2">
                           <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                           <span className="text-xs font-mono uppercase tracking-widest text-[#1C1C1E]">Agent 00 · Live</span>
                        </div>
                     </div>

                     {/* Chat Content */}
                     <div className="p-6 bg-white space-y-6 font-mono text-xs text-[#1C1C1E]">
                        
                        {/* Agent Msg */}
                        <div className="flex gap-4">
                           <div className="w-8 h-8 rounded-full bg-[#1C1C1E] flex items-center justify-center text-white font-bold shrink-0">MG</div>
                           <div className="flex-1 space-y-2">
                              <div className="bg-[#F5F5F7] p-4 rounded-tr-xl rounded-br-xl rounded-bl-xl text-[#1C1C1E]/80">
                                 45 shots analyzed. 7-iron shows systematic deviation. Here is the data:
                              </div>
                              {/* Data Card Injection */}
                              <div className="bg-[#1C1C1E] p-4 rounded-lg text-white">
                                 <div className="flex justify-between mb-3 text-[10px] uppercase opacity-50">
                                    <span>7-Iron</span>
                                    <span>Trackman</span>
                                 </div>
                                 <div className="grid grid-cols-3 gap-2 text-center">
                                    <div>
                                       <div className="text-brand-mink font-bold text-lg">-2.1°</div>
                                       <div className="text-[9px] uppercase opacity-50">Path</div>
                                    </div>
                                    <div>
                                       <div className="text-brand-mink font-bold text-lg">+1.8°</div>
                                       <div className="text-[9px] uppercase opacity-50">Face</div>
                                    </div>
                                    <div>
                                       <div className="text-white font-bold text-lg">87</div>
                                       <div className="text-[9px] uppercase opacity-50">Speed</div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>

                        {/* User Msg */}
                        <div className="flex gap-4 flex-row-reverse">
                           <div className="w-8 h-8 rounded-full bg-brand-mink/10 text-brand-mink flex items-center justify-center font-bold shrink-0">AK</div>
                           <div className="bg-brand-mink text-white p-4 rounded-tl-xl rounded-br-xl rounded-bl-xl">
                              What does this mean for the recommendation?
                           </div>
                        </div>

                        {/* Agent Msg */}
                        <div className="flex gap-4">
                           <div className="w-8 h-8 rounded-full bg-[#1C1C1E] flex items-center justify-center text-white font-bold shrink-0">MG</div>
                           <div className="bg-[#F5F5F7] p-4 rounded-tr-xl rounded-br-xl rounded-bl-xl text-[#1C1C1E]/80 leading-relaxed">
                              Face angle +1.8° relative to path consistently generates a slice. <br/><br/>
                              <strong>Recommendation:</strong> 2° closed face angle and forward CoG positioning (3mm) to reduce spin.
                           </div>
                        </div>

                     </div>
                  </div>
               </FadeIn>
            </div>
         </div>
      </section>

      {/* --- PHASE 2: GENERATIVE DESIGN --- */}
      <section id="phase-2" className="py-32 bg-[#151515] text-white border-b border-white/5">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                 <span className="text-brand-mink font-mono text-xs uppercase tracking-widest">Phase 2: Generative Design</span>
                 <h2 className="text-4xl md:text-5xl font-display mt-4 mb-6 uppercase">The Configurator</h2>
                 <p className="text-brand-polar/60 max-w-2xl mx-auto text-lg font-light">
                    Parameters are not fixed. Adjust loft, lie, offset, and mass properties in real-time with our browser-based CAD engine.
                 </p>
            </div>

            <FadeIn>
                <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group bg-[#000]">
                    {/* Iframe */}
                    <iframe 
                        src={TEASER_IFRAME_URL}
                        className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-700 filter grayscale group-hover:grayscale-0"
                        title="3D Configurator Teaser"
                        frameBorder="0"
                        scrolling="no"
                    ></iframe>

                    {/* Overlay for Launch Action */}
                    <Link 
                        to="/studio"
                        className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 group-hover:bg-transparent transition-colors duration-500"
                    >
                        <div className="bg-[#1C1C1E]/90 backdrop-blur-md border border-white/10 pl-6 pr-4 py-3 rounded-full flex items-center gap-4 shadow-2xl transform group-hover:scale-105 transition-all duration-300 group-hover:bg-brand-mink group-hover:border-brand-mink">
                            <span className="text-white font-display uppercase tracking-widest text-xs group-hover:text-black font-bold">Launch Full Studio</span>
                            <div className="w-8 h-8 rounded-full bg-brand-mink group-hover:bg-black flex items-center justify-center text-black group-hover:text-white transition-colors">
                                <Maximize className="w-4 h-4" />
                            </div>
                        </div>
                    </Link>

                    {/* Tech Overlay (Top Left) */}
                    <div className="absolute top-6 left-6 z-0 pointer-events-none hidden md:block">
                        <div className="flex flex-col gap-2">
                            <div className="bg-black/60 backdrop-blur px-3 py-1.5 rounded border border-white/10 text-[10px] font-mono text-brand-mink uppercase flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-brand-mink rounded-full animate-pulse"></div>
                                Live Preview
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>
      </section>

      {/* --- PHASE 3: MOLDJET PRODUCTION --- */}
      <section id="phase-3" className="py-32 bg-[#1C1C1E] border-b border-white/5">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                
                <FadeIn>
                    <div className="mb-6">
                        <span className="text-brand-mink font-mono text-xs uppercase tracking-widest">Phase 3: Make</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display text-white mb-6 uppercase">
                        Tritone MoldJet™<br/>Production.
                    </h2>
                    <p className="text-lg text-brand-polar/60 leading-relaxed mb-8">
                        Traditional 3D printing requires support structures that scar the surface. MoldJet does not. We print a transient wax mold alongside the metal paste, allowing for free-floating internal lattices and zero-waste production.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-start gap-4 p-4 bg-[#151515] rounded border border-white/5">
                            <ScanLine className="w-6 h-6 text-brand-mink mt-1" />
                            <div>
                                <h4 className="text-white font-bold text-sm uppercase">6 Layers Per Step</h4>
                                <p className="text-xs text-brand-polar/50 font-mono mt-1">Simultaneous deposition of Mold and Metal.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 bg-[#151515] rounded border border-white/5">
                            <Flame className="w-6 h-6 text-brand-mink mt-1" />
                            <div>
                                <h4 className="text-white font-bold text-sm uppercase">99.8% Density</h4>
                                <p className="text-xs text-brand-polar/50 font-mono mt-1">Vacuum sintering yields forged-quality steel.</p>
                            </div>
                        </div>
                    </div>
                </FadeIn>

                {/* Schematic Visual */}
                <FadeIn direction="left">
                    <div className="bg-[#151515] rounded-xl border border-white/10 p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Factory className="w-32 h-32 text-white" />
                        </div>
                        <h3 className="text-white font-display text-lg mb-8 uppercase tracking-widest border-b border-white/10 pb-4">Process Schematic</h3>
                        
                        <div className="space-y-8 relative z-10">
                             {/* Schematic Steps */}
                            <div className="flex gap-6 relative">
                                <div className="flex flex-col items-center">
                                    <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-mono text-xs border border-blue-500/50">01</div>
                                    <div className="h-full w-px bg-white/10 my-2"></div>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm uppercase">Print Negative Mold</h4>
                                    <p className="text-xs text-brand-polar/50 mt-1">Wax defines geometry boundaries.</p>
                                </div>
                            </div>

                            <div className="flex gap-6 relative">
                                <div className="flex flex-col items-center">
                                    <div className="w-8 h-8 rounded-full bg-brand-mink/20 text-brand-mink flex items-center justify-center font-mono text-xs border border-brand-mink/50">02</div>
                                    <div className="h-full w-px bg-white/10 my-2"></div>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm uppercase">Fill Metal Paste</h4>
                                    <p className="text-xs text-brand-polar/50 mt-1">17-4PH Steel paste fills cavities.</p>
                                </div>
                            </div>

                            <div className="flex gap-6 relative">
                                <div className="flex flex-col items-center">
                                    <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-mono text-xs border border-orange-500/50">03</div>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm uppercase">Sinter & Debind</h4>
                                    <p className="text-xs text-brand-polar/50 mt-1">Wax melts. Metal fuses. Solid object remains.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>

            </div>
        </div>
      </section>

      {/* --- PHASE 4: PLAY & RE-FIT (UPDATED) --- */}
      <section id="phase-4" className="py-32 bg-[#F5F5F7] text-[#1C1C1E]">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               
               {/* Left: Live Data Feed Mockup */}
               <FadeIn>
                  <div className="bg-white rounded-xl overflow-hidden shadow-2xl border border-black/5 relative">
                     {/* Header */}
                     <div className="bg-[#1C1C1E] p-4 flex justify-between items-center text-white">
                        <div className="flex items-center gap-2">
                           <Signal className="w-4 h-4 text-brand-mink animate-pulse" />
                           <span className="text-xs font-mono uppercase tracking-widest">LIVE FEED</span>
                        </div>
                        <span className="text-[10px] font-mono text-white/50 uppercase">Connected to Arccos</span>
                     </div>

                     {/* Content */}
                     <div className="p-6">
                        <div className="flex items-start gap-4 mb-6">
                           <div className="w-10 h-10 bg-[#F5F5F7] rounded-full flex items-center justify-center text-[#1C1C1E]">
                              <Smartphone className="w-5 h-5" />
                           </div>
                           <div>
                              <h4 className="font-display font-bold text-lg text-[#1C1C1E]">Post-Round Analysis</h4>
                              <p className="text-xs text-[#1C1C1E]/60 font-mono">Bro Hof Slott · 18 Holes · Today</p>
                           </div>
                        </div>

                        {/* Alert Card */}
                        <div className="bg-brand-mink/5 border border-brand-mink/20 rounded-lg p-4 mb-4">
                           <div className="flex items-center gap-2 mb-2 text-brand-mink font-bold text-xs uppercase tracking-wide">
                              <RefreshCw className="w-3 h-3" />
                              System Alert
                           </div>
                           <p className="text-sm text-[#1C1C1E]/80 leading-relaxed">
                              <strong>Gapping Deviation Detected:</strong> Your 8-Iron carry has increased by 4% over the last 5 rounds, creating a 16m gap to your 9-Iron.
                           </p>
                        </div>

                        {/* Recommendation */}
                        <div className="border-t border-[#1C1C1E]/10 pt-4">
                           <div className="flex justify-between items-center">
                              <span className="text-xs font-mono text-[#1C1C1E]/50 uppercase">Proposed Action</span>
                              <Button variant="secondary" size="sm" className="py-1 px-3 text-[10px]">
                                 Adjust Lofts
                              </Button>
                           </div>
                        </div>
                     </div>
                  </div>
               </FadeIn>

               {/* Right: Narrative */}
               <FadeIn direction="left">
                  <div className="mb-6">
                     <span className="text-brand-mink font-mono text-xs uppercase tracking-widest">Phase 4: Active Loop</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-display text-[#1C1C1E] mb-6 uppercase">
                     Data On The Fly.<br/>Adapting Forever.
                  </h2>
                  <p className="text-lg text-[#1C1C1E]/60 leading-relaxed mb-8">
                     Your swing isn't static, so why should your equipment be? Make Golf connects directly to your performance data sources (Arccos, Garmin, Gamebook) to monitor your real-world play. 
                  </p>
                  
                  {/* Integration Logos */}
                  <div className="flex gap-4 mb-10 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                     <div className="h-8 px-3 bg-white border border-[#1C1C1E]/10 rounded flex items-center justify-center font-bold text-xs text-[#1C1C1E]">
                        Arccos
                     </div>
                     <div className="h-8 px-3 bg-white border border-[#1C1C1E]/10 rounded flex items-center justify-center font-bold text-xs text-[#1C1C1E]">
                        Garmin
                     </div>
                     <div className="h-8 px-3 bg-white border border-[#1C1C1E]/10 rounded flex items-center justify-center font-bold text-xs text-[#1C1C1E]">
                        Gamebook
                     </div>
                  </div>

                  <p className="text-sm text-[#1C1C1E]/60 leading-relaxed mb-8">
                     If your gapping drifts or your dispersion pattern shifts, the system flags a "Re-Fit Trigger," allowing you to update your setup or print a modified component before your next season.
                  </p>

                  <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" className="uppercase shadow-lg">
                        Connect Your Data
                    </Button>
                  </a>
               </FadeIn>

            </div>
         </div>
      </section>

    </div>
  );
};

export default AIFitting;
