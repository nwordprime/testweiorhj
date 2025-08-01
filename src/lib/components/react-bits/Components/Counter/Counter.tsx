import React, { useEffect, useState } from 'react';
import './Counter.css';

interface CounterProps {
  value: number;
  duration?: number;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  className?: string;
}

export const Counter: React.FC<CounterProps> = ({
  value,
  duration = 2000,
  fontSize = '2rem',
  fontWeight = '600',
  color = '#fff',
  className = ''
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const startValue = displayValue;
    const difference = value - startValue;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + difference * easeOutQuart);
      
      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [value, duration]);

  const digits = displayValue.toString().split('');

  const style = {
    fontSize,
    fontWeight,
    color
  } as React.CSSProperties;

  return (
    <div className={`counter-container ${className}`} style={style}>
      <div className="counter-counter">
        {digits.map((digit, index) => (
          <div key={index} className="counter-digit">
            <div className="counter-number">{digit}</div>
          </div>
        ))}
      </div>
    </div>
  );
};