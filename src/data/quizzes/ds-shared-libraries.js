const dsSharedLibraries = {
  id: "ds-shared-libraries",
  title: "Loading and Linking Shared Libraries from Applications Quiz",
  questions: [
    {
      question: "What does dlopen() do in a C program on Linux?",
      options: [
        "Creates a new shared library",
        "Loads a shared library into memory at runtime and returns a handle",
        "Lists all available shared libraries",
        "Compiles source code into a shared library"
      ],
      correctIndex: 1,
      hint: "dl = dynamic linker; open = load.",
      explanation: "dlopen() from <dlfcn.h> loads a specified shared library (.so) into the process's address space at runtime and returns an opaque handle used to access its symbols."
    },
    {
      question: "What does dlsym() do?",
      options: [
        "Opens a shared library for reading",
        "Closes and unloads a library",
        "Looks up the address of a named symbol (function or variable) in a loaded library",
        "Lists all symbols exported by a library"
      ],
      correctIndex: 2,
      hint: "sym = symbol; gets its address.",
      explanation: "dlsym() takes a handle from dlopen() and a symbol name, and returns the address (as a void*) of that function or variable in the loaded library."
    },
    {
      question: "What is the Windows API equivalent of dlopen()?",
      options: ["OpenLib()", "LoadLibrary()", "ImportDLL()", "AttachLibrary()"],
      correctIndex: 1,
      hint: "It literally 'loads' a 'library'.",
      explanation: "LoadLibrary() is the Windows API function for loading a DLL at runtime. GetProcAddress() then retrieves function addresses, and FreeLibrary() unloads the DLL."
    },
    {
      question: "What is 'load on demand' in the context of runtime linking?",
      options: [
        "Loading all libraries when the OS starts",
        "Libraries compiled into the executable",
        "Loading libraries only when they are actually needed during execution, saving memory",
        "Automatically downloading libraries from the internet"
      ],
      correctIndex: 2,
      hint: "It's about delaying library loading until it's actually needed.",
      explanation: "Load on demand (explicit runtime loading) means a library is only loaded into memory when the program explicitly calls dlopen(), rather than at startup. This reduces memory usage and improves startup time."
    },
    {
      question: "After using dlopen() and dlsym() to call library functions, what should you call when done?",
      options: ["dfree()", "dlclose()", "dlunload()", "free()"],
      correctIndex: 1,
      hint: "The opposite of dlopen.",
      explanation: "dlclose() decrements the reference count of the loaded library. When the count reaches zero, the library is unloaded from memory, freeing its resources."
    },
    {
      question: "What is a plugin system in the context of dynamic linking?",
      options: [
        "A system where all code is compiled statically",
        "An architecture where an application dynamically loads external shared libraries to add functionality without recompiling",
        "A type of bootloader",
        "A system for managing multiple versions of gcc"
      ],
      correctIndex: 1,
      hint: "Plugins 'plug in' to the main application at runtime.",
      explanation: "Plugin systems use dlopen() to load shared libraries (plugins) that extend the application's functionality at runtime. This enables extensibility without recompiling the main program."
    },
    {
      question: "On Linux, the dynamic loader searches for shared libraries in which environment variable (among others)?",
      options: ["LIBPATH", "LD_LIBRARY_PATH", "SHARED_LIB_PATH", "DYLD_LIBRARY_PATH"],
      correctIndex: 1,
      hint: "LD = dynamic linker/loader.",
      explanation: "LD_LIBRARY_PATH is a colon-separated list of directories that the dynamic linker searches for shared libraries. Set it to include custom library paths when running programs."
    }
  ]
};

export default dsSharedLibraries;
