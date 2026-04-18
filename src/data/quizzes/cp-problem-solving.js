const quiz = {
  id: "cp-problem-solving",
  title: "Problem-Solving Techniques",
  questions: [
    {
      question: "The top-down approach starts with:",
      options: [
        "The most basic components",
        "The overall main problem and breaks it into subproblems",
        "Writing unit tests first",
        "Implementing the database layer"
      ],
      correctIndex: 1,
      hint: "Think of it as zooming in from a bird's-eye view.",
      explanation: "Top-down starts with the big picture (the main problem) and progressively breaks it into smaller, more manageable subproblems."
    },
    {
      question: "Which approach is best when building reusable library functions?",
      options: ["Top-Down", "Bottom-Up", "Brute Force", "Backtracking"],
      correctIndex: 1,
      hint: "You build the small pieces first, then combine them.",
      explanation: "Bottom-up builds fundamental building blocks first, then combines them into higher-level functions — ideal for libraries and reusable components."
    },
    {
      question: "Problem decomposition means:",
      options: [
        "Breaking the program into individual lines",
        "Breaking a complex problem into independent, manageable subproblems",
        "Removing unnecessary variables",
        "Compiling each function separately"
      ],
      correctIndex: 1,
      hint: "De-compose = break apart.",
      explanation: "Decomposition breaks a complex problem into smaller, focused subproblems that can be solved independently and combined."
    },
    {
      question: "In practice, most large software projects use:",
      options: [
        "Only top-down design",
        "Only bottom-up design",
        "A hybrid of top-down for design and bottom-up for implementation",
        "Only brute force"
      ],
      correctIndex: 2,
      hint: "Real projects combine the best of both worlds.",
      explanation: "Real-world development typically uses top-down for overall architecture and planning, then bottom-up for implementing reusable components."
    },
    {
      question: "When decomposing a problem, subproblems should ideally be:",
      options: [
        "As interconnected as possible",
        "As independent as possible",
        "All solved in the same function",
        "All written in the same file"
      ],
      correctIndex: 1,
      hint: "Independence makes each piece easier to test and maintain.",
      explanation: "Subproblems should be as independent as possible — this makes them easier to implement, test, debug, and reuse."
    }
  ]
};

export default quiz;
