import React from 'react';

interface TextGenerationIconProps {
  className?: string;
}

const TextGenerationIcon: React.FC<TextGenerationIconProps> = ({ className = '' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 100" className={`w-full h-auto max-h-28 ${className}`}>
      <rect x="0" y="0" width="220" height="100" fill="#3b82f6" rx="10" ry="10" />
      
      {/* Input prompt */}
      <rect x="15" y="10" width="80" height="80" fill="#eff6ff" stroke="#fff" strokeWidth="1" rx="5" ry="5" />
      <text x="20" y="30" fill="#1d4ed8" fontSize="9" fontWeight="bold">Prompt:</text>
      <text x="20" y="45" fill="#1d4ed8" fontSize="9" fontWeight="bold">Generate a</text>
      <text x="20" y="60" fill="#1d4ed8" fontSize="9" fontWeight="bold">story about...</text>
      
      {/* Arrow */}
      <line x1="105" y1="50" x2="115" y2="50" stroke="#fff" strokeWidth="3" />
      <polygon points="115,45 122,50 115,55" fill="#fff" />
      
      {/* Generated text */}
      <rect x="125" y="10" width="80" height="80" fill="#eff6ff" stroke="#fff" strokeWidth="1" rx="5" ry="5" />
      <text x="130" y="30" fill="#1e40af" fontSize="8">Once upon a time,</text>
      <text x="130" y="42" fill="#1e40af" fontSize="8">in a land far away,</text>
      <text x="130" y="54" fill="#1e40af" fontSize="8">there was a brave</text>
      <text x="130" y="66" fill="#1e40af" fontSize="8">knight who...</text>
      <line x1="130" y1="75" x2="190" y2="75" stroke="#93c5fd" strokeWidth="1" />
      <line x1="130" y1="80" x2="180" y2="80" stroke="#93c5fd" strokeWidth="1" />
    </svg>
  );
};

export default TextGenerationIcon;