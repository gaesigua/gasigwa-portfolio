import React, { useMemo, useRef, useEffect } from 'react';
import useTypingEngine from '../../../hooks/useTypingEngine';

const FallingLetterMode = ({ lines, onComplete }) => {
  const fullText = useMemo(() => lines.join(' '), [lines]);
  const { currentIndex, errors } = useTypingEngine(fullText, onComplete);
  
  const containerRef = useRef(null);
  const activeCharRef = useRef(null);

  // Auto-scroll to keep the active character centered
  useEffect(() => {
    if (activeCharRef.current && containerRef.current) {
      const container = containerRef.current;
      const activeChar = activeCharRef.current;
      
      const scrollLeft = activeChar.offsetLeft - container.offsetWidth / 2 + activeChar.offsetWidth / 2;
      
      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900 rounded-xl relative overflow-hidden p-8 shadow-inner">
      <div className="absolute top-4 right-4 text-sm font-medium text-slate-400 z-10">
        Errors: <span className="text-red-400">{errors}</span>
      </div>
      
      {/* Target Zone Indicator */}
      <div className="absolute left-1/2 top-0 bottom-0 w-16 -translate-x-1/2 bg-white/5 border-x border-white/10 pointer-events-none z-0" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -mt-12 w-16 h-24 border border-[#6ab3ea]/50 rounded-md pointer-events-none z-0" />

      {/* Scrolling Text Container */}
      <div 
        ref={containerRef}
        className="w-full overflow-hidden flex items-center whitespace-nowrap z-10 relative py-8"
        style={{ scrollBehavior: 'smooth' }}
      >
        <div className="flex px-[50%]">
          {fullText.split('').map((char, index) => {
            const isCurrent = index === currentIndex;
            const isPast = index < currentIndex;
            
            let colorClass = "text-slate-600";
            if (isPast) colorClass = "text-slate-800 opacity-20";
            if (isCurrent) colorClass = "text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] scale-125";
            
            return (
              <div 
                key={index}
                ref={isCurrent ? activeCharRef : null}
                className={`text-4xl md:text-5xl font-mono font-light w-12 text-center transition-all duration-300 ${colorClass}`}
              >
                {char === ' ' ? '_' : char}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FallingLetterMode;
