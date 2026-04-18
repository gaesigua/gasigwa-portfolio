Unit 2: DATA STRUCTURES AND ALGORITHMS

1. Dynamic Linked Structures

1.1 Definition

Dynamic linked structures are data structures whose size can change during program
execution, and whose elements (called nodes) are connected using pointers or references rather
than being stored in contiguous memory locations.
Unlike arrays, which have a fixed size and continuous memory layout, dynamic linked structures
allocate memory at runtime and link elements logically using memory addresses.
Each element (node) typically contains:
i. Data field – stores the actual value
ii. Link field (pointer/reference) – stores the address of another node

1.2 Characteristics

Dynamic linked structures have the following characteristics:

i. Dynamic memory allocation

Memory is allocated and freed during execution using mechanisms such as malloc() and free() in C or new and delete in C++.

ii. No fixed size limitation

The structure can grow or shrink as needed.

iii. Non-contiguous memory storage

Nodes can be located anywhere in memory.

iv. Efficient insertion and deletion

Elements can be added or removed without shifting other elements.

1.3 Examples of Dynamic Linked Structures

A. Linked Lists

i. Singly linked list
ii. Doubly linked list
iii. Circular linked list

B. Trees

i. Binary trees
ii. Binary Search Trees (BST)
iii. AVL trees

C. Graphs

i. Directed graphs
ii. Undirected graphs
iii. Weighted graphs

1.4 Advantages

i. Better memory utilization

Memory is allocated only when needed.

ii. Flexible size

No need to define size in advance.

iii. Efficient reorganization

Insertion and deletion operations are faster than arrays.

1.5 Disadvantages

i. Extra memory overhead

Additional memory is needed for pointers.

ii. More complex implementation

Pointer manipulation increases complexity.

iii. Slower access time

Sequential access is required; no direct indexing like arrays.

2. Programming Examples (with Detailed Steps)

Example 1: Creating a Singly Linked List Node (C Language)
Step-by-Step Explanation
i. Define a structure for the node
ii. Allocate memory dynamically
iii. Initialize data and pointer

The code below may have some mistakes

'''#include <stdio.h>
#include <stdlib.h>
struct Node {
 int data;
 struct Node* next;
};
int main() {
 struct Node* node1;
 // Step 1: Allocate memory
 node1 = (struct Node*)malloc(sizeof(struct Node));
 // Step 2: Assign data
 node1->data = 10;
 // Step 3: Set next pointer to NULL
 node1->next = NULL;
 printf("Node Data: %d\n", node1->data);
 return 0;
}
'''

Example 2: Inserting a Node at the Beginning of a Linked List
Steps
i. Create a new node
ii. Point new node to existing head
iii. Update head pointer

The code below may have some mistakes
'''
void insertAtBeginning(struct Node** head, int value) {
 struct Node* newNode = malloc(sizeof(struct Node));
 newNode->data = value;
 newNode->next = *head;
 *head = newNode;
}
'''

Example 3: Traversing a Singly Linked List
Steps

i. Start from head
ii. Move pointer node by node
iii. Stop at NULL

The code below may have some mistakes
'''
void traverseList(struct Node* head) {
 while (head != NULL) {
 printf("%d -> ", head->data);
 head = head->next;
 }
 printf("NULL\n");
}
'''

Example 4: Deleting a Node from a Linked List
Steps
i. Locate the node
ii. Update pointer of previous node
iii. Free memory

The code below may have some mistakes
'''
void deleteNode(struct Node** head, int key) {
 struct Node *temp = *head, *prev = NULL;
 if (temp != NULL && temp->data == key) {
 *head = temp->next;
 free(temp);
 return;
 }
 while (temp != NULL && temp->data != key) {
 prev = temp;
 temp = temp->next;
 }
 if (temp == NULL) return;
 prev->next = temp->next;
 free(temp);
}
'''
Example 5: Simple Binary Tree Node Creation
Steps
i. Define tree node structure
ii. Allocate memory
iii. Initialize child pointers

The code below may have some mistakes
'''
struct TreeNode {
 int data;
 struct TreeNode* left;
 struct TreeNode* right;
};
struct TreeNode* createNode(int value) {
 struct TreeNode* node = malloc(sizeof(struct TreeNode));
 node->data = value;
 node->left = NULL;
 node->right = NULL;
 return node;
}
'''

3. Possible Quiz Questions and Solutions

Question 1:
Define dynamic linked structures and list three of their characteristics.

Solution:

Dynamic linked structures are data structures whose size can change during runtime and whose
elements are connected using pointers rather than contiguous memory.

Characteristics:
i. Dynamic memory allocation
ii. No fixed size
iii. Non-contiguous memory storage

Question 2:

Explain two advantages and two disadvantages of dynamic linked structures.

Solution

Advantages:
i. Efficient memory utilization
ii. Easy insertion and deletion
Disadvantages:
i. Extra memory required for pointers
ii. Slower access compared to arrays

Question 3:

Write a C program to create and traverse a singly linked list.
Solution:

The code below may have some mistakes

'''

#include <stdio.h>
#include <stdlib.h>
struct Node {
 int data;
 struct Node* next;
};
int main() {
 struct Node* head = malloc(sizeof(struct Node));
 head->data = 5;
 head->next = NULL;
 struct Node* temp = head;
 while (temp != NULL) {
 printf("%d ", temp->data);
 temp = temp->next;
 }
 return 0;
}

'''
Question 4:
Why are dynamic linked structures preferred over arrays in certain applications?

Solution
They are preferred because they allow dynamic resizing, efficient insertion and deletion, and
better memory utilization when the data size is unknown in advance.

Question 5:

Differentiate between arrays and linked lists (any three points).

Solution
Feature Array Linked List
Memory Contiguous Non-contiguous
Size Fixed Dynamic
Access Direct indexing Sequential

2. COMPILER DRIVERS AND PROGRAM LINKING

2.1 Compiler Driver

Definition

A compiler driver is a system program that controls and coordinates the entire program
translation process, from human-readable source code to an executable machine-level program.
Instead of the programmer manually invoking several tools (preprocessor, compiler, assembler,
linker), the compiler driver automatically executes them in the correct order.

Key Idea

The compiler driver acts as a manager that:

i. Accepts source code as input
ii. Calls different compilation tools
iii. Produces an executable file

Common Compiler Drivers

Language | Compiler Driver |
C | gcc
C++ | g++
Java | javac
Rust | rustc

2.2 Compilation Phases Managed by a Compiler Driver

The compiler driver divides compilation into four major phases:

1. Preprocessing
i. Handles macro expansion
ii. Removes comments
iii. Includes header files
iv. Processes conditional compilation directives
Input: Source code (.c)
Output: Preprocessed source code (.i)

2. Compilation

i. Translates preprocessed code into assembly language
ii. Performs syntax and semantic analysis
iii. Detects programming errors
Input: .i file
Output: Assembly code (.s)

3. Assembly
i. Converts assembly language into machine code
ii. Produces object files
Input: .s file
Output: Object file (.o)

4. Linking
i. Combines multiple object files
ii. Resolves symbol references
iii. Links library functions
iv. Produces final executable
Input: .o files
Output: Executable file (a.out or named executable)

2.3 Example: Compilation Using GCC

gcc main.c

This single command automatically invokes:
i. Preprocessor
ii. Compiler
iii. Assembler
iv. Linker
The final output is an executable file.

2.4 Detailed Programming Examples (With Steps)

EXAMPLE 1: Simple C Program Compilation

Source Code: hello.c

#include <stdio.h>
int main() {
 printf("Hello, World!\n");
 return 0;
}

Step-by-Step Compilation Process

Step 1: Preprocessing
gcc -E hello.c > hello.i

i. Expands #include <stdio.h>
ii. Removes comments

Step 2: Compilation
gcc -S hello.i

Converts code to assembly (hello.s)

Step 3: Assembly
gcc -c hello.s
Produces object file (hello.o)

Step 4: Linking
gcc hello.o -o hello
Creates executable file hello

EXAMPLE 2: Multiple Source Files Linking

File 1: main.c
#include <stdio.h>
void greet();
int main() {
 greet();
 return 0;
}
File 2: greet.c
#include <stdio.h>
void greet() {
 printf("Welcome to Compiler Design!\n");
}

Compilation Steps
gcc -c main.c
gcc -c greet.c
gcc main.o greet.o -o program

Explanation
i. Each file is compiled separately
ii. The linker resolves the greet() function reference

EXAMPLE 3: Compilation Error vs Linking Error

Code: error.c
int main() {
 print("Hello");
 return 0;
}
Compilation Attempt
gcc error.c

Explanation
i. print() is undefined
ii. Compiler generates an error before linking

EXAMPLE 4: Using Standard Libraries
Code: math.c
#include <stdio.h>
#include <math.h>
int main() {
 printf("%f\n", sqrt(16));
 return 0;
}

Compilation
gcc math.c -lm

Explanation

i. -lm tells the linker to link the math library
ii. Missing -lm causes a linker error

EXAMPLE 5: Static vs Dynamic Linking

Static Linking
gcc -static hello.c -o hello_static

Dynamic Linking (Default)
gcc hello.c -o hello_dynamic

Explanation
i. Static linking embeds libraries into executable
ii. Dynamic linking loads libraries at runtime
2.5 Importance of Compiler Drivers
i. Simplifies program building
ii. Reduces user errors
iii. Ensures correct compilation order
iv. Supports large-scale software development

2.6 Compilation Phases summary Table

Phase |Tool | Output
Preprocessing | cpp | .i
Compilation | cc | .s
Assembly | as | .o
Linking | ld | Executable

2.7 Possible Quiz Questions and Solutions

Question 1
Define a compiler driver and state its main functions.

Solution

A compiler driver is a system program that coordinates all stages of compilation, including
preprocessing, compilation, assembly, and linking. Its main function is to transform source code
into an executable program automatically.

Question 2

List and explain the four compilation phases managed by a compiler driver.

Solution

i. Preprocessing – Handles macros and header files
ii. Compilation – Converts code to assembly
iii. Assembly – Produces object files
iv. Linking – Combines object files and libraries

Question 3

Differentiate between compilation and linking.

Solution
Compilation Linking
Converts source code to object code Combines object files
Checks syntax errors Resolves symbol references
Produces .o files Produces executable

Question 4

Explain why linking fails when libraries are not specified.

Solution
Linking fails because external function definitions cannot be found. For example, using sqrt()
without linking math library (-lm) causes unresolved symbol errors.
Question 5
Write the GCC commands to compile two C files and produce an executable.

Solution
gcc -c file1.c
gcc -c file2.c
gcc file1.o file2.o -o program

3. STATIC LINKING
3.1 Definition of Static Linking

Static linking is a program linking technique in which all the library functions and external
code required by a program are copied directly into the executable file at compile time.
Once the program is compiled and linked statically, it becomes a self-contained executable that
does not require external libraries to be present at runtime.
In static linking, the linker resolves all symbol references during compilation and embeds the
corresponding object code into the final executable.

3.2 Characteristics of Static Linking

i. Libraries Copied into Executable
All referenced library functions (e.g., mathematical functions, I/O functions) are included
inside the final executable file.

ii. Larger Executable Size
Since library code is duplicated in every statically linked program, the executable size
increases.

iii. No External Dependencies at Runtime
The program can run independently, even if the target system does not have the required
libraries installed.

iv. Linking Occurs at Compile Time
All symbol resolution and address binding are completed before execution.

3.3 Advantages of Static Linking
i. Faster Program Execution

No need to locate and load external libraries during execution.

ii. High Portability
Executables can run on compatible systems without worrying about missing libraries.

iii. Reliability and Stability
The program behavior remains consistent since library versions cannot change at runtime.

iv. Simpler Deployment
Only one executable file needs to be distributed.

3.4 Disadvantages of Static Linking

i. Increased Memory Usage
Multiple statically linked programs duplicate the same library code in memory.

ii. Large Executable Files
Storage and distribution become inefficient for large applications.

iii. Difficult Library Updates
If a library bug is fixed, all statically linked programs must be recompiled.

iv. Slower Compilation Time
Linking large libraries increases compile time.

3.5 Static Linking Process (Step-by-Step)

i. Source code is written.
ii. Source code is compiled into object files.
iii. Required static libraries (.a files) are selected.
iv. Linker copies necessary library routines.
v. A single executable file is produced.

3.6 Programming Examples (With Detailed Steps)

Example 1: Static Linking a Simple C Program with Math Library

Step 1: Write the Source Code

#include <stdio.h>
#include <math.h>
int main() {
 double x = 9.0;
 printf("Square root of %.2f is %.2f\n", x, sqrt(x));
 return 0;
}

Step 2: Compile with Static Linking

gcc -static sqrt.c -o sqrt_static
Step 3: Explanation
i. -static forces static linking
ii. sqrt() is copied from libm.a
iii. The executable contains math library code
Example 2: Static Linking Using a Custom Library
Step 1: Create a Library Function (add.c)
int add(int a, int b) {
 return a + b;
}
Step 2: Compile Object File
gcc -c add.c
Step 3: Create Static Library
ar rcs libadd.a add.o
Step 4: Create Main Program (main.c)
#include <stdio.h>
int add(int, int);
int main() {
 printf("Sum = %d\n", add(5, 3));
 return 0;
}
Step 5: Static Linking

gcc -static main.c -L. -ladd -o add_static

Example 3: Comparing Static and Dynamic Executable Sizes

Step 1: Compile Dynamically
gcc main.c -o dynamic_exec

Step 2: Compile Statically
gcc -static main.c -o static_exec

Step 3: Compare Sizes
ls -lh dynamic_exec static_exec

Observation
i. Static executable is significantly larger
ii. Dynamic executable depends on shared libraries

Example 4: Running Static Executable Without Libraries

Scenario
Run a statically linked program on a system without shared libraries.
Result
i. Static executable runs successfully
ii. Dynamic executable fails due to missing libraries

Conclusion
Static linking improves portability.

Example 5: Symbol Resolution in Static Linking

Step 1: Function Declaration

int multiply(int a, int b);

Step 2: Linker Action
i. Searches static library
ii. Copies required function into executable
iii. Resolves symbol references at compile time

3.7 Comparison: Static vs Dynamic Linking

Feature Static Linking Dynamic Linking
Linking Time Compile time Runtime
Executable Size Large Small
Memory Usage High Low
Portability High Moderate
Library Update Recompile needed Automatic

3.8 Possible Questions and Solutions

Question 1

Define static linking and explain how it differs from dynamic linking.

Solution:
Static linking embeds all required library code into the executable at compile time, producing a
self-contained program. Dynamic linking loads shared libraries at runtime, reducing executable
size but introducing dependencies.

Question 2
List three advantages and three disadvantages of static linking.
Solution:

Advantages:
i. Faster execution
ii. No runtime dependencies
iii. Portable executable

Disadvantages:
i. Large executable size
ii. Increased memory usage
iii. Difficult library updates

Question 3
Explain the steps involved in creating a statically linked executable.
Solution:
i. Write source code
ii. Compile to object files
iii. Select static libraries
iv. Link object files and libraries
v. Generate executable

Question 4
Write a C program that uses a statically linked user-defined library.
Solution:
(As shown in Example 2)
i. Create function
ii. Build static library
iii. Link using -static

Question 5

Why are statically linked executables larger than dynamically linked ones?

Solution:
Because static linking copies all required library code into the executable, while dynamic linking
references shared libraries stored externally.

4. SYMBOL RESOLUTION
4.1 Definition of Symbol Resolution
Symbol resolution is a fundamental process in program compilation and execution where the
compiler, linker, or dynamic loader matches identifiers (symbols)—such as variables,
functions, and constants—to their actual definitions in memory or code.
A symbol is simply a name used in a program to represent:
i. A function
ii. A variable
iii. A constant
iv. An object or data structure
During symbol resolution, the system ensures that every symbol referenced in a program has
a valid and unique definition.
Why Symbol Resolution Is Important
i. Prevents undefined references
ii. Enables modular programming
iii. Allows separate compilation
iv. Supports library usage and dynamic linking

4.2 Types of Symbols
4.2.1 Global Symbols

Global symbols are identifiers that are:
i. Defined in one file
ii. Accessible from other source files
They are typically declared outside all functions.

Characteristics
i. Visible across multiple source files
ii. Stored in the global symbol table
iii. Resolved during linking

Example
int total; // global symbol

4.2.2 External Symbols
External symbols are symbols that:
i. Are declared in one file using the extern keyword
ii. Are defined in another file

Characteristics
i. Declaration without allocation
ii. Definition exists elsewhere
iii. Used to share variables or functions across files

Example
extern int count;

4.2.3 Local Symbols

Local symbols are:
i. Declared inside functions or blocks
ii. Accessible only within their scope

Characteristics
i. Stored in stack memory
ii. Resolved at compile time
iii. Not visible to the linker

Example
void func() {
 int x; // local symbol
}

4.3 When Symbol Resolution Occurs
4.3.1 During Linking

i. Performed by the linker
ii. Matches symbol references to definitions across object files
iii. Resolves global and external symbols

4.3.2 During Dynamic Loading

i. Performed at runtime
ii. Occurs when shared libraries are loaded
iii. Symbols resolved by the dynamic loader

4.4 Programming Examples with Detailed Steps

Example 1: Global Symbol Resolution (Single File)
Program Code
#include <stdio.h>
int counter = 10; // global symbol
int main() {
 printf("%d\n", counter);
 return 0;
}
Step-by-Step Explanation
i. The compiler encounters counter
ii. It recognizes counter as a global symbol
iii. Memory is allocated for counter
iv. The linker confirms the definition exists
v. Program executes successfully

Example 2: External Symbol Resolution (Multiple Files)
File 1: main.c
#include <stdio.h>
extern int value; // external symbol
int main() {
 printf("%d\n", value);
 return 0;
}
File 2: data.c
int value = 25; // definition
Compilation Steps
gcc -c main.c
gcc -c data.c
gcc main.o data.o -o program

Explanation
i. value is declared as external in main.c
ii. The linker searches object files
iii. Definition found in data.o
iv. Symbol reference is resolved

Example 3: Local Symbol Resolution

Program Code
#include <stdio.h>
void test() {
 int x = 5; // local symbol
 printf("%d\n", x);
}
int main() {
 test();
 return 0;
}

Explanation

i. x exists only within test()
ii. Compiler assigns stack memory
iii. Linker is not involved
iv. Symbol resolved at compile time

Example 4: Function Symbol Resolution

File 1: main.c
#include <stdio.h>
void display(); // function declaration
int main() {
 display();
 return 0;
}
File 2: display.c
#include <stdio.h>
void display() {
 printf("Symbol resolved!\n");
}

Explanation

i. display() is referenced in main.c
ii. Linker searches for definition
iii. Finds it in display.o
iv. Function call is resolved

Example 5: Dynamic Symbol Resolution (Shared Library)

Shared Library Code
// mathlib.c
int square(int x) {
 return x * x;
}
Application Code
#include <stdio.h>
int square(int); // symbol resolved at runtime
int main() {
 printf("%d\n", square(4));
 return 0;
}

Steps

i. Library compiled as shared object
ii. Application loads library at runtime
iii. Dynamic loader resolves square
iv. Function is executed

4.5 Common Symbol Resolution Errors

Error Cause
Undefined reference Missing definition
Multiple definition Symbol defined more than once
Symbol not found Library not linked

4.6 Possible Quiz Questions and Solutions

Question 1

Define symbol resolution and explain why it is important.

Solution:

Symbol resolution is the process of matching variable and function references to their definitions
during compilation, linking, or runtime. It is important because it ensures correctness, enables
modular programming, and allows separate compilation and library usage.

Question 2
Differentiate between global, local, and external symbols.

Solution:

Symbol Type Scope Resolution
Global Entire program Link time
Local Function/block Compile time
External Across files Link time

Question 3

Explain how symbol resolution occurs during linking using a two-file program.

Solution:
The linker scans all object files, matches external symbol references to their global definitions,
and binds them together to form a single executable.

Question 4

What is dynamic symbol resolution? Give one advantage.

Solution:

Dynamic symbol resolution occurs at runtime when shared libraries are loaded. An advantage is
reduced memory usage since libraries can be shared.

Question 5

Identify the error in the following code and explain it.
extern int num;
int main() {
 printf("%d", num);
}

Solution:
Error: Undefined reference to num.
Explanation: The symbol num is declared but never defined in any file.

5. Relocatable and Executable Object Files
5.0 Introduction

In systems programming and compiler design, a program does not become executable
immediately after writing source code. Instead, it passes through multiple stages: compilation,
assembly, linking, and loading.
At the heart of these stages are object files, which exist in two major forms:

i. Relocatable Object Files
ii. Executable Object Files

Understanding these file types is essential for learning:
i. How compilers and linkers work
ii. How large programs are built from multiple source files
iii. How memory addresses are assigned before execution

5.1 Relocatable Object Files
5.1.1 Definition

A relocatable object file is an intermediate file generated by the assembler. It contains machine
instructions and data, but addresses are not final. The file can later be combined with other
object files.

5.1.2 Key Characteristics
i. Produced after compilation and assembly
ii. Uses symbolic or relative addresses
iii. Cannot be executed directly
iv. Designed to be linked with other object files
v. Common extension: .o (Linux/UNIX), .obj (Windows)

5.1.3 Contents of a Relocatable Object File
A relocatable object file typically contains:
i. Text section – machine instructions
ii. Data section – initialized global variables
iii. Symbol table – names of functions and variables
iv. Relocation table – places where addresses must be fixed later

5.1.4 Why Relocatable Files Are Needed
i. Support modular programming
ii. Enable separate compilation
iii. Improve program maintenance and reuse

5.2 Executable Object Files
5.2.1 Definition

An executable object file is produced by the linker after combining one or more relocatable
object files and libraries. It contains absolute memory addresses and can be loaded into
memory and executed.

5.2.2 Key Characteristics

i. Produced by the linker
ii. Contains final memory addresses
iii. Fully self-contained
iv. Ready for execution by the operating system
v. Common formats: ELF (Linux), PE (Windows), Mach-O (macOS)

5.2.3 Contents of an Executable File

i. Final machine code
ii. Initialized data
iii. Program entry point (main)
iv. Information for the loader

5.2.4 Role of the Operating System
The OS:
i. Loads the executable into memory
ii. Sets up stack and heap
iii. Transfers control to the entry point

5.3 Difference Between Relocatable and Executable Object Files
Feature Relocatable Object File Executable Object File
Produced by Assembler Linker
Address type Symbolic / relative Absolute
Executable No Yes
Extension .o .out, .exe
Purpose Linking Execution

5.4 Programming Examples (With Detailed Steps)

Example 1: Creating a Relocatable Object File

Step 1: Write a C source file
// hello.c
#include <stdio.h>
void greet() {
 printf("Hello, World!\n");
}

Step 2: Compile without linking
gcc -c hello.c
Step 3: Result
i. File created: hello.o
ii. This is a relocatable object file
iii. It cannot be executed directly

Explanation
i. -c tells the compiler to stop after assembly
ii. Addresses inside hello.o are not final

Example 2: Inspecting a Relocatable Object File

Step 1: Use nm to view symbols
nm hello.o
Output (simplified)
00000000 T greet
 U printf

Explanation

i. greet is defined in this file
ii. printf is undefined (will be resolved by the linker)

Example 3: Linking Multiple Relocatable Files

Step 1: Create two source files
// main.c
void greet();
int main() {
 greet();
 return 0;
}
// greet.c
#include <stdio.h>
void greet() {
 printf("Welcome!\n");
}

Step 2: Compile separately
gcc -c main.c
gcc -c greet.c

Step 3: Link object files
gcc main.o greet.o -o program

Result
i. main.o and greet.o → relocatable
ii. program → executable object file

Example 4: Running an Executable Object File

Step 1: Execute
./program
Output
Welcome!

Explanation
i. Linker resolved all symbols
ii. Addresses are absolute
iii. OS loader loads the program into memory

Example 5: Viewing Executable File Information

Step 1: Use readelf
readelf -h program

What You Learn
i. Entry point address
ii. File type: EXEC
iii. Architecture (e.g., x86-64)

5.5 Example Quiz Questions

Question 1

Define a relocatable object file and state two reasons why it cannot be executed directly.

Solution
A relocatable object file is an intermediate file produced by the assembler containing machine
code with symbolic or relative addresses.

It cannot be executed directly because:
i. Memory addresses are not final.
ii. External symbols may still be unresolved.

Question 2

Differentiate between relocatable object files and executable object files.

Solution
Relocatable object files are produced by the assembler and contain symbolic addresses, while
executable object files are produced by the linker and contain absolute memory addresses and
can be executed.

Question 3
Explain the role of the linker in creating executable object files.
Solution
The linker:
i. Combines multiple relocatable object files
ii. Resolves external symbols
iii. Assigns final memory addresses
iv. Produces a single executable file

Question 4
Write the command used to generate a relocatable object file from a C source file and explain it.

Solution
gcc -c file.c
The -c option compiles and assembles the source file without linking, producing a relocatable
object file (file.o).

Question 5
Why is separate compilation important in large software systems?

Solution
Separate compilation:
i. Reduces compilation time
ii. Improves modularity
iii. Allows independent development
iv. Simplifies debugging and maintenance

6. LOADING EXECUTABLE FILES
6.1 The Loader
6.1.1 Definition of a Loader

A loader is a critical component of the operating system (OS) responsible for preparing an
executable program for execution. After a program has been compiled and linked, it exists as an
executable file on secondary storage (such as a hard disk or SSD). The loader moves this
executable into main memory (RAM) and starts its execution.

6.1.2 Functions of the Loader

The loader performs the following major functions:
A. Loads executable files into memory
i. Reads the executable file from disk
ii. Places program code and data into memory

B. Resolves remaining symbols
i. Matches references to external libraries or functions
ii. Particularly important in dynamic linking

C. Transfers control to the program
i. Sets the instruction pointer (program counter)
ii. Hands control to the program’s entry point (e.g., main())

6.2 Types of Loaders (Brief Overview)

Loader Type Description
Absolute Loader Loads program at a fixed memory address
Relocating Loader Adjusts addresses based on available memory
Dynamic Loader Loads libraries during runtime
Bootstrap Loader Loads the operating system itself

6.3 Loading Steps

When a user executes a program (e.g., by typing ./a.out in Linux), the loader performs the

following steps:

Step 1: Allocate Memory

The OS allocates memory for:
i. Program code (text segment)
ii. Global/static data
iii. Stack
iv. Heap

Step 2: Copy Executable Code
i. Program instructions and initialized data are copied from disk into memory
ii. Uninitialized data is set to zero

Step 3: Initialize Runtime Environment

i. Stack is prepared
ii. Environment variables and command-line arguments are set
iii. Shared libraries are loaded (if required)

Step 4: Start Execution

i. Control is transferred to the program’s entry point
ii. Execution begins

6.4 Programming Examples (With Detailed Steps)

Example 1: Simple Program Execution (C Language)

Program Code
#include <stdio.h>
int main() {
 printf("Hello, Loader!\n");
 return 0;
}

Programming Steps

i. Write the source code and save as hello.c
ii. Compile the program
iii. gcc hello.c -o hello
iv. Linking occurs automatically (static/dynamic)
v. Execute the program
vi. ./hello
vii. Loader actions
a. Allocates memory
b. Loads executable
c. Loads shared libraries (e.g., libc)
d. Transfers control to main()

Example 2: Observing Shared Libraries Loaded at Runtime

Program Code
#include <stdio.h>
#include <math.h>
int main() {
 printf("Square root of 16 is %.2f\n", sqrt(16));
 return 0;
}

Programming Steps
i. Save as math_example.c
ii. Compile and link:
iii. gcc math_example.c -o math_example -lm
iv. Check shared libraries:
v. ldd math_example
vi. Execute program:
vii. ./math_example
Learning Point
i. The loader loads libm.so at runtime
ii. Symbol resolution occurs before execution begins

Example 3: Dynamic Loading Using dlopen() (Linux)

Program Code
#include <stdio.h>
#include <dlfcn.h>
int main() {
 void *handle = dlopen("libm.so.6", RTLD_LAZY);
 if (!handle) {
 printf("Library not found\n");
 return 1;
 }
 printf("Library loaded successfully\n");
 dlclose(handle);
 return 0;
}

Programming Steps
i. Save as dynamic_loader.c
ii. Compile:
iii. gcc dynamic_loader.c -o dynamic_loader -ldl
iv. Run:
v. ./dynamic_loader
Learning Point
i. The loader loads shared libraries on demand
ii. Reduces memory usage

Example 4: Program Entry Point Demonstration

Program Code
#include <stdio.h>
void start() {
 printf("Program execution started\n");
}
int main() {
 start();
 return 0;
}

Programming Steps
i. Compile normally
ii. Loader starts execution at the entry point
iii. Entry point calls main()

Learning Point
i. Loader transfers control to a predefined entry point
ii. Entry point initializes runtime before main()

Example 5: Environment Variables Passed by the Loader
Program Code
#include <stdio.h>
int main(int argc, char *argv[]) {
 printf("Number of arguments: %d\n", argc);
 printf("First argument: %s\n", argv[0]);
 return 0;
}

Programming Steps
i. Compile:
ii. gcc args.c -o args
iii. Run:
iv. ./args test
v. Loader sets up argc and argv
Learning Point
i. Loader initializes runtime parameters
ii. Command-line arguments are passed automatically

6.5 Possible Quiz Questions and Solutions

Question 1
Define a loader and explain its main functions.
Solution
A loader is a component of the operating system responsible for loading executable programs
into main memory and preparing them for execution. Its main functions include loading
executable code into memory, resolving symbols, initializing the runtime environment, and
transferring control to the program’s entry point.

Question 2

List and explain the steps involved in loading an executable file.

Solution
i. Memory allocation for code, data, stack, and heap
ii. Copying executable code from disk to memory
iii. Initializing runtime environment (stack, arguments, libraries)
iv. Transferring control to the program entry point

Question 3

Differentiate between static linking and dynamic linking in the context of program loading.

Solution

Static Linking Dynamic Linking
Occurs at compile time Occurs at runtime
Larger executable Smaller executable
Faster execution Slight overhead
No runtime dependency Requires shared libraries

Question 4

Explain how the loader handles shared libraries during program execution.

Solution

The loader identifies required shared libraries, loads them into memory, resolves symbols, and
links them to the executable either at program startup or during execution using dynamic loading
mechanisms.

Question 5

Write a short C program that demonstrates the loader passing command-line arguments to
a program. Explain how the loader is involved.

Solution
#include <stdio.h>
int main(int argc, char *argv[]) {
 printf("Arguments count: %d\n", argc);
 return 0;
}
The loader sets up the stack and initializes argc and argv before transferring control to the
program.

7. Dynamic Linking with Shared Libraries
7.1 Definition of Dynamic Linking

Dynamic linking is a program linking technique in which library functions are not fully
linked into the executable at compile time. Instead, the linking of external libraries is deferred
until program execution time (runtime).

In dynamic linking:
i. The executable contains references to shared libraries.
ii. The actual library code is loaded into memory only when the program starts running
or when it is first needed.
iii. A special system component called the dynamic linker/loader resolves these references.

7.2 Shared Libraries
7.2.1 Definition

A shared library is a collection of reusable functions and code that can be shared by multiple
programs simultaneously in memory.

7.2.2 Common Formats

i. Linux / Unix: .so (shared object)
ii. Windows: .dll (Dynamic Link Library)
iii. macOS: .dylib

7.2.3 Key Characteristics

i. One copy of the library is loaded into memory
ii. Multiple applications can use the same library
iii. Updates to the library automatically affect dependent programs (if compatible)

7.3 Advantages of Dynamic Linking

A. Reduced Executable Size
Library code is not duplicated in each executable.

B. Efficient Memory Usage
Shared libraries are loaded once and reused by multiple processes.

C. Easier Updates and Maintenance
Bug fixes or improvements in a library can be applied without recompiling
applications.

D. Faster Compilation
Linking time is shorter since libraries are not embedded.

7.4 Disadvantages of Dynamic Linking
A. Dependency Issues
If a required library is missing or incompatible, the program may fail to run.

B. Runtime Overhead
Slight performance cost during startup due to symbol resolution.

C. Version Conflicts
Different programs may require different versions of the same library.

7.5 Programming Examples (with Detailed Steps)
All examples use C programming on Linux, as it is commonly used to demonstrate dynamic
linking concepts.

Example 1: Creating a Simple Shared Library
Step 1: Write the Library Source Code
File: mathlib.c
#include <stdio.h>
int add(int a, int b) {
 return a + b;
}

Step 2: Compile the Shared Library
gcc -fPIC -shared -o libmathlib.so mathlib.c

Explanation:
i. -fPIC: Generates position-independent code
ii. -shared: Creates a shared library
iii. libmathlib.so: Standard naming convention

Example 2: Using a Shared Library in an Application
Step 1: Write the Application Code
File: main.c
#include <stdio.h>
int add(int, int); // Function declaration
int main() {
 int result = add(5, 3);
 printf("Sum = %d\n", result);
 return 0;
}

Step 2: Compile and Link Dynamically
gcc -o main main.c -L. -lmathlib
Step 3: Run the Program
LD_LIBRARY_PATH=. ./main
Example 3: Verifying Dynamic Linking
Command:
ldd main
Sample Output:
libmathlib.so => ./libmathlib.so
libc.so.6 => /lib/x86_64-linux-gnu/libc.so.6

Explanation:
i. ldd lists shared library dependencies
ii. Confirms that libmathlib.so is dynamically linked

Example 4: Updating a Shared Library Without Recompiling
Step 1: Modify the Library Code
int add(int a, int b) {
 return a + b + 10;
}

Step 2: Recompile the Library Only
gcc -fPIC -shared -o libmathlib.so mathlib.c
Step 3: Run the Existing Program
./main

Observation:
i. Output changes without recompiling main
ii. Demonstrates ease of updates

Example 5: Runtime Dynamic Loading Using dlopen
Step 1: Program Using dlopen
#include <stdio.h>
#include <dlfcn.h>
int main() {
 void *handle = dlopen("./libmathlib.so", RTLD_LAZY);
 int (*add)(int, int);
 add = dlsym(handle, "add");
 printf("Sum = %d\n", add(2, 4));
 dlclose(handle);
 return 0;
}

Step 2: Compile
gcc -o dynamic_load dynamic_load.c -ldl

Explanation:
i. dlopen() loads library at runtime
ii. dlsym() retrieves function address
iii. Useful for plugins and modular systems

7.6 Possible Quiz Questions and Solutions

Question 1
Define dynamic linking and explain how it differs from static linking.

Solution:

Dynamic linking links libraries at program execution time, whereas static linking embeds library
code into the executable at compile time. Dynamic linking reduces executable size and allows
shared memory usage, while static linking produces larger, self-contained executables.

Question 2

List three advantages and two disadvantages of dynamic linking.

Solution:

Advantages:
i. Smaller executable size
ii. Efficient memory utilization
iii. Easier updates

Disadvantages:
i. Dependency problems
ii. Runtime overhead

Question 3

Explain the role of shared libraries in dynamic linking.

Solution:
Shared libraries contain reusable code that is loaded into memory once and shared among
multiple programs. They allow dynamic linking by providing external functions resolved at
runtime.

Question 4
Write the command used to create a shared library in Linux and explain its components.

Solution:
gcc -fPIC -shared -o libexample.so example.c
i. -fPIC: Generates position-independent code
ii. -shared: Creates a shared library
iii. -o: Specifies output file

Question 5
Describe a scenario where dynamic linking is preferred over static linking.

Solution:
Dynamic linking is preferred in operating systems and large software systems where many
applications use the same libraries (e.g., GUI frameworks). It reduces memory usage and
simplifies maintenance through centralized updates.

8. LOADING AND LINKING SHARED LIBRARIES FROM APPLICATIONS
8.0 Introduction

Modern software systems rely heavily on shared libraries to reduce memory usage, improve
modularity, and simplify software maintenance. Instead of embedding all library code inside an
executable (static linking), programs may load libraries at runtime using dynamic linking
mechanisms provided by the operating system.
This section explains how applications load shared libraries, how symbols are resolved at
runtime, and how developers explicitly control library loading.

8.1 Runtime Linking
8.1.1 Definition

Runtime linking is the process of loading and linking shared libraries while a program is
executing, rather than during compilation.

8.1.2 Modes of Runtime Linking
(a) Load at Program Startup
i. Shared libraries are loaded automatically when the application starts
ii. Performed by the OS dynamic loader
iii. Common in most Linux and Windows applications
Example:
./myprogram
The loader loads all required .so or .dll files before execution begins.
(b) Load on Demand
i. Libraries are loaded only when needed
ii. Controlled explicitly by the programmer
iii. Saves memory and improves startup performance

8.2 Dynamic Loader
8.2.1 Definition

A dynamic loader is a component of the operating system responsible for:
i. Loading shared libraries into memory
ii. Resolving symbols (functions and variables)
iii. Relocating code to correct memory addresses

8.2.2 Responsibilities of the Dynamic Loader
i. Locate required shared libraries
ii. Map libraries into memory
iii. Resolve external symbols
iv. Perform relocations
v. Transfer control to the application

8.2.3 Platform-Specific Loaders

Operating System Dynamic Loader
Linux / Unix ld.so, ld-linux.so
Windows Windows Loader

8.3 Example Tools for Dynamic Linking
8.3.1 Linux: ld.so

i. Automatically invoked by the OS
ii. Loads .so libraries
iii. Searches library paths such as:
a. /lib
b. /usr/lib
c. LD_LIBRARY_PATH

8.3.2 Windows: LoadLibrary()
i. Explicit API call for loading .dll files
ii. Allows full runtime control
iii. Used in plugin-based systems

PROGRAMMING EXAMPLES (WITH DETAILED STEPS)

Example 1: Creating a Shared Library (Linux)
Step 1: Write the Library Code
// mathlib.c
#include <stdio.h>
int add(int a, int b) {
 return a + b;
}
Step 2: Compile as Position Independent Code
gcc -fPIC -c mathlib.c
Step 3: Create Shared Library
gcc -shared -o libmathlib.so mathlib.o
Explanation
i. -fPIC: Enables position independent code
ii. -shared: Creates a shared object (.so)
Example 2: Automatic Runtime Linking (Linux)
Step 1: Application Code
// main.c
#include <stdio.h>
int add(int, int);
int main() {
 printf("Sum = %d\n", add(4, 5));
 return 0;
}
Step 2: Compile and Link
gcc main.c -L. -lmathlib -o app
Step 3: Run the Program
export LD_LIBRARY_PATH=.
./app

Explanation
i. Library is loaded automatically at program startup
ii. Symbol add() resolved by the dynamic loader

Example 3: Explicit Runtime Loading Using dlopen() (Linux)
Step 1: Application Code
#include <stdio.h>
#include <dlfcn.h>
int main() {
 void *handle;
 int (*add)(int, int);
 handle = dlopen("./libmathlib.so", RTLD_LAZY);
 add = dlsym(handle, "add");
 printf("Sum = %d\n", add(3, 7));
 dlclose(handle);
 return 0;
}
Step 2: Compile
gcc main.c -ldl -o dynamic_app
Explanation
i. dlopen() loads library at runtime
ii. dlsym() resolves symbols manually
iii. dlclose() unloads library

Example 4: Dynamic Loading in Windows Using LoadLibrary()
Step 1: DLL Code
// mathlib.c
__declspec(dllexport)
int add(int a, int b) {
 return a + b;
}

Step 2: Application Code
#include <windows.h>
#include <stdio.h>
typedef int (*AddFunc)(int, int);
int main() {
 HINSTANCE hLib = LoadLibrary("mathlib.dll");
 AddFunc add = (AddFunc)GetProcAddress(hLib, "add");
 printf("Sum = %d\n", add(5, 6));
 FreeLibrary(hLib);
 return 0;
}
Explanation
i. LoadLibrary() loads DLL
ii. GetProcAddress() resolves symbol
iii. FreeLibrary() releases library

Example 5: Plugin-Based Application Design
Concept
i. Application loads different libraries at runtime
ii. Enables extensibility without recompiling
Steps
i. Define plugin interface
ii. Compile plugins as shared libraries
iii. Load plugins dynamically
iv. Call functions via function pointers
Use Cases
i. Media players
ii. Web servers
iii. Game engines

POSSIBLE Quiz QUESTIONS AND SOLUTIONS

Question 1
Define runtime linking and distinguish it from static linking.

Solution
Runtime linking loads libraries during program execution, while static linking embeds library
code into the executable at compile time. Runtime linking reduces executable size and allows
shared library updates without recompilation.

Question 2
Explain the role of the dynamic loader in program execution.

Solution
The dynamic loader loads shared libraries into memory, resolves unresolved symbols, performs
address relocation, and starts program execution.

Question 3
Write a C program that loads a shared library at runtime using dlopen() and calls a
function.

Solution
(See Example 3 above)

Question 4
List three advantages of loading shared libraries on demand.

Solution
i. Reduced memory usage
ii. Faster application startup
iii. Improved modularity

Question 5
Explain how LoadLibrary() differs from automatic dynamic linking.

Solution
LoadLibrary() allows explicit control over when and how a DLL is loaded, whereas automatic
dynamic linking loads all required libraries when the program starts.

9. POSITION INDEPENDENT CODE (PIC)
9.1 Definition of Position Independent Code (PIC)

Position Independent Code (PIC) refers to machine code or compiled program code that
can execute correctly no matter where it is loaded in memory.
Normally, programs assume fixed memory addresses. PIC removes this assumption by ensuring
that all memory references are computed dynamically at runtime, allowing the code to run
correctly even when its location in memory changes.

Key Idea

PIC does not rely on absolute memory addresses; instead, it uses relative addressing and
runtime symbol resolution.

9.2 Why Position Independent Code Is Necessary
9.2.1 Required for Shared Libraries

Shared libraries may be loaded at different memory locations in different processes. PIC
ensures the same library code can be reused without modification.

9.2.2 Enables Memory Sharing
i. Only one copy of a shared library is loaded into physical memory.
ii. Multiple processes can reference the same code.
iii. Saves RAM and improves system efficiency.

9.2.3 Improves Security

PIC supports:
i. Address Space Layout Randomization (ASLR)
ii. Harder for attackers to predict memory addresses
iii. Reduces buffer overflow and code injection attacks

9.3 How Position Independent Code Works
9.3.1 Relative Addressing

Instead of referencing absolute addresses, PIC calculates addresses relative to the program
counter (PC) or a base register.

9.3.2 Global Offset Table (GOT)
i. Stores addresses of global variables and functions
ii. Filled by the dynamic linker at runtime

9.3.3 Procedure Linkage Table (PLT)
i. Used for calling external functions
ii. Allows lazy binding (linking when function is first called)

9.4 Components Used in PIC
Component Purpose
Program Counter (PC) Determines current instruction address
GOT Resolves global data addresses
PLT Resolves external function calls
Dynamic Linker Performs runtime symbol resolution

9.5 PROGRAMMING EXAMPLES (WITH STEP-BY-STEP EXPLANATIONS)

Example 1: Compiling a Shared Library with PIC (C Language)
Step 1: Write the Source Code
// mathlib.c
int add(int a, int b) {
 return a + b;
}
Step 2: Compile with PIC Enabled
gcc -fPIC -c mathlib.c
Step 3: Create a Shared Library
gcc -shared -o libmathlib.so mathlib.o

Explanation
i. -fPIC generates position independent code
ii. The resulting library can be loaded at any address
iii. Used by multiple applications simultaneously

Example 2: Using a PIC Shared Library in an Application
Step 1: Application Code
// main.c
#include <stdio.h>
int add(int, int);
int main() {
 printf("Sum = %d\n", add(3, 5));
 return 0;
}
Step 2: Compile and Link
gcc -o app main.c -L. -lmathlib
Step 3: Run the Program
./app

Explanation
i. The function address is resolved at runtime
ii. The shared library can be loaded anywhere in memory

Example 3: Demonstrating Relative Addressing Conceptually
int global = 10;
int getValue() {
 return global;
}
How PIC Accesses global
i. The address of global is stored in the GOT
ii. The code loads the GOT base address
iii. Accesses global using an offset
Key Benefit
The actual memory location of global does not matter
Example 4: Lazy Binding with PLT
Code Example
#include <stdio.h>
int main() {
 puts("Hello, PIC!");
 return 0;
}
Runtime Steps
i. First call to puts() goes through PLT
ii. Dynamic linker resolves the function
iii. GOT is updated
iv. Future calls go directly to puts()
Benefit
i. Faster program startup
ii. Only used functions are resolved
Example 5: PIC vs Non-PIC Compilation
Non-PIC Compilation
gcc -c example.c
PIC Compilation
gcc -fPIC -c example.c
Difference
Feature Non-PIC PIC
Memory flexibility Low High
Shared library support No Yes
Security support Limited Strong

9.6 ADVANTAGES AND DISADVANTAGES OF PIC

Advantages
i. Memory efficient
ii. Required for shared libraries
iii. Enhances security
iv. Supports ASLR

Disadvantages
i. Slight runtime overhead
ii. More complex code generation

9.7 Example Questions

Question 1
Define Position Independent Code and explain why it is important in modern operating
systems.

Solution
Position Independent Code is code that executes correctly regardless of its memory location. It is
important because it allows shared libraries to be loaded at different addresses, enables memory
sharing among processes, and improves system security through ASLR.

Question 2
Explain how relative addressing is used in Position Independent Code.

Solution
Relative addressing calculates memory addresses relative to the program counter or a base
register. This allows code to reference variables and functions without relying on fixed memory
addresses, making it position independent.

Question 3
Describe the roles of the Global Offset Table (GOT) and Procedure Linkage Table (PLT)
in PIC.

Solution
The GOT stores addresses of global variables and functions resolved at runtime. The PLT is used
for function calls and enables lazy binding, allowing functions to be linked only when they are
first called.

Question 4
Write steps to compile and use a shared library with PIC in C.

Solution
i. Write the source code
ii. Compile with -fPIC
iii. Create shared library using -shared
iv. Link application with the shared library
v. Execute the program

Question 5
State two advantages and two disadvantages of Position Independent Code.

Solution
Advantages:
i. Enables shared libraries
ii. Improves security
Disadvantages:
i. Slight performance overhead
ii. Increased code complexity

TOOLS FOR MANIPULATING OBJECT FILES

10. Tools for Manipulating Object Files
Object files are the intermediate machine code representations generated by the compiler.
Manipulating these files helps programmers debug, inspect, or create libraries.

10.1 Common Tools

Tool Function
objdump Display object file contents (assembly, headers, etc.)
nm List symbols defined or referenced in object files
ldd Show shared library dependencies of executables
readelf Inspect ELF (Executable and Linkable Format) file details
ar Create and manage static libraries

10.2 Detailed Explanation and Usage
10.2.1 objdump – Inspect Object Files

i. Used to disassemble object files or executables.
ii. Displays:
a. Assembly code
b. File headers
c. Section headers

Example 1 – Disassemble a compiled program
// file: example1.c
#include <stdio.h>
int main() {
 printf("Hello, World!\n");
 return 0;
}

Step-by-step:
A. Compile to object file:
gcc -c example1.c -o example1.o
B. Disassemble using objdump:
objdump -d example1.o
C. Observe the assembly instructions corresponding to the C code.

10.2.2 nm – List Symbols
i. Lists all symbols in object files, including functions and variables.
ii. Helps identify undefined symbols before linking.

Example 2 – Using nm
// file: example2.c
int globalVar = 10;
void greet() {
 // Do nothing
}
int main() {
 greet();
 return 0;
}

Step-by-step:
A. Compile:
gcc -c example2.c -o example2.o
B. List symbols:
nm example2.o
C. Observe output:
i. T main → main is defined in text (code) section.
ii. B globalVar → globalVar is in the BSS section.

10.2.3 ldd – Shared Library Dependencies
i. Displays all shared libraries needed by an executable.
ii. Useful to check runtime dependencies.

Example 3 – Check dependencies
A. Compile:
gcc example1.c -o example1
B. Check dependencies:
ldd example1
C. Output example:
linux-vdso.so.1 => (0x00007ffc1f1fe000)
libc.so.6 => /lib/x86_64-linux-gnu/libc.so.6 (0x00007f5e0b7b7000)
Confirms which shared libraries will be loaded at runtime.

10.2.4 readelf – Inspect ELF Details
i. Inspects ELF format files (common in Linux).
ii. Shows headers, sections, and program info.

Example 4 – Inspect ELF headers
readelf -h example1
i. Output fields include:
a. Entry point address
b. Program header table offset
c. Section header table offset
ii. Helps understand memory layout of executable files.

10.2.5 ar – Create Static Libraries
i. ar combines object files into a static library.
ii. Static libraries can be linked into multiple programs.
Example 5 – Creating a static library
// file: libmath.c
int add(int a, int b) { return a + b; }
int multiply(int a, int b) { return a * b; }
Steps:
i. Compile to object file:
gcc -c libmath.c -o libmath.o
ii. Create static library:
ar rcs libmath.a libmath.o
iii. Use library in another program:
// file: main.c
#include <stdio.h>
int add(int, int);
int multiply(int, int);
int main() {
 printf("%d\n", add(5, 3));
 printf("%d\n", multiply(5, 3));
 return 0;
}

4. Compile with library:
gcc main.c -L. -lmath -o main
./main
• Output:
8
15
10.3 Summary of Tools
Tool Main Purpose
objdump Disassemble object files
nm List symbols
ldd Check dynamic dependencies
readelf Inspect ELF file structure
ar Build static libraries

10.4 Possible Quiz Questions

Question 1
Explain the difference between objdump and nm. Provide an example of when each would be
used.

Solution:
i. objdump shows the assembly instructions and sections of object files.
ii. nm lists symbols (variables/functions).

Example:
iii. Use objdump -d file.o to debug assembly output.
iv. Use nm file.o to verify if main function exists before linking.

Question 2
Create a static library from math.c containing functions add and multiply, and demonstrate its
use in a program.

Solution:
i. Compile: gcc -c math.c → math.o
ii. Create library: ar rcs libmath.a math.o
iii. Compile main program: gcc main.c -L. -lmath -o main
iv. Run: ./main

Question 3
Using ldd, show how to check which shared libraries a program depends on.

Solution:
gcc test.c -o test
ldd test
Output lists all runtime dependencies, e.g., libc.so.6.

Question 4
Explain what readelf -h shows and why it is useful.

Solution:
i. readelf -h shows ELF header info: entry point, section offsets, type, architecture.
ii. Useful to understand memory layout and debugging binary issues.

Question 5
Write a C program with a global variable and a function. Use nm to verify the symbol types.

Solution:
#include <stdio.h>
int globalVar = 100;
void greet() { printf("Hello\n"); }
int main() { greet(); return 0; }
i. Compile: gcc -c test.c → test.o
ii. Use nm test.o → Output:
B globalVar
T greet
T main
B → uninitialized global, T → code section (functions)

11. Sets
11.1 Definition

A set is an unordered collection of distinct elements, meaning:
A. No element repeats in a set.
B. The order of elements does not matter.

Example:
Set A = {1, 2, 3, 4}
Set B = {4, 2, 1, 3} // same as Set A because order doesn’t matter
Set C = {1, 2, 2, 3} // invalid as a set because 2 repeats

Key Characteristics:
i. Unordered: {1, 2} is the same as {2, 1}
ii. Distinct elements: {1, 2, 2} is simplified to {1, 2}
iii. Mutable or Immutable: Some programming languages allow changing sets, others
don’t.

11.2 Set Operations

A. Union ( ∪ )
Combines all elements from two sets, without duplicates.
A = {1, 2, 3}, B = {3, 4, 5}
A ∪ B = {1, 2, 3, 4, 5}
B. Intersection ( ∩ )
Returns elements common to both sets.
A ∩ B = {3}
C. Difference ( − )
Elements in the first set but not in the second.
A − B = {1, 2}
B − A = {4, 5}
D. Membership Test
Checks if an element exists in a set.
2 ∈ A → True
5 ∈ A → False

11.3 Applications of Sets

i. Database Queries: Filtering records without duplicates.
ii. Mathematical Modeling: Representing relationships between objects.
iii. Compiler Design: Handling unique keywords, tokens, or symbols.

11.4 Programming Examples

Here we demonstrate Python examples for practical understanding.
Example 1: Creating a Set
# Step 1: Create a set
A = {1, 2, 3, 4, 5}
B = {4, 5, 6, 7}
# Step 2: Print sets
print("Set A:", A)
print("Set B:", B)
Explanation:
i. {} is used to define sets.
ii. Duplicate elements are automatically removed.
iii. Output:
Set A: {1, 2, 3, 4, 5}
Set B: {4, 5, 6, 7}
Example 2: Union of Sets
# Union operation
union_set = A.union(B)
print("Union of A and B:", union_set)
Step-by-step:
i. Call union() method on set A with B as argument.
ii. Combine all unique elements.
Output:
Union of A and B: {1, 2, 3, 4, 5, 6, 7}
Example 3: Intersection of Sets
# Intersection operation
intersection_set = A.intersection(B)
print("Intersection of A and B:", intersection_set)
Explanation:
i. Returns elements common in both sets.
ii. Output:
Intersection of A and B: {4, 5}
Example 4: Difference of Sets
# Difference operation
diff_set = A.difference(B)
print("Elements in A but not in B:", diff_set)
Explanation:
i. Returns elements in A not in B.
ii. Output:
Elements in A but not in B: {1, 2, 3}
Example 5: Membership Test
# Membership test
element = 3
if element in A:
 print(f"{element} is in set A")
else:
 print(f"{element} is not in set A")
Explanation:
i. Uses in keyword to check presence.
ii. Output:
3 is in set A
11.5 Advanced Operations
i. Symmetric Difference ( ^ ): Elements in either set but not in both.
ii. sym_diff = A.symmetric_difference(B)
iii. print("Symmetric Difference:", sym_diff)
iv. # Output: {1, 2, 3, 6, 7}
v. Subset / Superset Tests:
vi. print(A.issubset(B)) # False
vii. print(A.issuperset({1,2})) # True
11.6 Possible Exam Questions and Solutions
Q1: Define a set and explain its properties.
Solution:
i. A set is an unordered collection of distinct elements.
ii. Properties:
a. Unordered
b. No duplicates
c. Can be finite or infinite
Q2: Given A = {1,2,3} and B = {2,3,4}, find:
i. A ∪ B
ii. A ∩ B
iii. A − B
Solution:
a. Union: {1,2,3,4}
b. Intersection: {2,3}
c. Difference: {1}

Q3: Write a Python program to check if 5 is in the set C = {1,3,5,7}.

Solution:
C = {1,3,5,7}
if 5 in C:
 print("5 is present")
else:
 print("5 is not present")
Output:
5 is present

Q4: Explain with an example how sets are used in database queries.
Solution:
Example: Finding unique student IDs from multiple classes.
class1 = {101, 102, 103}
class2 = {102, 104, 105}
all_students = class1.union(class2)
print(all_students) # {101, 102, 103, 104, 105}
union() removes duplicates, giving unique IDs.
Q5: Write a Python program to find common elements between two sets:
X = {10, 20, 30, 40}
Y = {30, 40, 50, 60}
Solution:
X = {10, 20, 30, 40}
Y = {30, 40, 50, 60}
common = X.intersection(Y)
print("Common elements:", common)
Output:
Common elements: {30, 40}
Lecture Note: Information Technologies (IT)

12. Information Technologies
12.1 Definition
Information Technology (IT) is the use of computers, networks, storage, and software to
manage, process, and distribute information. IT enables organizations and individuals to
collect, store, analyze, and communicate data efficiently.
Key aspects:
i. Automates tasks
ii. Supports decision-making
iii. Connects people and systems globally
iv. Enhances productivity
Example: Online banking systems, social media platforms, hospital management systems.
12.2 Components of Information Technology
IT is composed of five main components:
12.2.1 Hardware
Physical devices used in computing, including:
i. Computers (PCs, laptops, servers)
ii. Input devices (keyboard, mouse, scanner)
iii. Output devices (monitor, printer)
iv. Storage devices (hard drives, SSDs)
Example:
A company server storing employee data is hardware.
12.2.2 Software
Programs and applications that tell hardware what to do. Two main types:
i. System software: Operating systems like Windows, Linux, macOS.
ii. Application software: Word processors, databases, web browsers, programming IDEs.
12.2.3 Data
Raw facts and figures that are processed into meaningful information.
i. Structured data: Stored in databases (e.g., employee IDs, salary amounts)
ii. Unstructured data: Text, images, videos
12.2.4 Networks
Enable communication between computers and devices:
i. Local Area Network (LAN)
ii. Wide Area Network (WAN)
iii. Internet
Example: An office LAN allows employees to share printers and files.
12.2.5 People
End-users, IT professionals, and decision-makers who use, manage, and maintain IT systems.
Roles include:
i. Software developers
ii. Network administrators
iii. Data analysts
iv. IT managers
12.3 Practical Programming Examples in IT
Below are five programming examples demonstrating IT concepts such as hardware
interfacing, software automation, data processing, and networking.
Example 1: Reading and Writing Data to a File (Data Component)
# Step 1: Open a file in write mode
file = open("employee_data.txt", "w")
# Step 2: Write employee information
file.write("ID: 101, Name: John Doe, Department: IT\n")
file.write("ID: 102, Name: Jane Smith, Department: HR\n")
# Step 3: Close the file
file.close()
# Step 4: Read and display the data
file = open("employee_data.txt", "r")
print(file.read())
file.close()
Explanation:
i. Demonstrates data storage and processing using Python.
ii. Simulates a small IT database system.
Example 2: Simple Network Ping (Network Component)
import os
# Step 1: Specify the host
host = "google.com"
# Step 2: Ping the host
response = os.system("ping -c 1 " + host)
# Step 3: Check response
if response == 0:
 print(f"{host} is reachable")
else:
 print(f"{host} is not reachable")
Explanation:
i. Demonstrates IT networking concepts
ii. Checks network connectivity
Example 3: Automating a Software Task (Software Component)
import webbrowser
# Step 1: Open a website automatically
webbrowser.open("https://www.wikipedia.org")
# Step 2: Display message
print("Website opened successfully!")
Explanation:
i. Illustrates automation using software tools.
ii. Useful in IT for tasks like opening documentation or dashboards automatically.
Example 4: Hardware Interaction – Reading CPU Info (Hardware Component)
import platform
# Step 1: Get system hardware info
cpu_info = platform.processor()
os_info = platform.system() + " " + platform.release()
# Step 2: Display hardware and OS info
print(f"CPU: {cpu_info}")
print(f"Operating System: {os_info}")
Explanation:
Demonstrates accessing hardware and system information programmatically.
Example 5: Collecting User Information (People Component)
# Step 1: Input employee details
name = input("Enter your name: ")
role = input("Enter your role: ")
# Step 2: Display a welcome message
print(f"Welcome {name}, you are logged in as {role}.")
Explanation:
i. Simulates interaction between IT systems and end-users
ii. Highlights the role of people in IT systems.
12.4 Summary Table: IT Components and Examples
Component Description Example
Hardware Physical devices Servers, PCs, Printers
Software Programs & apps Python, MS Office, Linux
Data Raw facts converted to info Employee records, logs
Networks Connectivity systems LAN, Internet, Wi-Fi
People Users & professionals Developers, Analysts, Admins
12.5 Exam Questions and Solutions
Question 1: Define Information Technology and list its five components.
Answer:
IT is the use of computers, networks, and software to process information. Components:
Hardware, Software, Data, Networks, People.
Question 2: Write a Python program to store three employee names in a file and read
them.
Solution:
# Write to file
with open("employees.txt", "w") as f:
 f.write("Alice\nBob\nCharlie\n")
# Read from file
with open("employees.txt", "r") as f:
 print(f.read())
Question 3: Explain the difference between system software and application software with
examples.
Answer:
i. System software: Controls hardware and provides environment (e.g., Windows, Linux).
ii. Application software: Performs specific tasks for users (e.g., MS Word, Excel, Python
IDE).
Question 4: Describe an example of networking in IT and provide a Python snippet that
checks if a host is reachable.
Solution:
import os
host = "example.com"
response = os.system("ping -c 1 " + host)
if response == 0:
 print("Host reachable")
else:
 print("Host not reachable")
Question 5: Write a Python program that asks for user input (name and role) and prints a
welcome message.
Solution:
name = input("Enter your name: ")
role = input("Enter your role: ")
print(f"Welcome {name}, you are logged in as {role}.")
LECTURE NOTE: STACKS
13. Stacks
13.1 Definition
A stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle.
i. LIFO principle: The last element added to the stack is the first one to be removed.
ii. Analogy: A stack of plates — the last plate you put on top is the first you remove.
13.2 Stack Operations
A stack typically supports three fundamental operations:
A. Push
i. Adds an element to the top of the stack.
ii. Example: Adding a plate to the top of a stack.
B. Pop
i. Removes the top element from the stack.
ii. Example: Removing the top plate from the stack.
C. Peek / Top
i. Returns the top element without removing it.
D. IsEmpty
Checks if the stack is empty.
E. IsFull (for fixed-size stacks)
Checks if the stack has reached its maximum capacity.
13.3 Applications of Stacks
Stacks are widely used in computing:
A. Function Calls (Call Stack)
i. Each function call is pushed onto a stack; when the function returns, it is popped.
ii. Example: Recursive functions use the call stack to remember previous states.
B. Expression Evaluation
Converting infix expressions to postfix or evaluating postfix expressions uses a
stack.
C. Undo Operations in Software
Applications like text editors keep a stack of operations so users can undo them.
D. Backtracking Algorithms
Examples: Maze solving, DFS in graphs.
E. Syntax Parsing
Compilers use stacks to check balanced parentheses, braces, and brackets.
13.4 Programming Examples
We will use Python for demonstration.
Example 1: Implementing a Stack Using a List
# Step 1: Create an empty stack
stack = []
# Step 2: Push elements
stack.append(10)
stack.append(20)
stack.append(30)
print("Stack after pushes:", stack)
# Step 3: Pop an element
popped = stack.pop()
print("Popped element:", popped)
print("Stack after pop:", stack)
# Step 4: Peek at the top element
top = stack[-1]
print("Top element:", top)
Output:
Stack after pushes: [10, 20, 30]
Popped element: 30
Stack after pop: [10, 20]
Top element: 20
Example 2: Check for Balanced Parentheses
def is_balanced(expression):
 stack = []
 for char in expression:
 if char in "({[":
 stack.append(char)
 elif char in ")}]":
 if not stack:
 return False
 top = stack.pop()
 if ((top == '(' and char != ')') or
 (top == '{' and char != '}') or
 (top == '[' and char != ']')):
 return False
 return len(stack) == 0
expr = "{[()()]}"
print("Balanced?" , is_balanced(expr))
Output:
Balanced? True
Example 3: Reverse a String Using Stack
def reverse_string(s):
 stack = []
 for char in s:
 stack.append(char)
 reversed_str = ''
 while stack:
 reversed_str += stack.pop()
 return reversed_str
text = "STACK"
print("Reversed string:", reverse_string(text))
Output:
Reversed string: KCATS
Example 4: Evaluate Postfix Expression
def evaluate_postfix(expr):
 stack = []
 for char in expr:
 if char.isdigit():
 stack.append(int(char))
 else:
 b = stack.pop()
 a = stack.pop()
 if char == '+':
 stack.append(a + b)
 elif char == '-':
 stack.append(a - b)
 elif char == '*':
 stack.append(a * b)
 elif char == '/':
 stack.append(a / b)
 return stack[0]
expression = "231*+9-"
print("Result of postfix evaluation:", evaluate_postfix(expression))
Output:
Result of postfix evaluation: -4
Example 5: Implement Stack Using a Class
class Stack:
 def __init__(self):
 self.items = []
 def push(self, item):
 self.items.append(item)
 def pop(self):
 if not self.is_empty():
 return self.items.pop()
 else:
 return "Stack is empty"
 def peek(self):
 if not self.is_empty():
 return self.items[-1]
 else:
 return "Stack is empty"
 def is_empty(self):
 return len(self.items) == 0
# Using the Stack class
s = Stack()
s.push(5)
s.push(15)
print("Top element:", s.peek())
print("Popped element:", s.pop())
print("Stack empty?", s.is_empty())
Output:
Top element: 15
Popped element: 15
Stack empty? False
13.5 Possible Exam Questions With Solutions
Question 1:
Define a stack. Explain its operations with an example.
Solution:
i. Stack is LIFO. Operations: Push, Pop, Peek.
ii. Example: Push 10, 20 → Pop → Top = 10
Question 2:
Write a Python function to reverse a string using a stack.
Solution:
def reverse_string(s):
 stack = []
 for char in s:
 stack.append(char)
 reversed_str = ''
 while stack:
 reversed_str += stack.pop()
 return reversed_str
Question 3:
Check if the expression {[()()]} has balanced parentheses using stack.
Solution: Use the is_balanced function from Example 2. Output = True
Question 4:
Evaluate the postfix expression 231*+9- using stack.
Solution:
i. Step 1: Push 2, 3, 1
ii. Step 2: Multiply top two → 3*1=3, push → Stack=[2,3]
iii. Step 3: Add top two → 2+3=5, push → Stack=[5]
iv. Step 4: Push 9 → Stack=[5,9]
v. Step 5: Subtract top two → 5-9=-4 → Result = -4
Question 5:
Implement a stack using a Python class and perform Push, Pop, and Peek operations.
Solution: Use Example 5 code; outputs show top element, popped element, and empty check.
14. Queues
14.1 Definition
A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle. This
means that the first element added to the queue will be the first one to be removed. Queues are
commonly used when order of processing matters.
14.2 Characteristics
i. Elements are inserted at the rear (end).
ii. Elements are removed from the front (beginning).
iii. Cannot access elements randomly (only front or rear).
14.3 Types of Queues
A. Linear Queue
i. Simple queue where elements are stored in a linear fashion.
ii. Limitation: Can lead to wasted space after deletions.
B. Circular Queue
i. Front and rear wrap around to use memory efficiently.
ii. Avoids the problem of wasted space in linear queues.
C. Priority Queue
i. Each element has a priority.
ii. The element with highest priority is dequeued first.
iii. Can be implemented using arrays, linked lists, or heaps.
14.4 Applications of Queues
i. Scheduling: CPU process scheduling (Round Robin, FCFS).
ii. Buffering: Data streaming in network or multimedia buffering.
iii. Print Queues: Managing print jobs sent to a printer.
iv. Simulation systems: Handling requests in banks or hospitals.
v. Breadth-First Search (BFS) in graphs.
14.5 Queue Operations
Operation Description
Enqueue Insert an element at the rear
Dequeue Remove an element from the front
Front Get the element at the front without removing it
IsEmpty Check if the queue is empty
IsFull Check if the queue is full (for fixed-size queues)
14.6 Programming Examples
Below are five programming examples of queues in Python with detailed steps.
Example 1: Linear Queue using Python List
# Step 1: Initialize queue
queue = []
# Step 2: Enqueue elements
queue.append(10) # Add 10
queue.append(20) # Add 20
queue.append(30) # Add 30
print("Queue after enqueues:", queue)
# Step 3: Dequeue elements
deq = queue.pop(0) # Remove front element
print("Dequeued element:", deq)
print("Queue after dequeue:", queue)
Explanation:
i. append() adds to the rear.
ii. pop(0) removes from the front, simulating FIFO behavior.
Example 2: Circular Queue using Fixed-size List
# Step 1: Initialize queue
size = 5
queue = [None]*size
front = -1
rear = -1
# Step 2: Enqueue function
def enqueue(item):
 global front, rear
 if (rear + 1) % size == front:
 print("Queue is Full")
 else:
 if front == -1:
 front = 0
 rear = (rear + 1) % size
 queue[rear] = item
 print(f"Enqueued: {item}")
# Step 3: Dequeue function
def dequeue():
 global front, rear
 if front == -1:
 print("Queue is Empty")
 return None
 item = queue[front]
 if front == rear:
 front = rear = -1 # Queue becomes empty
 else:
 front = (front + 1) % size
 print(f"Dequeued: {item}")
 return item
# Step 4: Test
enqueue(10)
enqueue(20)
enqueue(30)
dequeue()
enqueue(40)
print("Queue state:", queue)
Explanation:
• Uses modulo % for circular movement.
• Efficient memory utilization.
Example 3: Priority Queue using Python heapq
import heapq
# Step 1: Initialize empty list
priority_queue = []
# Step 2: Enqueue elements with priorities
heapq.heappush(priority_queue, (3, "Task 3")) # (priority, value)
heapq.heappush(priority_queue, (1, "Task 1"))
heapq.heappush(priority_queue, (2, "Task 2"))
# Step 3: Dequeue elements based on priority
while priority_queue:
 priority, task = heapq.heappop(priority_queue)
 print("Dequeued:", task, "with priority", priority)
Explanation:
• Python's heapq implements a min-heap by default.
• Lower number = higher priority.
Example 4: Queue using collections.deque
from collections import deque
# Step 1: Initialize deque
queue = deque()
# Step 2: Enqueue elements
queue.append(1)
queue.append(2)
queue.append(3)
print("Queue:", queue)
# Step 3: Dequeue elements
print("Dequeued:", queue.popleft())
print("Queue after dequeue:", queue)
Explanation:
i. deque is optimized for O(1) operations at both ends.
ii. Preferred for high-performance queue operations.
Example 5: Queue Simulation for Print Jobs
class PrintQueue:
 def __init__(self):
 self.queue = []
 def add_job(self, job_name):
 self.queue.append(job_name)
 print(f"Added print job: {job_name}")
 def print_job(self):
 if self.queue:
 job = self.queue.pop(0)
 print(f"Printing job: {job}")
 else:
 print("No jobs to print")
# Step 1: Initialize
pq = PrintQueue()
# Step 2: Add jobs
pq.add_job("Document1")
pq.add_job("Document2")
pq.add_job("Document3")
# Step 3: Print jobs
pq.print_job()
pq.print_job()
pq.print_job()
pq.print_job()
Explanation:
i. Demonstrates a real-world queue application.
ii. Maintains FIFO order for print jobs.
14.7 Possible Exam Questions and Solutions
Question 1: Define a queue and explain its FIFO property.
Solution:
i. A queue is a linear data structure where elements are inserted at the rear and removed
from the front.
ii. FIFO means First-In-First-Out: the first element inserted is the first removed.
Question 2: Write Python code to implement a linear queue and perform two enqueues and one
dequeue.
Solution:
queue = []
queue.append(5)
queue.append(10)
print("Queue after enqueues:", queue)
deq = queue.pop(0)
print("Dequeued element:", deq)
print("Queue after dequeue:", queue)
Question 3: What is a circular queue and how does it solve the linear queue limitation?
Solution:
i. Circular queue allows rear to wrap around to the front if space is available.
ii. Solves the problem of wasted space in linear queues after multiple dequeues.
Question 4: Give two applications of queues in computer systems.
Solution:
i. CPU scheduling (Round Robin).
ii. Print job management.
Question 5: Implement a priority queue in Python and dequeue the highest priority element.
Solution:
import heapq
pq = []
heapq.heappush(pq, (2, "Task2"))
heapq.heappush(pq, (1, "Task1"))
heapq.heappop(pq) # Returns (1, "Task1")
15. LISTS
A list is an ordered collection of elements in which each element is connected to the next (and
sometimes previous) element using pointers (in linked lists) or index positions (in arrays). Lists
are widely used in programming because they allow dynamic memory allocation and easy
insertion and deletion of elements.
15.1 Types of Lists
15.1.1 Singly Linked List (SLL)
Definition: A linked list where each node contains data and a pointer to the next node only.
Structure:
[Data | Next] -> [Data | Next] -> ... -> NULL
i. Advantages: Simple to implement, efficient insertion/deletion at the beginning.
ii. Disadvantages: Cannot traverse backward; need to start from head to reach a node.
15.1.2 Doubly Linked List (DLL)
Definition: A linked list where each node has a pointer to both the next and previous node.
Structure:
NULL <- [Prev | Data | Next] <-> [Prev | Data | Next] -> NULL
i. Advantages: Bidirectional traversal, easier deletion of any node.
ii. Disadvantages: Extra memory for previous pointer, slightly more complex.
15.1.3 Circular Linked List (CLL)
Definition: A linked list where the last node points back to the first node, forming a circle.
Can be singly or doubly linked.
Structure:
[Data | Next] -> ... -> [Data | Next] -> (points back to head)
i. Advantages: Can traverse the entire list from any node, useful for round-robin
scheduling.
ii. Disadvantages: Risk of infinite loop if not handled correctly.
15.2 Operations on Lists
15.2.1 Insertion
i. At the beginning: New node becomes the head.
ii. At the end: New node becomes the tail.
iii. At a given position: Insert node at a specific index or after a given node.
15.2.2 Deletion
i. From the beginning: Remove the head node.
ii. From the end: Remove the tail node.
iii. Specific node: Remove a node with given data or position.
15.2.3 Traversal
i. Process each node sequentially.
ii. Commonly used for searching, displaying, or updating elements.
15.3 Programming Examples
Example 1: Singly Linked List – Insertion and Traversal (C Language)
#include <stdio.h>
#include <stdlib.h>
struct Node {
 int data;
 struct Node* next;
};
// Function to traverse the list
void traverse(struct Node* head) {
 struct Node* current = head;
 while (current != NULL) {
 printf("%d -> ", current->data);
 current = current->next;
 }
 printf("NULL\n");
}
// Function to insert at the beginning
struct Node* insertAtBeginning(struct Node* head, int data) {
 struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
 newNode->data = data;
 newNode->next = head;
 head = newNode;
 return head;
}
int main() {
 struct Node* head = NULL;
 head = insertAtBeginning(head, 10);
 head = insertAtBeginning(head, 20);
 head = insertAtBeginning(head, 30);
 printf("Singly Linked List: ");
 traverse(head);
 return 0;
}
Step-by-Step Explanation:
1. Define a node structure with data and next.
2. Create a function to traverse and print the list.
3. Allocate memory dynamically for new nodes.
4. Insert nodes at the beginning.
5. Display the list.
Output:
Singly Linked List: 30 -> 20 -> 10 -> NULL
Example 2: Doubly Linked List – Insertion at End (Python)
class Node:
 def __init__(self, data):
 self.data = data
 self.prev = None
 self.next = None
class DoublyLinkedList:
 def __init__(self):
 self.head = None
 def insert_end(self, data):
 new_node = Node(data)
 if not self.head:
 self.head = new_node
 return
 current = self.head
 while current.next:
 current = current.next
 current.next = new_node
 new_node.prev = current
 def traverse(self):
 current = self.head
 while current:
 print(current.data, end=" <-> ")
 current = current.next
 print("None")
dll = DoublyLinkedList()
dll.insert_end(10)
dll.insert_end(20)
dll.insert_end(30)
dll.traverse()
Output:
10 <-> 20 <-> 30 <-> None
Example 3: Circular Linked List – Traversal (C Language)
#include <stdio.h>
#include <stdlib.h>
struct Node {
 int data;
 struct Node* next;
};
void traverse(struct Node* head) {
 if (!head) return;
 struct Node* current = head;
 do {
 printf("%d -> ", current->data);
 current = current->next;
 } while (current != head);
 printf("(back to head)\n");
}
int main() {
 struct Node* head = (struct Node*)malloc(sizeof(struct Node));
 struct Node* second = (struct Node*)malloc(sizeof(struct Node));
 struct Node* third = (struct Node*)malloc(sizeof(struct Node));
 head->data = 1; head->next = second;
 second->data = 2; second->next = third;
 third->data = 3; third->next = head;
 printf("Circular Linked List: ");
 traverse(head);
 return 0;
}
Output:
Circular Linked List: 1 -> 2 -> 3 -> (back to head)
Example 4: Deletion in Singly Linked List (Python)
class Node:
 def __init__(self, data):
 self.data = data
 self.next = None
class LinkedList:
 def __init__(self):
 self.head = None
 def insert_end(self, data):
 new_node = Node(data)
 if not self.head:
 self.head = new_node
 return
 current = self.head
 while current.next:
 current = current.next
 current.next = new_node
 def delete_value(self, key):
 current = self.head
 if current and current.data == key:
 self.head = current.next
 return
 prev = None
 while current and current.data != key:
 prev = current
 current = current.next
 if current:
 prev.next = current.next
 def traverse(self):
 current = self.head
 while current:
 print(current.data, end=" -> ")
 current = current.next
 print("None")
ll = LinkedList()
ll.insert_end(10)
ll.insert_end(20)
ll.insert_end(30)
ll.traverse()
ll.delete_value(20)
print("After Deletion:")
ll.traverse()
Output:
10 -> 20 -> 30 -> None
After Deletion:
10 -> 30 -> None
Example 5: Insertion at a Specific Position in Singly Linked List (C Language)
#include <stdio.h>
#include <stdlib.h>
struct Node {
 int data;
 struct Node* next;
};
struct Node* insertAtPosition(struct Node* head, int data, int pos) {
 struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
 newNode->data = data;
 if (pos == 1) {
 newNode->next = head;
 head = newNode;
 return head;
 }
 struct Node* current = head;
 for (int i = 1; i < pos-1 && current != NULL; i++)
 current = current->next;
 if (current == NULL) return head;
 newNode->next = current->next;
 current->next = newNode;
 return head;
}
void traverse(struct Node* head) {
 struct Node* current = head;
 while (current) {
 printf("%d -> ", current->data);
 current = current->next;
 }
 printf("NULL\n");
}
int main() {
 struct Node* head = NULL;
 head = insertAtPosition(head, 10, 1);
 head = insertAtPosition(head, 20, 2);
 head = insertAtPosition(head, 15, 2);
 traverse(head);
 return 0;
}
Output:
10 -> 15 -> 20 -> NULL
15.4 Possible Exam Questions with Solutions
Q1: Explain the difference between singly, doubly, and circular linked lists.
Solution:
i. Singly: nodes point to next only.
ii. Doubly: nodes point to next and previous.
iii. Circular: last node points back to first node.
Q2: Write a C function to delete a node at the beginning of a singly linked list.
Solution:
struct Node* deleteBeginning(struct Node* head) {
 if (head == NULL) return NULL;
 struct Node* temp = head;
 head = head->next;
 free(temp);
 return head;
}
Q3: Traverse a doubly linked list and print all elements in reverse order.
Solution:
i. Move to tail.
ii. Traverse using prev pointer to head.
Q4: Insert an element at position 3 in a singly linked list containing 5, 10, 20.
Solution:
i. New element (e.g., 15) will be linked between 10 and 20.
ii. Updated list: 5 -> 10 -> 15 -> 20 -> NULL
Q5: Explain one application of circular linked lists.
Solution:
Used in round-robin CPU scheduling, where each process is executed in cyclic order.
16. Trees
16.1 Definition
A tree is a hierarchical data structure that consists of nodes connected by edges, where:
i. One node is called the root (top-most node).
ii. Each node may have zero or more child nodes.
iii. Nodes with no children are called leaves.
iv. Each child node has exactly one parent.
Key Properties of Trees:
i. The depth of a node: Number of edges from the root to that node.
ii. The height of a tree: Maximum depth among all nodes.
iii. Degree of a node: Number of children a node has.
iv. Subtree: Any node along with all its descendants forms a subtree.
Why Trees?
i. Organize hierarchical data efficiently.
ii. Support fast searching, insertion, and deletion.
16.2 Types of Trees
1. Binary Tree
i. Each node has at most two children: left and right.
ii. Special types:
a. Full Binary Tree: Every node has 0 or 2 children.
b. Complete Binary Tree: All levels are filled except possibly the last, which is
filled from left to right.
c. Perfect Binary Tree: All internal nodes have 2 children, and all leaves are at the
same level.
2. Binary Search Tree (BST)
i. A binary tree with the property:
Left child < Parent < Right child
ii. Allows efficient search, insertion, and deletion.
iii. Average search time: O(log n) (balanced tree).
3. AVL Tree
i. A self-balancing BST.
ii. For every node, the height difference between left and right subtrees ≤ 1.
iii. Ensures O(log n) time complexity for all operations.
4. Heap
i. A complete binary tree satisfying:
a. Max-Heap: Parent ≥ Children
b. Min-Heap: Parent ≤ Children
ii. Used for priority queues, scheduling, and heap sort.
16.3 Applications of Trees
i. File Systems
Hierarchical organization of folders and files.
ii. Databases
Indexing using B-trees or BSTs for fast search.
iii. Expression Parsing
Expression trees used to evaluate mathematical expressions in compilers.
17. Programming Examples
Example 1: Creating a Simple Binary Tree (Python)
Objective: Represent a simple tree and traverse it.
# Step 1: Define the Node class
class Node:
 def __init__(self, data):
 self.data = data
 self.left = None
 self.right = None
# Step 2: Create nodes
root = Node(10)
root.left = Node(5)
root.right = Node(20)
root.left.left = Node(3)
root.left.right = Node(7)
# Step 3: Inorder traversal (Left, Root, Right)
def inorder(node):
 if node:
 inorder(node.left)
 print(node.data, end=" ")
 inorder(node.right)
print("Inorder traversal of tree:")
inorder(root)
Output:
3 5 7 10 20
Example 2: Insert into a Binary Search Tree (BST)
class BSTNode:
 def __init__(self, key):
 self.key = key
 self.left = None
 self.right = None
def insert(node, key):
 if node is None:
 return BSTNode(key)
 if key < node.key:
 node.left = insert(node.left, key)
 else:
 node.right = insert(node.right, key)
 return node
# Create BST
root = BSTNode(15)
keys = [10, 20, 8, 12, 17]
for k in keys:
 insert(root, k)
# Inorder traversal
def inorder(node):
 if node:
 inorder(node.left)
 print(node.key, end=" ")
 inorder(node.right)
print("BST Inorder traversal:")
inorder(root)
Output:
8 10 12 15 17 20
Example 3: Check if a Binary Tree is a BST
def isBST(node, left=float('-inf'), right=float('inf')):
 if node is None:
 return True
 if not (left < node.key < right):
 return False
 return (isBST(node.left, left, node.key) and
 isBST(node.right, node.key, right))
print("Is BST?", isBST(root))
Output:
Is BST? True
Example 4: Max-Heap Implementation (Python)
import heapq
# Create a max heap using negative numbers
heap = []
numbers = [10, 20, 5, 15]
for num in numbers:
 heapq.heappush(heap, -num) # negative for max-heap
print("Max-Heap elements:")
while heap:
 print(-heapq.heappop(heap), end=" ")
Output:
20 15 10 5
Example 5: Expression Tree Evaluation
class ExprNode:
 def __init__(self, value):
 self.value = value
 self.left = None
 self.right = None
def evaluate(node):
 if node.left is None and node.right is None:
 return int(node.value)
 left_val = evaluate(node.left)
 right_val = evaluate(node.right)
 if node.value == '+':
 return left_val + right_val
 elif node.value == '-':
 return left_val - right_val
 elif node.value == '*':
 return left_val * right_val
 elif node.value == '/':
 return left_val / right_val
# Example: ((3+5)*2)
root = ExprNode('*')
root.left = ExprNode('+')
root.left.left = ExprNode('3')
root.left.right = ExprNode('5')
root.right = ExprNode('2')
print("Expression result:", evaluate(root))
Output:
Expression result: 16
18. Possible Exam Questions with Solutions
Q1: Define a tree and explain its types.
Solution:
i. Tree: Hierarchical structure with nodes and edges.
ii. Types:
a. Binary Tree
b. BST
c. AVL Tree
d. Heap
Q2: Write a Python program to insert elements into a BST and display inorder traversal.
Solution: See Example 2.
Q3: Explain the difference between a Binary Tree and a Binary Search Tree.
Solution:
Property Binary Tree BST
Node order No ordering constraint Left < Root < Right
Search O(n) O(log n) average
Example Arbitrary tree Sorted elements tree
Q4: What is a Max-Heap and give an example of inserting numbers [10, 20, 5] into it.
Solution:
i. Max-Heap: Parent ≥ Children.
ii. Insert 10 → 10
iii. Insert 20 → 20 becomes root
iv. Insert 5 → Heap structure: 20(root), 10(left), 5(right)
Q5: Evaluate the expression tree for ((7-3)*(2+5))
Solution:
Construct tree:
 *
 / \
 - +
 / \ / \
7 3 2 5
• Evaluate:
o (7-3) = 4
o (2+5) = 7
o 4*7 = 28
Answer: 28
17. Graphs
17.1 Definition
A graph is a mathematical and computer science structure used to model relationships between
objects.
i. Vertices (Nodes): Represent objects or entities (e.g., cities, people).
ii. Edges (Links): Represent connections or relationships between nodes (e.g., roads,
friendships).
Formally, a graph ( G ) is defined as:
[
G = (V, E)
]
Where:
i. ( V ) is a set of vertices
ii. ( E \subseteq V \times V ) is a set of edges
17.2 Types of Graphs
A. Directed Graph (Digraph)
i. Edges have a direction.
ii. Represented as arrows from one vertex to another.
iii. Example: Twitter following relationships
B. Undirected Graph
i. Edges do not have a direction.
ii. Represented as simple lines connecting two vertices.
iii. Example: Facebook friendships
C. Weighted Graph
i. Edges carry a weight or cost (e.g., distance, time).
ii. Can be directed or undirected.
iii. Example: Road networks with distances
17.3 Applications of Graphs
i. Networks: Internet topology, computer networks
ii. Routing: GPS navigation, packet routing
iii. Social Media Analysis: Friend suggestions, influencer ranking
iv. Project Scheduling: Tasks and dependencies (PERT/CPM)
v. Recommendation Systems: Connections between items and users
17.4 Representation of Graphs
A. Adjacency Matrix
i. 2D matrix of size ( |V| \times |V| )
ii. matrix[i][j] = 1 if an edge exists from ( i ) to ( j )
iii. Efficient for dense graphs
B. Adjacency List
i. Each vertex stores a list of its neighbors
ii. Memory-efficient for sparse graphs
17.5 Programming Examples
Example 1: Creating an Undirected Graph using Adjacency List (Python)
# Step 1: Define the graph using a dictionary
graph = {
 "A": ["B", "C"],
 "B": ["A", "D"],
 "C": ["A", "D"],
 "D": ["B", "C"]
}
# Step 2: Print the graph
for node, edges in graph.items():
 print(f"{node} -> {edges}")
Output:
A -> ['B', 'C']
B -> ['A', 'D']
C -> ['A', 'D']
D -> ['B', 'C']
Explanation:
Each key is a vertex, and the list contains neighboring nodes.
Example 2: Depth-First Search (DFS) Traversal
def dfs(graph, start, visited=None):
 if visited is None:
 visited = set()
 visited.add(start)
 print(start, end=" ")
 for neighbor in graph[start]:
 if neighbor not in visited:
 dfs(graph, neighbor, visited)
# Usage
graph = {
 "A": ["B", "C"],
 "B": ["A", "D"],
 "C": ["A", "D"],
 "D": ["B", "C"]
}
dfs(graph, "A")
Output:
A B D C
Explanation: DFS visits nodes deeply before backtracking.
Example 3: Breadth-First Search (BFS) Traversal
from collections import deque
def bfs(graph, start):
 visited = set()
 queue = deque([start])
 while queue:
 node = queue.popleft()
 if node not in visited:
 print(node, end=" ")
 visited.add(node)
 queue.extend([n for n in graph[node] if n not in visited])
# Usage
bfs(graph, "A")
Output:
A B C D
Explanation: BFS explores neighbors level by level.
Example 4: Weighted Graph and Dijkstra’s Algorithm (Shortest Path)
import heapq
def dijkstra(graph, start):
 heap = [(0, start)]
 distances = {node: float('inf') for node in graph}
 distances[start] = 0
 while heap:
 curr_dist, node = heapq.heappop(heap)
 for neighbor, weight in graph[node]:
 distance = curr_dist + weight
 if distance < distances[neighbor]:
 distances[neighbor] = distance
 heapq.heappush(heap, (distance, neighbor))
 return distances
# Weighted graph: adjacency list with (neighbor, weight)
graph = {
 "A": [("B", 1), ("C", 4)],
 "B": [("A", 1), ("C", 2), ("D", 5)],
 "C": [("A", 4), ("B", 2), ("D", 1)],
 "D": [("B", 5), ("C", 1)]
}
print(dijkstra(graph, "A"))
Output:
{'A': 0, 'B': 1, 'C': 3, 'D': 4}
Explanation: Finds the shortest distance from A to all other nodes.
Example 5: Detecting a Cycle in a Directed Graph
def has_cycle(graph):
 visited = set()
 rec_stack = set()
 def dfs(v):
 visited.add(v)
 rec_stack.add(v)
 for neighbor in graph.get(v, []):
 if neighbor not in visited and dfs(neighbor):
 return True
 elif neighbor in rec_stack:
 return True
 rec_stack.remove(v)
 return False
 for node in graph:
 if node not in visited:
 if dfs(node):
 return True
 return False
graph = {
 "A": ["B"],
 "B": ["C"],
 "C": ["A"], # Cycle exists
 "D": []
}
print(has_cycle(graph)) # Output: True
Explanation: Uses DFS with a recursion stack to detect cycles.
17.6 Possible Exam Questions with Solutions
Question 1: Define a graph and list its main components.
Solution:
A graph ( G = (V, E) ) consists of:
i. Vertices (V): Nodes in the graph
ii. Edges (E): Connections between nodes
Question 2: Draw a directed weighted graph for cities A, B, C with distances A→B=5, B→C=3,
A→C=10. Then write its adjacency list.
Solution:
Adjacency List:
graph = {
 "A": [("B", 5), ("C", 10)],
 "B": [("C", 3)],
 "C": []
}
Question 3: Implement BFS traversal for a given graph.
Solution: Refer to Example 3 above. Output will print vertices in BFS order.
Question 4: Given a weighted graph, compute shortest paths from node A using Dijkstra’s
algorithm.
Solution: Refer to Example 4. The distances dictionary shows the shortest path from A to all
nodes.
Question 5: Write a program to detect if a cycle exists in a directed graph.
Solution: Refer to Example 5 above. Returns True if a cycle exists.
18. Abstract Data Types (ADT)
18.1 Definition
An Abstract Data Type (ADT) is a logical description of a data structure that defines:
i. The type of data stored
ii. The operations that can be performed on the data
Important: An ADT focuses on what operations are performed, not how they are
implemented.
Key Points:
i. ADTs separate interface from implementation.
ii. Provides modularity, reusability, and encapsulation.
iii. Implementations can vary (arrays, linked lists, trees) but the interface remains
consistent.
18.2 Common Examples of ADTs
ADT Description Typical Operations
Stack Last-In-First-Out (LIFO) push, pop, peek, isEmpty
Queue First-In-First-Out (FIFO) enqueue, dequeue, front, isEmpty
List Ordered collection insert, delete, traverse, search
18.3 Programming Examples of ADTs
We will demonstrate ADT operations using Python for simplicity. Each example includes
detailed programming steps.
Example 1: Stack ADT
Description: A stack stores elements in LIFO order.
Operations: push, pop, peek, isEmpty
# Step 1: Define the Stack class
class Stack:
 def __init__(self):
 self.items = [] # Internal storage using list
 # Step 2: Push operation
 def push(self, item):
 self.items.append(item)
 print(f"Pushed {item} onto stack.")
 # Step 3: Pop operation
 def pop(self):
 if not self.isEmpty():
 return self.items.pop()
 return "Stack is empty"
 # Step 4: Peek operation
 def peek(self):
 if not self.isEmpty():
 return self.items[-1]
 return "Stack is empty"
 # Step 5: Check if stack is empty
 def isEmpty(self):
 return len(self.items) == 0
# Using the Stack
s = Stack()
s.push(10)
s.push(20)
print("Top element:", s.peek())
print("Popped element:", s.pop())
print("Is stack empty?", s.isEmpty())
Output:
Pushed 10 onto stack.
Pushed 20 onto stack.
Top element: 20
Popped element: 20
Is stack empty? False
Example 2: Queue ADT
Description: A queue stores elements in FIFO order.
Operations: enqueue, dequeue, front, isEmpty
class Queue:
 def __init__(self):
 self.items = []
 # Add element to the rear
 def enqueue(self, item):
 self.items.append(item)
 print(f"Enqueued {item}")
 # Remove element from front
 def dequeue(self):
 if not self.isEmpty():
 return self.items.pop(0)
 return "Queue is empty"
 # Get front element
 def front(self):
 if not self.isEmpty():
 return self.items[0]
 return "Queue is empty"
 def isEmpty(self):
 return len(self.items) == 0
# Using the Queue
q = Queue()
q.enqueue(1)
q.enqueue(2)
print("Front element:", q.front())
print("Dequeued element:", q.dequeue())
print("Is queue empty?", q.isEmpty())
Output:
Enqueued 1
Enqueued 2
Front element: 1
Dequeued element: 1
Is queue empty? False
Example 3: List ADT
Description: A list stores ordered data and supports insertion, deletion, and traversal.
class ListADT:
 def __init__(self):
 self.items = []
 # Insert element at position
 def insert(self, index, item):
 self.items.insert(index, item)
 print(f"Inserted {item} at index {index}")
 # Delete element at position
 def delete(self, index):
 if index < len(self.items):
 removed = self.items.pop(index)
 print(f"Deleted {removed} from index {index}")
 else:
 print("Invalid index")
 # Traverse and print
 def traverse(self):
 print("List elements:", self.items)
# Using List ADT
lst = ListADT()
lst.insert(0, "A")
lst.insert(1, "B")
lst.insert(1, "C")
lst.traverse()
lst.delete(1)
lst.traverse()
Output:
Inserted A at index 0
Inserted B at index 1
Inserted C at index 1
List elements: ['A', 'C', 'B']
Deleted C from index 1
List elements: ['A', 'B']
Example 4: Stack using Linked List (Advanced)
# Node class for linked list
class Node:
 def __init__(self, data):
 self.data = data
 self.next = None
class StackLL:
 def __init__(self):
 self.top = None
 def push(self, data):
 node = Node(data)
 node.next = self.top
 self.top = node
 print(f"Pushed {data}")
 def pop(self):
 if self.top is None:
 return "Stack is empty"
 data = self.top.data
 self.top = self.top.next
 return data
 def peek(self):
 return self.top.data if self.top else "Stack is empty"
# Using stack with linked list
sll = StackLL()
sll.push(5)
sll.push(15)
print("Top:", sll.peek())
print("Popped:", sll.pop())
Example 5: Queue using Two Stacks (Demonstrates ADT Flexibility)
class QueueTwoStacks:
 def __init__(self):
 self.stack1 = []
 self.stack2 = []
 def enqueue(self, item):
 self.stack1.append(item)
 print(f"Enqueued {item}")
 def dequeue(self):
 if not self.stack2:
 while self.stack1:
 self.stack2.append(self.stack1.pop())
 if self.stack2:
 return self.stack2.pop()
 return "Queue is empty"
qts = QueueTwoStacks()
qts.enqueue(10)
qts.enqueue(20)
print("Dequeued:", qts.dequeue())
print("Dequeued:", qts.dequeue())
Output:
Enqueued 10
Enqueued 20
Dequeued: 10
Dequeued: 20
18.4 Advantages of ADTs
i. Abstraction: Focus on operations, not implementation
ii. Flexibility: Implement using arrays, linked lists, trees
iii. Reusability: Same ADT can be reused in different programs
iv. Maintainability: Implementation can be changed without affecting code using ADT
18.5 Possible Exam Questions with Solutions
Question 1: Define an ADT and give an example.
Solution:
An ADT is a logical description of a data structure specifying data and operations. Example:
Stack ADT supports push, pop, peek.
Question 2: Implement a simple Stack ADT and perform push and pop.
Solution: Refer to Example 1 above. push(10), push(20), pop() returns 20.
Question 3: Explain the difference between a Stack and Queue.
Solution:
i. Stack: LIFO, last element added is first removed
ii. Queue: FIFO, first element added is first removed
Question 4: How can a Queue ADT be implemented using two stacks?
Solution: Refer to Example 5. Use one stack for enqueue and one stack for dequeue,
transferring elements when needed.
Question 5: Write a program to traverse a List ADT and print all elements.
Solution:
lst = ListADT()
lst.insert(0, "X")
lst.insert(1, "Y")
lst.traverse() # Output: List elements: ['X', 'Y']
19. Recursion
19.1 Definition
Recursion is a programming technique in which a function calls itself directly or indirectly to
solve a problem. The problem is typically broken into smaller subproblems that resemble the
original problem.
Key Idea: Solve a large problem by solving smaller instances of the same problem.
19.2 Components of Recursion
A recursive function requires two essential components:
A. Base Case
i. The condition that stops the recursion.
ii. Prevents infinite calls.
iii. Example: When computing factorial, factorial(0) = 1 is the base case.
B. Recursive Case
i. The part of the function where the function calls itself with a smaller or simpler
input.
ii. Moves toward the base case with each call.
General Form:
def recursive_function(parameters):
 if base_case_condition:
 return base_value
 else:
 return recursive_function(smaller_parameters)
19.3 Applications of Recursion
Recursion is widely used in:
i. Tree traversal – Pre-order, In-order, Post-order traversals
ii. Sorting algorithms – Merge Sort, Quick Sort
iii. Mathematical problems – Factorial, Fibonacci numbers, GCD, power calculation
iv. Graph algorithms – Depth-First Search (DFS)
v. Backtracking problems – N-Queens, Maze solving
19.4 Programming Examples
Below are five programming examples demonstrating recursion, with detailed steps.
Example 1: Factorial of a Number
Problem: Compute n! = n × (n-1) × ... × 1
def factorial(n):
 # Base case
 if n == 0:
 return 1
 # Recursive case
 else:
 return n * factorial(n - 1)
# Test
print(factorial(5)) # Output: 120
Step-by-step Execution for factorial(5):
i. factorial(5) → 5 * factorial(4)
ii. factorial(4) → 4 * factorial(3)
iii. factorial(3) → 3 * factorial(2)
iv. factorial(2) → 2 * factorial(1)
v. factorial(1) → 1 * factorial(0)
vi. factorial(0) → 1 (base case)
vii. Multiply back: 1 → 1×1 → 2×1 → 6 → 24 → 120
Example 2: Fibonacci Sequence
Problem: Compute the nth Fibonacci number: Fib(n) = Fib(n-1) + Fib(n-2)
def fibonacci(n):
 # Base cases
 if n == 0:
 return 0
 elif n == 1:
 return 1
 # Recursive case
 else:
 return fibonacci(n-1) + fibonacci(n-2)
# Test
print(fibonacci(6)) # Output: 8
Step-by-step Execution for fibonacci(6):
i. fibonacci(6) = fibonacci(5) + fibonacci(4)
ii. fibonacci(5) = fibonacci(4) + fibonacci(3)
iii. Continue until base cases (0 or 1) are reached
iv. Sum results back up the recursive calls → 8
Example 3: Sum of Elements in a List
Problem: Find the sum of a list of numbers using recursion.
def sum_list(lst):
 # Base case
 if len(lst) == 0:
 return 0
 # Recursive case
 else:
 return lst[0] + sum_list(lst[1:])
# Test
print(sum_list([1, 2, 3, 4, 5])) # Output: 15
Explanation:
i. sum_list([1,2,3,4,5]) = 1 + sum_list([2,3,4,5])
ii. Recursion continues until the list is empty (base case)
Example 4: Reverse a String
Problem: Reverse a string using recursion.
def reverse_string(s):
 # Base case
 if len(s) <= 1:
 return s
 # Recursive case
 else:
 return s[-1] + reverse_string(s[:-1])
# Test
print(reverse_string("HELLO")) # Output: "OLLEH"
Step-by-step Execution:
i. reverse_string("HELLO") → "O" + reverse_string("HELL")
ii. reverse_string("HELL") → "L" + reverse_string("HEL")
iii. Continue until base case → combine letters backward
Example 5: Binary Search Using Recursion
Problem: Search for an element in a sorted list using recursion.
def binary_search(arr, target, low, high):
 if low > high:
 return -1 # Element not found
 mid = (low + high) // 2
 if arr[mid] == target:
 return mid
 elif arr[mid] < target:
 return binary_search(arr, target, mid+1, high)
 else:
 return binary_search(arr, target, low, mid-1)
# Test
arr = [1, 3, 5, 7, 9]
print(binary_search(arr, 7, 0, len(arr)-1)) # Output: 3
Explanation:
i. Check middle element → recurse left or right
ii. Stops when element found (return index) or low > high (not found)
19.5 Advantages of Recursion
i. Simplifies code for problems naturally defined recursively
ii. Useful for hierarchical structures like trees and graphs
iii. Reduces complex iterative loops
Disadvantages
i. Can lead to stack overflow if base case is not reached
ii. Recursive calls have higher memory usage due to call stack
iii. Sometimes iterative solutions are more efficient
19.6 Possible Exam Questions
Question 1:
Write a recursive function to compute n! for a given integer n. Show the function call trace for
n=4.
Solution:
def factorial(n):
 if n == 0:
 return 1
 else:
 return n * factorial(n-1)
print(factorial(4)) # Output: 24
Trace: factorial(4) → 4factorial(3) → 3factorial(2) → 2factorial(1) → 1factorial(0) → 1 →
multiply back → 24
Question 2:
Write a recursive function to find the sum of a list [2,4,6,8].
Solution:
def sum_list(lst):
 if len(lst) == 0:
 return 0
 else:
 return lst[0] + sum_list(lst[1:])
print(sum_list([2,4,6,8])) # Output: 20
Question 3:
Implement a recursive function to reverse the string "RECURSION".
Solution:
def reverse_string(s):
 if len(s) <= 1:
 return s
 else:
 return s[-1] + reverse_string(s[:-1])
print(reverse_string("RECURSION")) # Output: "NOISRUCER"
Question 4:
Write a recursive function to compute the nth Fibonacci number and find Fibonacci(7).
Solution:
def fibonacci(n):
 if n == 0:
 return 0
 elif n == 1:
 return 1
 else:
 return fibonacci(n-1) + fibonacci(n-2)
print(fibonacci(7)) # Output: 13
Question 5:
Implement recursive binary search to find 9 in [1,3,5,7,9].
Solution:
def binary_search(arr, target, low, high):
 if low > high:
 return -1
 mid = (low + high) // 2
 if arr[mid] == target:
 return mid
 elif arr[mid] < target:
 return binary_search(arr, target, mid+1, high)
 else:
 return binary_search(arr, target, low, mid-1)
arr = [1,3,5,7,9]
print(binary_search(arr, 9, 0, len(arr)-1)) # Output: 4
20. Sorting and Searching
Sorting and searching are fundamental operations in computer science. They are essential for
organizing data and retrieving information efficiently.
20.1 Sorting Algorithms
Sorting algorithms arrange elements of a list in a specific order (usually ascending or
descending).
20.1.1 Bubble Sort
Concept:
i. Repeatedly steps through the list
ii. Compares adjacent elements and swaps them if out of order
iii. Continues until no swaps are needed
Steps:
i. Compare first and second elements. Swap if needed.
ii. Move to the next pair and repeat.
iii. Repeat entire list until sorted.
Example (Python):
def bubble_sort(arr):
 n = len(arr)
 for i in range(n):
 for j in range(0, n-i-1):
 if arr[j] > arr[j+1]:
 arr[j], arr[j+1] = arr[j+1], arr[j]
# Example usage
numbers = [64, 34, 25, 12, 22, 11, 90]
bubble_sort(numbers)
print("Sorted array:", numbers)
Output:
Sorted array: [11, 12, 22, 25, 34, 64, 90]
20.1.2 Insertion Sort
Concept:
i. Builds the sorted array one element at a time
ii. Picks the next element and inserts it into the correct position in the already sorted part
Steps:
i. Start with the second element
ii. Compare it with the elements before
iii. Shift elements to make space
iv. Insert the element at the correct position
Example (Python):
def insertion_sort(arr):
 for i in range(1, len(arr)):
 key = arr[i]
 j = i-1
 while j >= 0 and key < arr[j]:
 arr[j+1] = arr[j]
 j -= 1
 arr[j+1] = key
# Example usage
numbers = [12, 11, 13, 5, 6]
insertion_sort(numbers)
print("Sorted array:", numbers)
Output:
Sorted array: [5, 6, 11, 12, 13]
20.1.3 Merge Sort
Concept:
i. Divide and Conquer algorithm
ii. Divides the list into halves, sorts each half recursively, and merges them
Steps:
i. Divide the list into two halves
ii. Recursively sort each half
iii. Merge the sorted halves
Example (Python):
def merge_sort(arr):
 if len(arr) > 1:
 mid = len(arr)//2
 L = arr[:mid]
 R = arr[mid:]

 merge_sort(L)
 merge_sort(R)

 i = j = k = 0
 while i < len(L) and j < len(R):
 if L[i] < R[j]:
 arr[k] = L[i]
 i += 1
 else:
 arr[k] = R[j]
 j += 1
 k += 1

 while i < len(L):
 arr[k] = L[i]
 i += 1
 k += 1

 while j < len(R):
 arr[k] = R[j]
 j += 1
 k += 1
# Example usage
numbers = [38, 27, 43, 3, 9, 82, 10]
merge_sort(numbers)
print("Sorted array:", numbers)
Output:
Sorted array: [3, 9, 10, 27, 38, 43, 82]
20.1.4 Quick Sort
Concept:
• Divide and Conquer algorithm
• Picks a pivot element, partitions the list into elements less than pivot and greater than
pivot, then recursively sorts
Steps:
i. Choose a pivot
ii. Partition elements around pivot
iii. Recursively sort partitions
Example (Python):
def quick_sort(arr):
 if len(arr) <= 1:
 return arr
 else:
 pivot = arr[0]
 less = [x for x in arr[1:] if x <= pivot]
 greater = [x for x in arr[1:] if x > pivot]
 return quick_sort(less) + [pivot] + quick_sort(greater)
# Example usage
numbers = [10, 7, 8, 9, 1, 5]
sorted_numbers = quick_sort(numbers)
print("Sorted array:", sorted_numbers)
Output:
Sorted array: [1, 5, 7, 8, 9, 10]
20.2 Searching Algorithms
Searching is the process of finding an element in a collection.
20.2.1 Linear Search
Concept:
i. Checks each element in the list sequentially
ii. Works on sorted or unsorted data
Example (Python):
def linear_search(arr, target):
 for i in range(len(arr)):
 if arr[i] == target:
 return i
 return -1
numbers = [10, 20, 30, 40, 50]
result = linear_search(numbers, 30)
print("Element found at index:", result)
Output:
Element found at index: 2
20.2.2 Binary Search
Concept:
i. Works on sorted lists
ii. Repeatedly divides the list in half
iii. Compares target with middle element
Example (Python, Iterative):
def binary_search(arr, target):
 left = 0
 right = len(arr) - 1
 while left <= right:
 mid = (left + right) // 2
 if arr[mid] == target:
 return mid
 elif arr[mid] < target:
 left = mid + 1
 else:
 right = mid - 1
 return -1
numbers = [1, 3, 5, 7, 9, 11]
result = binary_search(numbers, 7)
print("Element found at index:", result)
Output:
Element found at index: 3
20.3 Example Exam Questions
Question 1:
Write a Python program to sort the list [64, 34, 25, 12, 22, 11, 90] using Bubble Sort.
Solution: Use the Bubble Sort example above. Output: [11, 12, 22, 25, 34, 64, 90]
Question 2:
Implement Insertion Sort to sort [12, 11, 13, 5, 6]. Show each step of the array after each
insertion.
Solution: Use the Insertion Sort example. Stepwise:
i. Step 1: [11, 12, 13, 5, 6]
ii. Step 2: [11, 12, 13, 5, 6]
iii. Step 3: [5, 11, 12, 13, 6]
iv. Step 4: [5, 6, 11, 12, 13]
Question 3:
Write a Python function to merge sort [38, 27, 43, 3, 9, 82, 10].
Solution: Use Merge Sort example. Output: [3, 9, 10, 27, 38, 43, 82]
Question 4:
Use Binary Search to find 9 in [1, 3, 5, 7, 9, 11]. Show iterations.
Solution:
i. Middle index: 2 → 5 (target > 5 → search right)
ii. Middle index: 4 → 9 (found)
iii. Index returned: 4
Question 5:
Write a Python program to quick sort [10, 7, 8, 9, 1, 5]. Show the partitions for the first pivot.
Solution:
i. Pivot = 10
ii. Less = [7, 8, 9, 1, 5]
iii. Greater = []
iv. Recursively sorted result: [1, 5, 7, 8, 9, 10]
21. Greedy Algorithms
21.1 Definition
A greedy algorithm is a problem-solving technique that makes the best possible choice at
each step, aiming to achieve a locally optimal solution with the hope that it leads to a globally
optimal solution.
i. Key Idea: Choose the "best option now" without reconsidering past choices.
ii. Use Cases: Optimization problems, such as shortest paths, minimum spanning trees, and
data compression.
21.2 Characteristics
i. Simple and intuitive approach.
ii. Works best when a problem has the Greedy Choice Property and Optimal
Substructure.
a. Greedy Choice Property: A global optimum can be arrived at by selecting a
local optimum.
b. Optimal Substructure: An optimal solution to a problem contains optimal
solutions to its subproblems.
21.3 Common Greedy Algorithms
i. Kruskal’s Algorithm: Finds the Minimum Spanning Tree (MST) of a weighted,
connected graph.
ii. Prim’s Algorithm: Another algorithm for finding MST.
iii. Huffman Coding: Efficient compression algorithm that builds optimal prefix codes.
iv. Activity Selection Problem: Schedules the maximum number of activities without
conflicts.
v. Fractional Knapsack Problem: Maximizes total value with limited weight capacity by
taking fractions of items.
21.4 Programming Examples
Example 1: Kruskal’s Algorithm (Minimum Spanning Tree)
Problem: Find the MST of a weighted graph.
Steps:
i. Sort all edges in increasing order of weight.
ii. Initialize MST as empty.
iii. Add edges to MST if they don’t form a cycle.
iv. Repeat until MST contains V-1 edges (V = number of vertices).
Python Implementation:
# Kruskal's Algorithm
class Graph:
 def __init__(self, vertices):
 self.V = vertices
 self.edges = []
 def add_edge(self, u, v, w):
 self.edges.append((w, u, v))
 def find_parent(self, parent, i):
 if parent[i] == i:
 return i
 return self.find_parent(parent, parent[i])
 def union(self, parent, rank, x, y):
 xroot = self.find_parent(parent, x)
 yroot = self.find_parent(parent, y)
 if rank[xroot] < rank[yroot]:
 parent[xroot] = yroot
 elif rank[xroot] > rank[yroot]:
 parent[yroot] = xroot
 else:
 parent[yroot] = xroot
 rank[xroot] += 1
 def kruskal_mst(self):
 result = []
 i, e = 0, 0
 self.edges.sort()
 parent = [i for i in range(self.V)]
 rank = [0] * self.V
 while e < self.V - 1:
 w, u, v = self.edges[i]
 i += 1
 x = self.find_parent(parent, u)
 y = self.find_parent(parent, v)
 if x != y:
 e += 1
 result.append((u, v, w))
 self.union(parent, rank, x, y)
 print("Edges in MST:")
 for u, v, w in result:
 print(f"{u} -- {v} == {w}")
# Usage
g = Graph(4)
g.add_edge(0, 1, 10)
g.add_edge(0, 2, 6)
g.add_edge(0, 3, 5)
g.add_edge(1, 3, 15)
g.add_edge(2, 3, 4)
g.kruskal_mst()
Example 2: Prim’s Algorithm (Minimum Spanning Tree)
Problem: Find MST starting from a chosen vertex.
Steps:
i. Start with a vertex.
ii. Select the edge with the smallest weight connecting a visited vertex to an unvisited
vertex.
iii. Repeat until all vertices are visited.
Python Implementation:
import sys
def prim(graph, V):
 selected = [False] * V
 selected[0] = True
 edges_count = 0
 print("Edge : Weight")
 while edges_count < V - 1:
 minimum = sys.maxsize
 x = y = 0
 for i in range(V):
 if selected[i]:
 for j in range(V):
 if not selected[j] and graph[i][j]:
 if minimum > graph[i][j]:
 minimum = graph[i][j]
 x, y = i, j
 print(f"{x} - {y} : {graph[x][y]}")
 selected[y] = True
 edges_count += 1
# Usage
V = 5
graph = [
 [0, 2, 0, 6, 0],
 [2, 0, 3, 8, 5],
 [0, 3, 0, 0, 7],
 [6, 8, 0, 0, 9],
 [0, 5, 7, 9, 0]
]
prim(graph, V)
Example 3: Huffman Coding
Problem: Compress characters by assigning shorter codes to more frequent characters.
Steps:
i. Build a frequency table.
ii. Build a priority queue of nodes.
iii. Combine two nodes with the smallest frequency.
iv. Repeat until one node remains (root of Huffman Tree).
v. Assign codes (0 for left, 1 for right).
Python Implementation:
import heapq
from collections import defaultdict
def huffman_coding(data):
 freq = defaultdict(int)
 for char in data:
 freq[char] += 1
 heap = [[weight, [char, ""]] for char, weight in freq.items()]
 heapq.heapify(heap)
 while len(heap) > 1:
 lo = heapq.heappop(heap)
 hi = heapq.heappop(heap)
 for pair in lo[1:]:
 pair[1] = '0' + pair[1]
 for pair in hi[1:]:
 pair[1] = '1' + pair[1]
 heapq.heappush(heap, [lo[0] + hi[0]] + lo[1:] + hi[1:])

 print("Character codes:")
 for char, code in sorted(heapq.heappop(heap)[1:], key=lambda x: x[0]):
 print(f"{char}: {code}")
# Usage
huffman_coding("greedyalgorithm")
Example 4: Fractional Knapsack Problem
Problem: Maximize value of items within a weight limit.
Steps:
i. Calculate value/weight ratio.
ii. Sort items by ratio in descending order.
iii. Add items fully if possible, or fractionally if weight limit reached.
Python Implementation:
def fractional_knapsack(values, weights, capacity):
 index = list(range(len(values)))
 ratio = [v/w for v, w in zip(values, weights)]
 index.sort(key=lambda i: ratio[i], reverse=True)

 total_value = 0
 for i in index:
 if weights[i] <= capacity:
 total_value += values[i]
 capacity -= weights[i]
 else:
 total_value += values[i] * (capacity / weights[i])
 break
 return total_value
values = [60, 100, 120]
weights = [10, 20, 30]
capacity = 50
print("Maximum value:", fractional_knapsack(values, weights, capacity))
Example 5: Activity Selection Problem
Problem: Select maximum number of activities that don’t overlap.
Steps:
i. Sort activities by finish time.
ii. Select first activity.
iii. Select next activity whose start time ≥ finish time of last selected activity.
Python Implementation:
def activity_selection(start, finish):
 activities = sorted(zip(start, finish), key=lambda x: x[1])
 last_finish = 0
 selected = []
 for s, f in activities:
 if s >= last_finish:
 selected.append((s, f))
 last_finish = f
 return selected
start = [1, 3, 0, 5, 8, 5]
finish = [2, 4, 6, 7, 9, 9]
print("Selected activities:", activity_selection(start, finish))
21.5 Exam Questions with Solutions
Question 1: Explain the greedy choice property with an example.
Solution:
i. Greedy choice property means the global optimal solution can be obtained by locally
optimal choices.
ii. Example: In the fractional knapsack problem, selecting the item with the highest valueto-weight ratio at each step is a greedy choice.
Question 2: Write a Python program to find MST using Kruskal’s algorithm for a given
graph.
Solution: Refer to Example 1.
Question 3: Given activities with start times [1,2,3] and finish times [3,4,5], select the
maximum number of non-overlapping activities using a greedy approach.
Solution:
i. Sort by finish time → [1,3], [2,4], [3,5]
ii. Select [1,3], next [3,5] → Max activities = 2
Question 4: What is the difference between greedy algorithms and dynamic programming?
Solution:
Feature Greedy Dynamic Programming
Approach Locally optimal choices Considers all subproblems
Backtracking No Often needed
Optimality Works only if greedy property holds Guaranteed if subproblem optimality holds
Example Kruskal’s MST Knapsack 0/1
Question 5: Implement Huffman coding for the string "algorithm" and display the codes.
Solution: Refer to Example 3.
22. Divide and Conquer
22.1 Strategy
The Divide and Conquer (D&C) approach is a powerful problem-solving technique used in
computer science. The method works by breaking a problem into smaller, manageable
subproblems, solving each subproblem independently, and then combining the results to
form the final solution.
Steps in Divide and Conquer:
A. Divide
i. Split the problem into smaller subproblems, ideally of equal size.
ii. Example: Splitting an array into two halves.
B. Conquer
i. Solve each subproblem recursively.
ii. If the subproblem is small enough (base case), solve it directly.
C. Combine
i. Merge or combine the solutions of the subproblems to form the final solution.
ii. Example: Merging two sorted arrays to create a single sorted array.
Key Characteristics:
i. Typically recursive in nature.
ii. Reduces complex problems into simpler, repeatable steps.
iii. Often more efficient than iterative brute-force methods for problems like sorting and
searching.
22.2 Classic Examples
1. Merge Sort
Problem: Sort an array of n elements.
D&C Approach:
i. Divide array into two halves.
ii. Recursively sort each half.
iii. Merge the two sorted halves.
Example Program (Python):
def merge_sort(arr):
 if len(arr) <= 1:
 return arr # Base case: array is already sorted
 mid = len(arr) // 2
 left = merge_sort(arr[:mid]) # Divide & conquer left half
 right = merge_sort(arr[mid:]) # Divide & conquer right half
 return merge(left, right) # Combine
def merge(left, right):
 result = []
 i = j = 0
 # Merge two sorted arrays
 while i < len(left) and j < len(right):
 if left[i] < right[j]:
 result.append(left[i])
 i += 1
 else:
 result.append(right[j])
 j += 1
 # Append remaining elements
 result.extend(left[i:])
 result.extend(right[j:])
 return result
# Example usage
arr = [38, 27, 43, 3, 9, 82, 10]
sorted_arr = merge_sort(arr)
print("Sorted Array:", sorted_arr)
Step-by-step Explanation:
i. Array [38, 27, 43, 3, 9, 82, 10] is split into [38, 27, 43] and [3, 9, 82, 10].
ii. Each sub-array is recursively split and sorted.
iii. Sorted subarrays are merged: [27, 38, 43] and [3, 9, 10, 82].
iv. Final sorted array: [3, 9, 10, 27, 38, 43, 82].
2. Quick Sort
Problem: Sort an array efficiently.
D&C Approach:
i. Pick a pivot element.
ii. Partition array: elements smaller than pivot to the left, larger to the right.
iii. Recursively sort left and right partitions.
Python Example:
def quick_sort(arr):
 if len(arr) <= 1:
 return arr
 pivot = arr[len(arr)//2]
 left = [x for x in arr if x < pivot]
 middle = [x for x in arr if x == pivot]
 right = [x for x in arr if x > pivot]
 return quick_sort(left) + middle + quick_sort(right)
# Example usage
arr = [10, 7, 8, 9, 1, 5]
print("Quick Sorted Array:", quick_sort(arr))
Explanation:
i. Pivot chosen as middle element: 8.
ii. Partition into [1, 5, 7], [8], [9, 10].
iii. Recursively sort left and right.
iv. Combine: [1, 5, 7, 8, 9, 10].
3. Binary Search
Problem: Search for a value in a sorted array.
D&C Approach:
i. Divide array into two halves.
ii. Compare middle element with target.
iii. Recursively search left or right half depending on comparison.
Python Example:
def binary_search(arr, target):
 low, high = 0, len(arr) - 1
 while low <= high:
 mid = (low + high) // 2
 if arr[mid] == target:
 return mid
 elif arr[mid] < target:
 low = mid + 1
 else:
 high = mid - 1
 return -1
# Example usage
arr = [1, 3, 5, 7, 9, 11]
target = 7
print("Index of", target, ":", binary_search(arr, target))
Explanation:
i. Compare target 7 with middle 5 → search right half [7, 9, 11].
ii. Middle 9 → search left half [7].
iii. Found at index 3.
4. Maximum Subarray Sum (Kadane’s Algorithm Variant Using D&C)
Problem: Find maximum sum of contiguous subarray.
D&C Approach:
i. Divide array into left, right halves.
ii. Find maximum subarray sum in left, right, and crossing middle.
iii. Combine for final maximum sum.
Python Example:
def max_crossing_sum(arr, left, mid, right):
 left_sum = float('-inf')
 total = 0
 for i in range(mid, left-1, -1):
 total += arr[i]
 left_sum = max(left_sum, total)
 right_sum = float('-inf')
 total = 0
 for i in range(mid+1, right+1):
 total += arr[i]
 right_sum = max(right_sum, total)
 return left_sum + right_sum
def max_subarray_sum(arr, left, right):
 if left == right:
 return arr[left]
 mid = (left + right) // 2
 return max(max_subarray_sum(arr, left, mid),
 max_subarray_sum(arr, mid+1, right),
 max_crossing_sum(arr, left, mid, right))
# Example usage
arr = [-2, -5, 6, -2, -3, 1, 5, -6]
print("Maximum Subarray Sum:", max_subarray_sum(arr, 0, len(arr)-1))
Explanation:
i. Divide array into halves recursively.
ii. Compute max sum in left, right, and crossing mid.
iii. Combine for global maximum.
5. Exponentiation by Squaring
Problem: Compute (x^n) efficiently.
D&C Approach:
i. Divide exponent (n) into two halves (n/2).
ii. Recursively compute smaller powers.
iii. Multiply results.
Python Example:
def power(x, n):
 if n == 0:
 return 1
 temp = power(x, n // 2)
 if n % 2 == 0:
 return temp * temp
 else:
 return temp * temp * x
# Example usage
print("2^10 =", power(2, 10))
Explanation:
i. Compute 2^5 recursively → 2^2 → 2^1 → 1
ii. Combine results efficiently instead of multiplying 2 ten times.
22.3 Advantages of Divide and Conquer
i. Reduces problem complexity
ii. Efficient memory and time usage for large inputs
iii. Parallelizable in modern computing
22.4 Possible Exam Questions and Solutions
Q1. Explain the three steps of divide and conquer with an example.
Solution: Divide → Conquer → Combine; Example: Merge sort splits array, sorts halves,
merges them.
Q2. Write a Python program for Quick Sort and explain each step.
Solution: See Quick Sort example above; explanation included in lecture note.
Q3. Using binary search, find the index of 15 in array [1, 3, 5, 7, 9, 11, 15].
Solution: Middle 7 → right half → middle 11 → right half → middle 15 → found at index 6.
Q4. Implement divide and conquer to find the maximum subarray sum for arr = [2, -1, 3, -4, 5].
Solution: Maximum subarray is [2, -1, 3] sum = 4; Use max_subarray_sum function.
Q5. Compute (3^8) using exponentiation by squaring and show intermediate steps.
Solution:
3^8 → (3^4)^2 → ((3^2)^2)^2 → (((3^1)^2)^2)^2 = 6561.
23. Extensive Analysis of Computer Algorithms
Algorithm analysis is the study of the efficiency of algorithms in terms of time (speed) and
space (memory usage). Understanding how algorithms scale with input size is crucial for
designing efficient software.
23.1 Time Complexity
Time complexity measures the amount of time an algorithm takes to complete as a function of
input size (n).
23.1.1 Types of Time Complexity
A. Best Case
i. The scenario where the algorithm performs minimum operations.
ii. Example: Searching for the first element in an array (found immediately).
B. Average Case
i. The expected running time over all possible inputs.
ii. Example: Searching in an unsorted array.
C. Worst Case
i. The scenario where the algorithm performs maximum operations.
ii. Example: Searching for a non-existent element in an array.
23.1.2 Example 1: Linear Search in Python
Problem: Find if a number exists in a list.
def linear_search(arr, target):
 for i in range(len(arr)):
 if arr[i] == target:
 return i # Found, return index
 return -1 # Not found
# Example usage
arr = [4, 2, 7, 1, 9]
target = 7
result = linear_search(arr, target)
print("Element found at index:", result)
Analysis:
i. Best Case: Element is at index 0 → 1 comparison.
ii. Worst Case: Element not in the list → (n) comparisons.
iii. Average Case: Element at random position → (n/2) comparisons.
23.1.3 Example 2: Bubble Sort
Problem: Sort a list of numbers in ascending order.
def bubble_sort(arr):
 n = len(arr)
 for i in range(n):
 for j in range(0, n-i-1):
 if arr[j] > arr[j+1]:
 arr[j], arr[j+1] = arr[j+1], arr[j]
arr = [5, 1, 4, 2, 8]
bubble_sort(arr)
print("Sorted array:", arr)
Analysis:
i. Best Case: Already sorted → (O(n)) with optimization.
ii. Worst Case: Reverse order → (O(n^2))
iii. Average Case: Random order → (O(n^2))
23.2 Space Complexity
Space complexity measures the amount of memory an algorithm uses in terms of input size
(n).
Components of Space Complexity:
i. Input memory (size of input)
ii. Auxiliary memory (variables, arrays, recursion stack)
iii. Constants (fixed memory)
23.2.1 Example 3: Factorial Calculation (Recursion)
def factorial(n):
 if n == 0:
 return 1
 else:
 return n * factorial(n-1)
print("Factorial of 5:", factorial(5))
Analysis:
i. Recursive calls consume memory on the call stack.
ii. Space complexity: (O(n)) (due to recursion).
iii. Iterative version would have (O(1)) space complexity.
23.2.2 Example 4: Fibonacci Sequence
# Recursive
def fibonacci_recursive(n):
 if n <= 1:
 return n
 return fibonacci_recursive(n-1) + fibonacci_recursive(n-2)
# Iterative
def fibonacci_iterative(n):
 a, b = 0, 1
 for _ in range(n):
 a, b = b, a + b
 return a
print(fibonacci_recursive(5))
print(fibonacci_iterative(5))
Analysis:
i. Recursive version: (O(2^n)) time, (O(n)) space (stack)
ii. Iterative version: (O(n)) time, (O(1)) space
23.3 Asymptotic Notations
Asymptotic notations describe the growth rate of an algorithm for large input sizes.
A. Big-O Notation (O)
i. Describes upper bound (worst-case).
ii. Example: Bubble sort → (O(n^2))
B. Omega Notation (Ω)
i. Describes lower bound (best-case).
ii. Example: Bubble sort → Ω(n)
C. Theta Notation (Θ)
i. Describes tight bound (both upper and lower).
ii. Example: Merge sort → Θ(n log n)
23.3.1 Example 5: Binary Search
def binary_search(arr, target):
 low, high = 0, len(arr)-1
 while low <= high:
 mid = (low + high) // 2
 if arr[mid] == target:
 return mid
 elif arr[mid] < target:
 low = mid + 1
 else:
 high = mid - 1
 return -1
arr = [1, 3, 5, 7, 9]
print("Element found at index:", binary_search(arr, 5))
Analysis:
A. Time complexity:
i. Worst Case: (O(\log n))
ii. Best Case: (Ω(1))
B. Space complexity: (O(1)) (iterative)
24. Exam Questions with Solutions
Question 1: Linear Search Complexity
Q: Explain the best, worst, and average case complexity of linear search for an array of size (n).
A:
i. Best: (O(1)) (element found at first index)
ii. Worst: (O(n)) (element not present)
iii. Average: (O(n/2) \approx O(n))
Question 2: Bubble Sort Optimization
Q: How can bubble sort be optimized for the best case scenario?
A: Use a flag to detect if a pass caused no swaps. If no swaps, terminate early → Best case
(O(n)).
Question 3: Space Complexity of Recursion
Q: Compute space complexity of recursive factorial for (n = 10).
A: Each recursive call consumes stack memory → Space = (O(n) = O(10))
Question 4: Big-O Notation Identification
Q: Identify the time complexity (Big-O) of merge sort and explain why.
A: Merge sort divides array → O(log n) levels, each level processes n elements → O(n log n)
Question 5: Fibonacci Comparison
Q: Compare recursive and iterative Fibonacci functions in terms of time and space.
A:
i. Recursive: Time = O(2^n), Space = O(n)
ii. Iterative: Time = O(n), Space = O(1)
24. Amortized Analysis
24.1 Definition
Amortized analysis is a method used in algorithm analysis to determine the average cost per
operation over a sequence of operations, even if some individual operations are expensive.
Unlike worst-case analysis, which looks at the most expensive single operation, amortized
analysis spreads out the cost of expensive operations over multiple operations to get a realistic
average.
Example: Resizing a dynamic array may occasionally take O(n) time, but over many insertions,
the average time per insertion is O(1).
24.2 Techniques of Amortized Analysis
A. Aggregate Method
i. Compute the total cost of n operations.
ii. Divide the total cost by n to get the amortized cost.
iii. Simple and intuitive.
B. Accounting Method
i. Assign a “charge” to each operation.
ii. Some operations may overpay to cover future expensive operations.
iii. Ensures the total charged equals total actual cost.
C. Potential Method
i. Introduces a potential function representing stored “work” or energy in the data
structure.
ii. Amortized cost = actual cost + change in potential.
iii. Useful for analyzing complex structures like splay trees.
24.3 Classic Examples
A. Dynamic Array Resizing
i. Arrays double in size when full.
ii. Single insertion: O(1) usually, but O(n) when resizing.
iii. Amortized insertion cost: O(1).
B. Stack Operations
i. Push/pop operations are O(1) usually.
ii. Using dynamic arrays, resizing occasionally costs O(n).
iii. Amortized cost per operation: O(1).
24.4 Programming Examples
Example 1: Dynamic Array Insertion (Python)
class DynamicArray:
 def __init__(self):
 self.array = []
 self.capacity = 1
 self.size = 0
 def insert(self, value):
 if self.size == self.capacity:
 self._resize()
 self.array.append(value)
 self.size += 1
 def _resize(self):
 self.capacity *= 2
 print(f"Resizing array to capacity {self.capacity}")
# Example usage
arr = DynamicArray()
for i in range(10):
 arr.insert(i)
Step-by-Step Explanation:
i. Start with a small array.
ii. Insert elements one by one.
iii. When full, double the capacity.
iv. The expensive resizing is infrequent → O(1) amortized.
Example 2: Stack Using Dynamic Array (Python)
class Stack:
 def __init__(self):
 self.stack = []
 def push(self, value):
 self.stack.append(value)
 print(f"Pushed: {value}")
 def pop(self):
 if not self.stack:
 print("Stack is empty")
 return None
 return self.stack.pop()
# Usage
s = Stack()
for i in range(5):
 s.push(i)
s.pop()
Explanation:
i. Each push and pop is O(1).
ii. If resizing occurs (dynamic array underlying the stack), amortized cost per operation is
still O(1).
Example 3: Queue Using Two Stacks (Python)
class Queue:
 def __init__(self):
 self.in_stack = []
 self.out_stack = []
 def enqueue(self, value):
 self.in_stack.append(value)
 def dequeue(self):
 if not self.out_stack:
 while self.in_stack:
 self.out_stack.append(self.in_stack.pop())
 if not self.out_stack:
 return None
 return self.out_stack.pop()
# Usage
q = Queue()
for i in range(5):
 q.enqueue(i)
print(q.dequeue()) # 0
Explanation:
i. Most operations O(1).
ii. Occasionally, moving elements from in_stack to out_stack is O(n).
iii. Amortized cost per operation: O(1).
Example 4: Binary Counter Increment (Python)
class BinaryCounter:
 def __init__(self, n_bits):
 self.bits = [0] * n_bits
 def increment(self):
 i = 0
 while i < len(self.bits) and self.bits[i] == 1:
 self.bits[i] = 0
 i += 1
 if i < len(self.bits):
 self.bits[i] = 1
 print("Counter:", self.bits)
# Usage
counter = BinaryCounter(4)
for _ in range(8):
 counter.increment()
Explanation:
i. Some increments flip multiple bits.
ii. Total flips over 2^n increments = O(n * 2^n) → amortized cost per increment = O(1).
Example 5: Splay Tree Access (Python Concept)
# Conceptual pseudo-code for splay operation
class SplayTreeNode:
 def __init__(self, key):
 self.key = key
 self.left = None
 self.right = None
def splay(root, key):
 # Rotations move the accessed node to root
 # Expensive for one operation but cheap over sequence
 pass
Explanation:
i. Accessing a node may require rotations.
ii. Amortized cost for sequence of accesses: O(log n).
iii. Uses potential method in amortized analysis.
24.5 Possible Exam Questions with Solutions
Q1. Explain amortized analysis and give an example.
Solution:
i. Amortized analysis calculates the average cost per operation over a sequence.
ii. Example: Dynamic array insertion: most inserts are O(1), but resizing is O(n). Over n
inserts, average = O(1).
Q2. Implement a stack using a dynamic array and explain its amortized insertion cost.
Solution:
i. See Example 2.
ii. Amortized cost is O(1) because resizing happens infrequently, and its cost is spread over
many push operations.
Q3. Using the aggregate method, compute the amortized cost for inserting 8 elements into a
dynamic array starting with capacity 1.
Solution:
i. Insertion costs: 1, 2 (resize), 1, 1, 4 (resize), 1, 1, 1
ii. Total cost = 12 → Amortized cost = 12/8 = 1.5 per operation.
Q4. Explain the difference between the accounting and potential methods in amortized analysis.
Solution:
i. Accounting method: Assign extra “credits” to cheap operations to pay for expensive
ones.
ii. Potential method: Define a potential function representing stored energy; amortized cost
= actual + change in potential.
Q5. Describe a scenario where amortized analysis is essential.
Solution:
i. Dynamic array insertions or queue using two stacks.
ii. Individual operations may be expensive occasionally, but over a sequence, the average
cost is low and predictable.