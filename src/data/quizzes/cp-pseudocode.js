const quiz = {
  id: "cp-pseudocode",
  title: "Pseudocode",
  questions: [
    {
      question: "Pseudocode is best described as:",
      options: [
        "A programming language that runs on all computers",
        "A structured text description of an algorithm using plain English mixed with programming-like constructs",
        "Assembly language for embedded systems",
        "Comments written inside C programs"
      ],
      correctIndex: 1,
      hint: "'Pseudo' means false or fake — it looks like code but isn't.",
      explanation: "Pseudocode is a human-readable, language-independent way to describe an algorithm using structured English and code-like constructs."
    },
    {
      question: "Which of the following is a valid reason to write pseudocode before coding?",
      options: [
        "Pseudocode compiles directly to machine code",
        "It helps plan and communicate logic without worrying about syntax",
        "It is required by all compilers",
        "It automatically generates test cases"
      ],
      correctIndex: 1,
      hint: "It's about planning — not executing.",
      explanation: "Pseudocode lets you focus on the logic and algorithm without getting distracted by syntax rules of a specific programming language."
    },
    {
      question: "In pseudocode, `SET sum = 0` is an example of:",
      options: ["A function call", "A variable assignment/initialization", "A loop condition", "A print statement"],
      correctIndex: 1,
      hint: "You are setting a variable to a starting value.",
      explanation: "SET sum = 0 initializes (assigns) the variable `sum` to the value 0. This is a common pseudocode convention for assignment."
    },
    {
      question: "What is the pseudocode equivalent of a `while` loop?",
      options: ["REPEAT...UNTIL", "WHILE condition DO...END WHILE", "FOR i = 1 TO n", "IF...THEN...ELSE"],
      correctIndex: 1,
      hint: "It maps directly to the while loop structure.",
      explanation: "WHILE condition DO ... END WHILE is the standard pseudocode form for a while loop — it keeps executing the body while the condition is true."
    },
    {
      question: "Pseudocode is language-independent. This means:",
      options: [
        "It can only be implemented in C",
        "It can be translated into any programming language",
        "It runs on any operating system",
        "It requires no translation to run"
      ],
      correctIndex: 1,
      hint: "That's one of the key advantages of pseudocode.",
      explanation: "Since pseudocode isn't tied to any language, the same algorithm can be implemented in C, Java, Python, or any other language."
    }
  ]
};

export default quiz;
