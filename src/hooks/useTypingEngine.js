import { useState, useEffect, useCallback } from 'react';

export default function useTypingEngine(textToType, onComplete) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [errors, setErrors] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const handleKeyDown = useCallback((e) => {
    // Ignore modifier keys
    if (e.key === 'Shift' || e.key === 'Control' || e.key === 'Alt' || e.key === 'Meta') return;
    
    // Prevent default scrolling for Space
    if (e.key === ' ') e.preventDefault();

    if (currentIndex >= textToType.length) return;

    if (!startTime) {
      setStartTime(Date.now());
    }

    const expectedChar = textToType[currentIndex];
    
    if (e.key === expectedChar) {
      // Correct character
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      
      if (nextIndex === textToType.length) {
        setEndTime(Date.now());
      }
    } else {
      // Wrong character
      setErrors(prev => prev + 1);
    }
  }, [currentIndex, textToType, startTime]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Call onComplete when finished
  useEffect(() => {
    if (currentIndex === textToType.length && textToType.length > 0 && endTime && startTime) {
      const timeInMinutes = (endTime - startTime) / 60000;
      const wpm = timeInMinutes > 0 ? Math.round((textToType.length / 5) / timeInMinutes) : 0;
      
      const totalKeystrokes = textToType.length + errors;
      const accuracy = totalKeystrokes > 0 ? Math.round((textToType.length / totalKeystrokes) * 100) : 0;
      
      // Small delay so user sees the last character typed before the completion screen jumps in
      const timer = setTimeout(() => {
        onComplete(wpm, accuracy);
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [currentIndex, textToType.length, startTime, endTime, errors, onComplete]);

  return {
    currentIndex,
    errors,
    isComplete: currentIndex === textToType.length
  };
}
