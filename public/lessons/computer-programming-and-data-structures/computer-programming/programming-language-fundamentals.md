# 8. Programming Language Fundamentals

## Syntax and Semantics

Before writing any C program, you must understand the two pillars of every programming language:

<div class="cp-definition">

| Term | Definition | Example |
|------|-----------|---------|
| **Syntax** | The grammar rules — how code must be *written* | `int x = 5;` (missing `;` is a syntax error) |
| **Semantics** | The *meaning* — what the code actually does when it runs | `int x = 5 / 0;` — syntactically valid but semantically causes division-by-zero error |

</div>

<div class="cp-note">

📌 A **syntax error** is caught by the compiler before the program runs.  
A **semantic error** may only appear at runtime or produce wrong results silently.

</div>

---

## Data Types in C

C is a **statically-typed** language — you must declare the type of every variable before using it.

<div class="cp-definition">

#### Primitive Data Types in C

| Type | Size | Range | Example |
|------|------|-------|---------|
| `char` | 1 byte | -128 to 127 (or 0-255) | `char grade = 'A';` |
| `int` | 4 bytes | -2,147,483,648 to 2,147,483,647 | `int age = 21;` |
| `short` | 2 bytes | -32,768 to 32,767 | `short x = 100;` |
| `long` | 4-8 bytes | ±2 billion or more | `long pop = 8000000000L;` |
| `float` | 4 bytes | ~6-7 significant digits | `float pi = 3.14159f;` |
| `double` | 8 bytes | ~15-17 significant digits | `double e = 2.718281828;` |

</div>

```c
#include <stdio.h>

int main() {
    char   letter  = 'R';           /* single character */
    int    count   = 42;            /* whole number */
    float  price   = 1500.75f;      /* single-precision decimal */
    double pi      = 3.14159265358; /* double-precision decimal */

    printf("Letter : %c\n", letter);
    printf("Count  : %d\n", count);
    printf("Price  : %.2f Rwf\n", price);
    printf("Pi     : %.10f\n", pi);

    return 0;
}
```

---

## Variables and Constants

### Variables

A **variable** is a named memory location that stores a value which can change during program execution.

```c
/* Declaration and initialization */
int    age    = 20;
float  salary = 85000.0f;
char   code   = 'X';

/* Declaration only (undefined initial value!) */
int total;        /* ⚠️ Always initialize before use */
total = 0;
```

**Naming Rules:**
- Must start with a letter or underscore (`_`)
- Can contain letters, digits, underscores
- Case-sensitive: `total` ≠ `Total` ≠ `TOTAL`
- Cannot be a C keyword (`int`, `return`, `if`, etc.)

### Constants

A **constant** holds a value that never changes during the program's execution.

```c
/* Method 1: #define (preprocessor macro) */
#define PI        3.14159265
#define MAX_SIZE  100
#define TAX_RATE  0.18

/* Method 2: const keyword (preferred in modern C) */
const int    DAYS_IN_WEEK = 7;
const float  GRAVITY      = 9.81f;
const char   NEWLINE      = '\n';
```

<div class="cp-tip">

✅ Use `const` for constants in C — the compiler checks the type.  
Use `#define` for simple substitution macros (like array sizes).

</div>

---

## Expressions and Statements

### Expressions

An **expression** produces a value. It can be:

```c
/* Arithmetic expressions */
int area  = length * width;   /* multiplication */
int rem   = 17 % 5;          /* modulus (remainder): rem = 2 */
float avg = (a + b + c) / 3.0f;

/* Relational expressions (produce 0 or 1) */
int isAdult = (age >= 18);    /* 1 if true, 0 if false */

/* Logical expressions */
int valid = (age > 0 && age < 120);

/* Compound assignment */
count += 1;   /* count = count + 1 */
sum   -= 5;   /* sum   = sum - 5   */
x     *= 2;   /* x     = x * 2     */
```

### Type Casting

```c
int a = 7, b = 2;

/* Integer division — WRONG if you expect 3.5 */
float result = a / b;          /* result = 3.0 (integer division!) */

/* Correct — cast one operand to float */
float correct = (float)a / b;  /* correct = 3.5 */
```

<div class="cp-warning">

⚠️ **Integer division truncates!** `7 / 2 = 3` in C, not 3.5. Always cast to `float` or `double` when you need decimal division.

</div>

### Operator Precedence

```c
/* Higher precedence executes first */
int x = 2 + 3 * 4;    /* x = 14 (not 20!) — * before + */
int y = (2 + 3) * 4;  /* y = 20 — parentheses override */
```

| Precedence (High → Low) | Operators |
|------------------------|-----------|
| 1 (Highest) | `()` `[]` |
| 2 | `!` `~` `++` `--` (unary) |
| 3 | `*` `/` `%` |
| 4 | `+` `-` |
| 5 | `<` `<=` `>` `>=` |
| 6 | `==` `!=` |
| 7 | `&&` |
| 8 | `||` |
| 9 (Lowest) | `=` `+=` `-=` etc. |

---

## Practice Problems

<details>
<summary>🧩 Practice 1 — Data Types</summary>

**Problem:** Choose the most appropriate C data type for each:

1. A student's age (0–120)
2. The price of a product in Rwf (e.g., 3500.50)
3. A single letter grade (A, B, C, D, F)
4. Population of a country (billions)
5. Scientific measurement requiring 14 decimal places of precision

**Answers:**
1. `int` (or `short`)
2. `float` (or `double` for more precision)
3. `char`
4. `long` or `unsigned long long`
5. `double`

</details>

<details>
<summary>🧩 Practice 2 — Expressions and Output</summary>

**Problem:** What is the output of this program?

```c
#include <stdio.h>

int main() {
    int a = 10, b = 3;
    float c;

    printf("%d\n", a + b);        /* ? */
    printf("%d\n", a * b);        /* ? */
    printf("%d\n", a % b);        /* ? */
    printf("%d\n", a / b);        /* ? */
    c = (float)a / b;
    printf("%.4f\n", c);          /* ? */

    return 0;
}
```

**Answers:**
```
13
30
1
3
3.3333
```

- `a + b = 13`
- `a * b = 30`
- `a % b = 1` (remainder of 10÷3)
- `a / b = 3` (integer division, truncated)
- `(float)a / b = 3.3333...`

</details>

<details>
<summary>🧩 Practice 3 — Constants and Variables</summary>

**Problem:** Write a C program that calculates the area and circumference of a circle. The formula uses `π ≈ 3.14159265`. Define `PI` as a constant.

```c
#include <stdio.h>

#define PI 3.14159265

int main() {
    float radius, area, circumference;

    printf("Enter radius: ");
    scanf("%f", &radius);

    area          = PI * radius * radius;
    circumference = 2 * PI * radius;

    printf("Area          = %.4f\n", area);
    printf("Circumference = %.4f\n", circumference);

    return 0;
}
```

</details>
