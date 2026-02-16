
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArticleService } from '../services/articleService';
import { Article } from '../types';
import FadeIn from '../components/FadeIn';
import Button from '../components/Button';
import { ArrowLeft, Clock, Share2, Calendar, Loader2 } from 'lucide-react';

const ArticlePost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const [article, setArticle] = useState<Article | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
        if (!slug) return;
        setLoading(true);
        try {
            // 1. Fetch main article
            const data = await ArticleService.getArticleBySlug(slug);
            if (!data) {
                // Handle 404 (optional: redirect)
                // navigate('/journal');
                setArticle(null);
            } else {
                setArticle(data);
                
                // 2. Fetch related (just grab all and filter for now)
                const all = await ArticleService.getAllArticles();
                setRelatedArticles(all.filter(a => a.id !== data.id));
            }
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    loadData();
    // Scroll to top when slug changes
    window.scrollTo(0,0);
  }, [slug, navigate]);


  if (loading) {
     return (
        <div className="min-h-screen bg-brand-black pt-32 flex justify-center items-start">
            <Loader2 className="w-8 h-8 text-brand-mink animate-spin opacity-50" />
        </div>
     );
  }

  if (!article) return (
    <div className="min-h-screen bg-brand-black pt-40 text-center text-white container mx-auto px-6">
        <h2 className="text-4xl font-display mb-4">Transmission Lost.</h2>
        <p className="text-white/50 mb-8">This article could not be retrieved from the archives.</p>
        <Link to="/journal">
            <Button variant="outline">Return to Journal</Button>
        </Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-brand-black text-brand-polar pb-32">
       
       {/* Hero Image */}
       <div className="relative h-[60vh] w-full overflow-hidden">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent"></div>
          
          <div className="absolute top-32 left-6 z-20">
              <Button 
                onClick={() => navigate('/journal')}
                variant="outline" 
                size="sm" 
                className="bg-black/40 border-white/10 text-white backdrop-blur-md rounded-full pl-4 hover:bg-brand-mink hover:border-brand-mink transition-all"
              >
                 <ArrowLeft className="w-3 h-3 mr-2" /> Back to Journal
              </Button>
          </div>
       </div>

       {/* Article Content Container */}
       <article className="container mx-auto px-6 relative z-10 -mt-32">
          <FadeIn>
             <div className="max-w-3xl mx-auto">
                
                {/* Header Info */}
                <div className="mb-12 text-center">
                    <div className="inline-flex items-center gap-3 mb-6 bg-brand-mink/10 border border-brand-mink/20 px-4 py-1.5 rounded-full">
                        <span className="text-brand-mink font-bold font-mono text-[10px] uppercase tracking-widest">
                            {article.category}
                        </span>
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl font-display font-medium text-white mb-8 leading-[1.1]">
                        {article.title}
                    </h1>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-xs font-mono text-brand-polar/60 border-y border-white/5 py-6">
                        <div className="flex items-center gap-3">
                            <img src={article.author.image} alt={article.author.name} className="w-8 h-8 rounded-full object-cover border border-white/10" />
                            <div className="text-left">
                                <span className="block text-white">{article.author.name}</span>
                                <span className="block text-[9px] uppercase tracking-wider">{article.author.role}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                             <Calendar className="w-3 h-3" />
                             {article.date}
                        </div>
                        <div className="flex items-center gap-2">
                             <Clock className="w-3 h-3" />
                             {article.readTime} Read
                        </div>
                    </div>
                </div>

                {/* Main Text Content */}
                <div className="prose prose-invert prose-lg mx-auto">
                    <p className="lead text-xl md:text-2xl text-white font-light leading-relaxed mb-10 first-letter:text-5xl first-letter:font-display first-letter:font-bold first-letter:text-brand-mink first-letter:float-left first-letter:mr-3">
                        {article.excerpt}
                    </p>

                    {article.content.map((block, index) => {
                        switch (block.type) {
                            case 'h2':
                                return <h2 key={index} className="text-3xl font-display text-white mt-12 mb-6 border-b border-white/10 pb-4">{block.content}</h2>;
                            case 'quote':
                                return (
                                    <blockquote key={index} className="border-l-2 border-brand-mink pl-6 py-2 my-10 italic text-xl text-white/90 bg-white/5 p-6 rounded-r-lg">
                                        "{block.content}"
                                    </blockquote>
                                );
                            case 'paragraph':
                            default:
                                return <p key={index} className="text-brand-polar/70 font-sans font-light leading-loose mb-6 text-lg">{block.content}</p>;
                        }
                    })}
                </div>

                {/* Footer / Share */}
                <div className="mt-20 pt-10 border-t border-white/10 flex justify-between items-center">
                    <span className="text-xs font-mono text-white/40 uppercase">Share this transmission</span>
                    <div className="flex gap-4">
                        <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-brand-mink hover:border-brand-mink transition-colors">
                            <Share2 className="w-4 h-4" />
                        </button>
                    </div>
                </div>

             </div>
          </FadeIn>
       </article>

       {/* Related (Next) Articles */}
       <section className="container mx-auto px-6 mt-32 border-t border-white/5 pt-20">
           <FadeIn>
              <h3 className="text-2xl font-display text-white mb-10">Read Next</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedArticles.slice(0, 3).map(related => (
                      <Link to={`/journal/${related.slug}`} key={related.id} className="group block">
                          <div className="aspect-video bg-[#242424] rounded-lg overflow-hidden mb-4 border border-white/5">
                              <img src={related.image} alt={related.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                          </div>
                          <div className="text-[10px] font-mono text-brand-mink mb-2 uppercase">{related.category}</div>
                          <h4 className="text-lg font-display text-white group-hover:underline decoration-brand-mink underline-offset-4">{related.title}</h4>
                      </Link>
                  ))}
              </div>
           </FadeIn>
       </section>

    </div>
  );
};

export default ArticlePost;
