import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { lessons } from '../data/lessons';
import Layout from '../components/Layout.jsx';
import QuizPlayer from '../components/QuizPlayer.jsx';
import quizzes from '../data/quizzes'; // adjust path if your quiz file is elsewhere

const LessonSectionPage = () => {
  const { lessonSlug, sectionSlug, pageSlug } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Quiz UI state (hooks must be top-level, not inside branches)
  const [showQuiz, setShowQuiz] = useState(false);

  // Find the lesson, section, and page based on the slugs
  const lesson = lessons.find(l => l.slug === lessonSlug);
  const section = lesson?.sections.find(s => s.slug === sectionSlug);

  // If no pageSlug is provided -> overview mode
  const isOverview = !pageSlug;

  // When pageSlug is provided, find the specific page index and page
  const pageIndex = isOverview ? undefined : section?.pages.findIndex(p => p.slug === pageSlug);
  const page = isOverview ? null : section?.pages[pageIndex];

  // Determine whether this page has a quiz id
  const hasQuiz = !!page?.quiz;
  // Resolve quiz data for this page (expand this as you add more quizzes)
  // const quizData = page?.quiz === 'dc-vs-ac' ? dcVsAcQuiz : null;
  
  // Resolve quiz data dynamically from quizzes map
  
  const quizData = page?.quiz ? quizzes[page.quiz] ?? null : null;

  const handleQuizFinish = (answers) => {
    const score = answers.filter(a => a.correct).length;
    // store score / progress here (localStorage / backend)
    console.log('Quiz finished', { score, total: answers.length, answers });
    setShowQuiz(false);
  };

  // Next / Prev logic (only relevant in page mode)
  let nextPage = null;
  let nextSection = null;
  let prevPage = null;
  let prevSection = null;

  if (!isOverview && section && pageIndex !== undefined && Number.isInteger(pageIndex)) {
    // Next page in current section
    if (pageIndex < section.pages.length - 1) {
      nextPage = section.pages[pageIndex + 1];
    } else {
      // First page of the next section (if exists)
      const sectionIndex = lesson.sections.findIndex(s => s.slug === sectionSlug);
      if (sectionIndex < lesson.sections.length - 1) {
        nextSection = lesson.sections[sectionIndex + 1];
      }
    }
    // Previous page in current section
    if (pageIndex > 0) {
      prevPage = section.pages[pageIndex - 1];
    } else {
      // Last page of the previous section (if exists)
      const sectionIndex = lesson.sections.findIndex(s => s.slug === sectionSlug);
      if (sectionIndex > 0) {
        prevSection = lesson.sections[sectionIndex - 1];
        prevPage = prevSection.pages[prevSection.pages.length - 1];
      }
    }
  }

  // Fetch content when component mounts or when slugs change
  useEffect(() => {
    setError(null);
    setContent('');
    if (isOverview) {
      setIsLoading(false);
      return;
    }

    if (!lesson || !section || !page) {
      setError('Lesson, section, or page not found.');
      setIsLoading(false);
      return;
    }

    const fetchContent = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/lessons/${lessonSlug}/${sectionSlug}/${pageSlug}.md`);
        if (!response.ok) {
          throw new Error('Content not found.');
        }
        const text = await response.text();
        setContent(text);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContent();
  }, [lessonSlug, sectionSlug, pageSlug, isOverview, lesson, section, page]);

  // helpers to build route for previous / next
  const getPrevRoute = () => {
    if (!prevPage) return null;
    const targetSectionSlug = prevSection ? prevSection.slug : sectionSlug;
    return `/lessons/${lessonSlug}/${targetSectionSlug}/${prevPage.slug}`;
  };

  const getNextRoute = () => {
    if (nextPage) return `/lessons/${lessonSlug}/${sectionSlug}/${nextPage.slug}`;
    if (nextSection) return `/lessons/${lessonSlug}/${nextSection.slug}/${nextSection.pages[0].slug}`;
    return null;
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back to lesson (catalog) */}
        <Link to={`/lessons/${lessonSlug}`} className="text-blue-300 hover:underline mb-6 inline-block">
          &larr; Back to {lesson?.title}
        </Link>

        {/* Overview mode: section landing with list of pages */}
        {isOverview ? (
          <>
            <header className="mb-6">
              <h1 className="text-3xl font-extrabold text-neutral-50">{section?.title}</h1>
              <p className="text-neutral-400 mt-2">{section?.summary}</p>
            </header>

            <div className="space-y-4">
              {section?.pages.map((p, idx) => (
                <Link
                  key={p.slug}
                  to={`/lessons/${lessonSlug}/${sectionSlug}/${p.slug}`}
                  className="block bg-neutral-900 p-6 rounded-xl border border-neutral-800 hover:border-blue-400 transition"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-neutral-500">Page {idx + 1}</p>
                      <h2 className="text-2xl font-semibold text-neutral-50">{p.title}</h2>
                      <p className="text-neutral-400 mt-1">{p.summary}</p>
                    </div>

                    <div className="text-neutral-500">Start →</div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        ) : (
          // Page mode: render markdown content + quiz + previous/next controls
          <>
            <Link to={`/lessons/${lessonSlug}/${sectionSlug}`} className="text-blue-300 hover:underline mb-8 inline-block">
              &larr; Back to {section?.title}
            </Link>

            <article className="lesson-content prose prose-invert prose-lg">
              {isLoading && <p>Loading...</p>}
              {error && <p style={{ color: 'red' }}>Error: {error}</p>}
              {!isLoading && !error && (
                <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                  {content}
                </ReactMarkdown>
              )}
            </article>

            {hasQuiz && !showQuiz && quizData && (
              <div className="mt-8 p-6 bg-neutral-900 border border-neutral-800 rounded-lg">
                <h2 className="text-xl font-semibold text-neutral-100 mb-4">Ready to test your knowledge?</h2>
                <button
                  onClick={() => setShowQuiz(true)}
                  className="bg-blue-400 hover:bg-blue-700 text-white py-2 px-6 rounded-lg"
                >
                  Start Quiz
                </button>
              </div>
            )}

            {hasQuiz && showQuiz && quizData && (
              <div className="mt-8">
                <QuizPlayer quiz={quizData} onFinish={handleQuizFinish} />
              </div>
            )}

            {/* Navigation buttons */}
            {!showQuiz && (
              <div className="flex justify-between mt-8">
                {getPrevRoute() ? (
                  <button
                    className="bg-neutral-700 hover:bg-neutral-600 text-white py-2 px-5 rounded-lg shadow transition"
                    onClick={() => navigate(getPrevRoute())}
                  >
                    &larr; Previous
                  </button>
                ) : <div />}

                {getNextRoute() ? (
                  <button
                    className={`${nextPage ? 'bg-blue-400 hover:bg-blue-500' : 'bg-green-600 hover:bg-green-700'} text-white py-2 px-6 rounded-lg shadow transition`}
                    onClick={() => navigate(getNextRoute())}
                  >
                    {nextPage ? 'Next →' : `Next Section: ${nextSection?.title} →`}
                  </button>
                ) : <div />}
              </div>
            )}
          </>
        )}
      </div>
    </Layout>
  );
};

export default LessonSectionPage;