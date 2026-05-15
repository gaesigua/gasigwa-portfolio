import { useState, useCallback } from 'react';

const STORAGE_KEY = 'touchtype-academy-progress';

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveProgress(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export default function useTypingProgress() {
  const [progress, setProgress] = useState(loadProgress);

  const markScreenComplete = useCallback((stepNumber, screenNumber, wpm, accuracy) => {
    setProgress(prev => {
      const key = `s${stepNumber}_sc${screenNumber}`;
      const existing = prev[key] || {};
      const updated = {
        ...prev,
        [key]: {
          completed: true,
          bestWpm: Math.max(wpm, existing.bestWpm || 0),
          bestAccuracy: Math.max(accuracy, existing.bestAccuracy || 0),
          attempts: (existing.attempts || 0) + 1,
        },
      };
      saveProgress(updated);
      return updated;
    });
  }, []);

  const isScreenComplete = useCallback((stepNumber, screenNumber) => {
    return !!progress[`s${stepNumber}_sc${screenNumber}`]?.completed;
  }, [progress]);

  const isStepComplete = useCallback((stepNumber, totalScreens) => {
    for (let i = 1; i <= totalScreens; i++) {
      if (!progress[`s${stepNumber}_sc${i}`]?.completed) return false;
    }
    return true;
  }, [progress]);

  const isStepUnlocked = useCallback((stepNumber, stepsData) => {
    if (stepNumber === 1) return true;
    const prevStep = stepsData.find(s => s.stepNumber === stepNumber - 1);
    if (!prevStep) return true;
    return isStepComplete(stepNumber - 1, prevStep.screens.length);
  }, [isStepComplete]);

  const getStepStats = useCallback((stepNumber, totalScreens) => {
    let completedScreens = 0;
    let totalWpm = 0;
    let totalAccuracy = 0;
    for (let i = 1; i <= totalScreens; i++) {
      const data = progress[`s${stepNumber}_sc${i}`];
      if (data?.completed) {
        completedScreens++;
        totalWpm += data.bestWpm || 0;
        totalAccuracy += data.bestAccuracy || 0;
      }
    }
    return {
      completedScreens,
      totalScreens,
      avgWpm: completedScreens > 0 ? Math.round(totalWpm / completedScreens) : 0,
      avgAccuracy: completedScreens > 0 ? Math.round(totalAccuracy / completedScreens) : 0,
    };
  }, [progress]);

  const getOverallProgress = useCallback((stepsData) => {
    let completed = 0;
    for (const step of stepsData) {
      if (isStepComplete(step.stepNumber, step.screens.length)) completed++;
    }
    return { completedSteps: completed, totalSteps: stepsData.length };
  }, [isStepComplete]);

  const resetProgress = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setProgress({});
  }, []);

  return {
    progress,
    markScreenComplete,
    isScreenComplete,
    isStepComplete,
    isStepUnlocked,
    getStepStats,
    getOverallProgress,
    resetProgress,
  };
}
