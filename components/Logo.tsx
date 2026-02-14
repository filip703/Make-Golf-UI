
import React from 'react';

interface LogoProps {
  color?: "white" | "color"; 
  variant?: "full" | "symbol"; // Added variant prop for future use
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ color = "color", variant = "full", className = "" }) => {
  // Official Make Golf Brand Asset (Current CDN)
  const CDN_LOGO_URL = "https://cdn.prod.website-files.com/683dc60f79209a98db49aa51/685dcd16cb6d7e2568b6d6aa_MG_Polar-Mink.png";

  // TODO: Once you upload files to public/images/logos/, uncomment and adjust these paths:
  // const LOCAL_FULL_WHITE = "/images/logos/logo-full-white.png";
  // const LOCAL_SYMBOL_MINK = "/images/logos/symbol-mink.png";
  
  // Logic to switch logos (Prepared for future)
  // const src = variant === 'symbol' ? LOCAL_SYMBOL_MINK : (color === 'white' ? LOCAL_FULL_WHITE : CDN_LOGO_URL);

  return (
    <div className={`relative flex items-center ${className}`}>
      <img 
        src={CDN_LOGO_URL} 
        alt="MAKE GOLF" 
        className={`h-6 md:h-8 w-auto object-contain transition-all duration-300 ${variant === 'symbol' ? 'max-w-[40px]' : 'max-w-[180px]'}`}
      />
    </div>
  );
};

export default Logo;
