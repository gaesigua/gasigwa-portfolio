# 22. Extensive Analysis of Computer Algorithms

## Introduction

**Algorithm analysis** is the process of determining the **efficiency** of an algorithm — specifically how its performance (time and memory) scales as the input size grows. This knowledge helps us choose the right algorithm for a given problem and predict behavior under real-world conditions.

<div class="cp-definition">

#### Why Analyze Algorithms?

| Reason | Explanation |
|--------|-------------|
| **Compare solutions** | Two correct algorithms may differ dramatically in speed |
| **Predict scalability** | Understand performance at scale (n=10 vs n=10,000,000) |
| **Optimize systems** | Identify bottlenecks and improve them |
| **Make design decisions** | Choose between trade-offs (time vs space) |

</div>

---

## Time Complexity Analysis

**Time complexity** describes how an algorithm's **running time** grows as a function of input size **n**.

### 22.1.1 Cases of Time Complexity

| Case | Definition | Symbol |
|------|------------|--------|
| **Best Case** | Minimum time needed (most favorable input) | Ω (Omega) |
| **Average Case** | Expected time for typical input | Θ (Theta) |
| **Worst Case** | Maximum time (most unfavorable input) | O (Big-O) |

<div class="cp-definition">

**We typically analyze worst-case behavior** because it gives a guaranteed upper bound.

</div>

---

### 22.1.2 Big-O Notation

Big-O (O) expresses an **upper bound** on the growth rate of an algorithm's time or space requirements.

**Key rules:**
- Drop constants: O(5n) = O(n)
- Drop lower-order terms: O(n² + n) = O(n²)
- O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ) < O(n!)

#### Growth Rate Hierarchy

| Big-O | Name | Example |
|-------|------|---------|
| **O(1)** | Constant | Array access: `arr[5]` |
| **O(log n)** | Logarithmic | Binary search |
| **O(n)** | Linear | Linear search, single loop |
| **O(n log n)** | Linearithmic | Merge sort, Quick sort (average) |
| **O(n²)** | Quadratic | Bubble/Insertion sort, nested loops |
| **O(n³)** | Cubic | Triple-nested loops |
| **O(2ⁿ)** | Exponential | Recursive Fibonacci, brute force |
| **O(n!)** | Factorial | Brute force permutations |

---

## Space Complexity Analysis

**Space complexity** measures how much **extra memory** an algorithm uses relative to input size.

| Algorithm | Space Complexity | Reason |
|-----------|----------------|--------|
| Linear search | O(1) | No extra array; just a loop variable |
| Merge sort | O(n) | Temporary arrays for merging |
| Recursive factorial | O(n) | n stack frames |
| Bubble sort | O(1) | In-place swapping only |

---

## Complexity Analysis of Common Algorithms

### 22.3.1 Searching Algorithms

#### Linear Search

```python
def linear_search(arr, target):
    for i in range(len(arr)):   # executes n times
        if arr[i] == target:
            return i
    return -1
```

| Case | Time | Reason |
|------|------|--------|
| **Best** | O(1) | Target is first element |
| **Average** | O(n/2) = O(n) | Target in middle on average |
| **Worst** | O(n) | Target is last, or not in array |

**Space:** O(1)

---

#### Binary Search

```python
def binary_search(arr, target):
    low, high = 0, len(arr) - 1
    while low <= high:          # executes log₂(n) times
        mid = (low + high) // 2
        if arr[mid] == target: return mid
        elif arr[mid] < target: low  = mid + 1
        else:                   high = mid - 1
    return -1
```

| Case | Time | Reason |
|------|------|--------|
| **Best** | O(1) | Target is the middle element |
| **Average** | O(log n) | Halves the range each step |
| **Worst** | O(log n) | Keeps halving until not found |

**Space:** O(1) (iterative) or O(log n) (recursive stack)

---

### 22.3.2 Sorting Algorithms

#### Bubble Sort

```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):            # outer: n times
        for j in range(0, n-i-1): # inner: n-i-1 times
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
```

| Case | Time | Reason |
|------|------|--------|
| **Best** | O(n) | Already sorted — optimized version exits early |
| **Average** | O(n²) | n × n/2 comparisons |
| **Worst** | O(n²) | Reverse-sorted: every pair swaps |

**Space:** O(1)

---

#### Merge Sort

| Case | Time | Reason |
|------|------|--------|
| **Best** | O(n log n) | Always divides in half |
| **Average** | O(n log n) | log n levels × n merge work per level |
| **Worst** | O(n log n) | Same — always balanced |

**Space:** O(n)

---

#### Quick Sort

| Case | Time | Reason |
|------|------|--------|
| **Best** | O(n log n) | Pivot splits array evenly |
| **Average** | O(n log n) | Balanced partitions on average |
| **Worst** | O(n²) | Already sorted + poor pivot (always smallest/largest) |

**Space:** O(log n) (recursion stack)

---

### 22.3.3 Data Structure Operations

| Data Structure | Access | Search | Insert | Delete |
|---------------|--------|--------|--------|--------|
| **Array** | O(1) | O(n) | O(n) | O(n) |
| **Singly Linked List** | O(n) | O(n) | O(1) head | O(n) |
| **Stack (array)** | O(n) | O(n) | O(1) push | O(1) pop |
| **Queue (array)** | O(n) | O(n) | O(1) enqueue | O(1) dequeue |
| **Hash Table** | — | O(1) avg | O(1) avg | O(1) avg |
| **BST (balanced)** | O(log n) | O(log n) | O(log n) | O(log n) |
| **BST (unbalanced)** | O(n) | O(n) | O(n) | O(n) |

---

## Programming Examples

### Example 1: Analyzing a Simple Loop (Python)

```python
def sum_elements(arr):
    total = 0                     # O(1) — constant
    for element in arr:           # O(n) — n iterations
        total += element          # O(1) each
    return total                  # O(1)

# Total time complexity: O(n)
# Space: O(1) — no extra arrays
```

---

### Example 2: Two Nested Loops — O(n²)

```python
def find_pair_sum(arr, target):
    for i in range(len(arr)):         # O(n)
        for j in range(i+1, len(arr)): # O(n)
            if arr[i] + arr[j] == target:
                return (arr[i], arr[j])
    return None

# Time: O(n²) — all pairs checked
# Space: O(1)

arr = [1, 4, 7, 2, 9]
print(find_pair_sum(arr, 11))   # (4, 7) or (2, 9)
```

---

### Example 3: Recursive Time Complexity

```python
def factorial(n):
    if n == 0:
        return 1              # O(1) — base case
    return n * factorial(n-1) # T(n) = T(n-1) + O(1)

# Recurrence: T(n) = T(n-1) + 1
# Solve: T(n) = n × O(1) = O(n)
# Space: O(n) — n stack frames
```

---

### Example 4: Merge Sort Complexity with Master Theorem

**Master Theorem** solves recurrences of the form: `T(n) = a·T(n/b) + f(n)`

**Merge Sort:** `T(n) = 2·T(n/2) + O(n)`

- `a=2`, `b=2`, `f(n)=n`
- `log_b(a) = log₂(2) = 1`
- `f(n) = n = O(n^1)` — matches `n^log_b(a)` → Case 2
- **Result: T(n) = O(n log n)** ✅

---

### Example 5: Comparing Algorithms Empirically (Python)

```python
import time
import random

def time_algorithm(algo, arr):
    start    = time.time()
    algo(arr[:])    # copy so original is unchanged
    end      = time.time()
    return round((end - start) * 1000, 3)    # milliseconds

def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]

def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        L, R = arr[:mid], arr[mid:]
        merge_sort(L); merge_sort(R)
        i = j = k = 0
        while i < len(L) and j < len(R):
            if L[i] < R[j]: arr[k] = L[i]; i += 1
            else:            arr[k] = R[j]; j += 1
            k += 1
        arr[k:] = L[i:] or R[j:]

sizes = [100, 500, 1000]
for n in sizes:
    arr = [random.randint(1, 1000) for _ in range(n)]
    t_bubble = time_algorithm(bubble_sort, arr)
    t_merge  = time_algorithm(merge_sort, arr)
    print(f"n={n}: Bubble={t_bubble}ms | Merge={t_merge}ms")
```

**Typical output:**
```
n=100:  Bubble=0.5ms  | Merge=0.1ms
n=500:  Bubble=15ms   | Merge=0.8ms
n=1000: Bubble=60ms   | Merge=2ms
```

As n doubles: bubble sort time quadruples (O(n²)); merge sort roughly doubles (O(n log n)).

---

## Master Algorithm Complexity Reference

### Sorting

| Algorithm | Best | Average | Worst | Space | When to Use |
|-----------|------|---------|-------|-------|-------------|
| **Bubble Sort** | O(n) | O(n²) | O(n²) | O(1) | Small or nearly sorted |
| **Selection Sort** | O(n²) | O(n²) | O(n²) | O(1) | Small arrays |
| **Insertion Sort** | O(n) | O(n²) | O(n²) | O(1) | Nearly sorted, small n |
| **Merge Sort** | O(n log n) | O(n log n) | O(n log n) | O(n) | Stability needed, large n |
| **Quick Sort** | O(n log n) | O(n log n) | O(n²) | O(log n) | General purpose, large n |

### Searching

| Algorithm | Best | Average | Worst | Requirement |
|-----------|------|---------|-------|-------------|
| **Linear Search** | O(1) | O(n) | O(n) | None |
| **Binary Search** | O(1) | O(log n) | O(log n) | Sorted array |

### Data Structures

| Structure | Search | Insert | Delete | Space |
|-----------|--------|--------|--------|-------|
| Array | O(n) | O(n) | O(n) | O(n) |
| Linked List | O(n) | O(1) | O(n) | O(n) |
| Stack | O(n) | O(1) | O(1) | O(n) |
| Queue | O(n) | O(1) | O(1) | O(n) |
| BST (balanced) | O(log n) | O(log n) | O(log n) | O(n) |

---

## Practice Problems

<details>
<summary>🧩 Practice 1 — Determine Big-O</summary>

**Problem:** What is the time complexity of each code segment?

```python
# A
for i in range(n):
    print(i)               # O(n)

# B
for i in range(n):
    for j in range(n):
        print(i, j)        # O(n²)

# C
i = n
while i > 1:
    i //= 2                # O(log n)

# D
for i in range(n):
    for j in range(n):
        for k in range(n):
            pass           # O(n³)
```

**Answers:** A=O(n), B=O(n²), C=O(log n), D=O(n³)

</details>

<details>
<summary>🧩 Practice 2 — Algorithm Comparison</summary>

**Problem:** For n=1,000,000, how many operations does each need approximately?

| Algorithm | n=1,000,000 operations |
|-----------|----------------------|
| O(1) | **1** |
| O(log n) | **≈20** (log₂ of 1M ≈ 20) |
| O(n) | **1,000,000** |
| O(n log n) | **≈20,000,000** |
| O(n²) | **1,000,000,000,000** (1 trillion!) |
| O(2ⁿ) | **More than atoms in the universe** |

**Takeaway:** For large n, the difference between O(n log n) and O(n²) is catastrophic — linear sort vs. 50,000× more work!

</details>

<details>
<summary>🧩 Practice 3 — Analyze Recursive Binary Search</summary>

**Problem:** Derive the time complexity of recursive binary search using a recurrence.

```python
def binary_search(arr, target, low, high):
    if low > high:
        return -1           # O(1) base case
    mid = (low + high) // 2
    if arr[mid] == target:
        return mid          # O(1)
    elif arr[mid] < target:
        return binary_search(arr, target, mid+1, high)  # T(n/2)
    else:
        return binary_search(arr, target, low, mid-1)   # T(n/2)
```

**Recurrence:** `T(n) = T(n/2) + O(1)`

**Solve:**
```
T(n) = T(n/2)  + 1
     = T(n/4)  + 1 + 1
     = T(n/8)  + 1 + 1 + 1
     ...
     = T(1)    + log₂(n) = O(log n)
```

**Result: T(n) = O(log n)** — each call halves the search range, and we do O(1) work at each level.

</details>
