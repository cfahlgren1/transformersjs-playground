import React from 'react';

interface IconProps {
  className?: string;
}

const EmbeddingIcon: React.FC<IconProps> = ({ className = '' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 100" className={`w-full h-auto max-h-28 ${className}`}>
      {/* Background */}
      <rect x="0" y="0" width="220" height="100" fill="#2dd4bf" rx="10" ry="10" />
      
      {/* Input */}
      <rect x="15" y="10" width="80" height="80" fill="#f0fdfa" stroke="#fff" strokeWidth="1" rx="5" ry="5" />
      <text x="20" y="30" fill="#0f766e" fontSize="12" fontWeight="bold">Input</text>
      <text x="20" y="50" fill="#0f766e" fontSize="14" fontWeight="bold">Hello</text>
      <text x="20" y="70" fill="#0f766e" fontSize="14" fontWeight="bold">World</text>
      
      {/* Arrow */}
      <line x1="105" y1="50" x2="115" y2="50" stroke="#fff" strokeWidth="3" />
      <polygon points="115,45 122,50 115,55" fill="#fff" />
      
      {/* Output */}
      <rect x="125" y="10" width="80" height="80" fill="#f0fdfa" stroke="#fff" strokeWidth="1" rx="5" ry="5" />
      
      {/* 3D space representation */}
      <g opacity="0.7">
        <line x1="130" y1="85" x2="200" y2="85" stroke="#0f766e" strokeWidth="1" />
        <polygon points="200,85 196,83 196,87" fill="#0f766e" />
        <text x="202" y="89" fill="#0f766e" fontSize="8">x</text>

        <line x1="130" y1="85" x2="130" y2="15" stroke="#0f766e" strokeWidth="1" />
        <polygon points="130,15 128,19 132,19" fill="#0f766e" />
        <text x="126" y="13" fill="#0f766e" fontSize="8">y</text>

        <line x1="130" y1="85" x2="160" y2="65" stroke="#0f766e" strokeWidth="1" />
        <polygon points="160,65 156,67 158,70" fill="#0f766e" />
        <text x="162" y="64" fill="#0f766e" fontSize="8">z</text>
      </g>
      
      {/* 3D points */}
      <circle cx="165" cy="40" r="4" fill="#f472b6" />
      <text x="172" y="44" fill="#f472b6" fontSize="10" fontWeight="bold">Hello</text>
      <circle cx="170" cy="70" r="4" fill="#60a5fa" />
      <text x="135" y="74" fill="#60a5fa" fontSize="10" fontWeight="bold">World</text>
    </svg>
  );
};

export default EmbeddingIcon;