# 7. Pseudocode

## What is Pseudocode?

**Pseudocode** is a structured, human-readable description of an algorithm that uses informal, plain-English constructs combined with programming-like syntax. It is **not executable** by a computer — it is a planning and communication tool.

*"Pseudo"* means *fake* — it looks like code, but has no strict syntax rules.

<div class="cp-definition">

#### Why Use Pseudocode?

- **Language-independent** — the same pseudocode translates to C, Java, Python, etc.
- **Focuses on logic** — you think about the algorithm, not the language syntax
- **Easy to modify** — fixing logic in pseudocode is faster than rewriting code
- **Readable by non-programmers** — useful for communication with clients or teams
- **Direct path to code** — each pseudocode line maps cleanly to real code

</div>

---

## Rules and Conventions for Writing Pseudocode

There is no single universal standard, but these conventions are widely used:

<div class="cp-definition">

| Construct | Pseudocode Style |
|-----------|-----------------|
| Input | `INPUT variable` or `READ variable` |
| Output | `OUTPUT value` or `PRINT message` |
| Assignment | `SET variable = expression` |
| Condition (if) | `IF condition THEN ... ELSE ... END IF` |
| Count loop | `FOR i = start TO end DO ... END FOR` |
| While loop | `WHILE condition DO ... END WHILE` |
| Repeat-until | `REPEAT ... UNTIL condition` |
| Function call | `CALL functionName(args)` |
| Return | `RETURN value` |

</div>

---

## Pseudocode to C Code Mapping

### Example 1: Find Factorial

**Pseudocode:**
```
BEGIN factorial(n)
  SET result = 1
  FOR i = 1 TO n DO
    SET result = result * i
  END FOR
  RETURN result
END
```

**C Code:**
```c
int factorial(int n) {
    int result = 1, i;
    for (i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}
```

---

### Example 2: Linear Search

**Pseudocode:**
```
BEGIN linearSearch(arr, n, target)
  FOR i = 0 TO n-1 DO
    IF arr[i] = target THEN
      RETURN i        // found at index i
    END IF
  END FOR
  RETURN -1           // not found
END
```

**C Code:**
```c
int linearSearch(int arr[], int n, int target) {
    int i;
    for (i = 0; i < n; i++) {
        if (arr[i] == target)
            return i;
    }
    return -1;
}
```

---

### Example 3: Bubble Sort

**Pseudocode:**
```
BEGIN bubbleSort(arr, n)
  FOR i = 0 TO n-2 DO
    FOR j = 0 TO n-i-2 DO
      IF arr[j] > arr[j+1] THEN
        SWAP arr[j] AND arr[j+1]
      END IF
    END FOR
  END FOR
END
```

**C Code:**
```c
void bubbleSort(int arr[], int n) {
    int i, j, temp;
    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
```

---

### Example 4: Compound Interest

**Pseudocode:**
```
BEGIN
  INPUT principal, rate, years
  SET amount = principal * (1 + rate/100) ^ years
  SET interest = amount - principal
  OUTPUT "Final Amount:", amount
  OUTPUT "Interest Earned:", interest
END
```

**C Code:**
```c
#include <stdio.h>
#include <math.h>

int main() {
    float principal, rate, years, amount, interest;

    printf("Principal: ");  scanf("%f", &principal);
    printf("Rate (%%): ");  scanf("%f", &rate);
    printf("Years: ");      scanf("%f", &years);

    amount   = principal * pow(1 + rate / 100.0, years);
    interest = amount - principal;

    printf("Final Amount:   %.2f\n", amount);
    printf("Interest Earned: %.2f\n", interest);
    return 0;
}
```

---

## Practice Problems

<details>
<summary>🧩 Practice 1 — Write Pseudocode</summary>

**Problem:** Write pseudocode for a program that reads 10 numbers and finds the maximum and minimum values.

**Pseudocode:**
```
BEGIN
  INPUT num
  SET max = num
  SET min = num
  FOR i = 2 TO 10 DO
    INPUT num
    IF num > max THEN
      SET max = num
    END IF
    IF num < min THEN
      SET min = num
    END IF
  END FOR
  OUTPUT "Maximum:", max
  OUTPUT "Minimum:", min
END
```

**C Code:**
```c
#include <stdio.h>

int main() {
    int i, num, max, min;

    printf("Enter number 1: ");
    scanf("%d", &num);
    max = num;
    min = num;

    for (i = 2; i <= 10; i++) {
        printf("Enter number %d: ", i);
        scanf("%d", &num);
        if (num > max) max = num;
        if (num < min) min = num;
    }

    printf("Maximum: %d\n", max);
    printf("Minimum: %d\n", min);
    return 0;
}
```

</details>

<details>
<summary>🧩 Practice 2 — Pseudocode to Code</summary>

**Given Pseudocode:**
```
BEGIN
  INPUT n
  SET i = 1
  WHILE i <= n DO
    IF i MOD 2 = 0 THEN
      OUTPUT i
    END IF
    SET i = i + 1
  END WHILE
END
```

**Question:** What does this pseudocode do? Convert it to C.

**Answer:** It prints all even numbers from 1 to n.

```c
#include <stdio.h>

int main() {
    int n, i;
    printf("Enter n: ");
    scanf("%d", &n);

    i = 1;
    while (i <= n) {
        if (i % 2 == 0)
            printf("%d\n", i);
        i++;
    }
    return 0;
}
```

</details>

<details>
<summary>🧩 Practice 3 — Complete Pseudocode</summary>

**Problem:** Write pseudocode for checking if a number is prime.

**Pseudocode:**
```
BEGIN isPrime(n)
  IF n < 2 THEN
    RETURN FALSE
  END IF
  FOR i = 2 TO sqrt(n) DO
    IF n MOD i = 0 THEN
      RETURN FALSE
    END IF
  END FOR
  RETURN TRUE
END

BEGIN
  INPUT n
  IF isPrime(n) THEN
    OUTPUT n, "is prime"
  ELSE
    OUTPUT n, "is not prime"
  END IF
END
```

**C Code:**
```c
#include <stdio.h>
#include <math.h>

int isPrime(int n) {
    if (n < 2) return 0;
    int i;
    for (i = 2; i <= (int)sqrt(n); i++)
        if (n % i == 0) return 0;
    return 1;
}

int main() {
    int n;
    printf("Enter a number: ");
    scanf("%d", &n);

    if (isPrime(n))
        printf("%d is prime\n", n);
    else
        printf("%d is not prime\n", n);

    return 0;
}
```

</details>
