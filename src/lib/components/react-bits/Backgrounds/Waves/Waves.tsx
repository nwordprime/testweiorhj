import React, { useEffect, useRef } from 'react';
import './Waves.css';

interface WavesProps {
  waveColor?: string;
  waveHeight?: number;
  waveSpeed?: number;
  waveCount?: number;
  opacity?: number;
  className?: string;
}

export const Waves: React.FC<WavesProps> = ({
  waveColor = '#3b82f6',
  waveHeight = 50,
  waveSpeed = 0.02,
  waveCount = 3,
  opacity = 0.6,
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < waveCount; i++) {
        ctx.beginPath();
        ctx.globalAlpha = opacity / (i + 1);
        ctx.fillStyle = waveColor;

        const waveOffset = (i * Math.PI) / waveCount;
        
        for (let x = 0; x <= canvas.width; x++) {
          const y = canvas.height / 2 + 
            Math.sin((x * 0.01) + time + waveOffset) * waveHeight +
            Math.sin((x * 0.02) + time * 1.5 + waveOffset) * (waveHeight / 2);
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        ctx.fill();
      }

      time += waveSpeed;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [waveColor, waveHeight, waveSpeed, waveCount, opacity]);

  return (
    <div className={`waves ${className}`}>
      <canvas ref={canvasRef} className="waves-canvas" />
    </div>
  );
};