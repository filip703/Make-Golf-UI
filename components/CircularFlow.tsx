
import React from 'react';
import { motion } from 'framer-motion';
import { Database, Cpu, Factory, Smartphone, ArrowRight, RefreshCw } from 'lucide-react';

const PHASES = [
  {
    id: 'phase-1',
    step: '01',
    label: 'INPUT',
    title: 'Data Ingestion',
    icon: Database,
    desc: 'Biomechanical analysis',
    stats: [
      { label: 'Source', value: 'Trackman' },
      { label: 'Points', value: '120+' }
    ],
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20'
  },
  {
    id: 'phase-2',
    step: '02',
    label: 'COMPUTE',
    title: 'Generative CAD',
    icon: Cpu,
    desc: 'Topology optimization',
    stats: [
      { label: 'CG Shift', value: '-2.4mm' },
      { label: 'MOI', value: 'Max' }
    ],
    color: 'text-white',
    bg: 'bg-white/5',
    border: 'border-white/10'
  },
  {
    id: 'phase-3',
    step: '03',
    label: 'PRINT',
    title: 'Additive Mfg.',
    icon: Factory,
    desc: 'Tritone™ MoldJet Tech',
    stats: [
      { label: 'Mat.', value: '17-4PH' },
      { label: 'Dens.', value: '99.8%' }
    ],
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20'
  },
  {
    id: 'phase-4',
    step: '04',
    label: 'LOOP',
    title: 'Live Telemetry',
    icon: Smartphone,
    desc: 'Performance feedback',
    stats: [
      { label: 'Status', value: 'Live' },
      { label: 'Re-Fit', value: 'Auto' }
    ],
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/20'
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
    <div className="w-full relative py-12 md:py-24">
      
      {/* --- DESKTOP LAYOUT: HORIZONTAL PIPELINE WITH LOOP (Visible >= lg) --- */}
      <div className="hidden lg:block relative px-4">
         
         {/* THE LOOP SVG LINE - CONNECTS 4 BACK TO 1 */}
         {/* Positioned absolutely to cover the top arc area */}
         <div className="absolute -top-20 left-0 w-full h-[300px] pointer-events-none z-0">
            <svg className="w-full h-full overflow-visible">
                <defs>
                    <linearGradient id="loopGradient" x1="100%" y1="0%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#22c55e" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#FF224C" stopOpacity="1" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
                    </linearGradient>
                </defs>
                {/* 
                  Path logic: 
                  Start at center of Phase 4 (approx 87.5% width, y=125 relative to this SVG container)
                  Curve UP and LEFT
                  End at center of Phase 1 (approx 12.5% width, y=125)
                */}
                <path 
                    d="M 87.5% 125 C 87.5% 125, 95% 20, 50% 20 C 5% 20, 12.5% 125, 12.5% 125" 
                    fill="none" 
                    stroke="url(#loopGradient)" 
                    strokeWidth="1.5"
                    strokeDasharray="6 6"
                    className="opacity-60"
                />
                
                {/* Animated Dot on Loop - Moving Right to Left (Phase 4 -> Phase 1) */}
                <circle r="3" fill="#FF224C">
                    <animateMotion 
                        dur="8s" 
                        repeatCount="indefinite"
                        path="M 87.5% 125 C 87.5% 125, 95% 20, 50% 20 C 5% 20, 12.5% 125, 12.5% 125"
                        keyPoints="0;1"
                        keyTimes="0;1"
                    />
                </circle>
            </svg>
            
            {/* MAKE DNA LABEL ON TOP OF LOOP */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#1C1C1E] px-4 py-1 border border-brand-mink/30 rounded-full text-[10px] font-mono text-brand-mink uppercase tracking-widest shadow-[0_0_20px_rgba(255,34,76,0.2)] z-10">
                The Make DNA Loop
            </div>
         </div>

         {/* CONNECTING LINE THROUGH CARDS */}
         <div className="absolute top-[45px] left-[12.5%] right-[12.5%] h-px bg-white/10 z-0"></div>
         
         <div className="grid grid-cols-4 gap-6 relative z-10 max-w-7xl mx-auto">
            {PHASES.map((phase, index) => (
               <motion.div 
                  key={phase.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group relative cursor-pointer"
                  onClick={() => scrollToSection(phase.id)}
               >
                  {/* Step Marker on Line */}
                  <div className={`w-3 h-3 mx-auto mb-8 rounded-full border-2 border-[#151515] bg-[#1C1C1E] relative z-10 transition-colors duration-300 group-hover:scale-125 ${index === 3 ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]' : 'bg-white/20 group-hover:bg-white'}`}></div>

                  {/* Card */}
                  <div className={`h-full bg-[#1C1C1E] border border-white/5 hover:border-white/20 p-5 rounded-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col`}>
                     
                     {/* Header */}
                     <div className="flex justify-between items-start mb-4 border-b border-white/5 pb-4">
                        <div className="flex items-center gap-3">
                           <div className={`p-2 rounded-sm ${phase.bg} ${phase.color}`}>
                              <phase.icon className="w-5 h-5" />
                           </div>
                           <span className="font-mono text-xs text-white/40 uppercase tracking-widest">
                              {phase.step}
                           </span>
                        </div>
                     </div>

                     {/* Content */}
                     <div className="mb-6 flex-grow">
                        <div className="text-[10px] font-mono text-brand-polar/40 uppercase mb-1 tracking-wider">{phase.label}</div>
                        <h3 className="text-lg font-display font-bold text-white mb-2 uppercase group-hover:text-brand-mink transition-colors leading-tight">
                           {phase.title}
                        </h3>
                        <p className="text-xs text-brand-polar/50 font-sans font-light leading-relaxed">
                           {phase.desc}
                        </p>
                     </div>

                     {/* Stats Footer */}
                     <div className="grid grid-cols-2 gap-2 pt-4 border-t border-white/5 bg-[#181818] -mx-5 -mb-5 p-4 rounded-b-sm">
                        {phase.stats.map((stat, i) => (
                           <div key={i}>
                              <div className="text-[9px] text-white/20 uppercase font-mono tracking-wider">{stat.label}</div>
                              <div className="text-xs font-mono font-medium text-white/80">{stat.value}</div>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Arrow Connector (Visual only) */}
                  {index < PHASES.length - 1 && (
                     <div className="absolute top-1/2 -right-4 -translate-y-1/2 text-white/5 hidden xl:block z-0">
                        <ArrowRight className="w-4 h-4" />
                     </div>
                  )}
               </motion.div>
            ))}
         </div>
      </div>

      {/* --- MOBILE LAYOUT: TIGHT VERTICAL TIMELINE (Visible < lg) --- */}
      <div className="lg:hidden px-4">
         <div className="relative border-l border-white/10 ml-3 space-y-8 pb-12">
            {PHASES.map((phase, index) => (
               <motion.div 
                  key={phase.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 group"
                  onClick={() => scrollToSection(phase.id)}
               >
                  {/* Timeline Dot */}
                  <div className={`absolute -left-[5px] top-6 w-2.5 h-2.5 rounded-full border-2 border-[#151515] transition-colors ${index === 3 ? 'bg-green-500 animate-pulse' : 'bg-[#2C2C2E] group-hover:bg-brand-mink'}`}></div>

                  <div className="bg-[#1C1C1E] border border-white/5 p-5 rounded-sm active:bg-[#242424] transition-colors">
                     <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                           <phase.icon className={`w-4 h-4 ${phase.color}`} />
                           <span className="text-xs font-mono text-white/40 uppercase tracking-widest">{phase.step} // {phase.label}</span>
                        </div>
                        {index === 3 && <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>}
                     </div>
                     
                     <h3 className="text-lg font-display text-white mb-1 uppercase">{phase.title}</h3>
                     
                     <div className="flex items-center gap-4 mt-3 pt-3 border-t border-white/5">
                        {phase.stats.map((stat, i) => (
                           <div key={i} className="flex items-center gap-2">
                              <span className="text-[9px] text-white/30 uppercase">{stat.label}:</span>
                              <span className="text-[10px] font-mono text-white">{stat.value}</span>
                           </div>
                        ))}
                     </div>
                  </div>
               </motion.div>
            ))}
            
            {/* Mobile Loop Connector */}
            <div className="absolute bottom-0 left-[-1px] w-4 h-full border-l border-dashed border-brand-mink/30 opacity-50 pointer-events-none rounded-bl-xl"></div>
            <div className="absolute -bottom-4 left-6 flex items-center gap-2 text-[10px] font-mono text-brand-mink uppercase tracking-widest">
                <RefreshCw className="w-3 h-3" />
                Loops back to Phase 01
            </div>
         </div>
      </div>

    </div>
  );
};

export default CircularFlow;
