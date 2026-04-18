const quiz = {
  id: "cp-problem-definition",
  title: "Problem Definition and Classification",
  questions: [
    {
      question: "What is the 'initial state' of a programming problem?",
      options: [
        "The desired output",
        "The starting condition or given information",
        "The algorithm to solve it",
        "The programming language used"
      ],
      correctIndex: 1,
      hint: "Think about what you are given at the start.",
      explanation: "The initial state describes the starting conditions or given information before any processing occurs."
    },
    {
      question: "A tractable problem is best described as:",
      options: [
        "A problem that is impossible to solve",
        "A problem that can be solved efficiently in reasonable time",
        "A problem with no constraints",
        "A problem that requires a supercomputer"
      ],
      correctIndex: 1,
      hint: "Tractable comes from 'tractable' meaning manageable.",
      explanation: "Tractable problems can be solved with efficient algorithms (e.g., polynomial time) and are practical for reasonably large inputs."
    },
    {
      question: "Binary search has a time complexity of O(log n). This makes it:",
      options: ["Intractable", "Undecidable", "Tractable", "Exponential"],
      correctIndex: 2,
      hint: "O(log n) grows very slowly — it's very efficient.",
      explanation: "Binary search is tractable because O(log n) complexity is efficient — even for a million elements, it takes just ~20 steps."
    },
    {
      question: "The Traveling Salesman Problem (TSP) is considered intractable because:",
      options: [
        "It requires special hardware",
        "The number of routes grows as O(n!), which is impractical for large n",
        "It cannot be solved at all",
        "It only works for small graphs"
      ],
      correctIndex: 1,
      hint: "Consider how fast factorial (n!) grows.",
      explanation: "TSP grows as (n-1)!/2 routes. For 20 cities, there are ~60 trillion routes, making it impractical to solve optimally."
    },
    {
      question: "In the IPO model, what represents 'constraints'?",
      options: [
        "The programming language choice",
        "Limitations like valid input ranges, time limits, or memory limits",
        "The output format",
        "The number of lines of code"
      ],
      correctIndex: 1,
      hint: "Constraints limit what the solution can do.",
      explanation: "Constraints are restrictions on the solution, such as valid input ranges (age must be positive), memory limits, or time deadlines."
    },
    {
      question: "The 'Halting Problem' is special because it is:",
      options: [
        "Tractable with the right algorithm",
        "Intractable but solvable with approximations",
        "Completely undecidable — no algorithm can solve it",
        "Only solvable in Java"
      ],
      correctIndex: 2,
      hint: "No algorithm exists for this one — ever.",
      explanation: "The Halting Problem is undecidable — it has been proven that no algorithm can determine whether an arbitrary program will halt or run forever."
    },
    {
      question: "Which problem-solving strategy tries all possible solutions?",
      options: ["Greedy", "Divide and Conquer", "Brute Force", "Dynamic Programming"],
      correctIndex: 2,
      hint: "It's the simplest and most exhaustive approach.",
      explanation: "Brute Force tries all possible solutions — practical only for small inputs since it's usually the least efficient approach."
    }
  ]
};

export default quiz;
