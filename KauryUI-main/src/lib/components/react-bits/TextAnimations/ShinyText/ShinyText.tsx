import React from 'react';
import './ShinyText.css';

interface ShinyTextProps {
  text: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  shineColor?: string;
  animationSpeed?: number;
  disabled?: boolean;
  className?: string;
}

export const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  fontSize = 'clamp(2rem, 10vw, 8rem)',
  fontWeight = '900',
  color = '#b5b5b5a4',
  shineColor = 'rgba(255, 255, 255, 0.8)',
  animationSpeed = 5,
  disabled = false,
  className = ''
}) => {
  const shinyClass = `shiny-text ${disabled ? 'disabled' : ''} ${className}`.trim();

  const style = {
    fontSize,
    fontWeight,
    color,
    background: `linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, ${shineColor} 50%, rgba(255, 255, 255, 0) 60%)`,
    backgroundSize: '200% 100%',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    animationDuration: `${animationSpeed}s`
  } as React.CSSProperties;

  return (
    <span className={shinyClass} style={style}>
      {text}
    </span>
  );
};