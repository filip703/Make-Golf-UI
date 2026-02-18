
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Upload, Cpu, FileOutput, ArrowRight, Database, Share2, RefreshCw, Sliders, CheckCircle, MessageSquare, BarChart3, Target, Zap, Layers, Microscope } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { 
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, ReferenceLine 
} from 'recharts';

// Mock Data for Dispersion Chart (Lateral vs Carry) - From Fredrik's Session
const dispersionData = [
  { x: -4, y: 161, type: 'Make J7' }, { x: -2, y: 162, type: 'Make J7' }, { x: 1, y: 161.5, type: 'Make J7' },
  { x: 3, y: 160.8, type: 'Make J7' }, { x: -1, y: 163, type: 'Make J7' },
  
  { x: -12, y: 154, type: 'Competitor A' }, { x: -8, y: 157, type: 'Competitor A' }, { x: -15, y: 152, type: 'Competitor A' },
  { x: -5, y: 159, type: 'Competitor A' }, { x: -10, y: 155, type: 'Competitor A' },
];

// Mock Data for Comparison Table
const comparisonData = [
  { rank: 1, config: 'Make J7 + LA Golf', carry: '161.9m', disp: '6.4m', consistency: '77%', smash: '1.344', note: 'Optimal' },
  { rank: 2, config: 'P7cb ProjX Red', carry: '161.9m', disp: '9.2m', consistency: '63%', smash: '1.341', note: 'High Spin' },
  { rank: 3, config: 'Neo 75 Stiff', carry: '161.0m', disp: '11.4m', consistency: '57%', smash: '1.331', note: 'Toe Strike' },
  { rank: 4, config: 'Apex MB Legacy', carry: '157.0m', disp: '15.3m', consistency: '51%', smash: '1.310', note: 'Inconsistent' },
];

const AIFitting: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'analysis' | 'comparison' | 'ai'>('analysis');
  const SIGNUP_URL = "https://maker.make.golf/embed/pages/29414631-a517-47c0-aa0f-9eb48335e20f/blocks/signup";

  const scrollToReport = () => {
    document.getElementById('report')?.scrollIntoView({ behavior: 'smooth' });
  };

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
                  <span className="text-brand-mink font-mono text-xs uppercase tracking-widest">THE FITTING AGENT</span>
                </div>
                <h1 className="text-5xl md:text-8xl font-display font-medium text-white mb-8 leading-[0.9] uppercase">
                  NOT A FORM.<br/>
                  <span className="text-brand-polar/40">AN INTELLIGENCE.</span>
                </h1>
                <p className="text-xl text-brand-polar/60 font-light font-sans max-w-xl leading-relaxed mb-10">
                  Meet MAKE-DNA. It doesn't just record your specs; it analyzes raw launch monitor data to engineer a clubhead specifically for your swing signature.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" size="lg" className="group shadow-[0_0_40px_rgba(255,34,76,0.2)] uppercase">
                      JOIN BETA ACCESS <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"/>
                    </Button>
                  </a>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-white/10 hover:border-white text-white uppercase"
                    onClick={scrollToReport}
                  >
                    VIEW SAMPLE REPORT
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
                  <h2 className="text-4xl font-display text-white mb-6 uppercase">CONVERSATIONAL<br/>ENGINEERING.</h2>
                  <p className="text-lg text-brand-polar/60 leading-relaxed mb-8">
                     Traditional fitting fits you into a "bucket" (Stiff, Upright, Standard). 
                     MAKE-DNA builds the bucket around you.
                  </p>
                  
                  <div className="space-y-6">
                     <div className="flex gap-4">
                        <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-brand-mink border border-white/5 shrink-0">
                           <Upload className="w-5 h-5" />
                        </div>
                        <div>
                           <h4 className="text-white font-display text-lg uppercase">RAW DATA INGESTION</h4>
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
                           <h4 className="text-white font-display text-lg uppercase">CONTEXTUAL ANALYSIS</h4>
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
                           <span className="text-xs font-mono uppercase tracking-widest text-white/80">FITTING AGENT</span>
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
                  <span className="text-brand-mink font-mono text-xs uppercase tracking-widest">THE CORE ENGINES</span>
                  <h2 className="text-3xl md:text-5xl font-display text-white mt-4 uppercase">HOW IT THINKS.</h2>
               </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {/* Algo 1 */}
               <FadeIn delay={0.1}>
                  <div className="bg-[#1C1C1E] p-8 rounded-xl border border-white/5 hover:border-brand-mink/30 transition-colors h-full">
                     <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center text-brand-mink mb-6">
                        <Microscope className="w-6 h-6" />
                     </div>
                     <h3 className="text-xl font-display text-white mb-2 uppercase">DEVIATION MAPPER™</h3>
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
                     <h3 className="text-xl font-display text-white mb-2 uppercase">COMPENSATION MAPPER™</h3>
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
                     <h3 className="text-xl font-display text-white mb-2 uppercase">COG TARGET CALCULATOR™</h3>
                     <p className="text-brand-polar/50 text-sm leading-relaxed font-mono">
                        Optimizes Center of Gravity placement based on your impact location tendencies. Hits high on the face? We shift mass higher to maintain ball speed and smash factor.
                     </p>
                  </div>
               </FadeIn>
            </div>
         </div>
      </section>

      {/* --- DATA DASHBOARD VISUALIZATION --- */}
      <section id="report" className="py-24 bg-brand-black border-t border-white/5">
         <div className="container mx-auto px-6">
            
            <FadeIn>
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display text-white mb-6 uppercase">SEE THE DIFFERENCE.<br/>BEFORE YOU BUILD.</h2>
                    <p className="text-lg text-brand-polar/60 leading-relaxed max-w-2xl mx-auto">
                        We don't ask you to trust us. We ask you to trust the data. 
                        The Agent simulates 40,000 shots with your new geometry to predict exactly how the dispersion circle will tighten.
                    </p>
                </div>
            </FadeIn>

            <FadeIn>
                <div className="bg-[#1C1C1E] border border-white/10 rounded-xl overflow-hidden shadow-2xl relative">
                   {/* Dashboard Header */}
                   <div className="bg-[#242424] border-b border-white/5 px-6 py-4 flex items-center justify-between flex-wrap gap-4">
                      <div className="flex items-center gap-4">
                         <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                         </div>
                         <div className="h-6 w-px bg-white/10"></div>
                         <span className="text-xs font-mono text-white/50 uppercase">Session: Fredrik Hedlund - Test 001</span>
                      </div>
                      <div className="flex gap-4 text-xs font-mono">
                         <button 
                            onClick={() => setActiveTab('analysis')}
                            className={`hover:text-brand-mink transition-colors ${activeTab === 'analysis' ? 'text-brand-mink' : 'text-white/40'}`}
                         >
                            [1] DISPERSION
                         </button>
                         <button 
                            onClick={() => setActiveTab('comparison')}
                            className={`hover:text-brand-mink transition-colors ${activeTab === 'comparison' ? 'text-brand-mink' : 'text-white/40'}`}
                         >
                            [2] COMPARISON
                         </button>
                         <button 
                            onClick={() => setActiveTab('ai')}
                            className={`hover:text-brand-mink transition-colors ${activeTab === 'ai' ? 'text-brand-mink' : 'text-white/40'}`}
                         >
                            [3] AI INSIGHTS
                         </button>
                      </div>
                   </div>

                   {/* Dashboard Body */}
                   <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[500px]">
                      
                      {/* Left Sidebar (Session Stats) */}
                      <div className="hidden lg:block col-span-1 bg-[#1C1C1E] border-r border-white/5 p-6">
                         <div className="mb-8">
                            <div className="text-[10px] font-mono text-brand-polar/40 uppercase mb-2">Total Shots</div>
                            <div className="text-4xl font-display text-white">53</div>
                            <div className="text-[10px] text-green-500 font-mono mt-1">High Data Confidence</div>
                         </div>
                         
                         <div className="space-y-6">
                            <div className="bg-[#242424] p-4 rounded border border-white/5">
                               <div className="flex justify-between items-center mb-2">
                                  <span className="text-[10px] uppercase text-white/60">Consistency</span>
                                  <span className="text-xs font-bold text-brand-mink">64%</span>
                               </div>
                               <div className="w-full bg-black h-1 rounded overflow-hidden">
                                  <div className="bg-brand-mink w-[64%] h-full"></div>
                               </div>
                            </div>
                            
                            <div className="bg-[#242424] p-4 rounded border border-white/5">
                               <div className="flex justify-between items-center mb-2">
                                  <span className="text-[10px] uppercase text-white/60">Impact Bias</span>
                                  <span className="text-xs font-bold text-white">-1.0mm</span>
                               </div>
                               <div className="text-[9px] text-white/40 font-mono">Centered Pattern (Excellent)</div>
                            </div>

                            <div className="p-4 bg-brand-mink/10 border border-brand-mink/20 rounded">
                               <div className="flex items-start gap-3">
                                  <Zap className="w-4 h-4 text-brand-mink shrink-0 mt-0.5" />
                                  <p className="text-[10px] text-brand-polar/80 leading-relaxed">
                                     <strong>Alert:</strong> ProJx Std 6.5 shaft is producing 14.3m dispersion. Shaft is too stiff for player delivery.
                                  </p>
                               </div>
                            </div>
                         </div>
                      </div>

                      {/* Main Visualization Area */}
                      <div className="col-span-2 bg-[#181818] p-8 relative">
                         
                         {activeTab === 'analysis' && (
                            <div className="h-full flex flex-col">
                               <div className="flex justify-between items-center mb-6">
                                  <h3 className="text-xl font-display text-white">Dispersion Analysis</h3>
                                  <div className="flex gap-4 text-[10px] font-mono">
                                     <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-brand-mink"></span> MAKE J7</span>
                                     <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-white/20"></span> COMPETITOR</span>
                                  </div>
                               </div>
                               <div className="flex-grow min-h-[350px]">
                                  <ResponsiveContainer width="100%" height="100%">
                                     <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                                        <XAxis type="number" dataKey="x" name="Lateral" unit="m" stroke="#666" fontSize={10} domain={[-20, 20]} />
                                        <YAxis type="number" dataKey="y" name="Carry" unit="m" stroke="#666" fontSize={10} domain={[140, 180]} />
                                        <Tooltip cursor={{ strokeDasharray: '3 3' }} contentStyle={{ backgroundColor: '#1C1C1E', borderColor: '#333', color: '#fff', fontSize: '12px' }} />
                                        <ReferenceLine x={0} stroke="#444" strokeDasharray="3 3" />
                                        <Scatter name="Shots" data={dispersionData} fill="#8884d8">
                                           {dispersionData.map((entry, index) => (
                                              <Cell key={`cell-${index}`} fill={entry.type === 'Make J7' ? '#FF224C' : '#ffffff40'} />
                                           ))}
                                        </Scatter>
                                     </ScatterChart>
                                  </ResponsiveContainer>
                               </div>
                            </div>
                         )}

                         {activeTab === 'comparison' && (
                            <div className="h-full">
                               <h3 className="text-xl font-display text-white mb-6">Head-to-Head Performance</h3>
                               <div className="overflow-x-auto">
                                  <table className="w-full text-left border-collapse">
                                     <thead>
                                        <tr className="border-b border-white/10 text-[10px] font-mono text-white/40 uppercase">
                                           <th className="py-3 pl-2">Rank</th>
                                           <th className="py-3">Configuration</th>
                                           <th className="py-3">Carry</th>
                                           <th className="py-3">Dispersion</th>
                                           <th className="py-3">Consistency</th>
                                           <th className="py-3">Smash</th>
                                        </tr>
                                     </thead>
                                     <tbody className="text-sm font-sans text-brand-polar/80">
                                        {comparisonData.map((row, i) => (
                                           <tr key={i} className={`border-b border-white/5 hover:bg-white/5 transition-colors ${i === 0 ? 'bg-brand-mink/5' : ''}`}>
                                              <td className="py-4 pl-2 font-mono text-brand-mink font-bold">#{row.rank}</td>
                                              <td className="py-4 font-bold text-white">{row.config}</td>
                                              <td className="py-4">{row.carry}</td>
                                              <td className="py-4">{row.disp}</td>
                                              <td className="py-4">{row.consistency}</td>
                                              <td className="py-4">{row.smash}</td>
                                           </tr>
                                        ))}
                                     </tbody>
                                  </table>
                               </div>
                            </div>
                         )}

                         {activeTab === 'ai' && (
                            <div className="h-full overflow-y-auto pr-2 custom-scrollbar">
                               <h3 className="text-xl font-display text-white mb-6">Critical Observations</h3>
                               
                               <div className="space-y-6">
                                  <div className="p-4 border border-white/10 rounded bg-[#242424]">
                                     <div className="text-brand-mink text-xs font-mono uppercase mb-2">Observation 01</div>
                                     <h4 className="text-white font-bold mb-2">The "Toe-Bias" Paradox</h4>
                                     <p className="text-sm text-brand-polar/60 leading-relaxed">
                                        Player consistently strikes 4mm toe-side with standard configurations. 
                                        <strong>Interpretation:</strong> Muscle back designs typically punish this with -8% ball speed.
                                        <strong>Solution:</strong> Make J7 adjusts CG 3mm towards the toe without altering the address profile.
                                     </p>
                                  </div>

                                  <div className="p-4 border border-white/10 rounded bg-[#242424]">
                                     <div className="text-brand-mink text-xs font-mono uppercase mb-2">Observation 02</div>
                                     <h4 className="text-white font-bold mb-2">Lie Angle Correlation</h4>
                                     <p className="text-sm text-brand-polar/60 leading-relaxed">
                                        Strong correlation between miss-right and flat lie angle impact.
                                        <strong>Recommendation:</strong> +1.2° Upright lie angle will center the impact dispersion circle by approx 4.5m.
                                     </p>
                                  </div>

                                  <div className="p-4 border border-white/10 rounded bg-[#242424]">
                                     <div className="text-brand-mink text-xs font-mono uppercase mb-2">Observation 03</div>
                                     <h4 className="text-white font-bold mb-2">Shaft Load Profile</h4>
                                     <p className="text-sm text-brand-polar/60 leading-relaxed">
                                        Project X 6.5 (Standard) shows inconsistent delivery (-14.3m dispersion). 
                                        LA Golf L-Series stabilizes face closure rate. 
                                        <strong>Action:</strong> Switch to L-Series 120 Stiff.
                                     </p>
                                  </div>
                               </div>
                            </div>
                         )}

                      </div>
                   </div>
                </div>
            </FadeIn>
         </div>
      </section>

      {/* --- COMPARISON TABLE --- */}
      <section className="py-24 bg-[#151515]">
          <div className="container mx-auto px-6 max-w-5xl">
             <FadeIn>
                <div className="grid grid-cols-1 md:grid-cols-2 bg-[#1C1C1E] border border-white/5 rounded-2xl overflow-hidden">
                   
                   {/* Traditional Side */}
                   <div className="p-10 border-b md:border-b-0 md:border-r border-white/5 opacity-60">
                      <h3 className="text-xl font-display text-white mb-6 uppercase tracking-wider">TRADITIONAL FITTING</h3>
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
                         MAKE-DNA
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
             <h2 className="text-4xl font-display text-white mb-8 uppercase">READY TO BE CALCULATED?</h2>
             <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer">
               <Button variant="primary" size="lg" className="rounded-full uppercase">
                  LAUNCH FITTING AGENT
               </Button>
             </a>
         </FadeIn>
      </section>

    </div>
  );
};

export default AIFitting;
