
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black border-t border-white/5 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            {/* Adjusted to width-based sizing for better alignment */}
            <Link to="/" className="mb-8 block w-24 md:w-32 h-auto">
              <Logo />
            </Link>
            <p className="text-brand-polar/40 text-xs font-mono leading-relaxed max-w-xs uppercase mt-8">
              We don't sell promises.<br/>
              We build answers.<br/>
              Stockholm, Sweden.
            </p>
          </div>
          
          <div>
            <h4 className="text-brand-polar font-display font-bold mb-6 uppercase tracking-wider">Product</h4>
            <ul className="space-y-4 font-mono text-sm">
              <li><Link to="/technology" className="text-brand-polar/40 hover:text-brand-mink transition-colors">The Collection</Link></li>
              <li><Link to="/engine" className="text-brand-polar/40 hover:text-brand-mink transition-colors">AI Fitting</Link></li>
              <li><Link to="/configurator" className="text-brand-polar/40 hover:text-brand-mink transition-colors">Configurator</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-polar font-display font-bold mb-6 uppercase tracking-wider">Company</h4>
            <ul className="space-y-4 font-mono text-sm">
              <li><Link to="/technology" className="text-brand-polar/40 hover:text-brand-mink transition-colors">Our Tech</Link></li>
              <li><Link to="/fitters" className="text-brand-polar/40 hover:text-brand-mink transition-colors">For Fitters</Link></li>
              <li><Link to="/fitters" className="text-brand-polar/40 hover:text-brand-mink transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-polar font-display font-bold mb-6 uppercase tracking-wider">No Excuses</h4>
            <div className="flex flex-col space-y-4">
              <p className="text-xs text-brand-polar/40 font-mono mb-2">
                Limited beta slots available for the 2026 season.
              </p>
              <a 
                href="https://maker.make.golf/embed/pages/29414631-a517-47c0-aa0f-9eb48335e20f/blocks/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="bg-white/5 hover:bg-brand-mink border border-white/10 hover:border-brand-mink text-brand-polar hover:text-white px-6 py-3 text-xs font-bold font-mono transition-all w-full text-center uppercase tracking-widest">
                  Join Beta &rarr;
                </button>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-brand-polar/20 text-xs font-mono uppercase">
            &copy; {new Date().getFullYear()} Make Golf AB. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             {/* Social placeholders */}
             <div className="w-4 h-4 bg-brand-polar/20 hover:bg-brand-mink transition-colors"></div>
             <div className="w-4 h-4 bg-brand-polar/20 hover:bg-brand-mink transition-colors"></div>
             <div className="w-4 h-4 bg-brand-polar/20 hover:bg-brand-mink transition-colors"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
