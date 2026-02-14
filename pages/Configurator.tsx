import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sliders, Cpu, Crosshair, ArrowRight, MousePointer2 } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import Button from '../components/Button';

const Configurator: React.FC = () => {
  // The official external tool URL
  const MAKER_URL = "https://maker.make.golf/configurator?configurationState=a_7e175a18-1026-47cf-b224-16b8a8b0fa90_eHS_0_aLA_35.4_eLA_62.2_aO_-1_aBL_79_aTH_57.9_eHtH_32_aTpLW_4.7_dGW_0.81_dGDe_0.275_dGDi_2.24_dGTOTw_10.66_dGTEC_0.163_aHHt_34.5_bTTpR_12.833_dGBC_0.146_bTSR_18.207_cSC_2_aTC_4.6_bTAAR_-1.8_bTAR_42.3_eHsBlO_3.9_cSTW_19.7_cSW_19.7_cSHW_14.8_aBkDH_0.401_cSB_5_eHsT_1.55_eHsBPO_8.1_eHsBo_4_eHsR_15_cSLER_1.5_dGFO_1.68_cSBER_3_eCN_0.45_fM_0_dGXtd_0_eHsIC_1.11_eHsOR_0.955_fGB_0_fCG_0_aBkDS_2.01_cTBER_1.5_gLR_-7_gLOfTD_7_gLS_0.44_fML_0_gLOfT_0.13_gSNr__gHNr_10.24_gMNr_0.32_fMNr_0_fIL_0_fMIZ_0_fLorR_0&mg_raw=a_7e175a18-1026-47cf-b224-16b8a8b0fa90_eHS_0_aLA_35.4_eLA_62.2_aO_-1_aBL_79_aTH_57.9_eHtH_32_aTpLW_4.7_dGW_0.81_dGDe_0.275_dGDi_2.24_dGTOTw_10.66_dGTEC_0.163_aHHt_34.5_bTTpR_12.833_dGBC_0.146_bTSR_18.207_cSC_2_aTC_4.6_bTAAR_-1.8_bTAR_42.3_eHsBlO_3.9_cSTW_19.7_cSW_19.7_cSHW_14.8_aBkDH_0.401_cSB_5_eHsT_1.55_eHsBPO_8.1_eHsBo_4_eHsR_15_cSLER_1.5_dGFO_1.68_cSBER_3_eCN_0.45_fM_0_dGXtd_0_eHsIC_1.11_eHsOR_0.955_fGB_0_fCG_0_aBkDS_2.01_cTBER_1.5_gLR_-7_gLOfTD_7_gLS_0.44_fML_0_gLOfT_0.13_gSNr__gHNr_10.24_gMNr_0.32_fMNr_0_fIL_0_fMIZ_0_fLorR_0";

  return (
    <div className="min-h-screen bg-[#050505] text-brand-polar pt-20 selection:bg-brand-mink selection:text-white">
      
      {/* Hero / Launcher */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden border-b border-white/5">
        
        {/* Abstract Tech Background */}
        <div className="absolute inset-0 z-0 opacity-40">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,34,76,0.1),transparent_70%)]"></div>
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10"></div>
           
           {/* Moving Grid */}
           <div className="absolute inset-0 bg-grid opacity-20 animate-pulse-slow"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 border border-brand-mink/30 bg-brand-mink/5 px-4 py-1 rounded-full mb-8 backdrop-blur-md">
               <span className="w-1.5 h-1.5 bg-brand-mink rounded-full animate-pulse"></span>
               <span className="text-[10px] font-mono font-bold text-brand-mink uppercase tracking-widest">Make Lab // Beta Access</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-medium text-white mb-8 tracking-tighter leading-[0.9]">
              Total.<br/>
              Control.
            </h1>
            
            <p className="text-xl md:text-2xl text-brand-polar/60 font-light font-sans max-w-3xl mx-auto mb-12 leading-relaxed">
               This is not a color picker. This is a parametric engineering engine. 
               Control 60+ geometric variables in real-time.
            </p>

            <div className="flex flex-col items-center gap-4">
               <a href={MAKER_URL} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" size="lg" className="text-lg px-12 py-6 shadow-[0_0_50px_-10px_rgba(255,34,76,0.4)] group">
                     Launch 3D Configurator <ExternalLink className="w-5 h-5 ml-3 group-hover:rotate-45 transition-transform" />
                  </Button>
               </a>
               <span className="text-[10px] font-mono text-brand-polar/30 uppercase tracking-widest">Optimized for Desktop Chrome & Safari</span>
            </div>
          </FadeIn>
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

export default Configurator;