# 6. Structured Programming

## What is Structured Programming?

**Structured programming** is a programming paradigm that improves clarity, quality, and development time by using **three fundamental control structures** exclusively, and avoiding uncontrolled jumps like `goto`.

It was formalized by Edsger Dijkstra in the late 1960s. His famous letter *"Go To Statement Considered Harmful"* (1968) argued that unrestricted `goto` creates "spaghetti code" that is nearly impossible to understand or maintain.

<div class="cp-definition">

#### The Böhm–Jacopini Theorem (1966)

Any computable algorithm can be expressed using only three control structures:

1. **Sequence** — Execute statements in order
2. **Selection** — Choose a path based on a condition
3. **Iteration** — Repeat a block while a condition holds

</div>

---

## 1. Sequence Control Structure

**Sequence** is the simplest structure: statements execute one after another, in the exact order they appear, with no skipping or repeating.

```c
#include <stdio.h>

int main() {
    /* Sequence: every line runs once, in order */
    int principal = 10000;
    float rate = 0.05;
    int years = 3;

    float interest = principal * rate * years;   /* step 1 */
    float total    = principal + interest;        /* step 2 */

    printf("Interest: %.2f\n", interest);         /* step 3 */
    printf("Total:    %.2f\n", total);            /* step 4 */

    return 0;
}
```

---

## 2. Selection Control Structure

**Selection** lets the program choose different paths based on a condition. In C this appears as `if`, `if-else`, `if-else if-else`, and `switch`.

### `if` statement

```c
if (score >= 50)
    printf("PASS\n");
```

### `if-else` statement

```c
if (score >= 50)
    printf("PASS\n");
else
    printf("FAIL\n");
```

### `if-else if-else` (multi-way selection)

```c
#include <stdio.h>

int main() {
    float score;
    printf("Enter score: ");
    scanf("%f", &score);

    if      (score >= 80) printf("Grade: A - Distinction\n");
    else if (score >= 70) printf("Grade: B - Merit\n");
    else if (score >= 60) printf("Grade: C - Credit\n");
    else if (score >= 50) printf("Grade: D - Pass\n");
    else                  printf("Grade: F - Fail\n");

    return 0;
}
```

### `switch` statement

Use `switch` when comparing a single variable against **multiple constant values**:

```c
#include <stdio.h>

int main() {
    int day;
    printf("Enter day number (1-7): ");
    scanf("%d", &day);

    switch (day) {
        case 1: printf("Monday\n");    break;
        case 2: printf("Tuesday\n");   break;
        case 3: printf("Wednesday\n"); break;
        case 4: printf("Thursday\n");  break;
        case 5: printf("Friday\n");    break;
        case 6: printf("Saturday\n");  break;
        case 7: printf("Sunday\n");    break;
        default: printf("Invalid day\n");
    }

    return 0;
}
```

<div class="cp-warning">

⚠️ **Always include `break` in switch cases!** Without it, C continues executing the next case's code (fall-through behavior), which is usually a bug.

</div>

---

## 3. Iteration Control Structure

**Iteration** repeats a block of code. C provides three loop types:

### `for` loop — when iterations are known

```c
#include <stdio.h>

int main() {
    int i, factorial = 1, n = 5;

    for (i = 1; i <= n; i++) {
        factorial *= i;
    }

    printf("%d! = %d\n", n, factorial);  /* Output: 5! = 120 */
    return 0;
}
```

### `while` loop — when condition is checked before each iteration

```c
#include <stdio.h>

int main() {
    int n;
    printf("Enter positive number: ");
    scanf("%d", &n);

    /* Keep halving until n reaches 1 */
    while (n > 1) {
        printf("%d ", n);
        n = n / 2;
    }
    printf("1\n");
    return 0;
}
```

### `do-while` loop — body executes **at least once**

```c
#include <stdio.h>

int main() {
    int choice;

    do {
        printf("\n1. Add\n2. Subtract\n3. Exit\n");
        printf("Your choice: ");
        scanf("%d", &choice);

        if (choice == 1) printf("You chose Add\n");
        else if (choice == 2) printf("You chose Subtract\n");

    } while (choice != 3);  /* Keep showing menu until user exits */

    printf("Goodbye!\n");
    return 0;
}
```

<div class="cp-tip">

🎯 **When to use which loop:**
- `for` — you know the exact number of iterations
- `while` — you check a condition before each run; may run 0 times
- `do-while` — must execute at least once (e.g., menus, input validation)

</div>

---

## Why Avoid `goto`?

```c
/* BAD — spaghetti code with goto */
int i = 0;
loop:
    printf("%d ", i);
    i++;
    if (i < 5) goto loop;  /* Hard to read, hard to maintain */

/* GOOD — structured while loop */
int i = 0;
while (i < 5) {
    printf("%d ", i);
    i++;
}
```

Structured programming guarantees every program has:
- **Exactly one entry point** (top)
- **Exactly one exit point** (bottom)
- **Predictable, readable flow**

---

## Practice Problems

<details>
<summary>🧩 Practice 1 — Selection Logic</summary>

**Problem:** A taxi company charges: 500 Rwf for the first 2 km, then 150 Rwf per km after that. Write a C program to calculate the fare.

```c
#include <stdio.h>

int main() {
    float distance, fare;

    printf("Enter distance (km): ");
    scanf("%f", &distance);

    if (distance <= 2)
        fare = 500;
    else
        fare = 500 + (distance - 2) * 150;

    printf("Fare: %.0f Rwf\n", fare);
    return 0;
}
```

</details>

<details>
<summary>🧩 Practice 2 — Iteration Practice</summary>

**Problem:** Write a C program that prints the multiplication table (1–10) for a number entered by the user.

```c
#include <stdio.h>

int main() {
    int n, i;
    printf("Enter a number: ");
    scanf("%d", &n);

    printf("\nMultiplication table for %d:\n", n);
    for (i = 1; i <= 10; i++) {
        printf("%d x %d = %d\n", n, i, n * i);
    }

    return 0;
}
```

</details>

<details>
<summary>🧩 Practice 3 — Nested Structures</summary>

**Problem:** Write a program that reads 5 students' marks and prints "PASS" or "FAIL" for each. Also count and display the total passes.

```c
#include <stdio.h>

int main() {
    int i, marks, passes = 0;

    for (i = 1; i <= 5; i++) {
        printf("Student %d marks: ", i);
        scanf("%d", &marks);

        if (marks >= 50) {
            printf("  -> PASS\n");
            passes++;
        } else {
            printf("  -> FAIL\n");
        }
    }

    printf("\nTotal passes: %d/5\n", passes);
    return 0;
}
```

</details>
