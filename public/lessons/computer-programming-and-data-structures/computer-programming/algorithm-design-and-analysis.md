# 17. Algorithm Design and Analysis

## Why Analyze Algorithms?

Different algorithms can solve the same problem, but their performance can vary dramatically. For n = 1,000,000:

| Algorithm | Operations | Time (approx) |
|-----------|-----------|--------------|
| Binary Search | ~20 | Instant |
| Merge Sort | ~20,000,000 | < 1 second |
| Bubble Sort | ~10¹² | Hours |

Choosing the right algorithm is often more impactful than any hardware upgrade.

---

## Big-O Notation

**Big-O notation** describes how an algorithm's resource usage (time or space) grows as input size n grows — in the worst case.

<div class="cp-definition">

#### Common Complexity Classes (best to worst)

| Notation | Name | n = 100 | n = 1,000 | n = 1,000,000 |
|----------|------|---------|-----------|----------------|
| O(1) | Constant | 1 | 1 | 1 |
| O(log n) | Logarithmic | 7 | 10 | 20 |
| O(n) | Linear | 100 | 1,000 | 1,000,000 |
| O(n log n) | Linearithmic | 664 | 9,966 | 20,000,000 |
| O(n²) | Quadratic | 10,000 | 1,000,000 | 10¹² |
| O(2ⁿ) | Exponential | 2¹⁰⁰ | 2¹⁰⁰⁰ | impossible |
| O(n!) | Factorial | 10¹⁵⁷ | impossible | impossible |

</div>

<div class="cp-tip">

🎯 **Practical target:** Aim for O(n log n) or better for most problems. O(n²) acceptable for small inputs (n < 1000). O(2ⁿ) or worse is usually unacceptable for n > 30.

</div>

---

## Analyzing Algorithm Complexity

### Rules for Big-O Analysis

1. **Drop constants:** O(2n) → O(n)
2. **Drop lower-order terms:** O(n² + n + 5) → O(n²)
3. **Nested loops multiply:** two nested loops → O(n²)
4. **Sequential code adds:** O(n) + O(n²) → O(n²)
5. **Divide and conquer with splitting in half:** T(n) = 2T(n/2) + O(n) → O(n log n)

### Code Examples with Complexity Analysis

**O(1) — Constant:**
```c
int getFirst(int arr[]) {
    return arr[0];  /* Always one operation, regardless of array size */
}  /* T(n) = O(1) */
```

**O(n) — Linear:**
```c
int sumArray(int arr[], int n) {
    int sum = 0, i;
    for (i = 0; i < n; i++)   /* n iterations */
        sum += arr[i];          /* O(1) work each */
    return sum;
}  /* T(n) = O(n) */
```

**O(n²) — Quadratic:**
```c
void bubbleSort(int arr[], int n) {
    int i, j, temp;
    for (i = 0; i < n - 1; i++) {          /* n iterations */
        for (j = 0; j < n - i - 1; j++) {  /* up to n iterations */
            if (arr[j] > arr[j+1]) {
                temp=arr[j]; arr[j]=arr[j+1]; arr[j+1]=temp;
            }
        }
    }
}  /* T(n) = O(n²) — n × n nested loops */
```

**O(log n) — Logarithmic:**
```c
int binarySearch(int arr[], int n, int target) {
    int left = 0, right = n - 1;
    while (left <= right) {        /* halves the search space each time */
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) return mid;
        if (arr[mid] < target)  left  = mid + 1;
        else                    right = mid - 1;
    }
    return -1;
}  /* T(n) = O(log n) — search space halves each iteration */
```

**O(n log n) — Merge Sort:**
```c
/* Merge Sort — divides array in half, sorts each half, merges */
/* T(n) = 2T(n/2) + O(n)  →  O(n log n) by Master Theorem */
void merge(int arr[], int l, int m, int r) {
    int n1 = m - l + 1, n2 = r - m;
    int L[n1], R[n2], i, j, k;

    for (i = 0; i < n1; i++) L[i] = arr[l + i];
    for (j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

    i = 0; j = 0; k = l;
    while (i < n1 && j < n2)
        arr[k++] = (L[i] <= R[j]) ? L[i++] : R[j++];
    while (i < n1) arr[k++] = L[i++];
    while (j < n2) arr[k++] = R[j++];
}

void mergeSort(int arr[], int l, int r) {
    if (l < r) {
        int m = l + (r - l) / 2;
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}
```

---

## Recurrence Relations

Recursive algorithms are analyzed using **recurrence relations**.

### Fibonacci Recurrence

```
T(n) = T(n-1) + T(n-2) + O(1)    →  O(2ⁿ) — exponential!

Proof: each call makes 2 more calls, branching like a binary tree
```

**The solution:** Use iteration or memoization to reduce to O(n):

```c
/* O(2^n) — exponential (bad for large n) */
int fibRecursive(int n) {
    if (n <= 1) return n;
    return fibRecursive(n-1) + fibRecursive(n-2);
}

/* O(n) — linear (iterative version) */
long fibIterative(int n) {
    if (n <= 1) return n;
    long a = 0, b = 1, c;
    int i;
    for (i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}
```

### Master Theorem (simplified)

For `T(n) = aT(n/b) + O(nᵏ)`:

| Condition | Result |
|-----------|--------|
| log_b(a) > k | O(n^log_b(a)) |
| log_b(a) = k | O(nᵏ log n) |
| log_b(a) < k | O(nᵏ) |

**Merge Sort:** a=2, b=2, k=1 → log₂(2) = 1 = k → **O(n log n)** ✅  
**Binary Search:** a=1, b=2, k=0 → log₂(1) = 0 = k → **O(log n)** ✅

---

## Space Complexity

Space complexity measures how much **extra memory** an algorithm uses beyond the input.

```c
/* O(1) space — only a few variables regardless of n */
int sumArray(int arr[], int n) {
    int sum = 0, i;
    for (i = 0; i < n; i++) sum += arr[i];
    return sum;
}

/* O(n) space — allocates a new array proportional to n */
void copyArray(int src[], int dst[], int n) {
    int i;
    for (i = 0; i < n; i++) dst[i] = src[i];
    /* dst needs n integers of space */
}

/* O(n) space — merge sort needs an extra O(n) temporary array */
/* O(log n) space — recursive calls use stack frames O(log n) deep */
```

---

## Algorithm Comparison Table

| Algorithm | Best | Average | Worst | Space |
|-----------|------|---------|-------|-------|
| Bubble Sort | O(n) | O(n²) | O(n²) | O(1) |
| Selection Sort | O(n²) | O(n²) | O(n²) | O(1) |
| Insertion Sort | O(n) | O(n²) | O(n²) | O(1) |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) |
| Quick Sort | O(n log n) | O(n log n) | O(n²) | O(log n) |
| Binary Search | O(1) | O(log n) | O(log n) | O(1) |
| Linear Search | O(1) | O(n) | O(n) | O(1) |

---

## Practice Problems

<details>
<summary>🧩 Practice 1 — Determine Complexity</summary>

**Problem:** What is the time complexity of each function?

```c
/* A */
void f1(int n) {
    for (int i = 0; i < n; i++)
        for (int j = i; j < n; j++)
            printf("%d %d\n", i, j);
}

/* B */
void f2(int n) {
    int i = n;
    while (i > 1)
        i = i / 3;
}

/* C */
void f3(int n) {
    for (int i = 0; i < n; i++)   /* O(n) */
        printf("%d ", i);
    for (int i = 0; i < n; i++)   /* O(n) */
        for (int j = 0; j < n; j++)  /* O(n) */
            printf("%d ", i+j);
}
```

**Answers:**

- **A:** O(n²) — The inner loop runs n + (n-1) + ... + 1 = n(n+1)/2 times → O(n²)
- **B:** O(log₃ n) = O(log n) — i is divided by 3 each iteration
- **C:** O(n²) — O(n) + O(n²) = O(n²) (drop lower order terms)

</details>

<details>
<summary>🧩 Practice 2 — Recurrence</summary>

**Problem:** Solve this recurrence for Merge Sort using the Master Theorem:

**T(n) = 2T(n/2) + n**

- a = 2, b = 2, f(n) = n → k = 1
- log_b(a) = log₂(2) = **1**
- Since log_b(a) = k = 1 → **Case 2: T(n) = O(n log n)**

**Verification:** Merge Sort indeed runs in O(n log n) on all inputs. ✅

</details>

<details>
<summary>🧩 Practice 3 — Choose the Best Algorithm</summary>

**Scenario:** You have 1,000,000 student records already sorted by ID number. You need to search for a specific student 500 times.

**Which search algorithm should you use and why?**

**Answer:**

Use **Binary Search** — O(log n) per search.

- Linear Search: 500 × 1,000,000 = 500,000,000 operations
- Binary Search: 500 × log₂(1,000,000) ≈ 500 × 20 = 10,000 operations

Binary search is ~50,000x faster in this scenario. Since the data is already sorted, there is no reason to use linear search.

</details>
