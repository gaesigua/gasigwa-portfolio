const foundationMathCh32Quiz = {
  title: "Chapter 3.2: Graphing Functions Quiz",
  questions: [
    {
      id: 1,
      question: "If a function satisfies f(-x) = f(x) for all x in its domain, what type of symmetry does its graph have?",
      options: ["Symmetric to the x-axis", "Symmetric to the y-axis", "Symmetric to the origin", "No symmetry"],
      answer: "Symmetric to the y-axis",
      explanation: "A function where f(-x) = f(x) is an even function, which means its graph is symmetric with respect to the y-axis.",
    },
    {
      id: 2,
      question: "Which of the following functions is an odd function?",
      options: ["f(x) = x²", "f(x) = |x|", "f(x) = x³ - x", "f(x) = x² + 1"],
      answer: "f(x) = x³ - x",
      explanation: "For f(x) = x³ - x, substituting -x yields (-x)³ - (-x) = -x³ + x = -(x³ - x) = -f(x). Thus it is an odd function.",
    },
    {
      id: 3,
      question: "What is the shape of the graph of the absolute value function, f(x) = |x|?",
      options: ["A straight diagonal line", "A standard parabola", "A curve sweeping to the right", "A 'V' shape"],
      answer: "A 'V' shape",
      explanation: "The absolute value function makes all negative x values yield positive y values, creating a sharp 'V' shape at the origin.",
    },
    {
      id: 4,
      question: "At what x-value does the rational function y = 1 / (x - 1) have a vertical asymptote?",
      options: ["x = 0", "x = -1", "x = 1", "There is no vertical asymptote"],
      answer: "x = 1",
      explanation: "A vertical asymptote occurs where the denominator is zero (and the numerator is not). x - 1 = 0 when x = 1.",
    },
    {
      id: 5,
      question: "If both the numerator and the denominator of a rational function are zero at the same x-value (e.g. x=1), what feature does the graph have at that point?",
      options: ["A vertical asymptote", "A horizontal asymptote", "A hole", "A vertex"],
      answer: "A hole",
      explanation: "If both the numerator and denominator are zero at a specific point, it generally creates a 'hole' in the graph rather than an asymptote.",
    },
  ],
};

export default foundationMathCh32Quiz;
