import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/*
 Props:
  - quiz: { id, title, questions: [{ question, options, correctIndex, hint, explanation }] }
  - onFinish(optional): callback(answers)
*/
const QuizPlayer = ({ quiz, onFinish }) => {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null); // selected option index
  const [revealed, setRevealed] = useState(false); // whether answer shown
  const [showHint, setShowHint] = useState(false);
  const [answers, setAnswers] = useState([]); // store {selected, correct}

  const q = quiz.questions[index];

  const handleSelect = (i) => {
    if (revealed) return; // prevent change after reveal
    setSelected(i);
    setRevealed(true);
    const correct = i === q.correctIndex;
    setAnswers((a) => [...a, { questionIndex: index, selected: i, correct }]);
  };

  const goNext = () => {
    setShowHint(false);
    setSelected(null);
    setRevealed(false);
    if (index < quiz.questions.length - 1) {
      setIndex(index + 1);
    } else {
      // finished
      onFinish?.(answers);
    }
  };

  const goPrev = () => {
    if (index === 0) return;
    // remove last recorded answer if returning
    setAnswers((a) => a.slice(0, -1));
    setIndex(index - 1);
    setSelected(null);
    setRevealed(false);
    setShowHint(false);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <header className="mb-6">
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">{quiz.title}</h1>
      </header>

      {/* Step indicator */}
      <div className="mb-6 flex items-center justify-between">
        <div className="text-sm text-slate-500">
          Question {index + 1} of {quiz.questions.length}
        </div>
        <div className="text-sm text-slate-500">
          {/* optional score indicator */}
          {answers.filter(a => a?.correct).length} correct
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
        <div className="mb-4 text-lg text-slate-900 font-semibold">{q.question}</div>

        <div className="space-y-3">
          {q.options.map((opt, i) => {
            // determine styling
            let base = "w-full text-left px-4 py-3 rounded-lg border transition flex items-center";
            let className = base + " border-slate-200 bg-slate-50 text-slate-700";
            if (revealed && selected === i) {
              // user selected this option and answer is revealed
              if (i === q.correctIndex) {
                className = base + " bg-[#e8f4fc] border-[#6ab3ea] text-[#1f5f89]";
              } else {
                className = base + " bg-red-50 border-red-300 text-red-700";
              }
            } else if (revealed && i === q.correctIndex) {
              // show correct answer even if not selected
              className = base + " bg-[#e8f4fc] border-[#6ab3ea] text-[#1f5f89]";
            }

            return (
              <button
                key={i}
                className={className}
                onClick={() => handleSelect(i)}
                disabled={revealed}
              >
                <span className="mr-3 font-medium">{String.fromCharCode(65 + i)}.</span>
                <span className="flex-1">{opt}</span>
              </button>
            );
          })}
        </div>

        {/* explanation */}
        {revealed && (
          <div className="mt-4 text-sm text-slate-700">
            <div className="font-semibold">Explanation</div>
            <div className="mt-2 text-slate-600">{q.explanation}</div>
          </div>
        )}

        {/* hint toggle */}
        <div className="mt-4 flex items-center justify-between">
          <button
            className="text-sm text-[#2f7fb5] hover:underline"
            onClick={() => setShowHint(!showHint)}
            type="button"
          >
            {showHint ? "Hide hint" : "Show hint"}
          </button>

          <div>
            <button
              className="bg-slate-200 hover:bg-slate-300 text-slate-800 py-2 px-4 rounded-lg mr-2 inline-flex items-center gap-1"
              onClick={goPrev}
              disabled={index === 0}
            >
              <ChevronLeft className="w-4 h-4" /> Previous
            </button>

            <button
              className="bg-[#6ab3ea] hover:bg-[#4a9ed9] text-white py-2 px-4 rounded-lg inline-flex items-center gap-1"
              onClick={goNext}
              disabled={!revealed}
            >
              {index < quiz.questions.length - 1 ? <>Next <ChevronRight className="w-4 h-4" /></> : "Finish"}
            </button>
          </div>
        </div>

        {showHint && (
          <div className="mt-3 text-sm text-slate-700 bg-sky-50 border border-sky-100 p-3 rounded">
            {q.hint}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPlayer;