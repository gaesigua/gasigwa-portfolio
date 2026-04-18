const quiz = {
  id: "cp-flowcharts",
  title: "Flowcharts",
  questions: [
    {
      question: "Which flowchart symbol is used to represent a decision (yes/no question)?",
      options: ["Rectangle", "Oval", "Diamond", "Parallelogram"],
      correctIndex: 2,
      hint: "It has a shape that can go two ways.",
      explanation: "A diamond (rhombus) represents a decision point where the flow branches based on a condition (Yes/No or True/False)."
    },
    {
      question: "What does an oval/rounded rectangle represent in a flowchart?",
      options: ["A process step", "Input or output", "Start or End (Terminal)", "A decision"],
      correctIndex: 2,
      hint: "It marks where the algorithm begins or ends.",
      explanation: "Ovals or rounded rectangles represent terminal points — the Start or End of the flowchart."
    },
    {
      question: "A rectangle in a flowchart represents:",
      options: ["A decision", "A process or calculation step", "Start/End", "Input/Output"],
      correctIndex: 1,
      hint: "Think: boxes do things (process actions).",
      explanation: "Rectangles represent process steps — computations, assignments, or any action performed by the program."
    },
    {
      question: "Input and output operations in flowcharts are represented by:",
      options: ["Rectangles", "Diamonds", "Ovals", "Parallelograms"],
      correctIndex: 3,
      hint: "It's slanted at the sides like a leaning rectangle.",
      explanation: "Parallelograms represent input/output operations — reading data from the user or displaying results."
    },
    {
      question: "Arrows in a flowchart represent:",
      options: [
        "Comment annotations",
        "The flow of control between steps",
        "Variable declarations",
        "Loop counters"
      ],
      correctIndex: 1,
      hint: "They show which step comes next.",
      explanation: "Arrows (flow lines) show the sequence and direction in which steps are executed."
    },
    {
      question: "A flowchart for a loop structure will contain:",
      options: [
        "Only rectangles and ovals",
        "Only parallelograms",
        "A decision diamond with a path that loops back",
        "No diamonds"
      ],
      correctIndex: 2,
      hint: "A loop must check a condition and repeat.",
      explanation: "A loop in a flowchart uses a decision diamond; when the condition is true, flow goes back to an earlier step (the loop body)."
    }
  ]
};

export default quiz;
