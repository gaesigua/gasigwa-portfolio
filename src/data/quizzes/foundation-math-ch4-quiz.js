const foundationMathCh4Quiz = {
  title: "Chapter 4: Logarithmic and Exponential Notation Quiz",
  questions: [
    {
      id: 1,
      question: "According to the Laws of Indices, what does aᵐ × aⁿ equal?",
      options: ["aᵐⁿ", "aᵐ⁺ⁿ", "aᵐ⁻ⁿ", "a^(m/n)"],
      answer: "aᵐ⁺ⁿ",
      explanation: "When multiplying terms with the same base, you add their exponents: aᵐ × aⁿ = aᵐ⁺ⁿ.",
    },
    {
      id: 2,
      question: "What is the value of any non-zero number raised to the power of zero (a⁰)?",
      options: ["0", "a", "1", "-1"],
      answer: "1",
      explanation: "According to the zero exponent rule, any non-zero number raised to the power of zero equals 1.",
    },
    {
      id: 3,
      question: "If aᵐ = b, which of the following is the correct logarithmic form?",
      options: ["logₘ b = a", "logₐ m = b", "logₐ b = m", "log_b a = m"],
      answer: "logₐ b = m",
      explanation: "A logarithm answers 'to what exponent must the base be raised to get the number'. Since base 'a' raised to 'm' is 'b', logₐ b = m.",
    },
    {
      id: 4,
      question: "According to the product rule for logarithms, logₐ(AB) is equal to:",
      options: ["logₐ A × logₐ B", "logₐ A + logₐ B", "logₐ (A+B)", "B × logₐ A"],
      answer: "logₐ A + logₐ B",
      explanation: "The logarithm of a product is the sum of the logarithms of the factors.",
    },
    {
      id: 5,
      question: "What is the base of a 'natural logarithm' (ln)?",
      options: ["10", "2", "e (Euler's number)", "1"],
      answer: "e (Euler's number)",
      explanation: "Natural logarithms use the irrational number 'e' (approx. 2.71828) as their base, denoted as 'ln'.",
    },
  ],
};

export default foundationMathCh4Quiz;
