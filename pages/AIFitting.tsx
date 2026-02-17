
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Upload, Cpu, FileOutput, ArrowRight, Database, Share2, RefreshCw, Sliders, CheckCircle, MessageSquare, BarChart3, Target, Zap, Layers, Microscope } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const AIFitting: React.FC = () => {
  const SIGNUP_URL = "https://maker.make.golf/embed/pages/29414631-a517-47c0-aa0f-9eb48335e20f/blocks/signup";

  return (
    <div className="min-h-screen bg-brand-black pt-20 text-brand-polar overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center border-b border-white/5 overflow-hidden">
         {/* Background Tech Video/Image */}
         <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-mink/10 via-brand-black to-brand-black z-0"></div>
            <div className="absolute inset-0 bg-grid opacity-20 z-0"></div>
         </div>

         <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <FadeIn>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 bg-brand-mink rounded-full animate-pulse"></div>
                  <span className="text-brand-mink font-mono text-xs uppercase tracking-widest">The Fitting Agent</span>
                </div>
                <h1 className="text-5xl md:text-8xl font-display font-medium text-white mb-8 leading-[0.9]">
                  Not a Form.<br/>
                  <span className="text-brand-polar/40">An Intelligence.</span>
                </h1>
                <p className="text-xl text-brand-polar/60 font-light font-sans max-w-xl leading-relaxed mb-10">
                  Meet the Fitting Agent. It doesn't just record your specs; it analyzes raw launch monitor data to engineer a clubhead specifically for your swing signature.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" size="lg" className="group shadow-[0_0_40px_rgba(255,34,76,0.2)]">
                      Join Beta Access <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"/>
                    </Button>
                  </a>
                  <Button variant="outline" size="lg" className="border-white/10 hover:border-white text-white">
                    View Sample Report
                  </Button>
                </div>
              </FadeIn>
            </div>
         </div>
      </section>

      {/* --- THE AGENT INTERFACE (USP) --- */}
      <section className="py-32 bg-[#151515] border-b border-white/5 relative">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               
               {/* Left: Explanation */}
               <FadeIn>
                  <h2 className="text-4xl font-display text-white mb-6">Conversational<br/>Engineering.</h2>
                  <p className="text-lg text-brand-polar/60 leading-relaxed mb-8">
                     Traditional fitting fits you into a "bucket" (Stiff, Upright, Standard). 
                     The Make Agent builds the bucket around you.
                  </p>
                  
                  <div className="space-y-6">
                     <div className="flex gap-4">
                        <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-brand-mink border border-white/5 shrink-0">
                           <Upload className="w-5 h-5" />
                        </div>
                        <div>
                           <h4 className="text-white font-display text-lg">Raw Data Ingestion</h4>
                           <p className="text-sm text-brand-polar/50 font-mono mt-1">
                              Upload CSVs directly from Trackman, GCQuad, or Foresight. The Agent extracts closure rates, spin axis, and impact location.
                           </p>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-brand-mink border border-white/5 shrink-0">
                           <MessageSquare className="w-5 h-5" />
                        </div>
                        <div>
                           <h4 className="text-white font-display text-lg">Contextual Analysis</h4>
                           <p className="text-sm text-brand-polar/50 font-mono mt-1">
                              "My miss is a thin fade." The Agent correlates your verbal feedback with the data to identify the root cause.
                           </p>
                        </div>
                     </div>
                  </div>
               </FadeIn>

               {/* Right: Chat UI Simulation */}
               <FadeIn direction="left">
                  <div className="bg-[#1C1C1E] border border-white/10 rounded-xl overflow-hidden shadow-2xl max-w-md mx-auto relative">
                     {/* Window Header */}
                     <div className="bg-[#242424] px-4 py-3 border-b border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                           <div className="w-2 h-2 rounded-full bg-brand-mink animate-pulse"></div>
                           <span className="text-xs font-mono uppercase tracking-widest text-white/80">Fitting Agent</span>
                        </div>
                        <span className="text-[10px] font-mono text-white/30">SESSION ID: #8821</span>
                     </div>

                     {/* Chat Area */}
                     <div className="p-6 space-y-6 min-h-[400px] font-mono text-xs">
                        
                        {/* Agent Message */}
                        <div className="flex gap-4">
                           <div className="w-8 h-8 rounded-full bg-brand-mink flex items-center justify-center text-white font-bold shrink-0">M</div>
                           <div className="bg-[#2C2C2E] p-4 rounded-tr-xl rounded-br-xl rounded-bl-xl border border-white/5 text-brand-polar/90">
                              <p className="mb-2">Welcome back, Filip. I've analyzed your Trackman session from 2026-02-14.</p>
                              <p>I see a <span className="text-brand-mink">41.2% complete</span> profile. To generate precise specs, I need to confirm your typical miss pattern with the 7-iron.</p>
                           </div>
                        </div>

                        {/* User Message */}
                        <div className="flex gap-4 flex-row-reverse">
                           <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white font-bold shrink-0">F</div>
                           <div className="bg-white/5 p-4 rounded-tl-xl rounded-br-xl rounded-bl-xl border border-white/5 text-brand-polar/80">
                              <p>It's usually a push-fade when I get tired. Speed is around 92mph.</p>
                           </div>
                        </div>

                        {/* Agent Analysis */}
                        <div className="flex gap-4">
                           <div className="w-8 h-8 rounded-full bg-brand-mink flex items-center justify-center text-white font-bold shrink-0">M</div>
                           <div className="bg-[#2C2C2E] p-4 rounded-tr-xl rounded-br-xl rounded-bl-xl border border-white/5 text-brand-polar/90 space-y-3">
                              <p>Understood. Correlating push-fade tendency with your 4° out-to-in path.</p>
                              
                              {/* Tech Block inside chat */}
                              <div className="bg-black/40 border border-white/10 p-3 rounded">
                                 <div className="flex justify-between mb-1 text-[10px] text-white/40 uppercase">
                                    <span>Calculated Lie Adjustment</span>
                                    <span className="text-brand-mink">+1.2° UPRIGHT</span>
                                 </div>
                                 <div className="w-full bg-white/10 h-1 rounded overflow-hidden">
                                    <div className="bg-brand-mink h-full w-[65%]"></div>
                                 </div>
                              </div>

                              <p>I recommend optimizing the offset to 3.2mm to help square the face at impact.</p>
                           </div>
                        </div>

                     </div>

                     {/* Input Area */}
                     <div className="p-4 border-t border-white/5 bg-[#242424]">
                        <div className="bg-[#1C1C1E] border border-white/10 rounded p-3 flex items-center justify-between text-white/30 text-xs">
                           <span>Type your response...</span>
                           <ArrowRight className="w-3 h-3" />
                        </div>
                     </div>
                  </div>
               </FadeIn>
            </div>
         </div>
      </section>

      {/* --- THE 3 ALGORITHMS (Deep Tech) --- */}
      <section className="py-24 bg-[#121212]">
         <div className="container mx-auto px-6">
            <FadeIn>
               <div className="text-center mb-16">
                  <span className="text-brand-mink font-mono text-xs uppercase tracking-widest">The Core Engines</span>
                  <h2 className="text-3xl md:text-5xl font-display text-white mt-4">How It Thinks.</h2>
               </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {/* Algo 1 */}
               <FadeIn delay={0.1}>
                  <div className="bg-[#1C1C1E] p-8 rounded-xl border border-white/5 hover:border-brand-mink/30 transition-colors h-full">
                     <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center text-brand-mink mb-6">
                        <Microscope className="w-6 h-6" />
                     </div>
                     <h3 className="text-xl font-display text-white mb-2">DeviationMapper™</h3>
                     <p className="text-brand-polar/50 text-sm leading-relaxed font-mono">
                        Identifies anomalies in your launch data. It filters out "bad strikes" to find your true biomechanical baseline, ensuring we don't fit the club to a flaw, but to your potential.
                     </p>
                  </div>
               </FadeIn>

               {/* Algo 2 */}
               <FadeIn delay={0.2}>
                  <div className="bg-[#1C1C1E] p-8 rounded-xl border border-white/5 hover:border-brand-mink/30 transition-colors h-full">
                     <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center text-brand-mink mb-6">
                        <Zap className="w-6 h-6" />
                     </div>
                     <h3 className="text-xl font-display text-white mb-2">CompensationMapper™</h3>
                     <p className="text-brand-polar/50 text-sm leading-relaxed font-mono">
                        Calculates the exact geometric adjustments needed to counteract your miss. If you deliver the toe down, it adjusts the lie angle and toe-weighting to neutralize the error.
                     </p>
                  </div>
               </FadeIn>

               {/* Algo 3 */}
               <FadeIn delay={0.3}>
                  <div className="bg-[#1C1C1E] p-8 rounded-xl border border-white/5 hover:border-brand-mink/30 transition-colors h-full">
                     <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center text-brand-mink mb-6">
                        <Target className="w-6 h-6" />
                     </div>
                     <h3 className="text-xl font-display text-white mb-2">CoGTargetCalculator™</h3>
                     <p className="text-brand-polar/50 text-sm leading-relaxed font-mono">
                        Optimizes Center of Gravity placement based on your impact location tendencies. Hits high on the face? We shift mass higher to maintain ball speed and smash factor.
                     </p>
                  </div>
               </FadeIn>
            </div>
         </div>
      </section>

      {/* --- DATA DASHBOARD VISUALIZATION --- */}
      <section className="py-24 bg-brand-black border-t border-white/5">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <FadeIn>
                   <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#1C1C1E]">
                      {/* Fake Dashboard Header */}
                      <div className="border-b border-white/5 p-4 flex justify-between items-center bg-[#242424]">
                         <span className="text-xs font-mono text-white/60 uppercase">Performance Data // 188 Shots</span>
                         <div className="flex gap-2">
                            <span className="w-2 h-2 rounded-full bg-red-500"></span>
                            <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                         </div>
                      </div>
                      
                      {/* Dashboard Content Grid */}
                      <div className="p-6 grid grid-cols-2 gap-4">
                         {/* Graph 1: Dispersion */}
                         <div className="col-span-2 bg-black/40 border border-white/5 p-4 rounded">
                            <div className="flex justify-between mb-4">
                               <span className="text-[10px] font-mono text-white/40 uppercase">Dispersion Pattern</span>
                               <span className="bg-brand-mink/20 text-brand-mink text-[9px] px-1 rounded">Optimized</span>
                            </div>
                            <div className="h-32 w-full flex items-center justify-center relative">
                               <div className="absolute inset-0 border border-dashed border-white/5 rounded-full w-full h-full opacity-20"></div>
                               <div className="absolute w-[2px] h-full bg-white/10"></div>
                               <div className="absolute h-[2px] w-full bg-white/10"></div>
                               {/* Scatter Plot dots */}
                               <div className="absolute top-[40%] left-[52%] w-1.5 h-1.5 bg-brand-mink rounded-full"></div>
                               <div className="absolute top-[45%] left-[48%] w-1.5 h-1.5 bg-brand-mink rounded-full"></div>
                               <div className="absolute top-[42%] left-[51%] w-1.5 h-1.5 bg-brand-mink rounded-full"></div>
                               <div className="absolute top-[55%] left-[49%] w-1.5 h-1.5 bg-brand-mink rounded-full"></div>
                               <div className="absolute top-[30%] left-[60%] w-1.5 h-1.5 bg-white/20 rounded-full"></div> {/* Outlier */}
                            </div>
                         </div>
                         
                         {/* Graph 2: Bar Chart */}
                         <div className="bg-black/40 border border-white/5 p-4 rounded">
                            <span className="text-[10px] font-mono text-white/40 uppercase block mb-4">Carry by Club</span>
                            <div className="h-20 flex items-end gap-1">
                               <div className="w-1/5 bg-brand-mink/40 h-[40%]"></div>
                               <div className="w-1/5 bg-brand-mink/60 h-[55%]"></div>
                               <div className="w-1/5 bg-brand-mink/80 h-[70%]"></div>
                               <div className="w-1/5 bg-brand-mink h-[85%]"></div>
                               <div className="w-1/5 bg-brand-mink h-[95%]"></div>
                            </div>
                         </div>

                         {/* Graph 3: Stat */}
                         <div className="bg-black/40 border border-white/5 p-4 rounded flex flex-col justify-center">
                            <span className="text-[10px] font-mono text-white/40 uppercase block mb-1">Spin Efficiency</span>
                            <span className="text-3xl font-display text-white">98.4%</span>
                            <span className="text-[9px] text-green-500 font-mono mt-1">+4.2% vs Baseline</span>
                         </div>
                      </div>
                   </div>
               </FadeIn>

               <FadeIn direction="left">
                  <h2 className="text-4xl font-display text-white mb-6">See the Difference.<br/>Before you build.</h2>
                  <p className="text-lg text-brand-polar/60 leading-relaxed mb-8">
                     We don't ask you to trust us. We ask you to trust the data. 
                     The Agent simulates 40,000 shots with your new geometry to predict exactly how the dispersion circle will tighten.
                  </p>
                  <ul className="space-y-4 font-mono text-sm text-brand-polar/80">
                     <li className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-brand-mink" />
                        <span>Visualize dispersion reduction</span>
                     </li>
                     <li className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-brand-mink" />
                        <span>Predict carry distance gains</span>
                     </li>
                     <li className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-brand-mink" />
                        <span>Verify gapping between clubs</span>
                     </li>
                  </ul>
               </FadeIn>
            </div>
         </div>
      </section>

      {/* --- COMPARISON TABLE --- */}
      <section className="py-24 bg-[#151515]">
          <div className="container mx-auto px-6 max-w-5xl">
             <FadeIn>
                <div className="grid grid-cols-1 md:grid-cols-2 bg-[#1C1C1E] border border-white/5 rounded-2xl overflow-hidden">
                   
                   {/* Traditional Side */}
                   <div className="p-10 border-b md:border-b-0 md:border-r border-white/5 opacity-60">
                      <h3 className="text-xl font-display text-white mb-6 uppercase tracking-wider">Traditional Fitting</h3>
                      <ul className="space-y-6 font-mono text-sm text-brand-polar/60">
                         <li className="flex justify-between border-b border-white/5 pb-2">
                            <span>Precision</span>
                            <span>± 1.0° (Bending Bar)</span>
                         </li>
                         <li className="flex justify-between border-b border-white/5 pb-2">
                            <span>Geometry</span>
                            <span>Standard Mold</span>
                         </li>
                         <li className="flex justify-between border-b border-white/5 pb-2">
                            <span>Weighting</span>
                            <span>Lead Tape / Tip Weights</span>
                         </li>
                         <li className="flex justify-between border-b border-white/5 pb-2">
                            <span>Process</span>
                            <span>Trial & Error</span>
                         </li>
                      </ul>
                   </div>

                   {/* Make Golf Side */}
                   <div className="p-10 bg-brand-mink/5 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1 bg-brand-mink"></div>
                      <h3 className="text-xl font-display text-white mb-6 uppercase tracking-wider flex items-center gap-2">
                         Make Golf Agent
                         <Zap className="w-4 h-4 text-brand-mink" />
                      </h3>
                      <ul className="space-y-6 font-mono text-sm text-white">
                         <li className="flex justify-between border-b border-white/10 pb-2">
                            <span>Precision</span>
                            <span className="font-bold text-brand-mink">± 0.1° (Printed)</span>
                         </li>
                         <li className="flex justify-between border-b border-white/10 pb-2">
                            <span>Geometry</span>
                            <span className="font-bold text-brand-mink">Parametric & Adaptive</span>
                         </li>
                         <li className="flex justify-between border-b border-white/10 pb-2">
                            <span>Weighting</span>
                            <span className="font-bold text-brand-mink">Internal Lattice (±0.01g)</span>
                         </li>
                         <li className="flex justify-between border-b border-white/10 pb-2">
                            <span>Process</span>
                            <span className="font-bold text-brand-mink">Algorithmic Design</span>
                         </li>
                      </ul>
                   </div>
                </div>
             </FadeIn>
          </div>
      </section>

      {/* CTA Footer */}
      <section className="py-24 text-center">
         <FadeIn>
             <h2 className="text-4xl font-display text-white mb-8">Ready to be calculated?</h2>
             <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer">
               <Button variant="primary" size="lg" className="rounded-full">
                  Launch Fitting Agent
               </Button>
             </a>
         </FadeIn>
      </section>

    </div>
  );
};

export default AIFitting;
