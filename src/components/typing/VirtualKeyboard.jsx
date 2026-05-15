import React, { useState, useEffect } from 'react';

// Finger color mapping matching standard touch-typing pedagogy
const fingerColors = {
  leftPinky: 'bg-red-200 border-red-300 text-red-800',
  leftRing: 'bg-orange-200 border-orange-300 text-orange-800',
  leftMiddle: 'bg-yellow-200 border-yellow-300 text-yellow-800',
  leftIndex: 'bg-green-200 border-green-300 text-green-800',
  rightIndex: 'bg-blue-200 border-blue-300 text-blue-800',
  rightMiddle: 'bg-indigo-200 border-indigo-300 text-indigo-800',
  rightRing: 'bg-purple-200 border-purple-300 text-purple-800',
  rightPinky: 'bg-pink-200 border-pink-300 text-pink-800',
  thumbs: 'bg-slate-200 border-slate-300 text-slate-800', // Spacebar
  default: 'bg-white border-slate-200 text-slate-600'
};

const keyMap = [
  // Row 1: Numbers
  [
    { char: '1', finger: 'leftPinky' },
    { char: '2', finger: 'leftRing' },
    { char: '3', finger: 'leftMiddle' },
    { char: '4', finger: 'leftIndex' },
    { char: '5', finger: 'leftIndex' },
    { char: '6', finger: 'rightIndex' },
    { char: '7', finger: 'rightIndex' },
    { char: '8', finger: 'rightMiddle' },
    { char: '9', finger: 'rightRing' },
    { char: '0', finger: 'rightPinky' },
    { char: '-', finger: 'rightPinky' },
    { char: '=', finger: 'rightPinky' }
  ],
  // Row 2: QWERTY
  [
    { char: 'q', finger: 'leftPinky' },
    { char: 'w', finger: 'leftRing' },
    { char: 'e', finger: 'leftMiddle' },
    { char: 'r', finger: 'leftIndex' },
    { char: 't', finger: 'leftIndex' },
    { char: 'y', finger: 'rightIndex' },
    { char: 'u', finger: 'rightIndex' },
    { char: 'i', finger: 'rightMiddle' },
    { char: 'o', finger: 'rightRing' },
    { char: 'p', finger: 'rightPinky' },
    { char: '[', finger: 'rightPinky' },
    { char: ']', finger: 'rightPinky' }
  ],
  // Row 3: ASDF (Home Row)
  [
    { char: 'a', finger: 'leftPinky', isHome: true },
    { char: 's', finger: 'leftRing', isHome: true },
    { char: 'd', finger: 'leftMiddle', isHome: true },
    { char: 'f', finger: 'leftIndex', isHome: true, hasBump: true },
    { char: 'g', finger: 'leftIndex' },
    { char: 'h', finger: 'rightIndex' },
    { char: 'j', finger: 'rightIndex', isHome: true, hasBump: true },
    { char: 'k', finger: 'rightMiddle', isHome: true },
    { char: 'l', finger: 'rightRing', isHome: true },
    { char: ';', finger: 'rightPinky', isHome: true },
    { char: "'", finger: 'rightPinky' }
  ],
  // Row 4: ZXCV
  [
    { char: 'z', finger: 'leftPinky' },
    { char: 'x', finger: 'leftRing' },
    { char: 'c', finger: 'leftMiddle' },
    { char: 'v', finger: 'leftIndex' },
    { char: 'b', finger: 'leftIndex' },
    { char: 'n', finger: 'rightIndex' },
    { char: 'm', finger: 'rightIndex' },
    { char: ',', finger: 'rightMiddle' },
    { char: '.', finger: 'rightRing' },
    { char: '/', finger: 'rightPinky' }
  ]
];

const VirtualKeyboard = () => {
  const [activeKey, setActiveKey] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      setActiveKey(e.key.toLowerCase());
    };
    const handleKeyUp = () => {
      setActiveKey(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-inner overflow-x-auto">
      <div className="flex flex-col gap-2 min-w-[600px]">
        {keyMap.map((row, rowIndex) => (
          <div 
            key={rowIndex} 
            className="flex justify-center gap-2"
            style={{ paddingLeft: `${rowIndex * 1.5}rem` }}
          >
            {row.map((keyObj) => {
              const isPressed = activeKey === keyObj.char;
              const colorClass = fingerColors[keyObj.finger] || fingerColors.default;
              
              return (
                <div
                  key={keyObj.char}
                  className={`relative w-12 h-12 flex items-center justify-center rounded-lg border-b-4 font-mono font-bold text-lg uppercase transition-all duration-75 ${
                    isPressed 
                      ? `${colorClass} border-b-0 translate-y-1 opacity-80 brightness-90` 
                      : `${colorClass}`
                  }`}
                >
                  {keyObj.char}
                  {keyObj.hasBump && (
                    <div className="absolute bottom-1 w-3 h-0.5 bg-current opacity-40 rounded-full" />
                  )}
                </div>
              );
            })}
          </div>
        ))}
        {/* Spacebar Row */}
        <div className="flex justify-center mt-1">
          <div
            className={`w-96 h-12 flex items-center justify-center rounded-lg border-b-4 transition-all duration-75 ${
              activeKey === ' ' 
                ? `${fingerColors.thumbs} border-b-0 translate-y-1 brightness-95` 
                : `${fingerColors.thumbs}`
            }`}
          />
        </div>
      </div>
      
      {/* Legend */}
      <div className="flex justify-center gap-4 mt-6 flex-wrap px-4">
        <div className="flex items-center gap-2"><div className={`w-3 h-3 rounded-full ${fingerColors.leftPinky} border-none`}/> <span className="text-xs text-slate-500">Pinky</span></div>
        <div className="flex items-center gap-2"><div className={`w-3 h-3 rounded-full ${fingerColors.leftRing} border-none`}/> <span className="text-xs text-slate-500">Ring</span></div>
        <div className="flex items-center gap-2"><div className={`w-3 h-3 rounded-full ${fingerColors.leftMiddle} border-none`}/> <span className="text-xs text-slate-500">Middle</span></div>
        <div className="flex items-center gap-2"><div className={`w-3 h-3 rounded-full ${fingerColors.leftIndex} border-none`}/> <span className="text-xs text-slate-500">Index</span></div>
      </div>
    </div>
  );
};

export default VirtualKeyboard;
