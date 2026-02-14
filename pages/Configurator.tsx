
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Save, Upload, ChevronLeft, Sliders, Cpu, Crosshair, ArrowRight, MousePointer2 } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import Button from '../components/Button';

// Mock Data for the simulation
const DEFAULT_PARAMS = {
  loft: 35.4,
  bladeLength: 79.0,
  toeHeight: 57.9,
  offset: -1.0,
  heelHeight: 34.5,
  topCurvature: 4.6,
  topLineWidth: 4.7,
  backDividerHeight: 0.401
};

const Configurator: React.FC = () => {
  const [params, setParams] = useState(DEFAULT_PARAMS);
  const MAKER_URL = "https://maker.make.golf/configurator?configurationState=a_7e175a18-1026-47cf-b224-16b8a8b0fa90_eHS_0_aLA_35.4_eLA_62.2_aO_-1_aBL_79_aTH_57.9_eHtH_32_aTpLW_4.7_dGW_0.81_dGDe_0.275_dGDi_2.24_dGTOTw_10.66_dGTEC_0.163_aHHt_34.5_bTTpR_12.833_dGBC_0.146_bTSR_18.207_cSC_2_aTC_4.6_bTAAR_-1.8_bTAR_42.3_eHsBlO_3.9_cSTW_19.7_cSW_19.7_cSHW_14.8_aBkDH_0.401_cSB_5_eHsT_1.55_eHsBPO_8.1_eHsBo_4_eHsR_15_cSLER_1.5_dGFO_1.68_cSBER_3_eCN_0.45_fM_0_dGXtd_0_eHsIC_1.11_eHsOR_0.955_fGB_0_fCG_0_aBkDS_2.01_cTBER_1.5_gLR_-7_gLOfTD_7_gLS_0.44_fML_0_gLOfT_0.13_gSNr__gHNr_10.24_gMNr_0.32_fMNr_0_fIL_0_fMIZ_0_fLorR_0&mg_raw=a_7e175a18-1026-47cf-b224-16b8a8b0fa90_eHS_0_aLA_35.4_eLA_62.2_aO_-1_aBL_79_aTH_57.9_eHtH_32_aTpLW_4.7_dGW_0.81_dGDe_0.275_dGDi_2.24_dGTOTw_10.66_dGTEC_0.163_aHHt_34.5_bTTpR_12.833_dGBC_0.146_bTSR_18.207_cSC_2_aTC_4.6_bTAAR_-1.8_bTAR_42.3_eHsBlO_3.9_cSTW_19.7_cSW_19.7_cSHW_14.8_aBkDH_0.401_cSB_5_eHsT_1.55_eHsBPO_8.1_eHsBo_4_eHsR_15_cSLER_1.5_dGFO_1.68_cSBER_3_eCN_0.45_fM_0_dGXtd_0_eHsIC_1.11_eHsOR_0.955_fGB_0_fCG_0_aBkDS_2.01_cTBER_1.5_gLR_-7_gLOfTD_7_gLS_0.44_fML_0_gLOfT_0.13_gSNr__gHNr_10.24_gMNr_0.32_fMNr_0_fIL_0_fMIZ_0_fLorR_0";

  const handleParamChange = (key: keyof typeof DEFAULT_PARAMS, value: number) => {
    setParams(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-[#050505] text-brand-polar pt-20 selection:bg-brand-mink selection:text-white">
      
      {/* INTERACTIVE MOCK SECTION (Replaces Hero) */}
      <section className="h-[calc(100vh-80px)] min-h-[800px] flex flex-col lg:flex-row overflow-hidden border-b border-white/5 relative">
        
        {/* LEFT PANEL: 3D VIEWPORT */}
        <div className="flex-1 relative bg-[#080808] flex items-center justify-center overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            
            {/* Overlay UI: Top Left */}
            <div className="absolute top-8 left-8 z-10 pointer-events-none">
                <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-2xl font-display font-medium text-white">Base Design Wedge 56</h1>
                    <span className="px-2 py-0.5 bg-white/10 text-[10px] font-mono uppercase tracking-wider rounded text-brand-polar/70">Wedge</span>
                </div>
                <div className="flex flex-col gap-1 text-[10px] font-mono text-brand-polar/30">
                    <span>ID: 61</span>
                    <span>v2.4.1-stable</span>
                </div>
            </div>

            {/* Overlay UI: Action Buttons */}
            <div className="absolute top-32 left-8 z-10 flex gap-4 pointer-events-auto">
                <button className="flex items-center gap-2 px-6 py-3 bg-brand-mink text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-red-600 transition-colors shadow-lg">
                    <Save className="w-4 h-4" /> Save New
                </button>
                <button className="flex items-center gap-2 px-6 py-3 border border-white/20 text-brand-polar text-xs font-mono font-bold uppercase tracking-wider hover:border-white hover:text-white transition-colors bg-black/20 backdrop-blur">
                    <Upload className="w-4 h-4" /> Open
                </button>
            </div>

            {/* Center Object (The Club) */}
            <div className="relative z-0 w-full h-full max-w-[800px] max-h-[800px] flex items-center justify-center p-10">
                 {/* Shadow */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-mink/5 blur-[100px] rounded-full opacity-50"></div>
                 
                 {/* Image with basic transforms to simulate config */}
                 <img 
                    src="https://images.unsplash.com/photo-1599586120429-4828d5dabb04?q=80&w=2000&auto=format&fit=crop"
                    alt="Wedge Render"
                    className="w-full h-full object-contain drop-shadow-2xl grayscale contrast-125 brightness-90"
                    style={{
                        maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                        transform: `rotate(${(params.loft - 35.4) * 0.2}deg) scale(${params.bladeLength / 79})`,
                        transition: 'transform 0.1s ease-out'
                    }}
                 />
                 
                 {/* Tech Overlay on Club */}
                 <div className="absolute inset-0 pointer-events-none opacity-20">
                     <svg className="w-full h-full" viewBox="0 0 800 800">
                        <circle cx="400" cy="400" r="250" fill="none" stroke="white" strokeWidth="1" strokeDasharray="4 4" className="animate-spin-slow" />
                        <line x1="400" y1="100" x2="400" y2="700" stroke="white" strokeWidth="0.5" />
                        <line x1="100" y1="400" x2="700" y2="400" stroke="white" strokeWidth="0.5" />
                     </svg>
                 </div>
            </div>

            {/* Launch CTA Overlay - positioned bottom center */}
             <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 pointer-events-auto">
                <p className="text-brand-polar/40 font-mono text-xs mb-4 uppercase tracking-widest bg-black/50 px-3 py-1 rounded backdrop-blur">Interactive Preview Mode</p>
                <a href={MAKER_URL} target="_blank" rel="noopener noreferrer">
                   <Button variant="primary" size="lg" className="shadow-[0_0_50px_-10px_rgba(255,34,76,0.6)] animate-pulse-slow">
                      Launch Maker Engine <ExternalLink className="w-4 h-4 ml-2" />
                   </Button>
                </a>
             </div>
        </div>

        {/* RIGHT PANEL: CONTROLS */}
        <div className="w-full lg:w-[400px] bg-[#111] border-l border-white/5 flex flex-col h-full relative z-20 shadow-2xl">
            {/* Header */}
            <div className="p-8 border-b border-white/5 bg-[#151515]">
                <button className="flex items-center text-brand-polar/50 hover:text-white text-xs font-mono mb-6 transition-colors">
                    <ChevronLeft className="w-3 h-3 mr-1" /> Back
                </button>
                <h2 className="text-2xl font-display font-medium text-white mb-2">Basic</h2>
                <p className="text-brand-polar/50 text-xs font-mono">Basic settings for the club chassis.</p>
            </div>

            {/* Controls List */}
            <div className="flex-1 overflow-y-auto p-8 space-y-10 no-scrollbar">
                <ControlSlider 
                    label="Loft Angle" 
                    value={params.loft} 
                    min={20} max={60} step={0.1} 
                    onChange={(v) => handleParamChange('loft', v)} 
                />
                <ControlSlider 
                    label="Blade Length" 
                    value={params.bladeLength} 
                    min={70} max={90} step={0.1} 
                    onChange={(v) => handleParamChange('bladeLength', v)} 
                />
                <ControlSlider 
                    label="Toe Height" 
                    value={params.toeHeight} 
                    min={50} max={65} step={0.1} 
                    onChange={(v) => handleParamChange('toeHeight', v)} 
                />
                <ControlSlider 
                    label="Offset" 
                    value={params.offset} 
                    min={-5} max={5} step={0.1} 
                    onChange={(v) => handleParamChange('offset', v)} 
                />
                <ControlSlider 
                    label="Heel Height" 
                    value={params.heelHeight} 
                    min={30} max={40} step={0.1} 
                    onChange={(v) => handleParamChange('heelHeight', v)} 
                />
                <ControlSlider 
                    label="Top Curvature" 
                    value={params.topCurvature} 
                    min={0} max={10} step={0.1} 
                    onChange={(v) => handleParamChange('topCurvature', v)} 
                />
                <ControlSlider 
                    label="Top Line Width" 
                    value={params.topLineWidth} 
                    min={3} max={8} step={0.1} 
                    onChange={(v) => handleParamChange('topLineWidth', v)} 
                />
                <ControlSlider 
                    label="Back Divider Height" 
                    value={params.backDividerHeight} 
                    min={0} max={1} step={0.001} 
                    onChange={(v) => handleParamChange('backDividerHeight', v)} 
                />
            </div>
            
            {/* Footer gradient fade */}
            <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#111] to-transparent pointer-events-none"></div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-[#0a0a0a] border-b border-white/5">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <FadeIn delay={0.1}>
                 <div className="group">
                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-6 text-brand-mink group-hover:bg-brand-mink group-hover:text-white transition-all duration-300">
                       <Sliders className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-display text-white mb-4">Parametric Geometry</h3>
                    <p className="text-brand-polar/50 font-mono text-xs leading-relaxed">
                       Adjust offset, blade length, top-line thickness, and bounce angle down to the millimeter. The model regenerates instantly in browser.
                    </p>
                 </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                 <div className="group">
                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-6 text-brand-mink group-hover:bg-brand-mink group-hover:text-white transition-all duration-300">
                       <Crosshair className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-display text-white mb-4">CG Manipulation</h3>
                    <p className="text-brand-polar/50 font-mono text-xs leading-relaxed">
                       Shift the Center of Gravity (CG) toe-bias or heel-bias to counteract your specific miss. Visualize mass properties in real-time.
                    </p>
                 </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                 <div className="group">
                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-6 text-brand-mink group-hover:bg-brand-mink group-hover:text-white transition-all duration-300">
                       <Cpu className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-display text-white mb-4">Export to Mfg</h3>
                    <p className="text-brand-polar/50 font-mono text-xs leading-relaxed">
                       What you see is what we print. The engine generates the exact manufacturing file sent to our EOS M290 printers.
                    </p>
                 </div>
              </FadeIn>
           </div>
        </div>
      </section>

      {/* Starting Points */}
      <section className="py-32 container mx-auto px-6">
         <FadeIn>
            <div className="flex items-end justify-between mb-16 border-b border-white/10 pb-8">
               <h2 className="text-4xl md:text-5xl font-display text-white">Select a Base Architecture</h2>
               <div className="hidden md:block text-brand-polar/40 font-mono text-xs uppercase tracking-widest">
                  Choose a chassis to start modifying
               </div>
            </div>
         </FadeIn>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blade */}
            <a href={MAKER_URL} target="_blank" rel="noopener noreferrer" className="group relative aspect-[3/4] overflow-hidden border border-white/10 bg-[#111] hover:border-brand-mink/50 transition-colors">
               <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 z-10"></div>
               <img 
                  src="https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?q=80&w=1576&auto=format&fit=crop" 
                  className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:scale-105 transition-transform duration-700"
                  alt="Blade"
               />
               <div className="absolute bottom-8 left-8 right-8 z-20">
                  <div className="flex justify-between items-end">
                     <div>
                        <div className="text-brand-mink font-mono text-xs uppercase mb-2 tracking-widest">Chassis 01</div>
                        <h3 className="text-3xl font-display text-white mb-1">Blade</h3>
                        <p className="text-brand-polar/50 text-xs font-mono">Workable. Precise.</p>
                     </div>
                     <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-brand-mink group-hover:border-transparent transition-all">
                        <ArrowRight className="w-4 h-4" />
                     </div>
                  </div>
               </div>
            </a>

            {/* Cavity */}
            <a href={MAKER_URL} target="_blank" rel="noopener noreferrer" className="group relative aspect-[3/4] overflow-hidden border border-white/10 bg-[#111] hover:border-brand-mink/50 transition-colors">
               <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 z-10"></div>
               <img 
                  src="https://images.unsplash.com/photo-1628256382834-367073b64436?q=80&w=2070&auto=format&fit=crop" 
                  className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:scale-105 transition-transform duration-700"
                  alt="Cavity"
               />
               <div className="absolute bottom-8 left-8 right-8 z-20">
                  <div className="flex justify-between items-end">
                     <div>
                        <div className="text-brand-mink font-mono text-xs uppercase mb-2 tracking-widest">Chassis 02</div>
                        <h3 className="text-3xl font-display text-white mb-1">Cavity</h3>
                        <p className="text-brand-polar/50 text-xs font-mono">Balanced. Stable.</p>
                     </div>
                     <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-brand-mink group-hover:border-transparent transition-all">
                        <ArrowRight className="w-4 h-4" />
                     </div>
                  </div>
               </div>
            </a>

            {/* Hollow */}
            <a href={MAKER_URL} target="_blank" rel="noopener noreferrer" className="group relative aspect-[3/4] overflow-hidden border border-white/10 bg-[#111] hover:border-brand-mink/50 transition-colors">
               <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 z-10"></div>
               <img 
                  src="https://images.unsplash.com/photo-1592919505780-303950717480?q=80&w=2022&auto=format&fit=crop" 
                  className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:scale-105 transition-transform duration-700"
                  alt="Hollow"
               />
               <div className="absolute bottom-8 left-8 right-8 z-20">
                  <div className="flex justify-between items-end">
                     <div>
                        <div className="text-brand-mink font-mono text-xs uppercase mb-2 tracking-widest">Chassis 03</div>
                        <h3 className="text-3xl font-display text-white mb-1">Hollow</h3>
                        <p className="text-brand-polar/50 text-xs font-mono">Fast. Forgiving.</p>
                     </div>
                     <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-brand-mink group-hover:border-transparent transition-all">
                        <ArrowRight className="w-4 h-4" />
                     </div>
                  </div>
               </div>
            </a>
         </div>
      </section>

      {/* Tutorial / Help CTA */}
      <section className="py-24 bg-brand-surface border-t border-white/5">
         <div className="container mx-auto px-6 text-center">
            <MousePointer2 className="w-12 h-12 text-brand-polar/20 mx-auto mb-6" />
            <h3 className="text-2xl font-display text-white mb-4">New to Parametric Design?</h3>
            <p className="text-brand-polar/50 max-w-lg mx-auto mb-8 font-mono text-sm">
               Our engine is powerful. If you need guidance navigating the 60+ parameters, start with a guided fitting session instead.
            </p>
            <Button variant="outline" size="sm">Book a Virtual Session</Button>
         </div>
      </section>

    </div>
  );
};

// Helper Component for Sliders
interface ControlSliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
}

const ControlSlider: React.FC<ControlSliderProps> = ({ label, value, min, max, step, onChange }) => {
    return (
        <div className="group">
            <label className="block text-xs font-mono text-brand-polar/70 mb-3 uppercase tracking-wider group-hover:text-white transition-colors">
                {label}
            </label>
            <div className="flex items-center gap-4">
                <div className="relative">
                    <input 
                        type="number" 
                        value={value}
                        onChange={(e) => onChange(parseFloat(e.target.value))}
                        className="w-20 bg-white/5 border border-white/10 text-white text-sm font-mono p-2 text-center focus:outline-none focus:border-brand-mink rounded-sm transition-colors"
                        step={step}
                    />
                </div>
                <div className="flex-1 relative h-6 flex items-center">
                    {/* Track Background */}
                    <div className="absolute w-full h-1 bg-white/10 rounded-full overflow-hidden">
                        <div 
                            className="h-full bg-brand-mink/50 group-hover:bg-brand-mink transition-colors duration-300" 
                            style={{ width: `${((value - min) / (max - min)) * 100}%` }}
                        ></div>
                    </div>
                    
                    <input 
                        type="range" 
                        min={min} 
                        max={max} 
                        step={step} 
                        value={value}
                        onChange={(e) => onChange(parseFloat(e.target.value))}
                        className="absolute w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    
                    {/* Custom Thumb handle */}
                    <div 
                        className="absolute h-3 w-3 bg-brand-polar rounded-full pointer-events-none shadow-[0_0_10px_rgba(255,255,255,0.5)] transform -translate-x-1.5 transition-all duration-150 group-hover:scale-125 group-hover:bg-brand-mink group-hover:shadow-[0_0_15px_rgba(255,34,76,0.6)]"
                        style={{ left: `${((value - min) / (max - min)) * 100}%` }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Configurator;
