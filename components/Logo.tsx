
import React, { useState } from 'react';

interface LogoProps {
  color?: "white" | "black"; 
  variant?: "full" | "symbol"; 
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ color = "white", variant = "full", className = "" }) => {
  const [hasError, setHasError] = useState(false);
  
  const logoPath = "https://cdn.prod.website-files.com/683dc60f79209a98db49aa51/685dcd16cb6d7e2568b6d6aa_MG_Polar-Mink.png";

  // Fallback text styles
  const fallbackStyle: React.CSSProperties = {
    fontFamily: '"Space Grotesk", sans-serif',
    fontWeight: 700,
    fontSize: variant === 'symbol' ? '24px' : '20px',
    letterSpacing: '0.05em',
    color: color === 'black' ? '#1C1C1E' : '#FFFFFF',
    whiteSpace: 'nowrap',
  };

  if (hasError) {
    return (
      <div className={`${className} flex items-center justify-start`} style={fallbackStyle}>
        {variant === 'symbol' ? 'M' : 'MAKE'}
      </div>
    );
  }

  return (
    <div className={`${className} flex items-center justify-start`}>
      <img 
        src={logoPath} 
        alt="MAKE GOLF" 
        className={`w-full h-full object-contain object-left ${color === 'black' ? 'brightness-0 invert-0' : ''}`}
        onError={() => setHasError(true)}
      />
    </div>
  );
};

export default Logo;
