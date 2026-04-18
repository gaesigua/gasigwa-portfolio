# 21. Divide and Conquer

## Strategy

**Divide and Conquer (D&C)** is a powerful algorithmic paradigm that solves complex problems by:

1. **Divide** — Split the problem into smaller, similar subproblems
2. **Conquer** — Solve each subproblem recursively (or directly if small enough)
3. **Combine** — Merge the solutions of subproblems to produce the final answer

<div class="cp-definition">

#### Key Characteristics

- Typically **recursive** in nature
- Reduces complex problems to simpler, repeatable steps
- Often produces **O(n log n)** algorithms for problems that would otherwise be O(n²)
- Enables **parallelism** — subproblems can sometimes be solved concurrently

</div>

---

## Example Problems

| Algorithm | Divide | Conquer | Combine |
|-----------|--------|---------|---------|
| **Merge Sort** | Split array in half | Recursively sort each half | Merge two sorted halves |
| **Quick Sort** | Partition around pivot | Sort left and right parts | No explicit combine needed |
| **Binary Search** | Find midpoint | Search left or right half | Return result directly |
| **Max Subarray** | Split at midpoint | Find max in each half | Check max crossing middle |
| **Power(x,n)** | Split n in half | Compute smaller powers | Multiply results |

---

## Classic Examples with Code

### Example 1: Merge Sort

**Concept:** Divide array into halves → sort each → merge back.

**Python:**

```python
def merge_sort(arr):
    if len(arr) <= 1:
        return arr          # base case

    mid   = len(arr) // 2
    left  = merge_sort(arr[:mid])    # conquer left
    right = merge_sort(arr[mid:])    # conquer right
    return merge(left, right)        # combine

def merge(left, right):
    result = []
    i = j  = 0
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            result.append(left[i]);  i += 1
        else:
            result.append(right[j]); j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result

arr = [38, 27, 43, 3, 9, 82, 10]
print("Sorted:", merge_sort(arr))   # [3, 9, 10, 27, 38, 43, 82]
```

**Step-by-step for [38, 27, 43, 3]:**
```
Divide:     [38, 27, 43, 3]
            [38, 27] | [43, 3]
             [38]|[27]  [43]|[3]

Conquer:    [38] and [27] → ready (single elements)
            [43] and [3]  → ready

Combine:    merge([38],[27]) = [27, 38]
            merge([43],[3])  = [3, 43]
            merge([27,38],[3,43]) = [3, 27, 38, 43]
```

**C version:**

```c
#include <stdio.h>
#include <stdlib.h>

void merge(int arr[], int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;
    int i, j, k;

    int *L = (int*)malloc(n1 * sizeof(int));
    int *R = (int*)malloc(n2 * sizeof(int));

    for (i = 0; i < n1; i++) L[i] = arr[left + i];
    for (j = 0; j < n2; j++) R[j] = arr[mid + 1 + j];

    i = j = 0;
    k = left;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) arr[k++] = L[i++];
        else               arr[k++] = R[j++];
    }
    while (i < n1) arr[k++] = L[i++];
    while (j < n2) arr[k++] = R[j++];

    free(L); free(R);
}

void mergeSort(int arr[], int left, int right) {
    if (left < right) {
        int mid = (left + right) / 2;
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}
```

---

### Example 2: Quick Sort

**Concept:** Choose a pivot → partition into <pivot and >pivot → recursively sort each part.

**Python:**

```python
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot  = arr[len(arr) // 2]
    left   = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right  = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)

arr = [10, 7, 8, 9, 1, 5]
print("Sorted:", quick_sort(arr))   # [1, 5, 7, 8, 9, 10]
```

**Trace with pivot=8 on [10, 7, 8, 9, 1, 5]:**
```
pivot = 8
left   = [7, 1, 5]  (< 8)
middle = [8]
right  = [10, 9]    (> 8)

Recursively sort:
  quickSort([7,1,5]) → [1,5,7]
  quickSort([10,9])  → [9,10]

Combine: [1,5,7] + [8] + [9,10] = [1,5,7,8,9,10]
```

---

### Example 3: Binary Search

**Concept:** Divide sorted array in half, search the relevant half recursively.

**Python:**

```python
def binary_search(arr, target):
    low, high = 0, len(arr) - 1

    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid           # found
        elif arr[mid] < target:
            low  = mid + 1       # divide: search right
        else:
            high = mid - 1       # divide: search left
    return -1                    # not found

arr    = [1, 3, 5, 7, 9, 11]
target = 7
print(f"Index of {target}:", binary_search(arr, target))   # 3
```

---

### Example 4: Maximum Subarray Sum (D&C)

**Problem:** Find the contiguous subarray with the maximum sum.

```python
def max_crossing_sum(arr, left, mid, right):
    left_sum = float('-inf')
    total    = 0
    for i in range(mid, left - 1, -1):
        total   += arr[i]
        left_sum = max(left_sum, total)

    right_sum = float('-inf')
    total     = 0
    for i in range(mid + 1, right + 1):
        total    += arr[i]
        right_sum = max(right_sum, total)

    return left_sum + right_sum

def max_subarray_sum(arr, left, right):
    if left == right:
        return arr[left]              # base case

    mid = (left + right) // 2
    return max(
        max_subarray_sum(arr, left, mid),        # left half
        max_subarray_sum(arr, mid + 1, right),   # right half
        max_crossing_sum(arr, left, mid, right)  # crossing middle
    )

arr = [-2, -5, 6, -2, -3, 1, 5, -6]
n   = len(arr)
print("Maximum subarray sum:", max_subarray_sum(arr, 0, n - 1))   # 7
```

---

### Example 5: Fast Exponentiation — Power(x, n)

**Problem:** Compute xⁿ efficiently.

**Divide:** Split exponent in half.  
**Conquer:** Compute x^(n/2) recursively.  
**Combine:** Multiply results.

```python
def power(x, n):
    if n == 0:
        return 1              # base case: x^0 = 1
    temp = power(x, n // 2)
    if n % 2 == 0:
        return temp * temp    # even: x^n = (x^(n/2))^2
    else:
        return temp * temp * x  # odd: x^n = (x^(n/2))^2 * x

print(f"2^10 = {power(2, 10)}")    # 1024
print(f"3^8  = {power(3, 8)}")     # 6561
```

**Why it's efficient:** Instead of multiplying 2 ten times (10 multiplications), we only do 4:
```
power(2, 10) → power(2, 5) → power(2, 2) → power(2, 1) → base
4 levels of recursion vs 10 multiplications
Time: O(log n)
```

**C version:**

```c
long long power(long long x, int n) {
    if (n == 0) return 1;
    long long temp = power(x, n / 2);
    if (n % 2 == 0)
        return temp * temp;
    else
        return temp * temp * x;
}
```

---

## Advantages of Divide and Conquer

- Reduces time complexity (O(n log n) instead of O(n²) for sorting)
- Enables **parallel computation** — independent subproblems can run simultaneously
- Produces **elegant, readable code** for naturally recursive problems
- Strong theoretical guarantees with Master Theorem analysis

---

## Practice Problems

<details>
<summary>🧩 Practice 1 — Merge Sort Trace</summary>

**Problem:** Trace merge sort on `[5, 2, 8, 1, 9, 3]`.

```
Level 0:  [5, 2, 8, 1, 9, 3]
Level 1:  [5, 2, 8]      [1, 9, 3]
Level 2:  [5,2] [8]    [1,9] [3]
Level 3:  [5][2] 

Merge up:
  [5][2]         → [2, 5]
  [2, 5][8]      → [2, 5, 8]
  [1][9]         → [1, 9]
  [1, 9][3]      → [1, 3, 9]
  [2,5,8][1,3,9] → [1, 2, 3, 5, 8, 9]
```

**Final:** `[1, 2, 3, 5, 8, 9]`

</details>

<details>
<summary>🧩 Practice 2 — Binary Search</summary>

**Problem:** Use binary search to find 15 in `[1, 3, 5, 7, 9, 11, 15]`. Show each step.

```
arr = [1, 3, 5, 7, 9, 11, 15]
        0  1  2  3  4   5   6

Step 1: low=0, high=6, mid=3, arr[3]=7
        7 < 15 → search right: low=4

Step 2: low=4, high=6, mid=5, arr[5]=11
        11 < 15 → search right: low=6

Step 3: low=6, high=6, mid=6, arr[6]=15
        15 == 15 → FOUND at index 6 ✅
```

</details>

<details>
<summary>🧩 Practice 3 — Compute 3^8 with Fast Exponentiation</summary>

**Problem:** Trace `power(3, 8)` using divide-and-conquer.

```
power(3, 8)
  → temp = power(3, 4)
       → temp = power(3, 2)
            → temp = power(3, 1)
                 → temp = power(3, 0) = 1     ← base case
                 return 1*1*3 = 3              (odd: n=1)
            return 3*3 = 9                     (even: n=2)
       return 9*9 = 81                         (even: n=4)
  return 81*81 = 6561                          (even: n=8)

3^8 = 6561 ✅
Only 3 multiplications instead of 7!
```

</details>
