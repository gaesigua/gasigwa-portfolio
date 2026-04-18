const dsStacks = {
  id: "ds-stacks",
  title: "Stacks Quiz",
  questions: [
    {
      question: "What principle does a stack follow?",
      options: [
        "FIFO — First In, First Out",
        "LIFO — Last In, First Out",
        "FILO — First In, Last Out (different from LIFO)",
        "Priority-based ordering"
      ],
      correctIndex: 1,
      hint: "Think of a pile of plates.",
      explanation: "A stack follows LIFO (Last In, First Out): the last element added is the first removed. Like a stack of plates — you always take from the top and add to the top."
    },
    {
      question: "What does the 'push' operation do?",
      options: [
        "Removes the top element from the stack",
        "Returns the top element without removing it",
        "Adds a new element to the top of the stack",
        "Reverses the entire stack"
      ],
      correctIndex: 2,
      hint: "You 'push' something onto the pile.",
      explanation: "Push adds a new element to the top of the stack. If the stack is implemented as an array, this increments the top index and stores the value there."
    },
    {
      question: "What does 'peek' (or 'top') return?",
      options: [
        "The bottom element of the stack",
        "The top element without removing it",
        "The number of elements in the stack",
        "The top element AND removes it"
      ],
      correctIndex: 1,
      hint: "Look at the top without touching it.",
      explanation: "Peek (or top) returns the value of the top element without modifying the stack. It lets you see what's on top without committing to a pop."
    },
    {
      question: "What error occurs when you try to pop from an empty stack?",
      options: [
        "Stack overflow",
        "Stack underflow",
        "Null pointer exception",
        "Segmentation fault"
      ],
      correctIndex: 1,
      hint: "You go 'under' the minimum — below empty.",
      explanation: "Stack underflow occurs when pop() or peek() is called on an empty stack. Stack overflow occurs when push() is called on a full (fixed-size) stack."
    },
    {
      question: "Which real-world application uses a stack to track function calls?",
      options: [
        "CPU process scheduling",
        "Keyboard input buffer",
        "The call stack used by the OS for function execution and recursion",
        "Network packet routing"
      ],
      correctIndex: 2,
      hint: "When a function calls another function, where does execution return to?",
      explanation: "The call stack maintains function invocation records. When you call a function, a frame is pushed; when it returns, the frame is popped, restoring the caller's state. Recursion relies entirely on this."
    },
    {
      question: "If you push 10, 20, 30 onto a stack (in that order) and then pop twice, what is now on top?",
      options: ["30", "20", "10", "The stack is empty"],
      correctIndex: 2,
      hint: "Pop removes the most recently pushed element first.",
      explanation: "After pushing 10, 20, 30: top = 30. Pop 30 → top = 20. Pop 20 → top = 10. So 10 is now on top."
    },
    {
      question: "Which algorithm uses a stack to check if parentheses are balanced in an expression?",
      options: [
        "Binary search",
        "Bracket matching using a stack: push opening brackets, pop and match closing brackets",
        "Bubble sort",
        "Dijkstra's shortest path"
      ],
      correctIndex: 1,
      hint: "Opening brackets go in; closing brackets must match the last opened.",
      explanation: "To check balanced brackets, push each opening bracket ({ [ () onto a stack. For each closing bracket, pop and verify it matches. If the stack is empty at the end, the expression is balanced."
    }
  ]
};

export default dsStacks;
