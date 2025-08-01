import React, { useEffect, useRef } from 'react';
import './BlobCursor.css';

interface BlobCursorProps {
  size?: number;
  color?: string;
  blur?: number;
  opacity?: number;
  zIndex?: number;
}

export const BlobCursor: React.FC<BlobCursorProps> = ({
  size = 40,
  color = '#3b82f6',
  blur = 20,
  opacity = 0.8,
  zIndex = 9999
}) => {
  const blobRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const blob = blobRef.current;
    const container = containerRef.current;
    if (!blob || !container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      blob.style.left = `${clientX}px`;
      blob.style.top = `${clientY}px`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="blob-container"
      style={{ zIndex }}
    >
      <div className="blob-main">
        <div
          ref={blobRef}
          className="blob"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: color,
            filter: `blur(${blur}px)`,
            opacity,
            borderRadius: '50%',
            pointerEvents: 'none',
            position: 'fixed',
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.1s ease-out'
          }}
        />
      </div>
    </div>
  );
};