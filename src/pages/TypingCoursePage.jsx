import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import { typingSteps } from '../data/typingCourseData.js';
import useTypingProgress from '../hooks/useTypingProgress.js';
import { Keyboard, Lock, Play, Award, CheckCircle } from 'lucide-react';

const TypingCoursePage = () => {
  const { isStepUnlocked, getStepStats, getOverallProgress } = useTypingProgress();

  const { completedSteps, totalSteps } = getOverallProgress(typingSteps);
  const progressPercent = Math.round((completedSteps / totalSteps) * 100);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 md:py-16">
        {/* Header Section */}
        <div className="mb-12 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-[#e0f0fa] text-[#4a9ed9] rounded-xl">
              <Keyboard className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
              Touch Typing
            </h1>
          </div>
          <p className="text-lg text-slate-600 mb-6 max-w-3xl">
            Master the keyboard through our interactive 20-step curriculum. 
            Build muscle memory, increase your WPM, and achieve complete typing fluency.
          </p>

          {/* Progress Bar */}
          <div className="flex items-center gap-4 mb-2">
            <span className="font-semibold text-slate-700">Course Progress</span>
            <span className="text-sm font-bold text-[#4a9ed9] bg-[#e0f0fa] px-2 py-0.5 rounded-full">
              {progressPercent}%
            </span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-3 mb-4 overflow-hidden">
            <div 
              className="bg-[#4a9ed9] h-3 rounded-full transition-all duration-1000 ease-out" 
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
          <p className="text-sm text-slate-500">
            Completed {completedSteps} of {totalSteps} steps
          </p>
        </div>

        {/* Course Steps */}
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <Award className="w-6 h-6 text-[#4a9ed9]" />
          Curriculum Steps
        </h2>

        <div className="space-y-4">
          {typingSteps.map((step) => {
            const unlocked = isStepUnlocked(step.stepNumber, typingSteps);
            const stats = getStepStats(step.stepNumber, step.screens.length);
            const isFullyComplete = stats.completedScreens === stats.totalScreens;

            return (
              <div 
                key={step.stepNumber}
                className={`relative bg-white p-6 rounded-xl border transition-all duration-200 ${
                  unlocked 
                    ? 'border-slate-200 hover:border-[#6ab3ea] hover:shadow-md' 
                    : 'border-slate-100 bg-slate-50 opacity-75'
                }`}
              >
                <div className="flex justify-between items-start md:items-center flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className={`text-sm font-bold px-2.5 py-0.5 rounded-full ${
                        isFullyComplete ? 'bg-green-100 text-green-700' :
                        unlocked ? 'bg-[#e0f0fa] text-[#4a9ed9]' : 'bg-slate-200 text-slate-500'
                      }`}>
                        Step {step.stepNumber}
                      </span>
                      {isFullyComplete && (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      )}
                      {!unlocked && (
                        <Lock className="w-4 h-4 text-slate-400" />
                      )}
                    </div>
                    <h3 className={`text-2xl font-semibold mt-2 ${unlocked ? 'text-slate-900' : 'text-slate-500'}`}>
                      {step.title}
                    </h3>
                    <p className="text-slate-600 mt-2 line-clamp-2">
                      {step.description}
                    </p>
                    
                    {unlocked && (
                      <div className="flex items-center gap-4 mt-4 text-sm text-slate-500">
                        <span>{step.screens.length} exercises</span>
                        {stats.completedScreens > 0 && (
                          <>
                            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                            <span>{stats.completedScreens}/{stats.totalScreens} done</span>
                          </>
                        )}
                        {stats.avgWpm > 0 && (
                          <>
                            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                            <span>{stats.avgWpm} WPM</span>
                            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                            <span>{stats.avgAccuracy}% Acc</span>
                          </>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="w-full md:w-auto">
                    {unlocked ? (
                      <Link
                        to={`/typing-academy/step/${step.stepNumber}`}
                        className={`w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                          isFullyComplete 
                            ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' 
                            : 'bg-[#4a9ed9] text-white hover:bg-[#388dc8] shadow-sm'
                        }`}
                      >
                        {isFullyComplete ? 'Review Step' : (stats.completedScreens > 0 ? 'Continue' : 'Start Step')}
                        <Play className="w-4 h-4" />
                      </Link>
                    ) : (
                      <button 
                        disabled
                        className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold bg-slate-100 text-slate-400 cursor-not-allowed"
                      >
                        Locked
                        <Lock className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default TypingCoursePage;
