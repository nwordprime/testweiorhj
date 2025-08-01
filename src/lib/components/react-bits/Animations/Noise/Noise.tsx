import React, { useEffect, useRef } from 'react';
import './Noise.css';

interface NoiseProps {
  opacity?: number;
  scale?: number;
  speed?: number;
  className?: string;
}

export const Noise: React.FC<NoiseProps> = ({
  opacity = 0.1,
  scale = 1,
  speed = 1,
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const imageData = ctx.createImageData(canvas.width, canvas.height);
    const data = imageData.data;

    let frame = 0;

    const animate = () => {
      frame += speed;

      for (let i = 0; i < data.length; i += 4) {
        const noise = Math.random() * 255;
        data[i] = noise;     // Red
        data[i + 1] = noise; // Green
        data[i + 2] = noise; // Blue
        data[i + 3] = opacity * 255; // Alpha
      }

      ctx.putImageData(imageData, 0, 0);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [opacity, scale, speed]);

  return (
    <canvas 
      ref={canvasRef}
      className={`noise-overlay ${className}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 1000,
        transform: `scale(${scale})`
      }}
    />
  );
};