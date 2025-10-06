import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LessonCatalogPage from './pages/LessonCatalogPage'; // Renamed for clarity
import LessonSectionPage from './pages/LessonSectionPage'; // The new page for content

// Main App Component
const App = () => {
  return (
    <Routes>
      {/* When the URL is exactly "/", render the HomePage component */}
      <Route path="/" element={<HomePage />} />

      {/* When the URL is "/lessons/some-slug", render the LessonCatalogPage */}
      {/* The ":lessonSlug" part is a URL parameter that we can access */}
      <Route path="/lessons/:lessonSlug" element={<LessonCatalogPage />} />

      {/* This is the new route for individual lesson sections */}
      <Route path="/lessons/:lessonSlug/:sectionSlug" element={<LessonSectionPage />} />

      <Route path="/lessons/:lessonSlug/:sectionSlug/:pageSlug" element={<LessonSectionPage />} />
    </Routes>
  );
};

export default App;