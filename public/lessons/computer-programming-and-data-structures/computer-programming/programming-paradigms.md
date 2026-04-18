# 12. Programming Paradigms

## What is a Programming Paradigm?

A **programming paradigm** is a fundamental style or approach to programming that shapes how programmers think about and structure their code. Different paradigms suit different types of problems.

<div class="cp-definition">

#### Major Programming Paradigms

| Paradigm | Core Idea | Examples |
|----------|-----------|---------|
| **Procedural** | Sequence of instructions; organized into functions | C, Pascal, Fortran |
| **Object-Oriented (OOP)** | Data and behavior bundled into objects | Java, C++, Python |
| **Functional** | Computation as evaluation of mathematical functions | Haskell, ML, Lisp |
| **Declarative** | Describe WHAT to do, not HOW | SQL, HTML |
| **Event-Driven** | Program responds to events (clicks, timers) | JavaScript, GUI apps |

</div>

---

## Procedural Programming

**Procedural programming** (the paradigm used by C) organizes code as a sequence of **procedures** (functions) that execute top-to-bottom. Data is passed between functions as parameters.

<div class="cp-tip">

✅ **Strengths:**
- Simple and straightforward
- Close to how hardware actually works
- Very efficient
- Easy to reason about for small-to-medium programs

</div>

```c
/* Procedural C — everything is a function */
#include <stdio.h>

/* Data is separate from functions */
typedef struct {
    char name[50];
    float salary;
} Employee;

/* Functions operate on data */
void printEmployee(Employee e) {
    printf("Name: %s | Salary: %.2f\n", e.name, e.salary);
}

float applyBonus(float salary, float rate) {
    return salary * (1 + rate);
}

int main() {
    Employee emp = {"Alice", 85000.0f};
    emp.salary = applyBonus(emp.salary, 0.10);  /* 10% bonus */
    printEmployee(emp);
    return 0;
}
```

---

## Object-Oriented Programming (OOP)

In **OOP** (e.g., Java, C++), data and the functions that operate on it are bundled together into **objects** — instances of **classes**.

### Core OOP Concepts

<div class="cp-definition">

| Concept | Definition |
|---------|-----------|
| **Class** | A blueprint or template defining properties and behaviors |
| **Object** | An instance of a class (the actual thing created from the blueprint) |
| **Encapsulation** | Hiding internal details; exposing only what's necessary |
| **Inheritance** | A class inherits properties/methods from a parent class |
| **Polymorphism** | Same method name, different behavior depending on the object |
| **Abstraction** | Modeling real-world things by their essential characteristics only |

</div>

### Java Example (equivalent of the C code above)

```java
// Java — OOP style
public class Employee {
    // Properties (data) bundled with behaviors (methods)
    private String name;
    private double salary;

    // Constructor
    public Employee(String name, double salary) {
        this.name   = name;
        this.salary = salary;
    }

    // Method (behavior)
    public void applyBonus(double rate) {
        this.salary *= (1 + rate);
    }

    public void display() {
        System.out.printf("Name: %s | Salary: %.2f%n", name, salary);
    }

    public static void main(String[] args) {
        Employee emp = new Employee("Alice", 85000.0);
        emp.applyBonus(0.10);
        emp.display();
    }
}
```

---

## Functional Programming Concepts

**Functional programming** treats computation as the evaluation of mathematical functions. It avoids **changing state** and **mutable data**.

### Key Ideas

- **Pure functions** — Same input always produces the same output; no side effects
- **Immutability** — Data is never modified after creation; new data is created instead
- **First-class functions** — Functions can be passed as arguments and returned from other functions
- **Higher-order functions** — Functions that take or return other functions (e.g., `map`, `filter`, `reduce`)

```c
/* C approximating functional style with function pointers */
#include <stdio.h>

/* Pure function — no side effects, deterministic */
int double_it(int x) { return x * 2; }
int triple_it(int x) { return x * 3; }
int add_ten(int x)   { return x + 10; }

/* Higher-order function — takes a function pointer as argument */
void apply_to_array(int arr[], int n, int (*transform)(int)) {
    int i;
    for (i = 0; i < n; i++)
        arr[i] = transform(arr[i]);
}

int main() {
    int nums[] = {1, 2, 3, 4, 5};
    int n = 5, i;

    apply_to_array(nums, n, double_it);  /* Pass function as argument */

    for (i = 0; i < n; i++)
        printf("%d ", nums[i]);  /* 2 4 6 8 10 */
    printf("\n");

    return 0;
}
```

---

## Comparison of Paradigms

<div class="cp-comparison">
<div class="cp-comparison-left">
<h5>✅ Use Procedural (C) When:</h5>

- System programming (OS, drivers, embedded)
- Performance is critical
- Projects are small-to-medium in scale
- Direct hardware interaction needed
</div>
<div class="cp-comparison-right">
<h5>✅ Use OOP (Java/C++) When:</h5>

- Large, complex applications
- GUI applications, games
- Real-world entities map well to objects
- Large teams collaborating
</div>
</div>

| Feature | Procedural | OOP | Functional |
|---------|-----------|-----|-----------|
| **Focus** | Actions | Objects | Transformations |
| **Data** | Separate from functions | Inside objects | Immutable |
| **Reuse** | Functions | Classes/Inheritance | Function composition |
| **Side effects** | Common | Managed via encapsulation | Avoided |
| **Suited for** | Systems, scripts | Business apps, GUIs | Data processing, concurrency |

---

## Practice Problems

<details>
<summary>🧩 Practice 1 — Identify the Paradigm</summary>

**Question:** Identify the paradigm illustrated by each code snippet:

**A:**
```c
int total = 0;
for (int i = 0; i < n; i++) total += arr[i];
printf("Total: %d\n", total);
```

**B:**
```java
BankAccount account = new BankAccount(1000);
account.deposit(500);
account.withdraw(200);
account.printBalance();
```

**C:**
```sql
SELECT name, salary FROM employees WHERE salary > 50000;
```

**Answers:**
- **A:** Procedural — sequence of steps, operations on data
- **B:** Object-Oriented — methods called on an object (`account`)
- **C:** Declarative — describes WHAT to retrieve, not HOW to find it

</details>

<details>
<summary>🧩 Practice 2 — Procedural Design</summary>

**Problem:** Design a procedural C program for a simple bank account. The program should have functions for: deposit, withdraw (with balance check), and display balance. Start with 0 balance.

```c
#include <stdio.h>

float balance = 0.0f;  /* shared state (use carefully!) */

void deposit(float amount) {
    if (amount > 0) {
        balance += amount;
        printf("Deposited %.2f. New balance: %.2f\n", amount, balance);
    }
}

void withdraw(float amount) {
    if (amount > balance)
        printf("Insufficient funds!\n");
    else {
        balance -= amount;
        printf("Withdrew %.2f. New balance: %.2f\n", amount, balance);
    }
}

void displayBalance() {
    printf("Current Balance: %.2f Rwf\n", balance);
}

int main() {
    deposit(50000);
    deposit(25000);
    withdraw(10000);
    withdraw(100000);  /* should fail */
    displayBalance();
    return 0;
}
```

</details>

<details>
<summary>🧩 Practice 3 — OOP Concepts (Conceptual)</summary>

**Question:** Explain the following OOP term in your own words, and give a real-world analogy:

1. **Class** — A *blueprint* or *template*. Example: A house blueprint defines layout, rooms, doors — but is not a house itself.

2. **Object** — An *instance* created from a class. Example: Your actual house (built from the blueprint) is an object. Two houses from the same blueprint are two objects.

3. **Encapsulation** — *Hiding internal details*. Example: A car engine is hidden under the hood. You only interact through the steering wheel, pedals, and gear stick — you don't need to know how the engine works.

4. **Inheritance** — *Inheriting characteristics from a parent*. Example: A `Manager` is-an `Employee` — inherits name, salary, ID — but also has extra attributes like `department` and `teamSize`.

5. **Polymorphism** — *Same method, different behavior*. Example: `makeSound()` on a `Dog` object says "Woof", on a `Cat` object says "Meow" — same method name, different result.

</details>
