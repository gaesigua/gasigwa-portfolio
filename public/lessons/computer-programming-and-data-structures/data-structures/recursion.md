# 18. Recursion

## Definition

**Recursion** is a programming technique in which a **function calls itself** directly or indirectly to solve a problem. The problem is broken into smaller, identical subproblems that are solved recursively.

<div class="cp-definition">

**Key Idea:** Solve a large problem by solving smaller instances of the same problem, until you reach a problem so small it can be solved directly.

</div>

---

## Components of a Recursive Function

Every correct recursive function must have **two essential parts**:

### A. Base Case

- The condition that **stops** the recursion
- Handles the **simplest instance** of the problem directly
- Without it, recursion never ends → **stack overflow**

### B. Recursive Case

- Where the function **calls itself** with a **smaller** or **simpler** input
- Each call moves closer to the base case

### General Form

```c
return_type recursive_function(parameters) {
    if (base_case_condition) {
        return base_value;          /* stop recursion */
    } else {
        return recursive_function(smaller_parameters);  /* recurse */
    }
}
```

---

## How Recursion Uses the Call Stack

Every function call creates a **stack frame** containing local variables and return address. Recursive calls stack up until the base case is hit, then unwind one by one.

```
factorial(4)
  → 4 * factorial(3)
        → 3 * factorial(2)
              → 2 * factorial(1)
                    → 1 * factorial(0)
                          → 1  ← BASE CASE
                    ← 1 * 1 = 1
              ← 2 * 1 = 2
        ← 3 * 2 = 6
  ← 4 * 6 = 24
```

---

## Applications of Recursion

| Application | Example |
|-------------|---------|
| **Mathematical computation** | Factorial, Fibonacci, GCD |
| **Tree traversal** | Inorder, Preorder, Postorder |
| **Sorting** | Merge sort, Quick sort |
| **Searching** | Binary search |
| **Graph algorithms** | DFS, backtracking |
| **Backtracking** | N-Queens, maze solving, Sudoku |

---

## Programming Examples

### Example 1: Factorial (Python & C)

**Python:**

```python
def factorial(n):
    # Base case
    if n == 0:
        return 1
    # Recursive case
    else:
        return n * factorial(n - 1)

print(factorial(5))   # 120
```

**Step-by-step for factorial(5):**
```
factorial(5) = 5 × factorial(4)
factorial(4) = 4 × factorial(3)
factorial(3) = 3 × factorial(2)
factorial(2) = 2 × factorial(1)
factorial(1) = 1 × factorial(0)
factorial(0) = 1          ← BASE CASE
→ 1×1=1 → 2×1=2 → 3×2=6 → 4×6=24 → 5×24=120
```

**C version:**

```c
#include <stdio.h>

int factorial(int n) {
    if (n == 0)
        return 1;           /* base case */
    return n * factorial(n - 1);  /* recursive case */
}

int main() {
    printf("5! = %d\n", factorial(5));   /* 120 */
    printf("0! = %d\n", factorial(0));   /* 1   */
    return 0;
}
```

---

### Example 2: Fibonacci Sequence (Python)

**Fib(n) = Fib(n-1) + Fib(n-2), with Fib(0)=0, Fib(1)=1**

```python
def fibonacci(n):
    if n == 0:       # base case 1
        return 0
    elif n == 1:     # base case 2
        return 1
    else:
        return fibonacci(n-1) + fibonacci(n-2)  # recursive case

print(fibonacci(6))   # 8  (sequence: 0,1,1,2,3,5,8,...)
```

**C version:**

```c
int fibonacci(int n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    return fibonacci(n-1) + fibonacci(n-2);
}

/* Usage: printf("%d\n", fibonacci(7));  → 13 */
```

<div class="cp-warning">

⚠️ **Performance note:** Simple recursive Fibonacci is O(2ⁿ) — exponential! For large n, use memoization or an iterative approach. It illustrates recursion clearly but is not production-efficient.

</div>

---

### Example 3: Sum of a List (Python)

```python
def sum_list(lst):
    # Base case: empty list has sum 0
    if len(lst) == 0:
        return 0
    # Recursive case: head + sum of tail
    else:
        return lst[0] + sum_list(lst[1:])

print(sum_list([1, 2, 3, 4, 5]))   # 15
```

**C version — sum of array elements:**

```c
int sumArray(int arr[], int n) {
    if (n == 0) return 0;              /* base case */
    return arr[n-1] + sumArray(arr, n-1);  /* recursive case */
}

/* Usage:
   int data[] = {1, 2, 3, 4, 5};
   printf("%d\n", sumArray(data, 5));  // 15
*/
```

---

### Example 4: Reverse a String (Python)

```python
def reverse_string(s):
    if len(s) <= 1:
        return s                         # base case
    else:
        return s[-1] + reverse_string(s[:-1])  # last char + reverse of rest

print(reverse_string("HELLO"))   # OLLEH
```

**C version:**

```c
#include <string.h>

void reverseStr(char *str, int start, int end) {
    if (start >= end) return;           /* base case */
    /* Swap characters at start and end */
    char temp   = str[start];
    str[start]  = str[end];
    str[end]    = temp;
    reverseStr(str, start + 1, end - 1); /* recurse inward */
}

/* Usage:
   char word[] = "RECURSION";
   reverseStr(word, 0, strlen(word)-1);
   printf("%s\n", word);   // NOISRUCER
*/
```

---

### Example 5: Binary Search (Python)

```python
def binary_search(arr, target, low, high):
    if low > high:          # base case: not found
        return -1
    mid = (low + high) // 2
    if arr[mid] == target:
        return mid          # base case: found
    elif arr[mid] < target:
        return binary_search(arr, target, mid+1, high)  # search right
    else:
        return binary_search(arr, target, low, mid-1)   # search left

arr = [1, 3, 5, 7, 9]
print(binary_search(arr, 7, 0, len(arr)-1))   # 3 (index of 7)
print(binary_search(arr, 6, 0, len(arr)-1))   # -1 (not found)
```

**C version:**

```c
int binarySearch(int arr[], int target, int low, int high) {
    if (low > high) return -1;    /* base case: not found */
    int mid = (low + high) / 2;
    if (arr[mid] == target)       return mid;   /* found */
    if (arr[mid] < target)        return binarySearch(arr, target, mid+1, high);
    else                          return binarySearch(arr, target, low, mid-1);
}

int main() {
    int arr[] = {1, 3, 5, 7, 9};
    printf("Index of 7: %d\n", binarySearch(arr, 7, 0, 4));  /* 3 */
    printf("Index of 4: %d\n", binarySearch(arr, 4, 0, 4));  /* -1 */
    return 0;
}
```

---

## Recursion vs Iteration

| Aspect | Recursion | Iteration |
|--------|-----------|-----------|
| **Readability** | Often cleaner for hierarchical problems | Clearer for simple loops |
| **Memory** | Each call uses stack frame | Constant memory |
| **Risk** | Stack overflow if base case missing | Often safer |
| **Speed** | Slight overhead per call | Faster in practice |
| **Best for** | Trees, graphs, divide & conquer | Simple counting, streaming |

---

## Advantages and Disadvantages

<div class="cp-comparison">
<div class="cp-comparison-left">
<h5>✅ Advantages</h5>

- Elegant, readable solutions for hierarchical problems
- Naturally models problems defined recursively (trees, math)
- Fewer lines of code for problems like tree traversal
</div>
<div class="cp-comparison-right">
<h5>⚠️ Disadvantages</h5>

- Stack overflow if base case is wrong or depth is too large
- Each call consumes stack memory
- Can be slower than iteration due to function call overhead
</div>
</div>

---

## Practice Problems

<details>
<summary>🧩 Practice 1 — Factorial Trace</summary>

**Problem:** Trace `factorial(4)` showing the call stack and return values.

```
Call stack (building up):            Returning (unwinding):
factorial(4)                         → 4 × 6 = 24
  factorial(3)                       → 3 × 2 = 6
    factorial(2)                     → 2 × 1 = 2
      factorial(1)                   → 1 × 1 = 1
        factorial(0) → 1 ← BASE CASE
```

**Final result:** `factorial(4) = 24`

</details>

<details>
<summary>🧩 Practice 2 — GCD using Recursion</summary>

**Problem:** Implement the GCD (Greatest Common Divisor) using Euclid's algorithm recursively in C.

```c
int gcd(int a, int b) {
    if (b == 0) return a;         /* base case: divisor is 0 */
    return gcd(b, a % b);          /* recursive case: GCD(b, a mod b) */
}

int main() {
    printf("GCD(48, 18) = %d\n", gcd(48, 18));   /* 6 */
    printf("GCD(100, 75) = %d\n", gcd(100, 75)); /* 25 */
    return 0;
}
```

**Trace for GCD(48, 18):**
```
gcd(48, 18) → gcd(18, 48%18=12)
gcd(18, 12) → gcd(12, 18%12=6)
gcd(12, 6)  → gcd(6, 12%6=0)
gcd(6, 0)   → return 6  ← base case
```

</details>

<details>
<summary>🧩 Practice 3 — Tower of Hanoi</summary>

**Problem:** Implement the classic Tower of Hanoi puzzle recursively in C.

**Rules:** Move n disks from source to destination using auxiliary as helper. Never place a larger disk on a smaller one.

```c
#include <stdio.h>

void hanoi(int n, char source, char destination, char auxiliary) {
    if (n == 1) {
        /* Base case: just move one disk */
        printf("Move disk 1 from %c to %c\n", source, destination);
        return;
    }
    /* Step 1: Move n-1 disks from source to auxiliary */
    hanoi(n-1, source, auxiliary, destination);

    /* Step 2: Move the nth disk from source to destination */
    printf("Move disk %d from %c to %c\n", n, source, destination);

    /* Step 3: Move n-1 disks from auxiliary to destination */
    hanoi(n-1, auxiliary, destination, source);
}

int main() {
    hanoi(3, 'A', 'C', 'B');
    return 0;
}
```

**Output for hanoi(3, 'A', 'C', 'B'):**
```
Move disk 1 from A to C
Move disk 2 from A to B
Move disk 1 from C to B
Move disk 3 from A to C
Move disk 1 from B to A
Move disk 2 from B to C
Move disk 1 from A to C
```

Total moves for n disks = 2ⁿ - 1. For n=3: **7 moves**.

</details>
