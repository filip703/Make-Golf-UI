
import React from 'react';
import FadeIn from '../components/FadeIn';
import Button from '../components/Button';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { TrendingUp, Box, DollarSign, ExternalLink, Lock, ChevronDown, RotateCcw, Save, ArrowRight } from 'lucide-react';

const dataRevenue = [
  { month: 'Jan', revenue: 12000 },
  { month: 'Feb', revenue: 15000 },
  { month: 'Mar', revenue: 18000 },
  { month: 'Apr', revenue: 25000 },
  { month: 'May', revenue: 32000 },
  { month: 'Jun', revenue: 45000 },
];

const Fitters: React.FC = () => {
  const DASHBOARD_URL = "https://frontend-seven-iota-56.vercel.app/dashboard";
  const MAKER_LOGIN_URL = "https://maker.make.golf/login";

  return (
    <div className="min-h-screen bg-brand-black pt-20">
      
      {/* Hero */}
      <section className="bg-brand-black border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        <div className="container mx-auto px-6 py-32 text-center relative z-10">
          <FadeIn>
            <div className="inline-block px-3 py-1 bg-brand-mink/10 text-brand-mink border border-brand-mink/30 text-xs font-mono font-bold tracking-widest mb-8 uppercase">
              MAKE GOLF PRO PARTNER
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-polar mb-8 uppercase leading-tight">
              Zero Inventory.<br/>
              <span className="text-brand-mink">Pure Margin.</span>
            </h1>
            <p className="text-lg text-brand-polar/50 max-w-2xl mx-auto mb-12 font-mono">
              Stop selling stock inventory with low margins. Transform your studio into a manufacturing hub. 
              <strong>68% Gross Margin.</strong> No stock risk.
            </p>
            <div className="flex justify-center gap-6">
              <Button variant="primary" size="lg">APPLY FOR ACCESS</Button>
              <a href={DASHBOARD_URL} target="_blank" rel="noopener noreferrer">
                 <Button variant="outline" size="lg" className="border-white/20 text-white hover:border-white">
                    EXISTING PARTNER LOGIN
                 </Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* NEW SECTION: MAKER PLATFORM PREVIEW */}
      <section className="py-24 bg-[#080808] border-b border-white/5 overflow-hidden">
        <div className="container mx-auto px-6">
            <FadeIn>
                <div className="flex flex-col md:flex-row items-end justify-between mb-12">
                    <div>
                        <h2 className="text-4xl font-display font-medium text-white mb-4">The Maker Platform</h2>
                        <p className="text-brand-polar/50 font-mono text-sm max-w-xl">
                            Your new workbench. Adjust geometry in real-time, visualize changes, and export directly to our manufacturing queue.
                        </p>
                    </div>
                    <a href={MAKER_LOGIN_URL} target="_blank" rel="noopener noreferrer">
                         <Button variant="outline" size="sm" className="hidden md:flex text-brand-mink border-brand-mink/30 hover:bg-brand-mink hover:text-white">
                            <Lock className="w-3 h-3 mr-2" /> Maker Login
                         </Button>
                    </a>
                </div>
            </FadeIn>

            <FadeIn delay={0.2}>
                {/* The Application Window Container */}
                <div className="rounded-lg border border-white/10 bg-[#151515] shadow-2xl overflow-hidden flex flex-col h-[800px] relative">
                    
                    {/* App Header (Toolbar) */}
                    <div className="h-16 border-b border-white/5 bg-[#191919] flex items-center justify-between px-6 z-20">
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-4 text-brand-polar/40">
                                <ArrowRight className="w-4 h-4 rotate-180" />
                                <span className="text-brand-mink font-bold font-display tracking-widest">PLAYGROUND</span>
                            </div>
                            <div className="h-6 w-px bg-white/10"></div>
                            <div className="flex gap-2">
                                <span className="bg-brand-mink text-white text-xs font-mono font-bold px-3 py-1 rounded-sm">7 Iron</span>
                                <span className="bg-white/5 text-brand-polar/40 text-xs font-mono px-3 py-1 rounded-sm hover:text-white cursor-pointer">5 Iron</span>
                                <span className="bg-white/5 text-brand-polar/40 text-xs font-mono px-3 py-1 rounded-sm hover:text-white cursor-pointer">Pitching Wedge</span>
                            </div>
                            <RotateCcw className="w-4 h-4 text-brand-polar/40 hover:text-white cursor-pointer" />
                        </div>
                        <div className="flex items-center gap-4">
                             <button className="flex items-center gap-2 text-brand-polar/60 hover:text-white text-xs font-mono border border-white/10 px-4 py-2 rounded-sm transition-colors">
                                <Save className="w-3 h-3" /> Spara design
                             </button>
                             <button className="bg-[#111] hover:bg-black border border-brand-mink/50 text-white text-xs font-mono font-bold px-4 py-2 rounded-sm uppercase tracking-wider transition-colors flex items-center gap-2">
                                Starta fitting <ArrowRight className="w-3 h-3" />
                             </button>
                        </div>
                    </div>

                    {/* App Body */}
                    <div className="flex flex-1 overflow-hidden relative">
                        
                        {/* 3D Viewport Area */}
                        <div className="flex-1 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] relative flex items-center justify-center">
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                            
                            {/* Club Image */}
                            <img 
                                src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070&auto=format&fit=crop" 
                                alt="Iron 7 Render"
                                className="w-[60%] h-auto object-contain drop-shadow-2xl grayscale contrast-125 z-10"
                                style={{ transform: 'rotate(-5deg)' }}
                            />
                            
                            {/* Watermark / Beta Tag */}
                            <div className="absolute bottom-6 left-6 text-brand-polar/20 font-display font-bold text-4xl select-none pointer-events-none">
                                MAKER PREVIEW
                            </div>
                        </div>

                        {/* Sidebar Controls */}
                        <div className="w-[350px] bg-[#111] border-l border-white/5 flex flex-col overflow-y-auto">
                            <div className="p-6 border-b border-white/5">
                                <h3 className="text-xl font-display text-white mb-1">MAKER - BETA</h3>
                                <p className="text-xs font-mono text-brand-polar/40">--under development--</p>
                            </div>

                            {/* Accordion Items */}
                            <div className="border-b border-white/5">
                                <div className="flex items-center justify-between p-4 px-6 hover:bg-white/5 cursor-pointer">
                                    <span className="text-sm font-sans text-brand-polar/70">Info</span>
                                    <ChevronDown className="w-4 h-4 text-brand-polar/40" />
                                </div>
                            </div>
                            
                            <div className="border-b border-white/5">
                                <div className="flex items-center justify-between p-4 px-6 hover:bg-white/5 cursor-pointer bg-white/5">
                                    <span className="text-sm font-sans text-white">Settings</span>
                                    <ChevronDown className="w-4 h-4 text-white rotate-180" />
                                </div>
                                
                                {/* Active Controls */}
                                <div className="p-6 space-y-8 bg-[#0c0c0c]">
                                    
                                    {/* Club Direction */}
                                    <div>
                                        <label className="block text-xs font-sans text-brand-polar/60 mb-3 uppercase">CLUB DIRECTION</label>
                                        <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-sm overflow-hidden">
                                            <button className="bg-white text-black py-2 text-xs font-bold font-mono">RIGHT</button>
                                            <button className="bg-transparent text-brand-polar/50 py-2 text-xs font-mono hover:text-white">LEFT</button>
                                        </div>
                                    </div>

                                    {/* Finish */}
                                    <div>
                                        <label className="block text-xs font-sans text-brand-polar/60 mb-3">Finish Club Head</label>
                                        <div className="flex items-center justify-between border border-white/10 bg-white/5 px-3 py-2 rounded-sm cursor-pointer">
                                            <div className="flex items-center gap-2">
                                                <div className="w-4 h-4 bg-[#666] rounded-sm"></div>
                                                <span className="text-xs font-mono text-white">RAW Finish</span>
                                            </div>
                                            <ChevronDown className="w-3 h-3 text-brand-polar/50" />
                                        </div>
                                    </div>

                                    {/* Sliders */}
                                    <FitterSlider label="Loft Angle" value="34.0" />
                                    <FitterSlider label="Blade Length" value="80.0" />
                                    <FitterSlider label="Lie Angle" value="62.0" isInfo={true} />
                                    
                                </div>
                            </div>
                        </div>

                        {/* Lock Overlay for Non-LoggedIn Users (Visual Cue) */}
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex flex-col items-center justify-center z-30 opacity-0 hover:opacity-100 transition-opacity duration-500 group">
                            <Lock className="w-12 h-12 text-brand-mink mb-6" />
                            <h3 className="text-3xl font-display text-white mb-4">Partner Access Only</h3>
                            <p className="text-brand-polar/70 mb-8 font-mono text-sm max-w-md text-center">
                                The Maker Playground is reserved for certified fitters. Log in to access the full parametric engine.
                            </p>
                            <a href={MAKER_LOGIN_URL} target="_blank" rel="noopener noreferrer">
                                <Button variant="primary" size="lg" className="shadow-[0_0_30px_rgba(255,34,76,0.4)]">
                                    Login to Maker
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </FadeIn>
            
            {/* Mobile Link */}
            <div className="md:hidden mt-8 text-center">
                 <a href={MAKER_LOGIN_URL} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" className="w-full">
                       Login to Maker Platform
                    </Button>
                 </a>
            </div>
        </div>
      </section>

      {/* Dashboard Preview (Existing) */}
      <section className="py-24 container mx-auto px-6">
        <div className="relative border border-white/10 bg-brand-surface overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-1 bg-brand-mink"></div>
          
          {/* Mock UI Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-brand-black">
            <div className="flex items-center gap-2">
               <div className="w-3 h-3 rounded-full bg-red-500"></div>
               <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
               <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <a href={DASHBOARD_URL} target="_blank" rel="noopener noreferrer" className="text-brand-polar/40 text-xs font-mono hover:text-brand-mink transition-colors flex items-center gap-1">
               OPEN LIVE DASHBOARD <ExternalLink className="w-3 h-3"/>
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 min-h-[500px]">
             {/* Sidebar */}
             <div className="border-r border-white/5 p-6 space-y-6 hidden lg:block bg-brand-black">
                <div className="text-brand-polar font-bold font-display uppercase tracking-wider mb-6">Overview</div>
                <div className="space-y-1 font-mono text-xs">
                   <div className="bg-brand-mink/20 text-brand-mink p-3 border-l-2 border-brand-mink">ACTIVE ORDERS</div>
                   <div className="text-brand-polar/40 hover:text-brand-polar p-3 transition-colors cursor-pointer">CLIENT DATABASE</div>
                   <div className="text-brand-polar/40 hover:text-brand-polar p-3 transition-colors cursor-pointer">ANALYTICS</div>
                   <div className="text-brand-polar/40 hover:text-brand-polar p-3 transition-colors cursor-pointer">SUPPORT</div>
                </div>
             </div>
             
             {/* Main Content */}
             <div className="col-span-3 p-12 bg-brand-surface">
                <div className="flex justify-between items-end mb-12">
                   <div>
                      <h3 className="text-2xl text-brand-polar font-display font-bold uppercase">Revenue Performance</h3>
                      <p className="text-brand-polar/40 text-xs font-mono mt-2">YTD Earnings from Custom Hardware</p>
                   </div>
                   <div className="text-right">
                      <div className="text-4xl text-brand-mink font-display font-bold">$147,000</div>
                      <div className="text-brand-polar/60 text-xs font-mono flex items-center justify-end mt-1">
                         <TrendingUp className="w-3 h-3 mr-1" /> +24% vs last month
                      </div>
                   </div>
                </div>

                <div className="h-64 mb-12">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={dataRevenue}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                      <XAxis dataKey="month" stroke="#666" fontSize={10} tickLine={false} axisLine={false} fontFamily="IBM Plex Mono" />
                      <YAxis stroke="#666" fontSize={10} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value/1000}k`} fontFamily="IBM Plex Mono" />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#191919', borderColor: '#333', color: '#fff', fontFamily: 'IBM Plex Mono' }}
                        cursor={{ fill: '#ffffff05' }}
                      />
                      <Bar dataKey="revenue" fill="#FF224C" radius={[0, 0, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="grid grid-cols-3 gap-6">
                   <div className="bg-brand-black p-6 border border-white/5">
                      <div className="text-brand-polar/40 text-[10px] font-mono mb-2 uppercase">ACTIVE FITTINGS</div>
                      <div className="text-3xl text-brand-polar font-display font-bold">12</div>
                   </div>
                   <div className="bg-brand-black p-6 border border-white/5">
                      <div className="text-brand-polar/40 text-[10px] font-mono mb-2 uppercase">AVG. ORDER VALUE</div>
                      <div className="text-3xl text-brand-polar font-display font-bold">$2,850</div>
                   </div>
                   <div className="bg-brand-black p-6 border border-white/5">
                      <div className="text-brand-polar/40 text-[10px] font-mono mb-2 uppercase">SHIPMENT TIME</div>
                      <div className="text-3xl text-brand-polar font-display font-bold">3.5 Wks</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-brand-surface">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
           <div className="p-8 border border-white/5 hover:border-brand-mink/50 transition-colors bg-brand-black">
              <Box className="w-10 h-10 text-brand-mink mb-6" />
              <h3 className="text-2xl font-display font-bold text-brand-polar mb-4 uppercase">No Inventory Risk</h3>
              <p className="text-brand-polar/50 text-sm font-mono leading-relaxed">
                 Never buy stock heads or shafts again. We manufacture on demand. You focus on the fitting, we handle the logistics.
              </p>
           </div>
           <div className="p-8 border border-white/5 hover:border-brand-mink/50 transition-colors bg-brand-black">
              <div className="w-10 h-10 text-brand-mink mb-6 font-display font-bold text-3xl">AI</div>
              <h3 className="text-2xl font-display font-bold text-brand-polar mb-4 uppercase">Data Driven</h3>
              <p className="text-brand-polar/50 text-sm font-mono leading-relaxed">
                 Own the player's data. As their swing evolves, easily order updated heads without needing a full new set purchase.
              </p>
           </div>
           <div className="p-8 border border-white/5 hover:border-brand-mink/50 transition-colors bg-brand-black">
              <DollarSign className="w-10 h-10 text-brand-mink mb-6" />
              <h3 className="text-2xl font-display font-bold text-brand-polar mb-4 uppercase">Higher Margins</h3>
              <p className="text-brand-polar/50 text-sm font-mono leading-relaxed">
                 Traditional OEM retail margins are ~25%. Make Golf partners earn up to 68% on every custom iron set sold.
              </p>
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 container mx-auto px-6 text-center">
         <h2 className="text-4xl text-brand-polar font-display font-bold mb-10 uppercase">Limited Partnership Openings for 2026</h2>
         <Button variant="primary" size="lg">APPLY NOW</Button>
      </section>

    </div>
  );
};

// Helper Component for the mockup sliders to match screenshot style
const FitterSlider = ({ label, value, isInfo = false }: { label: string, value: string, isInfo?: boolean }) => (
    <div>
        <div className="flex items-center gap-1 mb-2">
            <label className="text-xs font-sans text-brand-polar/60">{label}</label>
            {isInfo && <span className="text-[10px] text-brand-polar/30 border border-white/10 rounded-full w-3 h-3 flex items-center justify-center">i</span>}
        </div>
        <div className="flex items-center gap-4">
            <div className="px-3 py-2 bg-white rounded-sm border border-white/10 min-w-[60px] text-center">
                <span className="text-sm font-mono font-bold text-black">{value}</span>
            </div>
            <div className="flex-1 h-1 bg-white/10 rounded-full relative">
                <div className="absolute top-1/2 left-[60%] -translate-y-1/2 w-3 h-3 bg-[#666] rounded-full"></div>
            </div>
        </div>
    </div>
);

export default Fitters;
