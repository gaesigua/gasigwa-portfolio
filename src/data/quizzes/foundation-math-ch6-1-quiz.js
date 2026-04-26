const foundationMathCh61Quiz = {
  title: "Chapter 6.1: Arrangements and Permutations Quiz",
  questions: [
    {
      id: 1,
      question: "From 5 distinct cards, how many ways can 3 be arranged in a row (order matters)?",
      options: ["10", "15", "60", "120"],
      answer: "60",
      explanation: "Using the fundamental counting principle: 5 × 4 × 3 = 60. Or using ⁵P₃ = 5! / (5-3)! = 120 / 2 = 60.",
    },
    {
      id: 2,
      question: "What is the value of 7!?",
      options: ["49", "720", "5040", "40320"],
      answer: "5040",
      explanation: "7! = 7 × 6 × 5 × 4 × 3 × 2 × 1 = 5040.",
    },
    {
      id: 3,
      question: "How many ways can 8 people be seated at a round table?",
      options: ["8!", "7!", "8! / 2", "56"],
      answer: "7!",
      explanation: "For circular permutations of n objects, one person is fixed and the rest arrange themselves: (n-1)! = 7! = 5040 ways.",
    },
    {
      id: 4,
      question: "The permutation formula ⁿPᵣ = n! / (n - r)! gives the number of ways to:",
      options: [
        "Choose r objects from n without regard to order",
        "Arrange r objects chosen from n distinct objects in a specific order",
        "Repeat r objects from a set of n",
        "Calculate the factorial of n - r",
      ],
      answer: "Arrange r objects chosen from n distinct objects in a specific order",
      explanation: "ⁿPᵣ counts ordered arrangements (permutations) of r objects chosen from n. Order matters here.",
    },
    {
      id: 5,
      question: "The word BESIEGE has 7 letters with the letter 'E' appearing 3 times. How many distinct arrangements are there?",
      options: ["7!", "7! / 3", "7! / 3!", "7! × 3!"],
      answer: "7! / 3!",
      explanation: "When objects repeat, divide by the factorial of the repetition count. 7! / 3! = 5040 / 6 = 840 distinct arrangements.",
    },
  ],
};

export default foundationMathCh61Quiz;
