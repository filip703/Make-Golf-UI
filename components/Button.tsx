import React from 'react';
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
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none tracking-wide font-display uppercase";
  
  const variants = {
    primary: "bg-brand-mink text-brand-polar hover:bg-red-600 border border-transparent",
    secondary: "bg-brand-polar text-brand-black hover:bg-gray-200",
    outline: "border border-brand-polar/30 text-brand-polar hover:border-brand-mink hover:text-brand-mink bg-transparent backdrop-blur-sm",
    ghost: "text-brand-polar/70 hover:text-brand-mink hover:bg-white/5",
  };

  const sizes = {
    sm: "text-xs px-4 py-2",
    md: "text-sm px-6 py-3",
    lg: "text-base px-10 py-5 tracking-widest",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;