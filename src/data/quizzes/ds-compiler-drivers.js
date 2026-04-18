const dsCompilerDrivers = {
  id: "ds-compiler-drivers",
  title: "Compiler Drivers and Program Linking Quiz",
  questions: [
    {
      question: "What is a compiler driver?",
      options: [
        "A hardware component that speeds up compilation",
        "A system program that coordinates all stages of compilation automatically",
        "A text editor designed for writing code",
        "A program that runs compiled executables"
      ],
      correctIndex: 1,
      hint: "Think about who 'drives' the compilation pipeline.",
      explanation: "A compiler driver (e.g., gcc) is a system program that automatically invokes the preprocessor, compiler, assembler, and linker in the correct order to produce an executable."
    },
    {
      question: "What is the correct order of compilation phases?",
      options: [
        "Compilation → Preprocessing → Assembly → Linking",
        "Preprocessing → Compilation → Assembly → Linking",
        "Preprocessing → Assembly → Compilation → Linking",
        "Linking → Compilation → Preprocessing → Assembly"
      ],
      correctIndex: 1,
      hint: "What happens before the compiler even sees your code?",
      explanation: "The correct order is: (1) Preprocessing — handles #include and macros; (2) Compilation — produces assembly; (3) Assembly — produces object code; (4) Linking — produces the executable."
    },
    {
      question: "What file extension does the preprocessor output in GCC?",
      options: [".s", ".o", ".i", ".out"],
      correctIndex: 2,
      hint: "It comes right after the source file (.c).",
      explanation: "The preprocessor produces a .i file: the expanded source code with all #include files inserted and macros expanded, but before actual compilation."
    },
    {
      question: "What does the -c flag do in 'gcc -c hello.c'?",
      options: [
        "Compiles and links producing an executable",
        "Only runs the preprocessor",
        "Compiles and assembles but does NOT link, producing a .o object file",
        "Creates a shared library"
      ],
      correctIndex: 2,
      hint: "You get a .o file, not an executable.",
      explanation: "The -c flag stops after the assembly stage, generating an object file (.o) without linking. This is used for separate compilation of multiple source files."
    },
    {
      question: "What does the linker do?",
      options: [
        "Converts source code to assembly language",
        "Combines object files and library functions to produce an executable",
        "Removes comments and expands macros",
        "Translates assembly to machine code"
      ],
      correctIndex: 1,
      hint: "It's the final step before you can run the program.",
      explanation: "The linker (ld) combines multiple .o files, resolves symbol references, links library functions, and produces the final executable."
    },
    {
      question: "To compile a C program that uses the math library (sqrt, pow), which gcc flag must you add?",
      options: ["-math", "-lm", "-math.h", "-stdlib"],
      correctIndex: 1,
      hint: "Tell the linker to link the 'm' (math) library.",
      explanation: "-lm tells the linker to search for and include the math library (libm). Without it, the linker cannot find sqrt(), pow(), and similar functions, causing an 'undefined reference' error."
    },
    {
      question: "Which tool is described as the 'compiler driver' for C programs?",
      options: ["ld", "as", "gcc", "cpp"],
      correctIndex: 2,
      hint: "It's the command you type to compile a C file.",
      explanation: "gcc (GNU Compiler Collection) is the compiler driver for C. It internally calls the preprocessor (cpp), compiler (cc1), assembler (as), and linker (ld) as needed."
    }
  ]
};

export default dsCompilerDrivers;
