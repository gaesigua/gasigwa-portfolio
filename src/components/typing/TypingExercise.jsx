import React, { useState, useEffect } from 'react';
import BlockLettersMode from './modes/BlockLettersMode.jsx';
import FallingLetterMode from './modes/FallingLetterMode.jsx';
import GameInTreeMode from './modes/GameInTreeMode.jsx';
import StandardMode from './modes/StandardMode.jsx';
import { RotateCcw, ArrowRight, Award } from 'lucide-react';

const TypingExercise = ({ screenData, onComplete, onNext, isLastScreen }) => {
  const [completed, setCompleted] = useState(false);
  const [stats, setStats] = useState({ wpm: 0, accuracy: 0 });
  const [key, setKey] = useState(0); // Used to force re-render/reset

  // Reset state when screen changes
  useEffect(() => {
    setCompleted(false);
    setStats({ wpm: 0, accuracy: 0 });
    setKey(prev => prev + 1);
  }, [screenData]);

  const handleModeComplete = (wpm, accuracy) => {
    setStats({ wpm, accuracy });
    setCompleted(true);
    if (onComplete) {
      onComplete(wpm, accuracy);
    }
  };

  const handleReset = () => {
    setCompleted(false);
    setStats({ wpm: 0, accuracy: 0 });
    setKey(prev => prev + 1);
  };

  const renderMode = () => {
    const props = {
      key, // forces remount on reset or screen change
      lines: screenData.lines,
      onComplete: handleModeComplete,
    };

    switch (screenData.type) {
      case 'block-letters':
        return <BlockLettersMode {...props} />;
      case 'falling-letter':
        return <FallingLetterMode {...props} />;
      case 'game-in-tree':
        return <GameInTreeMode {...props} />;
      case 'standard':
      default:
        return <StandardMode {...props} />;
    }
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex-1 relative">
      
      {/* Exercise Tip Header */}
      <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center justify-center text-center">
        <p className="text-slate-600 font-medium">
          <span className="text-[#4a9ed9] font-bold mr-2">💡 Tip:</span>
          {screenData.tip}
        </p>
      </div>

      {/* Core Engine Area */}
      <div className="flex-1 relative overflow-hidden flex flex-col items-center justify-center p-8">
        {!completed ? (
          renderMode()
        ) : (
          <div className="flex flex-col items-center justify-center animate-in fade-in zoom-in duration-300">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 shadow-sm">
              <Award className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Exercise Complete!</h2>
            
            <div className="flex gap-8 my-8">
              <div className="text-center">
                <div className="text-4xl font-black text-[#4a9ed9]">{stats.wpm}</div>
                <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider mt-1">WPM</div>
              </div>
              <div className="w-px bg-slate-200"></div>
              <div className="text-center">
                <div className="text-4xl font-black text-[#4a9ed9]">{stats.accuracy}%</div>
                <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider mt-1">Accuracy</div>
              </div>
            </div>

            <div className="flex gap-4">
              <button 
                onClick={handleReset}
                className="px-6 py-3 rounded-xl font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                Retry
              </button>
              <button 
                onClick={onNext}
                className="px-6 py-3 rounded-xl font-semibold text-white bg-[#6ab3ea] hover:bg-[#4a9ed9] shadow-md transition-all hover:-translate-y-0.5 flex items-center gap-2"
              >
                {isLastScreen ? 'Finish Step' : 'Next Exercise'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

export default TypingExercise;
