
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import { MapPin, Target, ShieldCheck, ArrowRight, Dna, Fingerprint, History, Play, Pause, Volume2, VolumeX, Quote, Star, PenTool, ExternalLink } from 'lucide-react';
import { ARTICLES } from '../constants'; // Importing article data
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';

const REVIEWS = [
   {
      id: 1,
      author: "Johan S.",
      role: "HCP 4.2 // Beta Tester",
      location: "Bro Hof Slott",
      quote: "The dispersion numbers don't lie. I've shaved 4 strokes off my game simply because my 'bad' shots are now finding the green edge instead of the bunker. The feel is unlike anything cast.",
      rating: 5,
      spec: "J7 Irons // KBS Tour"
   },
   {
      id: 2,
      author: "Marcus Lindberg",
      role: "Club Fitter",
      location: "Stockholm",
      quote: "Finally, hardware that matches the precision of my launch monitor. Being able to adjust CG location by the millimeter for my clients changes the entire fitting conversation.",
      rating: 5,
      spec: "Partner License"
   },
   {
      id: 3,
      author: "Sarah W.",
      role: "HCP 12.5 // Architect",
      location: "Falsterbo GK",
      quote: "I bought them for the aesthetics, I kept them for the forgiveness. The raw finish ages beautifully, and the ball speed consistency on toe-strikes is genuinely confusing—in a good way.",
      rating: 5,
      spec: "UB-01 Hollow // Graphite"
   }
];

const About: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
     if (videoRef.current) {
        if (isPlaying) {
           videoRef.current.pause();
        } else {
           videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
     }
  };

  const toggleMute = () => {
     if (videoRef.current) {
        videoRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
     }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F7] pt-20 text-[#1C1C1E] selection:bg-brand-mink selection:text-white overflow-hidden">
      
      {/* Hero - Softened "The Truth" */}
      <section className="relative py-32 container mx-auto px-6 border-b border-black/5">
         <FadeIn>
            <div className="max-w-4xl relative z-10">
               <div className="flex items-center gap-3 mb-6">
                  <div className="w-1.5 h-1.5 bg-brand-mink rounded-full"></div>
                  <div className="text-[#1C1C1E]/60 font-mono text-xs uppercase tracking-widest">Our Philosophy</div>
               </div>
               <h1 className="text-5xl md:text-7xl font-display font-medium text-[#1C1C1E] mb-10 leading-[1.1]">
                 Golf Deserves<br/>
                 <span className="text-brand-mink">Better.</span>
               </h1>
               <p className="text-xl text-[#1C1C1E]/60 font-light font-sans max-w-2xl leading-relaxed mb-8">
                  For too long, golfers have adapted to their equipment. We believe it should be the other way around. By combining biomechanics with additive manufacturing, we create clubs that are simply an extension of you.
               </p>
            </div>
         </FadeIn>
      </section>

      {/* Brand Video Section */}
      <section className="py-12 md:py-24 bg-[#EAEAEA]">
         <div className="container mx-auto px-6">
            <FadeIn>
               <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl group bg-black">
                  <video 
                     ref={videoRef}
                     src="https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/Video/Make%20brand%20video.mp4" 
                     className="w-full h-full object-cover"
                     playsInline
                     loop
                     muted
                     autoPlay
                     onPlay={() => setIsPlaying(true)}
                     onPause={() => setIsPlaying(false)}
                     onClick={togglePlay}
                  />
                  
                  {/* Controls Overlay */}
                  <div className="absolute bottom-6 right-6 flex items-center gap-4 z-20">
                     <button 
                        onClick={toggleMute}
                        className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-brand-mink hover:border-brand-mink transition-all duration-300"
                     >
                        {isMuted ? <VolumeX className="w-4 h-4 md:w-5 md:h-5" /> : <Volume2 className="w-4 h-4 md:w-5 md:h-5" />}
                     </button>
                     <button 
                        onClick={togglePlay}
                        className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-brand-mink hover:border-brand-mink transition-all duration-300"
                     >
                        {isPlaying ? <Pause className="w-4 h-4 md:w-5 md:h-5" /> : <Play className="w-4 h-4 md:w-5 md:h-5 ml-0.5" />}
                     </button>
                  </div>

                  {/* Optional Overlay when paused */}
                  {!isPlaying && (
                     <div className="absolute inset-0 bg-black/40 flex items-center justify-center pointer-events-none">
                        <Play className="w-16 h-16 text-white opacity-50" />
                     </div>
                  )}
               </div>
               <div className="mt-4 flex justify-between items-start">
                   <div className="text-[#1C1C1E]/40 font-mono text-[10px] uppercase tracking-widest">
                       Brand Manifesto // 2026
                   </div>
                   <div className="text-[#1C1C1E]/60 text-xs font-sans max-w-md text-right">
                       "It's not about the club you buy. It's about the club you build."
                   </div>
               </div>
            </FadeIn>
         </div>
      </section>

      {/* DNA Section - Light Theme */}
      <section className="py-24 bg-white border-b border-black/5">
         <div className="container mx-auto px-6">
            <FadeIn>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-display text-[#1C1C1E] mb-4">The MAKE DNA</h2>
                    <div className="w-12 h-1 bg-brand-mink mx-auto"></div>
                </div>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                <FadeIn delay={0.1}>
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-[#F5F5F7] rounded-full flex items-center justify-center mb-6 text-brand-mink">
                            <Fingerprint className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-display text-[#1C1C1E] mb-3">Hyper-Personal</h3>
                        <p className="text-[#1C1C1E]/60 text-sm leading-relaxed">
                            No two swings are alike. Why should clubs be? We treat your swing signature as a unique blueprint for manufacturing.
                        </p>
                    </div>
                </FadeIn>
                <FadeIn delay={0.2}>
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-[#F5F5F7] rounded-full flex items-center justify-center mb-6 text-brand-mink">
                            <Target className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-display text-[#1C1C1E] mb-3">Honest Performance</h3>
                        <p className="text-[#1C1C1E]/60 text-sm leading-relaxed">
                            We strip away the marketing noise. No "miracle materials" or empty promises. Just physics, geometry, and verifiable data.
                        </p>
                    </div>
                </FadeIn>
                <FadeIn delay={0.3}>
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-[#F5F5F7] rounded-full flex items-center justify-center mb-6 text-brand-mink">
                            <History className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-display text-[#1C1C1E] mb-3">Sustainable Craft</h3>
                        <p className="text-[#1C1C1E]/60 text-sm leading-relaxed">
                            Printing on demand means zero waste inventory. We manufacture in Sweden, reducing the carbon footprint of global shipping.
                        </p>
                    </div>
                </FadeIn>
            </div>
         </div>
      </section>

      {/* --- FOUNDER STORY SECTION --- */}
      <section className="py-24 bg-[#1C1C1E] text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-grid opacity-5"></div>
          <div className="container mx-auto px-6 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  
                  {/* Image Side */}
                  <FadeIn>
                      <div className="relative rounded-lg overflow-hidden border border-white/10 aspect-[4/5] shadow-2xl">
                          <img 
                              src="https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/Team/marten.png" 
                              alt="Mårten Eker" 
                              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                          />
                          <div className="absolute bottom-6 left-6 right-6">
                              <div className="bg-black/80 backdrop-blur px-4 py-3 border-l-2 border-brand-mink">
                                  <div className="text-white font-display text-lg">Mårten Eker</div>
                                  <div className="text-brand-polar/60 text-xs font-mono uppercase tracking-widest">Founder // Head of Engineering</div>
                              </div>
                          </div>
                      </div>
                  </FadeIn>

                  {/* Story Side */}
                  <FadeIn direction="left" delay={0.2}>
                      <div className="flex items-center gap-2 text-brand-mink mb-6">
                          <PenTool className="w-5 h-5" />
                          <span className="font-mono text-xs uppercase tracking-widest">The Origin Story</span>
                      </div>
                      
                      <h2 className="text-3xl md:text-5xl font-display text-white mb-8 leading-tight">
                          "I didn't want to start a company. <br/>
                          <span className="text-white/40">I just wanted a putter that worked."</span>
                      </h2>

                      <div className="space-y-6 text-lg text-brand-polar/70 font-light font-sans leading-relaxed">
                          <p>
                              I've played elite golf for over 25 years. I'm also an engineer who obsesses over tolerances. 
                              For years, I trusted the big brands. But the turning point came when I decided to switch my putting stroke 
                              from right-handed to left-handed to cure a persistent twitch.
                          </p>
                          <p>
                              I needed specific geometry—a precise mass distribution to match my new arc. I scoured the market. 
                              It didn't exist. Everything was cast in mass molds or milled from blocks with limited design freedom. 
                              The industry was fitting the player to the club, not the club to the player.
                          </p>
                          <p>
                              That frustration became an obsession. I contacted <strong className="text-white">Sandvik</strong>, 
                              knowing their prowess in industrial additive manufacturing. I didn't want 3D printing for the sake of novelty; 
                              I needed it because it was the <em>only</em> way to create the internal lattice structures required to solve my physics problem.
                          </p>
                          <p>
                              What started as a personal quest for one perfect putter became a calling. 
                              If I could build this for myself, I could build it for every golfer who demands better.
                          </p>
                      </div>

                      <div className="mt-10 pt-8 border-t border-white/10">
                          <div className="font-display text-2xl text-white italic">"Make Golf wasn't born in a boardroom. It was born on a putting green, out of pure necessity."</div>
                      </div>
                  </FadeIn>

              </div>
          </div>
      </section>

      {/* Founders / Team - UPDATED SECTION */}
      <section className="py-32 bg-[#F9F9FB] border-b border-black/5">
         <div className="container mx-auto px-6">
            <FadeIn>
               <div className="text-center mb-16">
                  <span className="text-brand-mink font-mono text-xs uppercase tracking-widest mb-2 block">The Leadership</span>
                  <h2 className="text-4xl md:text-5xl font-display text-[#1C1C1E]">Driven by Data.<br/>United by Golf.</h2>
               </div>
            </FadeIn>

            {/* Single Group Image */}
            <FadeIn>
                <div className="max-w-5xl mx-auto mb-20">
                    <div className="relative aspect-[16/9] md:aspect-[2.35/1] bg-[#E5E5E5] rounded-lg overflow-hidden border border-black/5 shadow-lg group">
                        <img 
                            src="https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/Team/omoss.png" 
                            alt="Make Golf Founders" 
                            className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-1000"
                        />
                        <div className="absolute bottom-6 left-6 z-10">
                            <div className="bg-white/90 backdrop-blur border border-black/10 px-4 py-2 rounded shadow-sm">
                                <span className="text-[#1C1C1E] font-display text-xs tracking-wider">EST. 2024 // STOCKHOLM</span>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>

            {/* Founder Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
               
               {/* Founder 1: Mårten */}
               <FadeIn delay={0.1}>
                  <div className="relative pl-6 border-l border-brand-mink">
                     <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl font-display text-[#1C1C1E]">Mårten Eker</h3>
                        <div className="bg-brand-mink/10 text-brand-mink px-2 py-1 text-[9px] font-bold font-mono rounded">
                           HCP +3.2
                        </div>
                     </div>
                     <p className="text-[#1C1C1E]/40 font-mono text-[10px] uppercase tracking-widest mb-4">CEO // Founder</p>
                     <p className="text-[#1C1C1E]/70 font-sans text-sm font-light leading-relaxed">
                        Engineer from KTH with 25 years of elite golf experience. Founded Make with the belief that complex biomechanics require elegant, data-driven solutions.
                     </p>
                  </div>
               </FadeIn>

               {/* Founder 2: Filip */}
               <FadeIn delay={0.2}>
                  <div className="relative pl-6 border-l border-[#1C1C1E]/10">
                     <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl font-display text-[#1C1C1E]">Filip Hector</h3>
                        <div className="bg-[#1C1C1E]/5 text-[#1C1C1E]/60 px-2 py-1 text-[9px] font-bold font-mono rounded">
                           HCP 6.2
                        </div>
                     </div>
                     <p className="text-[#1C1C1E]/40 font-mono text-[10px] uppercase tracking-widest mb-4">VP // CCO</p>
                     <p className="text-[#1C1C1E]/70 font-sans text-sm font-light leading-relaxed">
                        GTM & Operations expert. Specialized in scaling businesses and leveraging technology to bridge the gap between engineering and player experience.
                     </p>
                  </div>
               </FadeIn>

               {/* Founder 3: Erik */}
               <FadeIn delay={0.3}>
                  <div className="relative pl-6 border-l border-[#1C1C1E]/10">
                     <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl font-display text-[#1C1C1E]">Erik Paulsson</h3>
                        <div className="bg-[#1C1C1E]/5 text-[#1C1C1E]/60 px-2 py-1 text-[9px] font-bold font-mono rounded">
                           HCP 16.9
                        </div>
                     </div>
                     <p className="text-[#1C1C1E]/40 font-mono text-[10px] uppercase tracking-widest mb-4">Investor // GTM</p>
                     <p className="text-[#1C1C1E]/70 font-sans text-sm font-light leading-relaxed">
                        London-based investor and ambitious amateur. Brings strategic vision to Make's global expansion and commercial partnerships.
                     </p>
                  </div>
               </FadeIn>

            </div>
         </div>
      </section>

      {/* REVIEWS SECTION - Field Reports */}
      <section className="py-24 bg-[#151515] text-white border-t border-black/5 relative overflow-hidden">
         {/* Subtle Grid Background */}
         <div className="absolute inset-0 bg-grid opacity-5"></div>
         
         <div className="container mx-auto px-6 relative z-10">
            <FadeIn>
               <div className="text-center mb-20">
                   <div className="inline-flex items-center gap-2 border border-white/10 px-3 py-1 rounded-full bg-white/5 backdrop-blur mb-4">
                        <div className="w-1.5 h-1.5 bg-brand-mink rounded-full animate-pulse"></div>
                        <span className="text-brand-polar/80 font-mono text-[10px] uppercase tracking-widest">Pilot Program Data</span>
                   </div>
                   <h2 className="text-3xl md:text-5xl font-display text-white">Field Reports</h2>
               </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {REVIEWS.map((review, i) => (
                  <FadeIn key={review.id} delay={i * 0.1} className="h-full">
                     <div className="h-full bg-[#1C1C1E] border border-white/5 p-8 rounded-xl relative group hover:border-brand-mink/30 transition-all duration-500 flex flex-col">
                        {/* Decorative Corner */}
                        <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/10 rounded-tr-xl group-hover:border-brand-mink/50 transition-colors"></div>
                        
                        {/* Rating Dots */}
                        <div className="flex gap-1 mb-6">
                           {[...Array(review.rating)].map((_, idx) => (
                              <div key={idx} className="w-1 h-1 bg-brand-mink rounded-full"></div>
                           ))}
                        </div>

                        {/* Quote */}
                        <div className="mb-8 relative flex-grow">
                           <Quote className="absolute -top-2 -left-2 w-6 h-6 text-white/5 transform -scale-x-100" />
                           <p className="text-brand-polar/80 font-light leading-relaxed text-sm relative z-10 pl-2">
                              "{review.quote}"
                           </p>
                        </div>

                        {/* Spec Line */}
                        <div className="mb-6 pt-4 border-t border-white/5">
                            <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-wider text-white/30">
                                <span>Build Spec</span>
                                <span className="text-brand-mink">{review.spec}</span>
                            </div>
                        </div>

                        {/* Author */}
                        <div className="flex justify-between items-end">
                           <div>
                              <div className="text-white font-display text-lg mb-0.5">{review.author}</div>
                              <div className="text-xs text-white/50 font-mono">{review.role}</div>
                           </div>
                           <div className="text-[10px] font-mono text-white/20 uppercase text-right">
                              {review.location}
                           </div>
                        </div>
                     </div>
                  </FadeIn>
               ))}
            </div>
         </div>
      </section>

      {/* PRESS / MEDIA SECTION */}
      <section className="py-24 bg-[#E5E5E5] border-t border-black/5 text-[#1C1C1E]">
        <div className="container mx-auto px-6">
            <FadeIn>
                <div className="text-center mb-16">
                    <span className="text-brand-mink font-mono text-xs uppercase tracking-widest mb-2 block">Media Coverage</span>
                    <h2 className="text-3xl md:text-5xl font-display text-[#1C1C1E]">In The Press</h2>
                </div>
            </FadeIn>

            <div className="max-w-5xl mx-auto">
                 <FadeIn>
                    <a href="https://ditwin.se/kundcase/3d-printade-golfklubbor-som-blir-unika-fr-varje-spelare" target="_blank" rel="noopener noreferrer" className="group relative block bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                        <div className="grid grid-cols-1 md:grid-cols-12">
                            {/* Image Side */}
                            <div className="md:col-span-5 relative h-64 md:h-auto bg-[#1C1C1E] overflow-hidden">
                                <img 
                                    src="https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/Artiklar/green%20steel.png" 
                                    alt="Ditwin Case Study" 
                                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-brand-mink/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                            
                            {/* Content Side */}
                            <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center relative">
                                <div className="absolute top-8 right-8 text-[#1C1C1E]/20 group-hover:text-brand-mink transition-colors">
                                    <ExternalLink className="w-6 h-6" />
                                </div>
                                
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="bg-[#1C1C1E] text-white px-3 py-1.5 rounded text-xs font-bold font-display tracking-wide uppercase">
                                        Ditwin.se
                                    </div>
                                    <span className="text-[#1C1C1E]/40 font-mono text-xs uppercase tracking-widest">
                                        Case Study
                                    </span>
                                </div>
                                
                                <h3 className="text-2xl md:text-3xl font-display text-[#1C1C1E] mb-4 group-hover:text-brand-mink transition-colors leading-tight">
                                    "3D-printade golfklubbor som blir unika för varje spelare"
                                </h3>
                                
                                <p className="text-[#1C1C1E]/60 text-base leading-relaxed mb-8 font-light">
                                    Hur Make Golf utmanar traditionell tillverkning genom att använda Siemens NX och additiv teknik för att skapa komplexa geometrier som tidigare var omöjliga.
                                </p>
                                
                                <div className="inline-flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-widest text-[#1C1C1E] border-b border-[#1C1C1E]/20 pb-1 group-hover:border-brand-mink group-hover:text-brand-mink transition-all w-max">
                                    Read Full Story <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </a>
                 </FadeIn>
            </div>
        </div>
      </section>

      {/* ARTICLES / TRANSMISSIONS - Darker Footer Section for Contrast */}
      <section className="py-24 bg-[#1C1C1E] text-white border-t border-white/5">
         <div className="container mx-auto px-6">
            <FadeIn>
                <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-6">
                    <div>
                        <span className="text-brand-mink font-mono text-xs uppercase tracking-widest mb-2 block">Make Golf Journal</span>
                        <h2 className="text-3xl md:text-4xl font-display text-white">Insights & Articles</h2>
                        <p className="text-white/40 text-sm mt-2">Thoughts on design, engineering, and the future of the game.</p>
                    </div>
                    <Link to="/journal" className="hidden md:flex items-center gap-2 text-xs font-mono text-white/50 hover:text-white transition-colors">
                        VIEW ARCHIVE <ArrowRight className="w-3 h-3" />
                    </Link>
                </div>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {ARTICLES.slice(0, 3).map((article, index) => (
                    <FadeIn key={article.id} delay={index * 0.1}>
                        <Link to={`/journal/${article.slug}`} className="group cursor-pointer">
                            <div className="relative aspect-[16/10] bg-[#2C2C2E] overflow-hidden border border-white/5 mb-6 rounded-md">
                                <img 
                                    src={article.image} 
                                    alt={article.title}
                                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-black/80 backdrop-blur border border-white/10 px-2 py-1 text-[9px] font-mono text-brand-mink uppercase tracking-widest">
                                        {article.category}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 mb-2 text-[10px] font-mono text-white/30 uppercase tracking-widest">
                                <span>{article.date}</span>
                                <span className="w-3 h-px bg-white/10"></span>
                                <span>{article.readTime}</span>
                            </div>
                            <h3 className="text-xl font-display text-white mb-3 group-hover:text-brand-mink transition-colors">{article.title}</h3>
                            <p className="text-white/50 text-sm font-sans font-light leading-relaxed mb-4">
                                {article.excerpt}
                            </p>
                            <span className="text-white/40 text-xs font-mono group-hover:text-white transition-colors inline-flex items-center gap-2">
                                Read Article <ArrowRight className="w-3 h-3" />
                            </span>
                        </Link>
                    </FadeIn>
                ))}
            </div>
         </div>
      </section>

    </div>
  );
};

export default About;
