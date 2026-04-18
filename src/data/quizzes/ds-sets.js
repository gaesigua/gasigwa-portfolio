const dsSets = {
  id: "ds-sets",
  title: "Sets Quiz",
  questions: [
    {
      question: "Which property correctly describes a mathematical set?",
      options: [
        "Elements are ordered and can repeat",
        "Elements are unordered and all distinct (no duplicates)",
        "Elements are ordered and all distinct",
        "Elements are unordered and can repeat"
      ],
      correctIndex: 1,
      hint: "Two key properties: order and uniqueness.",
      explanation: "A set is an unordered collection of distinct elements. {1,2,3} and {3,1,2} are the same set. {1,2,2} is invalid as a set because 2 repeats."
    },
    {
      question: "Given A = {1,2,3} and B = {3,4,5}, what is A ∪ B?",
      options: [
        "{3}",
        "{1,2,3,4,5}",
        "{1,2}",
        "{4,5}"
      ],
      correctIndex: 1,
      hint: "Union combines all unique elements from both sets.",
      explanation: "A ∪ B (Union) combines all elements from both sets, removing duplicates: {1,2,3} ∪ {3,4,5} = {1,2,3,4,5}."
    },
    {
      question: "Given A = {1,2,3} and B = {2,3,4}, what is A ∩ B?",
      options: [
        "{1,2,3,4}",
        "{1}",
        "{2,3}",
        "{4}"
      ],
      correctIndex: 2,
      hint: "Intersection keeps only what both sets share.",
      explanation: "A ∩ B (Intersection) contains only elements present in both A and B: {1,2,3} ∩ {2,3,4} = {2,3}."
    },
    {
      question: "Given A = {1,2,3} and B = {2,3,4}, what is A − B (A minus B)?",
      options: [
        "{2,3}",
        "{1,4}",
        "{1}",
        "{4}"
      ],
      correctIndex: 2,
      hint: "Difference keeps elements in A that are NOT in B.",
      explanation: "A − B contains elements in A that are not in B: {1,2,3} − {2,3,4} = {1}. The elements 2 and 3 are removed because they appear in B."
    },
    {
      question: "In Python, which operator computes the symmetric difference of two sets (elements in either A or B but not both)?",
      options: ["A | B", "A & B", "A ^ B", "A - B"],
      correctIndex: 2,
      hint: "Think XOR symbol.",
      explanation: "The ^ operator in Python computes symmetric difference: elements that are in A or B but not in both. A = {1,2,3}, B = {2,3,4}: A ^ B = {1,4}."
    },
    {
      question: "What is the result of checking '5 in {1, 3, 5, 7}'?",
      options: ["False", "True", "Error", "0"],
      correctIndex: 1,
      hint: "Is 5 a member of the set?",
      explanation: "The 'in' operator checks set membership. 5 is an element of {1,3,5,7}, so the result is True. This is an O(1) average operation in most implementations."
    },
    {
      question: "Which real-world application best demonstrates the use of the set Union operation?",
      options: [
        "Finding students enrolled in both Math and Physics",
        "Finding all unique students enrolled in either Math or Physics (or both)",
        "Removing all students from the Math class",
        "Sorting students by their grade"
      ],
      correctIndex: 1,
      hint: "Union combines with no repetition.",
      explanation: "Union (∪) is ideal for finding all unique members across multiple groups — e.g., all unique students from two class rosters, without counting anyone twice."
    }
  ]
};

export default dsSets;
