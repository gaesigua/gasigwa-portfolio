# 19. Sorting and Searching

## Overview

**Sorting** and **searching** are two of the most fundamental operations in computer science. They appear in virtually every application — from databases and operating systems to everyday apps.

- **Sorting** arranges elements in a specific order (ascending or descending)
- **Searching** finds whether and where a specific element exists in a collection

---

## Part 1: Sorting Algorithms

### 19.1.1 Bubble Sort

**Concept:** Repeatedly compare adjacent elements and swap them if out of order. Largest elements "bubble" to the end.

**Time Complexity:** O(n²) average/worst | O(n) best (optimized)  
**Space:** O(1)

```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        swapped = False
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
                swapped = True
        if not swapped:   # optimization: stop early if already sorted
            break

numbers = [64, 34, 25, 12, 22, 11, 90]
bubble_sort(numbers)
print("Sorted:", numbers)   # [11, 12, 22, 25, 34, 64, 90]
```

**C version:**

```c
void bubbleSort(int arr[], int n) {
    int i, j, temp, swapped;
    for (i = 0; i < n-1; i++) {
        swapped = 0;
        for (j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                temp     = arr[j];
                arr[j]   = arr[j+1];
                arr[j+1] = temp;
                swapped  = 1;
            }
        }
        if (!swapped) break;
    }
}
```

---

### 19.1.2 Insertion Sort

**Concept:** Build the sorted array one element at a time. Pick each element and insert it into its correct position in the already-sorted portion.

**Time Complexity:** O(n²) average/worst | O(n) best  
**Space:** O(1)

```python
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]       # element to insert
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j+1] = arr[j]   # shift right
            j -= 1
        arr[j+1] = key     # insert in correct position

numbers = [12, 11, 13, 5, 6]
insertion_sort(numbers)
print("Sorted:", numbers)   # [5, 6, 11, 12, 13]
```

**C version:**

```c
void insertionSort(int arr[], int n) {
    int i, j, key;
    for (i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
}
```

---

### 19.1.3 Merge Sort

**Concept:** Divide and Conquer. Split array in half recursively, sort each half, then merge.

**Time Complexity:** O(n log n) all cases  
**Space:** O(n)

```python
def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        L   = arr[:mid]
        R   = arr[mid:]

        merge_sort(L)
        merge_sort(R)

        i = j = k = 0
        while i < len(L) and j < len(R):
            if L[i] < R[j]:
                arr[k] = L[i]; i += 1
            else:
                arr[k] = R[j]; j += 1
            k += 1

        while i < len(L): arr[k] = L[i]; i += 1; k += 1
        while j < len(R): arr[k] = R[j]; j += 1; k += 1

numbers = [38, 27, 43, 3, 9, 82, 10]
merge_sort(numbers)
print("Sorted:", numbers)   # [3, 9, 10, 27, 38, 43, 82]
```

---

### 19.1.4 Quick Sort

**Concept:** Divide and Conquer. Choose a pivot, partition elements < pivot to left and > pivot to right, then sort each partition recursively.

**Time Complexity:** O(n log n) average | O(n²) worst  
**Space:** O(log n)

```python
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot  = arr[len(arr) // 2]
    left   = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right  = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)

numbers = [10, 7, 8, 9, 1, 5]
print("Sorted:", quick_sort(numbers))   # [1, 5, 7, 8, 9, 10]
```

**C version — in-place Quick Sort:**

```c
void swap(int *a, int *b) { int t = *a; *a = *b; *b = t; }

int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i     = low - 1;
    int j;
    for (j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            swap(&arr[i], &arr[j]);
        }
    }
    swap(&arr[i+1], &arr[high]);
    return i + 1;
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi-1);
        quickSort(arr, pi+1, high);
    }
}
```

---

## Part 2: Searching Algorithms

### 19.2.1 Linear Search

**Concept:** Check each element one by one from start to end.

**Time Complexity:** O(n)  
**Works on:** Any array (sorted or unsorted)

```python
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i     # return index where found
    return -1            # not found

numbers = [10, 20, 30, 40, 50]
print("Index:", linear_search(numbers, 30))   # 2
print("Index:", linear_search(numbers, 99))   # -1
```

**C version:**

```c
int linearSearch(int arr[], int n, int target) {
    int i;
    for (i = 0; i < n; i++)
        if (arr[i] == target) return i;
    return -1;
}
```

---

### 19.2.2 Binary Search

**Concept:** Works on **sorted** arrays. Repeatedly divide the search range in half by comparing with the middle element.

**Time Complexity:** O(log n)  
**Requires:** Sorted array

```python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1

    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid          # found
        elif arr[mid] < target:
            left = mid + 1      # search right half
        else:
            right = mid - 1     # search left half
    return -1                   # not found

numbers = [1, 3, 5, 7, 9, 11]
print("Index of 7:", binary_search(numbers, 7))    # 3
print("Index of 6:", binary_search(numbers, 6))    # -1
```

**C version:**

```c
int binarySearch(int arr[], int n, int target) {
    int left = 0, right = n-1, mid;
    while (left <= right) {
        mid = (left + right) / 2;
        if      (arr[mid] == target) return mid;
        else if (arr[mid] < target)  left  = mid + 1;
        else                         right = mid - 1;
    }
    return -1;
}
```

---

## Algorithm Comparison

### Sorting Algorithms

| Algorithm | Best | Average | Worst | Space | Stable? |
|-----------|------|---------|-------|-------|---------|
| **Bubble Sort** | O(n) | O(n²) | O(n²) | O(1) | Yes |
| **Insertion Sort** | O(n) | O(n²) | O(n²) | O(1) | Yes |
| **Merge Sort** | O(n log n) | O(n log n) | O(n log n) | O(n) | Yes |
| **Quick Sort** | O(n log n) | O(n log n) | O(n²) | O(log n) | No |

### Searching Algorithms

| Algorithm | Best | Average | Worst | Requirement |
|-----------|------|---------|-------|-------------|
| **Linear Search** | O(1) | O(n) | O(n) | None |
| **Binary Search** | O(1) | O(log n) | O(log n) | **Sorted array** |

---

## Practice Problems

<details>
<summary>🧩 Practice 1 — Sort Trace</summary>

**Problem:** Trace Bubble Sort on `[5, 3, 8, 1, 2]`. Show the array after each pass.

```
Initial:   [5, 3, 8, 1, 2]

Pass 1:    Compare 5-3 → swap   [3, 5, 8, 1, 2]
           Compare 5-8 → no     [3, 5, 8, 1, 2]
           Compare 8-1 → swap   [3, 5, 1, 8, 2]
           Compare 8-2 → swap   [3, 5, 1, 2, 8]   ← 8 in place

Pass 2:    [3, 1, 2, 5, 8]   ← 5 bubbles into place

Pass 3:    [1, 2, 3, 5, 8]   ← 3 in place

Pass 4:    [1, 2, 3, 5, 8]   ← no swaps → early exit

Final: [1, 2, 3, 5, 8]
```

</details>

<details>
<summary>🧩 Practice 2 — Binary Search Trace</summary>

**Problem:** Trace Binary Search for target=9 in `[1, 3, 5, 7, 9, 11, 13]`.

```
Array:  [1, 3, 5, 7, 9, 11, 13]
Index:   0  1  2  3  4   5   6

Step 1: left=0, right=6, mid=3, arr[3]=7
        7 < 9 → search right: left=4

Step 2: left=4, right=6, mid=5, arr[5]=11
        11 > 9 → search left: right=4

Step 3: left=4, right=4, mid=4, arr[4]=9
        9 == 9 → FOUND at index 4 ✅
```

**2 comparisons vs up to 7 for linear search on 7 elements.**

</details>

<details>
<summary>🧩 Practice 3 — Choose the Right Algorithm</summary>

**Question:** For each scenario, which sort/search algorithm would you choose and why?

| Scenario | Best Choice | Reason |
|----------|-------------|--------|
| Sort 1 million integers, speed critical | **Merge Sort or Quick Sort** | O(n log n) — much faster than O(n²) |
| Nearly sorted array, insert a few new items | **Insertion Sort** | O(n) on nearly sorted data |
| Find a user_id in an unsorted log file | **Linear Search** | Array not sorted; binary search requires sorting first |
| Find a word in a sorted dictionary | **Binary Search** | O(log n) vs O(n) for linear search |
| Small array (n < 20) | **Insertion Sort** | Low overhead, simpler than merge/quick |

</details>
