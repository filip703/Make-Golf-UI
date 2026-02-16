
import React from 'react';

interface LogoProps {
  color?: "white" | "black"; 
  variant?: "full" | "symbol"; 
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ color = "white", variant = "full", className = "" }) => {
  
  // Always use the high-quality Polar-Mink logo for the main brand mark.
  const logoPath = "https://cdn.prod.website-files.com/683dc60f79209a98db49aa51/685dcd16cb6d7e2568b6d6aa_MG_Polar-Mink.png";

  return (
    <div className={`${className} flex items-center justify-start`}>
      <img 
        src={logoPath} 
        alt="MAKE GOLF" 
        className="w-full h-full object-contain object-left"
        onError={(e) => {
          const img = e.currentTarget;
          const parent = img.parentElement;

          if (parent) {
             img.onerror = null;
             img.style.display = 'none';
             parent.innerText = variant === 'symbol' ? 'M' : 'MAKE';
             
             parent.style.fontFamily = '"Space Grotesk", sans-serif';
             parent.style.fontWeight = '700';
             parent.style.fontSize = variant === 'symbol' ? '24px' : '20px';
             parent.style.letterSpacing = '0.05em';
             parent.style.color = '#FFFFFF';
             parent.style.whiteSpace = 'nowrap';
          }
        }}
      />
    </div>
  );
};

export default Logo;
