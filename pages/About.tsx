
import React from 'react';
import FadeIn from '../components/FadeIn';
import { TEAM_MEMBERS } from '../constants';
import { Quote, Mail } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black text-brand-polar pt-20">
      
      {/* Header */}
      <section className="py-24 container mx-auto px-6 border-b border-white/5">
        <FadeIn>
           <h1 className="text-5xl md:text-8xl font-display font-medium text-white mb-8">
             About<br/>
             <span className="text-brand-mink">Make Golf.</span>
           </h1>
           <p className="text-xl text-brand-polar/60 font-light font-sans max-w-2xl leading-relaxed">
             We are a team of engineers, players, and designers based in Stockholm, Sweden. We are done with the status quo.
           </p>
        </FadeIn>
      </section>

      {/* Founder Story - Updated Image Styling */}
      <section className="py-32 bg-[#080808] overflow-hidden">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
               <div className="lg:col-span-5 relative group">
                   {/* Background Element for "Golfig" feel */}
                   <div className="absolute inset-0 bg-gradient-to-t from-brand-mink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg"></div>
                   <div className="absolute -inset-4 bg-brand-mink/5 blur-2xl rounded-full opacity-50"></div>
                   
                   {/* Image Container */}
                   <div className="aspect-[3/4] relative overflow-hidden rounded-sm border border-white/5 bg-gradient-to-b from-white/5 to-black">
                      <img 
                        src="/images/team/marten.png" 
                        alt="Mårten Eker"
                        className="w-full h-full object-cover object-top grayscale contrast-125 brightness-110 group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                      />
                      {/* Scanline/Texture Overlay */}
                      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                      
                      {/* Name Tag Overlay */}
                      <div className="absolute bottom-6 left-6 border-l-2 border-brand-mink pl-3">
                         <span className="block text-white font-display text-xl leading-none mb-1">Mårten Eker</span>
                         <span className="block text-brand-polar/50 font-mono text-[10px] uppercase tracking-widest">Founder // CEO</span>
                      </div>
                   </div>
               </div>
               
               <div className="lg:col-span-7 flex flex-col justify-center">
                   <FadeIn direction="left">
                       <Quote className="text-brand-mink w-12 h-12 mb-8 opacity-50" />
                       <h2 className="text-3xl md:text-5xl font-display text-white mb-8 leading-tight">
                         "I spent years on the tour playing clubs designed for 'everyone'. <br/>
                         <span className="text-brand-polar/40">But I wasn't everyone.</span>"
                       </h2>
                       <div className="space-y-6 text-brand-polar/60 font-sans font-light text-lg leading-relaxed mb-12 border-l border-white/10 pl-8">
                          <p>
                            The golf industry is built on a lie: that mass production can satisfy individual biomechanics. It can't. Casting and forging require expensive molds, which means manufacturers have to sell 50,000 units of the same head to make a profit.
                          </p>
                          <p>
                            We started Make Golf to break that cycle. By combining my background as a tour professional with architectural engineering, we use Direct Metal Laser Sintering (DMLS) to print iron geometries that are mathematically perfect for <em>one</em> person. No molds. No inventory. Just pure physics.
                          </p>
                       </div>
                   </FadeIn>
               </div>
            </div>
         </div>
      </section>

      {/* The Team */}
      <section className="py-24 container mx-auto px-6">
         <FadeIn>
            <h2 className="text-4xl font-display text-white mb-16 text-center">The Team</h2>
         </FadeIn>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, i) => (
               <FadeIn key={i} delay={i * 0.1}>
                  <div className="group h-full flex flex-col">
                     <div className="aspect-[4/5] bg-[#151515] mb-6 overflow-hidden relative border border-white/5">
                        <img 
                            src={member.image} 
                            alt={member.name} 
                            className="w-full h-full object-cover object-top filter grayscale contrast-125 brightness-110 opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" 
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                        
                        {/* Corner Accents */}
                        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-brand-mink/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-brand-mink/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                     </div>
                     
                     <div className="flex-grow">
                         <div className="flex justify-between items-baseline mb-2">
                             <h3 className="text-2xl font-display text-white">{member.name}</h3>
                         </div>
                         <div className="inline-block px-2 py-0.5 border border-brand-mink/30 bg-brand-mink/5 text-brand-mink font-mono text-[10px] uppercase tracking-widest mb-4">
                            {member.role}
                         </div>
                         <p className="text-brand-polar/50 text-sm font-sans leading-relaxed border-t border-white/5 pt-4 mb-6">
                            {member.bio}
                         </p>
                     </div>
                     
                     {/* Email Link */}
                     <div className="border-t border-white/10 pt-4 mt-auto">
                        <a 
                           href={`mailto:${member.email}`}
                           className="inline-flex items-center text-brand-polar/40 hover:text-brand-mink text-xs font-mono uppercase tracking-wider transition-colors"
                        >
                           <Mail className="w-3 h-3 mr-2" />
                           {member.email}
                        </a>
                     </div>
                  </div>
               </FadeIn>
            ))}
         </div>
      </section>

    </div>
  );
};

export default About;
