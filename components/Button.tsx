
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current!.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.2; // Magnetic pull strength
    const y = (clientY - (top + height / 2)) * 0.2;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = "relative inline-flex items-center justify-center font-bold transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none tracking-wide font-display uppercase group overflow-hidden";
  
  const variants = {
    primary: "bg-brand-mink text-brand-polar hover:bg-white hover:text-black border border-transparent shadow-[0_0_20px_rgba(255,34,76,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]",
    secondary: "bg-brand-polar text-brand-black hover:bg-white border border-transparent",
    outline: "border border-brand-polar/30 text-brand-polar hover:border-brand-mink hover:text-brand-mink bg-transparent backdrop-blur-sm",
    ghost: "text-brand-polar/70 hover:text-brand-mink hover:bg-white/5",
  };

  const sizes = {
    sm: "text-xs px-5 py-2", // Increased padding for brackets
    md: "text-sm px-8 py-3",
    lg: "text-base px-12 py-5 tracking-widest",
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props as any}
    >
      {/* Brackets Animation - Decorative only, hidden from screen readers */}
      <span 
        aria-hidden="true" 
        className="absolute left-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 font-mono text-brand-mink font-normal hidden sm:inline-block"
      >
        [
      </span>
      
      <span className="relative z-10 flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
        {children}
      </span>

      <span 
        aria-hidden="true" 
        className="absolute right-3 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 font-mono text-brand-mink font-normal hidden sm:inline-block"
      >
        ]
      </span>
    </motion.button>
  );
};

export default Button;
