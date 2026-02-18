
import React, { useState } from 'react';
import FadeIn from '../components/FadeIn';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  DollarSign, ExternalLink, Check, LayoutDashboard, 
  Zap, TrendingUp, Briefcase, Calculator, Users, BarChart3, Calendar, Bell, Search, Plus, ArrowRight
} from 'lucide-react';

const PRICING_TIERS = [
  {
    name: "SAAS ONLY",
    target: "Software License",
    price: "€149",
    period: "/ month",
    annual: "€1,490 / year",
    seats: "1 Seat",
    fee: "Hardware Access: No",
    features: [
      "Make Fitter Platform Access",
      "Upload Trackman/GCQuad Data",
      "AI Analysis & Recommendations",
      "Client History & PDF Reports",
      "Standard Support"
    ],
    cta: "Start Software Trial",
    highlight: false
  },
  {
    name: "PARTNER",
    target: "Full Ecosystem",
    price: "€399",
    period: "/ month",
    annual: "€3,990 / year",
    seats: "Up to 3 Seats",
    fee: "Hardware Access: YES",
    features: [
      "Everything in SaaS Only",
      "Access to Make Hardware (Wholesale)",
      "~35% Margin on Club Sales",
      "Priority Manufacturing Queue",
      "Branded White-label Reports",
      "Dedicated Success Manager"
    ],
    cta: "Become a Partner",
    highlight: true
  },
  {
    name: "ENTERPRISE",
    target: "Retail Chains",
    price: "Custom",
    period: "",
    annual: "Volume Pricing",
    seats: "Unlimited",
    fee: "Hardware Access: YES",
    features: [
      "Full API Access",
      "Custom Retail Integration",
      "Multi-location Analytics",
      "Volume Hardware Discounts",
      "POS Integration",
      "On-site Training"
    ],
    cta: "Contact Sales",
    highlight: false
  }
];

const Fitters: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'crm' | 'analysis'>('dashboard');
  const DASHBOARD_URL = "https://frontend-seven-iota-56.vercel.app/login";
  const PARTNER_EMAIL = "mailto:partners@make.golf";

  return (
    <div className="min-h-screen bg-brand-black pt-20 text-brand-polar selection:bg-brand-mink selection:text-white">
      
      {/* Hero Section */}
      <section className="relative py-24 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-mink/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-mink/10 text-brand-mink border border-brand-mink/30 text-[10px] font-mono font-bold tracking-widest mb-8 uppercase rounded-full">
               <Zap className="w-3 h-3" /> Fitter Operating System
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-medium text-white mb-8 leading-[0.95]">
              Sell Your Expertise.<br/>
              <span className="text-brand-polar/40">Scale Your Margin.</span>
            </h1>
            <p className="text-lg text-brand-polar/60 max-w-2xl mx-auto mb-10 font-sans font-light">
              A hybrid business model for the modern professional. Use our AI platform to justify premium fitting fees, and unlock wholesale pricing on the world's most advanced equipment.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href={PARTNER_EMAIL} rel="noopener noreferrer">
                <Button variant="primary" size="lg" className="rounded-md w-full sm:w-auto">Apply for Partnership</Button>
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

      {/* --- PLATFORM PREVIEW (The "PDF" Sections) --- */}
      <section className="py-24 bg-[#151515] border-b border-white/5">
        <div className="container mx-auto px-6">
          <FadeIn>
             <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-display text-white mb-6">The Operating System</h2>
                <div className="flex flex-wrap justify-center gap-4">
                   <button 
                      onClick={() => setActiveTab('dashboard')}
                      className={`px-6 py-2 rounded-full text-xs font-mono uppercase tracking-widest border transition-all ${activeTab === 'dashboard' ? 'bg-white text-black border-white' : 'bg-transparent text-white/50 border-white/10 hover:border-white/40'}`}
                   >
                      01. Command Center
                   </button>
                   <button 
                      onClick={() => setActiveTab('crm')}
                      className={`px-6 py-2 rounded-full text-xs font-mono uppercase tracking-widest border transition-all ${activeTab === 'crm' ? 'bg-white text-black border-white' : 'bg-transparent text-white/50 border-white/10 hover:border-white/40'}`}
                   >
                      02. Player CRM
                   </button>
                   <button 
                      onClick={() => setActiveTab('analysis')}
                      className={`px-6 py-2 rounded-full text-xs font-mono uppercase tracking-widest border transition-all ${activeTab === 'analysis' ? 'bg-white text-black border-white' : 'bg-transparent text-white/50 border-white/10 hover:border-white/40'}`}
                   >
                      03. AI Analysis
                   </button>
                </div>
             </div>
          </FadeIn>

          <FadeIn>
            <div className="bg-[#1C1C1E] border border-white/10 rounded-xl overflow-hidden shadow-2xl relative min-h-[600px] flex flex-col">
               {/* Browser Chrome */}
               <div className="bg-[#242424] border-b border-white/5 px-4 py-3 flex items-center gap-4">
                  <div className="flex gap-2">
                     <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                     <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                  </div>
                  <div className="bg-[#151515] px-4 py-1.5 rounded text-[10px] font-mono text-white/40 flex-1 text-center border border-white/5">
                     make.golf/partner/dashboard
                  </div>
               </div>

               {/* View Content */}
               <div className="bg-[#F5F5F7] flex-grow p-4 md:p-8 overflow-y-auto text-[#1C1C1E] font-sans">
                  
                  <AnimatePresence mode="wait">
                    {activeTab === 'dashboard' && (
                       <motion.div 
                          key="dashboard"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-8"
                       >
                          {/* Header */}
                          <div className="flex flex-col md:flex-row justify-between items-end mb-8">
                             <div>
                                <h2 className="text-3xl font-display font-bold text-[#1C1C1E] mb-1">Good morning, Erik ⛳</h2>
                                <p className="text-xs font-mono text-[#1C1C1E]/50">Tuesday Feb 18, 2026 · 2 fittings scheduled today</p>
                             </div>
                             <div className="flex gap-3 mt-4 md:mt-0">
                                <button className="bg-white border border-black/10 px-4 py-2 rounded text-xs font-bold shadow-sm hover:bg-gray-50">Plan Session</button>
                                <button className="bg-brand-mink text-white px-4 py-2 rounded text-xs font-bold shadow-lg hover:bg-brand-mink/90">+ Start Fitting</button>
                             </div>
                          </div>

                          {/* Stats Cards */}
                          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                             <div className="bg-white p-5 rounded-lg border border-black/5 shadow-sm">
                                <div className="text-[10px] font-mono uppercase tracking-widest text-[#1C1C1E]/40 mb-2">Active Golfers</div>
                                <div className="text-3xl font-display font-bold text-[#1C1C1E]">24</div>
                                <div className="text-[10px] text-green-600 font-mono mt-1">↑ +3 last 30 days</div>
                             </div>
                             <div className="bg-white p-5 rounded-lg border border-black/5 shadow-sm">
                                <div className="text-[10px] font-mono uppercase tracking-widest text-[#1C1C1E]/40 mb-2">Total Analyses</div>
                                <div className="text-3xl font-display font-bold text-[#1C1C1E]">67</div>
                                <div className="text-[10px] text-[#1C1C1E]/40 font-mono mt-1">→ 4 awaiting review</div>
                             </div>
                             <div className="bg-white p-5 rounded-lg border border-black/5 shadow-sm">
                                <div className="text-[10px] font-mono uppercase tracking-widest text-[#1C1C1E]/40 mb-2">Orders</div>
                                <div className="text-3xl font-display font-bold text-[#1C1C1E]">12</div>
                                <div className="text-[10px] text-green-600 font-mono mt-1">↑ 3 delivering this week</div>
                             </div>
                             <div className="bg-white p-5 rounded-lg border border-brand-mink/30 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-2 opacity-10"><Zap className="w-10 h-10 text-brand-mink"/></div>
                                <div className="text-[10px] font-mono uppercase tracking-widest text-brand-mink mb-2">Re-fit Triggers</div>
                                <div className="text-3xl font-display font-bold text-brand-mink">2</div>
                                <div className="text-[10px] text-[#1C1C1E]/60 font-mono mt-1">⚠ Swing evolution detected</div>
                             </div>
                          </div>

                          {/* Activity Feed mockup */}
                          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                             <div className="lg:col-span-2">
                                <div className="bg-[#1C1C1E] rounded-lg p-6 text-white mb-6">
                                   <div className="flex items-start gap-4">
                                      <div className="w-10 h-10 rounded-full bg-brand-mink flex items-center justify-center shrink-0">
                                         <Zap className="w-5 h-5 text-white" />
                                      </div>
                                      <div>
                                         <h3 className="font-bold text-lg">Start Fitting Now</h3>
                                         <p className="text-white/60 text-xs font-mono mt-1 mb-4">Select golfer → Load data → Run analysis</p>
                                         <div className="h-1 w-full bg-white/10 rounded overflow-hidden">
                                            <div className="h-full bg-brand-mink w-1/3"></div>
                                         </div>
                                      </div>
                                   </div>
                                </div>
                             </div>
                             
                             <div className="bg-white border border-black/5 rounded-lg p-6">
                                <div className="text-[10px] font-mono uppercase tracking-widest text-[#1C1C1E]/40 mb-4">Recent Activity</div>
                                <div className="space-y-4">
                                   <div className="flex gap-3">
                                      <div className="w-2 h-2 rounded-full bg-brand-mink mt-1.5 shrink-0"></div>
                                      <div>
                                         <p className="text-xs font-bold text-[#1C1C1E]">Anna K. — 7-iron analysis complete</p>
                                         <p className="text-[10px] text-[#1C1C1E]/50 font-mono">13 min ago</p>
                                      </div>
                                   </div>
                                   <div className="flex gap-3">
                                      <div className="w-2 h-2 rounded-full bg-green-500 mt-1.5 shrink-0"></div>
                                      <div>
                                         <p className="text-xs font-bold text-[#1C1C1E]">Marcus T. — Order #MG-089</p>
                                         <p className="text-[10px] text-[#1C1C1E]/50 font-mono">2h ago</p>
                                      </div>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </motion.div>
                    )}

                    {activeTab === 'crm' && (
                       <motion.div 
                          key="crm"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-6"
                       >
                          <div className="flex justify-between items-center">
                             <h2 className="text-2xl font-display font-bold text-[#1C1C1E]">My Golfers</h2>
                             <button className="bg-brand-mink text-white px-4 py-2 rounded text-xs font-bold hover:bg-brand-mink/90 flex items-center gap-2">
                                <Plus className="w-3 h-3" /> New Golfer
                             </button>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                             <div className="bg-white p-4 rounded border border-black/5">
                                <div className="text-[10px] font-mono uppercase text-[#1C1C1E]/40">Fittings This Month</div>
                                <div className="text-2xl font-bold">8</div>
                             </div>
                             <div className="bg-white p-4 rounded border border-black/5">
                                <div className="text-[10px] font-mono uppercase text-[#1C1C1E]/40">Pending Analyses</div>
                                <div className="text-2xl font-bold text-yellow-600">4</div>
                             </div>
                             <div className="bg-white p-4 rounded border border-black/5">
                                <div className="text-[10px] font-mono uppercase text-[#1C1C1E]/40">Re-Fit Triggers</div>
                                <div className="text-2xl font-bold text-brand-mink">2</div>
                             </div>
                          </div>

                          {/* List */}
                          <div className="bg-white border border-black/5 rounded-lg overflow-hidden">
                             {/* Item 1 */}
                             <div className="flex items-center justify-between p-4 border-b border-black/5 hover:bg-gray-50">
                                <div className="flex items-center gap-4">
                                   <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-xs">AK</div>
                                   <div>
                                      <div className="text-sm font-bold text-[#1C1C1E]">Anna K.</div>
                                   </div>
                                </div>
                                <div className="text-xs font-mono text-[#1C1C1E]/50 hidden md:block">Iron Fitting · Feb 18</div>
                                <div className="flex items-center gap-4">
                                   <span className="font-bold text-sm">8.4</span>
                                   <span className="bg-green-100 text-green-700 text-[9px] font-bold px-2 py-1 rounded uppercase tracking-wider">Active</span>
                                </div>
                             </div>
                             {/* Item 2 */}
                             <div className="flex items-center justify-between p-4 border-b border-black/5 hover:bg-gray-50">
                                <div className="flex items-center gap-4">
                                   <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-xs">MT</div>
                                   <div>
                                      <div className="text-sm font-bold text-[#1C1C1E]">Marcus T.</div>
                                   </div>
                                </div>
                                <div className="text-xs font-mono text-[#1C1C1E]/50 hidden md:block">Full set · Delivered</div>
                                <div className="flex items-center gap-4">
                                   <span className="font-bold text-sm">12.1</span>
                                   <span className="bg-green-100 text-green-700 text-[9px] font-bold px-2 py-1 rounded uppercase tracking-wider">Active</span>
                                </div>
                             </div>
                             {/* Item 3 */}
                             <div className="flex items-center justify-between p-4 border-b border-black/5 bg-brand-mink/5">
                                <div className="flex items-center gap-4">
                                   <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-xs">JS</div>
                                   <div>
                                      <div className="text-sm font-bold text-[#1C1C1E]">Johan S.</div>
                                   </div>
                                </div>
                                <div className="text-xs font-mono text-[#1C1C1E]/50 hidden md:block text-brand-mink">⚠ Re-fit trigger detected</div>
                                <div className="flex items-center gap-4">
                                   <span className="font-bold text-sm">4.7</span>
                                   <span className="bg-yellow-100 text-yellow-700 text-[9px] font-bold px-2 py-1 rounded uppercase tracking-wider">Re-Fit</span>
                                </div>
                             </div>
                             {/* Item 4 */}
                             <div className="flex items-center justify-between p-4 hover:bg-gray-50">
                                <div className="flex items-center gap-4">
                                   <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-xs">SL</div>
                                   <div>
                                      <div className="text-sm font-bold text-[#1C1C1E]">Sara L.</div>
                                   </div>
                                </div>
                                <div className="text-xs font-mono text-[#1C1C1E]/50 hidden md:block">New Golfer · Invite sent</div>
                                <div className="flex items-center gap-4">
                                   <span className="font-bold text-sm">—</span>
                                   <span className="bg-gray-100 text-gray-500 text-[9px] font-bold px-2 py-1 rounded uppercase tracking-wider">New</span>
                                </div>
                             </div>
                          </div>
                       </motion.div>
                    )}

                    {activeTab === 'analysis' && (
                       <motion.div 
                          key="analysis"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-6"
                       >
                          <div className="flex justify-between items-start">
                             <div>
                                <h2 className="text-2xl font-display font-bold text-[#1C1C1E]">7-Iron • Systematic Analysis</h2>
                                <p className="text-xs font-mono text-[#1C1C1E]/50">Anna K. · Feb 18 2026 · TrackMan · 45 shots</p>
                             </div>
                             <div className="flex gap-2">
                                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-[9px] font-bold uppercase">High Quality</span>
                                <span className="bg-brand-mink/10 text-brand-mink px-2 py-1 rounded text-[9px] font-bold uppercase">Action Required</span>
                             </div>
                          </div>

                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                             {/* Dispersion Mock */}
                             <div className="bg-white p-6 rounded-lg border border-black/5 shadow-sm">
                                <h3 className="text-sm font-bold mb-4">Dispersion Pattern — 7-Iron</h3>
                                <div className="aspect-[16/9] bg-gray-50 rounded border border-black/5 relative overflow-hidden flex items-center justify-center">
                                    <div className="absolute inset-0 bg-grid opacity-20 bg-[size:20px_20px]"></div>
                                    {/* Target Line */}
                                    <div className="absolute top-0 bottom-0 left-1/2 w-px bg-black/10 border-r border-dashed border-black/30"></div>
                                    <div className="absolute left-0 right-0 top-1/2 h-px bg-black/10 border-b border-dashed border-black/30"></div>
                                    
                                    {/* Optimal Zone */}
                                    <div className="absolute w-16 h-24 rounded-[50%] border-2 border-green-500/30 bg-green-500/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                                    
                                    {/* Shot Clusters - Right Bias */}
                                    <div className="absolute top-[48%] left-[55%] w-2 h-2 bg-brand-mink rounded-full opacity-80"></div>
                                    <div className="absolute top-[49%] left-[58%] w-2 h-2 bg-brand-mink rounded-full opacity-80"></div>
                                    <div className="absolute top-[47%] left-[56%] w-2 h-2 bg-brand-mink rounded-full opacity-80"></div>
                                    <div className="absolute top-[50%] left-[60%] w-2 h-2 bg-brand-mink rounded-full opacity-80"></div>
                                    <div className="absolute top-[52%] left-[54%] w-2 h-2 bg-brand-mink rounded-full opacity-80"></div>
                                    
                                    {/* Outliers */}
                                    <div className="absolute top-[45%] left-[52%] w-2 h-2 bg-gray-400 rounded-full opacity-50"></div>
                                </div>
                                <div className="mt-2 text-[9px] font-mono text-[#1C1C1E]/50">
                                   → Systematic right deviation: Ø +12 yards
                                </div>
                             </div>

                             {/* Launch Params */}
                             <div className="bg-white p-6 rounded-lg border border-black/5 shadow-sm">
                                <h3 className="text-sm font-bold mb-8">Launch Params vs. Optimal</h3>
                                <div className="flex justify-between items-end h-32 px-4 pb-4 border-b border-black/5 relative">
                                    <div className="text-center w-1/4">
                                       <div className="h-16 bg-gray-200 w-full rounded-t mx-auto relative group">
                                          <div className="absolute bottom-0 w-full bg-brand-mink h-[60%] rounded-t opacity-80"></div>
                                          <div className="absolute -top-6 w-full text-center text-[9px] font-mono opacity-0 group-hover:opacity-100 transition-opacity">Optimal: 18°</div>
                                       </div>
                                       <div className="text-[10px] font-mono mt-2 text-[#1C1C1E]/50 uppercase">Launch<br/><span className="text-[#1C1C1E] font-bold">16.2°</span></div>
                                    </div>
                                    <div className="text-center w-1/4">
                                       <div className="h-24 bg-gray-200 w-full rounded-t mx-auto relative group">
                                          <div className="absolute bottom-0 w-full bg-brand-mink h-[110%] rounded-t opacity-80"></div>
                                       </div>
                                       <div className="text-[10px] font-mono mt-2 text-[#1C1C1E]/50 uppercase">Spin<br/><span className="text-[#1C1C1E] font-bold">7100</span></div>
                                    </div>
                                    <div className="text-center w-1/4">
                                       <div className="h-20 bg-gray-200 w-full rounded-t mx-auto relative group">
                                          <div className="absolute bottom-0 w-full bg-green-500 h-[98%] rounded-t opacity-80"></div>
                                       </div>
                                       <div className="text-[10px] font-mono mt-2 text-[#1C1C1E]/50 uppercase">Speed<br/><span className="text-[#1C1C1E] font-bold">118mph</span></div>
                                    </div>
                                </div>
                             </div>
                          </div>

                          {/* Recommendation Engine (The Black Box) */}
                          <div className="bg-[#1C1C1E] text-white p-6 rounded-lg shadow-xl">
                             <div className="flex justify-between items-center mb-6">
                                <h3 className="font-display font-bold text-lg">Recommended Specifications — 7-Iron</h3>
                                <div className="flex items-center gap-2 text-green-500 text-[10px] font-mono uppercase">
                                   <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                                   82% confidence
                                </div>
                             </div>

                             <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6">
                                <div className="text-center">
                                   <div className="text-2xl font-bold mb-1">2° closed</div>
                                   <div className="text-[9px] font-mono uppercase text-white/40">Face Angle</div>
                                </div>
                                <div className="text-center border-l border-white/10">
                                   <div className="text-2xl font-bold mb-1">+1°</div>
                                   <div className="text-[9px] font-mono uppercase text-white/40">Lie Angle</div>
                                </div>
                                <div className="text-center border-l border-white/10">
                                   <div className="text-2xl font-bold mb-1">3mm forward</div>
                                   <div className="text-[9px] font-mono uppercase text-white/40">CoG Position</div>
                                </div>
                                <div className="text-center border-l border-white/10">
                                   <div className="text-2xl font-bold mb-1">Standard</div>
                                   <div className="text-[9px] font-mono uppercase text-white/40">Shaft (Stiff)</div>
                                </div>
                             </div>

                             <div className="bg-white/5 p-4 rounded text-xs font-mono text-white/60 leading-relaxed border border-white/5">
                                Club path -2.1° (in-out) combined with face angle +1.8° relative to path generates face-to-path differential of 3.9°. 
                                Forward CoG positioning lowers dynamic loft interaction and increases launch angle 2-3°. 
                                Expected result: Dispersion centered, slice pattern eliminated, launch angle 11-12°.
                             </div>
                          </div>
                       </motion.div>
                    )}
                  </AnimatePresence>

               </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* --- REVENUE MODEL (UPDATED) --- */}
      <section className="py-24 bg-[#181818]">
         <div className="container mx-auto px-6">
            <FadeIn>
               <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-display text-white mb-4">Two Revenue Streams.</h2>
                  <p className="text-brand-polar/50 max-w-2xl mx-auto">
                     The old model is broken. We don't just sell you inventory; we give you a platform to charge a premium service fee AND earn substantial hardware margins.
                  </p>
               </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
               
               {/* Stream 1: Hourly Rate */}
               <FadeIn delay={0.1}>
                  <div className="bg-[#1C1C1E] p-10 rounded-xl border border-white/5 h-full relative overflow-hidden group hover:border-brand-mink/30 transition-colors">
                     <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Briefcase className="w-32 h-32" />
                     </div>
                     <div className="inline-flex items-center gap-2 mb-4 text-brand-mink font-mono text-xs uppercase tracking-widest">
                        <Calculator className="w-4 h-4" /> Stream 01
                     </div>
                     <h3 className="text-2xl font-display text-white mb-4">The Service Fee</h3>
                     <p className="text-brand-polar/60 text-sm leading-relaxed mb-6">
                        Using the Make Fitter platform elevates your service from a "demo day" to a biomechanical consultation. Justify a higher hourly rate.
                     </p>
                     
                     <div className="bg-[#242424] p-6 rounded border border-white/5">
                        <div className="flex justify-between items-center mb-2">
                           <span className="text-xs font-mono text-white/50 uppercase">Avg Hourly Rate</span>
                           <span className="text-white font-bold">1 000 KR / hr</span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                           <span className="text-xs font-mono text-white/50 uppercase">Sessions / Month</span>
                           <span className="text-white font-bold">x 40</span>
                        </div>
                        <div className="h-px bg-white/10 my-3"></div>
                        <div className="flex justify-between items-center text-brand-polar">
                           <span className="text-xs font-mono uppercase font-bold">Service Revenue</span>
                           <span className="font-bold font-display text-xl">40 000 KR / mo</span>
                        </div>
                     </div>
                  </div>
               </FadeIn>

               {/* Stream 2: Hardware Margin */}
               <FadeIn delay={0.2}>
                  <div className="bg-[#1C1C1E] p-10 rounded-xl border border-white/5 h-full relative overflow-hidden group hover:border-brand-mink/30 transition-colors">
                     <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                        <TrendingUp className="w-32 h-32" />
                     </div>
                     <div className="inline-flex items-center gap-2 mb-4 text-brand-mink font-mono text-xs uppercase tracking-widest">
                        <DollarSign className="w-4 h-4" /> Stream 02
                     </div>
                     <h3 className="text-2xl font-display text-white mb-4">The Hardware Margin</h3>
                     <p className="text-brand-polar/60 text-sm leading-relaxed mb-6">
                        Unlock wholesale pricing. You buy at our partner rate and sell at the standard retail price. No inventory risk—we print on demand.
                     </p>
                     
                     <div className="bg-[#242424] p-6 rounded border border-white/5">
                        <div className="flex justify-between items-center mb-2">
                           <span className="text-xs font-mono text-white/50 uppercase">Retail Price (Set of 7)</span>
                           <span className="text-white font-bold">31 500 KR</span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                           <span className="text-xs font-mono text-white/50 uppercase">Wholesale Cost</span>
                           <span className="text-white font-bold opacity-50">- 20 500 KR</span>
                        </div>
                        <div className="h-px bg-white/10 my-3"></div>
                        <div className="flex justify-between items-center text-brand-mink">
                           <span className="text-xs font-mono uppercase font-bold">Net Profit</span>
                           <span className="font-bold font-display text-xl">11 000 KR / set</span>
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
               <h2 className="text-3xl md:text-5xl font-display text-white text-center mb-16">Platform Membership</h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
               {PRICING_TIERS.map((tier, index) => (
                  <FadeIn key={tier.name} delay={index * 0.1}>
                     <div className={`relative flex flex-col h-full rounded-2xl p-8 border transition-all duration-300 ${tier.highlight ? 'bg-[#1C1C1E] border-brand-mink shadow-[0_0_30px_rgba(255,34,76,0.1)] scale-105 z-10' : 'bg-[#181818] border-white/5 hover:border-white/20'}`}>
                        
                        {tier.highlight && (
                           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-mink text-white text-[10px] font-bold font-mono uppercase px-3 py-1 rounded-full tracking-widest">
                              Recommended
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
                        <div className={`rounded-lg p-3 mb-8 text-center border ${tier.highlight ? 'bg-brand-mink/10 border-brand-mink/20 text-white' : 'bg-white/5 border-white/5 text-white/50'}`}>
                           <span className="block text-[10px] uppercase font-mono mb-1">Benefit</span>
                           <span className="text-sm font-bold">{tier.fee}</span>
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

                        <a href={PARTNER_EMAIL} rel="noopener noreferrer">
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
