const foundationMathCh31Quiz = {
  title: "Chapter 3.1: Introduction to Functions Quiz",
  questions: [
    {
      id: 1,
      question: "If f is a function from set A to set B, what is set B called?",
      options: ["Domain", "Codomain", "Pre-image", "Range"],
      answer: "Codomain",
      explanation: "Set A is the domain, and Set B is the codomain. The range is a subset of the codomain consisting only of the actual mapped values.",
    },
    {
      id: 2,
      question: "What is another name for a one-to-one function?",
      options: ["Surjective", "Bijective", "Injective", "Composite"],
      answer: "Injective",
      explanation: "A one-to-one function is called injective. 'Surjective' means onto, and 'Bijective' means both.",
    },
    {
      id: 3,
      question: "If f(x) = x² and g(x) = x + 1, what is f(g(x))?",
      options: ["x² + 1", "(x + 1)²", "x³ + x²", "x² + x + 1"],
      answer: "(x + 1)²",
      explanation: "To find f(g(x)), substitute the expression for g(x) into f. Thus, f(x + 1) = (x + 1)².",
    },
    {
      id: 4,
      question: "For two functions f and g to be inverses of each other, what must be true?",
      options: [
        "f(g(x)) = 1 and g(f(x)) = 1",
        "f(g(x)) = x and g(f(x)) = x",
        "f(x) + g(x) = 0",
        "f(x) * g(x) = 1"
      ],
      answer: "f(g(x)) = x and g(f(x)) = x",
      explanation: "By definition, composite of a function and its inverse yields the original input x.",
    },
    {
      id: 5,
      question: "A function that is both injective and surjective is called:",
      options: ["An inverse function", "A composite function", "A pre-image", "A bijection"],
      answer: "A bijection",
      explanation: "A bijection (or one-to-one correspondence) is a function that is both one-to-one (injective) and onto (surjective).",
    },
  ],
};

export default foundationMathCh31Quiz;
