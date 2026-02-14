
import React, { useState } from 'react';
import { ExternalLink, Save, ArrowRight, RotateCcw, ChevronDown, Lock, Info, ChevronLeft } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

// Mock Data matching the screenshot
const TAB_OPTIONS = ['7 Iron', '5 Iron', 'Pitching Wedge'];

const Configurator: React.FC = () => {
  const [activeTab, setActiveTab] = useState('7 Iron');
  const [loft, setLoft] = useState(34.0);
  const [bladeLength, setBladeLength] = useState(80.0);
  const [lieAngle, setLieAngle] = useState(62.0);
  const [direction, setDirection] = useState('RIGHT');
  
  const MAKER_LOGIN_URL = "https://maker.make.golf/login";

  return (
    <div className="h-screen bg-[#050505] text-brand-polar flex flex-col pt-20 overflow-hidden font-sans selection:bg-brand-mink selection:text-white">
      
      {/* APP HEADER / TOOLBAR */}
      <header className="h-16 border-b border-white/5 bg-[#080808] flex items-center justify-between px-6 z-20 shrink-0">
        <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2 text-brand-polar/40 hover:text-white transition-colors">
                <ChevronLeft className="w-4 h-4" />
                <span className="text-xs font-mono uppercase hidden md:inline">Back</span>
            </Link>
            
            <div className="h-6 w-px bg-white/10 mx-2"></div>
            
            <div className="flex items-center gap-2 font-display font-bold tracking-widest text-brand-mink">
                PLAYGROUND
            </div>

            <div className="hidden md:flex gap-1 ml-4">
                {TAB_OPTIONS.map((tab) => (
                    <button 
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`text-xs font-mono px-4 py-1.5 rounded-sm transition-all ${
                            activeTab === tab 
                                ? 'bg-brand-mink text-white font-bold' 
                                : 'bg-white/5 text-brand-polar/40 hover:text-white hover:bg-white/10'
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <button className="p-2 text-brand-polar/40 hover:text-white transition-colors" title="Reset">
                <RotateCcw className="w-4 h-4" />
            </button>
        </div>

        <div className="flex items-center gap-4">
             <button className="hidden md:flex items-center gap-2 text-brand-polar/60 hover:text-white text-xs font-mono border border-white/10 px-4 py-2 rounded-sm transition-colors hover:bg-white/5">
                <Save className="w-3 h-3" /> 
                <span className="uppercase">Spara design</span>
             </button>
             
             <a href={MAKER_LOGIN_URL} target="_blank" rel="noopener noreferrer">
                <button className="bg-brand-black hover:bg-[#222] border border-brand-mink/50 text-white text-xs font-mono font-bold px-4 py-2 rounded-sm uppercase tracking-wider transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(255,34,76,0.1)] hover:shadow-[0_0_20px_rgba(255,34,76,0.3)]">
                    Starta fitting <ArrowRight className="w-3 h-3" />
                </button>
             </a>
        </div>
      </header>

      {/* MAIN WORKSPACE */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* 3D VIEWPORT */}
        <div className="flex-1 relative bg-[#0c0c0c] flex items-center justify-center group">
             {/* Background Grid */}
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]"></div>
             
             {/* Render */}
             <div className="relative z-10 w-[70%] max-w-[800px] aspect-square flex items-center justify-center">
                 {/* Glow behind club */}
                 <div className="absolute inset-0 bg-brand-mink/5 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                 
                 <img 
                    src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070&auto=format&fit=crop"
                    alt="Club Render"
                    className="w-full h-full object-contain drop-shadow-2xl grayscale contrast-125 brightness-90 transition-transform duration-300 ease-out"
                    style={{ 
                        transform: `rotate(${(loft - 34) * -0.5}deg) scale(${bladeLength / 80})` 
                    }}
                 />
             </div>

             {/* Watermark */}
             <div className="absolute bottom-8 left-8 text-brand-polar/10 font-display font-bold text-6xl md:text-8xl select-none pointer-events-none whitespace-nowrap">
                MAKER - BETA
             </div>

             {/* Partner Login CTA Overlay (Optional - for visual prompt) */}
             <div className="absolute top-6 right-6 z-30">
                 <a href={MAKER_LOGIN_URL} target="_blank" rel="noopener noreferrer">
                    <div className="flex items-center gap-2 bg-black/50 backdrop-blur border border-white/10 px-4 py-2 rounded-full text-xs font-mono text-brand-polar/60 hover:text-white hover:border-brand-mink/50 transition-all cursor-pointer">
                        <Lock className="w-3 h-3" />
                        <span>Log in for Full Access</span>
                    </div>
                 </a>
             </div>
        </div>

        {/* RIGHT SIDEBAR - CONTROLS */}
        <div className="w-[360px] bg-[#111] border-l border-white/5 flex flex-col overflow-y-auto shrink-0 z-20 shadow-2xl">
            
            {/* Sidebar Header */}
            <div className="p-6 border-b border-white/5 bg-[#151515]">
                <h3 className="text-xl font-display text-white mb-1">MAKER - BETA</h3>
                <p className="text-xs font-mono text-brand-polar/40">--under development--</p>
            </div>

            {/* Accordion: Info */}
            <div className="border-b border-white/5">
                <button className="w-full flex items-center justify-between p-4 px-6 hover:bg-white/5 transition-colors">
                    <span className="text-sm font-sans text-brand-polar/70">Info</span>
                    <ChevronDown className="w-4 h-4 text-brand-polar/40" />
                </button>
            </div>

            {/* Accordion: Settings (Active) */}
            <div className="border-b border-white/5 pb-8 bg-[#111]">
                <button className="w-full flex items-center justify-between p-4 px-6 bg-white/5 border-b border-white/5 mb-6">
                    <span className="text-sm font-sans text-white font-medium">Settings</span>
                    <ChevronDown className="w-4 h-4 text-white rotate-180" />
                </button>
                
                <div className="px-6 space-y-8">
                    
                    {/* Club Direction */}
                    <div>
                        <div className="flex justify-between items-center mb-3">
                            <label className="text-xs font-sans text-brand-polar/60 uppercase">CLUB DIRECTION</label>
                        </div>
                        <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-sm overflow-hidden p-[1px]">
                            <button 
                                onClick={() => setDirection('RIGHT')}
                                className={`py-2 text-xs font-bold font-mono transition-all ${
                                    direction === 'RIGHT' ? 'bg-white text-black' : 'bg-transparent text-brand-polar/50 hover:text-white'
                                }`}
                            >
                                RIGHT
                            </button>
                            <button 
                                onClick={() => setDirection('LEFT')}
                                className={`py-2 text-xs font-bold font-mono transition-all ${
                                    direction === 'LEFT' ? 'bg-white text-black' : 'bg-transparent text-brand-polar/50 hover:text-white'
                                }`}
                            >
                                LEFT
                            </button>
                        </div>
                    </div>

                    {/* Finish Selector */}
                    <div>
                        <label className="block text-xs font-sans text-brand-polar/60 mb-3">Finish Club Head</label>
                        <div className="relative group">
                            <button className="w-full flex items-center justify-between border border-white/10 bg-[#1a1a1a] hover:border-brand-mink/30 px-3 py-2.5 rounded-sm transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className="w-4 h-4 bg-[#666] rounded-sm shadow-sm"></div>
                                    <span className="text-xs font-mono text-white">RAW Finish</span>
                                </div>
                                <ChevronDown className="w-3 h-3 text-brand-polar/50 group-hover:text-white" />
                            </button>
                        </div>
                    </div>

                    <div className="h-px bg-white/5 my-2"></div>

                    {/* Slider: Loft */}
                    <ControlSlider 
                        label="Loft Angle" 
                        value={loft} 
                        onChange={setLoft}
                        min={20} max={45} step={0.5}
                    />

                    {/* Slider: Blade Length */}
                    <ControlSlider 
                        label="Blade Length" 
                        value={bladeLength} 
                        onChange={setBladeLength}
                        min={70} max={90} step={0.5}
                    />

                    {/* Slider: Lie Angle */}
                    <ControlSlider 
                        label="Lie Angle" 
                        value={lieAngle} 
                        onChange={setLieAngle}
                        min={58} max={66} step={0.5}
                        info={true}
                    />
                </div>
            </div>
            
            {/* Promo / Footer of sidebar */}
            <div className="mt-auto p-6 border-t border-white/5 bg-[#151515]">
                 <div className="flex items-start gap-3 opacity-60">
                     <Info className="w-4 h-4 text-brand-mink shrink-0 mt-0.5" />
                     <p className="text-[10px] text-brand-polar leading-relaxed font-mono">
                         Values shown are estimates. Final geometry is verified during the sintering process.
                     </p>
                 </div>
            </div>
        </div>

      </div>
    </div>
  );
};

// Reusable Slider Component matching the screenshot style
interface ControlSliderProps {
    label: string;
    value: number;
    onChange: (val: number) => void;
    min: number;
    max: number;
    step: number;
    info?: boolean;
}

const ControlSlider: React.FC<ControlSliderProps> = ({ label, value, onChange, min, max, step, info }) => {
    return (
        <div>
            <div className="flex items-center gap-2 mb-3">
                <label className="text-xs font-sans text-brand-polar/60">{label}</label>
                {info && (
                    <div className="w-3.5 h-3.5 rounded-full border border-white/20 text-[8px] flex items-center justify-center text-brand-polar/40 cursor-help hover:border-brand-mink hover:text-brand-mink transition-colors">
                        i
                    </div>
                )}
            </div>
            <div className="flex items-center gap-4">
                <div className="relative w-16 group">
                    <input 
                        type="number"
                        value={value.toFixed(1)}
                        onChange={(e) => onChange(parseFloat(e.target.value))}
                        className="w-full bg-white text-black border border-transparent rounded-sm px-1 py-1.5 text-center text-xs font-mono font-bold focus:outline-none focus:ring-2 focus:ring-brand-mink"
                    />
                </div>
                
                <div className="flex-1 relative h-6 flex items-center group cursor-pointer">
                    {/* Track */}
                    <div className="absolute w-full h-1 bg-white/10 rounded-full overflow-hidden">
                        {/* No fill color in screenshot, just the thumb on track */}
                    </div>
                    
                    {/* Range Input (Invisible overlay) */}
                    <input 
                        type="range"
                        min={min}
                        max={max}
                        step={step}
                        value={value}
                        onChange={(e) => onChange(parseFloat(e.target.value))}
                        className="absolute w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    
                    {/* Custom Thumb */}
                    <div 
                        className="absolute w-3 h-3 bg-[#666] hover:bg-white rounded-full shadow-md transform -translate-x-1.5 transition-colors duration-200"
                        style={{ left: `${((value - min) / (max - min)) * 100}%` }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Configurator;
