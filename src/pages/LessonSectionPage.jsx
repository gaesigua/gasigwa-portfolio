import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { lessons } from '../data/lessons';
import Layout from '../components/Layout.jsx';
import { useNavigate } from 'react-router-dom';    // Import useNavigate to handle navigation (moving to the next section)

const LessonSectionPage = () => {
  const { lessonSlug, sectionSlug, pageSlug } = useParams();
  const navigate = useNavigate(); // Initialize useNavigate
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Find the lesson, section, and page based on the slugs

  const lesson = lessons.find(l => l.slug === lessonSlug);
  const section = lesson?.sections.find(s => s.slug === sectionSlug);
  const pageIndex = section?.pages.findIndex(p => p.slug === pageSlug);
  const page = section?.pages[pageIndex];

  // Find the next page within the same section
  let nextPage = null;
  let nextSection = null;
  if (section && pageIndex !== undefined) {
    // Next page in current section
    if (pageIndex < section.pages.length - 1) {
      nextPage = section.pages[pageIndex + 1];
    } else {
      // First page of the next section (if exists)
      const sectionIndex = lesson.sections.findIndex(s => s.slug === sectionSlug);
      if (sectionIndex < lesson.sections.length - 1) {
        nextSection = lesson.sections[sectionIndex + 1];
        // nextPage = nextSection.pages[0];
      }
    }
  }


  useEffect(() => {
    if (!lesson || !section || !page) {
      setError('Lesson, section, or page not found.');
      setIsLoading(false);
      return;
    }

    const fetchContent = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // Fetch from the new directory structure
        const response = await fetch(`/lessons/${lessonSlug}/${sectionSlug}/${pageSlug}.md`);
        if (!response.ok) {
          throw new Error("Content not found.");
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
  }, [lessonSlug, sectionSlug, pageSlug, lesson, section, page]);

  return (
    <Layout>
      {/* <div className="min-h-screen bg-neutral-950 text-neutral-200 font-mono antialiased"> */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Link 
          to={`/lessons/${lessonSlug}/${sectionSlug}`} 
          className="text-blue-400 hover:underline mb-8 inline-block"
          >
            &larr; Back to {section?.title}
          </Link>
          <article className="lesson-content prose prose-invert prose-lg">
            {isLoading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            {!isLoading && !error && (
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
              >
                {content}
              </ReactMarkdown>
            )}
          </article>
          {/* Next button */}
          <div className="flex justify-end mt-8">
            {nextPage ? (
              <button 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow transition"
                onClick={() => 
                  navigate(
                    `/lessons/${lessonSlug}/${sectionSlug}/${nextPage.slug}`
                  )
                }
              >
                Next &rarr;
              </button>
            ) : nextSection ? (
              <button 
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow transition"
                onClick={() => 
                  navigate(
                    `/lessons/${lessonSlug}/${nextSection.slug}/${nextSection.pages[0].slug}`
                  )
                }
              >
                Next Section: {nextSection.title} &rarr;
              </button>
            ) : null}
          </div>
        </div>
    </Layout>
  );
};

export default LessonSectionPage;
