# 10. Tools for Manipulating Object Files

## Overview

Object files are the intermediate machine-code representations produced by the compiler and assembler. Several command-line tools allow you to inspect, analyze, debug, and create these files. Mastering these tools is essential for understanding how programs are built and troubleshooting compilation and linking issues.

<div class="cp-definition">

### The Essential Toolkit

| Tool | Primary Purpose |
|------|----------------|
| `objdump` | Disassemble object files / view headers |
| `nm` | List symbols in object files |
| `ldd` | Show shared library dependencies |
| `readelf` | Inspect ELF file structure |
| `ar` | Create and manage static libraries |

</div>

---

## 10.1 objdump — Inspect Object Files

**Purpose:** Display binary information from object files and executables in human-readable form.

**Key options:**

| Flag | What it shows |
|------|--------------|
| `-d` | Disassemble code sections (assembly) |
| `-h` | Section headers |
| `-t` | Symbol table |
| `-r` | Relocation entries |
| `-x` | All headers, combined |

### Example 1 — Disassemble a Compiled Program

```c
/* example1.c */
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}
```

```bash
# Step A: Compile to object file
gcc -c example1.c -o example1.o

# Step B: Disassemble with objdump
objdump -d example1.o
```

**Sample output (simplified):**
```asm
0000000000000000 <main>:
   0:   55                      push   %rbp
   1:   48 89 e5                mov    %rsp,%rbp
   4:   bf 00 00 00 00          mov    $0x0,%edi
   9:   e8 00 00 00 00          callq  <printf>        ← call to printf
   e:   b8 00 00 00 00          mov    $0x0,%eax
  13:   5d                      pop    %rbp
  14:   c3                      retq
```

This shows the assembly instructions generated from your C code. The `callq` instruction is a call to `printf` — still unresolved (address `00 00 00 00`) in the relocatable object file.

---

## 10.2 nm — List Symbols

**Purpose:** List all symbols (functions and variables) defined or referenced in object files.

### Symbol Type Codes

| Code | Meaning |
|------|---------|
| `T` | Defined in **text** (code) section |
| `D` | Defined in **initialized data** section |
| `B` | Defined in **BSS** (uninitialized data) section |
| `U` | **Undefined** — must be resolved by linker |
| `t`, `d`, `b` | Same but **local** (lowercase = static/local) |

### Example 2 — Using nm

```c
/* example2.c */
#include <stdio.h>

int globalVar = 10;  /* initialized global */
static int secret = 99;  /* local static */

void greet() {
    printf("Hello!\n");
}

int main() {
    greet();
    return 0;
}
```

```bash
gcc -c example2.c -o example2.o
nm example2.o
```

**Sample output:**
```
0000000000000004 D globalVar     ← defined in data section (global)
0000000000000000 d secret        ← defined (local/static)
0000000000000000 T greet         ← defined in text (greet function)
0000000000000010 T main          ← defined in text (main function)
                 U printf        ← undefined (external, resolved at link)
```

---

## 10.3 ldd — Shared Library Dependencies

**Purpose:** Display the shared libraries that an executable requires at runtime.

### Example 3 — Check Dependencies

```bash
# Build a dynamically linked program
gcc example1.c -o example1

# Check what shared libraries it needs
ldd example1
```

**Sample output:**
```
linux-vdso.so.1 (0x00007ffc5c3fd000)
libc.so.6 => /lib/x86_64-linux-gnu/libc.so.6 (0x00007f5e0b123000)
/lib64/ld-linux-x86-64.so.2 (0x00007f5e0b76a000)
```

**Interpretation:**
- `libc.so.6` → standard C library (needed for `printf`, `malloc`, etc.)
- `ld-linux` → the dynamic linker/loader itself
- `=> path` → where the loader will find the library

<div class="cp-warning">

⚠️ If ldd shows `=> not found` for a library, the program cannot run. Fix: install the library or set `LD_LIBRARY_PATH`.

</div>

---

## 10.4 readelf — Inspect ELF Details

**Purpose:** Comprehensive inspection of ELF (Executable and Linkable Format) files — shows headers, sections, program segments, and more.

### Key Options

| Flag | Shows |
|------|-------|
| `-h` | ELF file header |
| `-S` | Section headers |
| `-l` | Program (segment) headers |
| `-s` | Symbol table |
| `-d` | Dynamic section (shared library info) |

### Example 4 — Inspect ELF Headers

```bash
gcc example1.c -o example1
readelf -h example1
```

**Sample output:**
```
ELF Header:
  Magic:   7f 45 4c 46 02 01 01 00 ...
  Class:                             ELF64
  Data:                              2's complement, little endian
  Type:                              EXEC (Executable file)
  Machine:                           Advanced Micro Devices X86-64
  Entry point address:               0x401060
  Start of program headers:          64 (bytes into file)
  Number of section headers:         31
```

This tells you:
- 64-bit ELF executable for x86-64 architecture
- Entry point where execution begins: `0x401060`
- Number of sections in the binary

---

## 10.5 ar — Create Static Libraries

**Purpose:** Create, modify, and extract static library archives (`.a` files) from multiple object files.

### ar Command Syntax

```bash
ar [options] <archive_name.a> <object_files>
```

| Flag | Meaning |
|------|---------|
| `r` | Insert/replace files in archive |
| `c` | Create archive if it doesn't exist |
| `s` | Create/update symbol index (for fast linking) |
| `t` | List archive contents |
| `x` | Extract files from archive |

### Example 5 — Creating and Using a Static Library

```c
/* libmath.c — two library functions */
int add(int a, int b)      { return a + b; }
int multiply(int a, int b) { return a * b; }
```

```bash
# Step 1: Compile to object file
gcc -c libmath.c -o libmath.o

# Step 2: Create static library
ar rcs libmath.a libmath.o

# Step 3: Verify contents
ar -t libmath.a
# Output: libmath.o
```

```c
/* main.c */
#include <stdio.h>
int add(int, int);
int multiply(int, int);

int main() {
    printf("5 + 3  = %d\n",  add(5, 3));          /* 8  */
    printf("5 × 3  = %d\n",  multiply(5, 3));      /* 15 */
    return 0;
}
```

```bash
# Step 4: Compile and link with static library
gcc main.c -L. -lmath -o main

# Step 5: Run
./main
```

**Output:**
```
5 + 3  = 8
5 × 3  = 15
```

---

## Tools Summary

| Tool | When to Use |
|------|-------------|
| `objdump -d` | Debug compiler output, understand assembly, verify code |
| `nm` | Check if a function/variable is defined or undefined before linking |
| `ldd` | Diagnose "library not found" runtime errors |
| `readelf -h` | Understand binary file format, entry point, memory layout |
| `ar rcs` | Create static libraries from object files |

---

## Practice Problems

<details>
<summary>🧩 Practice 1 — nm Analysis</summary>

**Problem:** You compile `program.c` and run `nm program.o`. The output shows `U sqrt`. What does this mean and how do you fix it?

**Answer:**

`U sqrt` means `sqrt` is **used** (referenced) in `program.c` but its **definition is not in this object file** — it's undefined.

This is expected: `sqrt` is defined in the math library (`libm`), not in your code.

**Fix when linking:**
```bash
gcc program.c -lm -o program
# The linker will find sqrt() in libm and resolve the U symbol
```

Without `-lm`, the linker outputs: `undefined reference to 'sqrt'`

</details>

<details>
<summary>🧩 Practice 2 — Create a Multi-Function Static Library</summary>

**Problem:** Create a static library `libstats.a` from a file `stats.c` containing `sum(arr, n)` and `average(arr, n)` functions, then use it from `main.c`.

```c
/* stats.c */
float sum(float arr[], int n) {
    float total = 0;
    int i;
    for (i = 0; i < n; i++) total += arr[i];
    return total;
}

float average(float arr[], int n) {
    if (n == 0) return 0;
    return sum(arr, n) / n;
}
```

```c
/* main.c */
#include <stdio.h>
float sum(float[], int);
float average(float[], int);

int main() {
    float data[] = {10, 20, 30, 40, 50};
    int n = 5;
    printf("Sum:     %.1f\n", sum(data, n));       /* 150.0 */
    printf("Average: %.1f\n", average(data, n));   /* 30.0  */
    return 0;
}
```

```bash
gcc -c stats.c -o stats.o
ar rcs libstats.a stats.o
gcc main.c -L. -lstats -o calculator
./calculator
```

</details>

<details>
<summary>🧩 Practice 3 — Diagnose ldd Output</summary>

**Question:** Running `ldd myserver` shows:

```
libssl.so.1.1 => not found
libcrypto.so.1.1 => not found
libc.so.6 => /lib/x86_64-linux-gnu/libc.so.6
```

What is the problem and how do you resolve it?

**Answer:**

**Problem:** The OpenSSL shared libraries (`libssl` and `libcrypto`) are required by `myserver` but cannot be found by the dynamic loader.

**Solutions:**

```bash
# Option 1: Install OpenSSL development libraries
sudo apt install libssl-dev    # Ubuntu/Debian

# Option 2: If installed but not in standard path, set LD_LIBRARY_PATH
export LD_LIBRARY_PATH=/opt/openssl/lib:$LD_LIBRARY_PATH

# Option 3: If a different version is needed, install it
sudo apt install libssl1.1

# Verify after fix
ldd myserver    # should show => /path/to/libssl.so.1.1
```

</details>
