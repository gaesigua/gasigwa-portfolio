const quiz = {
  id: "cp-control",
  title: "Control Structures in C",
  questions: [
    {
      question: "Which statement in C evaluates multiple constant conditions efficiently without chained if-else?",
      options: ["while", "for", "switch", "do-while"],
      correctIndex: 2,
      hint: "It 'switches' between cases.",
      explanation: "`switch` tests a variable against a list of constant values (cases), providing a cleaner alternative to long if-else chains."
    },
    {
      question: "What happens if you forget `break` inside a switch case in C?",
      options: [
        "Compilation error",
        "Only that case executes",
        "Fall-through: execution continues into the next case",
        "The program terminates"
      ],
      correctIndex: 2,
      hint: "Without break, C doesn't stop at the end of a case.",
      explanation: "Without `break`, C falls through to the next case and executes it too (fall-through behavior), which can be a bug if unintentional."
    },
    {
      question: "A `do-while` loop differs from a `while` loop in that:",
      options: [
        "do-while checks the condition before executing the body",
        "do-while always executes the body at least once",
        "do-while is faster",
        "do-while is used only for counting"
      ],
      correctIndex: 1,
      hint: "The condition is checked at the END.",
      explanation: "In `do-while`, the body executes first, then the condition is checked — guaranteeing at least one execution even if the condition is initially false."
    },
    {
      question: "What does `break` do inside a loop?",
      options: [
        "Continues to the next iteration",
        "Exits the loop immediately",
        "Restarts the loop from the beginning",
        "Forces the condition to be false"
      ],
      correctIndex: 1,
      hint: "It breaks OUT of the loop.",
      explanation: "`break` immediately exits the innermost loop or switch statement, transferring control to the statement after the loop/switch."
    },
    {
      question: "In a `for` loop `for(i=0; i<n; i++)`, what is `i++`?",
      options: ["Initialization", "Condition", "Update/Increment expression", "Loop body"],
      correctIndex: 2,
      hint: "It's the third part of the for loop header.",
      explanation: "In `for(init; condition; update)`, `i++` is the update expression executed after each iteration. Here it increments i by 1."
    },
    {
      question: "Which loop should you use when you know in advance exactly how many times to repeat?",
      options: ["while", "do-while", "for", "switch"],
      correctIndex: 2,
      hint: "It has a built-in counter.",
      explanation: "The `for` loop is ideal when the number of iterations is known in advance, because init, condition, and update are all in one compact header."
    },
    {
      question: "What does `continue` do inside a loop?",
      options: [
        "Exits the loop immediately",
        "Skips the rest of the current iteration and moves to the next one",
        "Restarts the loop from the beginning",
        "Terminates the program"
      ],
      correctIndex: 1,
      hint: "It skips the current round but the loop keeps going.",
      explanation: "`continue` skips the remaining code in the current iteration and jumps to the loop's update/condition check for the next iteration."
    }
  ]
};

export default quiz;
