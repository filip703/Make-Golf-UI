
import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import { ArrowRight, BookOpen, Clock, Tag } from 'lucide-react';
import { ARTICLES } from '../constants';

const Journal: React.FC = () => {
  const featuredArticle = ARTICLES[0];
  const remainingArticles = ARTICLES.slice(1);

  return (
    <div className="min-h-screen bg-brand-black pt-24 pb-24 text-white font-sans">
      
      {/* Header */}
      <section className="container mx-auto px-6 mb-20">
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-1.5 bg-brand-mink rounded-full"></div>
            <span className="text-brand-polar/60 font-mono text-xs uppercase tracking-widest">The Transmission</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-display font-medium text-white mb-6">
            Journal.
          </h1>
          <p className="text-xl text-brand-polar/60 font-light max-w-2xl">
            Deep dives into biomechanics, additive manufacturing, and the future of the game.
          </p>
        </FadeIn>
      </section>

      {/* Featured Article */}
      <section className="container mx-auto px-6 mb-24">
        <FadeIn delay={0.1}>
            <Link to={`/journal/${featuredArticle.slug}`} className="group relative block w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-xl border border-white/10">
                <img 
                    src={featuredArticle.image} 
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full md:max-w-3xl">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="bg-brand-mink text-white px-3 py-1 text-[10px] font-bold font-mono uppercase tracking-widest rounded-sm">
                            {featuredArticle.category}
                        </span>
                        <span className="text-white/60 text-xs font-mono uppercase flex items-center gap-2">
                             <Clock className="w-3 h-3" /> {featuredArticle.readTime}
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-display text-white mb-4 leading-tight group-hover:text-brand-mink transition-colors">
                        {featuredArticle.title}
                    </h2>
                    <p className="text-lg text-white/70 font-light line-clamp-2 md:line-clamp-none mb-6">
                        {featuredArticle.excerpt}
                    </p>
                    <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white border-b border-brand-mink pb-0.5">
                        Read Full Story <ArrowRight className="w-3 h-3" />
                    </div>
                </div>
            </Link>
        </FadeIn>
      </section>

      {/* Grid */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
            {remainingArticles.map((article, index) => (
                <FadeIn key={article.id} delay={0.2 + (index * 0.1)}>
                    <Link to={`/journal/${article.slug}`} className="group flex flex-col h-full">
                        <div className="aspect-[3/2] overflow-hidden rounded-lg border border-white/10 mb-6 relative">
                            <img 
                                src={article.image} 
                                alt={article.title}
                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                            />
                             <div className="absolute top-4 left-4">
                                <span className="bg-black/60 backdrop-blur border border-white/10 px-2 py-1 text-[9px] font-mono text-white/80 uppercase tracking-widest">
                                    {article.category}
                                </span>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-3 mb-3 text-[10px] font-mono text-white/40 uppercase tracking-widest">
                            <span>{article.date}</span>
                            <span className="w-1 h-1 rounded-full bg-brand-mink"></span>
                            <span>{article.readTime}</span>
                        </div>

                        <h3 className="text-2xl font-display text-white mb-3 group-hover:text-brand-mink transition-colors">
                            {article.title}
                        </h3>
                        <p className="text-sm text-brand-polar/50 font-light leading-relaxed line-clamp-3 mb-4 flex-grow">
                            {article.excerpt}
                        </p>
                         <div className="text-white/40 text-xs font-mono group-hover:text-white transition-colors inline-flex items-center gap-2">
                            Read Article <ArrowRight className="w-3 h-3" />
                        </div>
                    </Link>
                </FadeIn>
            ))}
        </div>
      </section>

    </div>
  );
};

export default Journal;
