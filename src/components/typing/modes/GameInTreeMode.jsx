import React, { useMemo } from 'react';
import useTypingEngine from '../../../hooks/useTypingEngine';

const GameInTreeMode = ({ lines, onComplete }) => {
  // Join with space, but we need to know line breaks for rendering
  const fullText = useMemo(() => lines.join(' '), [lines]);
  const { currentIndex, errors } = useTypingEngine(fullText, onComplete);

  // Reconstruct the lines for rendering while maintaining the global index
  let charCount = 0;
  const renderedLines = lines.map((line, lineIndex) => {
    // Each line in the rendering string includes the space at the end, 
    // except the last line.
    const isLastLine = lineIndex === lines.length - 1;
    const lineLength = line.length + (isLastLine ? 0 : 1);
    
    const startIndex = charCount;
    charCount += lineLength;

    return {
      text: line,
      startIndex,
      hasTrailingSpace: !isLastLine
    };
  });

  return (
    <div className="w-full flex flex-col items-center justify-center py-8">
      <div className="absolute top-4 right-4 text-sm font-medium text-slate-400">
        Errors: <span className="text-red-400">{errors}</span>
      </div>

      <div className="flex flex-col items-center gap-6 md:gap-8">
        {renderedLines.map((lineObj, lineIdx) => {
          const isActiveLine = currentIndex >= lineObj.startIndex && currentIndex < lineObj.startIndex + lineObj.text.length + (lineObj.hasTrailingSpace ? 1 : 0);
          const isPastLine = currentIndex >= lineObj.startIndex + lineObj.text.length + (lineObj.hasTrailingSpace ? 1 : 0);
          
          return (
            <div 
              key={lineIdx}
              className={`flex transition-all duration-500 ${
                isActiveLine ? 'scale-110 drop-shadow-md' : 
                isPastLine ? 'opacity-30 scale-95' : 'opacity-70'
              }`}
            >
              <div className="bg-white px-6 py-3 rounded-2xl border-2 border-slate-100 shadow-sm flex gap-1">
                {lineObj.text.split('').map((char, charIdx) => {
                  const globalIdx = lineObj.startIndex + charIdx;
                  const isCurrentChar = globalIdx === currentIndex;
                  const isPastChar = globalIdx < currentIndex;

                  let charClass = "text-slate-400"; // Future
                  if (isPastChar) charClass = "text-green-500"; // Past
                  if (isCurrentChar) charClass = "text-white bg-[#4a9ed9] rounded-md shadow-sm"; // Current

                  return (
                    <span 
                      key={charIdx}
                      className={`text-2xl md:text-3xl font-mono font-bold w-6 text-center inline-block transition-colors ${charClass}`}
                    >
                      {char}
                    </span>
                  );
                })}
                
                {/* Render the trailing space at the end of the line if it's the active character */}
                {lineObj.hasTrailingSpace && (
                  <span className={`text-2xl md:text-3xl font-mono font-bold w-6 text-center inline-block transition-colors ${
                    currentIndex === lineObj.startIndex + lineObj.text.length ? "text-white bg-[#4a9ed9] rounded-md shadow-sm" : "text-transparent"
                  }`}>
                    _
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GameInTreeMode;
