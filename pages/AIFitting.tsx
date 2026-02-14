
import React from 'react';
import { 
  Activity, 
  Target, 
  Scale, 
  Database, 
  Lock, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  Cpu, 
  Network, 
  BarChart3, 
  Scan, 
  Layers, 
  Zap,
  Globe,
  ShieldCheck,
  Server,
  MonitorCheck,
  RefreshCw,
  Sliders
} from 'lucide-react';
import FadeIn from '../components/FadeIn';
import Button from '../components/Button';

const AIFitting: React.FC = () => {
  const SIGNUP_URL = "https://make.golf/#sign-up";

  return (
    <div className="min-h-screen bg-brand-black pt-20 text-brand-polar selection:bg-brand-mink selection:text-white">
      
      {/* Hero Section - The Engine Interface */}
      <section className="relative py-24 border-b border-white/5 overflow-hidden">
         {/* Background Tech Elements */}
         <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
            <div className="w-[150%] h-[150%] border border-dashed border-white/20 rounded-full absolute -top-[25%] -right-[25%] animate-spin-slow"></div>
         </div>

         <div className="container mx-auto px-6 relative z-10">
              <FadeIn>
                <div className="inline-flex items-center gap-3 mb-6 border border-brand-mink/30 bg-brand-mink/5 px-4 py-1 rounded-full">
                  <Cpu className="w-3 h-3 text-brand-mink" />
                  <span className="text-brand-mink font-mono text-xs uppercase tracking-widest">Biometric Processing Engine v2.4</span>
                </div>
                <h1 className="text-6xl md:text-9xl font-display font-medium text-white mb-8 leading-[0.85] tracking-tighter">
                  Individual<br/>
                  <span className="text-brand-polar/20">Geometry.</span>
                </h1>
                <p className="text-xl text-brand-polar/60 font-light font-sans max-w-2xl leading-relaxed mb-10">
                  We don't sell stock clubs. We manufacture answers. By ingesting your raw swing telemetry, our engine generates a clubhead architecture impossible to achieve through traditional casting.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={SIGNUP_URL}>
                    <Button variant="primary" size="lg" className="shadow-[0_0_40px_rgba(255,34,76,0.4)] px-12">
                        APPLY FOR BETA ACCESS
                    </Button>
                  </a>
                  <Button variant="outline" size="lg" className="border-white/10 text-brand-polar/50 cursor-not-allowed">
                    <Globe className="w-3 h-3 mr-2" /> Global Remote Fitting
                  </Button>
                </div>
              </FadeIn>
         </div>
      </section>

      {/* THE WORKFLOW: DATA-FIRST APPROACH */}
      <section className="py-24 bg-[#080808] border-b border-white/5">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div>
                    <FadeIn>
                        <h2 className="text-4xl font-display text-white mb-8 uppercase tracking-tight">The Digital Workflow</h2>
                        <div className="space-y-12">
                            {/* Step 1 */}
                            <div className="flex gap-6 group">
                                <div className="shrink-0 w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center font-mono text-brand-mink group-hover:border-brand-mink transition-colors">01</div>
                                <div>
                                    <h4 className="text-xl font-display text-white mb-2">Ingestion & Confidence Scoring</h4>
                                    <p className="text-brand-polar/50 text-sm leading-relaxed">
                                        We analyze your session data and assign a <strong>Data Quality Score (0-100)</strong>. If the score is low, the Agent requests specific gap-filling shots. You control the fidelity—more data equals higher precision.
                                    </p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex gap-6 group">
                                <div className="shrink-0 w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center font-mono text-brand-mink group-hover:border-brand-mink transition-colors">02</div>
                                <div>
                                    <h4 className="text-xl font-display text-white mb-2">Generative Modeling</h4>
                                    <p className="text-brand-polar/50 text-sm leading-relaxed">
                                        The engine creates your unique head geometry and prescribes the optimal shaft and grip matrix. We can map a single iron or your entire bag based on your biometric DNA.
                                    </p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex gap-6 group">
                                <div className="shrink-0 w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center font-mono text-brand-mink group-hover:border-brand-mink transition-colors">03</div>
                                <div>
                                    <h4 className="text-xl font-display text-white mb-2">Visual Configuration</h4>
                                    <p className="text-brand-polar/50 text-sm leading-relaxed">
                                        Your physics-optimized model is pushed to the <strong>3D Configurator</strong>. Tweak the aesthetics, add engravings, and finalize the look. It is your signature on our science.
                                    </p>
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="flex gap-6 group">
                                <div className="shrink-0 w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center font-mono text-brand-mink group-hover:border-brand-mink transition-colors">04</div>
                                <div>
                                    <h4 className="text-xl font-display text-white mb-2">Production & Feedback Loop</h4>
                                    <p className="text-brand-polar/50 text-sm leading-relaxed">
                                        The CAD file streams to print. In weeks, you hold the metal. As you play, new data feeds back into the Agent, constantly improving your profile for future generations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                <div className="relative">
                    <FadeIn direction="left">
                        <div className="aspect-[4/5] bg-brand-black border border-white/10 rounded-lg overflow-hidden relative group">
                            {/* Snapshot of process */}
                            <img 
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                                className="w-full h-full object-cover opacity-20 grayscale group-hover:scale-105 transition-transform duration-1000"
                                alt="Algorithm Analysis Snapshot"
                            />
                            
                            {/* Tech HUD Overlay */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-between font-mono text-[10px] tracking-wider">
                                <div className="flex justify-between items-start border-b border-brand-mink/30 pb-4">
                                    <div>
                                        <span className="text-brand-mink block mb-1">DATA_STREAM_INBOUND</span>
                                        <span className="text-white">SOURCE: TM4_SESSION_01</span>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-brand-polar/40 block mb-1">DATA QUALITY</span>
                                        <span className="text-green-500 font-bold">94/100 (EXCELLENT)</span>
                                    </div>
                                </div>
                                
                                <div className="flex-1 flex items-center justify-center">
                                    <div className="w-48 h-48 border border-white/5 rounded-full flex items-center justify-center relative">
                                        <div className="absolute inset-0 border-t border-brand-mink rounded-full animate-spin-slow"></div>
                                        <div className="text-center">
                                            <div className="text-white text-xs mb-1">GENERATING</div>
                                            <div className="text-brand-mink font-bold">SHAFT MATRIX</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white/5 backdrop-blur-md p-4 border border-white/10 space-y-2">
                                    <div className="flex justify-between items-center text-brand-polar/40">
                                        <span>HEAD_GEOMETRY</span>
                                        <span className="text-brand-mink flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> LOCKED</span>
                                    </div>
                                    <div className="flex justify-between items-center text-brand-polar/40">
                                        <span>SHAFT_REC</span>
                                        <span className="text-white">KBS TGI 95</span>
                                    </div>
                                    <div className="flex justify-between items-center text-brand-polar/40">
                                        <span>GRIP_REC</span>
                                        <span className="text-white">MCC PLUS4 MID</span>
                                    </div>
                                    
                                    <div className="pt-2 mt-2 border-t border-white/10">
                                        <div className="flex items-center justify-between">
                                            <span className="text-white">SEND TO CONFIGURATOR</span>
                                            <ArrowRight className="w-3 h-3 text-brand-mink animate-pulse" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </div>
      </section>

      {/* HARDWARE SUPPORT: ALL SYSTEMS INTEGRATED */}
      <section className="py-24 bg-brand-black border-b border-white/5">
        <div className="container mx-auto px-6 text-center">
            <FadeIn>
                <div className="flex items-center justify-center gap-3 mb-6">
                    <MonitorCheck className="w-5 h-5 text-brand-mink" />
                    <span className="text-brand-mink font-mono text-xs uppercase tracking-[0.3em]">Full System Compatibility</span>
                </div>
                <h2 className="text-4xl font-display text-white mb-8">We speak every launch monitor.</h2>
                <p className="text-brand-polar/50 max-w-xl mx-auto mb-16 font-light">
                    Our platform is hardware-agnostic. Whether you fit at a high-end facility or record data at your local range, our engine ingests the raw metrics for accurate generation.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-px bg-white/5 border border-white/5">
                    {[
                        'TRACKMAN 4', 'GCQUAD', 'GC3', 'FLIGHTSCOPE', 'FULL SWING', 'SKYTRAK+'
                    ].map((sys) => (
                        <div key={sys} className="bg-brand-black p-8 flex flex-col items-center justify-center group hover:bg-white/5 transition-colors cursor-default">
                            <span className="text-xs font-mono font-bold text-brand-polar/30 group-hover:text-white transition-colors tracking-widest">{sys}</span>
                        </div>
                    ))}
                </div>
                <div className="mt-12">
                    <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-polar/40 uppercase">
                        <ShieldCheck className="w-4 h-4 text-green-500" />
                        Data encryption via AWS PrivateLink
                    </div>
                </div>
            </FadeIn>
        </div>
      </section>

      {/* THE THREE ENGINE MODULES - REFINED */}
      <section className="py-24 bg-[#0a0a0a]">
         <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-end justify-between mb-20">
                <div className="max-w-xl">
                    <h2 className="text-4xl font-display text-white mb-4">The Synthesis Engine</h2>
                    <p className="text-brand-polar/50 font-light">Three layers of algorithmic design that turn raw numbers into high-performance metal.</p>
                </div>
                <div className="hidden md:block">
                    <Server className="w-16 h-16 text-brand-mink opacity-20" />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Module 1 */}
                <FadeIn delay={0}>
                    <div className="bg-[#111] border border-white/5 p-8 h-full relative group hover:border-brand-mink/40 transition-all">
                        <div className="flex items-center justify-between mb-8">
                            <BarChart3 className="w-8 h-8 text-brand-mink" />
                            <span className="font-mono text-[10px] text-brand-polar/30">MODULE // 01</span>
                        </div>
                        <h3 className="text-2xl font-display text-white mb-4">DeviationMapper™</h3>
                        <p className="text-brand-polar/60 text-sm leading-relaxed font-sans font-light">
                            Analyzes the delta between current performance and physics-based limits. We identify why a high smash factor doesn't translate to ball speed—often revealing flaws in loft and lie delivery that traditional fitters miss.
                        </p>
                    </div>
                </FadeIn>

                {/* Module 2 */}
                <FadeIn delay={0.2}>
                    <div className="bg-[#111] border border-white/5 p-8 h-full relative group hover:border-brand-mink/40 transition-all">
                        <div className="flex items-center justify-between mb-8">
                            <Scale className="w-8 h-8 text-white" />
                            <span className="font-mono text-[10px] text-brand-polar/30">MODULE // 02</span>
                        </div>
                        <h3 className="text-2xl font-display text-white mb-4">CompensationMapper™</h3>
                        <p className="text-brand-polar/60 text-sm leading-relaxed font-sans font-light">
                            Instead of trying to fix your swing path, we fix the physics. This module calculates the exact offset, bounce, and sole radius required to compensate for your natural attack angle and path.
                        </p>
                    </div>
                </FadeIn>

                {/* Module 3 */}
                <FadeIn delay={0.4}>
                    <div className="bg-[#111] border border-white/5 p-8 h-full relative group hover:border-brand-mink/40 transition-all">
                        <div className="flex items-center justify-between mb-8">
                            <Target className="w-8 h-8 text-white" />
                            <span className="font-mono text-[10px] text-brand-polar/30">MODULE // 03</span>
                        </div>
                        <h3 className="text-2xl font-display text-white mb-4">CoGTargetCalculator™</h3>
                        <p className="text-brand-polar/60 text-sm leading-relaxed font-sans font-light">
                            Maps your impact pattern. By using additive manufacturing, we can place a high-density lattice exactly where you strike the ball most often, ensuring the "center" of the club is your center.
                        </p>
                    </div>
                </FadeIn>
            </div>
         </div>
      </section>

      {/* DEEP DIVE: THE COMPARISON MATRIX */}
      <section className="py-24 bg-brand-black border-t border-white/5">
        <div className="container mx-auto px-6">
            <FadeIn>
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-display text-white mb-4">The Accuracy Revolution</h2>
                    <p className="text-brand-polar/50 font-mono text-xs uppercase tracking-[0.2em]">Make Golf vs. Traditional Methods</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 overflow-hidden">
                    {/* Column 1: Traditional */}
                    <div className="p-12 bg-brand-black opacity-40 group hover:opacity-60 transition-opacity">
                        <div className="flex items-center justify-between mb-12">
                            <h3 className="text-xl font-display text-white">Traditional Fitting</h3>
                            <XCircle className="w-6 h-6 text-red-900" />
                        </div>
                        <ul className="space-y-8 font-mono text-xs">
                            <li className="flex flex-col gap-2">
                                <span className="text-brand-polar/30 uppercase tracking-widest">Lie & Loft Precision</span>
                                <span className="text-white">± 1.0&deg; (Static Bending)</span>
                            </li>
                            <li className="flex flex-col gap-2">
                                <span className="text-brand-polar/30 uppercase tracking-widest">CoG Adjustment</span>
                                <span className="text-white">Zero (Head mass is fixed)</span>
                            </li>
                            <li className="flex flex-col gap-2">
                                <span className="text-brand-polar/30 uppercase tracking-widest">Personalization</span>
                                <span className="text-white">Adjusted standard models</span>
                            </li>
                            <li className="flex flex-col gap-2">
                                <span className="text-brand-polar/30 uppercase tracking-widest">Data Depth</span>
                                <span className="text-white">Visual flight + "Feel"</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 2: MAKE GOLF */}
                    <div className="p-12 bg-[#0c0c0c] relative group overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-brand-mink"></div>
                        <div className="flex items-center justify-between mb-12">
                            <h3 className="text-xl font-display text-white">The Make Golf Engine</h3>
                            <CheckCircle2 className="w-6 h-6 text-brand-mink" />
                        </div>
                        <ul className="space-y-8 font-mono text-xs">
                            <li className="flex flex-col gap-2">
                                <span className="text-brand-mink/50 uppercase tracking-widest">Lie & Loft Precision</span>
                                <span className="text-white font-bold">± 0.1&deg; (Grown Geometry)</span>
                            </li>
                            <li className="flex flex-col gap-2">
                                <span className="text-brand-mink/50 uppercase tracking-widest">CoG Adjustment</span>
                                <span className="text-white font-bold">± 0.3mm (Custom Lattice)</span>
                            </li>
                            <li className="flex flex-col gap-2">
                                <span className="text-brand-mink/50 uppercase tracking-widest">Personalization</span>
                                <span className="text-white font-bold">100% Bespoke Architecture</span>
                            </li>
                            <li className="flex flex-col gap-2">
                                <span className="text-brand-mink/50 uppercase tracking-widest">Data Depth</span>
                                <span className="text-white font-bold">40+ Telemetry Data Points</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </FadeIn>
        </div>
      </section>

      {/* FINAL CTA: THE CALL TO ACTION */}
      <section className="py-32 bg-[#050505] text-center">
          <div className="container mx-auto px-6">
              <FadeIn>
                  <div className="max-w-3xl mx-auto">
                      <Zap className="w-12 h-12 text-brand-mink mx-auto mb-10" />
                      <h2 className="text-4xl md:text-6xl font-display text-white mb-8">Secure your spot in the queue.</h2>
                      <p className="text-brand-polar/40 text-lg mb-12 font-light">
                          Due to the extreme complexity of 3D-printed manufacturing, we only accept a limited number of sessions per month. Start with your data today.
                      </p>
                      <a href={SIGNUP_URL}>
                        <Button variant="primary" size="lg" className="shadow-[0_0_50px_rgba(255,34,76,0.5)] px-16">
                            APPLY FOR BETA ACCESS
                        </Button>
                      </a>
                      <div className="mt-12 text-[10px] font-mono text-brand-polar/20 uppercase tracking-[0.4em]">
                          No Physical Meeting Required // Worldwide Shipping
                      </div>
                  </div>
              </FadeIn>
          </div>
      </section>

    </div>
  );
};

export default AIFitting;
