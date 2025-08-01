import React, { useEffect, useRef, useState } from 'react';
import './ScrambledText.css';

interface ScrambledTextProps {
  text: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  scrambleSpeed?: number;
  scrambleChars?: string;
  triggerOnHover?: boolean;
  className?: string;
}

export const ScrambledText: React.FC<ScrambledTextProps> = ({
  text,
  fontSize = 'clamp(14px, 4vw, 32px)',
  fontWeight = '400',
  color = '#fff',
  scrambleSpeed = 50,
  scrambleChars = '!@#$%^&*()_+-=[]{}|;:,.<>?',
  triggerOnHover = true,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrambling, setIsScrambling] = useState(false);

  const scrambleText = () => {
    if (isScrambling) return;
    setIsScrambling(true);

    const container = containerRef.current;
    if (!container) return;

    const spans = container.querySelectorAll('.char');
    const originalText = text;

    spans.forEach((span, index) => {
      let iterations = 0;
      const maxIterations = Math.floor(scrambleSpeed / 10);
      
      const interval = setInterval(() => {
        span.textContent = scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
        iterations++;
        
        if (iterations > maxIterations) {
          clearInterval(interval);
          span.textContent = originalText[index];
          if (index === spans.length - 1) {
            setIsScrambling(false);
          }
        }
      }, scrambleSpeed);
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const chars = text.split('').map(char => `<span class="char">${char}</span>`).join('');
    container.innerHTML = chars;
  }, [text]);

  const handleClick = () => {
    if (triggerOnHover) {
      scrambleText();
    }
  };

  const style = {
    fontSize,
    fontWeight,
    color,
    cursor: triggerOnHover ? 'pointer' : 'default'
  } as React.CSSProperties;

  return (
    <div 
      ref={containerRef}
      className={`text-block ${className}`}
      style={style}
      onClick={handleClick}
    />
  );
};