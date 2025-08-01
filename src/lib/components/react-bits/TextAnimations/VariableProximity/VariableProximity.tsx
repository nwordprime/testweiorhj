import React, { useEffect, useRef } from 'react';
import './VariableProximity.css';

interface VariableProximityProps {
  text: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  maxDistance?: number;
  className?: string;
}

export const VariableProximity: React.FC<VariableProximityProps> = ({
  text,
  fontSize = '3rem',
  fontWeight = '400',
  color = '#fff',
  maxDistance = 100,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const chars = text.split('').map(char => `<span class="variable-char">${char}</span>`).join('');
    container.innerHTML = chars;

    const handleMouseMove = (e: MouseEvent) => {
      const charElements = container.querySelectorAll('.variable-char') as NodeListOf<HTMLElement>;
      
      charElements.forEach(char => {
        const rect = char.getBoundingClientRect();
        const charX = rect.left + rect.width / 2;
        const charY = rect.top + rect.height / 2;
        const distance = Math.sqrt(Math.pow(e.clientX - charX, 2) + Math.pow(e.clientY - charY, 2));
        const weight = Math.max(100, 900 - (distance / maxDistance) * 800);
        char.style.setProperty('--font-weight', weight.toString());
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [text, maxDistance]);

  const style = {
    fontSize,
    fontWeight,
    color,
    cursor: 'crosshair'
  } as React.CSSProperties;

  return (
    <div 
      ref={containerRef}
      className={`variable-proximity ${className}`}
      style={style}
    />
  );
};