const dsSymbolResolution = {
  id: "ds-symbol-resolution",
  title: "Symbol Resolution Quiz",
  questions: [
    {
      question: "What is symbol resolution?",
      options: [
        "The process of compiling source code to machine code",
        "Matching variable/function references to their definitions during linking or runtime",
        "Converting assembly instructions to binary",
        "Allocating stack memory for local variables"
      ],
      correctIndex: 1,
      hint: "Every reference needs to be matched to a definition.",
      explanation: "Symbol resolution is the process by which the linker (or dynamic loader) matches each reference to a symbol (variable, function) to its actual definition."
    },
    {
      question: "Which keyword in C declares that a symbol is defined in another file?",
      options: ["static", "extern", "global", "public"],
      correctIndex: 1,
      hint: "It means 'look elsewhere for the definition'.",
      explanation: "The 'extern' keyword declares that a variable or function is defined in another translation unit (file). The linker then resolves this reference during linking."
    },
    {
      question: "What type of symbol is declared outside all functions and visible across all source files?",
      options: ["Local symbol", "Static symbol", "Global symbol", "External symbol"],
      correctIndex: 2,
      hint: "It is accessible from any file in the program.",
      explanation: "Global symbols are declared outside any function, stored in the global symbol table, and are accessible from any other source file in the program after linking."
    },
    {
      question: "When does symbol resolution for local symbols occur?",
      options: [
        "At runtime by the OS loader",
        "At compile time by the compiler",
        "At link time by the linker",
        "During preprocessing"
      ],
      correctIndex: 1,
      hint: "Local variables live on the stack — decided early.",
      explanation: "Local symbols (variables declared inside functions) are resolved at compile time. The compiler assigns them stack offsets; the linker is not involved."
    },
    {
      question: "What error occurs when a symbol is referenced but never defined in any file?",
      options: [
        "Segmentation fault",
        "Stack overflow",
        "Undefined reference / Unresolved symbol",
        "Type mismatch"
      ],
      correctIndex: 2,
      hint: "The linker searches all object files and cannot find the definition.",
      explanation: "An 'undefined reference' or 'unresolved symbol' error occurs when the linker cannot find the definition of a referenced symbol in any of the object files or libraries."
    },
    {
      question: "What error occurs when the same symbol is defined more than once?",
      options: [
        "Undefined reference",
        "Multiple definition",
        "Symbol overflow",
        "Relocation error"
      ],
      correctIndex: 1,
      hint: "The linker finds two definitions and doesn't know which to use.",
      explanation: "A 'multiple definition' error occurs when the same global symbol is defined in more than one object file. The linker cannot determine which definition to use."
    },
    {
      question: "Where does dynamic symbol resolution occur?",
      options: [
        "During preprocessing",
        "At compile time",
        "At link time",
        "At runtime when shared libraries are loaded"
      ],
      correctIndex: 3,
      hint: "Think 'dynamic' — it happens while the program is running.",
      explanation: "Dynamic symbol resolution occurs at runtime: when a program starts, the dynamic loader (ld.so) loads shared libraries and resolves any symbols they provide."
    }
  ]
};

export default dsSymbolResolution;
