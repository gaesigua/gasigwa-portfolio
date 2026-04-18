# 5. Flowcharts

## What is a Flowchart?

A **flowchart** is a graphical representation of an algorithm using standardized symbols connected by arrows. It shows the sequence of steps, decisions, and loops in a visual format that is easy to understand before writing code.

<div class="cp-definition">

#### Purpose of Flowcharts

- **Visualize** the logic of a program before coding
- **Communicate** algorithms to non-programmers
- **Detect** logical errors early in design
- **Document** programs for maintenance
- **Train** new team members quickly

</div>

---

## Standard Flowchart Symbols

<div class="cp-definition">

| Symbol | Shape | Used For |
|--------|-------|---------|
| **Terminal** | Oval / Rounded Rectangle | Start and End of the algorithm |
| **Process** | Rectangle | Computations, assignments (e.g., `sum = sum + i`) |
| **Decision** | Diamond ◇ | Yes/No questions, conditions (e.g., `Is n > 0?`) |
| **Input/Output** | Parallelogram ▱ | Reading input or displaying output |
| **Flow Lines** | Arrows → | Direction of execution flow |
| **Connector** | Small Circle ○ | Connect parts of a large flowchart across pages |

</div>

<div class="cp-note">

🔑 **Memory trick:** **D**iamond = **D**ecision. **R**ectangle = **R**un a process. **P**arallelogram = **P**ut in / **P**rint out.

</div>

---

## Flowchart Examples

### Example 1: Check if a Number is Even or Odd

**Algorithm:**
1. Start
2. Read N
3. Is N % 2 == 0?
   - Yes → Print "Even"
   - No → Print "Odd"
4. Stop

```
    [START]
       |
  [Read N]
       |
  <N % 2 == 0?>
  /            \
Yes             No
 |               |
[Print "Even"]  [Print "Odd"]
  \             /
       |
    [STOP]
```

**C Code:**

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

---

### Example 2: Sum of Numbers 1 to N (Loop Flowchart)

**Algorithm:**
1. Start
2. Read N
3. Set sum = 0, i = 1
4. Is i ≤ N?
   - Yes: sum = sum + i; i = i + 1; go back to step 4
   - No: Print sum
5. Stop

```
    [START]
       |
  [Read N]
       |
  [sum=0, i=1]
       |
  <Is i <= N?>----No--->[Print sum]--->[STOP]
       |
      Yes
       |
  [sum = sum + i]
       |
  [i = i + 1]
       |
  (loop back up to <Is i <= N?>)
```

**C Code:**

```c
#include <stdio.h>

int main() {
    int n, i, sum = 0;
    printf("Enter N: ");
    scanf("%d", &n);

    for (i = 1; i <= n; i++)
        sum += i;

    printf("Sum = %d\n", sum);
    return 0;
}
```

---

### Example 3: Find Grade Based on Marks

```c
#include <stdio.h>

int main() {
    float marks;
    char grade;

    printf("Enter marks (0-100): ");
    scanf("%f", &marks);

    /* Selection flowchart: cascading decisions */
    if (marks >= 80)       grade = 'A';
    else if (marks >= 70)  grade = 'B';
    else if (marks >= 60)  grade = 'C';
    else if (marks >= 50)  grade = 'D';
    else                   grade = 'F';

    printf("Grade: %c\n", grade);
    return 0;
}
```

---

## Converting Flowcharts into Programs

The conversion process follows these rules:

<div class="cp-definition">

| Flowchart Element | C Code Equivalent |
|-------------------|-------------------|
| Start/End | `main()` opening and `return 0;` closing |
| Input parallelogram | `scanf(...)` |
| Output parallelogram | `printf(...)` |
| Process rectangle | Assignment or calculation statement |
| Decision (Yes/No) | `if / else if / else` or `switch` |
| Loop (back arrow) | `for`, `while`, or `do-while` |

</div>

---

## Practice Problems

<details>
<summary>🧩 Practice 1 — Draw a Flowchart</summary>

**Problem:** Draw a flowchart for an algorithm that reads 5 numbers and counts how many are positive.

**Flowchart description:**
```
[START]
  |
[count = 0, i = 1]
  |
<Is i <= 5?>---No--->[Print count]--->[STOP]
  |
 Yes
  |
[Read N]
  |
<Is N > 0?>---No--->[i = i + 1] (loop back)
  |
 Yes
  |
[count = count + 1]
  |
[i = i + 1]
  |
(loop back to <Is i <= 5?>)
```

**C Implementation:**

```c
#include <stdio.h>

int main() {
    int i, n, count = 0;

    for (i = 1; i <= 5; i++) {
        printf("Enter number %d: ", i);
        scanf("%d", &n);
        if (n > 0)
            count++;
    }

    printf("Positive numbers: %d\n", count);
    return 0;
}
```

</details>

<details>
<summary>🧩 Practice 2 — Identify Symbols</summary>

**Question:** In a flowchart for "Calculate factorial of N", identify the correct symbol for each step:

1. `START`
2. `Read N`
3. `Is i <= N?`
4. `fact = fact * i`
5. `Print fact`
6. `END`

**Answers:**
1. `START` → **Oval (Terminal)**
2. `Read N` → **Parallelogram (Input)**
3. `Is i <= N?` → **Diamond (Decision)**
4. `fact = fact * i` → **Rectangle (Process)**
5. `Print fact` → **Parallelogram (Output)**
6. `END` → **Oval (Terminal)**

</details>

<details>
<summary>🧩 Practice 3 — Convert Flowchart to Code</summary>

**Given flowchart:**
```
[START]
  |
[Read A, B]
  |
<Is A > B?>
  |Yes         |No
[Print A]    [Print B]
  |             |
[STOP]       [STOP]
```

**C Implementation:**

```c
#include <stdio.h>

int main() {
    int a, b;
    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);

    if (a > b)
        printf("Larger: %d\n", a);
    else
        printf("Larger: %d\n", b);

    return 0;
}
```

</details>
