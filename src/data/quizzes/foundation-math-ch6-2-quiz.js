const foundationMathCh62Quiz = {
  title: "Chapter 6.2: Combinations Quiz",
  questions: [
    {
      id: 1,
      question: "What is the key difference between a permutation and a combination?",
      options: [
        "Permutations use factorials; combinations do not",
        "Order matters in permutations, but NOT in combinations",
        "Combinations always produce larger numbers than permutations",
        "Permutations are for numbers; combinations are for letters",
      ],
      answer: "Order matters in permutations, but NOT in combinations",
      explanation: "The fundamental distinction: permutations count ordered arrangements (ABC ≠ BAC), while combinations count unordered groups (ABC = BAC = CAB).",
    },
    {
      id: 2,
      question: "What is the formula for ⁿCᵣ (combinations of r objects from n)?",
      options: [
        "n! / (n - r)!",
        "n! / r!",
        "n! / ((n - r)! × r!)",
        "(n - r)! / n!",
      ],
      answer: "n! / ((n - r)! × r!)",
      explanation: "ⁿCᵣ = n! / ((n-r)! × r!). The extra r! in the denominator (compared to ⁿPᵣ) removes the ordering, since each group of r items can be arranged r! ways.",
    },
    {
      id: 3,
      question: "Which of the following real-world scenarios calls for using a COMBINATION?",
      options: [
        "Awarding gold, silver, and bronze medals to 3 runners from 10",
        "Creating a 4-digit PIN from the digits 1-9",
        "Choosing a group of 5 students from a class of 30 for a trip",
        "Arranging 6 different books on a shelf",
      ],
      answer: "Choosing a group of 5 students from a class of 30 for a trip",
      explanation: "Choosing a group (committee, team, delegation) is a combination because the order of selection doesn't matter — only who is chosen matters.",
    },
    {
      id: 4,
      question: "A hockey team of 5 men and 6 women is chosen from 7 men and 9 women. How many ways can this be done?",
      options: ["⁷C₅ + ⁹C₆", "⁷C₅ × ⁹C₆", "⁷P₅ × ⁹P₆", "16! / (5! × 6!)"],
      answer: "⁷C₅ × ⁹C₆",
      explanation: "Independent selections are multiplied. ⁷C₅ = 21 and ⁹C₆ = 84, so the total = 21 × 84 = 1764.",
    },
    {
      id: 5,
      question: "What does the symmetry property ⁿCᵣ = ⁿC(n-r) tell us?",
      options: [
        "Choosing r objects always gives the same result as choosing 0 objects",
        "Choosing r objects from n gives the same count as choosing (n-r) objects from n",
        "Combinations and permutations always produce equal results",
        "The combination formula is symmetric around n = r",
      ],
      answer: "Choosing r objects from n gives the same count as choosing (n-r) objects from n",
      explanation: "Every time you choose r objects to include, you are simultaneously choosing n-r objects to exclude. These two selections have the same count.",
    },
  ],
};

export default foundationMathCh62Quiz;
