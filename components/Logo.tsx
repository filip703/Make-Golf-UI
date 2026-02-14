import React from 'react';

interface LogoProps {
  color?: "white" | "color"; // Prop kept for compatibility, but the image asset dictates colors.
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  // Official Make Golf Brand Asset
  // MG_Polar-Mink.png
  const LOGO_URL = "https://cdn.prod.website-files.com/683dc60f79209a98db49aa51/685dcd16cb6d7e2568b6d6aa_MG_Polar-Mink.png";

  return (
    <img 
      src={LOGO_URL} 
      alt="MAKE GOLF" 
      className={`h-8 w-auto object-contain ${className}`}
    />
  );
};

export default Logo;