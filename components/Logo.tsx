import React from 'react';

interface LogoProps {
  color?: "white" | "color"; // Prop kept for compatibility
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  // Official Make Golf Brand Asset
  // Using the CDN link provided
  const LOGO_URL = "https://cdn.prod.website-files.com/683dc60f79209a98db49aa51/685dcd16cb6d7e2568b6d6aa_MG_Polar-Mink.png";

  return (
    <div className={`relative flex items-center ${className}`}>
      <img 
        src={LOGO_URL} 
        alt="MAKE GOLF" 
        className="h-6 md:h-8 w-auto object-contain transition-all duration-300"
        style={{ maxWidth: '180px' }}
      />
    </div>
  );
};

export default Logo;