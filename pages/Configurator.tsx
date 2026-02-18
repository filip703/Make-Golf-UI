
import React from 'react';
import { ExternalLink, Lock, ArrowRight, Maximize } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import Button from '../components/Button';
import BlueprintImage from '../components/BlueprintImage';
import { Link } from 'react-router-dom';

const Configurator: React.FC = () => {
  const DASHBOARD_URL = "https://frontend-seven-iota-56.vercel.app/login";
  // The long token URL for the specific configuration state used in the teaser (same as on Home page)
  const TEASER_IFRAME_URL = "https://configurator.modelup3d.com/?projectId=oa1oRJb3&token=eyJhbGciOiJIUzI1NiJ9.eyJ2NW4iOjEsImlkIjoxMzQsInA3ZCI6Im9hMW9SSmIzIiwicDlzIjpbImM1ZSIsInJfYzE1YSJdfQ.p-s501nEeYwHvyH2JJUYuSlk5f9rJZ2HbQC58p8DIXc&configurationState=a_29b5d105-ab7f-4511-a8cb-c81eb0f33f2c_7b8382fc-47a7-48ec-bfab-87daf3482240_0_e3685a61-0488-495b-af0a-03f4cd28662b_34.9_5310300e-e063-415e-b008-c54613d8a961_61_1e4aac43-e484-48ef-9549-2d54d4a16715_0_8ce09785-357e-48fb-ae65-422003074fef_77.4_cc947572-79b1-4736-bc9b-90b11a73713a_55.1_bc5871e7-3961-46c3-8fe0-1122e8586405_30.1_c5e62c30-a479-45a4-9879-c828067b840e_4.5_cdf62d42-b88d-4add-9487-21806bcbfe05_9.12_1c129292-ed94-48ea-ae88-309cd2291f1f_32.6_82434f86-8f4a-49bb-be3b-455c356e69bf_9.6_a38a92bf-cdb6-4ea1-b50d-2d108dd75062_14.789_52436bbd-9b9c-46f6-973f-0584ea52d3fe_1.6_b18d42ba-b806-41f9-8702-55359170f28d_2.5_c72f9f2b-c110-492a-851e-3395391883d0_-2.4_480f42a1-ddae-41bd-9d8f-73a47b8c9232_42.7_c0182fe3-ceab-4e11-9249-1ec1a765f0f0_23_22fc43a3-85ce-46b3-9d1f-75422eaf7da0_22.7_d7ae2c3c-6620-4717-b85f-6336c42303fe_14.7_8f9802f1-a672-403a-824e-620e4e93207f_0.436_67832bf3-3810-4db8-8a9d-fe7eb8f8a507_6_e458d1ce-50a5-43b2-9dd0-6297e8325ef5_1.49_14449719-d773-43bd-9741-17ce40106734_2_5e4e18a0-7ddf-4dca-abc3-ebc14804c910_10_c352805c-4369-4674-b1a8-c644bcea716e_2_6c8655d4-2130-4b0e-adea-e9a9b0bd3f3c_1.7_86cd5747-0513-4e1f-aef3-77f323c08da6_3_7c9e3dc2-4ee3-490f-af5a-1e033113ac98_0.45_groove+extend_0_76f64105-1ed0-476d-8fe9-8a0d735dfb25_1.11_1400e927-5c58-40be-9c6b-2fe1cb4e9315_0.955";

  const CONFIG_CATEGORIES = [
    {
      id: 'irons',
      name: 'Irons',
      subtitle: 'Architecture 01',
      desc: 'Precision instruments. Fully parametric blade lengths, offsets, and top-lines. Optimized for your strike pattern.',
      image: 'https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/klubbor/iron.jpeg',
      features: ['17-4PH SS', 'MoldJet™ Print', 'Custom CG'],
      status: 'AVAILABLE',
      link: '/studio'
    },
    {
      id: 'wedges',
      name: 'Wedges',
      subtitle: 'Architecture 02',
      desc: 'Short game dominance. Raw printed faces and custom grind geometry adapted to your angle of attack.',
      image: 'https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/klubbor/46%20PW1.png',
      secondaryImage: 'https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/klubbor/46%20PW2.png',
      features: ['Raw Finish', 'High Spin', 'Variable Sole'],
      status: 'AVAILABLE',
      link: '/studio'
    },
    {
      id: 'putters',
      name: 'Putters',
      subtitle: 'Architecture 03',
      desc: 'The art of stability. Complex lattice structures allow for extreme MOI in compact shapes impossible to mill.',
      image: 'https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/klubbor/Putter%20JM.png',
      features: ['316L SS', 'Lattice Core', 'Face Balanced'],
      status: 'COMING_SOON',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1C1C1E] to-[#121212] pt-24 text-brand-polar selection:bg-brand-mink selection:text-white pb-20">
      
      {/* Header */}
      <section className="container mx-auto px-6 mb-16">
        <FadeIn>
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
               <div className="w-1.5 h-1.5 bg-brand-mink rounded-full animate-pulse"></div>
               <div className="text-brand-polar/60 font-mono text-xs uppercase tracking-widest">3D Studio Beta</div>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-medium text-white mb-6">
              Configure Your Weapon.
            </h1>
            <p className="text-xl text-brand-polar/60 font-light font-sans max-w-2xl leading-relaxed">
               Select a chassis architecture to begin. All parameters—loft, lie, offset, and weight distribution—can be adjusted in the 3D engine.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* 3D Teaser Section */}
      <section className="container mx-auto px-6 mb-20">
         <FadeIn delay={0.2}>
           <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group bg-[#000]">
              {/* Iframe */}
              <iframe 
                  src={TEASER_IFRAME_URL}
                  className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-700 filter grayscale group-hover:grayscale-0"
                  title="3D Configurator Teaser"
                  frameBorder="0"
                  scrolling="no"
              ></iframe>

              {/* Overlay for Launch Action */}
              <Link 
                  to="/studio"
                  className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 group-hover:bg-transparent transition-colors duration-500"
              >
                  <div className="bg-[#1C1C1E]/90 backdrop-blur-md border border-white/10 pl-6 pr-4 py-3 rounded-full flex items-center gap-4 shadow-2xl transform group-hover:scale-105 transition-all duration-300 group-hover:bg-brand-mink group-hover:border-brand-mink">
                     <span className="text-white font-display uppercase tracking-widest text-xs group-hover:text-black font-bold">Launch Studio</span>
                     <div className="w-8 h-8 rounded-full bg-brand-mink group-hover:bg-black flex items-center justify-center text-black group-hover:text-white transition-colors">
                        <Maximize className="w-4 h-4" />
                     </div>
                  </div>
              </Link>

              {/* Tech Overlay (Top Left) */}
              <div className="absolute top-6 left-6 z-0 pointer-events-none hidden md:block">
                    <div className="flex flex-col gap-2">
                       <div className="bg-black/60 backdrop-blur px-3 py-1.5 rounded border border-white/10 text-[10px] font-mono text-brand-mink uppercase flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-brand-mink rounded-full animate-pulse"></div>
                          Rendering: 60FPS
                       </div>
                       <div className="bg-black/60 backdrop-blur px-3 py-1.5 rounded border border-white/10 text-[10px] font-mono text-brand-polar/60 uppercase">
                          Model: MB-02_Proto
                       </div>
                    </div>
              </div>
           </div>
         </FadeIn>
      </section>

      {/* Selector Grid */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CONFIG_CATEGORIES.map((cat, idx) => (
            <FadeIn key={cat.id} delay={0.2 + (idx * 0.1)}>
              <div className="group relative block h-[600px] bg-[#242424] rounded-xl overflow-hidden border border-white/5 hover:border-brand-mink/50 transition-all duration-500 shadow-2xl">
                
                {/* Image Background with Blueprint Effect */}
                <div className="absolute inset-0 z-0">
                    <BlueprintImage 
                        src={cat.image} 
                        alt={cat.name}
                        secondarySrc={cat.secondaryImage}
                        className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E] via-[#1C1C1E]/50 to-transparent opacity-90 pointer-events-none"></div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between relative z-20 pointer-events-none">
                   
                   {/* Top Bar */}
                   <div className="flex justify-between items-start pointer-events-auto">
                      <div className="flex items-center gap-3">
                         <span className="text-xs font-mono text-brand-mink bg-black/50 px-2 py-1 rounded border border-white/10 backdrop-blur">
                            {cat.subtitle}
                         </span>
                      </div>
                      
                      {cat.status === 'COMING_SOON' && (
                         <div className="bg-black/80 backdrop-blur border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                             <Lock className="w-3 h-3 text-white/50" />
                             <span className="text-[10px] font-mono uppercase text-white/50 tracking-wider">Locked</span>
                         </div>
                      )}
                   </div>

                   {/* Bottom Info */}
                   <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 pointer-events-auto">
                      <h3 className="text-4xl font-display text-white mb-3">{cat.name}</h3>
                      <p className="text-brand-polar/70 text-sm font-light leading-relaxed mb-6 max-w-sm line-clamp-3 group-hover:line-clamp-none transition-all">
                         {cat.desc}
                      </p>
                      
                      {/* Features Tags */}
                      <div className="flex flex-wrap gap-2 mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          {cat.features.map((feat, i) => (
                              <span key={i} className="text-[10px] font-mono uppercase tracking-widest text-white/80 bg-white/10 px-2 py-1 rounded border border-white/5">
                                  {feat}
                              </span>
                          ))}
                      </div>

                      {cat.status === 'AVAILABLE' ? (
                         <Link to={cat.link} className="block w-full">
                             <Button variant="primary" size="md" className="w-full group-hover:bg-brand-mink group-hover:text-white transition-all shadow-xl">
                                 Launch Configurator <ExternalLink className="w-3 h-3 ml-2" />
                             </Button>
                         </Link>
                      ) : (
                         <Button variant="outline" size="md" className="w-full opacity-50 cursor-not-allowed border-white/10 text-white/40 hover:border-white/10 hover:text-white/40">
                             Coming Soon in Beta 2.0
                         </Button>
                      )}
                   </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Direct Link Footer */}
      <section className="container mx-auto px-6 mt-20 border-t border-white/5 pt-12">
         <FadeIn>
            <div className="glass-panel p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-8">
               <div>
                  <h4 className="text-xl font-display text-white mb-2">Already have a fit file?</h4>
                  <p className="text-brand-polar/50 text-sm font-mono">Upload your JSON data to bypass the visual configurator.</p>
               </div>
               <div className="flex gap-4">
                  <a href={DASHBOARD_URL} target="_blank" rel="noopener noreferrer">
                     <Button variant="secondary" size="md" className="rounded-md">Upload Data</Button>
                  </a>
                  <Link to="/studio">
                    <Button variant="ghost" size="md" className="rounded-md">Skip to Editor &rarr;</Button>
                  </Link>
               </div>
            </div>
         </FadeIn>
      </section>

    </div>
  );
};

export default Configurator;
