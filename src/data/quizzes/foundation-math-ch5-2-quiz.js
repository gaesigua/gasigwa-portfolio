const foundationMathCh52Quiz = {
  title: "Chapter 5.2: Systems of Linear Equations Quiz",
  questions: [
    {
      id: 1,
      question: "What is a 'solution' to a system of two equations in x and y?",
      options: [
        "A value of x only",
        "An ordered pair (x, y) that satisfies only one of the two equations",
        "An ordered pair (x, y) that satisfies both equations simultaneously",
        "The sum of all possible x values",
      ],
      answer: "An ordered pair (x, y) that satisfies both equations simultaneously",
      explanation: "A solution to a system of equations must satisfy all equations in the system at the same time.",
    },
    {
      id: 2,
      question: "Using the substitution method to solve x + y = 4 and x - y = 2, what is the solution?",
      options: ["(1, 3)", "(3, 1)", "(2, 2)", "(4, 0)"],
      answer: "(3, 1)",
      explanation: "From the first equation, y = 4 - x. Substituting into the second: x - (4 - x) = 2 → 2x = 6 → x = 3. Then y = 4 - 3 = 1.",
    },
    {
      id: 3,
      question: "In the elimination method, what is the key goal before adding the two equations?",
      options: [
        "Make all coefficients equal to zero",
        "Make the coefficients of one variable equal and opposite in sign",
        "Multiply both equations by their determinant",
        "Ensure both equations have the same constant on the right side",
      ],
      answer: "Make the coefficients of one variable equal and opposite in sign",
      explanation: "By making the coefficients of one variable equal and opposite (e.g. +2y and -2y), adding the equations eliminates that variable.",
    },
    {
      id: 4,
      question: "To solve AX = B using the inverse matrix method, X equals:",
      options: ["A × B", "B × A⁻¹", "A⁻¹ × B", "B / A"],
      answer: "A⁻¹ × B",
      explanation: "Multiplying both sides of AX = B on the left by A⁻¹ gives: A⁻¹AX = A⁻¹B → IX = A⁻¹B → X = A⁻¹B.",
    },
    {
      id: 5,
      question: "If a system's coefficient matrix A has a determinant of 0, what can we conclude?",
      options: [
        "The system has a unique solution",
        "The matrix has no inverse, so this method cannot be applied",
        "The system has infinitely many solutions",
        "The system has no variables",
      ],
      answer: "The matrix has no inverse, so this method cannot be applied",
      explanation: "A matrix is only invertible if its determinant is non-zero (|A| ≠ 0). A matrix with |A| = 0 is called singular and has no inverse.",
    },
  ],
};

export default foundationMathCh52Quiz;
