import React from 'react';

interface IconProps {
  className?: string;
}

const EmbeddingIcon: React.FC<IconProps> = ({ className = '' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 100" className={`w-full h-auto max-h-28 ${className}`}>
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5eead4" />
          <stop offset="100%" stopColor="#2dd4bf" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <rect x="0" y="0" width="220" height="100" fill="url(#bgGradient)" rx="10" ry="10">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" />
      </rect>
      
      {/* Text representation */}
      <rect x="15" y="10" width="80" height="80" fill="#f0fdfa" stroke="#fff" strokeWidth="1" rx="5" ry="5" filter="url(#glow)" />
      <text x="25" y="40" fill="#f472b6" fontSize="14" fontWeight="bold">
        <tspan>Hello</tspan>
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
      </text>
      <text x="25" y="70" fill="#60a5fa" fontSize="14" fontWeight="bold">
        <tspan>World</tspan>
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" begin="1s" />
      </text>
      
      {/* Animated Arrow */}
      <line x1="105" y1="50" x2="115" y2="50" stroke="#fff" strokeWidth="3">
        <animate attributeName="x2" values="115;120;115" dur="1.5s" repeatCount="indefinite" />
      </line>
      <polygon points="115,45 122,50 115,55" fill="#fff">
        <animate attributeName="points" values="115,45 122,50 115,55;120,45 127,50 120,55;115,45 122,50 115,55" dur="1.5s" repeatCount="indefinite" />
      </polygon>
      
      {/* 3D space representation */}
      <rect x="125" y="10" width="80" height="80" fill="#f0fdfa" stroke="#fff" strokeWidth="1" rx="5" ry="5" filter="url(#glow)" />
      
      {/* Improved 3D axes with reduced opacity */}
      <g opacity="0.3">
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
      
      {/* Animated 3D points */}
      <g>
        <circle cx="165" cy="40" r="4" fill="#f472b6">
          <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
        </circle>
        <text x="172" y="44" fill="#f472b6" fontSize="10" fontWeight="bold">Hello</text>
      </g>
      <g>
        <circle cx="170" cy="70" r="4" fill="#60a5fa">
          <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" begin="1s" />
        </circle>
        <text x="135" y="74" fill="#60a5fa" fontSize="10" fontWeight="bold">World</text>
      </g>
    </svg>
  );
};

export default EmbeddingIcon;