import React from 'react';

interface IconProps {
  className?: string;
}

const SegmentationIcon: React.FC<IconProps> = ({ className = '' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 100" className={`w-full h-auto max-h-28 ${className}`}>
      <rect x="0" y="0" width="220" height="100" fill="#818cf8" rx="10" ry="10" />
      
      {/* Original Image */}
      <rect x="15" y="10" width="80" height="80" fill="#e0e0e0" stroke="#fff" strokeWidth="1" rx="5" ry="5" />
      <circle cx="40" cy="35" r="15" fill="#fbbf24" />
      <rect x="60" y="45" width="25" height="35" fill="#34d399" />
      
      {/* Arrow */}
      <line x1="105" y1="50" x2="115" y2="50" stroke="#fff" strokeWidth="3" />
      <polygon points="115,45 122,50 115,55" fill="#fff" />
      
      {/* Segmented Image */}
      <rect x="125" y="10" width="80" height="80" fill="#e0e0e0" stroke="#fff" strokeWidth="1" rx="5" ry="5" />
      <circle cx="150" cy="35" r="15" fill="#fbbf24" stroke="#e11d48" strokeWidth="2" strokeDasharray="4 2" />
      <rect x="170" y="45" width="25" height="35" fill="#34d399" stroke="#e11d48" strokeWidth="2" strokeDasharray="4 2" />
    </svg>
  );
};

export default SegmentationIcon;