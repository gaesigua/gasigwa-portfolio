import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { lessons } from '../data/lessons';
import { exams } from '../data/exams';
import { ArrowRight, Clock, ScrollText } from 'lucide-react';
import Layout from '../components/Layout.jsx';

// LessonCatalogPage — shows course overview: Parts + Final Exams section

const LessonCatalogPage = () => {
  const { lessonSlug } = useParams();

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

  // Resolve exam objects for this lesson (only if finalExams is defined)
  const lessonExams = (lesson.finalExams || [])
    .map(id => exams[id])
    .filter(Boolean);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 md:py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 capitalize">
          {lesson.title}
        </h1>
        <p className="text-lg text-slate-600 mb-12">{lesson.summary}</p>

        {/* ── Course Parts ── */}
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

        {/* ── Final Exams Section (only rendered if the lesson has exams) ── */}
        {lessonExams.length > 0 && (
          <div className="mt-16">
            {/* Section heading */}
            <div className="flex items-center gap-3 mb-6">
              <ScrollText className="w-6 h-6 text-blue-500" />
              <h2 className="text-2xl font-bold text-slate-900">Final Exams</h2>
            </div>
            <p className="text-slate-600 mb-6 -mt-2">
              Comprehensive, written assessments covering all material in this course.
            </p>

            <div className="space-y-4">
              {lessonExams.map(exam => (
                <Link
                  key={exam.id}
                  to={`/exam/${exam.id}`}
                  className="block bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-200 hover:border-blue-400 p-6 rounded-xl hover:shadow-md transition-all duration-200 group"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex-1">
                      {/* Badge */}
                      <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-2">
                        Final Exam
                      </span>

                      <h3 className="text-xl font-bold text-slate-900 mb-1">
                        {exam.title}
                      </h3>
                      <p className="text-slate-600 text-sm mb-3">{exam.description}</p>

                      {/* Meta info */}
                      <div className="flex items-center gap-4 text-sm text-slate-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4 text-blue-500" />
                          {exam.durationMinutes} minutes
                        </span>
                        <span className="flex items-center gap-1">
                          <ScrollText className="w-4 h-4 text-blue-500" />
                          {exam.parts.length} parts
                        </span>
                      </div>
                    </div>

                    {/* CTA arrow */}
                    <div className="ml-4 flex items-center gap-1 font-semibold text-blue-600 group-hover:text-blue-700 whitespace-nowrap text-sm">
                      Take Exam
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 duration-200" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default LessonCatalogPage;
