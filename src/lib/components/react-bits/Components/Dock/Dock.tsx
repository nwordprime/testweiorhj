import React, { useState } from 'react';
import './Dock.css';

interface DockItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

interface DockProps {
  items: DockItem[];
  size?: number;
  className?: string;
}

export const Dock: React.FC<DockProps> = ({
  items,
  size = 48,
  className = ''
}) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const getItemSize = (itemId: string, index: number) => {
    if (hoveredItem === itemId) return size * 1.5;
    
    const hoveredIndex = items.findIndex(item => item.id === hoveredItem);
    if (hoveredIndex === -1) return size;
    
    const distance = Math.abs(index - hoveredIndex);
    if (distance === 1) return size * 1.2;
    if (distance === 2) return size * 1.1;
    
    return size;
  };

  return (
    <div className={`dock-outer ${className}`}>
      <div className="dock-panel">
        {items.map((item, index) => {
          const itemSize = getItemSize(item.id, index);
          
          return (
            <div
              key={item.id}
              className="dock-item"
              style={{
                width: `${itemSize}px`,
                height: `${itemSize}px`,
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={item.onClick}
            >
              <div className="dock-icon">
                {item.icon}
              </div>
              {hoveredItem === item.id && (
                <div className="dock-label">
                  {item.label}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};