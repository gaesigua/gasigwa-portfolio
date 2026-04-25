const quiz = {
  id: "proof-techniques-quiz",
  title: "Proof Techniques",
  questions: [
    {
      question: "In Mathematical Induction, what is the 'Inductive Hypothesis'?",
      options: [
        "Proving the statement holds for n = 1.",
        "Assuming the statement is true for some arbitrary integer n = k.",
        "Proving the statement holds for n = k + 1.",
        "Proving that the statement is false."
      ],
      correctIndex: 1,
      hint: "It's the temporary assumption made in Step 2.",
      explanation: "The Inductive Hypothesis is the step where you assume the statement holds for n=k, before attempting to prove it holds for n=k+1."
    },
    {
      question: "Which proof technique assumes the negation of the statement and derives an impossibility?",
      options: [
        "Proof by Induction",
        "Proof by Contrapositive",
        "Proof by Contradiction",
        "Proof by Syllogism"
      ],
      correctIndex: 2,
      hint: "It looks for a logical collision.",
      explanation: "Proof by Contradiction assumes the given statement is false, and uses logical reasoning to reach an impossible result, proving the original statement must be true."
    },
    {
      question: "If you want to prove 'If n² is even, then n is even' using Proof by Contrapositive, what statement would you actually prove?",
      options: [
        "If n is even, then n² is even.",
        "If n is odd, then n² is odd.",
        "If n² is odd, then n is odd.",
        "Assume n² is even, but n is odd."
      ],
      correctIndex: 1,
      hint: "Swap and negate both parts.",
      explanation: "The contrapositive of 'If P, then Q' is 'If not Q, then not P'. Thus, 'If n is not even (odd), then n² is not even (odd)'."
    },
    {
      question: "Which of the following is the famous classical proof that uses Proof by Contradiction?",
      options: [
        "Proving the sum of the first n integers.",
        "Proving that √2 is irrational.",
        "Proving De Morgan's laws.",
        "Proving the commutative law of addition."
      ],
      correctIndex: 1,
      hint: "It assumes a number can be written as a/b.",
      explanation: "The proof that √2 is irrational famously uses contradiction by assuming it IS rational (a/b), and deriving that a and b must both be even, contradicting that they have no common factors."
    },
    {
      question: "In the 'Domino Effect' analogy of mathematical induction, what does the first domino falling represent?",
      options: [
        "The Inductive Step",
        "The Contrapositive",
        "The Base Case",
        "The Inductive Hypothesis"
      ],
      correctIndex: 2,
      hint: "It's the very first step.",
      explanation: "The first domino falling represents the Base Case (verifying the statement is true for n = 1)."
    }
  ]
};

export default quiz;
