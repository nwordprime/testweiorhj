import React, { useState } from 'react';
import './Folder.css';

interface FolderProps {
  isOpen?: boolean;
  onClick?: () => void;
  folderColor?: string;
  folderBackColor?: string;
  paperColors?: string[];
  size?: number;
  className?: string;
}

export const Folder: React.FC<FolderProps> = ({
  isOpen = false,
  onClick,
  folderColor = '#70a1ff',
  folderBackColor = '#4785ff',
  paperColors = ['#e6e6e6', '#f2f2f2', '#ffffff'],
  size = 100,
  className = ''
}) => {
  const [internalOpen, setInternalOpen] = useState(isOpen);

  const handleClick = () => {
    setInternalOpen(!internalOpen);
    onClick?.();
  };

  const style = {
    '--folder-color': folderColor,
    '--folder-back-color': folderBackColor,
    '--paper-1': paperColors[0] || '#e6e6e6',
    '--paper-2': paperColors[1] || '#f2f2f2',
    '--paper-3': paperColors[2] || '#ffffff',
    width: `${size}px`,
    height: `${size * 0.8}px`
  } as React.CSSProperties;

  return (
    <div 
      className={`folder ${internalOpen ? 'open' : ''} ${className}`}
      style={style}
      onClick={handleClick}
    >
      <div className="folder__back">
        <div className="paper"></div>
        <div className="paper"></div>
        <div className="paper"></div>
      </div>
      <div className="folder__front"></div>
    </div>
  );
};