import React from 'react';
import './GlitchText.css';

interface GlitchTextProps {
  text: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  backgroundColor?: string;
  glitchIntensity?: number;
  glitchSpeed?: number;
  glitchColors?: {
    before: string;
    after: string;
  };
  enableOnHover?: boolean;
  className?: string;
}

export const GlitchText: React.FC<GlitchTextProps> = ({
  text,
  fontSize = 'clamp(2rem, 10vw, 8rem)',
  fontWeight = '900',
  color = '#fff',
  backgroundColor = '#000000',
  glitchIntensity = 10,
  glitchSpeed = 3,
  glitchColors = { before: '#00ffff', after: '#ff0000' },
  enableOnHover = false,
  className = ''
}) => {
  const glitchClass = `glitch ${enableOnHover ? 'enable-on-hover' : ''} ${className}`.trim();

  const style = {
    '--after-shadow': `-${glitchIntensity}px 0 ${glitchColors.after}`,
    '--before-shadow': `${glitchIntensity}px 0 ${glitchColors.before}`,
    '--after-duration': `${glitchSpeed}s`,
    '--before-duration': `${glitchSpeed - 1}s`,
    fontSize,
    fontWeight,
    color,
    backgroundColor
  } as React.CSSProperties;

  return (
    <div 
      className={glitchClass}
      data-text={text}
      style={style}
    >
      {text}
    </div>
  );
};