
import React, { useState } from 'react';
import FadeIn from '../components/FadeIn';
import Button from '../components/Button';
import { 
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, ReferenceLine 
} from 'recharts';
import { 
  TrendingUp, Box, DollarSign, ExternalLink, Check, LayoutDashboard, 
  Target, BarChart3, MessageSquare, ShieldCheck, Zap 
} from 'lucide-react';

// Mock Data for Dispersion Chart (Lateral vs Carry)
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

const PRICING_TIERS = [
  {
    name: "PRO",
    target: "Individual Fitter",
    price: "€149",
    period: "/ month",
    annual: "€1,490 / year (Save 17%)",
    seats: "1 Seat",
    fee: "€75 per head",
    features: [
      "Make Fitter SaaS Access",
      "Upload Trackman/GCQuad Data",
      "Basic Client Reports (PDF)",
      "Club History per Client",
      "Email Support (48hr)"
    ],
    cta: "Start Free Trial",
    highlight: false
  },
  {
    name: "STUDIO",
    target: "Fitting Teams",
    price: "€399",
    period: "/ month",
    annual: "€3,990 / year (Save 17%)",
    seats: "Up to 3 Seats",
    fee: "€55 per head",
    features: [
      "Everything in PRO",
      "Priority Validation Queue",
      "Branded White-label Reports",
      "Fitter Dashboard + Trends",
      "Live 1:1 Onboarding",
      "Priority Chat Support"
    ],
    cta: "Upgrade to Studio",
    highlight: true
  },
  {
    name: "ENTERPRISE",
    target: "Retail & Academies",
    price: "Custom",
    period: "",
    annual: "Volume Pricing",
    seats: "Unlimited",
    fee: "€40 per head",
    features: [
      "Full API Access",
      "Dedicated Validator",
      "Custom Implementation",
      "Multi-location Analytics",
      "Dedicated Account Manager",
      "POS Integration"
    ],
    cta: "Contact Sales",
    highlight: false
  }
];

const Fitters: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'analysis' | 'comparison' | 'ai'>('analysis');
  const DASHBOARD_URL = "https://frontend-seven-iota-56.vercel.app/dashboard";
  const BETA_URL = "https://make.golf/#sign-up";

  return (
    <div className="min-h-screen bg-brand-black pt-20 text-brand-polar">
      
      {/* Hero Section */}
      <section className="relative py-24 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-mink/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-mink/10 text-brand-mink border border-brand-mink/30 text-[10px] font-mono font-bold tracking-widest mb-8 uppercase rounded-full">
               <Zap className="w-3 h-3" /> Make Fitter SaaS Platform
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-medium text-white mb-8 leading-[0.95]">
              The Operating System<br/>
              <span className="text-brand-polar/40">For Modern Fitters.</span>
            </h1>
            <p className="text-lg text-brand-polar/60 max-w-2xl mx-auto mb-10 font-sans font-light">
              Use our AI engine to analyze data from any launch monitor and generate precise recommendations—whether you sell Make Golf hardware or not.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href={BETA_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="lg" className="rounded-md w-full sm:w-auto">Start 14-Day Free Trial</Button>
              </a>
              <a href={DASHBOARD_URL} target="_blank" rel="noopener noreferrer">
                 <Button variant="outline" size="lg" className="border-white/20 text-white hover:border-white rounded-md w-full sm:w-auto">
                    View Sample Report
                 </Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* --- SOFTWARE DEMO SECTION (THE "WOW" FACTOR) --- */}
      <section className="py-24 bg-[#151515] border-b border-white/5">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="bg-[#1C1C1E] border border-white/10 rounded-xl overflow-hidden shadow-2xl relative">
               {/* Dashboard Header */}
               <div className="bg-[#242424] border-b border-white/5 px-6 py-4 flex items-center justify-between">
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

      {/* --- BUSINESS MODEL EXPLAINER --- */}
      <section className="py-24 bg-[#181818]">
         <div className="container mx-auto px-6">
            <FadeIn>
               <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-display text-white mb-4">How You Make Money</h2>
                  <p className="text-brand-polar/50 max-w-2xl mx-auto">
                     We separate the software from the hardware. Use the platform to improve your fitting service, 
                     and unlock wholesale pricing on the world's most advanced equipment.
                  </p>
               </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
               <FadeIn delay={0.1}>
                  <div className="bg-[#1C1C1E] p-8 rounded-xl border border-white/5 h-full relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-6 opacity-5">
                        <LayoutDashboard className="w-32 h-32" />
                     </div>
                     <h3 className="text-2xl font-display text-white mb-4">1. The Service</h3>
                     <p className="text-brand-polar/60 text-sm leading-relaxed mb-6">
                        Charge your standard hourly fitting rate (€80-€120/hr). Use the Make Fitter software to provide a superior, data-driven experience that justifies a premium service fee.
                     </p>
                     <ul className="space-y-3 text-sm font-mono text-brand-polar/80">
                        <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-mink" /> Premium Fitting Experience</li>
                        <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-mink" /> PDF Take-home Reports</li>
                        <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-mink" /> Brand Agnostic Analysis</li>
                     </ul>
                  </div>
               </FadeIn>

               <FadeIn delay={0.2}>
                  <div className="bg-[#1C1C1E] p-8 rounded-xl border border-white/5 h-full relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-6 opacity-5">
                        <DollarSign className="w-32 h-32" />
                     </div>
                     <h3 className="text-2xl font-display text-white mb-4">2. The Hardware</h3>
                     <p className="text-brand-polar/60 text-sm leading-relaxed mb-6">
                        When you fit a customer into Make Golf clubs, you buy at Wholesale and sell at Retail.
                     </p>
                     <div className="bg-[#242424] p-4 rounded border border-white/5 mb-4">
                        <div className="flex justify-between items-center mb-1">
                           <span className="text-xs font-mono text-white/50 uppercase">Retail Price (Est)</span>
                           <span className="text-white font-bold">€450 / head</span>
                        </div>
                        <div className="flex justify-between items-center">
                           <span className="text-xs font-mono text-white/50 uppercase">Wholesale Cost</span>
                           <span className="text-white font-bold">€280 / head</span>
                        </div>
                        <div className="mt-3 pt-3 border-t border-white/10 flex justify-between items-center text-brand-mink">
                           <span className="text-xs font-mono uppercase font-bold">Your Margin</span>
                           <span className="font-bold font-display text-lg">€170 / head</span>
                        </div>
                     </div>
                  </div>
               </FadeIn>
            </div>
         </div>
      </section>

      {/* --- PRICING TIERS --- */}
      <section className="py-24 bg-[#151515] border-t border-white/5">
         <div className="container mx-auto px-6">
            <FadeIn>
               <h2 className="text-3xl md:text-5xl font-display text-white text-center mb-16">Platform Pricing</h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
               {PRICING_TIERS.map((tier, index) => (
                  <FadeIn key={tier.name} delay={index * 0.1}>
                     <div className={`relative flex flex-col h-full rounded-2xl p-8 border transition-all duration-300 ${tier.highlight ? 'bg-[#1C1C1E] border-brand-mink shadow-[0_0_30px_rgba(255,34,76,0.1)] scale-105 z-10' : 'bg-[#181818] border-white/5 hover:border-white/20'}`}>
                        
                        {tier.highlight && (
                           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-mink text-white text-[10px] font-bold font-mono uppercase px-3 py-1 rounded-full tracking-widest">
                              Most Popular
                           </div>
                        )}

                        <div className="mb-6">
                           <h3 className={`text-xl font-display font-bold ${tier.highlight ? 'text-brand-mink' : 'text-white'}`}>{tier.name}</h3>
                           <p className="text-xs font-mono text-white/50 uppercase mt-1">{tier.target}</p>
                        </div>

                        <div className="mb-8">
                           <div className="flex items-baseline gap-1">
                              <span className="text-4xl font-display font-medium text-white">{tier.price}</span>
                              <span className="text-sm text-white/50">{tier.period}</span>
                           </div>
                           <p className="text-xs text-brand-polar/40 mt-2">{tier.annual}</p>
                        </div>

                        {/* Config Fee Highlight */}
                        <div className="bg-white/5 rounded-lg p-3 mb-8 text-center border border-white/5">
                           <span className="block text-[10px] text-white/40 uppercase font-mono">Config Fee</span>
                           <span className="text-lg font-display text-white">{tier.fee}</span>
                        </div>

                        <ul className="space-y-4 mb-8 flex-grow">
                           <li className="flex items-center gap-3 text-sm text-white">
                              <Check className="w-4 h-4 text-brand-mink shrink-0" />
                              <span>{tier.seats}</span>
                           </li>
                           {tier.features.map((feat, i) => (
                              <li key={i} className="flex items-center gap-3 text-sm text-brand-polar/70">
                                 <Check className="w-4 h-4 text-brand-mink/50 shrink-0" />
                                 <span>{feat}</span>
                              </li>
                           ))}
                        </ul>

                        <a href={BETA_URL} target="_blank" rel="noopener noreferrer">
                           <Button 
                              variant={tier.highlight ? 'primary' : 'outline'} 
                              size="md" 
                              className="w-full justify-center"
                           >
                              {tier.cta}
                           </Button>
                        </a>
                     </div>
                  </FadeIn>
               ))}
            </div>
         </div>
      </section>

    </div>
  );
};

export default Fitters;
