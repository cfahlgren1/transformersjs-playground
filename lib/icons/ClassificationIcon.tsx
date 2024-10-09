import React from 'react';

interface ClassificationIconProps {
  className?: string;
}

const ClassificationIcon: React.FC<ClassificationIconProps> = ({ className = '' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" className={`w-full h-auto max-h-28 ${className}`}>
      <rect x="0" y="0" width="200" height="100" fill="#a855f7" rx="10" ry="10" />
      
      {/* Input text */}
      <rect x="10" y="10" width="80" height="80" fill="#faf5ff" stroke="#fff" strokeWidth="1" rx="5" ry="5" />
      <text x="20" y="30" fill="#7e22ce" fontSize="10" fontWeight="bold">Unclassified</text>
      <text x="20" y="45" fill="#7e22ce" fontSize="10" fontWeight="bold">Text or</text>
      <text x="20" y="60" fill="#7e22ce" fontSize="10" fontWeight="bold">Image</text>
      
      {/* Arrow */}
      <line x1="95" y1="50" x2="105" y2="50" stroke="#fff" strokeWidth="2" />
      <polygon points="105,46 113,50 105,54" fill="#fff" />
      
      {/* Classification result */}
      <rect x="110" y="10" width="80" height="80" fill="#faf5ff" stroke="#fff" strokeWidth="1" rx="5" ry="5" />
      <rect x="115" y="20" width="70" height="15" fill="#d8b4fe" rx="3" ry="3" />
      <text x="120" y="31" fill="#6b21a8" fontSize="10">Category A</text>
      <rect x="115" y="40" width="70" height="15" fill="#d8b4fe" rx="3" ry="3" />
      <text x="120" y="51" fill="#6b21a8" fontSize="10">Category B</text>
      <rect x="115" y="60" width="70" height="15" fill="#d8b4fe" rx="3" ry="3" />
      <text x="120" y="71" fill="#6b21a8" fontSize="10">Category C</text>
    </svg>
  );
};

export default ClassificationIcon;