# 8. Loading and Linking Shared Libraries from Applications

## Introduction

Modern software systems rely heavily on shared libraries to reduce memory usage, improve modularity, and simplify maintenance. Instead of embedding all library code at compile time, programs can **load libraries at runtime** using dynamic linking mechanisms.

This section covers:
- **Automatic** runtime loading (OS handles it at startup)
- **Explicit** runtime loading using `dlopen()` / `LoadLibrary()`
- The **dynamic loader** itself

---

## 8.1 Runtime Linking — Definition and Modes

**Runtime linking** is loading and linking shared libraries while a program is executing.

### (a) Load at Program Startup — Automatic

The OS dynamic loader automatically loads required `.so` or `.dll` files before `main()` is called.

```bash
./myprogram
# Before main() runs:
# 1. OS reads ELF program headers
# 2. Loader finds all required .so files
# 3. Maps them into process address space
# 4. Resolves symbols
# 5. Then calls main()
```

### (b) Load on Demand — Explicit

Libraries loaded **only when needed**, via programmer-controlled API calls:
- **Linux:** `dlopen()`, `dlsym()`, `dlclose()`
- **Windows:** `LoadLibrary()`, `GetProcAddress()`, `FreeLibrary()`

Benefits:
- Reduces memory usage (unused libraries never loaded)
- Faster startup time
- Enables plugin architectures

---

## 8.2 The Dynamic Loader

### Definition

The **dynamic loader** (`ld.so` / `ld-linux.so` on Linux, Windows Loader on Windows) is the OS component that:

1. Locates required shared libraries in the filesystem
2. Maps them into the process's virtual address space
3. Resolves symbols (matches references to definitions)
4. Performs relocations (patches addresses)
5. Hands control to the program's entry point

### Library Search Paths (Linux)

The dynamic loader searches libraries in this order:
1. `LD_LIBRARY_PATH` environment variable
2. Paths in `/etc/ld.so.conf`
3. Default system paths: `/lib`, `/usr/lib`

---

## Programming Examples

### Example 1: Creating a Shared Library (Linux)

```c
/* mathlib.c */
#include <stdio.h>

int add(int a, int b) {
    return a + b;
}

int multiply(int a, int b) {
    return a * b;
}
```

```bash
# Step 1: Compile with position-independent code
gcc -fPIC -c mathlib.c        # produces mathlib.o

# Step 2: Create shared library
gcc -shared -o libmathlib.so mathlib.o

# Explanation:
# -fPIC   : position-independent code (required for .so)
# -shared : output is a shared object, not an executable
```

---

### Example 2: Automatic Runtime Linking (Linux)

```c
/* main.c */
#include <stdio.h>
int add(int, int);
int multiply(int, int);

int main() {
    printf("Sum = %d\n",      add(4, 5));          /* 9  */
    printf("Product = %d\n",  multiply(4, 5));      /* 20 */
    return 0;
}
```

```bash
# Link against shared library
gcc main.c -L. -lmathlib -o app

# Tell loader where to find the .so file
export LD_LIBRARY_PATH=.

./app     # loader auto-loads libmathlib.so before main()
```

At startup, `app` loads automatically and the dynamic loader resolves `add` and `multiply`.

---

### Example 3: Explicit Runtime Loading with dlopen() (Linux)

```c
#include <stdio.h>
#include <dlfcn.h>

int main() {
    void *handle;
    int (*add)(int, int);            /* function pointer */
    int (*multiply)(int, int);

    /* Step 1: Load library at runtime */
    handle = dlopen("./libmathlib.so", RTLD_LAZY);
    if (!handle) {
        fprintf(stderr, "Error: %s\n", dlerror());
        return 1;
    }

    /* Step 2: Resolve symbol 'add' */
    add = (int (*)(int, int))dlsym(handle, "add");

    /* Step 3: Resolve symbol 'multiply' */
    multiply = (int (*)(int, int))dlsym(handle, "multiply");

    /* Step 4: Call the functions */
    printf("3 + 7 = %d\n",    add(3, 7));          /* 10 */
    printf("3 × 7 = %d\n",    multiply(3, 7));      /* 21 */

    /* Step 5: Unload library */
    dlclose(handle);
    return 0;
}
```

```bash
gcc main_dlopen.c -ldl -o dynamic_app
export LD_LIBRARY_PATH=.
./dynamic_app
```

<div class="cp-note">

**dlopen Flags:**
- `RTLD_LAZY` — resolve symbols when first used (faster startup)
- `RTLD_NOW` — resolve all symbols immediately at load time (safer, catches missing symbols early)

</div>

---

### Example 4: Dynamic Loading on Windows with LoadLibrary()

```c
/* mathlib.c — Windows DLL source */
__declspec(dllexport)
int add(int a, int b) {
    return a + b;
}
```

```c
/* main.c — Windows application */
#include <windows.h>
#include <stdio.h>

typedef int (*AddFunc)(int, int);

int main() {
    HINSTANCE hLib;
    AddFunc add;

    /* Step 1: Load DLL */
    hLib = LoadLibrary("mathlib.dll");
    if (!hLib) {
        printf("Cannot load DLL\n");
        return 1;
    }

    /* Step 2: Get function address */
    add = (AddFunc)GetProcAddress(hLib, "add");
    if (!add) {
        printf("Cannot find function\n");
        FreeLibrary(hLib);
        return 1;
    }

    /* Step 3: Call function */
    printf("Sum = %d\n", add(5, 6));   /* 11 */

    /* Step 4: Free library */
    FreeLibrary(hLib);
    return 0;
}
```

| Linux | Windows |
|-------|---------|
| `dlopen()` | `LoadLibrary()` |
| `dlsym()` | `GetProcAddress()` |
| `dlclose()` | `FreeLibrary()` |
| `dlerror()` | `GetLastError()` |

---

### Example 5: Plugin-Based Application Design

**Concept:** The main application loads plugins dynamically, enabling extensibility without recompilation.

```c
/* plugin.h — common plugin interface */
typedef struct {
    const char* name;
    void (*execute)(void);
} Plugin;
```

```c
/* plugin_hello.c — a plugin */
#include <stdio.h>
#include "plugin.h"

void execute() {
    printf("Hello Plugin: Executing!\n");
}

Plugin plugin_info = { "HelloPlugin", execute };
```

```bash
# Compile plugin as shared library
gcc -fPIC -shared -o plugin_hello.so plugin_hello.c
```

```c
/* app.c — main application loads plugins */
#include <stdio.h>
#include <dlfcn.h>
#include "plugin.h"

int main() {
    /* Load plugin at runtime */
    void *handle = dlopen("./plugin_hello.so", RTLD_LAZY);
    Plugin *p = (Plugin*)dlsym(handle, "plugin_info");

    printf("Loaded plugin: %s\n", p->name);
    p->execute();

    dlclose(handle);
    return 0;
}
```

**Real-world use cases:** Web servers (mod_php, mod_python), game engines, media players, IDE extensions.

---

## Practice Problems

<details>
<summary>🧩 Practice 1 — dlopen Flow</summary>

**Question:** Write the four steps needed to use a function `compress(data, size)` from a shared library `libcompress.so` using explicit runtime loading.

```c
#include <dlfcn.h>
#include <stdio.h>

int main() {
    /* 1. Load library */
    void *handle = dlopen("./libcompress.so", RTLD_LAZY);
    if (!handle) { fprintf(stderr, "%s\n", dlerror()); return 1; }

    /* 2. Resolve symbol */
    int (*compress)(char*, int) = (int (*)(char*, int))dlsym(handle, "compress");
    if (!compress) { fprintf(stderr, "%s\n", dlerror()); dlclose(handle); return 1; }

    /* 3. Use the function */
    char buf[] = "Hello World Data";
    int result = compress(buf, sizeof(buf));
    printf("Compressed size: %d bytes\n", result);

    /* 4. Unload library */
    dlclose(handle);
    return 0;
}
```

</details>

<details>
<summary>🧩 Practice 2 — LD_LIBRARY_PATH</summary>

**Question:** You compile `app` which uses `libcustom.so` located in `/home/user/mylibs/`. How do you make the dynamic loader find it?

**Answer:**

```bash
# Option 1: Set LD_LIBRARY_PATH (temporary, current session only)
export LD_LIBRARY_PATH=/home/user/mylibs:$LD_LIBRARY_PATH
./app

# Option 2: Use rpath at compile time (path embedded in binary)
gcc app.c -L/home/user/mylibs -lcustom -Wl,-rpath,/home/user/mylibs -o app
./app

# Option 3: Add to /etc/ld.so.conf and run ldconfig (system-wide)
echo "/home/user/mylibs" >> /etc/ld.so.conf
sudo ldconfig
./app
```

</details>

<details>
<summary>🧩 Practice 3 — Automatic vs Explicit Loading</summary>

**Question:** Compare automatic runtime linking and explicit runtime linking (`dlopen`). When would you choose each?

| Aspect | Automatic (at startup) | Explicit (dlopen) |
|--------|------------------------|-------------------|
| **When loaded** | Before main() | When dlopen() is called |
| **Programmer control** | Low | High |
| **Memory** | All specified libraries loaded | Only load what you need |
| **Use case** | Standard library dependencies | Plugins, optional features |
| **Error handling** | Program can't start if library missing | Can handle missing library gracefully |

**Choose automatic** when: the library is always needed (e.g., libc, OpenSSL for an HTTPS server).

**Choose dlopen** when: the library is optional (e.g., a plugin for image export), or you want to gracefully degrade if the library isn't installed.

</details>
