import React, { useEffect, useRef } from 'react';
import './Particles.css';

interface ParticlesProps {
  particleCount?: number;
  particleColor?: string;
  particleSize?: number;
  speed?: number;
  opacity?: number;
  className?: string;
}

export const Particles: React.FC<ParticlesProps> = ({
  particleCount = 50,
  particleColor = '#ffffff',
  particleSize = 2,
  speed = 1,
  opacity = 0.6,
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }> = [];

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        size: Math.random() * particleSize + 1
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = particleColor;
      ctx.globalAlpha = opacity;

      particles.forEach(particle => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [particleCount, particleColor, particleSize, speed, opacity]);

  return (
    <div className={`particles-container ${className}`}>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};