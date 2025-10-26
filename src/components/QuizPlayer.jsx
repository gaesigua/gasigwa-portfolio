import React, { useState } from "react";

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
        <h1 className="text-2xl md:text-3xl font-extrabold text-neutral-50">{quiz.title}</h1>
      </header>

      {/* Step indicator */}
      <div className="mb-6 flex items-center justify-between">
        <div className="text-sm text-neutral-400">
          Question {index + 1} of {quiz.questions.length}
        </div>
        <div className="text-sm text-neutral-400">
          {/* optional score indicator */}
          {answers.filter(a => a?.correct).length} correct
        </div>
      </div>

      <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
        <div className="mb-4 text-lg text-neutral-100 font-semibold">{q.question}</div>

        <div className="space-y-3">
          {q.options.map((opt, i) => {
            // determine styling
            let base = "w-full text-left px-4 py-3 rounded-lg border transition flex items-center";
            let className = base + " border-neutral-700 bg-neutral-800 text-neutral-200";
            if (revealed && selected === i) {
              // user selected this option and answer is revealed
              if (i === q.correctIndex) {
                className = base + " bg-blue-900 border-blue-700 text-white"; // correct -> dark blue
              } else {
                className = base + " bg-red-800 border-red-700 text-white"; // incorrect -> dark red
              }
            } else if (revealed && i === q.correctIndex) {
              // show correct answer even if not selected
              className = base + " bg-blue-900 border-blue-700 text-white";
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
          <div className="mt-4 text-sm text-neutral-200">
            <div className="font-semibold">Explanation</div>
            <div className="mt-2 text-neutral-300">{q.explanation}</div>
          </div>
        )}

        {/* hint toggle */}
        <div className="mt-4 flex items-center justify-between">
          <button
            className="text-sm text-neutral-300 hover:underline"
            onClick={() => setShowHint(!showHint)}
            type="button"
          >
            {showHint ? "Hide hint" : "Show hint"}
          </button>

          <div>
            <button
              className="bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded-lg mr-2"
              onClick={goPrev}
              disabled={index === 0}
            >
              ← Previous
            </button>

            <button
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
              onClick={goNext}
              disabled={!revealed}
            >
              {index < quiz.questions.length - 1 ? "Next →" : "Finish"}
            </button>
          </div>
        </div>

        {showHint && (
          <div className="mt-3 text-sm text-neutral-300 bg-neutral-800 p-3 rounded">
            {q.hint}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPlayer;