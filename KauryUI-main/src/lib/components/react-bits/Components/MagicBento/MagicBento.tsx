import React, { useRef, useState } from 'react';
import './MagicBento.css';

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  borderGlow?: boolean;
  spotlightColor?: string;
}

interface MagicBentoProps {
  cards: BentoCardProps[];
  className?: string;
  globalSpotlight?: boolean;
}

export const BentoCard: React.FC<BentoCardProps> = ({
  children,
  className = '',
  borderGlow = false,
  spotlightColor = 'rgba(132, 0, 255, 0.3)'
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [glowIntensity, setGlowIntensity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setMousePosition({ x, y });
    setGlowIntensity(1);
  };

  const handleMouseLeave = () => {
    setGlowIntensity(0);
  };

  const cardStyle = {
    '--glow-x': `${mousePosition.x}%`,
    '--glow-y': `${mousePosition.y}%`,
    '--glow-intensity': glowIntensity,
    '--spotlight-color': spotlightColor
  } as React.CSSProperties;

  const cardClasses = `card ${borderGlow ? 'card--border-glow' : ''} ${className}`.trim();

  return (
    <div
      ref={cardRef}
      className={cardClasses}
      style={cardStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export const MagicBento: React.FC<MagicBentoProps> = ({
  cards,
  className = '',
  globalSpotlight = false
}) => {
  return (
    <div className={`bento-section ${className}`}>
      <div className="card-grid">
        {cards.map((card, index) => (
          <BentoCard key={index} {...card} />
        ))}
      </div>
      {globalSpotlight && <div className="global-spotlight" />}
    </div>
  );
};