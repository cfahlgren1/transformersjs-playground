import React from 'react';

interface TextGenerationIconProps {
  className?: string;
}

const TextGenerationIcon: React.FC<TextGenerationIconProps> = ({ className = '' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" className={`w-full h-auto max-h-28 ${className}`}>
      <rect x="0" y="0" width="200" height="100" fill="#3b82f6" rx="10" ry="10" />
      
      {/* Input prompt */}
      <rect x="10" y="10" width="80" height="80" fill="#eff6ff" stroke="#fff" strokeWidth="1" rx="5" ry="5" />
      <text x="20" y="40" fill="#1d4ed8" fontSize="10" fontWeight="bold">Prompt:</text>
      <text x="20" y="55" fill="#1d4ed8" fontSize="10" fontWeight="bold">Generate a</text>
      <text x="20" y="70" fill="#1d4ed8" fontSize="10" fontWeight="bold">story about...</text>
      
      {/* Arrow */}
      <line x1="95" y1="50" x2="105" y2="50" stroke="#fff" strokeWidth="2" />
      <polygon points="105,46 113,50 105,54" fill="#fff" />
      
      {/* Generated text */}
      <rect x="110" y="10" width="80" height="80" fill="#eff6ff" stroke="#fff" strokeWidth="1" rx="5" ry="5" />
      <text x="120" y="25" fill="#1e40af" fontSize="8">Once upon a time,</text>
      <text x="120" y="35" fill="#1e40af" fontSize="8">in a land far away,</text>
      <text x="120" y="45" fill="#1e40af" fontSize="8">there was a brave</text>
      <text x="120" y="55" fill="#1e40af" fontSize="8">knight who...</text>
      <line x1="120" y1="65" x2="180" y2="65" stroke="#93c5fd" strokeWidth="1" />
      <line x1="120" y1="75" x2="170" y2="75" stroke="#93c5fd" strokeWidth="1" />
    </svg>
  );
};

export default TextGenerationIcon;