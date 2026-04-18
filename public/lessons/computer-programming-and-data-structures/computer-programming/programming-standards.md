# 15. Programming Standards

## Why Programming Standards Matter

Programming standards are agreed-upon conventions for writing code. They ensure that code written by different programmers is consistent, readable, and maintainable — especially in team environments.

<div class="cp-tip">

✅ Code is read far more often than it is written. Standards make reading faster and understanding easier for everyone on a team.

</div>

---

## Coding Standards and Conventions

### 1. Naming Conventions

Choose names that are descriptive and consistent:

```c
/* BAD — meaningless names */
int a, b, c;
float x = a * b / c;

/* GOOD — descriptive names */
int length, width, height;
float volume = length * width * height;
```

**Common C Naming Conventions:**

| Element | Style | Example |
|---------|-------|---------|
| Variables, functions | `snake_case` | `student_count`, `calculate_gpa` |
| Constants | `ALL_CAPS` | `MAX_SIZE`, `PI`, `TAX_RATE` |
| Structs | `PascalCase` or `snake_case` | `Student`, `BankAccount` |
| Pointers | prefix with `p_` or `ptr` (optional) | `p_node`, `ptr_list` |

### 2. Indentation and Spacing

```c
/* BAD — no indentation, hard to read */
int main(){int i;for(i=0;i<10;i++){if(i%2==0){printf("%d\n",i);}}}

/* GOOD — consistent 4-space indentation */
int main() {
    int i;
    for (i = 0; i < 10; i++) {
        if (i % 2 == 0) {
            printf("%d\n", i);
        }
    }
    return 0;
}
```

**Rules:**
- Use **4 spaces** (or 1 tab) per indentation level
- Put a **space** after keywords: `if (`, `for (`, `while (`
- Put a **space** around binary operators: `a + b`, `x == y`
- Opening brace `{` on same line as function/control statement (K&R style)

### 3. Function Length

Keep functions short and focused. A function should do **one thing only**:

```c
/* BAD — one function does everything */
void doEverything() {
    /* ... 200 lines of mixed concerns ... */
}

/* GOOD — each function has a single responsibility */
void readInput(Student *s) { /* ... */ }
float computeGPA(Student s) { /* ... */ }
void displayReport(Student s, float gpa) { /* ... */ }

int main() {
    Student s;
    readInput(&s);
    float gpa = computeGPA(s);
    displayReport(s, gpa);
    return 0;
}
```

---

## Documentation and Comments

### Types of Comments

```c
/* 
 * File: student_system.c
 * Author: Your Name
 * Date: April 2026
 * Description: Student grade management system.
 *              Reads student records, computes GPA, and generates reports.
 */

#include <stdio.h>

#define MAX_STUDENTS 100    /* Maximum number of students allowed */

/*
 * Function: computeGPA
 * Purpose : Calculate GPA from an array of marks
 * Params  : marks[]  - array of mark values (0-100)
 *           n        - number of marks
 * Returns : GPA as a float (0.0 - 4.0)
 */
float computeGPA(int marks[], int n) {
    int i, total = 0;
    for (i = 0; i < n; i++)
        total += marks[i];
    
    float avg = (float)total / n;
    
    /* Convert percentage average to GPA scale */
    if (avg >= 80) return 4.0f;
    if (avg >= 70) return 3.0f;
    if (avg >= 60) return 2.0f;
    if (avg >= 50) return 1.0f;
    return 0.0f;
}
```

### Comment Best Practices

<div class="cp-comparison">
<div class="cp-comparison-left">
<h5>✅ Good Comments</h5>

- Explain WHY, not WHAT
- Describe non-obvious logic
- Document function contracts
- Warn about tricky side effects
</div>
<div class="cp-comparison-right">
<h5>❌ Bad Comments</h5>

- Restate obvious code
- Lie (outdated comments)
- Comment every single line
- Leave TODO/FIXME forever
</div>
</div>

```c
/* BAD — states the obvious */
i = i + 1;  /* increment i by 1 */

/* GOOD — explains WHY */
i = i + 1;  /* skip the header row (row 0 is titles, data starts at 1) */
```

---

## Debugging Strategies

### Types of Errors

| Error Type | When Detected | Example |
|-----------|--------------|---------|
| **Syntax error** | Compile time | Missing `;`, mismatched `{}` |
| **Runtime error** | During execution | Division by zero, null pointer |
| **Logic error** | Testing / usage | Wrong formula gives wrong output |

### Debugging Techniques

**1. Print Debugging (printf debugging)**
The simplest technique — print variable values at key points:

```c
int result = calculate(a, b);
printf("[DEBUG] a=%d, b=%d, result=%d\n", a, b, result);  /* temporary */
```

**2. Rubber Duck Debugging**
Explain your code out loud line-by-line to someone (or a rubber duck). You usually spot the bug while explaining.

**3. Binary Search Debugging**
Comment out half your code to find which half contains the bug, then narrow down.

**4. Desk Checking (Dry Run)**
Manually trace through the algorithm with sample input on paper, tracking variable values at each step:

```
Trace: finding factorial of 4
i=1: product = 1*1 = 1
i=2: product = 1*2 = 2
i=3: product = 2*3 = 6
i=4: product = 6*4 = 24  ✓
```

---

## Testing Strategies

### Test Case Categories

<div class="cp-definition">

| Category | Description | Example for "check if n is positive" |
|----------|-------------|--------------------------------------|
| **Normal / Valid** | Typical expected inputs | n = 5 (positive), n = -3 (negative) |
| **Boundary** | Edge values of valid input range | n = 0, n = 1, n = -1 |
| **Invalid** | Inputs outside what's expected | n = "abc" (non-integer) |
| **Large** | Very large inputs to check overflow | n = 2,147,483,647 (`INT_MAX`) |

</div>

```c
/* Systematic test table for GPA calculator */
/* Input: average(%) -> Expected GPA  -> Actual output */
/* 95       -> 4.0   -> 4.0  ✓ */
/* 75       -> 3.0   -> 3.0  ✓ */
/* 65       -> 2.0   -> 2.0  ✓ */
/* 55       -> 1.0   -> 1.0  ✓ */
/* 40       -> 0.0   -> 0.0  ✓ */
/* -5       -> ???   -> handle gracefully ✓ */
/* 150      -> ???   -> handle gracefully ✓ */
```

---

## Complete Well-Documented Program: Temperature Logger

```c
/*
 * File   : temp_logger.c
 * Purpose: Log and analyze daily temperatures.
 *          Reads N temperatures, finds min/max, and computes average.
 * Author : Student Name
 * Date   : April 2026
 */

#include <stdio.h>

#define MAX_READINGS 365  /* Maximum readings per year */

/*
 * readTemperatures - Reads n temperature values from user into array.
 * arr : output array (must have at least n elements)
 * n   : number of readings to collect
 */
void readTemperatures(float arr[], int n) {
    int i;
    for (i = 0; i < n; i++) {
        printf("Day %d temperature (°C): ", i + 1);
        scanf("%f", &arr[i]);
    }
}

/*
 * analyzeTemperatures - Computes min, max, and average.
 * Returns average via return value; min/max via pointer params.
 */
float analyzeTemperatures(float arr[], int n, float *min, float *max) {
    *min = *max = arr[0];
    float sum = arr[0];
    int i;

    for (i = 1; i < n; i++) {
        if (arr[i] < *min) *min = arr[i];
        if (arr[i] > *max) *max = arr[i];
        sum += arr[i];
    }

    return sum / n;  /* average */
}

int main() {
    int n;
    float temps[MAX_READINGS];
    float min, max, avg;

    printf("How many days of data? ");
    scanf("%d", &n);

    /* Validate input */
    if (n < 1 || n > MAX_READINGS) {
        printf("Invalid: must be 1-%d readings.\n", MAX_READINGS);
        return 1;
    }

    readTemperatures(temps, n);
    avg = analyzeTemperatures(temps, n, &min, &max);

    printf("\n=== Temperature Report ===\n");
    printf("Readings : %d\n", n);
    printf("Minimum  : %.1f°C\n", min);
    printf("Maximum  : %.1f°C\n", max);
    printf("Average  : %.2f°C\n", avg);

    return 0;
}
```

---

## Practice Problems

<details>
<summary>🧩 Practice 1 — Code Review</summary>

**Problem:** Identify all the standards violations in this code and rewrite it:

```c
int main(){int x,y,z;scanf("%d%d",&x,&y);z=x+y;printf("%d",z);}
```

**Issues:**
1. No indentation or whitespace
2. No spaces after keywords
3. Variable names `x`, `y`, `z` are meaningless
4. No descriptive output message
5. Missing `return 0;`
6. No comments explaining purpose

**Fixed version:**
```c
#include <stdio.h>

/* Reads two integers and displays their sum */
int main() {
    int first_number, second_number, sum;

    printf("Enter two numbers: ");
    scanf("%d %d", &first_number, &second_number);

    sum = first_number + second_number;

    printf("Sum = %d\n", sum);
    return 0;
}
```

</details>

<details>
<summary>🧩 Practice 2 — Create a Test Table</summary>

**Problem:** Create a test table for a function `isLeapYear(year)` that returns 1 if the year is a leap year, 0 otherwise.

A year is a leap year if:
- Divisible by 4 AND not divisible by 100, OR
- Divisible by 400

| Test Case | Input | Expected | Category |
|-----------|-------|----------|---------|
| Regular non-leap | 2023 | 0 | Normal |
| Regular leap | 2024 | 1 | Normal |
| Divisible by 100, not 400 | 1900 | 0 | Boundary |
| Divisible by 400 | 2000 | 1 | Boundary |
| Year 0 | 0 | handle gracefully | Edge |
| Negative year | -4 | handle gracefully | Invalid |

</details>
