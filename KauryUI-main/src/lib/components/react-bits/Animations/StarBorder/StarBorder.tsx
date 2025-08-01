import React from 'react';
import './StarBorder.css';

interface StarBorderProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  gradientColors?: string[];
}

export const StarBorder: React.FC<StarBorderProps> = ({
  children,
  speed = 5,
  className = '',
  gradientColors = ['#ff0080', '#7928ca', '#0070f3']
}) => {
  const gradientString = gradientColors.join(', ');

  const style = {
    '--gradient-colors': gradientString,
    '--animation-speed': `${speed}s`
  } as React.CSSProperties;

  return (
    <div className={`star-border-container ${className}`} style={style}>
      <div 
        className="border-gradient-bottom"
        style={{
          background: `linear-gradient(90deg, ${gradientString})`,
          animationDuration: `${speed}s`
        }}
      />
      <div 
        className="border-gradient-top"
        style={{
          background: `linear-gradient(90deg, ${gradientString})`,
          animationDuration: `${speed}s`
        }}
      />
      <div className="inner-content">
        {children}
      </div>
    </div>
  );
};