import React, { useState } from 'react';
import { Clipboard, Check } from 'lucide-react';

const InstallLine: React.FC<{ packageName: string }> = ({ packageName }) => {
  const [hasCopied, setHasCopied] = useState(false);
  const command = `npm i ${packageName}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <div className="flex items-center justify-center p-2">
      <div 
        className="flex max-w-sm w-full items-center justify-between bg-white border border-gray-200 rounded-md py-1.5 px-2 font-mono text-xs shadow-sm hover:shadow transition-all duration-200 ease-in-out cursor-pointer"
        onClick={copyToClipboard}
        role="button"
        tabIndex={0}
        aria-label="Copy npm install command"
      >
        <div className="flex items-center font-bold space-x-2 overflow-x-auto">
          <span className="text-gray-400 select-none">$</span>
          <span className="text-blue-500 font-semibold">npm</span>
          <span className="text-green-600">i</span>
          <span className="text-pink-500">{packageName}</span>
        </div>
        <div className="p-1 flex-shrink-0" aria-hidden="true">
          {hasCopied ? (
            <Check className="size-4 text-emerald-500" />
          ) : (
            <Clipboard className="size-4 text-gray-400 hover:text-gray-600" />
          )}
        </div>
      </div>
    </div>
  );
};

export default InstallLine;
