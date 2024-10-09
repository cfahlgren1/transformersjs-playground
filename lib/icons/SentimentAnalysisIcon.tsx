import React from 'react';

interface IconProps {
  className?: string;
}

const SentimentAnalysisIcon: React.FC<IconProps> = ({ className = '' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 100"
      className={`w-full h-auto max-h-28 ${className}`}
    >
      <rect x="0" y="0" width="200" height="100" fill="#fbbf24" rx="10" ry="10" />
      
      {/* Input text */}
      <rect x="10" y="10" width="80" height="80" fill="#fffbeb" stroke="#fff" strokeWidth="1" rx="5" ry="5" />
      <text x="15" y="35" fill="#92400e" fontSize="8" fontWeight="bold">Great product!</text>
      <text x="15" y="50" fill="#92400e" fontSize="8" fontWeight="bold">Highly</text>
      <text x="15" y="65" fill="#92400e" fontSize="8" fontWeight="bold">recommended.</text>
      
      {/* Arrow */}
      <line x1="95" y1="50" x2="105" y2="50" stroke="#fff" strokeWidth="2" />
      <polygon points="105,46 113,50 105,54" fill="#fff" />
      
      {/* Sentiment analysis result */}
      <rect x="110" y="10" width="80" height="80" fill="#fffbeb" stroke="#fff" strokeWidth="1" rx="5" ry="5" />
      <circle cx="150" cy="50" r="22" fill="#4ade80" />
      <path d="M140 50 Q 150 60, 160 50" fill="none" stroke="#fffbeb" strokeWidth="2" />
      <circle cx="143" cy="43" r="2" fill="#fffbeb" />
      <circle cx="157" cy="43" r="2" fill="#fffbeb" />
    </svg>
  );
};

export default SentimentAnalysisIcon;