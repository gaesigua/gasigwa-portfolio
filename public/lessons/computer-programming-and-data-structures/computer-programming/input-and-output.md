# 9. Input and Output

## Input and Output in C

C handles input and output through **standard library functions** declared in `<stdio.h>` (Standard Input/Output). The two most fundamental functions are `printf()` for output and `scanf()` for input.

<div class="cp-definition">

| Function | Direction | Purpose |
|----------|-----------|---------|
| `printf(format, ...)` | Output | Formats and prints data to the screen |
| `scanf(format, ...)` | Input | Reads formatted data from the keyboard |
| `putchar(c)` | Output | Prints a single character |
| `getchar()` | Input | Reads a single character |
| `puts(str)` | Output | Prints a string + newline |
| `gets(str)` | Input | Reads a line (⚠️ unsafe, use `fgets` instead) |

</div>

---

## printf — Formatted Output

### Format Specifiers

```c
#include <stdio.h>

int main() {
    int    age    = 22;
    float  gpa    = 3.75f;
    double pi     = 3.14159265358979;
    char   grade  = 'A';
    char   name[] = "Alice";

    printf("Name   : %s\n",     name);   /* string         */
    printf("Age    : %d\n",     age);    /* decimal integer */
    printf("Grade  : %c\n",     grade);  /* character       */
    printf("GPA    : %.2f\n",   gpa);    /* float, 2 d.p.   */
    printf("Pi     : %.10lf\n", pi);     /* double, 10 d.p. */
    printf("Hex age: %x\n",     age);    /* hexadecimal     */
    printf("Octal  : %o\n",     age);    /* octal           */

    return 0;
}
```

**Output:**
```
Name   : Alice
Age    : 22
Grade  : A
GPA    : 3.75
Pi     : 3.1415926536
Hex age: 16
Octal  : 26
```

### Escape Sequences

| Sequence | Meaning |
|----------|---------|
| `\n` | Newline |
| `\t` | Horizontal tab |
| `\\` | Literal backslash |
| `\"` | Literal double quote |
| `\0` | Null character (string terminator) |
| `\r` | Carriage return |

### Width and Precision Formatting

```c
printf("%10d\n",    42);     /*  Right-aligned in 10 chars:         42 */
printf("%-10d|\n",  42);     /*  Left-aligned in 10 chars:  42        | */
printf("%010d\n",   42);     /*  Zero-padded: 0000000042 */
printf("%8.3f\n",   3.14);   /*  Total width=8, 3 decimal places:   3.140 */
printf("%.5s\n", "Hello World");  /*  Only first 5 chars: Hello */
```

---

## scanf — Formatted Input

```c
#include <stdio.h>

int main() {
    int age;
    float salary;
    char name[50];

    printf("Enter your name: ");
    scanf("%49s", name);          /* %s reads until whitespace */

    printf("Enter age and salary: ");
    scanf("%d %f", &age, &salary); /* read two values on same line */

    printf("\n--- Details ---\n");
    printf("Name  : %s\n",     name);
    printf("Age   : %d\n",     age);
    printf("Salary: %.2f\n",   salary);

    return 0;
}
```

<div class="cp-warning">

⚠️ **Always use `&` with `scanf` for scalar variables (`int`, `float`, `char`)!**  
Do NOT use `&` for array/string variables — the array name is already a pointer to memory.

```c
int n;
scanf("%d", &n);       /* ✅ correct — scalar needs & */

char name[50];
scanf("%s", name);     /* ✅ correct — array, no & needed */
scanf("%s", &name);    /* ⚠️ works but incorrect style */
```

</div>

---

## Reading Multiple Values

```c
#include <stdio.h>

int main() {
    int a, b, c;

    /* Method 1: space-separated on one line */
    printf("Enter three numbers: ");
    scanf("%d %d %d", &a, &b, &c);
    printf("Sum = %d\n", a + b + c);

    return 0;
}
```

---

## Input Validation Pattern

```c
#include <stdio.h>

int main() {
    int age;

    do {
        printf("Enter age (1-120): ");
        scanf("%d", &age);
        if (age < 1 || age > 120)
            printf("Invalid! Please try again.\n");
    } while (age < 1 || age > 120);

    printf("Valid age: %d\n", age);
    return 0;
}
```

---

## Complete I/O Program: Student Record

```c
#include <stdio.h>

int main() {
    char name[60];
    int  studentID;
    float marks[3], total = 0, average;

    printf("=== Student Record Entry ===\n");

    printf("Student ID : ");
    scanf("%d", &studentID);

    printf("Full Name  : ");
    scanf(" %59[^\n]", name);   /* read full line including spaces */

    int i;
    for (i = 0; i < 3; i++) {
        printf("Mark %d (0-100): ", i + 1);
        scanf("%f", &marks[i]);
        total += marks[i];
    }

    average = total / 3.0f;

    printf("\n=== Student Report ===\n");
    printf("ID      : %d\n", studentID);
    printf("Name    : %s\n", name);
    printf("Total   : %.1f\n", total);
    printf("Average : %.2f\n", average);
    printf("Grade   : %c\n",
           average >= 80 ? 'A' :
           average >= 70 ? 'B' :
           average >= 60 ? 'C' :
           average >= 50 ? 'D' : 'F');

    return 0;
}
```

---

## Practice Problems

<details>
<summary>🧩 Practice 1 — Format Specifiers</summary>

**Problem:** What is the exact output of this program?

```c
#include <stdio.h>
int main() {
    printf("|%10s|\n", "Hi");
    printf("|%-10s|\n", "Hi");
    printf("|%06.2f|\n", 3.5);
    printf("|%+d|\n", 42);
    printf("|%+d|\n", -42);
    return 0;
}
```

**Answer:**
```
|        Hi|
|Hi        |
|003.50|
|+42|
|-42|
```

- `%10s` — right-aligns "Hi" in 10 characters
- `%-10s` — left-aligns with trailing spaces
- `%06.2f` — total width 6, 2 decimal places, zero-padded
- `%+d` — always shows sign (+ or -)

</details>

<details>
<summary>🧩 Practice 2 — Input Program</summary>

**Problem:** Write a C program that reads the length, width, and height of a rectangular box and calculates its volume and surface area.

```c
#include <stdio.h>

int main() {
    float l, w, h, volume, surface;

    printf("Enter length, width, height: ");
    scanf("%f %f %f", &l, &w, &h);

    volume  = l * w * h;
    surface = 2 * (l*w + l*h + w*h);

    printf("Volume       = %.2f\n", volume);
    printf("Surface Area = %.2f\n", surface);

    return 0;
}
```

</details>

<details>
<summary>🧩 Practice 3 — Input Validation</summary>

**Problem:** Write a C program that asks the user for a password (a number). Keep asking until the user enters exactly `1234`. Then print "Access Granted".

```c
#include <stdio.h>

int main() {
    int password;

    do {
        printf("Enter password: ");
        scanf("%d", &password);
        if (password != 1234)
            printf("Wrong password. Try again.\n");
    } while (password != 1234);

    printf("Access Granted!\n");
    return 0;
}
```

</details>
