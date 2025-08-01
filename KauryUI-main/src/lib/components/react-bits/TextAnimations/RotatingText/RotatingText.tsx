import React, { useEffect, useRef, useState } from 'react';
import './RotatingText.css';

interface RotatingTextProps {
  words: string[];
  duration?: number;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  className?: string;
}

export const RotatingText: React.FC<RotatingTextProps> = ({
  words,
  duration = 2000,
  fontSize = '2rem',
  fontWeight = '600',
  color = '#ffffff',
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words.length, duration]);

  const style = {
    fontSize,
    fontWeight,
    color,
    animationDuration: `${duration * words.length}ms`
  } as React.CSSProperties;

  return (
    <div className={`text-rotate ${className}`} style={style}>
      <div className="text-rotate-word">
        {words.map((word, index) => (
          <span
            key={index}
            ref={index === currentIndex ? elementRef : null}
            className="text-rotate-element"
            style={{
              animationDelay: `${index * duration}ms`,
              transform: index === currentIndex ? 'translateY(0%)' : 'translateY(100%)'
            }}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};