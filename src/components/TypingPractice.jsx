import React, { useState, useEffect, useRef } from 'react';

const TypingPractice = ({ practiceText, onComplete }) => {
  const [userInput, setUserInput] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [stats, setStats] = useState({ wpm: 0, accuracy: 100 });
  const inputRef = useRef(null);

  useEffect(() => {
    // Reset state when practiceText changes
    setUserInput('');
    setStartTime(null);
    setIsCompleted(false);
    setStats({ wpm: 0, accuracy: 100 });
    // Focus input on load
    if (inputRef.current) inputRef.current.focus();
  }, [practiceText]);

  const calculateStats = (input) => {
    // Accuracy
    let correctChars = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === practiceText[i]) correctChars++;
    }
    const accuracy = input.length > 0 ? Math.round((correctChars / input.length) * 100) : 100;

    // WPM
    let wpm = 0;
    if (startTime) {
        const timeElapsedMin = (Date.now() - startTime) / 60000;
        // Standard WPM calculation: (characters / 5) / minutes
        if (timeElapsedMin > 0) {
            wpm = Math.round((input.length / 5) / timeElapsedMin);
        }
    }

    return { wpm, accuracy };
  };

  const handleChange = (e) => {
    const input = e.target.value;
    
    // Start timer on first keystroke
    if (!startTime && input.length > 0) {
        setStartTime(Date.now());
    }

    // Limit input to length of practice text
    if (input.length <= practiceText.length) {
        setUserInput(input);
        setStats(calculateStats(input));

        if (input.length === practiceText.length) {
            setIsCompleted(true);
            if (onComplete) onComplete({ ...calculateStats(input), totalChars: practiceText.length });
        }
    }
  };

  const handleRestart = () => {
      setUserInput('');
      setStartTime(null);
      setIsCompleted(false);
      setStats({ wpm: 0, accuracy: 100 });
      if (inputRef.current) inputRef.current.focus();
  };

  // Render text with highlighting
  const renderText = () => {
    return practiceText.split('').map((char, index) => {
      let className = "font-mono text-2xl transition-colors duration-200 ";
      const inputChar = userInput[index];

      if (inputChar == null) {
        // Not yet typed
        className += "text-neutral-500";
      } else if (inputChar === char) {
        // Correct
        className += "text-green-400 bg-green-900/20";
      } else {
        // Incorrect
        className += "text-red-400 bg-red-900/20";
      }

      // Cursor indicator
      if (index === userInput.length && !isCompleted) {
          className += " border-b-2 border-brand-blue animate-pulse";
      }

      return <span key={index} className={className}>{char}</span>;
    });
  };

  return (
    <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800 shadow-lg mt-8">
      <div className="mb-6 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-neutral-200">Typing Practice</h2>
          <div className="flex gap-4 text-sm font-mono text-neutral-400">
              <span>WPM: <span className="text-brand-blue font-bold">{stats.wpm}</span></span>
              <span>Accuracy: <span className={stats.accuracy >= 90 ? "text-green-400" : "text-yellow-400"}>{stats.accuracy}%</span></span>
          </div>
      </div>

      <div 
        className="mb-8 p-6 bg-neutral-950 rounded-lg border border-neutral-800 min-h-[150px] whitespace-pre-wrap break-words leading-relaxed cursor-text relative"
        onClick={() => inputRef.current?.focus()}
      >
        {renderText()}
        
        {/* Hidden Input for capturing keystrokes */}
        <input 
            ref={inputRef}
            type="text"
            value={userInput}
            onChange={handleChange}
            className="absolute opacity-0 top-0 left-0 w-full h-full cursor-text"
            autoFocus
            disabled={isCompleted}
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
        />
      </div>

      {isCompleted && (
          <div className="text-center animate-fade-in-up">
              <p className="text-green-400 text-lg font-bold mb-4">Lesson Complete!</p>
              <button 
                onClick={handleRestart}
                className="bg-brand-blue hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
            >
                Restart Lesson
              </button>
          </div>
      )}

      <div className="mt-4 text-xs text-neutral-600 text-center">
          Click the text box and start typing. 
      </div>
    </div>
  );
};

export default TypingPractice;
