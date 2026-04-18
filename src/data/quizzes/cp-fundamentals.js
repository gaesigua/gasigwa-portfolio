const quiz = {
  id: "cp-fundamentals",
  title: "Programming Language Fundamentals",
  questions: [
    {
      question: "In C, which data type is used to store a single character?",
      options: ["int", "float", "char", "double"],
      correctIndex: 2,
      hint: "ch-ar... character!",
      explanation: "The `char` data type stores a single character (1 byte), e.g., 'A', 'z', '5'."
    },
    {
      question: "What is the difference between syntax and semantics?",
      options: [
        "Syntax is the meaning; semantics are the rules",
        "Syntax refers to grammar/structure rules; semantics refers to meaning",
        "They are the same thing",
        "Syntax is only for compiled languages; semantics for interpreted"
      ],
      correctIndex: 1,
      hint: "Syntax = form; Semantics = meaning.",
      explanation: "Syntax is the set of grammar rules for how code must be written. Semantics is what the code actually means/does when it runs."
    },
    {
      question: "Which of the following is a valid variable name in C?",
      options: ["2count", "my-variable", "total_marks", "int"],
      correctIndex: 2,
      hint: "Variables can't start with a digit, can't use hyphens, and can't be keywords.",
      explanation: "`total_marks` is valid — it starts with a letter and uses only underscores and letters. `int` is a keyword, `2count` starts with a digit."
    },
    {
      question: "A constant in C declared with `#define PI 3.14159` means:",
      options: [
        "PI is a variable that can be changed",
        "PI is a symbolic constant replaced by 3.14159 at every occurrence before compilation",
        "PI is a function that returns 3.14159",
        "PI is stored as a float automatically"
      ],
      correctIndex: 1,
      hint: "#define is a preprocessor directive.",
      explanation: "`#define PI 3.14159` tells the preprocessor to replace every occurrence of `PI` in the code with `3.14159` before compilation."
    },
    {
      question: "What is the size of an `int` on most 32-bit systems in C?",
      options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
      correctIndex: 2,
      hint: "4 bytes = 32 bits.",
      explanation: "On most 32-bit systems, an `int` is 4 bytes (32 bits), allowing values from -2,147,483,648 to 2,147,483,647."
    },
    {
      question: "What is integer overflow?",
      options: [
        "Dividing an integer by zero",
        "Storing a value too large for the data type, causing incorrect results",
        "Using a float where an int is expected",
        "Printing too many digits"
      ],
      correctIndex: 1,
      hint: "Think of a water glass overflowing — too much data for the container.",
      explanation: "Integer overflow occurs when a computed value exceeds the maximum value the data type can store, often wrapping around to unexpected values."
    },
    {
      question: "In C, `float` vs `double`: what is the key difference?",
      options: [
        "float can store negative numbers; double cannot",
        "double has greater precision and range than float",
        "float is for integers; double for decimals",
        "They are identical"
      ],
      correctIndex: 1,
      hint: "double = double precision.",
      explanation: "`double` uses 8 bytes (64 bits) and has ~15-17 significant digits. `float` uses 4 bytes (32 bits) and has only ~6-7 significant digits."
    }
  ]
};

export default quiz;
