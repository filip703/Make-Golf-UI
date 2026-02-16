
import React, { useEffect, useState, useRef } from 'react';

interface ScrambleTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

const ScrambleText: React.FC<ScrambleTextProps> = ({ 
  text, 
  className = "", 
  speed = 50,
  delay = 0 
}) => {
  const [displayText, setDisplayText] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let interval: any;
    let timeout: any;
    
    const startAnimation = () => {
      setIsAnimating(true);
      let iteration = 0;
      
      clearInterval(interval);
      
      interval = setInterval(() => {
        setDisplayText(prev => 
          text
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(interval);
          setIsAnimating(false);
        }

        iteration += 1 / 3;
      }, speed);
    };

    // Intersection Observer to start when in view
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
            timeout = setTimeout(() => {
                startAnimation();
            }, delay);
            observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
        observer.observe(elementRef.current);
    }

    return () => {
        clearInterval(interval);
        clearTimeout(timeout);
        observer.disconnect();
    };
  }, [text, speed, delay]);

  return (
    <span ref={elementRef} className={className}>
      {displayText || text.split('').map(() => CHARS[Math.floor(Math.random() * CHARS.length)]).join('')}
    </span>
  );
};

export default ScrambleText;
