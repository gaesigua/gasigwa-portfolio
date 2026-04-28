const foundationMathCh17Quiz = {
  title: "Chapter 1.7: Sets Quiz",
  questions: [
    {
      id: 1,
      question: "Which of the following is NOT a valid set?",
      options: [
        "{ 1, 2, 3 }",
        "{ {a, b}, {c, d} }",
        "{ 1, 2, 2, 3 }",
        "∅"
      ],
      answer: "{ 1, 2, 2, 3 }",
      hint: "Remember: sets cannot contain duplicate elements.",
      explanation: "Sets require all elements to be distinct. { 1, 2, 2, 3 } has the element 2 listed twice, which is invalid — it would simply be written as {1, 2, 3}. The other options are all valid sets, including a set of sets and the empty set ∅."
    },
    {
      id: 2,
      question: "Using set-builder notation, the set E = { n ∈ ℤ | n = 2k for some k ∈ ℤ } describes:",
      options: [
        "The set of all natural numbers",
        "The set of all even integers",
        "The set of all odd integers",
        "The set of all positive integers"
      ],
      answer: "The set of all even integers",
      hint: "Any integer multiplied by 2 is even.",
      explanation: "n = 2k means n is exactly twice some integer k, which is the definition of an even number. For k = 0, 1, 2, -1, -2 we get n = 0, 2, 4, -2, -4 — all even integers."
    },
    {
      id: 3,
      question: "Let A = {1, 2, 3} and B = {2, 3, 4}. What is A △ B (the symmetric difference)?",
      options: [
        "{2, 3}",
        "{1, 4}",
        "{1, 2, 3, 4}",
        "∅"
      ],
      answer: "{1, 4}",
      hint: "Symmetric difference keeps elements in one set but not both.",
      explanation: "The symmetric difference A △ B = (A − B) ∪ (B − A). A − B = {1} (elements in A not in B). B − A = {4} (elements in B not in A). So A △ B = {1} ∪ {4} = {1, 4}."
    },
    {
      id: 4,
      question: "How many elements does the power set of {x, y, z} have?",
      options: [
        "3",
        "6",
        "8",
        "9"
      ],
      answer: "8",
      hint: "Use the formula 2ⁿ where n is the number of elements.",
      explanation: "The power set pow(A) of a set with n elements contains 2ⁿ subsets. Here n = 3, so |pow({x, y, z})| = 2³ = 8. The 8 subsets are: ∅, {x}, {y}, {z}, {x,y}, {x,z}, {y,z}, {x,y,z}."
    },
    {
      id: 5,
      question: "De Morgan's Law states that (A ∩ B)' is equal to:",
      options: [
        "A' ∩ B'",
        "A' ∪ B'",
        "A ∪ B",
        "(A ∪ B)'"
      ],
      answer: "A' ∪ B'",
      hint: "The complement of an intersection is the union of complements.",
      explanation: "De Morgan's Laws: (A ∪ B)' = A' ∩ B' and (A ∩ B)' = A' ∪ B'. The complement of an intersection gives a union of complements. These laws are fundamental in both set theory and Boolean algebra."
    },
    {
      id: 6,
      question: "Let A = {1, 2} and B = {a, b, c}. What is |A × B| (the cardinality of the Cartesian product)?",
      options: [
        "2",
        "3",
        "5",
        "6"
      ],
      answer: "6",
      hint: "Multiply the sizes of the two sets together.",
      explanation: "|A × B| = |A| × |B| = 2 × 3 = 6. The pairs are (1,a), (1,b), (1,c), (2,a), (2,b), (2,c)."
    },
    {
      id: 7,
      question: "Which of the following statements about the empty set ∅ is TRUE?",
      options: [
        "∅ is NOT a subset of any non-empty set",
        "∅ ⊆ A for every set A",
        "∅ has exactly one element",
        "∅ is equal to {0}"
      ],
      answer: "∅ ⊆ A for every set A",
      hint: "What does it mean to be a subset? Can any element of ∅ fail to be in A?",
      explanation: "∅ is a subset of every set because the subset condition 'every element of ∅ is in A' is vacuously true — there are no elements in ∅ that could violate the condition. Note: ∅ ≠ {0} because {0} contains one element (the number zero), while ∅ contains none."
    },
    {
      id: 8,
      question: "If A = {1, 2, 3, 4, 5} and B = {3, 4, 5, 6, 7}, what is A ∩ B?",
      options: [
        "{1, 2, 6, 7}",
        "{1, 2, 3, 4, 5, 6, 7}",
        "{3, 4, 5}",
        "∅"
      ],
      answer: "{3, 4, 5}",
      hint: "Intersection keeps only elements present in BOTH sets.",
      explanation: "A ∩ B contains elements that appear in both A and B. Checking each: 3 ✓, 4 ✓, 5 ✓. Elements 1, 2 are only in A; elements 6, 7 are only in B. So A ∩ B = {3, 4, 5}."
    },
    {
      id: 9,
      question: "The Distributive Law of sets states that A ∩ (B ∪ C) equals:",
      options: [
        "(A ∩ B) ∩ (A ∩ C)",
        "(A ∩ B) ∪ (A ∩ C)",
        "(A ∪ B) ∩ (A ∪ C)",
        "A ∪ (B ∩ C)"
      ],
      answer: "(A ∩ B) ∪ (A ∩ C)",
      hint: "Intersection distributes over union — similar to multiplication distributing over addition.",
      explanation: "The Distributive Law: A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C). This is the set-theory analogue of a(b + c) = ab + ac in arithmetic. The other form is A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)."
    },
    {
      id: 10,
      question: "In the context of relational databases, the Cartesian product A × B of two tables A and B represents:",
      options: [
        "Only the rows that match on a common column",
        "Every possible pairing of a row from A with a row from B",
        "The rows in A that have no match in B",
        "The union of all distinct rows from both tables"
      ],
      answer: "Every possible pairing of a row from A with a row from B",
      hint: "A × B generates all combinations — it is the foundation of SQL JOINs.",
      explanation: "The Cartesian product pairs every row of A with every row of B, producing m × n rows if A has m rows and B has n rows. A SQL JOIN is a Cartesian product with a WHERE condition (filter) applied to select only matching pairs."
    }
  ]
};

export default foundationMathCh17Quiz;
