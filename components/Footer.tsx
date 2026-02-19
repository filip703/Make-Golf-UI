
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Instagram, Linkedin, Youtube } from 'lucide-react';
import LegalModals from './LegalModals';

const Footer: React.FC = () => {
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'terms' | null>(null);

  return (
    <>
    <footer className="bg-brand-black border-t border-white/5 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          
          {/* Column 1: Brand & Contact */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="mb-8 block w-24 md:w-32 h-auto">
              <Logo />
            </Link>
            <p className="text-brand-polar/40 text-xs font-mono leading-relaxed max-w-xs uppercase mt-8 mb-6">
              We don't sell promises.<br/>
              We build answers.
            </p>
            
            {/* Contact Details */}
            <div className="flex flex-col space-y-2">
                <div className="text-brand-polar/60 text-xs font-mono uppercase tracking-wide">
                    Stockholm, Sweden
                </div>
                <a 
                    href="mailto:team@make.golf" 
                    className="text-brand-polar/60 hover:text-brand-mink text-xs font-mono transition-colors block"
                >
                    team@make.golf
                </a>
            </div>
          </div>
          
          {/* Column 2: Product */}
          <div>
            <h4 className="text-brand-polar font-display font-bold mb-6 uppercase tracking-wider">Product</h4>
            <ul className="space-y-4 font-mono text-sm">
              <li><Link to="/technology" className="text-brand-polar/40 hover:text-brand-mink transition-colors">The Collection</Link></li>
              <li><Link to="/engine" className="text-brand-polar/40 hover:text-brand-mink transition-colors">AI Fitting</Link></li>
              <li><Link to="/configurator" className="text-brand-polar/40 hover:text-brand-mink transition-colors">Configurator</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-brand-polar font-display font-bold mb-6 uppercase tracking-wider">Company</h4>
            <ul className="space-y-4 font-mono text-sm">
              <li><Link to="/technology" className="text-brand-polar/40 hover:text-brand-mink transition-colors">Our Tech</Link></li>
              <li><Link to="/fitters" className="text-brand-polar/40 hover:text-brand-mink transition-colors">For Fitters</Link></li>
              <li><Link to="/about" className="text-brand-polar/40 hover:text-brand-mink transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Column 4: CTA */}
          <div>
            <h4 className="text-brand-polar font-display font-bold mb-6 uppercase tracking-wider">No Excuses</h4>
            <div className="flex flex-col space-y-4">
              <p className="text-xs text-brand-polar/40 font-mono mb-2">
                Limited beta slots available for the 2026 season.
              </p>
              <a 
                href="https://frontend-seven-iota-56.vercel.app/signup"
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
        
        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <p className="text-brand-polar/20 text-xs font-mono uppercase">
                &copy; {new Date().getFullYear()} Make Golf AB.
              </p>
              {/* Legal Links (Triggers Modals) */}
              <div className="flex gap-6">
                  <button 
                      onClick={() => setActiveLegalModal('privacy')}
                      className="text-brand-polar/20 hover:text-brand-polar/60 text-[10px] font-mono uppercase transition-colors text-left"
                  >
                      Privacy Policy
                  </button>
                  <button 
                      onClick={() => setActiveLegalModal('terms')}
                      className="text-brand-polar/20 hover:text-brand-polar/60 text-[10px] font-mono uppercase transition-colors text-left"
                  >
                      Terms of Service
                  </button>
              </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6">
             <a href="https://www.instagram.com/make_golf" target="_blank" rel="noopener noreferrer" className="text-brand-polar/40 hover:text-brand-mink transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
             </a>
             <a href="https://www.linkedin.com/company/make-golf" target="_blank" rel="noopener noreferrer" className="text-brand-polar/40 hover:text-brand-mink transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
             </a>
             <a href="https://www.youtube.com/@MakeGolf-t4n" target="_blank" rel="noopener noreferrer" className="text-brand-polar/40 hover:text-brand-mink transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
             </a>
          </div>
        </div>
      </div>
    </footer>

    {/* Render the Modal Component */}
    <LegalModals 
        type={activeLegalModal} 
        onClose={() => setActiveLegalModal(null)} 
    />
    </>
  );
};

export default Footer;
