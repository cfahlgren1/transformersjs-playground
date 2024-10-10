import React from 'react';

interface TranscriptionIconProps {
  className?: string;
}

const TranscriptionIcon: React.FC<TranscriptionIconProps> = ({ className = '' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 100" className={`w-full h-auto max-h-28 ${className}`}>
      <rect x="0" y="0" width="220" height="100" fill="#fb7185" rx="10" ry="10" />
      
      {/* Audio waveform */}
      <rect x="15" y="10" width="80" height="80" fill="#fff1f2" stroke="#fff" strokeWidth="1" rx="5" ry="5" />
      <g fill="#e11d48">
        <rect x="25" y="35" width="5" height="30" />
        <rect x="35" y="25" width="5" height="50" />
        <rect x="45" y="15" width="5" height="70" />
        <rect x="55" y="30" width="5" height="40" />
        <rect x="65" y="20" width="5" height="60" />
        <rect x="75" y="40" width="5" height="20" />
        <rect x="85" y="35" width="5" height="30" />
      </g>
      
      {/* Arrow */}
      <line x1="105" y1="50" x2="115" y2="50" stroke="#fff" strokeWidth="3" />
      <polygon points="115,45 122,50 115,55" fill="#fff" />
      
      {/* Transcribed text */}
      <rect x="125" y="10" width="80" height="80" fill="#fff1f2" stroke="#fff" strokeWidth="1" rx="5" ry="5" />
      <text x="130" y="35" fill="#be123c" fontSize="9" fontWeight="bold">Hello, how</text>
      <text x="130" y="50" fill="#be123c" fontSize="9" fontWeight="bold">are you</text>
      <text x="130" y="65" fill="#be123c" fontSize="9" fontWeight="bold">today?</text>
      <line x1="130" y1="75" x2="190" y2="75" stroke="#fda4af" strokeWidth="1" />
      <line x1="130" y1="80" x2="180" y2="80" stroke="#fda4af" strokeWidth="1" />
    </svg>
  );
};

export default TranscriptionIcon;