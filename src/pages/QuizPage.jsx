import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import QuizPlayer from "../components/QuizPlayer";
import { quizzes } from "../data/quizzes";


const QuizPage = () => {
  
  // since I am planning on having multiple quizzes, we will use their id, use useParams to pick dataset.
  
  const { quizId } = useParams();
  const navigate = useNavigate();

  const quiz = quizzes[quizId];

  if (!quiz) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold text-red-500 mb-4">Quiz Not Found</h1>
          <p>The quiz you are looking for does not exist.</p>
          <button
            className="text-blue-400 hover:underline"
            onClick={() => navigate("-1")}
          >
            &larr; Go Back
          </button>
        </div>
      </Layout>
    );
  }

  const handleFinish = (answers) => {
    const score = answers.filter(a => a.correct).length;

    alert(`Quiz finished. Score: ${score}/${answers.length}`);

    // For now, just log the answers
    console.log("Quiz finished:", answers);

    // I could save results or navigate somewhere
    // navigate(`/lessons`); // or wherever you want users to go after
    
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <QuizPlayer quiz={quiz} onFinish={handleFinish} />
      </div>
    </Layout>
  );
};

export default QuizPage;