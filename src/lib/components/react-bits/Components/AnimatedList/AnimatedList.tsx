import React, { useEffect, useRef, useState } from 'react';
import './AnimatedList.css';

interface ListItem {
  id: string;
  content: React.ReactNode;
}

interface AnimatedListProps {
  items: ListItem[];
  itemHeight?: number;
  maxHeight?: number;
  selectedId?: string;
  onItemSelect?: (id: string) => void;
  showScrollbar?: boolean;
  className?: string;
}

export const AnimatedList: React.FC<AnimatedListProps> = ({
  items,
  itemHeight = 80,
  maxHeight = 400,
  selectedId,
  onItemSelect,
  showScrollbar = false,
  className = ''
}) => {
  const listRef = useRef<HTMLDivElement>(null);
  const [showTopGradient, setShowTopGradient] = useState(false);
  const [showBottomGradient, setShowBottomGradient] = useState(true);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = list;
      setShowTopGradient(scrollTop > 0);
      setShowBottomGradient(scrollTop < scrollHeight - clientHeight - 1);
    };

    list.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      list.removeEventListener('scroll', handleScroll);
    };
  }, [items]);

  const handleItemClick = (id: string) => {
    onItemSelect?.(id);
  };

  return (
    <div className={`scroll-list-container ${className}`} style={{ width: '500px' }}>
      <div 
        ref={listRef}
        className={`scroll-list ${showScrollbar ? '' : 'no-scrollbar'}`}
        style={{ maxHeight: `${maxHeight}px` }}
      >
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`item ${selectedId === item.id ? 'selected' : ''}`}
            style={{
              minHeight: `${itemHeight}px`,
              animationDelay: `${index * 50}ms`
            }}
            onClick={() => handleItemClick(item.id)}
          >
            <div className="item-text">
              {item.content}
            </div>
          </div>
        ))}
      </div>
      
      <div 
        className="top-gradient"
        style={{ opacity: showTopGradient ? 1 : 0 }}
      />
      <div 
        className="bottom-gradient"
        style={{ opacity: showBottomGradient ? 1 : 0 }}
      />
    </div>
  );
};