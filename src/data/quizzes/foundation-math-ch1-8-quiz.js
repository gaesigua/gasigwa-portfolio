const foundationMathCh18Quiz = {
  title: "Chapter 1.8: Relations Quiz",
  questions: [
    {
      id: 1,
      question: "A binary relation from set A to set B is formally defined as:",
      options: [
        "A function that maps every element of A to exactly one element of B",
        "Any subset of the Cartesian product A × B",
        "A bijection between A and B",
        "The set of all elements shared by A and B"
      ],
      answer: "Any subset of the Cartesian product A × B",
      hint: "Relations are more general than functions — not every element needs to be paired.",
      explanation: "A binary relation R from A to B is any subset R ⊆ A × B. Functions are a special type of relation where every element of A is paired with exactly one element of B, but a general relation can pair elements in any way."
    },
    {
      id: 2,
      question: "The relation 'is a sibling of' among people is symmetric. Which of the following is also symmetric?",
      options: [
        "'is a parent of'",
        "'is older than'",
        "'is a friend of' (mutual friendship)",
        "'divides' on ℕ"
      ],
      answer: "'is a friend of' (mutual friendship)",
      hint: "A relation is symmetric if whenever a R b, then b R a.",
      explanation: "Mutual friendship is symmetric: if Alice is friends with Bob, then Bob is friends with Alice. 'Is a parent of' is not symmetric (Bob cannot be Alice's parent if Alice is Bob's parent). 'Is older than' and 'divides' are also not symmetric."
    },
    {
      id: 3,
      question: "The relation '≤' (less than or equal to) on real numbers satisfies which combination of properties?",
      options: [
        "Reflexive, Symmetric, Transitive",
        "Reflexive, Antisymmetric, Transitive",
        "Irreflexive, Symmetric, Transitive",
        "Reflexive, Symmetric, Antisymmetric"
      ],
      answer: "Reflexive, Antisymmetric, Transitive",
      hint: "Is a ≤ a always true? If a ≤ b and b ≤ a, what must be true?",
      explanation: "≤ is: Reflexive (a ≤ a for all a ∈ ℝ), Antisymmetric (if a ≤ b and b ≤ a then a = b), and Transitive (if a ≤ b and b ≤ c then a ≤ c). It is NOT symmetric because a ≤ b does not imply b ≤ a."
    },
    {
      id: 4,
      question: "Congruence modulo 5 (a ≡ b mod 5) is an equivalence relation. Into how many equivalence classes does it partition the integers?",
      options: [
        "2",
        "3",
        "5",
        "Infinitely many"
      ],
      answer: "5",
      hint: "The classes correspond to the possible remainders when dividing by 5.",
      explanation: "When dividing any integer by 5, the remainder can be 0, 1, 2, 3, or 4 — exactly 5 possibilities. Each remainder defines one equivalence class: [0], [1], [2], [3], [4]. Every integer falls into exactly one class."
    },
    {
      id: 5,
      question: "Which set of properties defines a Partial Order?",
      options: [
        "Reflexive, Symmetric, Transitive",
        "Reflexive, Antisymmetric, Transitive",
        "Irreflexive, Symmetric, Transitive",
        "Reflexive, Symmetric, Antisymmetric"
      ],
      answer: "Reflexive, Antisymmetric, Transitive",
      hint: "Think about '≤' — it is the prototypical partial order.",
      explanation: "A partial order (also called a non-strict order) must be: (1) Reflexive — every element is related to itself; (2) Antisymmetric — if a ≤ b and b ≤ a, then a = b; (3) Transitive — if a ≤ b and b ≤ c, then a ≤ c. An equivalence relation requires symmetric, not antisymmetric."
    },
    {
      id: 6,
      question: "The 'divides' relation (|) on ℕ (where a | b means a divides b) is a partial order but NOT a total order. Why?",
      options: [
        "Because 'divides' is not transitive",
        "Because some pairs like {3, 5} are incomparable — neither 3|5 nor 5|3",
        "Because 'divides' is not reflexive",
        "Because 'divides' is symmetric"
      ],
      answer: "Because some pairs like {3, 5} are incomparable — neither 3|5 nor 5|3",
      hint: "A total order requires every pair to be comparable. Is that always the case with divisibility?",
      explanation: "A total order requires that for every pair (a, b), either a | b or b | a. But 3 does not divide 5 (5 = 3×1 + 2), and 5 does not divide 3 (3 = 5×0 + 3). So 3 and 5 are incomparable under divisibility, making it only a partial order."
    },
    {
      id: 7,
      question: "An equivalence relation on a set A always produces a partition of A. What is true of a partition?",
      options: [
        "The blocks can overlap and some elements may not be in any block",
        "The blocks are disjoint, non-empty, and their union covers all of A",
        "There is always exactly 2 blocks",
        "Every block must contain more than one element"
      ],
      answer: "The blocks are disjoint, non-empty, and their union covers all of A",
      hint: "A partition is a way of dividing a set with no gaps and no overlaps.",
      explanation: "A partition of set A is a collection of non-empty subsets (blocks) such that: (1) every block is non-empty, (2) any two different blocks are disjoint (no element belongs to two blocks), and (3) the union of all blocks equals A (every element is in some block). Equivalence classes automatically satisfy all three conditions."
    },
    {
      id: 8,
      question: "In a Hasse diagram for a poset, why are self-loops and 'implied' transitive edges typically omitted?",
      options: [
        "Because they would make the diagram non-planar",
        "Because they are redundant — they can be deduced from the reflexive and transitive properties",
        "Because they represent antisymmetric pairs only",
        "Because Hasse diagrams only show symmetric relations"
      ],
      answer: "Because they are redundant — they can be deduced from the reflexive and transitive properties",
      hint: "Hasse diagrams are designed to be minimal — showing only the essential 'cover' relationships.",
      explanation: "In a poset, reflexivity guarantees every element relates to itself (self-loops), and transitivity lets us infer long-range relationships from shorter ones. Hasse diagrams show only 'cover' relations (direct edges a → b where no c sits strictly between a and b), keeping the diagram uncluttered. All other relations can be derived from these."
    },
    {
      id: 9,
      question: "Which real-world computing concept is most directly modelled by a partial order?",
      options: [
        "Hash table collision resolution",
        "Task dependency scheduling (e.g., build systems like 'make')",
        "HTTP request routing",
        "Binary search on a sorted array"
      ],
      answer: "Task dependency scheduling (e.g., build systems like 'make')",
      hint: "Think about which task must come before another, without a required order between independent tasks.",
      explanation: "Build systems use a partial order of task dependencies: 'compile A before linking B'. Tasks with no dependency between them (like compiling two independent files) are incomparable — their relative order doesn't matter. Topological sort is the algorithm that finds a valid execution order for any directed acyclic graph (DAG), which is precisely a partial order."
    },
    {
      id: 10,
      question: "Which of the following correctly describes the relationship between equivalence relations and equality (=)?",
      options: [
        "Equality is NOT an equivalence relation because it is antisymmetric",
        "Equality (=) is a special equivalence relation where every equivalence class has exactly one element",
        "Equivalence relations are always more general than equality and have larger equivalence classes",
        "Equality and equivalence relations have nothing in common"
      ],
      answer: "Equality (=) is a special equivalence relation where every equivalence class has exactly one element",
      hint: "Verify: is equality reflexive, symmetric, and transitive?",
      explanation: "Equality satisfies all three properties: Reflexive (a = a), Symmetric (a = b ⇒ b = a), Transitive (a = b and b = c ⇒ a = c). Its equivalence classes are singletons {a}, because the only element equal to a is a itself. Every other equivalence relation 'groups' more elements together — equality is the finest possible partition."
    }
  ]
};

export default foundationMathCh18Quiz;
