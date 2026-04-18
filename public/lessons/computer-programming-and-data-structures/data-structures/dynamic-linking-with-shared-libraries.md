# 7. Dynamic Linking with Shared Libraries

## Definition

**Dynamic linking** is a program linking technique in which library functions are **not embedded into the executable** at compile time. Instead, the linking of external libraries is deferred until **program execution time (runtime)**.

<div class="cp-definition">

#### How It Works

- The executable contains only **references** (stubs) to shared library functions
- The actual library code lives in a separate **shared library file** (`.so` on Linux, `.dll` on Windows)
- When the program runs, the OS **dynamic loader** loads the library and connects references to real function addresses

</div>

---

## Shared Libraries

### Definition

A **shared library** is a collection of compiled, reusable functions that can be shared by multiple programs simultaneously in memory.

| Platform | File Format | Extension |
|----------|-------------|-----------|
| Linux / UNIX | Shared Object | `.so` |
| Windows | Dynamic-Link Library | `.dll` |
| macOS | Dynamic Library | `.dylib` |

### Key Characteristics

- One physical copy of the library is loaded into memory
- Multiple applications **share that single copy** through memory mapping
- Library updates immediately affect all programs using it (no recompilation)

---

## Advantages vs Disadvantages

<div class="cp-comparison">
<div class="cp-comparison-left">
<h5>✅ Advantages</h5>

- **Smaller executables** — library code not duplicated in each binary
- **Efficient memory usage** — one library instance shared by many processes
- **Easy updates** — fix a bug in the library; all programs benefit instantly
- **Faster compilation** — libraries not embedded at build time
</div>
<div class="cp-comparison-right">
<h5>⚠️ Disadvantages</h5>

- **Dependency issues** — program fails if library missing or wrong version
- **Runtime overhead** — slight delay at startup for symbol resolution
- **Version conflicts** — DLL Hell — different programs need different library versions
- **More complex deployment** — must ensure libraries are installed
</div>
</div>

---

## Programming Examples

### Example 1: Creating a Shared Library in C

```c
/* mathlib.c — source code for our shared library */
#include <stdio.h>

int add(int a, int b) {
    return a + b;
}

int subtract(int a, int b) {
    return a - b;
}
```

```bash
# Step 1: Compile to position-independent object code
gcc -fPIC -c mathlib.c       # produces mathlib.o with PIC

# Step 2: Create shared library
gcc -shared -o libmathlib.so mathlib.o

# Flags explained:
# -fPIC   : Position Independent Code (required for .so)
# -shared : Create shared object file instead of executable
```

---

### Example 2: Using a Shared Library from C

```c
/* main.c — application that uses our shared library */
#include <stdio.h>

/* Declare functions from the library */
int add(int, int);
int subtract(int, int);

int main() {
    printf("5 + 3 = %d\n",  add(5, 3));       /* 8  */
    printf("5 - 3 = %d\n",  subtract(5, 3));   /* 2  */
    return 0;
}
```

```bash
# Compile and link dynamically with libmathlib.so
gcc main.c -L. -lmathlib -o app
# -L.        : search current directory for libraries
# -lmathlib  : link libmathlib.so (or libmathlib.a)

# Set library path and run
export LD_LIBRARY_PATH=.
./app
```

**Output:**
```
5 + 3 = 8
5 - 3 = 2
```

---

### Example 3: Verifying Dynamic Linking with ldd

```bash
ldd app
```

**Sample output:**
```
libmathlib.so => ./libmathlib.so (0x00007f3c...)
libc.so.6     => /lib/x86_64-linux-gnu/libc.so.6 (0x00007f...)
```

This confirms:
- `libmathlib.so` is loaded from the current directory
- `libc.so.6` (standard C library) is also loaded dynamically
- The loader resolves `add` and `subtract` at program startup

---

### Example 4: Updating a Shared Library Without Recompiling the Program

```c
/* Updated mathlib.c — add now includes a bonus */
int add(int a, int b) {
    return (a + b) + 1;    /* bug fix: everything is +1 now 😄 */
}

int subtract(int a, int b) {
    return a - b;
}
```

```bash
# Recompile ONLY the library
gcc -fPIC -c mathlib.c
gcc -shared -o libmathlib.so mathlib.o

# Run the existing 'app' binary WITHOUT recompiling it
./app
```

**Output:**
```
5 + 3 = 9     ← changed without recompiling app!
5 - 3 = 2
```

This demonstrates how shared library updates propagate automatically.

---

### Example 5: Runtime Dynamic Loading with dlopen()

For maximum control, you can load shared libraries explicitly:

```c
#include <stdio.h>
#include <dlfcn.h>

int main() {
    /* Load library at runtime */
    void *handle = dlopen("./libmathlib.so", RTLD_LAZY);
    if (!handle) {
        fprintf(stderr, "dlopen error: %s\n", dlerror());
        return 1;
    }

    /* Get function pointer to 'add' */
    int (*add)(int, int) = (int (*)(int, int))dlsym(handle, "add");
    if (!add) {
        fprintf(stderr, "dlsym error: %s\n", dlerror());
        dlclose(handle);
        return 1;
    }

    printf("2 + 4 = %d\n", add(2, 4));   /* 6 */

    dlclose(handle);   /* unload library */
    return 0;
}
```

```bash
gcc dynamic_load.c -ldl -o dynamic_load
export LD_LIBRARY_PATH=.
./dynamic_load
```

| Function | Purpose |
|----------|---------|
| `dlopen(path, flags)` | Load library, return handle |
| `dlsym(handle, name)` | Get address of named symbol |
| `dlclose(handle)` | Unload library |
| `dlerror()` | Get last error message |

---

## Static vs Dynamic Linking Quick Reference

| Aspect | Static | Dynamic |
|--------|--------|---------|
| Library embedded in executable | Yes | No |
| Executable size | Large | Small |
| Multiple programs share library | No | Yes |
| Runtime dependency | None | Libraries must be present |
| Bug fix propagation | Recompile required | Automatic |
| Memory efficiency | Low | High |

---

## Practice Problems

<details>
<summary>🧩 Practice 1 — Build a Shared Library</summary>

**Problem:** Create a shared library `libgreeting.so` with a function `greet(name)` that prints a personalized greeting, then write a program that uses it.

```c
/* greeting.c */
#include <stdio.h>
void greet(const char *name) {
    printf("Hello, %s! Welcome to Data Structures.\n", name);
}
```

```c
/* app.c */
void greet(const char *);
int main() {
    greet("Alice");
    greet("Bob");
    return 0;
}
```

```bash
gcc -fPIC -c greeting.c
gcc -shared -o libgreeting.so greeting.o

gcc app.c -L. -lgreeting -o app
export LD_LIBRARY_PATH=.
./app
```

**Output:**
```
Hello, Alice! Welcome to Data Structures.
Hello, Bob! Welcome to Data Structures.
```

</details>

<details>
<summary>🧩 Practice 2 — Library Update Scenario</summary>

**Question:** A shared library `libencrypt.so` has a security vulnerability. List the steps to fix it and apply the fix to all programs using it.

**Answer:**

1. Fix the bug in the library source code (`encrypt.c`)
2. Recompile the library:
   ```bash
   gcc -fPIC -c encrypt.c
   gcc -shared -o libencrypt.so encrypt.o
   ```
3. Copy the updated library to the system library path (e.g., `/usr/lib/`)
4. Restart affected applications

**Key point:** No application needs to be recompiled! All programs that dynamically link `libencrypt.so` will automatically use the fixed version next time they run. This is the fundamental maintenance advantage of dynamic linking.

</details>

<details>
<summary>🧩 Practice 3 — Explain the Flags</summary>

**Question:** Explain each flag in the command:
```bash
gcc -fPIC -shared -o libmylib.so mylib.c
```

| Flag | Meaning |
|------|---------|
| `-fPIC` | Generate **Position Independent Code** — required so the library can be loaded at any memory address |
| `-shared` | Produce a **shared object file** (.so) instead of an executable |
| `-o libmylib.so` | **Output filename** — by convention, shared libraries are named `lib<name>.so` |
| `mylib.c` | The source file to compile |

**Convention:** Shared library names follow the pattern `lib<name>.so`. When linking, you reference them as `-l<name>` (e.g., `-lmylib`).

</details>
