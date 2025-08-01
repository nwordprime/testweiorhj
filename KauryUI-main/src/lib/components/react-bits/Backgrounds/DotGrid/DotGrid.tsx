import React, { useEffect, useRef } from 'react';
import './DotGrid.css';

interface DotGridProps {
  dotSize?: number;
  dotColor?: string;
  spacing?: number;
  opacity?: number;
  className?: string;
}

export const DotGrid: React.FC<DotGridProps> = ({
  dotSize = 2,
  dotColor = '#ffffff',
  spacing = 20,
  opacity = 0.3,
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
    };

    const drawDots = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = dotColor;
      ctx.globalAlpha = opacity;

      const rect = canvas.getBoundingClientRect();
      for (let x = 0; x < rect.width; x += spacing) {
        for (let y = 0; y < rect.height; y += spacing) {
          ctx.beginPath();
          ctx.arc(x, y, dotSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    resizeCanvas();
    drawDots();

    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
      drawDots();
    });

    resizeObserver.observe(canvas);

    return () => {
      resizeObserver.disconnect();
    };
  }, [dotSize, dotColor, spacing, opacity]);

  return (
    <div className={`dot-grid ${className}`}>
      <div className="dot-grid__wrap">
        <canvas ref={canvasRef} className="dot-grid__canvas" />
      </div>
    </div>
  );
};