const quiz = {
  id: "cp-structured",
  title: "Structured Programming",
  questions: [
    {
      question: "Which is NOT one of the three fundamental control structures of structured programming?",
      options: ["Sequence", "Selection", "Iteration", "Recursion"],
      correctIndex: 3,
      hint: "Dijkstra defined exactly three.",
      explanation: "The three fundamental structures are Sequence, Selection, and Iteration. Recursion is a technique but not one of the three basic control structures."
    },
    {
      question: "The sequence control structure means:",
      options: [
        "Statements execute based on a condition",
        "Statements execute in order, one after another",
        "Statements repeat until a condition is false",
        "Statements execute in parallel"
      ],
      correctIndex: 1,
      hint: "It's the simplest — just follow the steps in order.",
      explanation: "Sequence means statements execute one after another, in the order they are written, with no branching or repetition."
    },
    {
      question: "A structured program using only sequence, selection, and iteration can compute anything computable. This is known as:",
      options: [
        "The Halting Theorem",
        "The Böhm-Jacopini Theorem",
        "Dijkstra's Rule",
        "The Church-Turing Theorem"
      ],
      correctIndex: 1,
      hint: "Two computer scientists proved this in 1966.",
      explanation: "The Böhm-Jacopini Theorem (1966) proved that any computable function can be implemented using only sequence, selection, and iteration."
    },
    {
      question: "The `goto` statement is discouraged in structured programming because:",
      options: [
        "It runs too slowly",
        "It creates spaghetti code that is hard to follow and maintain",
        "It cannot handle conditions",
        "Modern compilers don't support it"
      ],
      correctIndex: 1,
      hint: "Dijkstra's famous 1968 letter was titled 'Go To Statement Considered Harmful'.",
      explanation: "Uncontrolled use of `goto` creates tangled, hard-to-follow code often called 'spaghetti code', making maintenance very difficult."
    },
    {
      question: "An iteration (loop) control structure repeats a block of code:",
      options: [
        "Exactly once always",
        "As long as a condition is true (or a set number of times)",
        "Only when a function is called",
        "In reverse order"
      ],
      correctIndex: 1,
      hint: "The loop keeps going while the condition holds.",
      explanation: "Iteration repeats a block of code while a condition is true, or for a specified number of iterations."
    }
  ]
};

export default quiz;
