import React from 'react';

interface IconProps {
  className?: string;
}

const SegmentationIcon: React.FC<IconProps> = ({ className = '' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" className={`w-full h-auto max-h-28 ${className}`}>
      <rect x="0" y="0" width="200" height="100" fill="#818cf8" rx="10" ry="10" />
      
      {/* Original Image */}
      <rect x="10" y="10" width="80" height="80" fill="#e0e0e0" stroke="#fff" strokeWidth="1" rx="5" ry="5" />
      <circle cx="35" cy="35" r="15" fill="#fbbf24" />
      <rect x="55" y="45" width="25" height="35" fill="#34d399" />
      
      {/* Arrow */}
      <line x1="95" y1="50" x2="105" y2="50" stroke="#fff" strokeWidth="2" />
      <polygon points="105,46 113,50 105,54" fill="#fff" />
      
      {/* Segmented Image */}
      <rect x="110" y="10" width="80" height="80" fill="#e0e0e0" stroke="#fff" strokeWidth="1" rx="5" ry="5" />
      <circle cx="135" cy="35" r="15" fill="#fbbf24" stroke="#e11d48" strokeWidth="2" strokeDasharray="4 2" />
      <rect x="155" y="45" width="25" height="35" fill="#34d399" stroke="#e11d48" strokeWidth="2" strokeDasharray="4 2" />
    </svg>
  );
};

export default SegmentationIcon;