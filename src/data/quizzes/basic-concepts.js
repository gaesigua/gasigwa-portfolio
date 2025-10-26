const quiz = {
  id: "basic-concepts",
  title: "Basic Concepts Of Electricity",
  questions: [
    {
      question: "Electricity is the flow of protons.",
      options: ["True", "False"],
      correctIndex: 2,
      hint: "Consider the charge of protons and electrons.",
      explanation: "Electricity is the flow of electrons, which are negatively charged particles. Protons are positively charged and do not move in conductive materials."
    },
    {
      question: "What is the SI unit of electric current?",
      options: ["Coulomb","Volt","Ampere","Ohm"],
      correctIndex: 3,
      hint: "Think about the unit symbol 'A'.",
      explanation: "The ampere, often shortened to A, is the base SI unit for electric current. It is named after André-Marie Ampère."
    },
    {
      question: "If 30 coulombs of charge passes through a wire in 6 seconds, what is the current?",
      options: ["5 A", "6 A", "4 A", "3 A"],
      correctIndex: 1,
      hint: "Use the formula I = Q / t, where I is current, Q is charge, and t is time.",
      explanation: "Using the formula I = Q / t, we have I = 30 C / 6 s = 5 A."
    },
    {
      question: "Which type of material has very high resistance to current flow?",
      options: ["Conductor", "Insulator", "Semiconductor", "Superconductor"],
      correctIndex: 2,
      hint: "Think about materials used to coat electrical wires.",
      explanation: "Insulators, such as rubber and plastic, have very high resistance to current flow."
    },
    {
      question: "What device is used to measure electric current?",
      options: ["Voltmeter", "Ammeter", "Ohmmeter", "Wattmeter"],
      correctIndex: 1,
      hint: "The name of the device starts with 'A'.",
      explanation: "An ammeter is used to measure electric current in a circuit."
    },
    {
      question: "Which of the following materials is a good conductor of electricity?",
      options: ["Glass", "Copper", "Wood", "Plastic"],
      correctIndex: 2,
      hint: "Think about the material commonly used in electrical wiring.",
      explanation: "Copper is widely used as a conductor in electrical wiring due to its excellent conductivity."
    },
    {
      question: "What is the relationship between conductance (G) and resistance (R)?",
      options: [
        "G = R^2",
        "G = 1 / R",
        "G = R / 2",
        "G = 2R"
      ],
      correctIndex: 2,
      hint: "Consider how conductance and resistance are inversely related.",
      explanation: "Conductance is the reciprocal of resistance, so G = 1 / R."
    },
    // {
    //   question: "A 12 V battery is connected to a 4 Ω resistor. Calculate the current flowing through the resistor.",
    //   options: ["True", "False"],
    //   correctIndex: 1,
    //   hint: "Consider the type of electricity that comes from a standard wall socket.",
    //   explanation: "Most large appliances are designed to run on AC from wall outlets."
    // },
    {
      question: "The flow of electrons in Alternating Current (AC) is best described as:",
      options: [
        "Flowing in one direction only",
        "Flowing in circular loops",
        "Remaining stationary",
        "Oscillating back and forth"
      ],
      correctIndex: 4,
      hint: "Think about how household electricity behaves.",
      explanation: "In AC, the flow of electrons periodically reverses direction, oscillating back and forth."
    },
    {
      question: "An electric circuit is a closed loop that allows current to flow.",
      options: ["True", "False"],
      correctIndex: 1,
      hint: "Consider what is necessary for current to flow.",
      explanation: "An electric circuit must be a closed loop for current to flow; an open circuit prevents current flow."
      }
  ]
};


export default quiz;