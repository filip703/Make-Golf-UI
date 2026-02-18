
import React from 'react';
import Button from '../components/Button';
import { Zap, Calendar, UserPlus, ArrowRight } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="font-sans">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-[#1C1C1E] mb-2">
            God morgon, Erik <span className="text-2xl">⛳</span>
          </h1>
          <p className="text-sm font-mono text-[#1C1C1E]/50">
            Tisdag 18 feb 2026 · 2 fittings planerade idag
          </p>
        </div>
        <div className="flex gap-4">
           <Button variant="secondary" size="sm" className="bg-white shadow-sm border border-black/5 hover:border-black/20">
              <Calendar className="w-3 h-3 mr-2" /> Kalender
           </Button>
           <Button variant="primary" size="sm" className="shadow-lg">
              + Starta Fitting
           </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-white p-6 rounded-xl border border-black/5 shadow-sm">
          <div className="text-[10px] font-mono uppercase tracking-widest text-[#1C1C1E]/40 mb-2">Aktiva Golfare</div>
          <div className="text-4xl font-display font-bold text-[#1C1C1E]">24</div>
          <div className="text-[10px] font-mono text-green-600 mt-2">↑ +3 senaste 30 dagarna</div>
        </div>
        
        <div className="bg-white p-6 rounded-xl border border-black/5 shadow-sm">
          <div className="text-[10px] font-mono uppercase tracking-widest text-[#1C1C1E]/40 mb-2">Analyser Totalt</div>
          <div className="text-4xl font-display font-bold text-[#1C1C1E]">67</div>
          <div className="text-[10px] font-mono text-[#1C1C1E]/40 mt-2">→ 4 väntar granskning</div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-black/5 shadow-sm">
          <div className="text-[10px] font-mono uppercase tracking-widest text-[#1C1C1E]/40 mb-2">Beställningar</div>
          <div className="text-4xl font-display font-bold text-[#1C1C1E]">12</div>
          <div className="text-[10px] font-mono text-green-600 mt-2">↑ 3 levereras denna vecka</div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-brand-mink/20 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 opacity-10">
             <Zap className="w-12 h-12 text-brand-mink" />
          </div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-brand-mink mb-2">Re-fit Triggers</div>
          <div className="text-4xl font-display font-bold text-brand-mink">2</div>
          <div className="text-[10px] font-mono text-[#1C1C1E]/60 mt-2">⚠ Swing-evolution detekterad</div>
        </div>
      </div>

      {/* Quick Actions & Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Quick Actions */}
        <div className="lg:col-span-2">
           <div className="text-[10px] font-mono uppercase tracking-widest text-[#1C1C1E]/40 mb-4">Snabba Åtgärder</div>
           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#1C1C1E] p-6 rounded-xl text-white group cursor-pointer hover:bg-[#2C2C2E] transition-colors">
                 <div className="w-10 h-10 bg-brand-mink rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Zap className="w-5 h-5 text-white" />
                 </div>
                 <h3 className="font-display font-bold text-lg mb-1">Starta Fitting</h3>
                 <p className="text-xs text-white/50 font-mono leading-relaxed">Välj golfare → Ladda data → Kör analys</p>
              </div>

              <div className="bg-white border border-black/5 p-6 rounded-xl group cursor-pointer hover:border-brand-mink/30 transition-colors">
                 <div className="w-10 h-10 bg-[#F5F5F7] rounded-full flex items-center justify-center mb-4 text-[#1C1C1E]">
                    <Calendar className="w-5 h-5" />
                 </div>
                 <h3 className="font-display font-bold text-lg text-[#1C1C1E] mb-1">Planera Session</h3>
                 <p className="text-xs text-[#1C1C1E]/50 font-mono leading-relaxed">Förbered kombinationer inför besök</p>
              </div>

              <div className="bg-white border border-black/5 p-6 rounded-xl group cursor-pointer hover:border-brand-mink/30 transition-colors">
                 <div className="w-10 h-10 bg-[#F5F5F7] rounded-full flex items-center justify-center mb-4 text-[#1C1C1E]">
                    <UserPlus className="w-5 h-5" />
                 </div>
                 <h3 className="font-display font-bold text-lg text-[#1C1C1E] mb-1">Ny Golfare</h3>
                 <p className="text-xs text-[#1C1C1E]/50 font-mono leading-relaxed">Skapa profil och skicka inbjudan</p>
              </div>
           </div>
        </div>

        {/* Activity Feed */}
        <div>
           <div className="text-[10px] font-mono uppercase tracking-widest text-[#1C1C1E]/40 mb-4">Senaste Aktivitet</div>
           <div className="bg-white border border-black/5 rounded-xl p-6">
              <div className="space-y-6">
                 
                 <div className="flex gap-4">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-brand-mink flex-shrink-0"></div>
                    <div>
                       <p className="text-xs font-bold text-[#1C1C1E] mb-1">Anna K. — 7-järn analys klar</p>
                       <p className="text-[10px] text-[#1C1C1E]/60 font-mono leading-relaxed">Rekommendation: +1° lie, forward CoG.</p>
                       <span className="text-[9px] text-[#1C1C1E]/30 font-mono mt-1 block">13 min sedan</span>
                    </div>
                 </div>

                 <div className="flex gap-4">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-green-500 flex-shrink-0"></div>
                    <div>
                       <p className="text-xs font-bold text-[#1C1C1E] mb-1">Marcus T. — Order levererad</p>
                       <p className="text-[10px] text-[#1C1C1E]/60 font-mono leading-relaxed">Beställning #MG-2024-089 skickad.</p>
                       <span className="text-[9px] text-[#1C1C1E]/30 font-mono mt-1 block">2h sedan</span>
                    </div>
                 </div>

                 <div className="flex gap-4">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-yellow-500 flex-shrink-0"></div>
                    <div>
                       <p className="text-xs font-bold text-[#1C1C1E] mb-1">Johan S. — Re-fit trigger</p>
                       <p className="text-[10px] text-[#1C1C1E]/60 font-mono leading-relaxed">Swing path ändrat -3.2° sedan Jan.</p>
                       <span className="text-[9px] text-[#1C1C1E]/30 font-mono mt-1 block">1 dag sedan</span>
                    </div>
                 </div>

              </div>
              
              <div className="mt-6 pt-4 border-t border-black/5 text-center">
                 <button className="text-xs font-mono font-bold text-[#1C1C1E]/40 hover:text-brand-mink transition-colors flex items-center justify-center gap-2 mx-auto">
                    VISA ALL AKTIVITET <ArrowRight className="w-3 h-3" />
                 </button>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
