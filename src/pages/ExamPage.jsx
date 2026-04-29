import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeRaw from "rehype-raw";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

import Layout from "../components/Layout.jsx";
import { exams } from "../data/exams";
import {
  ChevronLeft,
  Clock,
  BookOpen,
  Eye,
  EyeOff,
  CheckCircle,
} from "lucide-react";

// ─── Markdown renderer with full math support ─────────────────────────────────
const MD = ({ children }) => (
  <ReactMarkdown
    remarkPlugins={[remarkGfm, remarkMath]}
    rehypePlugins={[rehypeRaw, rehypeKatex]}
  >
    {children}
  </ReactMarkdown>
);

// ─── ExamPage ─────────────────────────────────────────────────────────────────
const ExamPage = () => {
  const { examId } = useParams();
  const navigate = useNavigate();

  const exam = exams[examId];

  // Per-question answer-key visibility state
  const [revealedAnswers, setRevealedAnswers] = useState({});
  // Show all / hide all toggle
  const [showAllAnswers, setShowAllAnswers] = useState(false);

  if (!exam) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-red-500 mb-4">
            Exam Not Found
          </h1>
          <p className="text-slate-600 mb-8">
            The exam you are looking for does not exist.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="text-[#2f7fb5] hover:text-[#21628d] hover:underline inline-flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" /> Go Back
          </button>
        </div>
      </Layout>
    );
  }

  // Build a flat map of answerKey by question number for quick lookup
  const answerMap = {};
  (exam.answerKey || []).forEach((a) => {
    answerMap[a.number] = a.answer;
  });

  const toggleAnswer = (questionNumber) => {
    setRevealedAnswers((prev) => ({
      ...prev,
      [questionNumber]: !prev[questionNumber],
    }));
  };

  const handleToggleAll = () => {
    if (showAllAnswers) {
      // Hide all
      setRevealedAnswers({});
      setShowAllAnswers(false);
    } else {
      // Show all
      const all = {};
      (exam.answerKey || []).forEach((a) => {
        all[a.number] = true;
      });
      setRevealedAnswers(all);
      setShowAllAnswers(true);
    }
  };

  // Total marks
  const totalMarks = exam.parts.flatMap((p) => p.questions).reduce((sum, q) => sum + (q.marks || 0), 0);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* ── Back navigation ── */}
        <Link
          to={`/lessons/${exam.courseSlug}`}
          className="text-[#2f7fb5] hover:text-[#21628d] hover:underline mb-8 inline-flex items-center gap-1 text-sm"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to {exam.courseSlug.replace(/-/g, " ")}
        </Link>

        {/* ── Exam Header ── */}
        <div className="bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-200 rounded-2xl p-8 mb-8 shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                Final Exam
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
                {exam.title}
              </h1>
              <p className="text-slate-600 text-lg max-w-2xl">{exam.description}</p>
            </div>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-6 mt-6 pt-6 border-t border-blue-200">
            <div className="flex items-center gap-2 text-slate-700">
              <Clock className="w-5 h-5 text-blue-600" />
              <span className="font-medium">{exam.durationMinutes} minutes</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <BookOpen className="w-5 h-5 text-blue-600" />
              <span className="font-medium">{exam.parts.length} parts</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <CheckCircle className="w-5 h-5 text-blue-600" />
              <span className="font-medium">{totalMarks} total marks</span>
            </div>
          </div>
        </div>

        {/* ── Global answer-key toggle ── */}
        {exam.answerKey?.length > 0 && (
          <div className="flex justify-end mb-6">
            <button
              onClick={handleToggleAll}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 ${
                showAllAnswers
                  ? "bg-blue-500 hover:bg-blue-600 text-white"
                  : "bg-white border border-blue-300 text-blue-700 hover:bg-blue-50"
              }`}
            >
              {showAllAnswers ? (
                <>
                  <EyeOff className="w-4 h-4" /> Hide All Answers
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4" /> Show All Answers
                </>
              )}
            </button>
          </div>
        )}

        {/* ── Parts & Questions ── */}
        {exam.parts.map((part, partIdx) => (
          <section key={partIdx} className="mb-12">
            {/* Part header */}
            <div className="bg-slate-800 text-white rounded-xl px-6 py-4 mb-6">
              <p className="text-[#6ab3ea] text-xs font-bold uppercase tracking-widest mb-0.5">
                Part {partIdx + 1}
              </p>
              <h2 className="text-xl font-bold">{part.title}</h2>
            </div>

            {/* Questions */}
            <div className="space-y-8">
              {part.questions.map((question) => {
                const isRevealed = !!revealedAnswers[question.number];
                const modelAnswer = answerMap[question.number];

                return (
                  <div
                    key={question.number}
                    className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm"
                  >
                    {/* Question bar */}
                    <div className="flex items-center justify-between px-6 py-3 bg-slate-50 border-b border-slate-200">
                      <span className="font-bold text-slate-700 text-sm uppercase tracking-wide">
                        Question {question.number}
                      </span>
                      <span className="bg-[#6ab3ea] text-white text-xs font-bold px-2.5 py-1 rounded-full">
                        {question.marks} {question.marks === 1 ? "mark" : "marks"}
                      </span>
                    </div>

                    {/* Question body */}
                    <div className="px-6 py-5 exam-content prose prose-slate max-w-none">
                      <MD>{question.text}</MD>
                    </div>

                    {/* Answer key toggle per question */}
                    {modelAnswer && (
                      <div className="px-6 pb-5">
                        <button
                          onClick={() => toggleAnswer(question.number)}
                          className={`inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 ${
                            isRevealed
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100"
                              : "bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200"
                          }`}
                        >
                          {isRevealed ? (
                            <>
                              <EyeOff className="w-3.5 h-3.5" /> Hide Answer
                            </>
                          ) : (
                            <>
                              <Eye className="w-3.5 h-3.5" /> Show Model Answer
                            </>
                          )}
                        </button>

                        {isRevealed && (
                          <div className="mt-4 bg-emerald-50 border border-emerald-200 rounded-xl p-5 exam-content prose prose-slate max-w-none">
                            <p className="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-3">
                              Model Answer
                            </p>
                            <MD>{modelAnswer}</MD>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        ))}

        {/* ── Footer navigation ── */}
        <div className="mt-10 pt-6 border-t border-slate-200 flex justify-between items-center">
          <Link
            to={`/lessons/${exam.courseSlug}`}
            className="text-[#2f7fb5] hover:text-[#21628d] hover:underline inline-flex items-center gap-1 text-sm"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Course
          </Link>
          <p className="text-xs text-slate-400">
            Total: {totalMarks} marks · {exam.durationMinutes} min
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ExamPage;
