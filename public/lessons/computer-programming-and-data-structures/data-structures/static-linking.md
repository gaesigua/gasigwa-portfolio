# 3. Static Linking

## Definition

**Static linking** is a program linking technique in which all required library functions and external code are **copied directly into the executable file at compile time**. Once compiled and statically linked, the program is a **self-contained executable** — it does not require any external libraries to be present at runtime.

<div class="cp-definition">

#### Key Idea

In static linking:
- The linker searches **static library archives** (`.a` files on Linux)
- Copies only the **required functions** from those archives into the executable
- Resolves all symbol references at **compile time**
- The resulting binary runs independently on any compatible system

</div>

---

## Characteristics

<div class="cp-definition">

| Characteristic | Explanation |
|---------------|-------------|
| **Libraries copied into executable** | All referenced functions are embedded in the binary |
| **Larger executable size** | Every static program contains its own copy of library code |
| **No runtime dependencies** | The binary runs without needing any shared libraries installed |
| **Linking at compile time** | All symbol resolution and address binding happen before execution |

</div>

---

## Advantages vs Disadvantages

<div class="cp-comparison">
<div class="cp-comparison-left">
<h5>✅ Advantages</h5>

- **Portability** — runs on any compatible system, even without libraries installed
- **Reliability** — library version never changes unexpectedly
- **Simpler deployment** — distribute one self-contained executable
- **Slightly faster startup** — no library loading at runtime
</div>
<div class="cp-comparison-right">
<h5>⚠️ Disadvantages</h5>

- **Large executables** — every program duplicates the same library code
- **Higher memory usage** — multiple programs can't share one library in RAM
- **Difficult updates** — a bug fix in a library requires recompiling ALL programs
- **Slower compilation** — embedding large libraries takes time
</div>
</div>

---

## Static Linking Process (Step-by-Step)

```
1. Write source code (.c files)
2. Compile to object files (.o):  gcc -c source.c
3. Select static library (.a):    provided by developer or system
4. Linker copies required routines from .a into the executable
5. Single executable file produced (no external dependencies)
```

---

## Programming Examples

### Example 1: Static Linking with the Math Library

```c
/* sqrt_static.c */
#include <stdio.h>
#include <math.h>

int main() {
    double x = 9.0;
    printf("Square root of %.2f is %.2f\n", x, sqrt(x));
    return 0;
}
```

```bash
# Compile with static linking
gcc -static sqrt_static.c -o sqrt_static -lm

# Run — works even without libm.so installed
./sqrt_static
```

- `-static` forces static linking
- `-lm` links the math library
- `sqrt()` is **copied** from `libm.a` into the executable

---

### Example 2: Creating and Using a Custom Static Library

```c
/* add.c — library function */
int add(int a, int b) {
    return a + b;
}
```

```bash
# Step 1: Compile to object file
gcc -c add.c                    # produces add.o

# Step 2: Create static library archive
ar rcs libadd.a add.o           # creates libadd.a
```

```c
/* main.c — uses the library */
#include <stdio.h>
int add(int, int);              /* function declaration */

int main() {
    printf("Sum = %d\n", add(5, 3));   /* 8 */
    return 0;
}
```

```bash
# Step 3: Compile and statically link
gcc main.c -L. -ladd -o add_program
# -L.      = search current directory for libraries
# -ladd    = link library named libadd.a

./add_program
# Output: Sum = 8
```

---

### Example 3: Comparing Static vs Dynamic Executable Sizes

```bash
# Dynamic linking (default)
gcc hello.c -o hello_dynamic

# Static linking
gcc -static hello.c -o hello_static

# Compare sizes
ls -lh hello_dynamic hello_static
```

**Observation:**
- `hello_static` is **significantly larger** (contains all C standard library code)
- `hello_dynamic` is small (only contains your code; libc loaded at runtime)

---

### Example 4: Static Executable on a Minimal System

**Scenario:** Deploy your program to an embedded system or container without shared libraries.

```bash
# Build statically — runs anywhere on the same CPU architecture
gcc -static myprogram.c -o myprogram

# Even on a minimal system without libc.so installed:
./myprogram    # ✅ Works
```

A dynamically linked binary would fail with: `error while loading shared libraries: libc.so.6: cannot open shared object file`

---

### Example 5: Symbol Resolution in Static Linking

```c
/* multiply.h */
int multiply(int a, int b);

/* multiply.c */
int multiply(int a, int b) {
    return a * b;
}
```

```bash
gcc -c multiply.c
ar rcs libmultiply.a multiply.o
```

When you link your program with `libmultiply.a`:
1. Linker finds the `multiply` symbol reference in your code
2. Searches `libmultiply.a` for a definition
3. Copies the `multiply` function's machine code into your executable
4. Resolves the symbol reference — `multiply` is now embedded

---

## Static vs Dynamic Linking Comparison

| Feature | Static Linking | Dynamic Linking |
|---------|---------------|----------------|
| **Linking time** | Compile time | Runtime |
| **Executable size** | Large | Small |
| **Memory usage** | High (code duplicated) | Low (library shared) |
| **Portability** | Very high | Moderate |
| **Library updates** | Must recompile | Automatic |
| **Startup speed** | Slightly faster | Slightly slower |

---

## Practice Problems

<details>
<summary>🧩 Practice 1 — Create a Static Library</summary>

**Problem:** You have functions `square(x)` and `cube(x)` in `mathfuncs.c`. Create a static library `libmathfuncs.a` and use it from `main.c`.

```c
/* mathfuncs.c */
int square(int x) { return x * x; }
int cube(int x)   { return x * x * x; }

/* main.c */
#include <stdio.h>
int square(int);
int cube(int);

int main() {
    printf("5² = %d\n", square(5));  /* 25 */
    printf("3³ = %d\n", cube(3));    /* 27 */
    return 0;
}
```

```bash
gcc -c mathfuncs.c               # mathfuncs.o
ar rcs libmathfuncs.a mathfuncs.o  # create static library
gcc main.c -L. -lmathfuncs -o program
./program
```

</details>

<details>
<summary>🧩 Practice 2 — Explain the ar Command</summary>

**Question:** In `ar rcs libmylib.a myfile.o`, explain each flag: `r`, `c`, `s`.

**Answer:**

| Flag | Meaning |
|------|---------|
| `r` | **Replace** — insert/replace files in the archive |
| `c` | **Create** — create the archive if it doesn't exist |
| `s` | **Symbol index** — write a symbol table index to the archive (makes linking faster) |

Together, `ar rcs` creates a new static library from object files with an index for efficient symbol lookup.

</details>

<details>
<summary>🧩 Practice 3 — Static Linking Trade-offs</summary>

**Question:** A software company builds a server application used by millions of clients. Should they use static or dynamic linking? Justify your answer.

**Answer:**

**Dynamic linking** is preferred here because:
1. **Memory efficiency** — one copy of shared libraries (e.g., OpenSSL) is shared by all processes. With static linking, every process duplicates the library, wasting RAM at scale.
2. **Security patching** — if a critical security bug is found in OpenSSL, only the shared library needs to be updated and all applications benefit immediately. With static linking, every application must be recompiled and redeployed.
3. **Binary size** — smaller executables are faster to distribute and update.

Static linking would be preferred for: standalone tools, embedded systems, or containers where portability matters more than memory, and library updates are tightly controlled.

</details>
