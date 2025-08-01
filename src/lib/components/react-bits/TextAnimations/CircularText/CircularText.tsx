import React, { useEffect, useRef } from 'react';
import './CircularText.css';

interface CircularTextProps {
  text: string;
  radius?: number;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  animationSpeed?: number;
  className?: string;
}

export const CircularText: React.FC<CircularTextProps> = ({
  text,
  radius = 100,
  fontSize = '24px',
  fontWeight = '900',
  color = '#fff',
  animationSpeed = 10,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const chars = text.split('');
    container.innerHTML = '';

    chars.forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.position = 'absolute';
      span.style.left = '0';
      span.style.right = '0';
      span.style.top = '0';
      span.style.bottom = '0';
      span.style.fontSize = fontSize;
      span.style.fontWeight = fontWeight;
      span.style.color = color;
      span.style.display = 'inline-block';
      
      const angle = (index / chars.length) * 360;
      span.style.transform = `rotate(${angle}deg) translateY(-${radius}px) rotate(-${angle}deg)`;
      span.style.transition = 'all 0.5s cubic-bezier(0, 0, 0, 1)';
      
      container.appendChild(span);
    });
  }, [text, radius, fontSize, fontWeight, color]);

  const containerStyle = {
    width: `${radius * 2}px`,
    height: `${radius * 2}px`,
    animation: `rotate ${animationSpeed}s linear infinite`
  } as React.CSSProperties;

  return (
    <div 
      ref={containerRef}
      className={`circular-text ${className}`}
      style={containerStyle}
    />
  );
};