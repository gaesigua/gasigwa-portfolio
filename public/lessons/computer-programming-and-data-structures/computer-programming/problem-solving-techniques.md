# 4. Problem-Solving Techniques

## Top-Down Problem Solving

The **top-down approach** starts with the complete, high-level problem and systematically breaks it into progressively smaller and more detailed subproblems until each piece is simple enough to implement directly.

<div class="cp-definition">

#### The Top-Down Process

1. State the main problem at the highest level of abstraction
2. Identify the major sub-tasks needed to solve it
3. For each sub-task, break it down further
4. Continue until each sub-task is a single, implementable step
5. Implement from the bottom (leaf-level details) upward

</div>

<div class="cp-tip">

✅ **Advantages:**
- Easy to understand the overall program structure early
- Natural way humans think about complex problems
- Facilitates parallel team development (different people work on different modules)
- Makes debugging easier — isolate which module contains the error

</div>

### Example: Library Management System (Top-Down)

```
Level 0: Library Management System

Level 1:
  1. Book Management
  2. Member Management
  3. Transaction Management
  4. Report Generation

Level 2 — Book Management expanded:
  1.1 Add new book
  1.2 Update book details
  1.3 Delete book
  1.4 Search for a book
  1.5 List all books

Level 3 — Add new book expanded:
  1.1.1 Prompt and read ISBN, title, author, category
  1.1.2 Validate that all fields are non-empty
  1.1.3 Check if book with this ISBN already exists
  1.1.4 Save book record to storage
  1.1.5 Display confirmation message
```

---

## Decomposition of Complex Problems

**Decomposition** breaks a complex problem into smaller, *independent* subproblems. Each subproblem:

- Has a **single, focused purpose**
- Can be **developed and tested independently**
- **Combines** with others to form the complete solution

<div class="cp-comparison">
<div class="cp-comparison-left">
<h5>✅ Good Decomposition</h5>

- Subproblems are largely independent
- Each does one thing well
- Easy to test in isolation
- Reusable in other programs
</div>
<div class="cp-comparison-right">
<h5>❌ Poor Decomposition</h5>

- Subproblems are heavily coupled
- Each subproblem does too many things
- Hard to test or change one without breaking others
</div>
</div>

### Example: Student Marks System (Decomposed in C)

```c
#include <stdio.h>

/* ---- Subproblem 1: Input marks ---- */
void inputMarks(int marks[][10], int n, int m) {
    int i, j;
    for (i = 0; i < n; i++) {
        printf("Student %d marks:\n", i + 1);
        for (j = 0; j < m; j++) {
            printf("  Subject %d: ", j + 1);
            scanf("%d", &marks[i][j]);
        }
    }
}

/* ---- Subproblem 2: Calculate average for one student ---- */
float calculateAverage(int marks[], int m) {
    int i, sum = 0;
    for (i = 0; i < m; i++)
        sum += marks[i];
    return (float)sum / m;
}

/* ---- Subproblem 3: Find index of top performer ---- */
int findTopPerformer(float averages[], int n) {
    int i, topIndex = 0;
    for (i = 1; i < n; i++)
        if (averages[i] > averages[topIndex])
            topIndex = i;
    return topIndex;
}

/* ---- Main: assemble the subproblems ---- */
int main() {
    int n, m, i;
    int marks[50][10];
    float averages[50], classAvg = 0;

    printf("Enter number of students: "); scanf("%d", &n);
    printf("Enter number of subjects: "); scanf("%d", &m);

    inputMarks(marks, n, m);             /* Subproblem 1 */

    for (i = 0; i < n; i++) {
        averages[i] = calculateAverage(marks[i], m);  /* Subproblem 2 */
        printf("Student %d avg: %.2f\n", i + 1, averages[i]);
        classAvg += averages[i];
    }

    classAvg /= n;
    printf("Class average: %.2f\n", classAvg);

    int top = findTopPerformer(averages, n);           /* Subproblem 3 */
    printf("Top performer: Student %d (%.2f)\n", top + 1, averages[top]);

    return 0;
}
```

---

## Bottom-Up Approach

The **bottom-up approach** is the opposite: you start by implementing the most fundamental, basic building blocks first, then combine them into increasingly complex functions until the full solution is assembled.

<div class="cp-definition">

| Aspect | Top-Down | Bottom-Up |
|--------|----------|-----------|
| **Starting Point** | Main problem | Basic components |
| **Direction** | General → Specific | Specific → General |
| **Design Focus** | Overall structure | Component details |
| **Best For** | New projects, planning | Libraries, reusable utilities |
| **Testing Order** | Integration → Unit | Unit → Integration |

</div>

### Example: Building a Calculator Bottom-Up

```c
#include <stdio.h>

/* Step 1 (Bottom): Most atomic operations */
int add(int a, int b)      { return a + b; }
int subtract(int a, int b) { return a - b; }
int multiply(int a, int b) { return a * b; }

float divide(int a, int b) {
    if (b == 0) { printf("Error: division by zero\n"); return 0; }
    return (float)a / b;
}

/* Step 2 (Middle): Combine basic operations */
float calculate(int a, int b, char op) {
    switch (op) {
        case '+': return add(a, b);
        case '-': return subtract(a, b);
        case '*': return multiply(a, b);
        case '/': return divide(a, b);
        default:  printf("Unknown operator\n"); return 0;
    }
}

/* Step 3 (Top): User-facing application */
int main() {
    int a, b;
    char op;
    printf("Enter expression (e.g. 10 + 5): ");
    scanf("%d %c %d", &a, &op, &b);
    printf("Result = %.2f\n", calculate(a, b, op));
    return 0;
}
```

<div class="cp-tip">

💡 **Practical Advice:** Most real-world projects use a **hybrid**: top-down for architecture/planning, bottom-up for implementing reusable utility functions.

</div>

---

## Practice Problems

<details>
<summary>🧩 Practice 1 — Top-Down Decomposition</summary>

**Problem:** Apply top-down decomposition to design a *Temperature Converter* program that:
- Lets the user choose: Celsius→Fahrenheit, Fahrenheit→Celsius, or Celsius→Kelvin
- Reads the value to convert
- Displays the result

**Level 1 decomposition:**
```
1. Display menu and get user choice
2. Read temperature value
3. Perform conversion
4. Display result
```

**Level 2:**
```
3. Perform conversion:
   3.1 If choice = 1: F = C × 9/5 + 32
   3.2 If choice = 2: C = (F - 32) × 5/9
   3.3 If choice = 3: K = C + 273.15
```

**C Implementation:**

```c
#include <stdio.h>

float celsiusToFahr(float c)   { return c * 9.0/5.0 + 32; }
float fahrToCelsius(float f)   { return (f - 32) * 5.0/9.0; }
float celsiusToKelvin(float c) { return c + 273.15; }

int main() {
    int choice;
    float value;

    printf("1. Celsius to Fahrenheit\n");
    printf("2. Fahrenheit to Celsius\n");
    printf("3. Celsius to Kelvin\n");
    printf("Choose (1-3): ");
    scanf("%d", &choice);

    printf("Enter temperature: ");
    scanf("%f", &value);

    switch (choice) {
        case 1: printf("= %.2f F\n", celsiusToFahr(value));   break;
        case 2: printf("= %.2f C\n", fahrToCelsius(value));   break;
        case 3: printf("= %.2f K\n", celsiusToKelvin(value)); break;
        default: printf("Invalid choice\n");
    }
    return 0;
}
```

</details>

<details>
<summary>🧩 Practice 2 — Bottom-Up Design</summary>

**Problem:** Using bottom-up design, build the functions needed for a simple statistics program that finds the minimum, maximum, and average of n numbers.

**Step 1 — Atomic operations:**

```c
float findMin(float arr[], int n) {
    float min = arr[0];
    for (int i = 1; i < n; i++)
        if (arr[i] < min) min = arr[i];
    return min;
}

float findMax(float arr[], int n) {
    float max = arr[0];
    for (int i = 1; i < n; i++)
        if (arr[i] > max) max = arr[i];
    return max;
}

float findAvg(float arr[], int n) {
    float sum = 0;
    for (int i = 0; i < n; i++) sum += arr[i];
    return sum / n;
}
```

**Step 2 — Main assembles the results:**

```c
int main() {
    int n; float arr[100];
    printf("How many numbers? "); scanf("%d", &n);
    for (int i = 0; i < n; i++) scanf("%f", &arr[i]);

    printf("Min = %.2f\n", findMin(arr, n));
    printf("Max = %.2f\n", findMax(arr, n));
    printf("Avg = %.2f\n", findAvg(arr, n));
    return 0;
}
```

</details>
