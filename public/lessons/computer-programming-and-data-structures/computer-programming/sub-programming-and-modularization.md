# 11. Sub-Programming and Modularization

## The Concept of Modular Programming

**Modular programming** is the practice of dividing a program into separate, independently developed and tested components called **modules** (or **functions** in C). Each module has a single, well-defined responsibility.

<div class="cp-definition">

#### Benefits of Modular Programming

- **Reusability** — Write once, call many times; share across programs
- **Maintainability** — Fix or update one module without touching others
- **Readability** — Short, focused functions are easier to understand
- **Testability** — Test each function in isolation before integrating
- **Collaboration** — Different programmers can work on different modules simultaneously

</div>

---

## Functions in C

A **function** is a named, reusable block of code that performs a specific task and optionally returns a result.

### Function Structure

```c
returnType functionName(parameter1Type parameter1, ...) {
    /* function body */
    return value;  /* if returnType is not void */
}
```

### Complete Example

```c
#include <stdio.h>

/* ---- Function Declarations (Prototypes) ---- */
float calculateArea(float radius);
void  displayResult(float area);
int   isValidRadius(float r);

/* ---- Main Function ---- */
int main() {
    float radius, area;

    printf("Enter radius: ");
    scanf("%f", &radius);

    if (!isValidRadius(radius)) {
        printf("Error: radius must be positive.\n");
        return 1;
    }

    area = calculateArea(radius);
    displayResult(area);

    return 0;
}

/* ---- Function Definitions ---- */
float calculateArea(float radius) {
    return 3.14159265f * radius * radius;
}

void displayResult(float area) {
    printf("Area = %.4f sq. units\n", area);
}

int isValidRadius(float r) {
    return r > 0;
}
```

---

## Function Prototypes

A **prototype** declares the function's signature before its definition, allowing the compiler to validate calls:

```c
/* Prototype — tells compiler about the function */
int add(int a, int b);

int main() {
    printf("%d\n", add(3, 5));  /* compiler can validate this call */
    return 0;
}

/* Definition — actual implementation */
int add(int a, int b) {
    return a + b;
}
```

---

## Parameter Passing Techniques

### Call-by-Value (default in C)

The function receives a **copy** of the argument. Changes inside the function do NOT affect the original variable.

```c
#include <stdio.h>

/* Receives a COPY of x — cannot change the original */
void tryToDouble(int x) {
    x = x * 2;
    printf("Inside function: x = %d\n", x);
}

int main() {
    int num = 10;
    tryToDouble(num);
    printf("After function: num = %d\n", num);  /* Still 10! */
    return 0;
}
```
**Output:**
```
Inside function: x = 20
After function: num = 10
```

### Call-by-Reference (using pointers)

The function receives the **memory address** of the variable and can modify the original:

```c
#include <stdio.h>

/* Receives the ADDRESS of x — can change the original */
void doubleIt(int *x) {
    *x = *x * 2;  /* dereference the pointer to change the value */
}

void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int num = 10;
    doubleIt(&num);
    printf("After doubleIt: %d\n", num);  /* 20 — original changed! */

    int x = 5, y = 8;
    swap(&x, &y);
    printf("After swap: x=%d, y=%d\n", x, y);  /* x=8, y=5 */

    return 0;
}
```

<div class="cp-comparison">
<div class="cp-comparison-left">
<h5>✅ Call-by-Value</h5>

- Safer — original protected
- Use when you only need to READ the input
- Default in C for scalar types
</div>
<div class="cp-comparison-right">
<h5>⚠️ Call-by-Reference</h5>

- Function CAN modify original
- Use when you need to return multiple values OR modify the input
- Requires pointers (`*`, `&`)
</div>
</div>

---

## Scope of Variables

**Scope** refers to the region of code where a variable is accessible.

### Local Variables

Declared inside a function or block — only accessible within that block:

```c
#include <stdio.h>

void functionA() {
    int x = 10;  /* local to functionA */
    printf("functionA: x = %d\n", x);
}

void functionB() {
    /* printf("%d", x);  ERROR — x is not visible here! */
    int x = 99;  /* different x, local to functionB */
    printf("functionB: x = %d\n", x);
}
```

### Global Variables

Declared outside all functions — accessible everywhere (use sparingly!):

```c
#include <stdio.h>

int globalCount = 0;  /* global — visible to all functions */

void increment() {
    globalCount++;
}

int main() {
    increment();
    increment();
    increment();
    printf("Count: %d\n", globalCount);  /* 3 */
    return 0;
}
```

<div class="cp-warning">

⚠️ **Avoid global variables where possible.** They make programs harder to understand, test, and debug because any function can change them unexpectedly.

</div>

### Static Local Variables

Retain their value between function calls:

```c
#include <stdio.h>

void countCalls() {
    static int calls = 0;  /* initialized once, persists */
    calls++;
    printf("This function has been called %d time(s)\n", calls);
}

int main() {
    countCalls();  /* 1 */
    countCalls();  /* 2 */
    countCalls();  /* 3 */
    return 0;
}
```

---

## Recursive Functions

A function that calls itself to solve a smaller version of the same problem:

```c
#include <stdio.h>

/* Recursive factorial */
long factorial(int n) {
    if (n <= 1) return 1;    /* base case */
    return n * factorial(n - 1);  /* recursive case */
}

/* Recursive Fibonacci */
int fibonacci(int n) {
    if (n <= 0) return 0;    /* base case 1 */
    if (n == 1) return 1;    /* base case 2 */
    return fibonacci(n-1) + fibonacci(n-2);  /* recursive case */
}

int main() {
    printf("5! = %ld\n", factorial(5));     /* 120 */
    printf("fib(7) = %d\n", fibonacci(7)); /* 13 */
    return 0;
}
```

<div class="cp-note">

📌 Every recursive function must have:
1. A **base case** — the stopping condition
2. A **recursive case** — call itself with a simpler version of the problem

Without a base case, you get infinite recursion and a **stack overflow**.

</div>

---

## Practice Problems

<details>
<summary>🧩 Practice 1 — Write a Function</summary>

**Problem:** Write a C function `power(base, exp)` that calculates `base^exp` using a loop (no library functions). Then test it in main.

```c
#include <stdio.h>

long power(int base, int exp) {
    long result = 1;
    int i;
    for (i = 0; i < exp; i++)
        result *= base;
    return result;
}

int main() {
    printf("2^10 = %ld\n", power(2, 10));  /* 1024 */
    printf("3^4  = %ld\n", power(3, 4));   /* 81 */
    printf("5^0  = %ld\n", power(5, 0));   /* 1 */
    return 0;
}
```

</details>

<details>
<summary>🧩 Practice 2 — Call-by-Reference</summary>

**Problem:** Write a function `minMax(arr, n, *min, *max)` that finds both the minimum and maximum values in an array and returns them via pointer parameters.

```c
#include <stdio.h>

void minMax(int arr[], int n, int *min, int *max) {
    *min = arr[0];
    *max = arr[0];
    int i;
    for (i = 1; i < n; i++) {
        if (arr[i] < *min) *min = arr[i];
        if (arr[i] > *max) *max = arr[i];
    }
}

int main() {
    int arr[] = {45, 12, 78, 3, 56, 90, 23};
    int n = 7, mn, mx;

    minMax(arr, n, &mn, &mx);
    printf("Min = %d, Max = %d\n", mn, mx);  /* Min=3, Max=90 */
    return 0;
}
```

</details>

<details>
<summary>🧩 Practice 3 — Recursion</summary>

**Problem:** Write a recursive function to compute the GCD (Greatest Common Divisor) of two numbers using the Euclidean algorithm: `gcd(a, b) = gcd(b, a % b)`.

```c
#include <stdio.h>

int gcd(int a, int b) {
    if (b == 0) return a;          /* base case */
    return gcd(b, a % b);          /* recursive case */
}

int main() {
    printf("GCD(48, 18) = %d\n", gcd(48, 18));  /* 6 */
    printf("GCD(100, 75)= %d\n", gcd(100, 75)); /* 25 */
    printf("GCD(17, 5)  = %d\n", gcd(17, 5));   /* 1 */
    return 0;
}
```

</details>
