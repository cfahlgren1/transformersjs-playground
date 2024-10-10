import React from 'react';

interface IconProps {
  className?: string;
}

const SentimentAnalysisIcon: React.FC<IconProps> = ({ className = '' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 220 100"
      className={`w-full h-auto max-h-28 ${className}`}
    >
      <rect x="0" y="0" width="220" height="100" fill="#fbbf24" rx="10" ry="10" />
      
      {/* Input text */}
      <rect x="15" y="10" width="80" height="80" fill="#fffbeb" stroke="#fff" strokeWidth="1" rx="5" ry="5" />
      <text x="20" y="35" fill="#92400e" fontSize="10" fontWeight="bold">Great product!</text>
      <text x="20" y="50" fill="#92400e" fontSize="10" fontWeight="bold">Highly</text>
      <text x="20" y="65" fill="#92400e" fontSize="10" fontWeight="bold">recommended.</text>
      
      {/* Arrow */}
      <line x1="105" y1="50" x2="115" y2="50" stroke="#fff" strokeWidth="3" />
      <polygon points="115,45 122,50 115,55" fill="#fff" />
      
      {/* Sentiment analysis result */}
      <rect x="125" y="10" width="80" height="80" fill="#fffbeb" stroke="#fff" strokeWidth="1" rx="5" ry="5" />
      
      {/* Sentiment gauge background */}
      <rect x="135" y="30" width="60" height="20" fill="#e5e7eb" rx="10" ry="10" />
      
      {/* Sentiment gauge fill (80% positive) */}
      <rect x="135" y="30" width="48" height="20" fill="#4ade80" rx="10" ry="10" />
      
      {/* Sentiment score text */}
      <text x="165" y="70" fill="#4ade80" fontSize="14" fontWeight="bold" textAnchor="middle">80%</text>
      <text x="165" y="85" fill="#92400e" fontSize="10" textAnchor="middle">Positive</text>
    </svg>
  );
};

export default SentimentAnalysisIcon;