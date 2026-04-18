# 16. Writing Correct and Efficient Programs

## Program Correctness

A program is **correct** if it produces the right output for all valid inputs and handles invalid inputs gracefully. Correctness has three levels:

<div class="cp-definition">

| Level | Description |
|-------|-------------|
| **Partial Correctness** | If the program terminates, it gives correct output |
| **Total Correctness** | The program always terminates AND gives correct output |
| **Robustness** | The program handles invalid/unexpected inputs without crashing |

</div>

### Verification Techniques

**1. Formal Proof** — Mathematically prove the algorithm is correct for all inputs (expensive, used for safety-critical systems).

**2. Testing** — Run with many inputs and verify output (most common practical approach).

**3. Code Review** — Peers read and critique the code.

**4. Assertions** — Embed checks in the code that halt execution if a condition is violated:

```c
#include <stdio.h>
#include <assert.h>

float divide(int a, int b) {
    assert(b != 0);  /* Program terminates with error if b is 0 */
    return (float)a / b;
}

int binarySearch(int arr[], int n, int target) {
    assert(n > 0);   /* Must have at least one element */
    int left = 0, right = n - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) return mid;
        if (arr[mid] < target)  left  = mid + 1;
        else                    right = mid - 1;
    }
    return -1;
}
```

---

## Loop Invariants

A **loop invariant** is a condition that is true before the loop starts, after each iteration, and after the loop ends. It's a powerful tool for proving loop correctness.

```c
/* Example: sum = (i*(i-1))/2 is the loop invariant */
int sum = 0;
int i;
for (i = 1; i <= n; i++) {
    /* Invariant: sum = 1 + 2 + ... + (i-1) before this iteration */
    sum += i;
    /* Invariant: sum = 1 + 2 + ... + i after this iteration */
}
/* After loop: sum = 1 + 2 + ... + n = n*(n+1)/2 ✓ */
```

---

## Efficiency Considerations

A program can be correct but still unusable if it is too slow or uses too much memory. Efficiency = using the minimum necessary resources.

<div class="cp-definition">

#### Two Dimensions of Efficiency

- **Time efficiency** — How fast does it run? (measured in operations, not seconds)
- **Space efficiency** — How much memory does it use?

</div>

### Avoiding Common Inefficiencies

**1. Repeated computation inside a loop:**
```c
/* BAD — strlen() called on every iteration! O(n²) */
for (i = 0; i < strlen(str); i++) { ... }

/* GOOD — compute once outside the loop O(n) */
int len = strlen(str);
for (i = 0; i < len; i++) { ... }
```

**2. Unnecessary memory:**
```c
/* BAD — allocating huge array when only 5 elements used */
int bigArray[1000000];
/* ... only uses 5 elements */

/* GOOD — only allocate what you need */
int smallArray[5];
```

**3. Wrong algorithm choice:**
```c
/* BAD for large n — Bubble Sort O(n²) */
void bubbleSort(int arr[], int n) { /* O(n²) */
    int i, j, temp;
    for (i = 0; i < n-1; i++)
        for (j = 0; j < n-i-1; j++)
            if (arr[j] > arr[j+1]) {
                temp=arr[j]; arr[j]=arr[j+1]; arr[j+1]=temp;
            }
}

/* GOOD for large n — a single-pass improvement within Bubble Sort: early exit */
void optimizedBubble(int arr[], int n) {
    int i, j, temp, swapped;
    for (i = 0; i < n-1; i++) {
        swapped = 0;
        for (j = 0; j < n-i-1; j++)
            if (arr[j] > arr[j+1]) {
                temp=arr[j]; arr[j]=arr[j+1]; arr[j+1]=temp;
                swapped = 1;
            }
        if (!swapped) break;  /* already sorted — stop early */
    }
}
```

---

## Optimization Techniques

### 1. Use Math Formulas Instead of Loops

```c
/* Loop: O(n) */
int sum = 0;
for (int i = 1; i <= n; i++) sum += i;

/* Formula: O(1) — far better for large n */
int sum = n * (n + 1) / 2;
```

### 2. Cache Frequently Accessed Results (Memoization)

```c
/* WITHOUT memoization — recomputes same fib values millions of times */
int fib(int n) {
    if (n <= 1) return n;
    return fib(n-1) + fib(n-2);  /* O(2^n) — terrible */
}

/* WITH memoization — each value computed once */
#define MAXN 100
int memo[MAXN];
int initialized = 0;

int fibMemo(int n) {
    if (!initialized) {
        for (int i = 0; i < MAXN; i++) memo[i] = -1;
        initialized = 1;
    }
    if (n <= 1) return n;
    if (memo[n] != -1) return memo[n];  /* already computed */
    memo[n] = fibMemo(n-1) + fibMemo(n-2);
    return memo[n];
}
```

### 3. Choose the Right Data Structure

| Need | Use | Complexity |
|------|-----|------------|
| Fast lookup by key | Hash Table | O(1) average |
| Sorted data, fast search | Binary Search Tree | O(log n) |
| LIFO access | Stack (array-based) | O(1) push/pop |
| FIFO access | Queue (array-based) | O(1) enqueue/dequeue |
| Frequent insertion/deletion | Linked List | O(1) at known position |

### 4. Integer vs Float Arithmetic

```c
/* Integer arithmetic is FASTER than float arithmetic */
int  intResult  = 5 + 3;      /* fast */
float floatResult = 5.0f + 3.0f; /* slightly slower */

/* Use float only when you actually need decimal precision */
```

---

## Practical Optimization: Comparison

Below: an unoptimized vs optimized prime-checking function:

```c
#include <stdio.h>
#include <math.h>

/* Version 1: Check all divisors up to n — O(n) */
int isPrime_v1(int n) {
    if (n < 2) return 0;
    int i;
    for (i = 2; i < n; i++)          /* check up to n-1 */
        if (n % i == 0) return 0;
    return 1;
}

/* Version 2: Check only up to sqrt(n) — O(√n) */
int isPrime_v2(int n) {
    if (n < 2) return 0;
    if (n == 2) return 1;
    if (n % 2 == 0) return 0;        /* skip even numbers */
    int i;
    for (i = 3; i <= (int)sqrt(n); i += 2)  /* only odd divisors */
        if (n % i == 0) return 0;
    return 1;
}

int main() {
    /* For n = 999,983 (a large prime): */
    /* v1: checks ~999,981 divisors */
    /* v2: checks only ~707 divisors — ~1,400x faster! */

    printf("999983 prime (v1)? %d\n", isPrime_v1(999983));
    printf("999983 prime (v2)? %d\n", isPrime_v2(999983));
    return 0;
}
```

---

## Practice Problems

<details>
<summary>🧩 Practice 1 — Find the Bug</summary>

**Problem:** This function is supposed to count how many values in the array are greater than `threshold`. Find and fix the bug.

```c
/* BUGGY */
int countAbove(int arr[], int n, int threshold) {
    int count;  /* uninitialized! */
    int i;
    for (i = 0; i <= n; i++) {  /* off-by-one: should be i < n */
        if (arr[i] > threshold)
            count++;  /* count is uninitialized = undefined behavior */
    }
    return count;
}
```

**Fixed version:**
```c
int countAbove(int arr[], int n, int threshold) {
    int count = 0;  /* initialize to 0 */
    int i;
    for (i = 0; i < n; i++) {   /* correct: i < n */
        if (arr[i] > threshold)
            count++;
    }
    return count;
}
```

**Bugs found:**
1. `count` not initialized (undefined behavior)
2. Loop condition `i <= n` reads `arr[n]` which is out-of-bounds

</details>

<details>
<summary>🧩 Practice 2 — Optimize This Code</summary>

**Problem:** Optimize this code that calculates the sum of squares from 1 to n:

```c
/* Slow version */
long sumOfSquares(int n) {
    long sum = 0;
    int i;
    for (i = 1; i <= n; i++)
        sum += i * i;
    return sum;
}
```

**Optimized version (O(1) formula):**
```c
/* The sum of squares 1²+2²+...+n² = n*(n+1)*(2n+1)/6 */
long sumOfSquares_fast(int n) {
    return (long)n * (n + 1) * (2 * n + 1) / 6;
}
```

For n = 1,000,000: the loop runs a million iterations; the formula computes in 1 step.

</details>

<details>
<summary>🧩 Practice 3 — Correctness Analysis</summary>

**Problem:** Is this function totally correct, partially correct, or incorrect? Explain.

```c
int absoluteValue(int n) {
    if (n >= 0) return n;
    return -n;
}
```

**Analysis:**

- **Positive inputs** (n = 5): returns 5 ✅
- **Zero** (n = 0): returns 0 ✅
- **Negative inputs** (n = -7): returns 7 ✅
- **INT_MIN** (n = -2147483648): `-n` overflows! Returns -2147483648 (same value) ❌

**Verdict:** Partially correct — fails for `INT_MIN` due to integer overflow.

**Fix:**
```c
#include <limits.h>
int absoluteValue(int n) {
    if (n == INT_MIN) return INT_MAX;  /* handle overflow case */
    if (n >= 0) return n;
    return -n;
}
```

</details>
