# 1. Introduction to Computer Programming Methodology

## What is Computer Programming?

**Computer programming** is the process of designing, writing, testing, debugging, and maintaining the source code of computer programs. It involves creating a precise set of instructions that tell a computer how to perform specific tasks to solve a problem.

<div class="cp-definition">

#### Key Components of Programming

- **Instructions** — Step-by-step commands the computer executes
- **Logic** — The reasoning and flow that determines how the program behaves
- **Data** — Information the program receives, stores, and transforms
- **Syntax** — The grammatical rules of the programming language

</div>

<div class="cp-note">

💡 **Important:** Programming is not just about writing code — it is about *solving problems systematically* using computational thinking.

</div>

---

## The Role of Programming in Problem Solving

Programming serves as a bridge between human problems and computer solutions. A program can:

- **Automate repetitive tasks** — Eliminate manual, time-consuming work
- **Process large datasets** — Analyze thousands of records in seconds
- **Model complex systems** — Simulate real-world phenomena mathematically
- **Enable communication** — Power apps, websites, and networked services
- **Solve intractable tasks** — Tackle problems far beyond human mental speed

---

## The Program Development Life Cycle (PDLC)

The **PDLC** is a structured, repeatable process for building software. It ensures you think before you code.

<div class="cp-definition">

#### The 7 Phases of the PDLC

| Phase | Description | Key Activities |
|-------|-------------|----------------|
| **1. Problem Analysis** | Understand what needs to be solved | Identify requirements, inputs, outputs, constraints |
| **2. Design** | Plan the solution | Create algorithms, flowcharts, pseudocode |
| **3. Coding** | Write the actual program | Implement the design in a programming language |
| **4. Testing** | Verify the program works correctly | Test with valid, invalid, and boundary inputs |
| **5. Debugging** | Fix errors found during testing | Identify and resolve syntax, logic, runtime errors |
| **6. Documentation** | Record how the program works | Write comments, user manuals, technical docs |
| **7. Maintenance** | Update and improve over time | Fix new bugs, add features, optimize performance |

</div>

### Worked Example: PDLC for a Rectangle Area Calculator

**Phase 1 — Analysis:**
- Input: length, width
- Output: area
- Constraint: length and width must be positive numbers
- Formula: `area = length × width`

**Phase 2 — Design (Algorithm):**
1. Start
2. Read `length` from user
3. Read `width` from user
4. Calculate `area = length * width`
5. Display `area`
6. Stop

**Phase 3 — Coding (C):**

```c
/* Program to calculate the area of a rectangle */
#include <stdio.h>

int main() {
    float length, width, area;

    /* Input */
    printf("Enter length: ");
    scanf("%f", &length);

    printf("Enter width: ");
    scanf("%f", &width);

    /* Processing */
    area = length * width;

    /* Output */
    printf("Area = %.2f\n", area);

    return 0;
}
```

**Phase 4 — Testing:**
| Test Case | Length | Width | Expected Output | Pass? |
|-----------|--------|-------|-----------------|-------|
| Normal | 5 | 3 | 15.00 | ✅ |
| Decimal | 10.5 | 2.5 | 26.25 | ✅ |
| Zero | 0 | 5 | 0.00 | ✅ |

---

## Why Follow Programming Methodologies?

<div class="cp-tip">

✅ **Systematic Approach** — Reduces errors and confusion by giving each step a clear purpose.  
✅ **Better Quality** — Methodologies lead to more reliable, maintainable code.  
✅ **Team Collaboration** — Standard methods help multiple programmers work in sync.  
✅ **Time Efficiency** — Proper planning prevents expensive last-minute redesigns.  
✅ **Cost Reduction** — Catching bugs early is far cheaper than post-deployment fixes.  
✅ **Scalability** — Well-structured programs are easier to expand and modify.

</div>

<div class="cp-warning">

⚠️ **Common Beginner Mistake:** Jumping straight into coding without analysis or design ("code-first" approach) almost always leads to buggy, unmaintainable programs that need to be rewritten from scratch.

</div>

---

## Practice Problems

<details>
<summary>🧩 Practice 1 — Identify PDLC Phases</summary>

**Problem:** You are asked to build a program that converts temperatures from Celsius to Fahrenheit.

For each of the following activities, identify which PDLC phase it belongs to:

1. Writing `float celsius, fahrenheit;` in C
2. Drawing a flowchart showing the calculation steps
3. Running the program with input `100°C` and checking the result is `212°F`
4. Fixing a bug where the formula used `+ 32` instead of `* 9/5 + 32`
5. Writing a comment explaining what the program does

**Answer:**

1. **Coding** — writing actual implementation code
2. **Design** — creating a flowchart to plan the logic
3. **Testing** — verifying the output with a known test case
4. **Debugging** — finding and fixing the logical error in the formula
5. **Documentation** — annotating the code

</details>

<details>
<summary>🧩 Practice 2 — Write a Mini Algorithm</summary>

**Problem:** Write a step-by-step algorithm to find whether a given number is positive, negative, or zero.

**Solution Algorithm:**
1. Start
2. Read number `n` from user
3. If `n > 0` then display "Positive"
4. Else if `n < 0` then display "Negative"
5. Else display "Zero"
6. Stop

**C Implementation:**

```c
#include <stdio.h>

int main() {
    float n;
    printf("Enter a number: ");
    scanf("%f", &n);

    if (n > 0)
        printf("Positive\n");
    else if (n < 0)
        printf("Negative\n");
    else
        printf("Zero\n");

    return 0;
}
```

</details>

<details>
<summary>🧩 Practice 3 — Short Answer Questions</summary>

**Q1:** List three benefits of following the PDLC instead of coding immediately.

**Answer:** Any three of: systematic approach, better code quality, improved team collaboration, time efficiency, cost reduction, proper documentation, easier scalability.

---

**Q2:** In which phase would you discover that your formula is computing the wrong result?

**Answer:** **Testing phase** (or Debugging, since fixing it follows discovery).

---

**Q3:** Why is documentation important even after the program is working?

**Answer:** Documentation helps future programmers (or yourself months later) understand how the program works, making maintenance and updates much easier.

</details>
