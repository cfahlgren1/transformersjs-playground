import React from 'react';

interface TranscriptionIconProps {
  className?: string;
}

const TranscriptionIcon: React.FC<TranscriptionIconProps> = ({ className = '' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" className={`w-full h-auto max-h-28 ${className}`}>
      <rect x="0" y="0" width="200" height="100" fill="#fb7185" rx="10" ry="10" />
      
      {/* Audio waveform */}
      <rect x="10" y="10" width="80" height="80" fill="#fff1f2" stroke="#fff" strokeWidth="1" rx="5" ry="5" />
      <path d="M15 50 Q 25 20, 35 50 Q 45 80, 55 50 Q 65 20, 75 50 Q 85 80, 95 50" 
            fill="none" stroke="#e11d48" strokeWidth="2" />
      
      {/* Arrow */}
      <line x1="95" y1="50" x2="105" y2="50" stroke="#fff" strokeWidth="2" />
      <polygon points="105,46 113,50 105,54" fill="#fff" />
      
      {/* Transcribed text */}
      <rect x="110" y="10" width="80" height="80" fill="#fff1f2" stroke="#fff" strokeWidth="1" rx="5" ry="5" />
      <text x="120" y="30" fill="#be123c" fontSize="10" fontWeight="bold">Hello, how</text>
      <text x="120" y="45" fill="#be123c" fontSize="10" fontWeight="bold">are you</text>
      <text x="120" y="60" fill="#be123c" fontSize="10" fontWeight="bold">today?</text>
      <line x1="120" y1="70" x2="180" y2="70" stroke="#fda4af" strokeWidth="1" />
      <line x1="120" y1="80" x2="170" y2="80" stroke="#fda4af" strokeWidth="1" />
    </svg>
  );
};

export default TranscriptionIcon;