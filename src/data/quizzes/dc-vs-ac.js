const quiz = {
  id: "dc-vs-ac",
  title: "Direct Current (DC) vs. Alternating Current (AC)",
  questions: [
    {
      question: "Which type of current flows in one direction only?",
      options: [
        "Alternating Current (AC)",
        "Direct Current (DC)",
        "Pulsating Current",
        "Variable Current"
      ],
      correctIndex: 1,
      hint: 'Think about what the "D" in DC stands for.',
      explanation: "Direct Current (DC) is the unidirectional flow of electric charge."
    },
    {
      question: "Which of the following is a primary source of Direct Current (DC)?",
      options: ["Wall outlet", "Generator at a power plant", "Battery", "Transformer"],
      correctIndex: 2,
      hint: "Consider what powers your portable electronic devices.",
      explanation: "Batteries store chemical energy and release it as Direct Current (DC)."
    },
    {
      question: "Alternating Current (AC) is used for long-distance power transmission because its voltage can be easily stepped up or down.",
      options: ["True", "False"],
      correctIndex: 0,
      hint: "Think about how electricity gets from a power plant to your home.",
      explanation: "Transformers can efficiently change the voltage of AC, which helps reduce losses."
    },
    {
      question: "What is the standard frequency of Alternating Current (AC) in Rwanda?",
      options: ["50 Hz", "100 Hz", "60 Hz", "120 Hz"],
      correctIndex: 1,
      hint: "Different regions use different standard frequencies.",
      explanation: "The standard frequency in Rwanda is 50 Hz."
    },
    {
      question: "What device is used to convert Alternating Current (AC) to Direct Current (DC)?",
      options: ["Inverter", "Transformer", "Rectifier", "Capacitor"],
      correctIndex: 2,
      hint: "Think about the component inside a phone charger that allows it to charge the battery.",
      explanation: "A rectifier converts AC to DC."
    },
    {
      question: "Most household appliances, like refrigerators and washing machines, run directly on Direct Current (DC).",
      options: ["True", "False"],
      correctIndex: 1,
      hint: "Consider the type of electricity that comes from a standard wall socket.",
      explanation: "Most large appliances are designed to run on AC from wall outlets."
    },
    {
      question: "The flow of electrons in Alternating Current (AC) is best described as:",
      options: [
        "A continuous flow in one direction",
        "A back-and-forth motion",
        "A random movement with no net flow",
        "A flow that gradually decreases over time"
      ],
      correctIndex: 1,
      hint: "Think about what the word 'alternating' implies.",
      explanation: "In AC, the electrons periodically reverse their direction of flow."
    },
    {
      question: "Which of these historical figures was a major proponent of Direct Current (DC) for power distribution?",
      options: ["Nikola Tesla", "Thomas Edison", "Alexander Graham Bell", "Michael Faraday"],
      correctIndex: 1,
      hint: "This was central to the late 19th century 'war of currents'.",
      explanation: "Thomas Edison advocated for DC distribution."
    },
    {
      question: "Solar panels generate Alternating Current (AC) directly.",
      options: ["True", "False"],
      correctIndex: 1,
      hint: "Think about how solar energy is stored and used.",
      explanation: "Solar panels produce DC; an inverter converts it to AC for household use."
    },
    {
      question: "What is a key disadvantage of using Direct Current (DC) for long-distance power transmission?",
      options: [
        "It is more dangerous than AC.",
        "It cannot be easily converted to different voltages.",
        "It causes more interference with communication signals.",
        "It requires thicker wires than AC."
      ],
      correctIndex: 1,
      hint: "Consider the role of transformers in the power grid.",
      explanation: "DC is harder to convert efficiently between voltages, making AC preferable for long-distance transmission."
    }
  ]
};

// export const dcVsAcQuiz = quiz;

export default quiz;