
import React from 'react';
import FadeIn from '../components/FadeIn';
import { JOURNAL_POSTS } from '../constants';
import { ArrowUpRight, Radio } from 'lucide-react';

const Journal: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black text-brand-polar pt-20">
      
      <section className="py-24 container mx-auto px-6 border-b border-white/5 relative overflow-hidden">
         <div className="absolute right-0 top-0 p-12 opacity-5 pointer-events-none">
             <Radio className="w-64 h-64 text-brand-polar" />
         </div>
         
         <FadeIn>
            <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-brand-polar/60 font-mono text-xs uppercase tracking-widest">R&D Updates</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-display font-medium text-white mb-8 leading-[0.9]">
               Transmission<br/>
               <span className="text-brand-mink">Log.</span>
            </h1>
            <p className="text-brand-polar/60 font-mono uppercase tracking-widest text-sm max-w-xl leading-relaxed">
               Notes from the manufacturing floor. Deep dives into metallurgy, physics, and the death of casting.
            </p>
         </FadeIn>
      </section>

      <section className="py-24 container mx-auto px-6">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {JOURNAL_POSTS.map((post) => (
               <FadeIn key={post.id}>
                  <div className="group cursor-pointer">
                     <div className="aspect-[16/10] bg-[#111] border border-white/5 overflow-hidden mb-6 relative">
                        <img 
                           src={post.image} 
                           alt={post.title} 
                           className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-4 right-4 bg-black/80 backdrop-blur px-3 py-1 text-[10px] font-mono uppercase text-brand-polar">
                           {post.category}
                        </div>
                     </div>
                     <div className="flex items-center justify-between mb-3">
                        <span className="text-brand-mink font-mono text-xs uppercase tracking-widest">{post.date}</span>
                        <ArrowUpRight className="text-brand-polar/20 w-4 h-4 group-hover:text-brand-mink group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                     </div>
                     <h2 className="text-2xl font-display text-white mb-3 group-hover:underline decoration-brand-mink/50 underline-offset-4 decoration-1">{post.title}</h2>
                     <p className="text-brand-polar/50 text-sm font-sans font-light leading-relaxed">
                        {post.excerpt}
                     </p>
                  </div>
               </FadeIn>
            ))}
         </div>
      </section>

    </div>
  );
};

export default Journal;
