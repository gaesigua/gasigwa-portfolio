# 2. Problem Definition and Classification

## What is a Problem in Programming?

In computer science, a **problem** is a precisely stated question or task that can be solved with a computational process. It describes a gap between an initial state (what you have) and a goal state (what you want).

<div class="cp-definition">

#### Components of a Programming Problem

| Component | Description | Example |
|-----------|-------------|---------|
| **Initial State** | Starting conditions / given information | A list of 10 unsorted numbers |
| **Goal State** | The desired outcome | The same numbers in ascending order |
| **Operations** | Allowed transformations to reach the goal | Compare and swap adjacent elements |
| **Constraints** | Limitations on the solution | Must sort in-place using O(1) extra memory |

</div>

---

## Identification of Inputs, Outputs, and Constraints

Every program can be analyzed using the **IPO Model (Input → Processing → Output)**:

<div class="cp-definition">

#### The IPO Model

- **Input** — Data provided to the program (from user, file, sensor, etc.)
- **Processing** — Computations and logic applied to the input
- **Output** — Results produced and displayed or stored

</div>

### Worked Example: GPA Calculator

**Problem:** Calculate and display a student's GPA from course grades.

| | Detail |
|--|--------|
| **Inputs** | Number of courses, grade points per course (0.0–4.0), credit hours per course |
| **Processing** | Multiply grade points by credit hours for each course, sum products, divide by total credit hours |
| **Output** | GPA displayed to 2 decimal places |
| **Constraints** | Grade points ∈ [0.0, 4.0]; credit hours must be positive; total credit hours ≠ 0 |

```c
#include <stdio.h>

int main() {
    int n, i;
    float grade[20], credits[20];
    float totalPoints = 0, totalCredits = 0, gpa;

    printf("Enter number of courses: ");
    scanf("%d", &n);

    for (i = 0; i < n; i++) {
        printf("Course %d - Grade points (0-4): ", i + 1);
        scanf("%f", &grade[i]);
        printf("Course %d - Credit hours: ", i + 1);
        scanf("%f", &credits[i]);
        totalPoints  += grade[i] * credits[i];
        totalCredits += credits[i];
    }

    gpa = totalPoints / totalCredits;
    printf("GPA = %.2f\n", gpa);
    return 0;
}
```

---

## Tractable Problems

**Tractable problems** are those that can be solved in a *reasonable* amount of time using available resources. Formally, they have algorithms with **polynomial time complexity** or better.

<div class="cp-tip">

✅ **Examples of Tractable Problems:**

- **Sorting** — O(n log n) with Merge Sort / Quick Sort
- **Binary Search** — O(log n) in a sorted array
- **Finding GCD** — O(log n) with the Euclidean algorithm
- **Matrix Multiplication** — O(n³) (or better with Strassen's algorithm)
- **Shortest Path** — O(E log V) with Dijkstra's algorithm

</div>

### Binary Search — A Tractable Classic

```c
#include <stdio.h>

/* Binary Search: O(log n) — very tractable */
int binarySearch(int arr[], int n, int target) {
    int left = 0, right = n - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] == target)
            return mid;           /* Found */
        else if (arr[mid] < target)
            left = mid + 1;       /* Search right half */
        else
            right = mid - 1;      /* Search left half */
    }
    return -1;  /* Not found */
}

int main() {
    int arr[] = {2, 5, 8, 12, 16, 23, 38, 45, 56, 67};
    int n = 10, target = 23;

    int result = binarySearch(arr, n, target);
    if (result != -1)
        printf("Found at index %d\n", result);
    else
        printf("Not found\n");

    return 0;
}
```

<div class="cp-note">

📊 **Why it's tractable:** Even for **1 billion** sorted elements, binary search takes at most **log₂(1,000,000,000) ≈ 30 comparisons**.

</div>

---

## Intractable Problems

**Intractable problems** can theoretically be solved but require time that grows so fast (exponential/factorial) that they become impractical for large inputs.

<div class="cp-warning">

⚠️ **Examples of Intractable Problems:**

- **Traveling Salesman Problem (TSP)** — Find the shortest route visiting n cities once — O((n-1)!/2)
- **Boolean Satisfiability (SAT)** — NP-complete
- **Subset Sum** — O(2ⁿ) with brute force
- **Graph Coloring** — NP-complete for k ≥ 3

**Undecidable (not just intractable!):**
- **Halting Problem** — No algorithm can exist, period.

</div>

| Cities (n) | Possible Routes | Feasible? |
|-----------|----------------|-----------|
| 5 | 12 | ✅ Yes |
| 10 | 181,440 | ✅ Barely |
| 20 | ~60 trillion | ❌ No |
| 50 | > atoms in universe | ❌ Never |

---

## Problem-Solving Strategies

<div class="cp-definition">

#### Common Strategies

| Strategy | Description | Best For |
|----------|-------------|----------|
| **Divide and Conquer** | Split problem into subproblems, solve, combine | Sorting, searching |
| **Greedy** | Make locally optimal choice at each step | Optimization with greedy property |
| **Dynamic Programming** | Solve overlapping subproblems once, store results | Optimal substructure problems |
| **Backtracking** | Try options, backtrack on dead ends | Puzzles, constraint satisfaction |
| **Brute Force** | Try all solutions | Small inputs, last resort |
| **Pattern Recognition** | Match to a known solved problem | Experience-based |

</div>

---

## Practice Problems

<details>
<summary>🧩 Practice 1 — IPO Analysis</summary>

**Problem:** Analyze the following problem using the IPO model.

*"A store wants a program to calculate the total bill for a customer who buys multiple items, apply a 10% discount if the bill exceeds 50,000 Rwf, and display the final amount."*

**Answer:**

- **Inputs:** Number of items, price of each item
- **Processing:**
  - Sum all item prices → total
  - If total > 50,000: discounted = total × 0.90, else discounted = total
- **Output:** Display final amount (with or without discount note)
- **Constraints:** Prices must be positive; number of items ≥ 1

</details>

<details>
<summary>🧩 Practice 2 — Tractable or Intractable?</summary>

Classify each problem as tractable or intractable and briefly explain:

1. Finding the minimum element in an unsorted array of n numbers
2. Listing all possible orderings of n items
3. Finding whether a number is prime

**Answers:**

1. **Tractable** — O(n), scan all elements once
2. **Intractable** — O(n!), grows faster than any polynomial
3. **Tractable** — O(√n) trial division, efficient for most practical sizes

</details>

<details>
<summary>🧩 Practice 3 — Write a Problem Definition</summary>

**Task:** Formally define the problem: *"Find the second largest number in an array"*

**Answer:**

- **Initial State:** An array of n integers (n ≥ 2)
- **Goal State:** Identify and display the second largest unique value
- **Operations:** Compare elements, track largest and second largest
- **Constraints:**
  - n ≥ 2
  - Must handle duplicates (second largest must be distinct from largest)
  - Array may contain negative numbers

</details>
