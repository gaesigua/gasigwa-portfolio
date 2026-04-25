const quiz = {
  id: "combinatorics-quiz",
  title: "Combinatorics",
  questions: [
    {
      question: "Which of the following scenarios should be solved using Permutations?",
      options: [
        "Choosing 3 toppings for a pizza.",
        "Selecting a committee of 5 students from a class.",
        "Assigning 1st, 2nd, and 3rd place prizes to race winners.",
        "Drawing a hand of 5 cards from a deck."
      ],
      correctIndex: 2,
      hint: "Does the order matter?",
      explanation: "Permutations are used when order matters. Assigning specific, distinct prizes (1st, 2nd, 3rd) means order is important. The other scenarios are combinations."
    },
    {
      question: "How many ways can 5 people be seated in a row of 5 chairs?",
      options: [
        "5",
        "25",
        "120",
        "3125"
      ],
      correctIndex: 2,
      hint: "It's a permutation of all objects (n!).",
      explanation: "5! = 5 × 4 × 3 × 2 × 1 = 120."
    },
    {
      question: "What is the correct formula for calculating Combinations (nCr)?",
      options: [
        "n! / (n - r)!",
        "n! / [r! × (n - r)!]",
        "n! / r!",
        "(n - r)! / n!"
      ],
      correctIndex: 1,
      hint: "It divides out the duplicate arrangements of the chosen items.",
      explanation: "The combination formula divides the permutation formula by r! to remove duplicate groups where the items are the same but the order is different."
    },
    {
      question: "According to the Symmetry Property of combinations, 12C10 is equal to:",
      options: [
        "12P10",
        "10C12",
        "12C2",
        "10P2"
      ],
      correctIndex: 2,
      hint: "nCr = nC(n-r).",
      explanation: "12C10 = 12C(12-10) = 12C2. Choosing 10 to take is the same as choosing 2 to leave behind."
    },
    {
      question: "How many different 3-letter codes can be formed from 5 distinct letters if no letter is repeated?",
      options: [
        "10",
        "15",
        "60",
        "120"
      ],
      correctIndex: 2,
      hint: "Order matters for a code, so use Permutations.",
      explanation: "This requires Permutations because 'ABC' is a different code from 'CBA'. 5P3 = 5! / 2! = 5 × 4 × 3 = 60."
    }
  ]
};

export default quiz;
