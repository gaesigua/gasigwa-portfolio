# 10. Control Structures

## Overview

Control structures determine the **flow of execution** in a program — which statements run, in what order, and how many times. C provides three families:

1. **Selection** — `if`, `if-else`, `switch`
2. **Iteration** — `for`, `while`, `do-while`
3. **Jump** — `break`, `continue`, `return`

---

## Selection Structures

### `if` Statement

```c
if (condition) {
    /* runs only when condition is TRUE (non-zero) */
}
```

### `if-else` Statement

```c
#include <stdio.h>

int main() {
    int n;
    printf("Enter a number: ");
    scanf("%d", &n);

    if (n % 2 == 0)
        printf("%d is Even\n", n);
    else
        printf("%d is Odd\n", n);

    return 0;
}
```

### Multi-way `if-else if-else`

```c
#include <stdio.h>

int main() {
    int score;
    printf("Enter score (0-100): ");
    scanf("%d", &score);

    if      (score >= 80) printf("A - Distinction\n");
    else if (score >= 70) printf("B - Merit\n");
    else if (score >= 60) printf("C - Credit\n");
    else if (score >= 50) printf("D - Pass\n");
    else if (score >= 0)  printf("F - Fail\n");
    else                  printf("Invalid score\n");

    return 0;
}
```

### `switch` Statement

`switch` is ideal when comparing **one variable against multiple constant values**:

```c
#include <stdio.h>

int main() {
    char op;
    float a, b;

    printf("Enter: num op num (e.g. 10 + 5): ");
    scanf("%f %c %f", &a, &op, &b);

    switch (op) {
        case '+':
            printf("= %.2f\n", a + b);
            break;
        case '-':
            printf("= %.2f\n", a - b);
            break;
        case '*':
            printf("= %.2f\n", a * b);
            break;
        case '/':
            if (b != 0)
                printf("= %.2f\n", a / b);
            else
                printf("Error: division by zero\n");
            break;
        default:
            printf("Unknown operator '%c'\n", op);
    }

    return 0;
}
```

<div class="cp-warning">

⚠️ **Fall-through:** Without `break`, execution continues into the next `case`. This is sometimes intentional (e.g., grouping cases), but usually a bug.

</div>

---

## Iteration (Loop) Structures

### `for` Loop

```
for (initialization; condition; update) {
    /* body */
}
```

```c
#include <stdio.h>

int main() {
    int i, n, factorial = 1;

    printf("Enter n: ");
    scanf("%d", &n);

    for (i = 1; i <= n; i++) {
        factorial *= i;
    }

    printf("%d! = %d\n", n, factorial);
    return 0;
}
```

**Nested for loops — Multiplication Table:**

```c
#include <stdio.h>

int main() {
    int i, j;
    for (i = 1; i <= 5; i++) {
        for (j = 1; j <= 5; j++) {
            printf("%4d", i * j);
        }
        printf("\n");
    }
    return 0;
}
```

### `while` Loop

```c
#include <stdio.h>

int main() {
    int n, sum = 0, count = 0;

    printf("Enter positive numbers (0 to stop):\n");
    scanf("%d", &n);

    while (n != 0) {
        sum += n;
        count++;
        scanf("%d", &n);
    }

    if (count > 0)
        printf("Average = %.2f\n", (float)sum / count);
    else
        printf("No numbers entered.\n");

    return 0;
}
```

### `do-while` Loop

The body **always executes at least once** — perfect for menus and input validation:

```c
#include <stdio.h>

int main() {
    int choice;

    do {
        printf("\n=== Menu ===\n");
        printf("1. View balance\n");
        printf("2. Deposit\n");
        printf("3. Withdraw\n");
        printf("4. Exit\n");
        printf("Select: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1: printf("[Balance: 50,000 Rwf]\n"); break;
            case 2: printf("[Deposit processed]\n");   break;
            case 3: printf("[Withdrawal processed]\n"); break;
            case 4: printf("Goodbye!\n");               break;
            default: printf("Invalid choice.\n");
        }
    } while (choice != 4);

    return 0;
}
```

---

## Loop Control: `break` and `continue`

### `break` — Exit the loop immediately

```c
#include <stdio.h>

int main() {
    int i, n;
    printf("Enter N: ");
    scanf("%d", &n);

    /* Find first divisor of n (other than 1) */
    for (i = 2; i <= n / 2; i++) {
        if (n % i == 0) {
            printf("First divisor of %d (other than 1): %d\n", n, i);
            break;  /* stop searching once found */
        }
    }
    return 0;
}
```

### `continue` — Skip the rest of this iteration

```c
#include <stdio.h>

int main() {
    int i;

    /* Print odd numbers from 1 to 20 */
    for (i = 1; i <= 20; i++) {
        if (i % 2 == 0)
            continue;  /* skip even numbers */
        printf("%d ", i);
    }
    printf("\n");
    return 0;
}
```

---

## Comprehensive Example: Number Guessing Game

```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    int secret, guess, attempts = 0;

    srand(time(NULL));
    secret = (rand() % 100) + 1;  /* random 1–100 */

    printf("=== Number Guessing Game ===\n");
    printf("I picked a number from 1 to 100. Guess it!\n\n");

    do {
        printf("Your guess: ");
        scanf("%d", &guess);
        attempts++;

        if (guess < 1 || guess > 100) {
            printf("Please guess between 1 and 100.\n");
            attempts--;  /* don't count invalid guesses */
            continue;
        }

        if      (guess < secret) printf("Too low!\n");
        else if (guess > secret) printf("Too high!\n");
        else {
            printf("🎉 Correct! You got it in %d attempt(s)!\n", attempts);
            break;
        }

    } while (1);  /* infinite loop, broken when correct */

    return 0;
}
```

---

## Practice Problems

<details>
<summary>🧩 Practice 1 — Switch + Selection</summary>

**Problem:** Write a C program that reads a month number (1–12) and prints the number of days in that month. Assume non-leap year.

```c
#include <stdio.h>

int main() {
    int month;
    printf("Enter month number (1-12): ");
    scanf("%d", &month);

    switch (month) {
        case 1: case 3: case 5: case 7:
        case 8: case 10: case 12:
            printf("31 days\n"); break;
        case 4: case 6: case 9: case 11:
            printf("30 days\n"); break;
        case 2:
            printf("28 days\n"); break;
        default:
            printf("Invalid month\n");
    }
    return 0;
}
```

</details>

<details>
<summary>🧩 Practice 2 — Loop Challenge</summary>

**Problem:** Write a C program that prints this pattern for n=5:

```
*
**
***
****
*****
```

```c
#include <stdio.h>

int main() {
    int n, i, j;
    printf("Enter rows: ");
    scanf("%d", &n);

    for (i = 1; i <= n; i++) {
        for (j = 1; j <= i; j++)
            printf("*");
        printf("\n");
    }
    return 0;
}
```

</details>

<details>
<summary>🧩 Practice 3 — break and continue</summary>

**Problem:** Read integers one by one. Stop when the user enters -1. Skip any zeros. Print the sum and count of valid non-zero numbers entered.

```c
#include <stdio.h>

int main() {
    int n, sum = 0, count = 0;

    printf("Enter numbers (-1 to stop, 0 to skip):\n");

    while (1) {
        scanf("%d", &n);

        if (n == -1) break;    /* stop */
        if (n == 0)  continue; /* skip zeros */

        sum += n;
        count++;
    }

    printf("Count: %d, Sum: %d\n", count, sum);
    if (count > 0)
        printf("Average: %.2f\n", (float)sum / count);

    return 0;
}
```

</details>
