const dsStaticLinking = {
  id: "ds-static-linking",
  title: "Static Linking Quiz",
  questions: [
    {
      question: "What is static linking?",
      options: [
        "Linking libraries at runtime when the program starts",
        "Embedding all required library code directly into the executable at compile time",
        "Linking only the symbols that are actually called",
        "Sharing library code between multiple programs in memory"
      ],
      correctIndex: 1,
      hint: "The word 'static' implies it happens at a fixed, early time.",
      explanation: "Static linking copies all required library functions into the executable at compile time, creating a self-contained binary that doesn't need external libraries at runtime."
    },
    {
      question: "What is the file extension for a static library on Linux?",
      options: [".so", ".dll", ".a", ".lib"],
      correctIndex: 2,
      hint: "It's an 'archive' of object files.",
      explanation: "Static libraries on Linux use the .a (archive) extension. They are created with the 'ar' command and contain one or more .o object files bundled together."
    },
    {
      question: "What command creates a static library from an object file on Linux?",
      options: [
        "gcc -shared -o libmath.a math.o",
        "ar rcs libmath.a math.o",
        "ld -static libmath.a math.o",
        "make libmath.a"
      ],
      correctIndex: 1,
      hint: "The 'ar' tool creates archives.",
      explanation: "'ar rcs libmath.a math.o' creates a static library. 'r' = insert/replace, 'c' = create archive if needed, 's' = write an index (symbol table)."
    },
    {
      question: "Which is a disadvantage of static linking?",
      options: [
        "Programs cannot run without internet access",
        "The executable file is larger because library code is embedded",
        "Static programs require the user to install libraries",
        "Static programs cannot use standard C functions"
      ],
      correctIndex: 1,
      hint: "All that library code has to go somewhere...",
      explanation: "Static linking embeds all used library code into the executable, making the file significantly larger. This is the main trade-off for the portability benefit."
    },
    {
      question: "In what scenario is static linking preferred over dynamic linking?",
      options: [
        "When memory usage must be minimized across many running programs",
        "When the program must run on systems where the required libraries may not be installed",
        "When the library is updated very frequently",
        "When multiple programs share the same library"
      ],
      correctIndex: 1,
      hint: "Think about deploying to an unknown or minimal system.",
      explanation: "Static linking is preferred when deploying to systems where shared libraries may not be available, ensuring the executable is totally self-contained and portable."
    },
    {
      question: "What happens when a bug is fixed in a statically linked library?",
      options: [
        "All programs using it are automatically updated",
        "Only the library file needs to be updated",
        "All statically linked programs must be recompiled to include the fix",
        "The OS patches it at startup"
      ],
      correctIndex: 2,
      hint: "The library code lives inside the executable, not outside.",
      explanation: "Because the library code is copied into each executable, all statically linked programs must be recompiled against the updated library to benefit from the bug fix."
    },
    {
      question: "What flag forces gcc to use static linking?",
      options: ["-link-static", "-s", "-static", "--embed-libs"],
      correctIndex: 2,
      hint: "Pass it directly to gcc.",
      explanation: "The '-static' flag forces gcc to use static linking, embedding all library code into the executable rather than referencing shared libraries."
    }
  ]
};

export default dsStaticLinking;
