
import React, { useState, useEffect } from 'react';
import { ChevronLeft, Loader2, Maximize, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Configurator: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  // The specific ModelUp3D URL provided
  const CONFIGURATOR_URL = "https://configurator.modelup3d.com/?projectId=oa1oRJb3&token=eyJhbGciOiJIUzI1NiJ9.eyJ2NW4iOjEsImlkIjoxMzQsInA3ZCI6Im9hMW9SSmIzIiwicDlzIjpbImM1ZSIsInJfYzE1YSJdfQ.p-s501nEeYwHvyH2JJUYuSlk5f9rJZ2HbQC58p8DIXc&configurationState=a_29b5d105-ab7f-4511-a8cb-c81eb0f33f2c_7b8382fc-47a7-48ec-bfab-87daf3482240_0_e3685a61-0488-495b-af0a-03f4cd28662b_34.9_5310300e-e063-415e-b008-c54613d8a961_61_1e4aac43-e484-48ef-9549-2d54d4a16715_0_8ce09785-357e-48fb-ae65-422003074fef_77.4_cc947572-79b1-4736-bc9b-90b11a73713a_55.1_bc5871e7-3961-46c3-8fe0-1122e8586405_30.1_c5e62c30-a479-45a4-9879-c828067b840e_4.5_cdf62d42-b88d-4add-9487-21806bcbfe05_9.12_1c129292-ed94-48ea-ae88-309cd2291f1f_32.6_82434f86-8f4a-49bb-be3b-455c356e69bf_9.6_a38a92bf-cdb6-4ea1-b50d-2d108dd75062_14.789_52436bbd-9b9c-46f6-973f-0584ea52d3fe_1.6_b18d42ba-b806-41f9-8702-55359170f28d_2.5_c72f9f2b-c110-492a-851e-3395391883d0_-2.4_480f42a1-ddae-41bd-9d8f-73a47b8c9232_42.7_c0182fe3-ceab-4e11-9249-1ec1a765f0f0_23_22fc43a3-85ce-46b3-9d1f-75422eaf7da0_22.7_d7ae2c3c-6620-4717-b85f-6336c42303fe_14.7_8f9802f1-a672-403a-824e-620e4e93207f_0.436_67832bf3-3810-4db8-8a9d-fe7eb8f8a507_6_e458d1ce-50a5-43b2-9dd0-6297e8325ef5_1.49_14449719-d773-43bd-9741-17ce40106734_2_5e4e18a0-7ddf-4dca-abc3-ebc14804c910_10_c352805c-4369-4674-b1a8-c644bcea716e_2_6c8655d4-2130-4b0e-adea-e9a9b0bd3f3c_1.7_86cd5747-0513-4e1f-aef3-77f323c08da6_3_7c9e3dc2-4ee3-490f-af5a-1e033113ac98_0.45_groove+extend_0_76f64105-1ed0-476d-8fe9-8a0d735dfb25_1.11_1400e927-5c58-40be-9c6b-2fe1cb4e9315_0.955";

  return (
    <div className="h-screen bg-[#050505] text-brand-polar flex flex-col pt-20 overflow-hidden font-sans selection:bg-brand-mink selection:text-white">
      
      {/* Minimal Header */}
      <header className="h-14 border-b border-white/5 bg-[#080808] flex items-center justify-between px-4 md:px-6 z-20 shrink-0">
        <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2 text-brand-polar/40 hover:text-white transition-colors">
                <ChevronLeft className="w-4 h-4" />
                <span className="text-xs font-mono uppercase hidden md:inline">Exit</span>
            </Link>
            
            <div className="h-6 w-px bg-white/10 mx-2 hidden md:block"></div>
            
            <div className="flex items-center gap-2 font-display font-bold tracking-widest text-brand-mink">
                LIVE CONFIGURATOR
            </div>
        </div>

        <div className="flex items-center gap-4">
             <div className="hidden md:flex items-center gap-2 text-[10px] font-mono text-brand-polar/40">
                <AlertCircle className="w-3 h-3" />
                <span>BETA ENVIRONMENT v2.1</span>
             </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 relative w-full h-full bg-black">
         
         {/* Loading State */}
         {isLoading && (
            <div className="absolute inset-0 z-0 flex flex-col items-center justify-center bg-[#050505]">
                <Loader2 className="w-10 h-10 text-brand-mink animate-spin mb-4" />
                <div className="text-sm font-mono text-brand-polar animate-pulse">INITIALIZING 3D ENGINE...</div>
                <div className="text-xs font-mono text-brand-polar/30 mt-2">Loading Geometry & Textures</div>
            </div>
         )}

         {/* The Iframe */}
         <iframe 
            src={CONFIGURATOR_URL}
            className={`absolute inset-0 w-full h-full border-none transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            onLoad={() => setIsLoading(false)}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Make Golf 3D Configurator"
         />
      </div>
    </div>
  );
};

export default Configurator;
