
import React from 'react';

interface LogoProps {
  color?: "white" | "black" | "red" | "color"; 
  variant?: "full" | "symbol"; 
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ color = "white", variant = "full", className = "" }) => {
  // EXAKTA SÖKVÄGAR FÖR DINA BILDER
  // Se till att du sparar dina filer exakt så här i public/images/logos/
  const ASSETS = {
    full: {
      white: "/images/logos/wordmark-white.png", // Vit text
      black: "/images/logos/wordmark-black.png", // Svart text
      red:   "/images/logos/wordmark-red.png",   // Röd text (om du har den, annars ändra till white här med)
    },
    symbol: {
      white: "/images/logos/symbol-white.png", // Vit ikon
      black: "/images/logos/symbol-black.png", // Svart ikon 
      red:   "/images/logos/symbol-red.png",   // Röd ikon (Favicon-stilen)
    }
  };

  let src = ASSETS.full.white; 

  // Normalisera färgval (color="color" hanteras som svart eller rött beroende på kontext i min kod, men här är en enkel mappning)
  const normalizedColor = color === 'color' ? 'black' : color;

  if (variant === 'symbol') {
    switch (normalizedColor) {
      case 'red':   src = ASSETS.symbol.red; break;
      case 'black': src = ASSETS.symbol.black; break;
      case 'white': 
      default:      src = ASSETS.symbol.white; break;
    }
  } else {
    // Full Wordmark logic
    switch (normalizedColor) {
      case 'black': src = ASSETS.full.black; break;
      case 'red':   src = ASSETS.full.red; break;
      case 'white': 
      default:      src = ASSETS.full.white; break;
    }
  }

  return (
    <div className={`relative flex items-center ${className}`}>
      <img 
        src={src} 
        alt="MAKE GOLF" 
        className={`h-auto object-contain transition-all duration-300 ${variant === 'symbol' ? 'max-h-10' : 'max-h-7 md:max-h-8'}`}
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement?.classList.add('fallback-text');
        }}
      />
      {/* Fallback om bild saknas */}
      <span className="hidden fallback-text:block text-xs font-bold font-mono text-red-500 uppercase tracking-widest">
        MAKE GOLF
      </span>
    </div>
  );
};

export default Logo;
