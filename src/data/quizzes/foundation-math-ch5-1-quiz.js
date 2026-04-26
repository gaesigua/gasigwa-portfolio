const foundationMathCh51Quiz = {
  title: "Chapter 5.1: Matrices Quiz",
  questions: [
    {
      id: 1,
      question: "What is the order of a matrix with 3 rows and 2 columns?",
      options: ["2 × 3", "3 × 2", "3 × 3", "2 × 2"],
      answer: "3 × 2",
      explanation: "A matrix is described as m × n where m is the number of rows and n is the number of columns. 3 rows and 2 columns = a 3 × 2 matrix.",
    },
    {
      id: 2,
      question: "When adding two matrices A and B, what is required?",
      options: [
        "A must have more rows than B",
        "A and B must have the same order (dimensions)",
        "A must be square",
        "B must be a column matrix",
      ],
      answer: "A and B must have the same order (dimensions)",
      explanation: "Matrix addition is only defined for matrices of the same order. Adding matrices of different dimensions is undefined.",
    },
    {
      id: 3,
      question: "For matrix multiplication A × B to be possible, which condition must hold?",
      options: [
        "A and B must be square matrices",
        "The number of rows in A must equal the number of rows in B",
        "The number of columns in A must equal the number of rows in B",
        "A and B must have the same order",
      ],
      answer: "The number of columns in A must equal the number of rows in B",
      explanation: "For A × B, if A is m×n, then B must be n×p. The inner dimensions must match. The result will be an m×p matrix.",
    },
    {
      id: 4,
      question: "What is the determinant of the matrix A = [[2, -1], [4, -3]]?",
      options: ["-2", "2", "-10", "10"],
      answer: "-2",
      explanation: "For a 2×2 matrix, |A| = (a₁₁)(a₂₂) - (a₂₁)(a₁₂) = (2)(-3) - (4)(-1) = -6 + 4 = -2.",
    },
    {
      id: 5,
      question: "What is the identity matrix I₂?",
      options: [
        "[[0, 0], [0, 0]]",
        "[[1, 1], [1, 1]]",
        "[[1, 0], [0, 1]]",
        "[[0, 1], [1, 0]]",
      ],
      answer: "[[1, 0], [0, 1]]",
      explanation: "The identity matrix has 1's on its main diagonal and 0's everywhere else. A × I = A for any compatible matrix A.",
    },
  ],
};

export default foundationMathCh51Quiz;
