const dsPIC = {
  id: "ds-pic",
  title: "Position Independent Code (PIC) Quiz",
  questions: [
    {
      question: "What is Position Independent Code (PIC)?",
      options: [
        "Code that runs only at a fixed memory address",
        "Code that can execute correctly regardless of where it is loaded in memory",
        "Code that is faster than position-dependent code",
        "Code written without any memory references"
      ],
      correctIndex: 1,
      hint: "It is 'independent' of any particular memory position.",
      explanation: "PIC is code that uses relative addressing instead of absolute addresses, allowing it to be loaded at any memory location and execute correctly — essential for shared libraries."
    },
    {
      question: "Which GCC flag generates position-independent code?",
      options: ["-shared", "-fpic", "-fPIC", "Both -fpic and -fPIC"],
      correctIndex: 3,
      hint: "There are both lowercase and uppercase variants.",
      explanation: "Both -fpic and -fPIC generate position-independent code. -fPIC is more conservative and works on all platforms; -fpic may have platform-specific limits on GOT size."
    },
    {
      question: "What is the GOT (Global Offset Table)?",
      options: [
        "A table that stores sorted global variables for binary search",
        "A table that stores the runtime addresses of global variables and external functions",
        "A compile-time structure listing all function prototypes",
        "The entry point table of an executable"
      ],
      correctIndex: 1,
      hint: "It is filled by the dynamic linker at runtime.",
      explanation: "The GOT is a data segment table filled by the dynamic linker at runtime. PIC code accesses global variables and external functions through the GOT using relative offsets."
    },
    {
      question: "What is the PLT (Procedure Linkage Table)?",
      options: [
        "A table used to schedule function calls in order of priority",
        "A table that enables lazy binding of external function calls in PIC code",
        "A list of all procedures (functions) defined in a program",
        "The compiler's internal list of built-in functions"
      ],
      correctIndex: 1,
      hint: "It enables 'lazy' linking — only resolve when first called.",
      explanation: "The PLT is used for external function calls in PIC code. On the first call, the dynamic linker resolves the function address and updates the GOT; subsequent calls go directly to the resolved address."
    },
    {
      question: "Why is PIC required for shared libraries?",
      options: [
        "Shared libraries must be encrypted",
        "Shared libraries need to be loaded at different memory addresses in different processes",
        "Shared libraries cannot use global variables",
        "Shared libraries are larger and need special addressing"
      ],
      correctIndex: 1,
      hint: "Each process may load the library at a different address.",
      explanation: "Multiple processes using the same shared library may load it at different addresses. PIC ensures the same binary code works regardless of its load address, allowing one physical copy to be shared."
    },
    {
      question: "What security feature does PIC enable?",
      options: [
        "Buffer overflow protection in loops",
        "Stack canaries for function returns",
        "Address Space Layout Randomization (ASLR)",
        "Memory encryption at rest"
      ],
      correctIndex: 2,
      hint: "ASLR randomizes where code is loaded in memory.",
      explanation: "ASLR (Address Space Layout Randomization) randomizes the memory addresses where libraries and code are loaded, making exploitation harder. ASLR requires PIC since the code must work at any address."
    },
    {
      question: "What is 'lazy binding' in the context of PIC?",
      options: [
        "A technique where external functions are resolved only when first called, not at startup",
        "A method for compiling code more slowly but with better optimization",
        "A strategy for delaying compilation until runtime",
        "An approach where all symbols are resolved before the program starts"
      ],
      correctIndex: 0,
      hint: "Lazy = done only when necessary.",
      explanation: "With lazy binding (the default), external function addresses are resolved using the PLT the first time they are called, not at program startup. This speeds up startup for programs that don't use all imported functions."
    }
  ]
};

export default dsPIC;
