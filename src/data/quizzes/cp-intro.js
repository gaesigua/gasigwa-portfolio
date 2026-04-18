const quiz = {
  id: "cp-intro",
  title: "Introduction to Computer Programming Methodology",
  questions: [
    {
      question: "Which of the following best defines computer programming?",
      options: [
        "The process of buying and installing software",
        "The process of designing, writing, testing, and maintaining source code",
        "The process of connecting hardware components",
        "The process of browsing the internet"
      ],
      correctIndex: 1,
      hint: "Think about what a programmer actually does day-to-day.",
      explanation: "Computer programming is the complete process of designing, writing, testing, debugging, and maintaining source code to solve problems."
    },
    {
      question: "What does PDLC stand for?",
      options: [
        "Process Design and Logic Cycle",
        "Program Documentation and Language Code",
        "Program Development Life Cycle",
        "Procedural Design and Linking Cycle"
      ],
      correctIndex: 2,
      hint: "It's the structured approach used to create software.",
      explanation: "PDLC stands for Program Development Life Cycle — the structured set of phases used to plan, build, test, and maintain software."
    },
    {
      question: "In which PDLC phase do you write the actual code?",
      options: ["Problem Analysis", "Design", "Coding", "Testing"],
      correctIndex: 2,
      hint: "It comes after design and before testing.",
      explanation: "The Coding phase is where you implement the design by writing the program in a chosen programming language."
    },
    {
      question: "Programming is only about writing code. True or False?",
      options: ["True", "False"],
      correctIndex: 1,
      hint: "Think about all the phases in the PDLC.",
      explanation: "False. Programming involves analysis, design, coding, testing, debugging, documentation, and maintenance — not just writing code."
    },
    {
      question: "Which phase of PDLC involves finding and fixing errors?",
      options: ["Design", "Testing", "Debugging", "Maintenance"],
      correctIndex: 2,
      hint: "A bug is an error; think about removing it.",
      explanation: "Debugging is the process of identifying and fixing errors (bugs) in the program code."
    },
    {
      question: "What is the first phase of the Program Development Life Cycle?",
      options: ["Coding", "Design", "Problem Analysis", "Documentation"],
      correctIndex: 2,
      hint: "You must understand the problem before you can solve it.",
      explanation: "Problem Analysis is the first phase — you identify requirements, constraints, inputs, and outputs before anything else."
    },
    {
      question: "Which benefit does following programming methodologies provide?",
      options: [
        "Makes programs run faster automatically",
        "Provides a systematic, structured approach that reduces errors",
        "Eliminates the need for testing",
        "Guarantees the program will be bug-free"
      ],
      correctIndex: 1,
      hint: "Think about what 'systematic' means for a team.",
      explanation: "Programming methodologies provide a structured approach that reduces confusion, prevents major redesigns, and makes programs more maintainable."
    },
    {
      question: "In the IPO model, what does the 'P' stand for?",
      options: ["Programming", "Processing", "Printing", "Protocol"],
      correctIndex: 1,
      hint: "It's what happens between receiving input and producing output.",
      explanation: "In the Input-Processing-Output model, 'P' stands for Processing — the operations performed on the input data to produce the output."
    }
  ]
};

export default quiz;
