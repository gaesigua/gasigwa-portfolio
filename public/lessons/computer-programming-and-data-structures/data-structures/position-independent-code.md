# 9. Position Independent Code (PIC)

## Definition

**Position Independent Code (PIC)** refers to machine code that can execute correctly **regardless of where it is loaded in memory**.

Normally, programs assume fixed memory addresses. PIC removes this assumption — all memory references are computed **dynamically at runtime** using relative addressing. This allows the same physical code to run correctly even when its memory location changes between processes or between runs.

<div class="cp-definition">

#### Key Principle

PIC does **not** use absolute (hardcoded) memory addresses. Instead, it computes addresses *relative to the current instruction* or through runtime data structures (GOT, PLT).

</div>

---

## Why PIC Is Necessary

### 9.2.1 Required for Shared Libraries

Shared libraries may be loaded at **different virtual addresses** in different processes. If the library used absolute addresses, the code would only work at one specific address — impossible to share.

### 9.2.2 Enables Memory Sharing

- One physical copy of the library is kept in RAM
- Multiple processes map the same physical pages into their virtual address spaces
- This saves RAM across the entire system

### 9.2.3 Supports Security: ASLR

PIC enables **Address Space Layout Randomization (ASLR)** — a security technique that randomizes where the OS loads code, libraries, stack, and heap on every execution.

```
Run 1:  code at 0x7f3a..., heap at 0x55c3...
Run 2:  code at 0x7fb9..., heap at 0x5601...
```

Without PIC, ASLR is impossible — the code would break if loaded at a different address. With PIC, the code always works wherever it's placed.

---

## How PIC Works

### 9.3.1 Relative Addressing

Instead of computing `CALL 0x4005d0` (absolute address), PIC computes:
```
CALL [RIP + offset]   ← relative to current instruction pointer
```

The CPU adds `offset` to the current instruction address to find the target. Since both are in the same section, they move together — the offset is always correct.

### 9.3.2 Global Offset Table (GOT)

The **GOT** is a data section that stores the **runtime addresses** of global variables and external functions.

- PIC code references globals **indirectly** via the GOT
- The dynamic linker **fills in** the GOT entries at load time
- Code accesses: `[GOT_base + offset_of_symbol]`

### 9.3.3 Procedure Linkage Table (PLT)

The **PLT** enables **lazy binding** of external function calls:

1. First call to `printf()` → goes through PLT entry → triggers dynamic linker
2. Dynamic linker resolves `printf()` address → stores in GOT
3. PLT entry updated to jump directly to `printf()` next time
4. Future calls → direct jump, no resolver overhead

```
First call:   PLT → resolver → resolves symbol → updates GOT
Later calls:  PLT → GOT (already filled) → function directly
```

---

## PIC Components

| Component | Purpose |
|-----------|---------|
| **Program Counter (PC/RIP)** | Used for relative address calculation |
| **GOT** | Stores runtime addresses of globals and external functions |
| **PLT** | Trampoline for external function calls with lazy binding |
| **Dynamic Linker** | Fills GOT entries and resolves PLT stubs at runtime |

---

## Programming Examples

### Example 1: Compiling a Shared Library with PIC

```c
/* mathlib.c */
int add(int a, int b) {
    return a + b;
}

double power(double base, int exp) {
    double result = 1.0;
    int i;
    for (i = 0; i < exp; i++) result *= base;
    return result;
}
```

```bash
# Step 1: Compile with PIC enabled
gcc -fPIC -c mathlib.c         # position-independent object code

# Step 2: Create shared library
gcc -shared -o libmathlib.so mathlib.o

# The resulting libmathlib.so:
# - Can be loaded at ANY address in virtual memory
# - Multiple processes can share the same physical pages
# - Required for ASLR to work
```

---

### Example 2: Using a PIC Shared Library

```c
/* main.c */
#include <stdio.h>
int add(int, int);
double power(double, int);

int main() {
    printf("3 + 5  = %d\n",      add(3, 5));        /* 8    */
    printf("2^10   = %.0f\n",    power(2.0, 10));   /* 1024 */
    return 0;
}
```

```bash
gcc -o app main.c -L. -lmathlib
export LD_LIBRARY_PATH=.
./app
```

The library is loaded at a different virtual address each run if ASLR is enabled, but executes correctly every time thanks to PIC.

---

### Example 3: Global Variable Access via GOT

```c
/* data.c — global variable in a shared library */
int globalValue = 42;

int getGlobal() {
    return globalValue;   /* PIC: accessed via GOT, not absolute address */
}
```

**How PIC accesses `globalValue`:**
1. `getGlobal()` code does: `mov [RIP+offset_to_GOT_entry], RAX`
2. GOT entry for `globalValue` contains its actual runtime address
3. Dynamic linker filled the GOT entry at load time
4. Works at any load address ✅

---

### Example 4: Lazy Binding via PLT

```c
#include <stdio.h>

int main() {
    puts("Hello, PIC!");    /* external function — goes through PLT */
    puts("Second call");    /* PLT jumps directly to puts() this time */
    return 0;
}
```

```
First call to puts():
  main → PLT[puts] → resolver → fills GOT[puts] with actual address
                                → calls puts()

Second call to puts():
  main → PLT[puts] → GOT[puts] (already filled) → calls puts() directly
```

**Benefit:** Programs that import but never call certain functions never pay the resolution cost.

---

### Example 5: PIC vs Non-PIC Compilation Comparison

```bash
# Non-PIC compilation (cannot be used in shared library)
gcc -c example.c                   # produces example.o (non-PIC)

# PIC compilation (suitable for shared libraries)
gcc -fPIC -c example.c             # produces example.o (PIC)

# Check difference in generated code
objdump -d example.o               # non-PIC: may use absolute addresses
```

| Feature | Non-PIC | PIC |
|---------|---------|-----|
| Memory flexibility | Low (fixed addresses) | High (any address) |
| Suitable for .so | No | Yes |
| ASLR support | No | Yes |
| Security | Limited | Strong |
| Slight runtime overhead | No | Yes (indirect via GOT/PLT) |

---

## Advantages and Disadvantages

<div class="cp-comparison">
<div class="cp-comparison-left">
<h5>✅ Advantages</h5>

- Memory efficient — multiple processes share library
- Required for shared libraries
- Enables ASLR security
- Makes shared updates possible
</div>
<div class="cp-comparison-right">
<h5>⚠️ Disadvantages</h5>

- Slight runtime performance overhead (GOT/PLT indirection)
- More complex code generation by compiler
- Slightly larger code for PLT stubs
</div>
</div>

---

## Practice Problems

<details>
<summary>🧩 Practice 1 — Why PIC?</summary>

**Question:** Explain why a shared library compiled without `-fPIC` cannot be safely shared between two processes.

**Answer:**

Without `-fPIC`, the compiler generates code with **absolute addresses** hardcoded into the machine instructions. For example, a function call might be `CALL 0x4005d0`.

If Process A loads the library at address `0x7f00...` and Process B loads it at `0x7fa0...`, the hardcoded address `0x4005d0` is wrong for both. The code can only safely work at one specific address.

To share the library's physical pages in RAM between multiple processes (which map it at different virtual addresses), the code **must** compute addresses relative to its current location — which is exactly what `-fPIC` does. The same machine code then works correctly regardless of where it is mapped.

</details>

<details>
<summary>🧩 Practice 2 — Trace the GOT</summary>

**Question:** A PIC shared library has a global variable `int errorCode = 0`. List the steps for how PIC code accesses it.

**Answer:**

1. The compiler generates code like: `mov [RIP + GOT_offset], rax` — a PC-relative reference to the GOT
2. At link time, a GOT entry slot is reserved for `errorCode`
3. When the program runs and the library is loaded at some address X:
   - The dynamic linker computes the actual runtime address of `errorCode`
   - Fills in the GOT entry: `GOT[errorCode] = X + offset_of_errorCode`
4. When `getErrorCode()` runs, it reads from the GOT entry, gets the correct address
5. The code works correctly regardless of load address

</details>

<details>
<summary>🧩 Practice 3 — Steps to Build PIC Library</summary>

**Problem:** List the complete steps to build and use a shared library `libfilter.so` from `filter.c`.

```bash
# Step 1: Compile with PIC
gcc -fPIC -c filter.c             # produces filter.o

# Step 2: Create shared library
gcc -shared -o libfilter.so filter.o

# Step 3: Compile application  
gcc app.c -L. -lfilter -o app

# Step 4: Set library path (development environment)
export LD_LIBRARY_PATH=.

# Step 5: (Optional) Install system-wide
sudo cp libfilter.so /usr/local/lib/
sudo ldconfig                      # update linker cache

# Step 6: Run
./app
```

</details>
