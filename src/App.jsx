import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LessonCatalogPage from './pages/LessonCatalogPage';
import LessonSectionPage from './pages/LessonSectionPage';
import QuizPage from './pages/QuizPage';
import ExamPage from './pages/ExamPage';
import TypingCoursePage from './pages/TypingCoursePage';
import TypingStepPage from './pages/TypingStepPage';
import TypingExercisePage from './pages/TypingExercisePage';

// Main App Component
const App = () => {
  return (
    <Routes>
      {/* When the URL is exactly "/", render the HomePage component */}
      <Route path="/" element={<HomePage />} />

      {/* Typing Academy Routes */}
      <Route path="/typing-academy" element={<TypingCoursePage />} />
      <Route path="/typing-academy/step/:stepNumber" element={<TypingStepPage />} />
      <Route path="/typing-academy/step/:stepNumber/exercise/:screenNumber" element={<TypingExercisePage />} />

      {/* When the URL is "/lessons/some-slug", render the LessonCatalogPage */}
      {/* The ":lessonSlug" part is a URL parameter that we can access */}
      <Route path="/lessons/:lessonSlug" element={<LessonCatalogPage />} />

      {/* This is the new route for individual lesson sections */}
      <Route path="/lessons/:lessonSlug/:sectionSlug" element={<LessonSectionPage />} />

      <Route path="/lessons/:lessonSlug/:sectionSlug/:pageSlug" element={<LessonSectionPage />} />

      {/* or for param-based: <Route path="/quiz/:id" element={<QuizPage />} /> */}
      <Route path="/quiz/:quizId" element={<QuizPage />} />

      {/* Route for Final Exams */}
      <Route path="/exam/:examId" element={<ExamPage />} />
      
    </Routes>
  );
};

export default App;