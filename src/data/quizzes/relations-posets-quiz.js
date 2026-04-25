const quiz = {
  id: "relations-posets-quiz",
  title: "Relations and Posets",
  questions: [
    {
      question: "Which of the following defines a Transitive relation?",
      options: [
        "(a, a) ∈ R for all a",
        "If (a, b) ∈ R, then (b, a) ∈ R",
        "If (a, b) ∈ R and (b, c) ∈ R, then (a, c) ∈ R",
        "If (a, b) ∈ R and (b, a) ∈ R, then a = b"
      ],
      correctIndex: 2,
      hint: "It carries over through a middle element.",
      explanation: "A relation is transitive if aRb and bRc implies aRc."
    },
    {
      question: "What three properties must a relation satisfy to be considered a Partially Ordered Set (Poset)?",
      options: [
        "Reflexive, Symmetric, Transitive",
        "Reflexive, Antisymmetric, Transitive",
        "Irreflexive, Symmetric, Transitive",
        "Reflexive, Antisymmetric, Intransitive"
      ],
      correctIndex: 1,
      hint: "Think about the divisibility or subset relations.",
      explanation: "A poset must be Reflexive (a ≤ a), Antisymmetric (if a ≤ b and b ≤ a, then a = b), and Transitive (if a ≤ b and b ≤ c, then a ≤ c)."
    },
    {
      question: "In a partial order, is it required that every pair of elements is comparable?",
      options: [
        "Yes, otherwise it is not a set.",
        "Yes, this is the definition of Antisymmetry.",
        "No, that is the definition of a Total Order.",
        "No, elements are never comparable in a partial order."
      ],
      correctIndex: 2,
      hint: "Think about divisibility: 2 does not divide 3, and 3 does not divide 2.",
      explanation: "In a partial order, some elements may not be comparable (e.g., 2 and 3 under divisibility). A Total Order is a poset where every pair is comparable."
    },
    {
      question: "What is a Lattice?",
      options: [
        "A relation that is only reflexive.",
        "A poset where every pair of elements has a Least Upper Bound (Join) and Greatest Lower Bound (Meet).",
        "A matrix used to calculate graph edges.",
        "A completely disconnected set of nodes."
      ],
      correctIndex: 1,
      hint: "It has specific bounds for every pair.",
      explanation: "A lattice is a special poset where every pair of elements has a unique supremum (Join) and infimum (Meet)."
    },
    {
      question: "In the divisibility lattice of {1, 2, 3, 4, 6, 12}, what does the Meet (a ∧ b) represent?",
      options: [
        "The sum of a and b",
        "The Least Common Multiple (LCM)",
        "The Greatest Common Divisor (GCD)",
        "The Cartesian product"
      ],
      correctIndex: 2,
      hint: "The greatest lower bound divides both numbers.",
      explanation: "In a divisibility lattice, the Meet (Greatest Lower Bound) is the GCD, and the Join (Least Upper Bound) is the LCM."
    }
  ]
};

export default quiz;
