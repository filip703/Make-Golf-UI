
import React from 'react';

interface LogoProps {
  color?: "white" | "black"; 
  variant?: "full" | "symbol"; 
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ color = "white", variant = "full", className = "" }) => {
  
  // Choose logo based on color prop
  // Note: Ensure both these paths are valid or map to the same if only one exists for now.
  // Assuming the main logo provided earlier works for white backgrounds (dark text/logo) if it has transparency, 
  // or use CSS filter to invert if needed. 
  // For now, using the same logo but applying brightness filter if 'black' is requested and logo is white-only.
  // Ideally, upload a black version of the logo.
  
  const logoPath = "https://cdn.prod.website-files.com/683dc60f79209a98db49aa51/685dcd16cb6d7e2568b6d6aa_MG_Polar-Mink.png";

  return (
    <div className={`${className} flex items-center justify-start`}>
      <img 
        src={logoPath} 
        alt="MAKE GOLF" 
        className={`w-full h-full object-contain object-left ${color === 'black' ? 'brightness-0 invert-0' : ''}`}
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
             parent.style.color = color === 'black' ? '#1C1C1E' : '#FFFFFF';
             parent.style.whiteSpace = 'nowrap';
          }
        }}
      />
    </div>
  );
};

export default Logo;
