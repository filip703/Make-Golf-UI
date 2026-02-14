
import React from 'react';

interface LogoProps {
  color?: "white" | "color" | "black"; 
  variant?: "full" | "symbol"; 
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ color = "color", variant = "full", className = "" }) => {
  // Local Asset Paths (Assumed based on provided images and instructions)
  const LOGO_FULL_WHITE = "/images/logos/wordmark-white.png";
  const LOGO_FULL_BLACK = "/images/logos/wordmark-black.png";
  const LOGO_SYMBOL_RED = "/images/logos/symbol-red.png";
  const LOGO_SYMBOL_WHITE = "/images/logos/symbol-white.png";

  // Determine source based on props
  let src = LOGO_FULL_WHITE; // Fallback default

  if (variant === 'symbol') {
    // Use the Icon (M)
    src = color === 'white' ? LOGO_SYMBOL_WHITE : LOGO_SYMBOL_RED;
  } else {
    // Use the Wordmark (MAKE)
    if (color === 'white') {
      src = LOGO_FULL_WHITE;
    } else {
      // 'color' or 'black' -> Use dark logo for light backgrounds
      src = LOGO_FULL_BLACK;
    }
  }

  return (
    <div className={`relative flex items-center ${className}`}>
      <img 
        src={src} 
        alt="MAKE GOLF" 
        className={`h-6 md:h-8 w-auto object-contain transition-all duration-300 ${variant === 'symbol' ? 'max-w-[40px]' : 'max-w-[180px]'}`}
      />
    </div>
  );
};

export default Logo;
