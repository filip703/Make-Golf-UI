import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black border-t border-white/5 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="mb-8 block">
              <Logo color="white" />
            </Link>
            <p className="text-brand-polar/40 text-xs font-mono leading-relaxed max-w-xs uppercase">
              We don't sell promises.<br/>
              We build answers.<br/>
              Stockholm, Sweden.
            </p>
          </div>
          
          <div>
            <h4 className="text-brand-polar font-display font-bold mb-6 uppercase tracking-wider">Product</h4>
            <ul className="space-y-4 font-mono text-sm">
              <li><Link to="/clubs" className="text-brand-polar/40 hover:text-brand-mink transition-colors">The Collection</Link></li>
              <li><Link to="/ai-fitting" className="text-brand-polar/40 hover:text-brand-mink transition-colors">AI Fitting</Link></li>
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
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-white/5 border border-white/10 px-4 py-3 text-xs font-mono text-brand-polar focus:outline-none focus:border-brand-mink transition-colors rounded-none placeholder:text-brand-polar/20"
              />
              <button className="text-brand-mink text-xs font-bold font-mono hover:text-white transition-colors text-left uppercase">
                Join the Waitlist &rarr;
              </button>
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