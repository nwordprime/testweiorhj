import React, { useEffect, useRef } from 'react';
import './MetaBalls.css';

interface MetaBallsProps {
  ballCount?: number;
  ballColor?: string;
  ballSize?: number;
  speed?: number;
  threshold?: number;
  className?: string;
}

export const MetaBalls: React.FC<MetaBallsProps> = ({
  ballCount = 5,
  ballColor = '#3b82f6',
  ballSize = 50,
  speed = 1,
  threshold = 0.6,
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();

    const balls: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    // Initialize balls
    for (let i = 0; i < ballCount; i++) {
      balls.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * speed * 2,
        vy: (Math.random() - 0.5) * speed * 2,
        radius: ballSize + Math.random() * 20
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update ball positions
      balls.forEach(ball => {
        ball.x += ball.vx;
        ball.y += ball.vy;

        // Bounce off walls
        if (ball.x <= ball.radius || ball.x >= canvas.width - ball.radius) {
          ball.vx *= -1;
        }
        if (ball.y <= ball.radius || ball.y >= canvas.height - ball.radius) {
          ball.vy *= -1;
        }

        // Keep balls within bounds
        ball.x = Math.max(ball.radius, Math.min(canvas.width - ball.radius, ball.x));
        ball.y = Math.max(ball.radius, Math.min(canvas.height - ball.radius, ball.y));
      });

      // Create metaball effect using image data
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      for (let x = 0; x < canvas.width; x += 2) {
        for (let y = 0; y < canvas.height; y += 2) {
          let sum = 0;
          
          balls.forEach(ball => {
            const dx = x - ball.x;
            const dy = y - ball.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            sum += ball.radius / distance;
          });

          if (sum >= threshold) {
            const index = (y * canvas.width + x) * 4;
            const color = ballColor.startsWith('#') 
              ? hexToRgb(ballColor) 
              : { r: 59, g: 130, b: 246 };
            
            data[index] = color.r;     // Red
            data[index + 1] = color.g; // Green
            data[index + 2] = color.b; // Blue
            data[index + 3] = 255;     // Alpha
          }
        }
      }

      ctx.putImageData(imageData, 0, 0);
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
  }, [ballCount, ballColor, ballSize, speed, threshold]);

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 59, g: 130, b: 246 };
  };

  return (
    <div className={`metaballs-container ${className}`}>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};