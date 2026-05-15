import React, { useMemo } from 'react';
import useTypingEngine from '../../../hooks/useTypingEngine';

const StandardMode = ({ lines, onComplete }) => {
  // Join all lines with a space for a continuous standard text
  const fullText = useMemo(() => lines.join(' '), [lines]);
  
  const { currentIndex, errors } = useTypingEngine(fullText, onComplete);

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
      <div className="text-right w-full mb-4 text-sm font-medium text-slate-400">
        Errors: <span className="text-red-400">{errors}</span>
      </div>
      
      <div 
        className="text-3xl md:text-4xl font-mono leading-relaxed tracking-wide text-slate-300 break-words select-none"
        style={{ wordSpacing: '0.25em' }}
      >
        {fullText.split('').map((char, index) => {
          let className = "";
          
          if (index < currentIndex) {
            className = "text-slate-800"; // Typed correctly
          } else if (index === currentIndex) {
            className = "bg-[#4a9ed9] text-white rounded-sm"; // Current cursor
          }
          
          // Show spaces explicitly when they are the current char, or keep them normal
          const displayChar = char === ' ' && index === currentIndex ? '_' : char;

          return (
            <span key={index} className={className}>
              {displayChar}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default StandardMode;
