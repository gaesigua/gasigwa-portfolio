import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { lessons } from '../data/lessons'; // Import the lesson data to find the title
import { ArrowRight } from 'lucide-react';
import Layout from '../components/Layout.jsx';


// LessonPage component

const LessonCatalogPage = () => {
  // The useParams hook reads the dynamic parameters from the URL
  // The key 'lessonSlug' matches the ':lessonSlug' in our Route path
  const { lessonSlug } = useParams();

  // Find the current lesson's metadata from our data file
  const lesson = lessons.find(l => l.slug === lessonSlug);

  if (!lesson) {
    return (
      <Layout>
        <div className="min-h-screen bg-white text-slate-800 p-8">
        <h1 className="text-4xl font-bold text-red-500">Lesson not found!</h1>
        <Link to="/" className="text-[#2f7fb5] hover:text-[#21628d] hover:underline mt-4 inline-block">
          &larr; Back to Home
        </Link>
      </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 md:py-16">
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 capitalize">{lesson.title}</h1>
        <p className="text-lg text-slate-600 mb-12">{lesson.summary}</p>
        <div className="space-y-4">
          {lesson.sections?.map((section, index) => (
            <Link
              key={section.slug}
              to={`/lessons/${lesson.slug}/${section.slug}/${section.pages[0].slug}`}
              className="block bg-white p-6 rounded-xl border border-slate-200 hover:border-[#6ab3ea] hover:shadow-sm transition-all duration-200"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-slate-500">Part {index + 1}</p>
                  <h2 className="text-2xl font-semibold text-slate-900">{section.title}</h2>
                  <p className="text-slate-600 mt-1">{section.summary}</p>
                </div>
                <ArrowRight className="w-6 h-6 text-[#4a9ed9]" />
              </div>
            </Link>
          ))}
        </div>
      </div>             
    </Layout>
  );
};

export default LessonCatalogPage;
