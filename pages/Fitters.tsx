
import React from 'react';
import FadeIn from '../components/FadeIn';
import Button from '../components/Button';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { TrendingUp, Box, DollarSign, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  const BETA_URL = "https://make.golf/#sign-up";

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1C1C1E] to-[#151515] pt-20">
      
      {/* Hero */}
      <section className="bg-transparent border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        <div className="container mx-auto px-6 py-32 text-center relative z-10">
          <FadeIn>
            <div className="inline-block px-3 py-1 bg-brand-mink/10 text-brand-mink border border-brand-mink/30 text-xs font-mono font-bold tracking-widest mb-8 uppercase rounded">
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
              <a href={BETA_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="lg" className="rounded-md">APPLY FOR ACCESS</Button>
              </a>
              <a href={DASHBOARD_URL} target="_blank" rel="noopener noreferrer">
                 <Button variant="outline" size="lg" className="border-white/20 text-white hover:border-white rounded-md">
                    EXISTING PARTNER LOGIN
                 </Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-24 container mx-auto px-6">
        <div className="relative border border-white/10 bg-brand-surface overflow-hidden shadow-2xl rounded-xl">
          <div className="absolute top-0 left-0 w-full h-1 bg-brand-mink"></div>
          
          {/* Mock UI Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#1C1C1E]">
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
             <div className="border-r border-white/5 p-6 space-y-6 hidden lg:block bg-[#1C1C1E]">
                <div className="text-brand-polar font-bold font-display uppercase tracking-wider mb-6">Overview</div>
                <div className="space-y-1 font-mono text-xs">
                   <div className="bg-brand-mink/10 text-brand-mink p-3 border-l-2 border-brand-mink rounded-r">ACTIVE ORDERS</div>
                   <div className="text-brand-polar/40 hover:text-brand-polar p-3 transition-colors cursor-pointer">CLIENT DATABASE</div>
                   <div className="text-brand-polar/40 hover:text-brand-polar p-3 transition-colors cursor-pointer">ANALYTICS</div>
                   <div className="text-brand-polar/40 hover:text-brand-polar p-3 transition-colors cursor-pointer">SUPPORT</div>
                </div>
             </div>
             
             {/* Main Content */}
             <div className="col-span-3 p-12 bg-[#242424]">
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
                        contentStyle={{ backgroundColor: '#1C1C1E', borderColor: '#333', color: '#fff', fontFamily: 'IBM Plex Mono' }}
                        cursor={{ fill: '#ffffff05' }}
                      />
                      <Bar dataKey="revenue" fill="#FF224C" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="grid grid-cols-3 gap-6">
                   <div className="bg-[#1C1C1E] p-6 border border-white/5 rounded-lg">
                      <div className="text-brand-polar/40 text-[10px] font-mono mb-2 uppercase">ACTIVE FITTINGS</div>
                      <div className="text-3xl text-brand-polar font-display font-bold">12</div>
                   </div>
                   <div className="bg-[#1C1C1E] p-6 border border-white/5 rounded-lg">
                      <div className="text-brand-polar/40 text-[10px] font-mono mb-2 uppercase">AVG. ORDER VALUE</div>
                      <div className="text-3xl text-brand-polar font-display font-bold">$2,850</div>
                   </div>
                   <div className="bg-[#1C1C1E] p-6 border border-white/5 rounded-lg">
                      <div className="text-brand-polar/40 text-[10px] font-mono mb-2 uppercase">SHIPMENT TIME</div>
                      <div className="text-3xl text-brand-polar font-display font-bold">3.5 Wks</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-[#181818]">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
           <div className="p-8 border border-white/5 hover:border-brand-mink/50 transition-colors bg-[#1C1C1E] rounded-xl shadow-lg">
              <Box className="w-10 h-10 text-brand-mink mb-6" />
              <h3 className="text-2xl font-display font-bold text-brand-polar mb-4 uppercase">No Inventory Risk</h3>
              <p className="text-brand-polar/50 text-sm font-mono leading-relaxed">
                 Never buy stock heads or shafts again. We manufacture on demand. You focus on the fitting, we handle the logistics.
              </p>
           </div>
           <div className="p-8 border border-white/5 hover:border-brand-mink/50 transition-colors bg-[#1C1C1E] rounded-xl shadow-lg">
              <div className="w-10 h-10 text-brand-mink mb-6 font-display font-bold text-3xl">AI</div>
              <h3 className="text-2xl font-display font-bold text-brand-polar mb-4 uppercase">Data Driven</h3>
              <p className="text-brand-polar/50 text-sm font-mono leading-relaxed">
                 Own the player's data. As their swing evolves, easily order updated heads without needing a full new set purchase.
              </p>
           </div>
           <div className="p-8 border border-white/5 hover:border-brand-mink/50 transition-colors bg-[#1C1C1E] rounded-xl shadow-lg">
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
         <a href={BETA_URL} target="_blank" rel="noopener noreferrer">
           <Button variant="primary" size="lg" className="rounded-md">APPLY NOW</Button>
         </a>
      </section>

    </div>
  );
};

export default Fitters;
