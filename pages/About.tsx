
import React from 'react';
import FadeIn from '../components/FadeIn';
import { TEAM_MEMBERS } from '../constants';
import { Quote } from 'lucide-react';

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

      {/* Founder Story */}
      <section className="py-32 bg-[#080808]">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
               <div className="lg:col-span-5 relative">
                   {/* Abstract image or Mårten's picture if available later */}
                   <div className="aspect-[3/4] bg-[#111] overflow-hidden grayscale">
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                        alt="Mårten"
                        className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-700"
                      />
                   </div>
               </div>
               <div className="lg:col-span-7 flex flex-col justify-center">
                   <FadeIn>
                       <Quote className="text-brand-mink w-12 h-12 mb-8 opacity-50" />
                       <h2 className="text-3xl md:text-4xl font-display text-white mb-8 leading-tight">
                         "I spent 15 years on tour playing clubs that were designed for 'everyone'. But I wasn't everyone."
                       </h2>
                       <div className="space-y-6 text-brand-polar/60 font-sans font-light text-lg leading-relaxed mb-12">
                          <p>
                            The golf industry is built on a lie: that mass production can satisfy individual biomechanics. It can't. Casting and forging require expensive molds, which means manufacturers have to sell 50,000 units of the same head to make a profit.
                          </p>
                          <p>
                            We started Make Golf to break that cycle. By using Direct Metal Laser Sintering (DMLS), we can print a single iron that is mathematically perfect for <em>one</em> person. No molds. No inventory. Just pure physics.
                          </p>
                       </div>
                       <div>
                          <div className="text-white font-display text-xl">Mårten</div>
                          <div className="text-brand-mink font-mono text-xs uppercase tracking-widest">Founder</div>
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
                  <div className="group">
                     <div className="aspect-square bg-[#151515] mb-6 overflow-hidden grayscale border border-white/5">
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" />
                     </div>
                     <h3 className="text-2xl font-display text-white">{member.name}</h3>
                     <div className="text-brand-mink font-mono text-xs uppercase tracking-widest mb-4">{member.role}</div>
                     <p className="text-brand-polar/50 text-sm font-sans">{member.bio}</p>
                  </div>
               </FadeIn>
            ))}
         </div>
      </section>

    </div>
  );
};

export default About;
