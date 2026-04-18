const quiz = {
  id: "cp-functions",
  title: "Sub-Programming and Modularization",
  questions: [
    {
      question: "What is the main benefit of modular programming?",
      options: [
        "Programs run twice as fast",
        "Code is broken into reusable, focused, independently testable functions",
        "Variables are automatically global",
        "No documentation is needed"
      ],
      correctIndex: 1,
      hint: "Think about reuse, clarity, and maintainability.",
      explanation: "Modular programming breaks a program into separate, focused functions/modules that can be written, tested, and reused independently."
    },
    {
      question: "In C, what does a function declaration (prototype) tell the compiler?",
      options: [
        "The actual implementation of the function",
        "The function's name, return type, and parameter types, so the compiler knows how to call it",
        "The memory address of the function",
        "Which library the function comes from"
      ],
      correctIndex: 1,
      hint: "It's a promise to the compiler: 'this function exists and looks like this'.",
      explanation: "A function prototype tells the compiler the function's return type, name, and parameter types — enabling the compiler to check calls before seeing the full definition."
    },
    {
      question: "Call-by-value means:",
      options: [
        "The function receives the actual variable and can modify it",
        "A copy of the argument's value is passed; changes inside the function don't affect the original",
        "The function is called multiple times",
        "The return value is ignored"
      ],
      correctIndex: 1,
      hint: "A copy is made — the original is safe.",
      explanation: "Call-by-value passes a copy of the argument's value to the function, so changes inside the function do not affect the original variable."
    },
    {
      question: "Call-by-reference (using pointers in C) means:",
      options: [
        "A copy of the value is passed",
        "The function receives the memory address and can modify the original variable",
        "The function returns two values",
        "Only integers can be passed"
      ],
      correctIndex: 1,
      hint: "The address is passed, so the function touches the real variable.",
      explanation: "Call-by-reference passes a pointer (memory address) to the function, allowing it to modify the original variable directly."
    },
    {
      question: "A local variable in C:",
      options: [
        "Is accessible from any function in the program",
        "Exists only within the function or block where it is declared",
        "Is stored in the heap",
        "Cannot be initialized"
      ],
      correctIndex: 1,
      hint: "Local = limited to its home block.",
      explanation: "Local variables are declared inside a function or block and are only accessible within that scope. They cease to exist when the function returns."
    },
    {
      question: "A `void` function in C means:",
      options: [
        "The function performs no actions",
        "The function does not return a value",
        "The function has no parameters",
        "The function runs infinitely"
      ],
      correctIndex: 1,
      hint: "void = empty return.",
      explanation: "`void` as a return type means the function does not return any value to the caller. It performs a task but produces no output value."
    }
  ]
};

export default quiz;
