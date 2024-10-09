import React from 'react';

interface IconProps {
  className?: string;
}

const EmbeddingIcon: React.FC<IconProps> = ({ className = '' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" className={`w-full h-auto max-h-28 ${className}`}>
      <rect x="0" y="0" width="200" height="100" fill="#5eead4" rx="10" ry="10" />
      
      {/* Text representation */}
      <rect x="10" y="10" width="80" height="80" fill="#f0fdfa" stroke="#fff" strokeWidth="1" rx="5" ry="5" />
      <text x="20" y="40" fill="#f472b6" fontSize="14" fontWeight="bold">Hello</text>
      <text x="20" y="70" fill="#60a5fa" fontSize="14" fontWeight="bold">World</text>
      
      {/* Arrow */}
      <line x1="95" y1="50" x2="105" y2="50" stroke="#fff" strokeWidth="2" />
      <polygon points="105,46 113,50 105,54" fill="#fff" />
      
      {/* 3D space representation */}
      <rect x="110" y="10" width="80" height="80" fill="#f0fdfa" stroke="#fff" strokeWidth="1" rx="5" ry="5" />
      
      {/* Improved 3D axes with reduced opacity */}
      <line x1="115" y1="85" x2="185" y2="85" stroke="#0f766e" strokeWidth="1" opacity="0.3" />
      <polygon points="185,85 181,83 181,87" fill="#0f766e" opacity="0.3" />
      <text x="187" y="89" fill="#0f766e" fontSize="8" opacity="0.3">x</text>

      <line x1="115" y1="85" x2="115" y2="15" stroke="#0f766e" strokeWidth="1" opacity="0.3" />
      <polygon points="115,15 113,19 117,19" fill="#0f766e" opacity="0.3" />
      <text x="111" y="13" fill="#0f766e" fontSize="8" opacity="0.3">y</text>

      <line x1="115" y1="85" x2="145" y2="65" stroke="#0f766e" strokeWidth="1" opacity="0.3" />
      <polygon points="145,65 141,67 143,70" fill="#0f766e" opacity="0.3" />
      <text x="147" y="64" fill="#0f766e" fontSize="8" opacity="0.3">z</text>
      
      {/* 3D points */}
      <circle cx="150" cy="40" r="4" fill="#f472b6" />
      <text x="157" y="44" fill="#f472b6" fontSize="10" fontWeight="bold">Hello</text>
      <circle cx="155" cy="70" r="4" fill="#60a5fa" />
      <text x="120" y="74" fill="#60a5fa" fontSize="10" fontWeight="bold">World</text>
    </svg>
  );
};

export default EmbeddingIcon;