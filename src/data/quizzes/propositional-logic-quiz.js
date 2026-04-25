const quiz = {
  id: "propositional-logic-quiz",
  title: "Propositional Logic & Truth Tables",
  questions: [
    {
      question: "Which of the following is considered a proposition?",
      options: [
        "What time is it?",
        "Close the window.",
        "x + 2 = 5",
        "The sun rises in the east."
      ],
      correctIndex: 3,
      hint: "A proposition must be a declarative statement that is either true or false.",
      explanation: "Only 'The sun rises in the east' is a declarative statement with a definite truth value. The others are questions, commands, or contain unbound variables."
    },
    {
      question: "For an implication 'P → Q' to be FALSE, what must be the truth values of P and Q?",
      options: [
        "P is True, Q is True",
        "P is False, Q is False",
        "P is True, Q is False",
        "P is False, Q is True"
      ],
      correctIndex: 2,
      hint: "An implication only fails when the premise is met but the conclusion is not.",
      explanation: "An implication (P → Q) is false ONLY when the premise (P) is true and the conclusion (Q) is false."
    },
    {
      question: "Which of the following expressions is logically equivalent to 'P → Q'?",
      options: [
        "P ∧ Q",
        "¬P ∨ Q",
        "P ∨ ¬Q",
        "¬P ∧ ¬Q"
      ],
      correctIndex: 1,
      hint: "Think about the cases where an implication is true.",
      explanation: "P → Q is logically equivalent to ¬P ∨ Q. This is one of the most important logical identities used in discrete mathematics."
    },
    {
      question: "A compound logical statement that is ALWAYS true regardless of the truth values of its components is called a:",
      options: [
        "Contingency",
        "Contradiction",
        "Biconditional",
        "Tautology"
      ],
      correctIndex: 3,
      hint: "Think of the statement 'P or not P'.",
      explanation: "A tautology evaluates to True for all possible combinations of truth values, such as P ∨ ¬P."
    },
    {
      question: "Given the statement 'If it is raining, then the ground is wet' (P → Q). What is its Contrapositive?",
      options: [
        "If it is not raining, then the ground is not wet.",
        "If the ground is wet, then it is raining.",
        "If the ground is not wet, then it is not raining.",
        "Either it is raining, or the ground is not wet."
      ],
      correctIndex: 2,
      hint: "The contrapositive swaps and negates both parts.",
      explanation: "The contrapositive is ¬Q → ¬P. 'If the ground is not wet, then it is not raining.' This is the only form logically equivalent to the original statement."
    }
  ]
};

export default quiz;
