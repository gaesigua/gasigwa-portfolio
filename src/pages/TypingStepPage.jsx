import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import { typingSteps } from '../data/typingCourseData.js';
import useTypingProgress from '../hooks/useTypingProgress.js';
import { ArrowLeft, Play, CheckCircle, Target, Award, Lock } from 'lucide-react';

const TypingStepPage = () => {
  const { stepNumber } = useParams();
  const stepIndex = parseInt(stepNumber, 10);
  const step = typingSteps.find(s => s.stepNumber === stepIndex);
  
  const { isStepUnlocked, progress } = useTypingProgress();

  if (!step) {
    return <Navigate to="/typing-academy" replace />;
  }

  const unlocked = isStepUnlocked(stepIndex, typingSteps);

  if (!unlocked) {
    return (
      <Layout>
        <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 text-center">
          <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-6">
            <Lock className="w-10 h-10 text-slate-400" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Step Locked</h1>
          <p className="text-slate-600 mb-8 max-w-md">
            You must complete the previous steps before accessing Step {stepIndex}.
          </p>
          <Link to="/typing-academy" className="bg-[#4a9ed9] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#388dc8] transition-colors">
            Return to Academy
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
        <Link 
          to="/typing-academy" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-[#4a9ed9] mb-8 transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Curriculum
        </Link>
        
        {/* Step Header */}
        <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#e0f0fa] to-transparent opacity-50 rounded-bl-[100px] -z-10" />
          
          <div className="inline-block px-3 py-1 bg-[#e0f0fa] text-[#4a9ed9] text-sm font-bold uppercase tracking-wider rounded-lg mb-4">
            Step {step.stepNumber}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            {step.title}
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl">
            {step.description}
          </p>
          
          {step.keys && step.keys.length > 0 && (
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="text-sm font-semibold text-slate-500 self-center mr-2">Focus Keys:</span>
              {step.keys.map(key => (
                <kbd key={key} className="px-4 py-2 bg-slate-100 border-2 border-slate-200 border-b-4 rounded-lg font-mono text-lg font-bold text-slate-700">
                  {key}
                </kbd>
              ))}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to={`/typing-academy/step/${step.stepNumber}/exercise/1`}
              className="bg-[#6ab3ea] hover:bg-[#4a9ed9] text-white font-semibold py-4 px-8 rounded-xl shadow-md transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Start Exercises
              <Play className="w-5 h-5 fill-current" />
            </Link>
          </div>
        </div>

        {/* Goals & Screens Layout */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Goals (Sidebar on desktop) */}
          <div className="md:col-span-1 space-y-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-[#4a9ed9]" />
                Learning Goals
              </h2>
              <ul className="space-y-3">
                {step.learningGoals.map((goal, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#6ab3ea] shrink-0" />
                    <span className="leading-relaxed">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Screens List */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-[#4a9ed9]" />
              Exercises ({step.screens.length})
            </h2>
            
            <div className="space-y-3">
              {step.screens.map((screen, index) => {
                const screenNumber = index + 1;
                const data = progress[`s${stepIndex}_sc${screenNumber}`];
                const isComplete = !!data?.completed;
                
                return (
                  <Link 
                    key={screenNumber}
                    to={`/typing-academy/step/${step.stepNumber}/exercise/${screenNumber}`}
                    className={`p-4 rounded-xl border transition-all duration-200 group flex items-center justify-between ${
                      isComplete 
                        ? 'bg-slate-50 border-slate-200 hover:border-[#6ab3ea]' 
                        : 'bg-white border-slate-200 hover:border-[#6ab3ea] hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm ${
                        isComplete ? 'bg-green-100 text-green-700' : 'bg-[#e0f0fa] text-[#4a9ed9]'
                      }`}>
                        {screenNumber}
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 capitalize">
                          {screen.type.replace('-', ' ')}
                        </h3>
                        <p className="text-xs text-slate-500 mt-0.5 truncate max-w-[200px] sm:max-w-xs">
                          {screen.tip}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      {isComplete ? (
                        <div className="flex items-center gap-3 text-sm">
                          <span className="hidden sm:inline text-slate-500 font-medium">
                            {data.bestWpm} WPM • {data.bestAccuracy}% Acc
                          </span>
                          <CheckCircle className="w-6 h-6 text-green-500" />
                        </div>
                      ) : (
                        <div className="text-slate-400 group-hover:text-[#4a9ed9] transition-colors">
                          <Play className="w-5 h-5" />
                        </div>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TypingStepPage;
