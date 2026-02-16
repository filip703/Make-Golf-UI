
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import FadeIn from '../components/FadeIn';
import { AlertTriangle, Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black flex items-center justify-center text-white p-6 relative overflow-hidden">
      {/* Background Noise/Grid */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      
      <div className="max-w-lg w-full text-center relative z-10">
        <FadeIn>
            <div className="w-16 h-16 bg-brand-mink/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-brand-mink/20">
                <AlertTriangle className="w-8 h-8 text-brand-mink" />
            </div>
            
            <div className="font-mono text-brand-mink text-xs uppercase tracking-[0.2em] mb-4">
                Error Code: 404
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
                Signal Lost.
            </h1>
            
            <p className="text-brand-polar/50 text-lg mb-10 leading-relaxed">
                The coordinates you are looking for do not exist in our database. 
                The page may have been moved or the URL is incorrect.
            </p>
            
            <Link to="/">
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:border-brand-mink hover:text-brand-mink">
                    <Home className="w-4 h-4 mr-2" /> Return to Base
                </Button>
            </Link>
        </FadeIn>
      </div>

      {/* Decorative Technical UI */}
      <div className="absolute bottom-10 left-10 text-[10px] font-mono text-white/20 hidden md:block">
         SYSTEM_STATUS: OFF_TRACK<br/>
         REL_COORDS: NULL
      </div>
    </div>
  );
};

export default NotFound;
