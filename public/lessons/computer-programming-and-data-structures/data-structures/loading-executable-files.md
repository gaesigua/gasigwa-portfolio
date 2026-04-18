# 6. Loading Executable Files

## The Loader

### Definition

A **loader** is a critical component of the operating system (OS) responsible for **preparing an executable program for execution**. After a program is compiled and linked, it exists as an executable file on disk. The loader moves this executable into main memory (RAM) and begins its execution.

<div class="cp-definition">

#### The Loader's Main Functions

| Function | Description |
|----------|-------------|
| **Load into memory** | Reads the executable from disk and copies it into RAM |
| **Resolve symbols** | Loads and links shared libraries (for dynamic linking) |
| **Initialize environment** | Sets up stack, heap, passes command-line arguments |
| **Transfer control** | Sets the instruction pointer to the program's entry point |

</div>

---

## Types of Loaders

| Loader Type | Description |
|-------------|-------------|
| **Absolute Loader** | Loads program at a predetermined fixed memory address |
| **Relocating Loader** | Adjusts addresses so the program can load anywhere in RAM |
| **Dynamic Loader** | Loads shared libraries at program startup or on demand |
| **Bootstrap Loader** | Loads the operating system itself from disk |

---

## The Loading Process (Step-by-Step)

When you run `./program` on Linux, the loader performs:

### Step 1: Allocate Memory

The OS allocates segments for:
- **Text segment** — program code (machine instructions)
- **Data segment** — initialized global variables
- **BSS segment** — uninitialized global variables (zeroed)
- **Stack** — for function calls and local variables
- **Heap** — for dynamic memory (`malloc`)

### Step 2: Copy Executable Code

- Machine instructions and initialized data are copied from disk into the allocated RAM segments
- Uninitialized data (BSS) is filled with zeros

### Step 3: Initialize Runtime Environment

- Stack is set up with initial frame
- Environment variables are loaded
- Command-line arguments (`argc`, `argv`) are initialized
- Shared libraries are located and loaded (if dynamically linked)

### Step 4: Start Execution

- The instruction pointer (program counter) is set to the entry point
- Execution begins at `_start` (C startup code), which eventually calls `main()`

---

## Programming Examples

### Example 1: Simple Program Execution (C)

```c
/* hello.c */
#include <stdio.h>

int main() {
    printf("Hello, Loader!\n");
    return 0;
}
```

```bash
# Compile
gcc hello.c -o hello

# Execute — loader is invoked automatically
./hello
```

**What the loader does invisibly:**
1. Reads the ELF header of `hello`
2. Memory maps the text and data segments
3. Loads shared `libc.so` (for `printf`)
4. Sets up `argc = 1`, `argv = ["./hello"]`
5. Calls `_start` → `main()`

---

### Example 2: Viewing Shared Libraries Loaded at Runtime

```c
/* math_example.c */
#include <stdio.h>
#include <math.h>

int main() {
    printf("sqrt(16) = %.2f\n", sqrt(16));
    return 0;
}
```

```bash
gcc math_example.c -lm -o math_example

# Check which shared libraries the loader will load
ldd math_example
```

**Sample ldd output:**
```
linux-vdso.so.1 => (0x00007ffc...)
libm.so.6 => /lib/x86_64-linux-gnu/libm.so.6 (0x00007f...)
libc.so.6 => /lib/x86_64-linux-gnu/libc.so.6 (0x00007f...)
```

The loader loads `libm.so.6` automatically because `math_example` is dynamically linked to it.

---

### Example 3: On-Demand Dynamic Loading with dlopen()

Instead of the loader loading libraries at startup, you can load them **explicitly** while the program runs:

```c
#include <stdio.h>
#include <dlfcn.h>

int main() {
    /* Explicitly load the math library at runtime */
    void *handle = dlopen("libm.so.6", RTLD_LAZY);

    if (!handle) {
        printf("Library not found: %s\n", dlerror());
        return 1;
    }

    printf("Library loaded successfully!\n");
    dlclose(handle);   /* unload when done */
    return 0;
}
```

```bash
gcc dynamic_loader.c -ldl -o dynamic_loader
./dynamic_loader
```

- `RTLD_LAZY` — resolve symbols only when called (lazy binding)
- `RTLD_NOW` — resolve all symbols immediately at load time

---

### Example 4: Program Entry Point Demonstration

```c
#include <stdio.h>

void startup() {
    printf("Application starting up...\n");
}

int main() {
    startup();
    printf("Main function running.\n");
    return 0;
}
```

```bash
gcc entry.c -o entry
./entry
```

**Output:**
```
Application starting up...
Main function running.
```

**Behind the scenes:** The loader transfers control to `_start` (C runtime init code in crt0.o), which initializes the C library, sets up stdin/stdout/stderr, then calls `main()`.

---

### Example 5: Command-Line Arguments via the Loader

```c
#include <stdio.h>

int main(int argc, char *argv[]) {
    printf("Number of arguments: %d\n", argc);
    int i;
    for (i = 0; i < argc; i++) {
        printf("argv[%d] = %s\n", i, argv[i]);
    }
    return 0;
}
```

```bash
gcc args.c -o args
./args hello world 123
```

**Output:**
```
Number of arguments: 4
argv[0] = ./args
argv[1] = hello
argv[2] = world
argv[3] = 123
```

The loader sets up `argc` and `argv` from the command line **before** calling `main()`.

---

## Practice Problems

<details>
<summary>🧩 Practice 1 — Loader Steps</summary>

**Question:** List the four main steps the OS loader performs when you type `./program`.

**Answer:**

1. **Allocate memory** — reserve segments for code, data, BSS, stack, and heap
2. **Copy executable into memory** — read code and initialized data from disk into RAM
3. **Initialize runtime environment** — set up stack, load shared libraries, initialize `argc`/`argv`
4. **Transfer control to entry point** — set program counter to `_start`, which calls `main()`

</details>

<details>
<summary>🧩 Practice 2 — Interpret ldd Output</summary>

**Question:** You run `ldd myapp` and get:

```
libpthread.so.0 => /lib/x86_64-linux-gnu/libpthread.so.0
libc.so.6 => /lib/x86_64-linux-gnu/libc.so.6
libcrypto.so.1.1 => not found
```

What does this tell you, and what problem exists?

**Answer:**

- `libpthread.so.0` — found at the specified path ✅ (threading library, loaded at startup)
- `libc.so.6` — found ✅ (standard C library, always needed)
- `libcrypto.so.1.1` — **not found** ❌ — the program uses OpenSSL crypto functions but the library isn't installed or isn't in any library search path

**Fix:** Install OpenSSL (`sudo apt install libssl-dev`) or set `LD_LIBRARY_PATH` to point to the directory containing `libcrypto.so.1.1`.

</details>

<details>
<summary>🧩 Practice 3 — dlopen() Usage</summary>

**Problem:** Write a C program that uses `dlopen()` to load `libm.so.6` at runtime, uses `dlsym()` to get the `sqrt` function, calls it with 25.0, and prints the result.

```c
#include <stdio.h>
#include <dlfcn.h>

int main() {
    /* Load the math library at runtime */
    void *handle = dlopen("libm.so.6", RTLD_LAZY);
    if (!handle) {
        fprintf(stderr, "Error: %s\n", dlerror());
        return 1;
    }

    /* Get the sqrt function address */
    double (*my_sqrt)(double) = (double (*)(double))dlsym(handle, "sqrt");
    if (!my_sqrt) {
        fprintf(stderr, "Error: %s\n", dlerror());
        dlclose(handle);
        return 1;
    }

    /* Call the function */
    printf("sqrt(25.0) = %.2f\n", my_sqrt(25.0));   /* 5.00 */

    dlclose(handle);
    return 0;
}
```

```bash
gcc dlopen_example.c -ldl -o dlopen_example
./dlopen_example
# Output: sqrt(25.0) = 5.00
```

</details>
