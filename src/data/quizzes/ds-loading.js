const dsLoading = {
  id: "ds-loading",
  title: "Loading Executable Files Quiz",
  questions: [
    {
      question: "What is a loader?",
      options: [
        "A tool that compiles source code",
        "An OS component that prepares an executable for execution by loading it into memory",
        "A program that links object files",
        "A hardware device that reads disk sectors"
      ],
      correctIndex: 1,
      hint: "It 'loads' the program into RAM so it can run.",
      explanation: "The loader is a component of the operating system responsible for reading an executable file from disk, loading it into main memory (RAM), and starting its execution."
    },
    {
      question: "What is the first step the loader performs when a program is executed?",
      options: [
        "Transfer control to main()",
        "Load shared libraries",
        "Allocate memory for code, data, stack, and heap",
        "Parse command-line arguments"
      ],
      correctIndex: 2,
      hint: "Before anything runs, space must be reserved.",
      explanation: "The loader first allocates memory segments for the program's code (text), initialized data, stack, and heap before doing anything else."
    },
    {
      question: "Which type of loader loads shared libraries at program startup automatically?",
      options: [
        "Bootstrap loader",
        "Absolute loader",
        "Dynamic loader (ld.so on Linux)",
        "Relocating loader"
      ],
      correctIndex: 2,
      hint: "On Linux it's called ld.so or ld-linux.so.",
      explanation: "The dynamic loader (ld.so / ld-linux.so on Linux) automatically loads required shared libraries (.so files) into memory before transferring control to the program."
    },
    {
      question: "Which C function allows a program to explicitly load a shared library at runtime on Linux?",
      options: ["loadlib()", "import()", "dlopen()", "link()"],
      correctIndex: 2,
      hint: "dl = dynamic linker.",
      explanation: "dlopen() from <dlfcn.h> loads a shared library at runtime. Combined with dlsym() to get symbol addresses and dlclose() to unload, it enables explicit dynamic loading."
    },
    {
      question: "After loading the executable and libraries, what does the loader do last?",
      options: [
        "Compiles the code",
        "Writes the executable to disk",
        "Transfers control to the program's entry point",
        "Deallocates all memory"
      ],
      correctIndex: 2,
      hint: "The loader hands off execution to the program.",
      explanation: "The loader's final act is to transfer control to the program's entry point — typically a startup routine that initializes the C runtime and calls main()."
    },
    {
      question: "What does the ldd command do?",
      options: [
        "Lists all global symbols in an executable",
        "Shows which shared libraries an executable depends on at runtime",
        "Disassembles an object file to assembly",
        "Compiles and links a C program"
      ],
      correctIndex: 1,
      hint: "ldd = List Dynamic Dependencies.",
      explanation: "ldd prints the shared libraries required by an executable, showing the path where each will be loaded. Useful for debugging 'library not found' runtime errors."
    },
    {
      question: "Which of these is set up by the loader and passed to main() in a C program?",
      options: [
        "The object file symbol table",
        "argc and argv (command-line arguments)",
        "The preprocessor macro definitions",
        "The static library contents"
      ],
      correctIndex: 1,
      hint: "They're the parameters to main().",
      explanation: "The loader initializes argc (argument count) and argv (argument vector) from the command line and stack, passing them to the program's entry point which eventually calls main()."
    }
  ]
};

export default dsLoading;
