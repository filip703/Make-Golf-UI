
import React from 'react';

interface LogoProps {
  color?: "white" | "black"; 
  variant?: "full" | "symbol"; 
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ color = "white", variant = "full", className = "" }) => {
  
  // These paths correspond to:
  // public/assets/logos/make-wordmark-white.png
  // public/assets/logos/make-symbol-white.png
  const logoPath = variant === 'symbol' 
    ? `/assets/logos/make-symbol-${color}.png`
    : `/assets/logos/make-wordmark-${color}.png`;

  return (
    <div className={`${className} flex items-center`}>
      <img 
        src={logoPath} 
        alt="MAKE GOLF" 
        className="h-full w-auto object-contain"
        onError={(e) => {
          const img = e.currentTarget;
          const parent = img.parentElement;

          if (parent) {
             // Stop further error events
             img.onerror = null;
             
             // Hide the image
             img.style.display = 'none';

             // Set fallback text - this removes the img from the DOM, so we must use the 'parent' variable we saved earlier
             parent.innerText = variant === 'symbol' ? 'M' : 'MAKE';
             
             // Apply styles to the parent container
             parent.style.fontFamily = '"Space Grotesk", sans-serif';
             parent.style.fontWeight = '700';
             parent.style.fontSize = variant === 'symbol' ? '24px' : '20px';
             parent.style.letterSpacing = '0.05em';
             parent.style.color = color === 'white' ? '#FFFFFF' : '#191919';
          }
        }}
      />
    </div>
  );
};

export default Logo;
