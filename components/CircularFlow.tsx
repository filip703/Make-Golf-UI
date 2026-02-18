
import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Settings, Factory, Flag, ArrowRight, Activity, Database, Cpu, Send, Trophy } from 'lucide-react';

const PHASES = [
  {
    id: 'phase-1',
    label: 'Data',
    sub: 'ANALYS',
    icon: BarChart3,
    color: 'text-blue-400',
    borderColor: 'border-blue-500',
    glow: 'shadow-[0_0_30px_rgba(59,130,246,0.3)]',
    bg: 'bg-blue-500/10',
    position: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2', // Top
    desc: 'Ingestion & Biometrics'
  },
  {
    id: 'phase-2',
    label: 'Design',
    sub: 'KONFIG',
    icon: Settings,
    color: 'text-brand-mink',
    borderColor: 'border-brand-mink',
    glow: 'shadow-[0_0_30px_rgba(255,34,76,0.3)]',
    bg: 'bg-brand-mink/10',
    position: 'top-1/2 right-0 translate-x-1/2 -translate-y-1/2', // Right
    desc: 'Generative CAD'
  },
  {
    id: 'phase-3',
    label: 'Tillverk.',
    sub: 'LEVERANS',
    icon: Factory,
    color: 'text-green-400',
    borderColor: 'border-green-500',
    glow: 'shadow-[0_0_30px_rgba(34,197,94,0.3)]',
    bg: 'bg-green-500/10',
    position: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2', // Bottom
    desc: 'MoldJet™ Print'
  },
  {
    id: 'phase-4',
    label: 'Spel',
    sub: 'TRÄNING',
    icon: Flag,
    color: 'text-yellow-400',
    borderColor: 'border-yellow-500',
    glow: 'shadow-[0_0_30px_rgba(234,179,8,0.3)]',
    bg: 'bg-yellow-500/10',
    position: 'top-1/2 left-0 -translate-x-1/2 -translate-y-1/2', // Left
    desc: 'Arccos Integration'
  }
];

const CircularFlow: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full relative py-20 md:py-32 flex justify-center overflow-visible">
      
      {/* --- DESKTOP CIRCULAR LAYOUT --- */}
      <div className="hidden lg:block relative w-[600px] h-[600px]">
         
         {/* Orbit Rings */}
         <div className="absolute inset-0 rounded-full border border-white/5"></div>
         <div className="absolute inset-12 rounded-full border border-white/5 border-dashed opacity-50"></div>
         
         {/* Orbiting Particle Animation */}
         <svg className="absolute inset-0 w-full h-full animate-spin-slow pointer-events-none opacity-30">
            <circle cx="300" cy="30" r="4" fill="white" />
            <circle cx="300" cy="570" r="4" fill="white" />
            <circle cx="30" cy="300" r="4" fill="white" />
            <circle cx="570" cy="300" r="4" fill="white" />
         </svg>

         {/* Central Hub */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#101010] border border-white/10 flex flex-col items-center justify-center z-10 shadow-2xl">
            <div className="absolute inset-0 rounded-full bg-gradient-radial from-white/5 to-transparent opacity-50"></div>
            <h3 className="text-3xl font-display font-bold text-white tracking-tighter">MAKEr</h3>
            <span className="text-brand-polar/40 font-mono text-xs tracking-[0.3em] uppercase mt-1">SYSTEM</span>
            
            {/* Inner rotating ring */}
            <div className="absolute inset-4 rounded-full border border-white/5 border-t-white/20 animate-spin-slow"></div>
         </div>

         {/* Phase Nodes */}
         {PHASES.map((phase, index) => (
            <motion.div
               key={phase.id}
               className={`absolute ${phase.position} z-20 cursor-pointer group`}
               whileHover={{ scale: 1.1 }}
               onClick={() => scrollToSection(phase.id)}
            >
               {/* The Node Circle */}
               <div className={`w-32 h-32 rounded-full bg-[#181818] border-2 ${phase.borderColor} flex flex-col items-center justify-center relative transition-all duration-300 ${phase.glow} group-hover:bg-[#202020]`}>
                  
                  {/* Icon */}
                  <phase.icon className={`w-8 h-8 ${phase.color} mb-2`} />
                  
                  {/* Label */}
                  <div className={`font-display font-bold text-lg ${phase.color}`}>{phase.label}</div>
                  <div className="text-[9px] font-mono text-white/40 uppercase tracking-widest">{phase.sub}</div>

                  {/* Connector Line to Center (Visual) */}
                  <div className={`absolute w-12 h-px bg-gradient-to-r from-transparent via-${phase.borderColor.replace('border-', '')} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300
                     ${index === 0 ? 'top-full left-1/2 -translate-x-1/2 rotate-90 translate-y-6' : ''}
                     ${index === 1 ? 'right-full top-1/2 -translate-y-1/2 -translate-x-6' : ''}
                     ${index === 2 ? 'bottom-full left-1/2 -translate-x-1/2 rotate-90 -translate-y-6' : ''}
                     ${index === 3 ? 'left-full top-1/2 -translate-y-1/2 translate-x-6' : ''}
                  `}></div>
               </div>
               
               {/* Floating Description on Hover */}
               <div className={`absolute whitespace-nowrap bg-black/80 backdrop-blur px-3 py-1.5 rounded border border-white/10 text-[10px] font-mono uppercase text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none
                  ${index === 0 ? '-top-10 left-1/2 -translate-x-1/2' : ''}
                  ${index === 1 ? 'left-full top-1/2 -translate-y-1/2 ml-4' : ''}
                  ${index === 2 ? '-bottom-10 left-1/2 -translate-x-1/2' : ''}
                  ${index === 3 ? 'right-full top-1/2 -translate-y-1/2 mr-4' : ''}
               `}>
                  {phase.desc}
               </div>
            </motion.div>
         ))}

         {/* Directional Arrows (Static) */}
         <div className="absolute top-[15%] right-[15%] text-white/10"><ArrowRight className="w-6 h-6 rotate-45" /></div>
         <div className="absolute bottom-[15%] right-[15%] text-white/10"><ArrowRight className="w-6 h-6 rotate-[135deg]" /></div>
         <div className="absolute bottom-[15%] left-[15%] text-white/10"><ArrowRight className="w-6 h-6 rotate-[225deg]" /></div>
         <div className="absolute top-[15%] left-[15%] text-white/10"><ArrowRight className="w-6 h-6 rotate-[315deg]" /></div>

      </div>

      {/* --- MOBILE LAYOUT: STACKED LOOP (Visible < lg) --- */}
      <div className="lg:hidden w-full px-4 max-w-sm">
         <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-8 bottom-8 w-px bg-white/10"></div>
            
            <div className="space-y-8">
                {PHASES.map((phase, index) => (
                    <div 
                        key={phase.id} 
                        className="relative pl-20"
                        onClick={() => scrollToSection(phase.id)}
                    >
                        {/* Circle Node */}
                        <div className={`absolute left-0 top-0 w-16 h-16 rounded-full bg-[#181818] border ${phase.borderColor} flex items-center justify-center z-10 shadow-lg`}>
                            <phase.icon className={`w-6 h-6 ${phase.color}`} />
                        </div>
                        
                        {/* Text Content */}
                        <div className="bg-[#1C1C1E] border border-white/5 p-4 rounded-lg active:bg-[#242424] transition-colors">
                            <h3 className={`text-lg font-display font-bold ${phase.color} mb-1`}>{phase.label}</h3>
                            <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-2">{phase.sub}</div>
                            <p className="text-xs text-white/60">{phase.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Loop Connector */}
            <div className="absolute left-8 bottom-0 w-8 h-8 border-l border-b border-white/10 rounded-bl-xl -translate-x-[1px]"></div>
            <div className="absolute left-16 -bottom-6 flex items-center gap-2 text-[10px] font-mono text-white/30 uppercase">
                <Activity className="w-3 h-3" />
                System Loops
            </div>
         </div>
      </div>

    </div>
  );
};

export default CircularFlow;
