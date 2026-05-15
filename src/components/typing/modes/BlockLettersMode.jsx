import React, { useMemo } from 'react';
import useTypingEngine from '../../../hooks/useTypingEngine';

const BlockLettersMode = ({ lines, onComplete }) => {
  // Join all lines with a space
  const fullText = useMemo(() => lines.join(' '), [lines]);
  
  const { currentIndex, errors } = useTypingEngine(fullText, onComplete);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="absolute top-4 right-4 text-sm font-medium text-slate-400">
        Errors: <span className="text-red-400">{errors}</span>
      </div>
      
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-8 max-w-3xl">
        {fullText.split('').map((char, index) => {
          let bgClass = "bg-slate-100 border-slate-200 text-slate-400";
          
          if (index < currentIndex) {
            bgClass = "bg-green-50 border-green-200 text-green-600"; // Typed correctly
          } else if (index === currentIndex) {
            bgClass = "bg-blue-50 border-[#6ab3ea] text-[#2f7fb5] shadow-sm scale-110 ring-2 ring-[#e0f0fa]"; // Current cursor
          }

          // If it's a space, render it as a block of identical size to characters
          if (char === ' ') {
            return (
              <div 
                key={index}
                className={`w-14 h-14 md:w-16 md:h-16 rounded-md border flex items-center justify-center transition-all duration-200 ${bgClass}`}
              >
                {index === currentIndex ? <div className="w-4 h-1 rounded-full bg-[#4a9ed9]" /> : <div className="w-4 h-1 rounded-full bg-slate-200" />}
              </div>
            );
          }

          return (
            <div 
              key={index}
              className={`w-14 h-14 md:w-16 md:h-16 rounded-md border flex items-center justify-center text-3xl md:text-4xl font-light font-mono transition-all duration-200 ${bgClass}`}
            >
              {char}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlockLettersMode;
