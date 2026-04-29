export const lessons = [
  {
    slug: "mathematics-for-computer-scientists",
    title: "Mathematics for Computer Scientists",
    summary:
      "master the core mathematical concepts that power computer science, including boolean algebra, logic, set theory, proof techniques, combinatorics, and graph theory.",
    tags: "math, logic, sets, discrete",
    logo: "/math-logo.png",
    sections: [
      {
        slug: "foundation-mathematics",
        title: "Foundation Mathematics",
        summary:
          "a thorough review of core mathematical principles including numbers, algebraic equations, and inequalities to build a strong foundation for computer science.",
        pages: [
          {
            slug: "chapter-1-numbers",
            title: "1. Numbers",
            summary: "Learn about different number systems, real numbers, surds, complex numbers, absolute values, and sets.",
            quiz: "foundation-math-ch1-quiz",
          },
          {
            slug: "chapter-1-7-sets",
            title: "1.7 Sets",
            summary: "Master set notation, set-builder notation, subsets, set operations (union, intersection, difference, complement, symmetric difference), power sets, the Cartesian product, and the laws of set algebra including De Morgan's Laws.",
            quiz: "foundation-math-ch1-7-quiz",
          },
          {
            slug: "chapter-1-8-relations",
            title: "1.8 Relations",
            summary: "Explore binary relations, their four key properties (reflexive, symmetric, antisymmetric, transitive), equivalence relations and their partitions, partial orders and Hasse diagrams, and how relations underpin databases, graphs, and scheduling algorithms.",
            quiz: "foundation-math-ch1-8-quiz",
          },
          {
            slug: "chapter-2-equations-and-inequalities",
            title: "2. Equations and Inequalities",
            summary: "Master solving linear equations, simultaneous equations, quadratic equations, and inequalities.",
            quiz: "foundation-math-ch2-quiz",
          },
          {
            slug: "chapter-3-1-introduction-to-functions",
            title: "3.1 Introduction to Functions",
            summary: "Learn about domains, ranges, one-to-one, composite, and inverse functions.",
            quiz: "foundation-math-ch3-1-quiz",
          },
          {
            slug: "chapter-3-2-graphing-functions",
            title: "3.2 Graphing Functions",
            summary: "Understand function symmetry, standard graph shapes, and vertical/horizontal asymptotes.",
            quiz: "foundation-math-ch3-2-quiz",
          },
          {
            slug: "chapter-4-logarithms-and-exponents",
            title: "4. Logarithmic and Exponential Notation",
            summary: "Explore the laws of indices, logarithms, and their applications.",
            quiz: "foundation-math-ch4-quiz",
          },
          {
            slug: "chapter-5-1-matrices",
            title: "5.1 Matrices",
            summary: "Understand matrix notation, addition, subtraction, multiplication, the identity matrix, determinants, and finding the inverse of a 2×2 matrix.",
            quiz: "foundation-math-ch5-1-quiz",
          },
          {
            slug: "chapter-5-2-systems-of-equations",
            title: "5.2 Systems of Linear Equations",
            summary: "Master three methods for solving systems of equations: substitution, elimination, and the inverse matrix method.",
            quiz: "foundation-math-ch5-2-quiz",
          },
          {
            slug: "chapter-5-3-gaussian-elimination",
            title: "5.3 Gaussian Elimination Method",
            summary: "Learn the Gaussian Elimination algorithm: forming augmented matrices, applying elementary row operations, achieving Row Echelon Form, and solving systems via back-substitution.",
            quiz: "foundation-math-ch5-3-quiz",
          },
          {
            slug: "chapter-6-1-permutations",
            title: "6.1 Arrangements and Permutations",
            summary: "Learn the fundamental counting principle, factorial notation, and how to count ordered arrangements using permutations.",
            quiz: "foundation-math-ch6-1-quiz",
          },
          {
            slug: "chapter-6-2-combinations",
            title: "6.2 Combinations",
            summary: "Understand unordered selections, the combination formula nCr, and when to apply combinations vs permutations.",
            quiz: "foundation-math-ch6-2-quiz",
          },
        ],
      },
      {
        slug: "discrete-mathematics-and-logic",
        title: "Discrete Mathematics and Logic",
        summary:
          "a comprehensive guide to the foundational discrete mathematics and logic principles required for computer science and algorithms.",
        pages: [
          {
            slug: "chapter-1-boolean-algebra",
            title: "1. Boolean Algebra",
            summary: "Learn the foundational axioms and laws of Boolean Algebra, the core of digital logic.",
            quiz: "boolean-algebra-quiz",
          },
          {
            slug: "chapter-2-propositional-logic",
            title: "2. Propositional Logic",
            summary: "Understand propositions, truth tables, logical equivalence, tautologies, and contradictions.",
            quiz: "propositional-logic-quiz",
          },
          {
            slug: "chapter-3-set-theory",
            title: "3. Set Theory",
            summary: "Dive into set operations, Venn diagrams, set algebra, power sets, and Cartesian products.",
            quiz: "set-theory-quiz",
          },
          {
            slug: "chapter-4-relations-and-posets",
            title: "4. Relations and Posets",
            summary: "Master relations properties, partially ordered sets (posets), and lattices.",
            quiz: "relations-posets-quiz",
          },
          {
            slug: "chapter-5-proof-techniques",
            title: "5. Proof Techniques",
            summary: "Learn how to formally prove statements using mathematical induction, contrapositives, and contradictions.",
            quiz: "proof-techniques-quiz",
          },
          {
            slug: "chapter-6-combinatorics",
            title: "6. Combinatorics",
            summary: "Study permutations and combinations to count possible arrangements and selections.",
            quiz: "combinatorics-quiz",
          },
          {
            slug: "chapter-7-graph-theory",
            title: "7. Graph Theory",
            summary: "Explore the mathematics of networks, including vertices, edges, paths, connectivity, and matrices.",
            quiz: "graph-theory-quiz",
          },
        ],
      },
    ],
    finalExams: ["foundation-math-final-1"],
  },
  {
    slug: "computer-programming-and-data-structures",
    title: "Computer Programming and Data Structures",
    summary:
      "learn the fundamentals of computer programming and how to write code",
    tags: "dsa, pseudocode, programming",
    logo: "/computer-programming-logo.png",
    sections: [
      {
        slug: "computer-programming",
        title: "Computer Programming",
        summary:
          "A complete, detailed course covering computer programming from foundational methodology through algorithm analysis and dynamic programming, with C language examples, practice problems, and quizzes.",
        pages: [
          {
            slug: "introduction-to-computer-programming-methodology",
            title: "1. Introduction to Computer Programming Methodology",
            summary:
              "Learn what computer programming is, its role in problem solving, the Program Development Life Cycle (PDLC), and why programming methodologies matter.",
            quiz: "cp-intro",
          },
          {
            slug: "problem-definition-and-classification",
            title: "2. Problem Definition and Classification",
            summary:
              "Understand how to define a programming problem, identify inputs, outputs, and constraints, and distinguish between tractable and intractable problems.",
            quiz: "cp-problem-definition",
          },
          {
            slug: "algorithms",
            title: "3. Algorithms",
            summary:
              "Explore the definition and properties of algorithms, characteristics of good algorithms, how to document them, and stepwise refinement.",
            quiz: "cp-algorithms",
          },
          {
            slug: "problem-solving-techniques",
            title: "4. Problem-Solving Techniques",
            summary:
              "Master top-down problem solving, problem decomposition, and the bottom-up approach, with C code examples showing how each works.",
            quiz: "cp-problem-solving",
          },
          {
            slug: "flowcharts",
            title: "5. Flowcharts",
            summary:
              "Learn the standard flowchart symbols, how to draw flowcharts for algorithms, and how to convert flowcharts into working C programs.",
            quiz: "cp-flowcharts",
          },
          {
            slug: "structured-programming",
            title: "6. Structured Programming",
            summary:
              "Discover the principles of structured programming including sequence, selection, and iteration control structures with C examples.",
            quiz: "cp-structured",
          },
          {
            slug: "pseudocode",
            title: "7. Pseudocode",
            summary:
              "Learn how to write pseudocode, its rules and conventions, and how it bridges the gap between algorithms and working code.",
            quiz: "cp-pseudocode",
          },
          {
            slug: "programming-language-fundamentals",
            title: "8. Programming Language Fundamentals",
            summary:
              "Understand syntax vs semantics, C data types, variables and constants, expressions, and statements — the building blocks of any C program.",
            quiz: "cp-fundamentals",
          },
          {
            slug: "input-and-output",
            title: "9. Input and Output",
            summary:
              "Master printf and scanf in C for formatted input and output, including format specifiers, escape sequences, and best practices.",
            quiz: "cp-io",
          },
          {
            slug: "control-structures",
            title: "10. Control Structures",
            summary:
              "Learn if, if-else, switch for selection and for, while, do-while for iteration, plus loop control with break and continue in C.",
            quiz: "cp-control",
          },
          {
            slug: "sub-programming-and-modularization",
            title: "11. Sub-Programming and Modularization",
            summary:
              "Understand modular programming, how to define and call functions in C, parameter passing, and the scope of variables.",
            quiz: "cp-functions",
          },
          {
            slug: "programming-paradigms",
            title: "12. Programming Paradigms",
            summary:
              "Compare procedural and functional programming paradigms, understand object-oriented concepts, and know when to use each approach.",
          },
          {
            slug: "data-abstraction",
            title: "13. Data Abstraction",
            summary:
              "Learn the concept of abstraction, abstract data types (ADTs), and how encapsulation and information hiding improve program design.",
          },
          {
            slug: "file-management",
            title: "14. File Management",
            summary:
              "Work with files in C: file types, open/read/write/close operations, sequential vs random access, and handling file errors.",
          },
          {
            slug: "programming-standards",
            title: "15. Programming Standards",
            summary:
              "Apply coding standards and conventions, write effective comments and documentation, and use debugging and testing strategies.",
          },
          {
            slug: "writing-correct-and-efficient-programs",
            title: "16. Writing Correct and Efficient Programs",
            summary:
              "Understand program correctness, efficiency considerations, and practical optimization techniques to write better C programs.",
          },
          {
            slug: "algorithm-design-and-analysis",
            title: "17. Algorithm Design and Analysis",
            summary:
              "Analyze algorithms using summations, recurrence relations, and Big-O notation. Understand time and space complexity with examples.",
          },
          {
            slug: "dynamic-programming",
            title: "18. Dynamic Programming",
            summary:
              "Master dynamic programming: optimal substructure, overlapping subproblems, memoization, and classic examples like Fibonacci and knapsack.",
          },
        ],
      },
      {
        slug: "data-structures",
        title: "Data Structures",
        summary:
          "A comprehensive course on data structures and algorithms, covering dynamic linked structures, linking, loading, classic ADTs (stacks, queues, lists, trees, graphs), and algorithmic techniques.",
        pages: [
          {
            slug: "dynamic-linked-structures",
            title: "1. Dynamic Linked Structures",
            summary:
              "Understand dynamic linked structures: definition, characteristics, advantages, disadvantages, and how nodes are allocated at runtime using pointers in C.",
            quiz: "ds-dynamic-linked-structures",
          },
          {
            slug: "compiler-drivers-and-program-linking",
            title: "2. Compiler Drivers and Program Linking",
            summary:
              "Learn how compiler drivers coordinate the full compilation pipeline — preprocessing, compilation, assembly, and linking — to produce an executable.",
            quiz: "ds-compiler-drivers",
          },
          {
            slug: "static-linking",
            title: "3. Static Linking",
            summary:
              "Explore static linking: how library code is embedded into executables at compile time, its advantages for portability, and how to create and use static libraries.",
            quiz: "ds-static-linking",
          },
          {
            slug: "symbol-resolution",
            title: "4. Symbol Resolution",
            summary:
              "Understand how the linker resolves global, local, and external symbols across object files, and what causes common linking errors like undefined references.",
            quiz: "ds-symbol-resolution",
          },
          {
            slug: "relocatable-and-executable-object-files",
            title: "5. Relocatable and Executable Object Files",
            summary:
              "Distinguish between relocatable object files (produced by the assembler) and executable object files (produced by the linker), and understand their contents and role.",
            quiz: "ds-object-files",
          },
          {
            slug: "loading-executable-files",
            title: "6. Loading Executable Files",
            summary:
              "Learn how the OS loader prepares an executable for execution: memory allocation, copying code, initializing the runtime environment, and transferring control.",
            quiz: "ds-loading",
          },
          {
            slug: "dynamic-linking-with-shared-libraries",
            title: "7. Dynamic Linking with Shared Libraries",
            summary:
              "Discover how dynamic linking defers library loading to runtime, how shared libraries (.so/.dll) are used, and the trade-offs versus static linking.",
            quiz: "ds-dynamic-linking",
          },
          {
            slug: "loading-and-linking-shared-libraries",
            title: "8. Loading and Linking Shared Libraries from Applications",
            summary:
              "Learn how applications explicitly load shared libraries at runtime using dlopen/dlsym on Linux and LoadLibrary on Windows, enabling plugin-based architectures.",
            quiz: "ds-shared-libraries",
          },
          {
            slug: "position-independent-code",
            title: "9. Position Independent Code (PIC)",
            summary:
              "Understand position-independent code: why it is required for shared libraries, how relative addressing works, and the roles of the GOT and PLT.",
            quiz: "ds-pic",
          },
          {
            slug: "tools-for-manipulating-object-files",
            title: "10. Tools for Manipulating Object Files",
            summary:
              "Master essential binary tools: objdump, nm, ldd, readelf, and ar — for inspecting, debugging, and managing object files and libraries.",
            quiz: "ds-object-tools",
          },
          {
            slug: "sets",
            title: "11. Sets",
            summary:
              "Explore sets as unordered collections of distinct elements, their operations (union, intersection, difference), and practical applications in programming.",
            quiz: "ds-sets",
          },
          {
            slug: "information-technologies",
            title: "12. Information Technologies",
            summary:
              "Overview of IT components — hardware, software, data, networks, and people — with practical programming examples for each component.",
            quiz: "ds-information-technologies",
          },
          {
            slug: "stacks",
            title: "13. Stacks",
            summary:
              "Master the stack (LIFO) data structure: push, pop, peek operations, array and linked-list implementations in C, and key applications like expression evaluation.",
            quiz: "ds-stacks",
          },
          {
            slug: "queues",
            title: "14. Queues",
            summary:
              "Understand queues (FIFO), their variants (linear, circular, priority), implementations in C, and applications in scheduling and simulation.",
          },
          {
            slug: "lists",
            title: "15. Lists",
            summary:
              "Comprehensively cover singly, doubly, and circular linked lists in C: node structure, insertion, deletion, traversal, and real-world applications.",
          },
          {
            slug: "trees",
            title: "16. Trees",
            summary:
              "Learn tree data structures: binary trees, BSTs, AVL trees, and heaps — with C implementations for insert, search, delete, and all three traversal orders.",
          },
          {
            slug: "graphs",
            title: "17. Graphs",
            summary:
              "Explore graphs: directed, undirected, and weighted graphs, adjacency matrix and list representations in C, and BFS/DFS traversal algorithms.",
          },
          {
            slug: "recursion",
            title: "18. Recursion",
            summary:
              "Master recursion: base cases, recursive cases, the call stack, and classic examples — factorial, Fibonacci, binary search, and tree traversal — in C and Python.",
          },
          {
            slug: "sorting-and-searching",
            title: "19. Sorting and Searching",
            summary:
              "Study and compare sorting algorithms (bubble, insertion, merge, quick sort) and searching algorithms (linear, binary search) with complexity analysis.",
          },
          {
            slug: "greedy-algorithms",
            title: "20. Greedy Algorithms",
            summary:
              "Understand greedy algorithm strategy, the greedy choice property, and classic examples: Kruskal's MST, Prim's MST, Huffman coding, and fractional knapsack.",
          },
          {
            slug: "divide-and-conquer",
            title: "21. Divide and Conquer",
            summary:
              "Learn the divide-and-conquer paradigm with classic examples: merge sort, quick sort, binary search, and maximum subarray sum with step-by-step analysis.",
          },
          {
            slug: "extensive-analysis-of-computer-algorithms",
            title: "22. Extensive Analysis of Computer Algorithms",
            summary:
              "Deep-dive into algorithm analysis: time complexity (best/average/worst case), space complexity, Big-O notation, and comparison tables for major algorithms.",
          },
        ],
      },
    ],
  },
  {
    slug: "digital-electronics-and-electrical-circuits",
    title: "Digital Electronics and Electrical Circuits",
    summary:
      "before you dive deep into programming, first learn core concepts of digital electronics and electrical circuits.",
    tags: "digital systems, electric circuits",
    logo: "/digital-electronics-logo.png",
    sections: [
      {
        slug: "digital-electronics",
        title: "Digital Electronics",
        summary:
          "Introduction to digital systems, number systems, code conversion, binary addition and subtraction, and more",
        pages: [
          {
            slug: "introduction-to-digital-electronics",
            title: "Introduction to Digital Electronics",
            summary:
              "Digital Electronics is the field of electronics that deals with electronic circuits that operate using discrete, typically two, voltage levels.",
          },
          {
            slug: "analog-vs-digital-systems",
            title: "Analog vs Digital Systems",
            summary:
              "Understanding the differences between analog and digital systems, including their advantages and disadvantages.",
          },
          {
            slug: "evolution-of-digital-electronics",
            title: "Evolution of Digital Electronics",
            summary:
              "A brief history of the development and advancements in digital electronics over the years.",
          },
          {
            slug: "advantages-of-digital-technology",
            title: "Advantages of Digital Technology",
            summary:
              "Exploring the benefits of digital technology, such as noise immunity, data compression, and ease of storage and transmission.",
          },
          {
            slug: "number-systems-introduction",
            title: "Number Systems",
            summary:
              "Understanding different number systems used in digital electronics, including binary, decimal, octal, and hexadecimal.",
          },
          {
            slug: "number-systems-types-decimal",
            title: "Types of Number Systems: Decimal",
            summary:
              "Detailed overview of the decimal (base-10) number system.",
          },
          {
            slug: "number-systems-types-binary",
            title: "Types of Number Systems: Binary",
            summary: "Detailed overview of the binary (base-2) number system.",
          },
          {
            slug: "number-systems-types-octal",
            title: "Types of Number Systems: Octal",
            summary: "Detailed overview of the octal (base-8) number system.",
          },
          {
            slug: "number-systems-types-hexadecimal",
            title: "Types of Number Systems: Hexadecimal",
            summary:
              "Detailed overview of the hexadecimal (base-16) number system.",
          },
          {
            slug: "number-systems-conversions-from-decimal-introduction",
            title: "Converting FROM DECIMAL - Introduction",
            summary:
              "introduction to converting decimal numbers to binary, octal, and hexadecimal systems.",
          },
          {
            slug: "number-systems-conversions-from-decimal-to-binary",
            title: "1. Decimal to Binary",
            summary:
               "Techniques for converting decimal numbers to binary system.",
          },
          {
            slug: "number-systems-conversions-from-decimal-to-octal",
            title: "2. Decimal to Octal",
            summary:
              "Techniques for converting decimal numbers to octal system.",
          },
          {
            slug: "number-systems-conversions-from-decimal-to-hexadecimal",
            title: "3. Decimal to Hexadecimal",
            summary:
              "Techniques for converting decimal numbers to hexadecimal",
          },
          {
            slug: "number-systems-conversions-from-binary-introduction",
            title: "Converting FROM BINARY - Introduction",
            summary:
              "introduction to converting binary numbers to decimal, octal, and hexadecimal systems.",
          },
          {
            slug: "number-systems-conversions-from-binary-to-decimal",
            title: "1. Binary to Decimal",
            summary:
               "Techniques for converting binary numbers to decimal system.",
          },
          {
            slug: "number-systems-conversions-from-binary-to-octal",
            title: "2. Binary to Octal",
            summary:
              "Techniques for converting binary numbers to octal system.",
          },
          {
            slug: "number-systems-conversions-from-binary-to-hexadecimal",
            title: "3. Binary to Hexadecimal",
            summary:
              "Techniques for converting binary numbers to hexadecimal",
          },
          {
            slug: "number-systems-conversions-from-octal-introduction",
            title: "Converting FROM OCTAL - Introduction",
            summary:
              "introduction to converting octal numbers to decimal, binary, and hexadecimal systems.",
          },
          {
            slug: "number-systems-conversions-from-octal-to-decimal",
            title: "1. Octal to Decimal",
            summary:
              "Techniques for converting octal numbers to decimal system.",
          },
          {
            slug: "number-systems-conversions-from-octal-to-binary",
            title: "2. Octal to Binary",
            summary:
              "Techniques for converting octal numbers to binary system.",
          },
          {
            slug: "number-systems-conversions-from-octal-to-hexadecimal",
            title: "3. Octal to Hexadecimal",
            summary:
              "Techniques for converting octal numbers to hexadecimal system.",
          },
          {
            slug: "number-systems-conversions-from-hexadecimal-introduction",
            title: "Converting FROM HEXADECIMAL - Introduction",
            summary:
              "introduction for converting hexadecimal numbers to decimal, binary, and octal systems.",
          },
          {
            slug: "number-systems-conversions-from-hexadecimal-to-decimal",
            title: "1. Hexadecimal to Decimal",
            summary:
              "Techniques for converting hexadecimal numbers to decimal system.",
          },
          {
            slug: "number-systems-conversions-from-hexadecimal-to-binary",
            title: "2. Hexadecimal to Binary",
            summary:
              "Techniques for converting hexadecimal numbers to binary system.",
          },
          {
            slug: "number-systems-conversions-from-hexadecimal-to-octal",
            title: "3. Hexadecimal to Octal",
            summary:
              "Techniques for converting hexadecimal numbers to octal system.",
          },
          {
            slug: "number-systems-conversions-reference",
            title: "Conversion Reference Guide",
            summary:
              "A quick reference guide for converting numbers between different bases.",
          },
          {
            slug: "number-systems-conversions-exercises",
            title: "Conversion Exercises",
            summary:
              "Practice exercises to reinforce your understanding of number system conversions.",
          },
          {
            slug: "number-systems-conversions-binary-coded-decimal-basics",
            title: "Binary Coded Decimal (BCD) Basics",
            summary: "Understanding the BCD Encoding and Conversions.",
          },
          {
            slug: "number-systems-conversions-binary-coded-decimal-encoding-table",
            title: "BCD Digit Encoding Table",
            summary:
              "A table showing the BCD representation of decimal digits 0-9.",
          },
          {
            slug: "number-systems-conversions-binary-coded-decimal-why-use-bcd",
            title: "Why use Binary-Coded-Decimal (BCD)?",
            summary:
              "Advantages and applications of using BCD in digital systems.",
          },
          // {
          //   slug: "number-systems-conversions-binary-coded-decimal-conversions-decimal-to-bcd",
          //   title: "BCD Conversions: Decimal to BCD",
          //   summary:
          //     "Techniques for converting decimal numbers to Binary Coded Decimal (BCD).",
          // },
          // {
          //   slug: "number-systems-conversions-binary-coded-decimal-conversions-bcd-to-decimal",
          //   title: "BCD Conversions: BCD to Decimal",
          //   summary:
          //     "Techniques for converting Binary Coded Decimal (BCD) numbers to decimal.",
          // },
          {
            slug: "logic-gates-introduction",
            title: "Logic Gates Introduction",
            summary:
              "Basic building blocks of digital circuits that perform logical operations.",
          },
          {
            slug: "logic-gates-basic-gates",
            title: "Basic Logic Gates",
            summary:
              "Introduction to basic logic gates: AND, OR, NOT, NAND, NOR, XOR, and XNOR.",
          },
          {
            slug: "logic-gates-basic-gates-and-or-not",
            title: "Basic Logic Gates: AND, OR, NOT Gates",
            summary:
              "Understanding the functions and truth tables of AND, OR, and NOT gates.",
          },
          {
            slug: "logic-gates-universal-gates-nand-nor",
            title: "Universal Gates: NAND and NOR Gates",
            summary:
              "Understanding the functions and truth tables of NAND and NOR gates.",
          },
          {
            slug: "logic-gates-special-purpose-gates-xor-xnor",
            title: "Special Purpose Gates: XOR and XNOR Gates",
            summary:
              "Understanding the functions and truth tables of XOR and XNOR gates.",
          },
          {
            slug: "boolean-algebra-and-laws",
            title: "Boolean Algebra and Laws",
            summary:
              "Mathematical framework for analyzing and simplifying digital logic circuits.",
          },
          {
            slug: "boolean-algebra-fundamental-laws",
            title: "Boolean Algebra Fundamental Laws",
            summary:
              "Overview of the fundamental laws of Boolean algebra, including identity, null, complement, idempotent, involution, commutative, associative, distributive, absorption, and De Morgan's theorems.",
          },
          {
            slug: "boolean-algebra-demorgan-theorems",
            title: "Boolean Algebra: De Morgan Theorems",
            summary:
              "Understanding De Morgan's theorems and their applications in simplifying logic expressions.",
          },
          {
            slug: "boolean-algebra-simplification-examples",
            title: "Boolean Algebra Simplification Examples",
            summary:
              "Step-by-step examples of simplifying Boolean expressions using Boolean algebra laws.",
          },
          {
            slug: "logic-gates-combinations-building-complex-functions",
            title: "Building Complex Functions",
            summary:
              "Combining multiple logic gates to create complex digital functions.",
          },
          {
            slug: "logic-gates-implementing-gates-using-universal-gates",
            title: "Implementing Gates using Universal Gates",
            summary:
              "Techniques for implementing any logic gate using only NAND or NOR gates.",
          },
          {
            slug: "logic-gates-real-world-applications",
            title: "Real-World Applications of Logic Gates",
            summary:
              "Exploring practical applications of logic gates in digital systems and devices.",
          },
          {
            slug: "logic-gates-practical-circuit-design-example",
            title: "Practical Circuit Design Example",
            summary:
              "A step-by-step example of designing a digital circuit to meet specific requirements.",
          },
          {
            slug: "logic-gates-integrated-circuits-ics",
            title: "Integrated Circuits (ICs)",
            summary:
              "Understanding the role of integrated circuits in digital electronics and their advantages over discrete components.",
          },
          {
            slug: "logic-gates-modern-applications-in-technology",
            title: "Modern Applications in Technology",
            summary:
              "Exploring the use of logic gates in modern technology, including computers, smartphones, and other digital devices.",
          },
          {
            slug: "logic-gates-exercises",
            title: "Logic Gates Exercises",
            summary:
              "Practice problems to reinforce your understanding of logic gates and Boolean algebra.",
          },
          {
            slug: "combinational-circuits",
            title: "Combinational Circuits",
            summary:
              "Circuits whose output is a pure function of the present input only.",
          },
          {
            slug: "code-conversion",
            title: "Code Conversion",
            summary:
              "Techniques for converting numbers between different bases.",
          },
          {
            slug: "binary-arithmetic",
            title: "Binary Arithmetic",
            summary:
              "Performing addition and subtraction using binary numbers.",
          },
          {
            slug: "sequential-circuits",
            title: "Sequential Circuits",
            summary:
              "Circuits whose output depends on the present input and the past sequence of inputs.",
          },
          {
            slug: "flip-flops",
            title: "Flip-Flops",
            summary: "Basic memory elements in sequential logic circuits.",
          },
          {
            slug: "counters",
            title: "Counters",
            summary:
              "Sequential circuits that go through a predetermined sequence of states.",
          },
          {
            slug: "shift-registers",
            title: "Shift Registers",
            summary:
              "Registers that can shift their stored data in a specified direction.",
          },
          {
            slug: "memory-devices",
            title: "Memory Devices",
            summary: "Components used to store data in digital systems.",
          },
          {
            slug: "digital-to-analog-conversion",
            title: "Digital to Analog Conversion",
            summary:
              "Process of converting digital signals into analog signals.",
          },
          {
            slug: "analog-to-digital-conversion",
            title: "Analog to Digital Conversion",
            summary:
              "Process of converting analog signals into digital signals.",
          },
        ],
      },
      {
        slug: "electrical-circuits",
        title: "Electrical Circuits",
        summary:
          "Introduction to electrical circuits, understanding electric current, Ohm's law, types of current, electric charge, and more ",
        pages: [
          {
            slug: "introduction-to-electrical-circuits",
            title: "Introduction to Electrical Circuits",
            summary:
              "An electrical circuit is a path in which electrons from a voltage or current source flow.",
          },
          {
            slug: "electrical-circuits-what-is-electricity",
            title: "What Is Electricity",
            summary:
              "electricity is a form of energy resulting from the presence and flow of electric charge",
          },
          {
            slug: "electrical-circuits-what-is-electric-charge",
            title: "What Is Electric Charge",
            summary:
               "electric charge is a fundamental property of matter",
          },
          {
            slug: "electrical-circuits-conductors-vs-insulators",
            title: "Conductors vs Insulators",
            summary:
               "materials that allow electric charge to flow easily and materials that resist the flow of electric charge",
          },
          {
            slug: "electrical-circuits-semiconductors",
            title: "Semiconductors",
            summary:
                "materials with conductivity between conductors and insulators",
          },
          {
            slug: "electrical-circuits-what-is-electric-circuit",
            title: "Electric Circuit",
            summary:
               "An electric circuit is an interconnection of electrical elements linked together in a closed path so that an electric current may flow continuously.",
          },
          {
            slug: "electrical-circuits-circuit-symbols",
            title: "Circuit Symbols",
            summary: "understanding circuit diagrams requires knowing standard symbols",
            quiz: "basic-concepts",
          },
          {
            slug: "electrical-circuits-direct-current-vs-alternating-current",
            title: "Direct Current (DC) vs Alternating Current (AC)",
            summary: "Understanding the differences between direct current (DC) and alternating current (AC).",
            quiz: "dc-vs-ac",
          },
          // {
          //   slug: "electrical-circuits-quiz-direct-current-vs-alternating-current",
          //   title: "Quiz - Direct Current (DC) vs Alternating Current (AC)",
          //   summary:
          //       "test your knowledge on direct current (DC) and alternating current (AC)",
          // },
          {
            slug: "electrical-circuits-four-fundamental-quantities-current",
            title: "The Four Fundamental Quantities: CURRENT",
            summary: 
                 "overview on electrical current",
          },
          {
            slug: "electrical-circuits-calculations-current",
            title: "Electrical Circuits Calculations: CURRENT",
            summary:
                   "understanding electrical circuits calculations of current",
          },
          {
            slug: "electrical-circuits-calculations-current-exercises",
            title: "Electric Current Exercises",
            summary:
                   "example problems on electrical circuits calculations of current",
          },
          {
            slug: "electrical-circuits-four-fundamental-quantities-resistance",
            title: "The Four Fundamental Quantities: RESISTANCE",
            summary: 
                 "overview on electrical resistance",
          },
          {
            slug: "electrical-circuits-calculations-resistance",
            title: "Electrical Circuits Calculations: RESISTANCE",
            summary:
                  "understanding electrical circuits calculations of resistance",
          },
          {
            slug: "electrical-circuits-calculations-resistance-exercises",
            title: "Electric Resistance Exercises",
            summary:
                  "example problems on electrical circuits calculations of resistance",
          },
          {
            slug: "electrical-circuits-calculations-resistors-types-of-resistors",
            title: "Types of Resistors",
            summary:
                "understand the different types of resistors",
          },
          {
            slug: "electrical-circuits-calculations-resistors-series-and-parallel",
            title: "Resistors in Series and Parallel",
            summary:
                  "understanding how to calculate equivalent resistance for resistors connected in series and parallel configurations",
          },
          {
            slug: "electrical-circuits-calculations-resistors-series-and-parallel-exercises",
            title: "Exercises - Resistors in Series and Parallel",
            summary:
               "example problems on resistors in series and parallel",
          },
          {
            slug: "electrical-circuits-four-fundamental-quantities-voltage",
            title: "The Four Fundamental Quantities: VOLTAGE",
            summary: 
                 "overview on electrical voltage",
          },
          {
            slug: "electrical-circuits-calculations-voltage",
            title: "Electrical Circuits Calculations: VOLTAGE",
            summary:
                 "understanding electrical circuits calculations of voltage",
          },
          {
            slug: "electrical-circuits-calculations-voltage-ohmic-vs-non-ohmic-materials",
            title: "Ohmic vs Non-Ohmic Materials",
            summary:
               "understanding the difference between ohmic and non-ohmic materials",
          },
          {
            slug: "electrical-circuits-calculations-voltage-exercises",
            title: "Exercises - Basic Ohm's Law",
            summary:
                "example problems on electrical circuits calculations of voltage",
          },
          {
            slug: "electrical-circuits-four-fundamental-quantities-power",
            title: "The Four Fundamental Quantities: POWER",
            summary: 
                 "overview on electrical power",
          },
          {
            slug: "electrical-circuits-calculations-power-formula-derived-from-ohm-law",
            title: "Power Formulas (derived from Ohm's Law)",
            summary:
                "understand the formula to calculate electrical power derived from Ohm's Law",
          },
          {
            slug: "electrical-circuits-conductance-introduction",
            title: "Conductance Introduction",
            summary:
                "understanding electrical conductance",
          },
          {
            slug: "electrical-circuits-conductance-understanding-conductance",
            title: "Understanding Conductance",
            summary: "understanding Conductance",
          },
          {
            slug: "electrical-circuits-conductance-formulas",
            title: "Conductance Formulas",
            summary:
                "learn the formulas to calculate electrical conductance",
          },
          {
            slug: "electrical-circuits-conductance-exercises",
            title: "Conductance Exercises",
            summary:
                "example problems on electrical conductance",
          },
          {
            slug: "electrical-circuits-conductance-factors-affecting-conductance",
            title: "Factors Affecting Conductance",
            summary:
                "factors affecting electrical conductance",
          },
          {
            slug: "electrical-circuits-conductance-combined-formula",
            title: "Combined Conductance Formula",
            summary:
                "understanding the combined conductance formula",
          },
          {
            slug: "electrical-circuits-conductance-combined-exercises",
            title: "Exercises - Conductance",
            summary:
                 "example problems on conductance",
          },
          {
            slug: "electrical-circuits-conductance-conductivity",
            title: "Conductivity",
            summary:
                "understanding electrical conductivity",
          },
          {
            slug: "electrical-circuits-conductance-conductivity-vs-conductance",
            title: "Conductivity Vs Conductance",
            summary:
                "understanding the relationship between conductivity and conductance",
          },
          {
            slug: "electrical-circuits-conductance-conductivity-vs-conductance-exercises",
            title: "Exercises - Conductivity and Conductance",
            summary: 
                "example problems on conductivity and conductance",
          },
          {
            slug: "electrical-circuits-conductance-applications",
            title: "Conductance Applications",
            summary:
                "practical applications of electrical conductance",
          },
          {
            slug: "electrical-circuits-conductance-quiz",
            title: "Conductance Quiz",
            summary:
                "test your knowledge on electrical conductance",
          },
          {
            slug: "electrical-circuits-conductance-conductivity-vs-conductance-exercises-part-2",
            title: "Exercises - Conductivity and Conductance (Part 2)",
            summary:
                "example problems on conductivity and conductance",
          },
          {
            slug: "electrical-circuits-calculations-combined-exercises",
            title: "Exercises - Combined Problems",
            summary:
                "combined example problems on electrical circuits",
          },
          {
            slug: "electrical-circuits-quiz",
            title: "Electrical Circuits Quiz",
            summary:
                "test your knowledge on electrical circuits concepts",
          },
          {
            slug: "electrical-circuits-measurements-ammeter",
            title: "Simple Electrical Measurements",
            summary:
                "various electrical quantities can be measured using different instruments",
          },
          {
            slug: "electrical-circuits-measurements-voltmeter",
            title: "Voltmeter",
            summary:
                "an instrument used for measuring electrical potential difference between two points in an electric circuit",
          },
          {
            slug: "electrical-circuits-measurements-ohmmeter",
            title: "Ohmmeter",
            summary:
                "an instrument used to measure electrical resistance",
          },
          {
            slug: "electrical-circuits-measurements-multimeter",
            title: "Multimeter",
            summary:
                "a versatile instrument that can measure voltage, current, and resistance",
          },
          {
            slug: "electrical-circuits-measurements-comparison-of-measuring-instruments",
            title: "Comparison of Measuring Instruments",
            summary:
                "understanding the differences between ammeter, voltmeter, ohmmeter, and multimeter",
          },
          {
            slug: "electrical-circuits-measurements-safety-guidelines-for-measurements",
            title: "Safety Guidelines for Measurements",
            summary:
                "important safety tips to follow when taking electrical measurements",
          },
          {
            slug: "electrical-circuits-measurements-common-measurement-errors",
            title: "Common Measurement Errors",
            summary:
                "understanding common errors that can occur during electrical measurements",
          },
          {
            slug: "electrical-circuits-measurements-exercises",
            title: "Measurements Exercises",
            summary:
                "solve practice problems on electrical measurements",
          },
          // {
          //   slug: "capacitance",
          //   title: "Capacitance",
          //   summary:
          //     "The ability of a component or circuit to store and release electrical energy in the form of an electric field.",
          // },
          // {
          //   slug: "inductance",
          //   title: "Inductance",
          //   summary:
          //     "The property of a conductor by which a change in current flowing through it induces an electromotive force (voltage) in both the conductor itself and in any nearby conductors.",
          // },
          // {
          //   slug: "kirchhoffs-laws",
          //   title: "Kirchhoff's Laws",
          //   summary:
          //     "Two fundamental laws that deal with the conservation of charge and energy in electrical circuits.",
          // },
        ],
      },
    ],
  },
  {
    slug: "computer-basics",
    title: "Computer Basics",
    summary:
      "start your programming journey with computer basics, understand foundational concepts of computer hardware, software, electronic devices, operating systems, and more.",
    tags: "computer parts, internet basics",
    logo: "/computer-basics-logo.png",
    sections: [
      {
        slug: "computer-software",
        title: "Computer Software",
        summary:
          "Introduction to computer software and parts.",
        pages: [
          {
            slug: "what-is-a-computer",
            title: "What is a computer?",
            summary:
              "A computer is an electronic device that can store, retrieve, and process data. It is a programmable machine that can be used to perform a wide range of tasks.",
          },
          {
            slug: "parts-of-a-computer",
            title: "Parts of a Computer",
            summary:
              "A computer is made up of several parts that work together to perform tasks. These parts include the monitor, keyboard, mouse, and CPU.",
          },
          {
            slug: "what-makes-a-computer-run",
            title: "What Makes a Computer Run",
            summary:
              "A computer runs on electricity and software. The software tells the hardware what to do, and the hardware performs the tasks.",
          },
          {
            slug: "using-a-mouse",
            title: "Using a Mouse",
            summary:
              "A mouse is a pointing device that is used to interact with the computer. It is used to move the cursor on the screen and to select items.",
          },
          {
            slug: "computer-lab-rules",
            title: "Computer Lab Rules",
            summary:
              "Computer lab rules are guidelines that are put in place to ensure that the computer lab is used safely and effectively. These rules include not eating or drinking in the lab, not using the computers for personal use, and not sharing passwords with others.",
          },
        ],
      },
      {
        slug: "computer-hardware",
        title: "Computer Hardware",
        summary:
          " ",
        pages: [
          {
            slug: "introduction-to-computer-hardware",
            title: "Introduction to Computer Hardware",
            summary:
              "Computer hardware refers to the physical components of a computer system. These components include the monitor, keyboard, mouse, and CPU.",
          },
        ],
      },

    ]
  },
  {
    slug: "effective-communication",
    title: "Effective Communication",
    summary:
      "learn to communicate appropriately with your peers, colleagues, friends, and family and build better relationships with your team and the world around you.",
    tags: "communication skills",
    logo: "/effective-communication-logo.png",
    sections: [
      {
        slug: "communication-skills",
        title: "Communication Skills",
        summary:
          "Learn the fundamentals of effective communication, including its definition, objectives, elements, cycle, qualities, and barriers.",
        pages: [
          {
            slug: "introduction-to-communication",
            title: "Introduction to Communication",
            summary:
              "Communication is the process of exchanging information, ideas, thoughts, and feelings between individuals or groups through verbal, non-verbal, or written means.",
          },
          {
            slug: "administrative-communication",
            title: "Administrative Communication",
            summary:
              "Administrative communication is a process involving the transmission and accurate replication of ideas, ensured by feedback, for the purpose of eliciting actions which will accomplish organizational goals.",
          },
          {
            slug: "main-aspects-of-communication",
            title: "Main Aspects of Communication",
            summary:
              "The main aspects of communication include the sender, message, medium, receiver, feedback, and context.",
          },
          {
            slug: "importance-of-communication",
            title: "Importance of Communication",
            summary:
              "Effective communication is essential for building relationships, resolving conflicts, making decisions, and achieving goals in both personal and professional settings.",    
          },
          {
            slug: "definition-of-communication",
            title: "Definition of Communication",
            summary:
              "Communication is the process of transmitting information and understanding from one person to another.",
          },
          {
            slug: "objectives-of-communication",
            title: "Objectives of Communication",
            summary:
              "The main objectives of communication are to inform, persuade, motivate, and build relationships.",
          },
          {
            slug: "elements-of-communication",
            title: "Elements of Communication",
            summary:
              "The key elements of communication include the sender, message, medium, receiver, feedback, and context.",
          },
          {
            slug: "the-communication-cycle",
            title: "The Communication Cycle",
            summary:
              "The communication cycle consists of the following stages: idea generation, encoding, transmission, decoding, and feedback.",
          },
          {
            slug: "qualities-of-effective-communication-the-6-c",
            title: "Qualities of Effective Communication: The 6 C's",
            summary:
              "The 6 C's of effective communication are clarity, conciseness, coherence, consistency, courtesy, and credibility.",
          },
          {
            slug: "barriers-to-communication",
            title: "Barriers to Communication",
            summary:
              "Common barriers to effective communication include physical barriers, language barriers, emotional barriers, cultural barriers, and perceptual barriers.",
          },
        ],
      },
    ],
  },
  {
    slug: "touch-typing",
    title: "Touch Typing",
    summary:
      "learn to touch type with all your fingers and become a typing pro and write code faster.",
    tags: "typing tests, typing lessons, games",
    logo: "/touch-typing-logo.png",
    sections: [
      {
        slug: "home-row",
        title: "Home Row (ASDF and JKL;)",
        summary:
          "Learn the basics of touch typing, starting with the home row",
        pages: [
          {
            slug: "home-row",
            title: "Home Row",
            summary:
              "Learn the basics of touch typing, starting with the home row",
            practiceText: "asdf jkl; asdf jkl; aa ss dd ff jj kk ll ;;",
          },
        ],

      },
      {
        slug: "top-row",
        title: "Top Row (QWERTY UIOP)",
        summary:
          "Learn the basics of touch typing, starting with the top row",
        pages: [
          {
            slug: "top-row",
            title: "Top Row",
            summary:
              "Learn the basics of touch typing, starting with the top row",
            practiceText: "qwerty uiop qwer tyui op qw er ty ui op",
          },
        ],
      },
      {
        slug: "bottom-row",
        title: "Bottom Row (ZXCVB NM,./)",
        summary:
          "Learn the basics of touch typing, starting with the bottom row",
        pages: [
          {
            slug: "bottom-row",
            title: "Bottom Row",
            summary:
              "Learn the basics of touch typing, starting with the bottom row",
            practiceText: "zxcvb nm,./ zxc vb nm ,. /"
          },
        ],
      },
      {
        slug: "coders-row",
        title: "The Coders Row (Numbers & Symbols)",
        summary:
          "Learn the basics of touch typing, starting with the coders row",
        pages: [
          {
            slug: "coders-row",
            title: "Coders Row",
            summary:
              "Learn the basics of touch typing, starting with the coders row",
            practiceText: "1234567890 !@#$%^&*() 1! 2@"
          },
        ],
      },
      {
        slug: "code-snippets",
        title: "Code Snippets",
        summary:
          "Practice typing actual JavaScript & Java & Python code snippets.",
        pages: [
          {
            slug: "javascript-basics",
            title: "JavaScript Basics",
            summary: "Type out common JS patterns.",
            practiceText: "const hello = 'world'; function test() { console.log(hello); } test();"
          },
          {
            slug: "java-basics",
            title: "Java Basics",
            summary: "Type out common Java patterns.",
            practiceText: "public class Main { public static void main(String[] args) { System.out.println('Hello World'); } }"
          }
        ]
      }
    ]
  },
  {
    slug: "sdlc",
    title: "Software Development Lifecycle (SDLC)",
    summary:
      "understand the various stages of software development lifecycle (SDLC) including planning, analysis, design, implementation, testing, deployment, and maintenance.",
    tags: "agile, waterfall",
    logo: "/sdlc-logo.png",
    sections: [
      {
        slug: "sdlc-overview",
        title: "SDLC Overview",
        summary:
          "An introduction to the Software Development Lifecycle (SDLC) and its importance in software development.",
        pages: [
          {
            slug: "introduction-to-sdlc",
            title: "Introduction to SDLC",
            summary:
              "The Software Development Lifecycle (SDLC) is a systematic process for planning, creating, testing, and deploying software applications.",
          },
          {
            slug: "sdlc-phases",
            title: "SDLC Phases",
            summary:
              "The main phases of the SDLC include Planning, Analysis, Design, Implementation, Testing, Deployment, and Maintenance.",
          },
        ],
      },
      {
        slug: "sdlc-models",
        title: "SDLC Models",
        summary:
          "Different models of SDLC, including Waterfall, Agile, Iterative, V-Model, and Spiral.",
        pages: [
          {
            slug: "waterfall-model",
            title: "Waterfall Model",
            summary:
              "A linear and sequential approach to software development where each phase must be completed before the next begins.",
          },
          {
            slug: "agile-model",
            title: "Agile Model",
            summary:
              "An iterative and incremental approach to software development that emphasizes flexibility, collaboration, and customer feedback.",
          },
          {
            slug: "iterative-model",
            title: "Iterative Model", 
            summary:
              "A model that focuses on developing software through repeated cycles (iterations) and smaller portions at a time (increments).",
          },
          {
            slug: "v-model",
            title: "V-Model",
            summary:
              "An extension of the Waterfall model that emphasizes verification and validation at each stage of development.",
          },
          {
            slug: "spiral-model",
            title: "Spiral Model",
            summary:
              "A risk-driven model that combines elements of both iterative and Waterfall models, focusing on risk assessment and mitigation.",
          },
        ],
      },
    ],
  },
  {
    slug: "english-for-programmers",
    title: "English for Programmers",
    summary:
      "learn the english language with a focus on programming and technology-related vocabulary and concepts.",
    tags: "grammar, vocabulary, reading, writing",
    logo: "/english-for-programmers-logo.png",
    sections: [
      {
        slug: "level-a1",
        title: "Level A1",
        summary:
          "Beginner level focusing on basic phrases and expressions related to programming.",
        pages: [
          {
            slug: "introduction-at-the-office",
            title: "Introduction at the Office",
            summary:
              "Learn how to introduce yourself and others in a professional setting.",
          },
          {
            slug: "your-first-online-meeting",
            title: "Your First Online Meeting",
            summary:
              "Learn how to introduce yourself and others, and get comfortable with the vocabulary and phrases used in virtual meetings.",
          },
          {
            slug: "daily-routine",
            title: "Daily Routine",
            summary:
              "Learn to describe your daily work routine and common tasks.",
          },
          {
            slug: "describing-your-job",
            title: "Describing Your Job",
            summary:
              "Learn how to talk about your job responsibilities and tasks.",
          },
          {
            slug: "programming-languages",
            title: "Programming Languages",
            summary:
              "Learn vocabulary related to popular programming languages.",
          },
          {
            slug: "basic-coding-terms",
            title: "Basic Coding Terms",
            summary: "Familiarize yourself with essential coding terminology.",
          },
          {
            slug: "common-software-tools",
            title: "Common Software Tools",
            summary:
              "Learn about frequently used software tools in programming.",
          },
          {
            slug: "basic-debugging-phrases",
            title: "Basic Debugging Phrases",
            summary: "Understand common phrases used in debugging code.",
          },
          {
            slug: "basic-email-writing",
            title: "Basic Email Writing",
            summary:
              "Understand the structure and common phrases used in professional emails.",
          },
        ],
      },
      {
        slug: "level-a2",
        title: "Level A2",
        summary:
          "Elementary level focusing on everyday communication and work-related scenarios.",
        pages: [
          {
            slug: "scheduling-meetings",
            title: "Scheduling Meetings",
            summary:
              "Learn how to arrange and confirm meetings professionally.",
          },
          {
            slug: "collaborating-with-teams",
            title: "Collaborating with Teams",
            summary:
              "Understand phrases and vocabulary for effective teamwork.",
          },
          {
            slug: "describing-projects",
            title: "Describing Projects",
            summary:
              "Learn to talk about project goals, timelines, and progress.",
          },
          {
            slug: "giving-and-receiving-feedback",
            title: "Giving and Receiving Feedback",
            summary: "Learn how to provide and accept constructive feedback.",
          },
          {
            slug: "technical-documentation",
            title: "Technical Documentation",
            summary:
              "Understand the structure and common terms used in technical documents.",
          },
          {
            slug: "advanced-coding-terms",
            title: "Advanced Coding Terms",
            summary:
              "Expand your vocabulary with more complex coding terminology.",
          },
          {
            slug: "software-development-lifecycle",
            title: "Software Development Lifecycle",
            summary:
              "Learn about the stages of software development and related vocabulary.",
          },
          {
            slug: "version-control-systems",
            title: "Version Control Systems",
            summary:
              "Familiarize yourself with terms related to version control and collaboration.",
          },
          {
            slug: "intermediate-email-writing",
            title: "Intermediate Email Writing",
            summary:
              "Learn to write more complex and detailed professional emails.",
          },
        ],
      },
      {
        slug: "level-b1",
        title: "Level B1",
        summary:
          "Intermediate level focusing on more complex work scenarios and technical topics related to programming.",
        pages: [
          {
            slug: "problem-solving-at-work",
            title: "Problem Solving at Work",
            summary:
              "Learn phrases and strategies for addressing challenges in the workplace.",
          },
          {
            slug: "presenting-ideas",
            title: "Presenting Ideas",
            summary:
              "Understand how to effectively present your ideas and projects.",
          },
          {
            slug: "negotiating-deals",
            title: "Negotiating Deals",
            summary:
              "Learn vocabulary and phrases for negotiating terms and agreements.",
          },
          {
            slug: "handling-conflicts",
            title: "Handling Conflicts",
            summary:
              "Learn strategies and phrases for resolving workplace conflicts.",
          },
          {
            slug: "agile-methodologies",
            title: "Agile Methodologies",
            summary:
              "Understand the principles and vocabulary related to Agile development.",
          },
          {
            slug: "design-patterns",
            title: "Design Patterns",
            summary:
              "Learn about common design patterns and their terminology.",
          },
          {
            slug: "database-management",
            title: "Database Management",
            summary:
              "Familiarize yourself with terms related to database systems and management.",
          },
          {
            slug: "api-development",
            title: "API Development",
            summary:
              "Understand the vocabulary and concepts related to building and using APIs.",
          },
          {
            slug: "advanced-email-writing",
            title: "Advanced Email Writing",
            summary:
              "Learn to write clear, concise, and professional emails for various situations.",
          },
        ],
      },
      {
        slug: "level-b2",
        title: "Level B2",
        summary:
          "Upper-intermediate level focusing on advanced work scenarios and specialized technical topics.",
        pages: [
          {
            slug: "leading-teams",
            title: "Leading Teams",
            summary:
              "Learn vocabulary and phrases for effective team leadership and management.",
          },
          {
            slug: "strategic-planning",
            title: "Strategic Planning",
            summary:
              "Understand how to discuss and implement strategic plans in a business context.",
          },
          {
            slug: "managing-projects",
            title: "Managing Projects",
            summary:
              "Learn terms and phrases related to project management and execution.",
          },
          {
            slug: "business-negotiations",
            title: "Business Negotiations",
            summary:
              "Learn advanced vocabulary and strategies for high-stakes negotiations.",
          },
          {
            slug: "cloud-computing",
            title: "Cloud Computing",
            summary:
              "Understand the concepts and terminology related to cloud services and architecture.",
          },
          {
            slug: "cybersecurity",
            title: "Cybersecurity",
            summary: "Learn about key cybersecurity concepts and vocabulary.",
          },
          {
            slug: "machine-learning",
            title: "Machine Learning",
            summary:
              "Familiarize yourself with terms and concepts in machine learning and AI.",
          },
          {
            slug: "big-data",
            title: "Big Data",
            summary:
              "Understand the vocabulary and concepts related to big data technologies and analysis.",
          },
          {
            slug: "professional-email-writing",
            title: "Professional Email Writing",
            summary:
              "Master the art of writing polished and effective professional emails.",
          },
        ],
      },
      {
        slug: "level-c1",
        title: "Level C1",
        summary:
          "Advanced level focusing on complex work scenarios and specialized technical topics.",
        pages: [
          {
            slug: "executive-communication",
            title: "Executive Communication",
            summary:
              "Learn how to communicate effectively with senior management and executives.",
          },
          {
            slug: "corporate-strategy",
            title: "Corporate Strategy",
            summary:
              "Understand how to discuss and implement corporate strategies.",
          },
          {
            slug: "financial-management",
            title: "Financial Management",
            summary:
              "Learn vocabulary and concepts related to managing finances in a business context.",
          },
          {
            slug: "global-business",
            title: "Global Business",
            summary:
              "Learn terms and phrases related to international business and trade.",
          },
          {
            slug: "blockchain-technology",
            title: "Blockchain Technology",
            summary:
              "Understand the principles and terminology of blockchain and cryptocurrencies.",
          },
          {
            slug: "internet-of-things",
            title: "Internet of Things",
            summary: "Learn about IoT concepts and related vocabulary.",
          },
          {
            slug: "quantum-computing",
            title: "Quantum Computing",
            summary:
              "Familiarize yourself with the basics and terminology of quantum computing.",
          },
          {
            slug: "advanced-software-architecture",
            title: "Advanced Software Architecture",
            summary:
              "Understand complex software architecture patterns and their terminology.",
          },
          {
            slug: "executive-email-writing",
            title: "Executive Email Writing",
            summary:
              "Master the art of writing high-level professional emails for executive communication.",
          },
        ],
      },
      {
        slug: "level-c2",
        title: "Level C2",
        summary:
          "Proficiency level focusing on mastering work scenarios and specialized technical topics.",
        pages: [
          {
            slug: "thought-leadership",
            title: "Thought Leadership",
            summary:
              "Learn how to establish yourself as a thought leader in your industry.",
          },
          {
            slug: "innovation-management",
            title: "Innovation Management",
            summary:
              "Understand how to manage and foster innovation within an organization.",
          },
          {
            slug: "organizational-change",
            title: "Organizational Change",
            summary:
              "Learn vocabulary and strategies for managing change in a business context.",
          },
          {
            slug: "sustainability-in-business",
            title: "Sustainability in Business",
            summary:
              "Learn about sustainable business practices and related terminology.",
          },
          {
            slug: "advanced-cybersecurity",
            title: "Advanced Cybersecurity",
            summary:
              "Deepen your understanding of cybersecurity concepts and advanced terminology.",
          },
          {
            slug: "artificial-intelligence",
            title: "Artificial Intelligence",
            summary:
              "Explore advanced AI concepts and their associated vocabulary.",
          },
          {
            slug: "data-science",
            title: "Data Science",
            summary:
              "Understand complex data science techniques and related terminology.",
          },
          {
            slug: "software-innovation",
            title: "Software Innovation",
            summary:
              "Learn about cutting-edge software development practices and their terminology.",
          },
          {
            slug: "mastering-email-writing",
            title: "Mastering Email Writing",
            summary:
              "Perfect your email writing skills for all professional scenarios.",
          },
        ],
      },
    ],
  },
  {
    slug: "german-for-programmers",
    title: "German for Programmers",
    summary:
      "learn the german language with a focus on programming and technology-related vocabulary and concepts.",
    tags: "grammar, vocabulary, reading, writing",
    logo: "/german-for-programmers-logo.png",
    sections: [
      {
        slug: "level-a1",
        title: "Level A1",
        summary:
          "Beginner level focusing on basic phrases and expressions related to programming.",
        pages: [
          {
            slug: "introduction-at-the-office",
            title: "Introduction at the Office",
            summary:
              "Learn how to introduce yourself and others in a professional setting.",
          },
          {
            slug: "your-first-online-meeting",
            title: "Your First Online Meeting",
            summary:
              "Learn how to introduce yourself and others, and get comfortable with the vocabulary and phrases used in virtual meetings.",
          },
          {
            slug: "daily-routine",
            title: "Daily Routine",
            summary:
              "Learn to describe your daily work routine and common tasks.",
          },
          {
            slug: "describing-your-job",
            title: "Describing Your Job",
            summary:
              "Learn how to talk about your job responsibilities and tasks.",
          },
          {
            slug: "programming-languages",
            title: "Programming Languages",
            summary:
              "Learn vocabulary related to popular programming languages.",
          },
          {
            slug: "basic-coding-terms",
            title: "Basic Coding Terms",
            summary: "Familiarize yourself with essential coding terminology.",
          },
          {
            slug: "common-software-tools",
            title: "Common Software Tools",
            summary:
              "Learn about frequently used software tools in programming.",
          },
          {
            slug: "basic-debugging-phrases",
            title: "Basic Debugging Phrases",
            summary: "Understand common phrases used in debugging code.",
          },
          {
            slug: "basic-email-writing",
            title: "Basic Email Writing",
            summary:
              "Understand the structure and common phrases used in professional emails.",
          },
        ],
      },
      {
        slug: "level-a2",
        title: "Level A2",
        summary:
          "Elementary level focusing on everyday communication and work-related scenarios.",
        pages: [
          {
            slug: "scheduling-meetings",
            title: "Scheduling Meetings",
            summary:
              "Learn how to arrange and confirm meetings professionally.",
          },
          {
            slug: "collaborating-with-teams",
            title: "Collaborating with Teams",
            summary:
              "Understand phrases and vocabulary for effective teamwork.",
          },
          {
            slug: "describing-projects",
            title: "Describing Projects",
            summary:
              "Learn to talk about project goals, timelines, and progress.",
          },
          {
            slug: "giving-and-receiving-feedback",
            title: "Giving and Receiving Feedback",
            summary: "Learn how to provide and accept constructive feedback.",
          },
          {
            slug: "technical-documentation",
            title: "Technical Documentation",
            summary:
              "Understand the structure and common terms used in technical documents.",
          },
          {
            slug: "advanced-coding-terms",
            title: "Advanced Coding Terms",
            summary:
              "Expand your vocabulary with more complex coding terminology.",
          },
          {
            slug: "software-development-lifecycle",
            title: "Software Development Lifecycle",
            summary:
              "Learn about the stages of software development and related vocabulary.",
          },
          {
            slug: "version-control-systems",
            title: "Version Control Systems",
            summary:
              "Familiarize yourself with terms related to version control and collaboration.",
          },
          {
            slug: "intermediate-email-writing",
            title: "Intermediate Email Writing",
            summary:
              "Learn to write more complex and detailed professional emails.",
          },
        ],
      },
      {
        slug: "level-b1",
        title: "Level B1",
        summary:
          "Intermediate level focusing on more complex work scenarios and technical topics related to programming.",
        pages: [
          {
            slug: "problem-solving-at-work",
            title: "Problem Solving at Work",
            summary:
              "Learn phrases and strategies for addressing challenges in the workplace.",
          },
          {
            slug: "presenting-ideas",
            title: "Presenting Ideas",
            summary:
              "Understand how to effectively present your ideas and projects.",
          },
          {
            slug: "negotiating-deals",
            title: "Negotiating Deals",
            summary:
              "Learn vocabulary and phrases for negotiating terms and agreements.",
          },
          {
            slug: "handling-conflicts",
            title: "Handling Conflicts",
            summary:
              "Learn strategies and phrases for resolving workplace conflicts.",
          },
          {
            slug: "agile-methodologies",
            title: "Agile Methodologies",
            summary:
              "Understand the principles and vocabulary related to Agile development.",
          },
          {
            slug: "design-patterns",
            title: "Design Patterns",
            summary:
              "Learn about common design patterns and their terminology.",
          },
          {
            slug: "database-management",
            title: "Database Management",
            summary:
              "Familiarize yourself with terms related to database systems and management.",
          },
          {
            slug: "api-development",
            title: "API Development",
            summary:
              "Understand the vocabulary and concepts related to building and using APIs.",
          },
          {
            slug: "advanced-email-writing",
            title: "Advanced Email Writing",
            summary:
              "Learn to write clear, concise, and professional emails for various situations.",
          },
        ],
      },
      {
        slug: "level-b2",
        title: "Level B2",
        summary:
          "Upper-intermediate level focusing on advanced work scenarios and specialized technical topics.",
        pages: [
          {
            slug: "leading-teams",
            title: "Leading Teams",
            summary:
              "Learn vocabulary and phrases for effective team leadership and management.",
          },
          {
            slug: "strategic-planning",
            title: "Strategic Planning",
            summary:
              "Understand how to discuss and implement strategic plans in a business context.",
          },
          {
            slug: "managing-projects",
            title: "Managing Projects",
            summary:
              "Learn terms and phrases related to project management and execution.",
          },
          {
            slug: "business-negotiations",
            title: "Business Negotiations",
            summary:
              "Learn advanced vocabulary and strategies for high-stakes negotiations.",
          },
          {
            slug: "cloud-computing",
            title: "Cloud Computing",
            summary:
              "Understand the concepts and terminology related to cloud services and architecture.",
          },
          {
            slug: "cybersecurity",
            title: "Cybersecurity",
            summary: "Learn about key cybersecurity concepts and vocabulary.",
          },
          {
            slug: "machine-learning",
            title: "Machine Learning",
            summary:
              "Familiarize yourself with terms and concepts in machine learning and AI.",
          },
          {
            slug: "big-data",
            title: "Big Data",
            summary:
              "Understand the vocabulary and concepts related to big data technologies and analysis.",
          },
          {
            slug: "professional-email-writing",
            title: "Professional Email Writing",
            summary:
              "Master the art of writing polished and effective professional emails.",
          },
        ],
      },
      {
        slug: "level-c1",
        title: "Level C1",
        summary:
          "Advanced level focusing on complex work scenarios and specialized technical topics.",
        pages: [
          {
            slug: "executive-communication",
            title: "Executive Communication",
            summary:
              "Learn how to communicate effectively with senior management and executives.",
          },
          {
            slug: "corporate-strategy",
            title: "Corporate Strategy",
            summary:
              "Understand how to discuss and implement corporate strategies.",
          },
          {
            slug: "financial-management",
            title: "Financial Management",
            summary:
              "Learn vocabulary and concepts related to managing finances in a business context.",
          },
          {
            slug: "global-business",
            title: "Global Business",
            summary:
              "Learn terms and phrases related to international business and trade.",
          },
          {
            slug: "blockchain-technology",
            title: "Blockchain Technology",
            summary:
              "Understand the principles and terminology of blockchain and cryptocurrencies.",
          },
          {
            slug: "internet-of-things",
            title: "Internet of Things",
            summary: "Learn about IoT concepts and related vocabulary.",
          },
          {
            slug: "quantum-computing",
            title: "Quantum Computing",
            summary:
              "Familiarize yourself with the basics and terminology of quantum computing.",
          },
          {
            slug: "advanced-software-architecture",
            title: "Advanced Software Architecture",
            summary:
              "Understand complex software architecture patterns and their terminology.",
          },
          {
            slug: "executive-email-writing",
            title: "Executive Email Writing",
            summary:
              "Master the art of writing high-level professional emails for executive communication.",
          },
        ],
      },
      {
        slug: "level-c2",
        title: "Level C2",
        summary:
          "Proficiency level focusing on mastering work scenarios and specialized technical topics.",
        pages: [
          {
            slug: "thought-leadership",
            title: "Thought Leadership",
            summary:
              "Learn how to establish yourself as a thought leader in your industry.",
          },
          {
            slug: "innovation-management",
            title: "Innovation Management",
            summary:
              "Understand how to manage and foster innovation within an organization.",
          },
          {
            slug: "organizational-change",
            title: "Organizational Change",
            summary:
              "Learn vocabulary and strategies for managing change in a business context.",
          },
          {
            slug: "sustainability-in-business",
            title: "Sustainability in Business",
            summary:
              "Learn about sustainable business practices and related terminology.",
          },
          {
            slug: "advanced-cybersecurity",
            title: "Advanced Cybersecurity",
            summary:
              "Deepen your understanding of cybersecurity concepts and advanced terminology.",
          },
          {
            slug: "artificial-intelligence",
            title: "Artificial Intelligence",
            summary:
              "Explore advanced AI concepts and their associated vocabulary.",
          },
          {
            slug: "data-science",
            title: "Data Science",
            summary:
              "Understand complex data science techniques and related terminology.",
          },
          {
            slug: "software-innovation",
            title: "Software Innovation",
            summary:
              "Learn about cutting-edge software development practices and their terminology.",
          },
          {
            slug: "mastering-email-writing",
            title: "Mastering Email Writing",
            summary:
              "Perfect your email writing skills for all professional scenarios.",
          },
        ],
      },
    ],
  },
  {
    slug: "internet-fundamentals-and-web-design",
    title: "Internet Fundamentals and Web Design",
    summary:
      "master the fundamentals of how the internet works, core web technologies, internet security, and the basics of building responsive modern user interfaces.",
    tags: "internet, www, security, web development",
    logo: "/internet-fundamentals-logo.png",
    sections: [
      {
        slug: "internet-fundamentals",
        title: "Internet Fundamentals",
        summary:
          "a complete breakdown of the internet architecture, web basics, internet protocols, and cybersecurity practices.",
        pages: [
          {
            slug: "chapter-1-introduction-to-the-internet",
            title: "1. Introduction to the Internet",
            summary:
              "Learn what the internet is, how it works, understand packet switching, and explore the global internet backbone.",
            quiz: "internet-intro-quiz",
          },
          {
            slug: "chapter-2-web-basics",
            title: "2. Web Basics",
            summary:
              "Differentiate the Internet from the WWW, learn core web technologies and models, and grasp web hosting and deployment.",
            quiz: "internet-web-basics-quiz",
          },
          {
            slug: "chapter-3-internet-protocols-and-isps",
            title: "3. Internet Protocols and ISPs",
            summary:
              "Dive deep into TCP/IP, understand key application protocols, and learn how Internet Service Providers operate.",
            quiz: "internet-protocols-quiz",
          },
          {
            slug: "chapter-4-internet-security",
            title: "4. Internet Security",
            summary:
              "Understand the CIA Triad, identify major malware and cyber threats, and practice reliable cybersecurity defense techniques.",
            quiz: "internet-security-quiz",
          },
        ],
      },
      {
        slug: "web-fundamentals",
        title: "Web Fundamentals",
        summary:
          "Dive into the essentials of website interface design, structuring pages with HTML, and styling them with CSS.",
        pages: [
          {
            slug: "chapter-1-website-interface-design",
            title: "1. Website Interface Design",
            summary:
              "Learn the basic principles of designing clean, usable, and well-organized website interfaces and wireframes.",
            quiz: "web-interface-design-quiz",
          },
          {
            slug: "chapter-2-html-page-layout-design",
            title: "2. HTML Page Layout Design",
            summary:
              "Understand how to structure pages using Forms, IFrames, and modern layout techniques with Divs instead of Tables.",
            quiz: "html-layout-quiz",
          },
          {
            slug: "chapter-3-introduction-to-css",
            title: "3. Introduction to CSS",
            summary:
              "Master Cascading Style Sheets to separate content from presentation, and learn the foundational CSS Box Model.",
            quiz: "css-intro-quiz",
          },
        ],
      },
    ],
  },
  {
    slug: "html-fundamentals",
    title: "HTML Fundamentals",
    summary:
      "learn the basics of HyperText Markup Language (HTML), and build your first website.",
    tags: "html basics, webpages, tutorials",
    logo: "/html-logo.png",
  },
  {
    slug: "css-fundamentals",
    title: "CSS Fundamentals",
    summary:
      "learn the basics of cascading style sheets (css), and style your first html website.",
    tags: "css basics, css flexbox, css grid",
    logo: "/css-logo.png",
  },
  {
    slug: "java-programming-fundamentals",
    title: "Java Fundamentals",
    summary:
      "start your programming journey with Java, a powerful and versatile language. learn core concepts, object-oriented programming, and build your first applications.",
    tags: "java, springboot, tutorials",
    logo: "/java-logo.png",
  },
  {
    slug: "python-programming-fundamentals",
    title: "Python Fundamentals",
    summary:
      "dive into Python, a highly versatile language perfect for web development, data science, and automation. learn syntax, data structures, and foundational programming concepts.",
    tags: "python, beginners, scripting",
    logo: "/python-logo.png",
  },
  {
    slug: "mysql-fundamentals",
    title: "MySQL Fundamentals",
    summary:
      "we will explore the fundamentals of MySQL, a popular relational database management system. this section covers database design, SQL queries, data manipulation, and basic administration for effective data storage and retrieval.",
    tags: "mysql, sql, dbm",
    logo: "/mysql-logo.png",
  },
];
