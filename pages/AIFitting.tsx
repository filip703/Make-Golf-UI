
import React from 'react';
import { Activity, Target, Scale, Database, Lock, ArrowRight, CheckCircle2, XCircle, Cpu, Network, BarChart3 } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import Button from '../components/Button';

const AIFitting: React.FC = () => {
  const SIGNUP_URL = "https://make.golf/#sign-up";

  return (
    <div className="min-h-screen bg-brand-black pt-20 text-brand-polar selection:bg-brand-mink selection:text-white">
      
      {/* Hero Section */}
      <section className="relative py-24 border-b border-white/5 overflow-hidden">
         {/* Background Tech Elements */}
         <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
            <div className="w-[150%] h-[150%] border border-dashed border-white/20 rounded-full absolute -top-[25%] -right-[25%] animate-spin-slow"></div>
         </div>

         <div className="container mx-auto px-6 relative z-10">
              <FadeIn>
                <div className="inline-flex items-center gap-3 mb-6 border border-brand-mink/30 bg-brand-mink/5 px-4 py-1 rounded-full">
                  <Cpu className="w-3 h-3 text-brand-mink" />
                  <span className="text-brand-mink font-mono text-xs uppercase tracking-widest">The Fitting Engine</span>
                </div>
                <h1 className="text-5xl md:text-8xl font-display font-medium text-white mb-8 leading-[0.9]">
                  We don't guess.<br/>
                  <span className="text-brand-polar/40">We calculate.</span>
                </h1>
                <p className="text-xl text-brand-polar/60 font-light font-sans max-w-2xl leading-relaxed mb-10">
                  Make Golf builds irons, wedges, and putters using 3D printing and parametric design. 
                  This means every club is built specifically for you—not adjusted from a standard model.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={SIGNUP_URL}>
                    <Button variant="primary" size="lg">APPLY FOR ENGINE ACCESS</Button>
                  </a>
                  <Button variant="outline" size="lg" className="border-white/10 text-brand-polar/50 cursor-not-allowed">
                    <Lock className="w-3 h-3 mr-2" /> Public Beta Closed
                  </Button>
                </div>
              </FadeIn>
         </div>
      </section>

      {/* DATA REQUIREMENTS SECTION */}
      <section className="py-24 bg-[#080808] border-b border-white/5">
        <div className="container mx-auto px-6">
            <FadeIn>
                <div className="mb-16 max-w-3xl">
                    <h2 className="text-3xl font-display text-white mb-6">Input Telemetry</h2>
                    <p className="text-brand-polar/60 text-lg font-light">
                        To generate your geometry, the engine requires two specific data streams. We analyze the "Why", not just the "What".
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Stream 1 */}
                    <div className="bg-[#111] p-8 border border-white/5 rounded-sm hover:border-brand-mink/30 transition-colors">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-brand-mink/10 p-3 rounded-full">
                                <Database className="w-6 h-6 text-brand-mink" />
                            </div>
                            <h3 className="text-xl font-display text-white">1. Launch Monitor Data</h3>
                        </div>
                        <p className="text-sm font-mono text-brand-polar/40 mb-4 uppercase tracking-wider">Metric: Impact Behavior</p>
                        <ul className="space-y-2 mb-6 font-mono text-xs text-brand-polar/60">
                            <li>Ball Speed // Launch Angle // Spin Rate</li>
                            <li>Side Deviation // Impact Position</li>
                        </ul>
                        <div className="p-4 bg-black/50 border-l-2 border-brand-mink text-sm text-brand-polar/70 italic">
                            "If you miss 8m right with a 7-iron, we determine if it's Face Angle (+2°), Path (4° out-to-in), Lie Angle (3° flat), or Impact Position (5mm toe)."
                        </div>
                    </div>

                    {/* Stream 2 */}
                    <div className="bg-[#111] p-8 border border-white/5 rounded-sm hover:border-brand-mink/30 transition-colors">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-white/5 p-3 rounded-full">
                                <Scale className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-display text-white">2. Current Specifications</h3>
                        </div>
                        <p className="text-sm font-mono text-brand-polar/40 mb-4 uppercase tracking-wider">Metric: Baseline Setup</p>
                        <ul className="space-y-2 mb-6 font-mono text-xs text-brand-polar/60">
                            <li>Lie Angle // Loft // Length</li>
                            <li>Shaft Model // Swing Weight</li>
                        </ul>
                        <div className="p-4 bg-black/50 border-l-2 border-white/30 text-sm text-brand-polar/70 italic">
                            "If your dispersion is tight with a specific shaft, we quantify exactly why that setup works for your delivery."
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>
      </section>

      {/* THE LOGIC CORE */}
      <section className="py-24 bg-brand-black relative overflow-hidden">
         {/* Connecting Lines BG */}
         <div className="absolute inset-0 opacity-10 pointer-events-none">
             <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-mink to-transparent"></div>
         </div>

         <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
                <span className="text-brand-mink font-mono text-xs uppercase tracking-[0.3em] block mb-4">Algorithmic Processing</span>
                <h2 className="text-4xl md:text-6xl font-display text-white">The Triple-Core System</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Logic 1 */}
                <FadeIn delay={0}>
                    <div className="bg-[#0e0e0e] border border-white/10 p-8 h-full group hover:bg-[#151515] transition-colors">
                        <div className="font-mono text-xs text-brand-mink mb-4">module_01</div>
                        <h3 className="text-2xl font-display text-white mb-4">DeviationMapper™</h3>
                        <p className="text-brand-polar/60 text-sm leading-relaxed font-sans font-light">
                            Identifies deviations from theoretical efficiency. We flag anomalies like high smash factor combined with low ball speed (indicating weak dynamic loft) or consistent directional bias independent of face angle.
                        </p>
                    </div>
                </FadeIn>

                {/* Logic 2 */}
                <FadeIn delay={0.2}>
                    <div className="bg-[#0e0e0e] border border-white/10 p-8 h-full group hover:bg-[#151515] transition-colors">
                        <div className="font-mono text-xs text-brand-mink mb-4">module_02</div>
                        <h3 className="text-2xl font-display text-white mb-4">CompensationMapper™</h3>
                        <p className="text-brand-polar/60 text-sm leading-relaxed font-sans font-light">
                            Calculates the exact geometric compensation needed. If you have a consistent 4° out-to-in path, we don't force a swing change. We compute the precise offset, sole camber, and lie angle to neutralize the delivery.
                        </p>
                    </div>
                </FadeIn>

                {/* Logic 3 */}
                <FadeIn delay={0.4}>
                    <div className="bg-[#0e0e0e] border border-white/10 p-8 h-full group hover:bg-[#151515] transition-colors">
                        <div className="font-mono text-xs text-brand-mink mb-4">module_03</div>
                        <h3 className="text-2xl font-display text-white mb-4">CoGTargetCalculator™</h3>
                        <p className="text-brand-polar/60 text-sm leading-relaxed font-sans font-light">
                            Optimizes mass placement based on your impact heatmap. If you strike 5mm towards the toe, we shift the internal lattice density 5mm toe-ward, ensuring maximum energy transfer on your specific "miss".
                        </p>
                    </div>
                </FadeIn>

            </div>
         </div>
      </section>

      {/* THE COMPARISON MATRIX */}
      <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
        <div className="container mx-auto px-6">
            <FadeIn>
                <div className="flex flex-col md:flex-row items-center justify-between mb-16">
                     <h2 className="text-3xl font-display text-white">The Precision Gap</h2>
                     <p className="text-brand-polar/50 font-mono text-xs uppercase tracking-widest mt-4 md:mt-0">
                        Tolerance Comparison
                     </p>
                </div>

                <div className="overflow-hidden border border-white/10 rounded-lg">
                    <div className="grid grid-cols-3 bg-[#111] border-b border-white/10 p-4 font-mono text-xs uppercase tracking-widest text-brand-polar/50">
                        <div className="col-span-1">Metric</div>
                        <div className="col-span-1 text-center">Traditional Fitting</div>
                        <div className="col-span-1 text-right text-brand-mink">Make Golf Engine</div>
                    </div>

                    {/* Row 1 */}
                    <div className="grid grid-cols-3 p-6 border-b border-white/5 hover:bg-white/5 transition-colors items-center">
                        <div className="font-display text-white">Lie Angle Accuracy</div>
                        <div className="text-center text-brand-polar/40 font-mono text-sm">± 1.0° (2° steps)</div>
                        <div className="text-right text-white font-mono font-bold text-sm">± 0.1° (Continuous)</div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-3 p-6 border-b border-white/5 hover:bg-white/5 transition-colors items-center">
                        <div className="font-display text-white">Loft Accuracy</div>
                        <div className="text-center text-brand-polar/40 font-mono text-sm">± 1.0°</div>
                        <div className="text-right text-white font-mono font-bold text-sm">± 0.1°</div>
                    </div>

                    {/* Row 3 */}
                    <div className="grid grid-cols-3 p-6 border-b border-white/5 hover:bg-white/5 transition-colors items-center">
                        <div className="font-display text-white">Center of Gravity</div>
                        <div className="text-center text-brand-polar/40 font-mono text-sm">Fixed (Static)</div>
                        <div className="text-right text-white font-mono font-bold text-sm">± 0.3mm (Variable)</div>
                    </div>

                    {/* Row 4 */}
                    <div className="grid grid-cols-3 p-6 hover:bg-white/5 transition-colors items-center">
                        <div className="font-display text-white">Length Tolerance</div>
                        <div className="text-center text-brand-polar/40 font-mono text-sm">± 0.50"</div>
                        <div className="text-right text-white font-mono font-bold text-sm">± 0.25"</div>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <p className="text-brand-polar/60 text-lg mb-8 max-w-2xl mx-auto font-light">
                        Standard fitting asks "How does it feel?". We calculate exactly what is required. 
                        Join the future of parametric golf equipment.
                    </p>
                    <a href={SIGNUP_URL}>
                        <Button variant="primary" size="lg" className="shadow-[0_0_30px_rgba(255,34,76,0.3)]">
                            APPLY FOR ACCESS
                        </Button>
                    </a>
                </div>
            </FadeIn>
        </div>
      </section>

    </div>
  );
};

export default AIFitting;
