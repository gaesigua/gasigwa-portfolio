import React, { useState } from 'react';
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import { typingSteps } from '../data/typingCourseData.js';
import useTypingProgress from '../hooks/useTypingProgress.js';
import TypingExercise from '../components/typing/TypingExercise.jsx';
import VirtualKeyboard from '../components/typing/VirtualKeyboard.jsx';
import { ArrowLeft, X, Keyboard as KeyboardIcon } from 'lucide-react';

const TypingExercisePage = () => {
  const { stepNumber, screenNumber } = useParams();
  const navigate = useNavigate();
  const stepIndex = parseInt(stepNumber, 10);
  const screenIdx = parseInt(screenNumber, 10);
  const [showKeyboard, setShowKeyboard] = useState(true);
  
  const step = typingSteps.find(s => s.stepNumber === stepIndex);
  const { isStepUnlocked, markScreenComplete } = useTypingProgress();

  if (!step || screenIdx < 1 || screenIdx > step.screens.length) {
    return <Navigate to={`/typing-academy/step/${stepIndex}`} replace />;
  }

  if (!isStepUnlocked(stepIndex, typingSteps)) {
    return <Navigate to={`/typing-academy/step/${stepIndex}`} replace />;
  }

  const screenData = step.screens[screenIdx - 1];

  const handleComplete = (wpm, accuracy) => {
    markScreenComplete(stepIndex, screenIdx, wpm, accuracy);
  };

  const handleNext = () => {
    if (screenIdx < step.screens.length) {
      navigate(`/typing-academy/step/${stepIndex}/exercise/${screenIdx + 1}`);
    } else {
      navigate(`/typing-academy/step/${stepIndex}`);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Top Navigation Bar */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between shadow-sm sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <Link 
            to={`/typing-academy/step/${stepIndex}`}
            className="text-slate-500 hover:text-slate-700 transition-colors bg-slate-100 hover:bg-slate-200 p-2 rounded-full"
            title="Exit Exercise"
          >
            <X className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="font-bold text-slate-800 leading-tight">Step {step.stepNumber}: {step.title}</h1>
            <div className="text-sm text-slate-500 font-medium">
              Exercise {screenIdx} of {step.screens.length} • <span className="capitalize">{screenData.type.replace('-', ' ')}</span>
            </div>
          </div>
        </div>
        
        {/* Progress indicators dots */}
        <div className="hidden md:flex gap-1.5">
          {step.screens.map((_, i) => (
            <div 
              key={i} 
              className={`w-2 h-2 rounded-full ${
                i + 1 === screenIdx ? 'bg-[#4a9ed9] scale-125' : 
                i + 1 < screenIdx ? 'bg-green-400' : 'bg-slate-200'
              } transition-all duration-300`}
            />
          ))}
        </div>
      </header>

      {/* Main Exercise Area */}
      <main className="flex-1 flex flex-col w-full max-w-6xl mx-auto p-4 md:p-8">
        <TypingExercise 
          screenData={screenData} 
          onComplete={handleComplete}
          onNext={handleNext}
          isLastScreen={screenIdx === step.screens.length}
        />

        {/* Virtual Keyboard Toggle */}
        <div className="mt-8 flex flex-col items-center">
          <button 
            onClick={() => setShowKeyboard(!showKeyboard)}
            className="text-sm font-medium text-slate-500 hover:text-[#4a9ed9] flex items-center gap-2 mb-4 transition-colors"
          >
            <KeyboardIcon className="w-4 h-4" />
            {showKeyboard ? 'Hide Keyboard' : 'Show Keyboard'}
          </button>
          
          {showKeyboard && (
            <div className="w-full animate-in slide-in-from-bottom-4 fade-in duration-300">
              <VirtualKeyboard />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default TypingExercisePage;
