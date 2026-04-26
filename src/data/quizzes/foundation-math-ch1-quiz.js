const foundationMathCh1Quiz = {
  title: "Chapter 1: Numbers Quiz",
  questions: [
    {
      id: 1,
      question: "Which of the following numbers is an irrational number?",
      options: ["3/4", "-7", "√2", "0.3333..."],
      answer: "√2",
      explanation: "√2 cannot be expressed as a simple fraction a/b, and its decimal expansion goes on forever without repeating.",
    },
    {
      id: 2,
      question: "What is the simplified form of √48?",
      options: ["16√3", "4√3", "8√6", "2√12"],
      answer: "4√3",
      explanation: "48 = 16 × 3. Therefore √48 = √16 × √3 = 4√3.",
    },
    {
      id: 3,
      question: "Rationalize the denominator of 3 / 2√7.",
      options: ["3√7 / 14", "3√7 / 7", "6√7 / 14", "3 / 14"],
      answer: "3√7 / 14",
      explanation: "Multiply the numerator and denominator by √7: (3 × √7) / (2√7 × √7) = 3√7 / (2 × 7) = 3√7 / 14.",
    },
    {
      id: 4,
      question: "What is the value of i² in complex numbers?",
      options: ["1", "-1", "0", "√-1"],
      answer: "-1",
      explanation: "By definition, i = √-1, so i² = -1.",
    },
    {
      id: 5,
      question: "What is the distance between the points -5 and -3 on a coordinate line?",
      options: ["-8", "8", "-2", "2"],
      answer: "2",
      explanation: "The distance is the absolute value of their difference: |-3 - (-5)| = |-3 + 5| = |2| = 2.",
    },
  ],
};

export default foundationMathCh1Quiz;
