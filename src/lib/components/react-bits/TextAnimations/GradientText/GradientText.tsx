import React from 'react';
import './GradientText.css';

interface GradientTextProps {
  text: string;
  fontSize?: string;
  fontWeight?: string;
  gradientColors?: string[];
  animationSpeed?: number;
  backgroundColor?: string;
  padding?: string;
  borderRadius?: string;
  className?: string;
}

export const GradientText: React.FC<GradientTextProps> = ({
  text,
  fontSize = '3rem',
  fontWeight = '500',
  gradientColors = ['#ff0080', '#7928ca', '#0070f3'],
  animationSpeed = 3,
  backgroundColor = '#000000',
  padding = '1rem 2rem',
  borderRadius = '1.25rem',
  className = ''
}) => {
  const gradientString = gradientColors.join(', ');

  const containerStyle = {
    fontSize,
    fontWeight,
    padding,
    borderRadius
  } as React.CSSProperties;

  const overlayStyle = {
    background: `linear-gradient(-45deg, ${gradientString})`,
    animationDuration: `${animationSpeed}s`
  } as React.CSSProperties;

  const textStyle = {
    background: `linear-gradient(-45deg, ${gradientString})`,
    animationDuration: `${animationSpeed}s`
  } as React.CSSProperties;

  const beforeStyle = {
    backgroundColor
  } as React.CSSProperties;

  return (
    <div className={`animated-gradient-text ${className}`} style={containerStyle}>
      <div className="gradient-overlay" style={overlayStyle}>
        <div style={beforeStyle} />
      </div>
      <div className="text-content" style={textStyle}>
        {text}
      </div>
    </div>
  );
};