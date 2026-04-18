# 2. Compiler Drivers and Program Linking

## What is a Compiler Driver?

A **compiler driver** is a system program that controls and coordinates the entire program translation process — from human-readable source code all the way to an executable machine-level program. Instead of the programmer manually invoking the preprocessor, compiler, assembler, and linker separately, the compiler driver does it automatically in the correct order.

<div class="cp-definition">

#### Key Idea

The compiler driver acts as a **manager** that:
1. Accepts source code as input
2. Calls each compilation tool in the correct sequence
3. Produces a final executable file

| Language | Compiler Driver |
|----------|----------------|
| C | `gcc` |
| C++ | `g++` |
| Java | `javac` |
| Rust | `rustc` |

</div>

---

## The Four Compilation Phases

```
Source (.c)
    ↓  Preprocessing (cpp)
Expanded Source (.i)
    ↓  Compilation (cc1)
Assembly (.s)
    ↓  Assembly (as)
Object File (.o)
    ↓  Linking (ld)
Executable (a.out)
```

### Phase 1: Preprocessing

Handled by the **C preprocessor (cpp)**:
- Expands `#include` — inserts header file contents
- Expands `#define` macros
- Processes `#ifdef` / `#endif` conditional compilation
- Removes comments

**Input:** `.c` source file → **Output:** `.i` preprocessed file

```bash
gcc -E hello.c > hello.i    # run only the preprocessor
```

---

### Phase 2: Compilation

Translates preprocessed C code into **assembly language**:
- Performs syntax and semantic analysis
- Detects programming errors
- Optimizes the code

**Input:** `.i` file → **Output:** `.s` assembly file

```bash
gcc -S hello.i              # stop after compilation, produce .s
```

---

### Phase 3: Assembly

The **assembler (as)** converts assembly language to **machine code**:
- Produces a relocatable object file
- Addresses are symbolic/relative, not yet final

**Input:** `.s` file → **Output:** `.o` object file

```bash
gcc -c hello.s              # assemble, stop before linking
```

---

### Phase 4: Linking

The **linker (ld)** combines object files and libraries:
- Resolves all symbol references
- Assigns final memory addresses
- Produces the executable

**Input:** one or more `.o` files → **Output:** Executable (`a.out` or named file)

```bash
gcc hello.o -o hello        # link, produce executable
```

---

## Compilation Summary Table

| Phase | Tool | Input | Output |
|-------|------|-------|--------|
| Preprocessing | `cpp` | `.c` | `.i` |
| Compilation | `cc1` | `.i` | `.s` |
| Assembly | `as` | `.s` | `.o` |
| Linking | `ld` | `.o` files | Executable |

---

## Complete Programming Examples

### Example 1: Simple One-Command Compilation

```c
/* hello.c */
#include <stdio.h>
int main() {
    printf("Hello, World!\n");
    return 0;
}
```

```bash
gcc hello.c -o hello    # all 4 phases in one command
./hello                  # run the executable
```

This single `gcc` command automatically invokes all four phases. The driver handles everything.

---

### Example 2: Step-by-Step Compilation

```bash
# Step 1: Preprocessing only
gcc -E hello.c -o hello.i

# Step 2: Compile to assembly
gcc -S hello.i           # produces hello.s

# Step 3: Assemble to object file
gcc -c hello.s           # produces hello.o

# Step 4: Link to executable
gcc hello.o -o hello

# Run
./hello
```

Each step lets you inspect the intermediate output.

---

### Example 3: Multi-File Compilation and Linking

```c
/* main.c */
#include <stdio.h>
void greet();
int main() {
    greet();
    return 0;
}

/* greet.c */
#include <stdio.h>
void greet() {
    printf("Welcome to Compiler Design!\n");
}
```

```bash
# Compile each file separately
gcc -c main.c       # produces main.o
gcc -c greet.c      # produces greet.o

# Link object files to produce executable
gcc main.o greet.o -o program

./program           # Output: Welcome to Compiler Design!
```

The linker resolves the `greet()` reference from `main.o` by finding its definition in `greet.o`.

---

### Example 4: Linking with a Library (-lm for math)

```c
/* sqrt_example.c */
#include <stdio.h>
#include <math.h>

int main() {
    double x = 16.0;
    printf("sqrt(%.2f) = %.2f\n", x, sqrt(x));
    return 0;
}
```

```bash
gcc sqrt_example.c -lm -o sqrt_example
# -lm tells the linker: search libm (math library)
```

<div class="cp-warning">

⚠️ Without `-lm`, the linker cannot find `sqrt()` and reports: `undefined reference to 'sqrt'`

</div>

---

### Example 5: Compilation vs Linking Errors

```c
/* error.c — contains a typo */
int main() {
    print("Hello");   /* should be printf — undefined function */
    return 0;
}
```

```bash
gcc error.c
# error: implicit declaration of function 'print'
```

- **Compilation error** → detected before linking; typo in function name
- **Linking error** → `undefined reference to 'someFunction'` → function declared but not defined anywhere

---

## Practice Problems

<details>
<summary>🧩 Practice 1 — Identify the Phase</summary>

**Question:** In which compilation phase does each of the following happen?

1. `#include <stdio.h>` is replaced with the contents of stdio.h
2. Syntax errors like missing `;` are detected
3. `printf` reference is matched to its definition in libc
4. Machine code (binary) instructions are generated from assembly

**Answers:**
1. **Preprocessing** — the preprocessor handles `#include`
2. **Compilation** — the compiler checks syntax
3. **Linking** — the linker resolves external symbols
4. **Assembly** — the assembler converts .s → .o (machine code)

</details>

<details>
<summary>🧩 Practice 2 — Multi-File Build</summary>

**Problem:** You have `calculator.c` (contains `add()` and `subtract()`) and `main.c` (uses those functions). Write the gcc commands to:
1. Compile each file to an object file
2. Link them to a program called `calculator`

```bash
# Step 1: compile separately
gcc -c calculator.c   # produces calculator.o
gcc -c main.c         # produces main.o

# Step 2: link
gcc calculator.o main.o -o calculator

# Step 3: run
./calculator
```

</details>

<details>
<summary>🧩 Practice 3 — Library Flags</summary>

**Question:** A student writes a C program using `pow()` from `<math.h>` and compiles with just `gcc program.c -o program`. What error will they get and how do they fix it?

**Answer:**

**Error:** `undefined reference to 'pow'` — the linker cannot find the definition of `pow()`.

**Fix:** Add the math library flag:
```bash
gcc program.c -lm -o program
```

`-lm` tells the linker to search `libm` (the math library file `libm.a` or `libm.so`), where `pow()`, `sqrt()`, `sin()`, etc. are defined.

</details>
