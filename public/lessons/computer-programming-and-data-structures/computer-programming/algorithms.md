# 3. Algorithms

## What is an Algorithm?

An **algorithm** is a finite, ordered set of well-defined instructions that, when followed, solves a specific problem or accomplishes a task. The word comes from the name of the 9th-century Persian mathematician **Muhammad ibn Musa al-Khwarizmi**.

<div class="cp-definition">

#### Five Essential Properties of an Algorithm

| Property | Meaning |
|----------|---------|
| **Input** | Zero or more well-defined inputs are accepted |
| **Output** | At least one result is produced |
| **Definiteness** | Each step is clear and unambiguous |
| **Finiteness** | The algorithm terminates after a finite number of steps |
| **Effectiveness** | Each step is basic enough to be carried out in finite time |

</div>

<div class="cp-note">

An **infinite loop** violates the **finiteness** property — it is not a valid algorithm.

</div>

---

## Characteristics of a Good Algorithm

Beyond the five essential properties, a *good* algorithm is also:

- **Correct** — Produces the right output for all valid inputs
- **Efficient** — Uses minimal time and memory
- **Clear** — Easy for humans to read and understand
- **General** — Solves a *class* of problems, not just one specific instance
- **Language-independent** — Can be implemented in any programming language
- **Optimal** — Uses the minimum resources necessary

---

## Algorithm Documentation Methods

Algorithms can be expressed in multiple ways before being coded:

<div class="cp-definition">

| Method | Description | Best For |
|--------|-------------|----------|
| **Natural Language** | Plain English steps | High-level planning |
| **Pseudocode** | Structured English resembling code | Detailed logic without syntax |
| **Flowcharts** | Graphical representation with symbols | Visual learners, showing branching |
| **Decision Tables** | Table of conditions → actions | Complex conditional logic |
| **Programming Language** | Actual executable code | Final implementation |

</div>

### Example: Sum of First N Natural Numbers — Three Ways

**1. Natural Language:**
> Read a positive integer N. Initialize sum to 0. Add each integer from 1 to N to sum. Display the final sum.

**2. Pseudocode:**
```
BEGIN
  INPUT N
  SET sum = 0
  FOR i = 1 TO N DO
    SET sum = sum + i
  END FOR
  OUTPUT sum
END
```

**3. C Code:**
```c
#include <stdio.h>

int main() {
    int N, i, sum = 0;

    printf("Enter N: ");
    scanf("%d", &N);

    for (i = 1; i <= N; i++) {
        sum += i;
    }

    printf("Sum of first %d numbers = %d\n", N, sum);
    return 0;
}
```

<div class="cp-tip">

🎯 **Shortcut formula:** Sum of 1 to N = N × (N+1) / 2  
For N=100: sum = 100 × 101 / 2 = **5050** (Gauss's famous result!)

</div>

---

## Stepwise Refinement (Top-Down Coding)

**Stepwise refinement** is the process of progressively breaking down a high-level algorithm into more detailed steps until each step can be directly translated into code.

### Example: Student Grade System

**Level 0 — Highest level (one sentence):**
```
Calculate and display student grades
```

**Level 1 — Three major tasks:**
```
1. Input student data
2. Calculate grades
3. Display results
```

**Level 2 — Expand each task:**
```
1. Input student data
   1.1 Read student name
   1.2 Read number of subjects
   1.3 For each subject, read marks

2. Calculate grades
   2.1 Sum all marks → total
   2.2 Calculate average = total / subjects
   2.3 Determine letter grade based on average

3. Display results
   3.1 Print student name
   3.2 Print total and average
   3.3 Print letter grade
```

**Level 3 — Implementation-ready C code:**
```c
#include <stdio.h>

int main() {
    char name[50];
    int numSubjects, i, marks[10], total = 0;
    float average;
    char grade;

    /* Step 1: Input */
    printf("Enter student name: ");
    scanf("%49s", name);
    printf("Enter number of subjects: ");
    scanf("%d", &numSubjects);

    for (i = 0; i < numSubjects; i++) {
        printf("Marks for subject %d: ", i + 1);
        scanf("%d", &marks[i]);
    }

    /* Step 2: Calculate */
    for (i = 0; i < numSubjects; i++)
        total += marks[i];

    average = (float)total / numSubjects;

    if (average >= 80)      grade = 'A';
    else if (average >= 70) grade = 'B';
    else if (average >= 60) grade = 'C';
    else if (average >= 50) grade = 'D';
    else                    grade = 'F';

    /* Step 3: Display */
    printf("\n--- Results for %s ---\n", name);
    printf("Total  : %d\n", total);
    printf("Average: %.2f\n", average);
    printf("Grade  : %c\n", grade);

    return 0;
}
```

---

## Practice Problems

<details>
<summary>🧩 Practice 1 — Verify Algorithm Properties</summary>

**Problem:** Consider this "algorithm":

```
1. Input a number N
2. If N > 0: add N to sum and go to step 1
3. Output sum
```

**Question:** Does this satisfy all five algorithm properties? If not, which one fails and why?

**Answer:**  
This **violates Finiteness**. If N is always positive (e.g., N is always re-entered as 5), the algorithm never terminates. There is no stopping condition, making it an infinite loop — not a valid algorithm.

</details>

<details>
<summary>🧩 Practice 2 — Write an Algorithm</summary>

**Problem:** Write a step-by-step algorithm to find the largest of three numbers entered by the user.

**Solution:**

1. Start
2. Read three numbers: A, B, C
3. Set `max = A`
4. If `B > max`, set `max = B`
5. If `C > max`, set `max = C`
6. Display `max`
7. Stop

**C Implementation:**

```c
#include <stdio.h>

int main() {
    int a, b, c, max;

    printf("Enter three numbers: ");
    scanf("%d %d %d", &a, &b, &c);

    max = a;
    if (b > max) max = b;
    if (c > max) max = c;

    printf("Largest = %d\n", max);
    return 0;
}
```

</details>

<details>
<summary>🧩 Practice 3 — Stepwise Refinement</summary>

**Problem:** Apply stepwise refinement to this problem: *"Read 5 numbers from the user and display their average."*

**Level 1:**
```
1. Get input
2. Calculate average
3. Display result
```

**Level 2:**
```
1. Get input
   1.1 Repeat 5 times: read a number and store it

2. Calculate average
   2.1 Sum all 5 numbers
   2.2 Divide sum by 5

3. Display result
   3.1 Print the average with 2 decimal places
```

**Level 3 (C Code):**

```c
#include <stdio.h>

int main() {
    int i, nums[5];
    float sum = 0, average;

    /* Step 1: Input */
    for (i = 0; i < 5; i++) {
        printf("Enter number %d: ", i + 1);
        scanf("%d", &nums[i]);
    }

    /* Step 2: Calculate */
    for (i = 0; i < 5; i++)
        sum += nums[i];
    average = sum / 5;

    /* Step 3: Display */
    printf("Average = %.2f\n", average);
    return 0;
}
```

</details>
