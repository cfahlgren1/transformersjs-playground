import React from 'react';

interface ClassificationIconProps {
  className?: string;
}

const ClassificationIcon: React.FC<ClassificationIconProps> = ({ className = '' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 100" className={`w-full h-auto max-h-28 ${className}`}>
      <rect x="0" y="0" width="220" height="100" fill="#a855f7" rx="10" ry="10" />
      
      {/* Input */}
      <rect x="10" y="10" width="80" height="80" fill="#faf5ff" stroke="#fff" strokeWidth="1" rx="5" ry="5" />
      <text x="15" y="30" fill="#7e22ce" fontSize="12" fontWeight="bold">Inputs</text>
      <text x="15" y="50" fill="#7e22ce" fontSize="10" fontWeight="bold">Basketball</text>
      
      {/* Arrow */}
      <line x1="95" y1="50" x2="115" y2="50" stroke="#fff" strokeWidth="2" />
      <polygon points="115,46 123,50 115,54" fill="#fff" />
      
      {/* Output */}
      <rect x="120" y="10" width="90" height="80" fill="#faf5ff" stroke="#fff" strokeWidth="1" rx="5" ry="5" />
      <text x="125" y="25" fill="#7e22ce" fontSize="12" fontWeight="bold">Output</text>
      
      {/* Classification bars */}
      <rect x="125" y="35" width="75" height="14" fill="#d8b4fe" rx="3" ry="3" />
      <text x="130" y="45" fill="#6b21a8" fontSize="10" fontWeight="bold">Sport</text>
      <text x="193" y="45" fill="#6b21a8" fontSize="10" textAnchor="end">0.800</text>
      
      <rect x="125" y="53" width="30" height="14" fill="#d8b4fe" rx="3" ry="3" />
      <text x="130" y="63" fill="#6b21a8" fontSize="10" fontWeight="bold">Food</text>
      <text x="193" y="63" fill="#6b21a8" fontSize="10" textAnchor="end">0.150</text>
      
      <rect x="125" y="71" width="10" height="14" fill="#d8b4fe" rx="3" ry="3" />
      <text x="130" y="81" fill="#6b21a8" fontSize="10" fontWeight="bold">Music</text>
      <text x="193" y="81" fill="#6b21a8" fontSize="10" textAnchor="end">0.050</text>
    </svg>
  );
};

export default ClassificationIcon;