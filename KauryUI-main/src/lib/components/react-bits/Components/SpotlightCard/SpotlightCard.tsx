import React, { useRef, useState } from 'react';
import './SpotlightCard.css';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  borderRadius?: string;
  backgroundColor?: string;
  borderColor?: string;
  padding?: string;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  spotlightColor = 'rgba(255, 255, 255, 0.05)',
  borderRadius = '1.5rem',
  backgroundColor = '#111',
  borderColor = '#222',
  padding = '2rem'
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setMousePosition({ x, y });
  };

  const cardStyle = {
    '--mouse-x': `${mousePosition.x}%`,
    '--mouse-y': `${mousePosition.y}%`,
    '--spotlight-color': spotlightColor,
    borderRadius,
    backgroundColor,
    borderColor: `1px solid ${borderColor}`,
    padding
  } as React.CSSProperties;

  return (
    <div
      ref={cardRef}
      className={`card-spotlight ${className}`}
      style={cardStyle}
      onMouseMove={handleMouseMove}
    >
      {children}
    </div>
  );
};