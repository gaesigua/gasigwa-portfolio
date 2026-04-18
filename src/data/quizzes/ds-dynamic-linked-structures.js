const dsLinkedStructures = {
  id: "ds-dynamic-linked-structures",
  title: "Dynamic Linked Structures Quiz",
  questions: [
    {
      question: "What is a dynamic linked structure?",
      options: [
        "A data structure that uses a fixed-size array",
        "A data structure whose size can change at runtime, with elements connected by pointers",
        "A data structure stored entirely in contiguous memory",
        "A data structure that can only grow, never shrink"
      ],
      correctIndex: 1,
      hint: "Think about what 'dynamic' and 'linked' each mean.",
      explanation: "Dynamic linked structures can grow or shrink at runtime, and their elements (nodes) are connected using pointers rather than occupying contiguous memory."
    },
    {
      question: "What two fields does a typical singly linked list node contain?",
      options: [
        "data and index",
        "key and value",
        "data and next (pointer to next node)",
        "left and right"
      ],
      correctIndex: 2,
      hint: "One field stores the value; the other stores an address.",
      explanation: "A singly linked list node has a data field (storing the value) and a next pointer (storing the address of the next node)."
    },
    {
      question: "Which C function is used to allocate memory dynamically for a new node?",
      options: ["new()", "alloc()", "malloc()", "create()"],
      correctIndex: 2,
      hint: "It stands for 'memory allocation'.",
      explanation: "malloc() (memory allocation) from <stdlib.h> allocates a specified number of bytes at runtime and returns a pointer to the allocated memory."
    },
    {
      question: "What is the main advantage of dynamic linked structures over arrays?",
      options: [
        "Faster random access",
        "Smaller memory footprint per element",
        "Efficient insertion and deletion without shifting elements",
        "Simpler code to write"
      ],
      correctIndex: 2,
      hint: "Think about what happens when you insert into the middle of an array.",
      explanation: "Inserting or deleting in an array requires shifting all subsequent elements. In a linked structure, you just update a pointer — O(1) operation at a known position."
    },
    {
      question: "What happens if you forget to call free() after using malloc() in C?",
      options: [
        "The program crashes immediately",
        "A memory leak occurs — the allocated memory is never returned to the OS",
        "The compiler warns and automatically frees it",
        "The pointer becomes NULL"
      ],
      correctIndex: 1,
      hint: "Consider what 'leak' implies about memory.",
      explanation: "Not calling free() on malloc'd memory causes a memory leak: the memory remains allocated for the lifetime of the program, reducing available RAM."
    },
    {
      question: "Which of these is NOT a characteristic of dynamic linked structures?",
      options: [
        "Non-contiguous memory storage",
        "Dynamic memory allocation",
        "Direct indexing like arrays",
        "Efficient insertion and deletion"
      ],
      correctIndex: 2,
      hint: "Think about how you access elements — element number 5.",
      explanation: "Dynamic linked structures do NOT support direct indexing. To reach element n, you must traverse from the head, requiring O(n) time."
    },
    {
      question: "In a singly linked list, what value does the 'next' pointer of the last node hold?",
      options: ["0", "NULL", "The address of the head node", "An undefined value"],
      correctIndex: 1,
      hint: "It signals the end of the list.",
      explanation: "The last node's next pointer is set to NULL, which signals the end of the list and prevents traversal beyond it."
    }
  ]
};

export default dsLinkedStructures;
