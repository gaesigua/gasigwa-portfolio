const quiz = {
  id: "set-theory-quiz",
  title: "Set Theory Basics",
  questions: [
    {
      question: "If Set A = {1, 2, 3} and Set B = {3, 4, 5}, what is A ∪ B (A Union B)?",
      options: [
        "{3}",
        "{1, 2}",
        "{4, 5}",
        "{1, 2, 3, 4, 5}"
      ],
      correctIndex: 3,
      hint: "Union combines all distinct elements from both sets.",
      explanation: "A ∪ B contains all elements that are in A, or in B, or in both."
    },
    {
      question: "Which of the following describes two disjoint sets?",
      options: [
        "One set is a proper subset of the other.",
        "They have the exact same elements.",
        "Their intersection is the empty set (∅).",
        "Their union is the empty set (∅)."
      ],
      correctIndex: 2,
      hint: "Disjoint means they have nothing in common.",
      explanation: "Two sets are disjoint if they have no elements in common, meaning A ∩ B = ∅."
    },
    {
      question: "According to De Morgan's Law, what is (A ∪ B)' equivalent to?",
      options: [
        "A' ∪ B'",
        "A' ∩ B'",
        "A ∩ B",
        "(A ∩ B)'"
      ],
      correctIndex: 1,
      hint: "The complement of a union is the intersection of the complements.",
      explanation: "De Morgan's Laws state that (A ∪ B)' = A' ∩ B' and (A ∩ B)' = A' ∪ B'."
    },
    {
      question: "If a set has 5 elements, how many subsets are in its Power Set?",
      options: [
        "5",
        "10",
        "25",
        "32"
      ],
      correctIndex: 3,
      hint: "The formula is 2^n.",
      explanation: "A set with n elements has 2^n subsets in its power set. For 5 elements, 2^5 = 32 subsets."
    },
    {
      question: "If set A has 4 elements and set B has 6 elements, what is the cardinality (number of elements) of their Cartesian product A × B?",
      options: [
        "10",
        "24",
        "4096",
        "2"
      ],
      correctIndex: 1,
      hint: "Multiply the sizes together.",
      explanation: "The cardinality of the Cartesian product A × B is |A| × |B|. So, 4 × 6 = 24."
    }
  ]
};

export default quiz;
