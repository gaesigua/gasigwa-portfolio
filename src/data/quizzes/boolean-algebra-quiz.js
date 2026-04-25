const quiz = {
  id: "boolean-algebra-quiz",
  title: "Boolean Algebra",
  questions: [
    {
      question: "Which of the following describes the Commutative Law in Boolean Algebra?",
      options: [
        "a + (b + c) = (a + b) + c",
        "a + 0 = a",
        "a + b = b + a",
        "a + a' = 1"
      ],
      correctIndex: 2,
      hint: "It means the order of variables does not affect the result.",
      explanation: "The Commutative Law states that a + b = b + a and a ⋅ b = b ⋅ a. Order is independent."
    },
    {
      question: "According to the Identity Law, what is the result of 'a + 0'?",
      options: [
        "0",
        "1",
        "a",
        "a'"
      ],
      correctIndex: 2,
      hint: "ORing a variable with 0 leaves it unchanged.",
      explanation: "The Identity Law states that a + 0 = a and a ⋅ 1 = a. The identity elements leave the variable unchanged."
    },
    {
      question: "According to the Complement Law, what is the result of 'a ⋅ a'' (a AND its complement)?",
      options: [
        "a",
        "1",
        "0",
        "a'"
      ],
      correctIndex: 2,
      hint: "Can a variable be both TRUE and FALSE at the same time?",
      explanation: "A variable AND its complement is always FALSE (0)."
    },
    {
      question: "Simplify the Boolean expression: a + (a ⋅ b)",
      options: [
        "a ⋅ b",
        "b",
        "a",
        "1"
      ],
      correctIndex: 2,
      hint: "Factor out 'a' first.",
      explanation: "Using the distributive law, a + ab = a(1 + b). Since 1 + b = 1, the expression simplifies to a ⋅ 1 = a."
    },
    {
      question: "Simplify the expression using the Distributive Law: (a + b)(a + b')",
      options: [
        "a",
        "b",
        "0",
        "1"
      ],
      correctIndex: 0,
      hint: "Expand the expression and remember that b ⋅ b' = 0.",
      explanation: "Expanding yields a + ab' + ba + bb'. Since bb' = 0 and ab' + ab = a(b' + b) = a(1) = a, the expression simplifies to a + a = a."
    }
  ]
};

export default quiz;
