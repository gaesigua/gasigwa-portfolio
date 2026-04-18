const quiz = {
  id: "cp-algorithms",
  title: "Algorithms",
  questions: [
    {
      question: "An algorithm must always terminate after a finite number of steps. This property is called:",
      options: ["Definiteness", "Effectiveness", "Finiteness", "Generality"],
      correctIndex: 2,
      hint: "Think about what happens if it runs forever.",
      explanation: "Finiteness means the algorithm must stop after a finite number of steps — an infinite loop is not a valid algorithm."
    },
    {
      question: "Which of the following is NOT a required property of an algorithm?",
      options: ["Input", "Output", "Elegance", "Definiteness"],
      correctIndex: 2,
      hint: "Algorithms must work correctly — beauty is optional.",
      explanation: "Elegance is desirable but not a required property. Required properties are: input, output, definiteness, finiteness, and effectiveness."
    },
    {
      question: "Stepwise refinement means:",
      options: [
        "Writing code first, then adding comments",
        "Breaking a problem into smaller subproblems at increasing levels of detail",
        "Testing code after every line",
        "Using loops to refine output"
      ],
      correctIndex: 1,
      hint: "You start general and get more specific each time.",
      explanation: "Stepwise refinement is a top-down technique where you progressively break a high-level description into smaller, more detailed steps."
    },
    {
      question: "Which documentation method uses a structured text style that resembles code but is not tied to any language?",
      options: ["Natural Language", "Flowchart", "Pseudocode", "Decision Table"],
      correctIndex: 2,
      hint: "It's readable by humans but looks like code.",
      explanation: "Pseudocode uses structured text to describe logic precisely without following the syntax of any specific programming language."
    },
    {
      question: "An algorithm named after Muhammad ibn Musa al-Khwarizmi. What does his name relate to?",
      options: ["The word 'algebra'", "The word 'algorithm'", "The word 'binary'", "The word 'logic'"],
      correctIndex: 1,
      hint: "The word 'algorithm' evolved from his name.",
      explanation: "The word 'algorithm' is derived from the Latinization of al-Khwarizmi's name (Algoritmi), a 9th-century Persian mathematician."
    },
    {
      question: "Which of these best describes a 'general' algorithm?",
      options: [
        "It solves exactly one specific input",
        "It solves a class of related problems, not just one instance",
        "It uses the fewest possible steps",
        "It is always recursive"
      ],
      correctIndex: 1,
      hint: "A sorting algorithm should work for any array, not just one specific array.",
      explanation: "Generality means the algorithm solves an entire class of problems (e.g., sorting any array), not just one specific case."
    }
  ]
};

export default quiz;
