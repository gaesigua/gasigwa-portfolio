const foundationMathCh53Quiz = {
  title: "Chapter 5.3: Gaussian Elimination Method Quiz",
  questions: [
    {
      id: 1,
      question:
        "What is the first step of Gaussian Elimination when solving a system of linear equations?",
      options: [
        "Compute the determinant of the coefficient matrix",
        "Write the system as an augmented matrix [A | B]",
        "Apply back-substitution immediately",
        "Find the inverse of the coefficient matrix",
      ],
      answer: "Write the system as an augmented matrix [A | B]",
      explanation:
        "The first step in Gaussian Elimination is to represent the system as an augmented matrix that combines the coefficient matrix A with the constants column B, written as [A | B].",
    },
    {
      id: 2,
      question:
        "Which of the following is NOT a valid elementary row operation in Gaussian Elimination?",
      options: [
        "Swapping two rows",
        "Multiplying a row by a non-zero constant",
        "Adding a multiple of one row to another row",
        "Multiplying two rows together",
      ],
      answer: "Multiplying two rows together",
      explanation:
        "The three valid elementary row operations are: (1) Swapping two rows, (2) Multiplying a row by a non-zero scalar, and (3) Adding a multiple of one row to another row. Multiplying rows together is NOT an allowed operation.",
    },
    {
      id: 3,
      question:
        "For the system: x + y + z = 6, 2x + y + z = 14, x + 2y + 3z = 14, what is the correct augmented matrix?",
      options: [
        "[[1,1,1,6],[2,1,1,14],[1,2,3,14]]",
        "[[6,1,1,1],[14,2,1,1],[14,1,2,3]]",
        "[[1,2,1,6],[1,1,2,14],[1,1,3,14]]",
        "[[1,1,1],[2,1,1],[1,2,3]]",
      ],
      answer: "[[1,1,1,6],[2,1,1,14],[1,2,3,14]]",
      explanation:
        "The augmented matrix places coefficients of x, y, z in columns 1–3 and the constants in column 4. Row 1: [1,1,1|6], Row 2: [2,1,1|14], Row 3: [1,2,3|14].",
    },
    {
      id: 4,
      question:
        "After applying the row operation R₂ → R₂ - 2·R₁ to the matrix [[1,-1,2,4],[2,1,-1,3],[3,2,1,7]], what is the new Row 2?",
      options: [
        "[0, 3, -5, -5]",
        "[0, -3, 5, 5]",
        "[0, 3, -5, 5]",
        "[0, 3, 5, -5]",
      ],
      answer: "[0, 3, -5, -5]",
      explanation:
        "R₂ → R₂ - 2·R₁: [2-2(1), 1-2(-1), -1-2(2), 3-2(4)] = [2-2, 1+2, -1-4, 3-8] = [0, 3, -5, -5].",
    },
    {
      id: 5,
      question:
        "During Gaussian Elimination on a 3×3 system, you obtain a row [0, 0, 0 | 5]. What does this indicate?",
      options: [
        "The system has infinitely many solutions",
        "The system has a unique solution",
        "The system has no solution (it is inconsistent)",
        "The system needs one more row operation",
      ],
      answer: "The system has no solution (it is inconsistent)",
      explanation:
        "A row of the form [0, 0, 0 | k] where k ≠ 0 represents the contradiction 0 = k, which is impossible. This means the system is inconsistent and has no solution.",
    },
    {
      id: 6,
      question:
        "Consider the system: 2x + y - z = 3, x - y + 2z = 4, 3x + 2y + z = 7. After writing in matrix form AX = B and applying Gaussian Elimination, what is the solution?",
      options: [
        "x = 1, y = 2, z = 3",
        "x = 2, y = 0, z = 1",
        "x = 0, y = 2, z = 1",
        "x = 2, y = 1, z = 0",
      ],
      answer: "x = 2, y = 0, z = 1",
      explanation:
        "Setting up and row-reducing the augmented matrix leads to x = 2, y = 0, z = 1. Verification: Eq.1: 2(2)+0-1=3✓, Eq.2: 2-0+2(1)=4✓, Eq.3: 3(2)+2(0)+1=7✓.",
    },
    {
      id: 7,
      question:
        "What is the difference between Row Echelon Form (REF) and Reduced Row Echelon Form (RREF)?",
      options: [
        "REF has zeros above and below each pivot; RREF only has zeros below",
        "RREF has zeros above and below each pivot and pivots equal to 1; REF only has zeros below each pivot",
        "REF requires back-substitution; RREF requires forward elimination",
        "There is no difference between REF and RREF",
      ],
      answer:
        "RREF has zeros above and below each pivot and pivots equal to 1; REF only has zeros below each pivot",
      explanation:
        "REF (Gaussian Elimination) produces an upper triangular matrix with zeros below each pivot — you still need back-substitution. RREF (Gauss-Jordan Elimination) goes further: each pivot equals 1 and all other entries in the pivot column are zero, allowing direct reading of the solution.",
    },
    {
      id: 8,
      question:
        "When a row of [0, 0, 0 | 0] appears in the reduced matrix of a 3-variable system, what can be concluded?",
      options: [
        "The system is inconsistent and has no solution",
        "The system has a unique solution",
        "The system has a free variable and infinitely many solutions",
        "The system must be solved again from scratch",
      ],
      answer: "The system has a free variable and infinitely many solutions",
      explanation:
        "A row of all zeros [0,0,0|0] means one equation was redundant (dependent). The system has fewer independent equations than unknowns, resulting in at least one free variable and therefore infinitely many solutions.",
    },
    {
      id: 9,
      question:
        "In Gaussian Elimination, what is 'back-substitution' used for?",
      options: [
        "To eliminate all variables from the bottom row upward",
        "To find variable values starting from the last equation of the row echelon form and working upward",
        "To swap rows so that the largest coefficient appears first",
        "To verify that the augmented matrix was correctly formed",
      ],
      answer:
        "To find variable values starting from the last equation of the row echelon form and working upward",
      explanation:
        "Once the matrix is in Row Echelon Form (upper triangular), the last row gives a direct equation in one variable. Solving that, then substituting back into the row above, and continuing upward — this process is called back-substitution.",
    },
    {
      id: 10,
      question:
        "For the system 2x + y - z = 8, -3x - y + 2z = -11, -2x + y + 2z = -3, after full Gaussian Elimination the solution is x = 2, y = 3, z = -1. Which equation below correctly verifies the second equation?",
      options: [
        "-3(2) - 3 + 2(-1) = -11 → -6 - 3 - 2 = -11 ✓",
        "-3(2) - 3 + 2(-1) = -10 ✗",
        "-3(2) - 3 + 2(1) = -7 ✗",
        "-3(2) - 3 + 2(-1) = -9 ✗",
      ],
      answer: "-3(2) - 3 + 2(-1) = -11 → -6 - 3 - 2 = -11 ✓",
      explanation:
        "Substituting x=2, y=3, z=-1 into the second equation: -3(2) - 3 + 2(-1) = -6 - 3 - 2 = -11. This matches the right-hand side, confirming the solution is correct.",
    },
  ],
};

export default foundationMathCh53Quiz;
