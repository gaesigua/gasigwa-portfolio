const quiz = {
  id: "cp-io",
  title: "Input and Output in C",
  questions: [
    {
      question: "Which format specifier is used with `printf` to print an integer in C?",
      options: ["%f", "%c", "%d", "%s"],
      correctIndex: 2,
      hint: "d for decimal integer.",
      explanation: "`%d` is the format specifier for a decimal (base-10) integer in both `printf` and `scanf`."
    },
    {
      question: "In C, `scanf(\"%f\", &x);` — what does the `&` before `x` mean?",
      options: [
        "It is a bitwise AND operator",
        "It passes the address (memory location) of x so scanf can store the value there",
        "It dereferences the pointer x",
        "It is used only for character input"
      ],
      correctIndex: 1,
      hint: "scanf needs to know WHERE to write the value.",
      explanation: "`&x` gives scanf the memory address of `x`. Without `&`, scanf wouldn't know where to store the input value."
    },
    {
      question: "What does `\\n` in a printf format string do?",
      options: [
        "Prints the letter n",
        "Prints a tab character",
        "Moves the cursor to a new line",
        "Ends the program"
      ],
      correctIndex: 2,
      hint: "\\n = newline.",
      explanation: "`\\n` is an escape sequence for a newline character — it moves the cursor to the beginning of the next line."
    },
    {
      question: "Which format specifier prints a floating-point number with exactly 2 decimal places?",
      options: ["%f", "%.2f", "%2f", "%d.2"],
      correctIndex: 1,
      hint: "The .2 controls decimal places.",
      explanation: "`%.2f` prints a float with exactly 2 digits after the decimal point. The `.precision` part controls the number of decimal digits."
    },
    {
      question: "To read a string (word) with scanf in C, you use:",
      options: ["%c", "%s", "%d", "%str"],
      correctIndex: 1,
      hint: "s for string.",
      explanation: "`%s` reads a whitespace-delimited string. Note: `scanf(\"%s\", name)` does NOT need `&` because the array name is already an address."
    },
    {
      question: "What is the difference between `printf` and `puts` in C?",
      options: [
        "printf can format output; puts only prints strings and always adds a newline",
        "puts is faster; printf is for binary files",
        "printf prints to file; puts prints to screen",
        "They are identical"
      ],
      correctIndex: 0,
      hint: "printf is more flexible with format specifiers.",
      explanation: "`printf` supports format specifiers for various data types. `puts` only prints strings and automatically appends a newline character."
    }
  ]
};

export default quiz;
