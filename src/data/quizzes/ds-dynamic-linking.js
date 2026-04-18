const dsDynamicLinking = {
  id: "ds-dynamic-linking",
  title: "Dynamic Linking with Shared Libraries Quiz",
  questions: [
    {
      question: "When does dynamic linking resolve library references?",
      options: [
        "At compile time",
        "At assembly time",
        "At program startup or when first called (runtime)",
        "During preprocessing"
      ],
      correctIndex: 2,
      hint: "'Dynamic' implies it happens while the program is running.",
      explanation: "Dynamic linking defers symbol resolution to runtime. Libraries are loaded when the program starts or (with lazy binding) when the function is first called."
    },
    {
      question: "What is the file extension for a shared library on Linux?",
      options: [".a", ".dll", ".so", ".lib"],
      correctIndex: 2,
      hint: "so = Shared Object.",
      explanation: "On Linux/UNIX, shared libraries use the .so (Shared Object) extension. On Windows they are .dll (Dynamic Link Library); on macOS they are .dylib."
    },
    {
      question: "Which GCC flag generates position-independent code required for shared libraries?",
      options: ["-shared", "-fPIC", "-dynamic", "-rpath"],
      correctIndex: 1,
      hint: "PIC = Position Independent Code.",
      explanation: "-fPIC (Position Independent Code) generates code that can be loaded at any memory address, which is required for shared libraries that multiple processes share."
    },
    {
      question: "What is a key advantage of dynamic linking over static linking?",
      options: [
        "The executable is larger and thus runs faster",
        "No runtime dependencies are needed",
        "Multiple programs share one copy of the library in memory, reducing RAM usage",
        "Compilation is slower but execution is faster"
      ],
      correctIndex: 2,
      hint: "Only one copy of the library lives in RAM regardless of how many programs use it.",
      explanation: "With dynamic linking, the OS loads one copy of a shared library into memory and maps it into the address space of all processes that need it, saving RAM."
    },
    {
      question: "What command verifies which shared libraries a dynamically linked program depends on?",
      options: ["nm", "objdump -d", "ldd", "readelf -S"],
      correctIndex: 2,
      hint: "It prints the shared library dependencies.",
      explanation: "ldd (List Dynamic Dependencies) shows the shared libraries required by an executable and where the system will find them at runtime."
    },
    {
      question: "What is a disadvantage of dynamic linking?",
      options: [
        "The executable is too large to distribute",
        "If a required shared library is missing or incompatible, the program fails at runtime",
        "Dynamic programs cannot use standard I/O",
        "Compilation always takes longer"
      ],
      correctIndex: 1,
      hint: "Think about 'DLL hell' or missing .so files.",
      explanation: "If a required shared library is not present or the version is incompatible, a dynamically linked program will fail to start. Static linking avoids this by embedding all libraries."
    },
    {
      question: "If a shared library is updated to fix a bug, what must happen for all programs using it to benefit?",
      options: [
        "All programs must be recompiled",
        "Nothing — they automatically use the new library version next time they run",
        "The OS must be rebooted",
        "The library must be statically linked again"
      ],
      correctIndex: 1,
      hint: "This is one of the main advantages of dynamic linking.",
      explanation: "Dynamically linked programs load the library at runtime, so they automatically use the updated version the next time they run — no recompilation needed. This is a key maintenance advantage."
    }
  ]
};

export default dsDynamicLinking;
