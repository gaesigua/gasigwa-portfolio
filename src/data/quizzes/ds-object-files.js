const dsObjectFiles = {
  id: "ds-object-files",
  title: "Relocatable and Executable Object Files Quiz",
  questions: [
    {
      question: "What produces a relocatable object file?",
      options: ["The preprocessor", "The linker", "The assembler", "The dynamic loader"],
      correctIndex: 2,
      hint: "The step after the compiler produces assembly (.s).",
      explanation: "The assembler converts assembly language (.s) into machine code and produces a relocatable object file (.o) with symbolic/relative addresses."
    },
    {
      question: "Why can a relocatable object file NOT be executed directly?",
      options: [
        "It is encrypted and must be decrypted first",
        "Its memory addresses are not final and external symbols may be unresolved",
        "It has not been compressed yet",
        "It only contains data, no code"
      ],
      correctIndex: 1,
      hint: "Two reasons: addresses and symbols.",
      explanation: "Relocatable object files use symbolic/relative addresses (not final absolute addresses) and may contain unresolved references to external symbols — both must be fixed by the linker."
    },
    {
      question: "What is the common file extension for a relocatable object file on Linux?",
      options: [".i", ".s", ".o", ".so"],
      correctIndex: 2,
      hint: "Object file.",
      explanation: "On Linux/UNIX, relocatable object files use the .o extension. On Windows they use .obj."
    },
    {
      question: "What produces an executable object file?",
      options: ["The assembler", "The compiler", "The linker", "The preprocessor"],
      correctIndex: 2,
      hint: "It's the final stage of the build process.",
      explanation: "The linker takes one or more relocatable object files and static/dynamic libraries, resolves all symbols, assigns final memory addresses, and produces the executable."
    },
    {
      question: "What format is commonly used for executable files on Linux?",
      options: ["COFF", "ELF", "PE", "Mach-O"],
      correctIndex: 1,
      hint: "ELF stands for Executable and Linkable Format.",
      explanation: "ELF (Executable and Linkable Format) is the standard format for executables, shared objects, and core dumps on Linux. PE is used on Windows; Mach-O on macOS."
    },
    {
      question: "Which tool inspects the symbols of a relocatable object file?",
      options: ["ldd", "nm", "gcc", "make"],
      correctIndex: 1,
      hint: "It lists names (symbols).",
      explanation: "nm lists all symbols (functions and variables) in an object file, showing whether each is defined (T = text section), undefined (U), or in other sections."
    },
    {
      question: "What is one key reason why separate compilation (multiple .o files) is used in large projects?",
      options: [
        "It makes the final executable smaller",
        "Only changed files need to be recompiled, saving time",
        "It enables static linking",
        "The compiler works better with smaller inputs"
      ],
      correctIndex: 1,
      hint: "Think about what changes when you edit one file out of 500.",
      explanation: "Separate compilation means only the modified .c file needs to be recompiled; all unchanged .o files are reused. This dramatically reduces build times in large projects."
    }
  ]
};

export default dsObjectFiles;
