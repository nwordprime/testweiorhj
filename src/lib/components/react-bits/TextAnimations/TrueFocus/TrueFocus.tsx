import React, { useState } from 'react';
import './TrueFocus.css';

interface TrueFocusProps {
  text: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  borderColor?: string;
  blurAmount?: number;
  className?: string;
}

export const TrueFocus: React.FC<TrueFocusProps> = ({
  text,
  fontSize = '3rem',
  fontWeight = '900',
  color = '#fff',
  borderColor = '#fff',
  blurAmount = 2,
  className = ''
}) => {
  const [focusedWord, setFocusedWord] = useState<number | null>(null);

  const words = text.split(' ');

  const wordStyle = (index: number) => ({
    fontSize,
    fontWeight,
    color,
    filter: focusedWord === index ? 'blur(0)' : `blur(${blurAmount}px)`,
    '--border-color': borderColor
  } as React.CSSProperties);

  return (
    <div className={`focus-container ${className}`}>
      {words.map((word, index) => (
        <div
          key={index}
          className={`focus-word ${focusedWord === index ? 'active' : ''}`}
          style={wordStyle(index)}
          onMouseEnter={() => setFocusedWord(index)}
          onMouseLeave={() => setFocusedWord(null)}
        >
          {word}
          <div className="focus-frame">
            <div className="corner top-left"></div>
            <div className="corner top-right"></div>
            <div className="corner bottom-left"></div>
            <div className="corner bottom-right"></div>
          </div>
        </div>
      ))}
    </div>
  );
};