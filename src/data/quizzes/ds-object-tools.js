const dsObjectTools = {
  id: "ds-object-tools",
  title: "Tools for Manipulating Object Files Quiz",
  questions: [
    {
      question: "What does the 'nm' command do?",
      options: [
        "Disassembles machine code to assembly instructions",
        "Lists symbols (functions and variables) defined or referenced in object files",
        "Shows shared library dependencies of an executable",
        "Creates a static library from object files"
      ],
      correctIndex: 1,
      hint: "nm = name list.",
      explanation: "nm lists all symbols in object files or executables, showing each symbol's type (T = defined in text, U = undefined, B = BSS, etc.) and name."
    },
    {
      question: "What does 'objdump -d' do?",
      options: [
        "Dumps an object file to binary text format",
        "Disassembles the code section of an object file to assembly language",
        "Lists dynamic library dependencies",
        "Removes debug symbols from an object file"
      ],
      correctIndex: 1,
      hint: "-d flag = disassemble.",
      explanation: "objdump -d disassembles the code (.text) sections of object files or executables, showing the assembly instructions alongside their addresses. Useful for debugging and reverse engineering."
    },
    {
      question: "Which tool shows the ELF file header information including entry point address and architecture?",
      options: ["nm", "ldd", "readelf -h", "ar -t"],
      correctIndex: 2,
      hint: "readelf reads ELF format; -h shows the header.",
      explanation: "readelf -h displays the ELF header: file type (EXEC, DYN, REL), entry point address, machine architecture, section offsets, and more — essential for understanding binary file layout."
    },
    {
      question: "What is the 'ar' command used for?",
      options: [
        "Archiving and compressing files with gzip",
        "Creating and managing static library (.a) files from object files",
        "Showing assembly-level code of object files",
        "Analyzing runtime performance of executables"
      ],
      correctIndex: 1,
      hint: "ar = archiver; it creates .a archives.",
      explanation: "ar creates, modifies, and extracts static libraries (.a files). The command 'ar rcs libmath.a math.o' inserts math.o into libmath.a with an index for fast symbol lookup."
    },
    {
      question: "After compiling an object file, you use nm and see 'U printf'. What does 'U' mean?",
      options: [
        "printf is defined in this file (uppercase)",
        "printf is an undefined symbol that the linker must resolve",
        "printf is in the uninitialized data section",
        "printf is only used once"
      ],
      correctIndex: 1,
      hint: "U = Undefined.",
      explanation: "In nm output, 'U' means the symbol is referenced (used) in this file but not defined here. The linker must find its definition in another object file or library (e.g., libc for printf)."
    },
    {
      question: "What does 'T' mean in nm output?",
      options: [
        "The symbol is in the uninitialized BSS section",
        "The symbol is a type alias",
        "The symbol is defined in the text (code) section",
        "The symbol is temporary"
      ],
      correctIndex: 2,
      hint: "T = Text section = code section.",
      explanation: "'T' in nm output means the symbol is defined in the .text section (the code section). Functions you define will appear with 'T', meaning their machine code is in this file."
    },
    {
      question: "What information does 'ldd ./program' provide?",
      options: [
        "The disassembly of the program's main function",
        "The list of shared libraries the program depends on and where to find them",
        "The symbol table of the program",
        "The compilation flags used to build the program"
      ],
      correctIndex: 1,
      hint: "ldd = List Dynamic Dependencies.",
      explanation: "ldd prints each shared library required by the executable along with the path where the dynamic linker will find it at runtime. A '=> not found' entry indicates a missing library."
    }
  ]
};

export default dsObjectTools;
