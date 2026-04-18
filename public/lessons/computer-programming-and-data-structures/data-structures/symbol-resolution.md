# 4. Symbol Resolution

## Definition

**Symbol resolution** is a fundamental process in compilation and linking where the compiler, linker, or dynamic loader **matches identifiers (symbols)** — such as variables, functions, and constants — to their actual definitions.

A **symbol** is simply a name used in a program to represent:
- A function: `printf`, `calculateArea`
- A variable: `totalStudents`, `MAX_SIZE`
- A constant: `PI`
- A data structure or object

<div class="cp-definition">

#### Why Symbol Resolution Matters

- Prevents **undefined references** (using a name with no definition)
- Enables **modular programming** (code split across files)
- Allows **separate compilation** (compile each file independently)
- Supports **library usage** (use functions defined in libm, libc, etc.)

</div>

---

## Types of Symbols

### 4.2.1 Global Symbols

Global symbols are identifiers defined outside all functions, accessible from any source file.

```c
int total = 0;          /* global symbol — visible to all files */
float taxRate = 0.18f;  /* global symbol */

void process() { /* global function symbol */ }
```

**Characteristics:**
- Visible across multiple source files
- Stored in the global symbol table
- Resolved during **linking**

---

### 4.2.2 External Symbols

External symbols are declared in one file using `extern` but defined in another.

```c
/* file: main.c */
extern int count;       /* declared here — defined elsewhere */
extern void display();  /* function defined in another file */

/* file: data.c */
int count = 42;         /* definition */
void display() { printf("Count = %d\n", count); }
```

**Characteristics:**
- The `extern` keyword = "find the definition somewhere else"
- Resolved by the linker at link time
- Used to share data and functions across multiple `.c` files

---

### 4.2.3 Local Symbols

Local symbols are declared inside functions and only accessible within their scope.

```c
void calculate() {
    int result = 0;     /* local symbol — only visible inside calculate() */
    float temp = 3.14f; /* local symbol */
    result = (int)temp;
}
```

**Characteristics:**
- Stored on the **stack** during function execution
- Resolved at **compile time** (not by the linker)
- Invisible to the linker — no cross-file access

---

## When Symbol Resolution Occurs

| Stage | Who Does It | What Gets Resolved |
|-------|------------|-------------------|
| **Compile time** | Compiler | Local symbols (function locals) |
| **Link time** | Linker | Global and external symbols |
| **Runtime** | Dynamic loader | Symbols from shared libraries |

---

## Programming Examples

### Example 1: Global Symbol Resolution (Single File)

```c
#include <stdio.h>

int counter = 10;   /* global symbol — defined here */

void increment() {
    counter++;      /* accesses the global symbol */
}

int main() {
    increment();
    increment();
    printf("Counter: %d\n", counter);   /* 12 */
    return 0;
}
```

**Resolution steps:**
1. Compiler sees `counter` — recognizes it as a global symbol
2. Allocates memory in the `.data` section
3. Linker confirms only one definition exists
4. Program executes successfully

---

### Example 2: External Symbol Resolution (Multiple Files)

```c
/* file: data.c */
int value = 25;         /* definition of global symbol */
```

```c
/* file: main.c */
#include <stdio.h>
extern int value;       /* declaration — linker will find definition */

int main() {
    printf("Value: %d\n", value);   /* 25 */
    return 0;
}
```

```bash
gcc -c main.c           # main.o — contains unresolved 'value'
gcc -c data.c           # data.o — contains definition of 'value'
gcc main.o data.o -o program   # linker resolves 'value'
```

---

### Example 3: Local Symbol Resolution

```c
#include <stdio.h>

void test() {
    int x = 5;      /* local — only exists in test() */
    printf("%d\n", x);
}

int main() {
    test();
    /* printf("%d", x);  ERROR — x not visible here */
    return 0;
}
```

**Resolution:** `x` is assigned a stack offset by the compiler. The linker is completely uninvolved.

---

### Example 4: Function Symbol Resolution Across Files

```c
/* display.c */
#include <stdio.h>
void display() {
    printf("Symbol resolved!\n");
}
```

```c
/* main.c */
void display();     /* declaration */
int main() {
    display();      /* reference — linker must resolve this */
    return 0;
}
```

```bash
gcc -c display.c && gcc -c main.c
gcc main.o display.o -o program
./program           # Output: Symbol resolved!
```

---

### Example 5: Dynamic Symbol Resolution (Shared Library)

```c
/* mathlib.c — compiled as shared library */
int square(int x) {
    return x * x;
}
```

```c
/* main.c */
#include <stdio.h>
int square(int);         /* symbol resolved at runtime */

int main() {
    printf("%d\n", square(4));   /* 16 */
    return 0;
}
```

```bash
# Build shared library
gcc -fPIC -shared -o libmathlib.so mathlib.c

# Link application
gcc main.c -L. -lmathlib -o program

# Run — dynamic loader resolves 'square' at startup
LD_LIBRARY_PATH=. ./program
```

---

## Common Symbol Resolution Errors

| Error | Cause | Fix |
|-------|-------|-----|
| `undefined reference to 'foo'` | `foo` declared but never defined | Add definition or link the correct library |
| `multiple definition of 'bar'` | `bar` defined in two or more files | Keep only one definition; use `extern` in others |
| `symbol not found` | Library not linked | Add `-llib` flag to gcc |

<div class="cp-warning">

⚠️ A common mistake: declaring a variable with `extern` in every file but forgetting to actually *define* it in any file. This compiles fine but fails at link time with "undefined reference."

</div>

---

## Practice Problems

<details>
<summary>🧩 Practice 1 — Identify Symbol Types</summary>

**Question:** Classify each symbol as global, external, or local:

```c
/* file: student.c */
int enrolledCount = 0;      /* ? */

void enroll() {
    int newStudents = 10;   /* ? */
    enrolledCount += newStudents;
}
```

```c
/* file: report.c */
extern int enrolledCount;   /* ? */

void printReport() {
    printf("Enrolled: %d\n", enrolledCount);
}
```

**Answers:**
- `enrolledCount` in student.c → **Global** (defined outside functions, visible to all files)
- `newStudents` → **Local** (inside `enroll()`, only visible there)
- `enrolledCount` in report.c → **External** (declared with `extern`, defined in student.c)

</details>

<details>
<summary>🧩 Practice 2 — Fix the Linking Error</summary>

**Problem:** What is wrong with this code and how do you fix it?

```c
/* file: main.c */
extern int budget;

int main() {
    printf("Budget: %d\n", budget);
    return 0;
}
```

**Error:** `undefined reference to 'budget'` — `budget` is declared as external but never actually defined in any file.

**Fix:** Add a definition in a separate file:

```c
/* file: config.c */
int budget = 500000;   /* definition */
```

Then compile and link both files:
```bash
gcc main.c config.c -o program
```

</details>

<details>
<summary>🧩 Practice 3 — Two-File Program</summary>

**Problem:** Write a two-file C program where:
- `math_utils.c` defines `multiply(a, b)` and `divide(a, b)` functions
- `main.c` uses them by declaring them with `extern` (or via a header)

```c
/* math_utils.c */
float divide(float a, float b) {
    if (b == 0) return 0;
    return a / b;
}

int multiply(int a, int b) {
    return a * b;
}
```

```c
/* main.c */
#include <stdio.h>
extern int   multiply(int a, int b);
extern float divide(float a, float b);

int main() {
    printf("3 × 4 = %d\n",     multiply(3, 4));    /* 12 */
    printf("10 ÷ 4 = %.2f\n",  divide(10, 4));     /* 2.50 */
    return 0;
}
```

```bash
gcc -c math_utils.c    # produces math_utils.o
gcc -c main.c          # produces main.o (multiply, divide unresolved)
gcc main.o math_utils.o -o calc   # linker resolves both symbols
./calc
```

</details>
