# Chapter 5.3: Gaussian Elimination Method

<div class="intro-box">
  <h2>Overview</h2>
  <p>The <strong>Gaussian Elimination Method</strong> is one of the most fundamental and widely-used algorithms in linear algebra. It is a systematic procedure for solving systems of linear equations by transforming the augmented matrix of the system into <strong>Row Echelon Form (REF)</strong> or <strong>Reduced Row Echelon Form (RREF)</strong> through a series of elementary row operations. This method is the backbone of computational mathematics and has applications in engineering, physics, computer graphics, and machine learning.</p>
</div>

## 5.3.1 What is Gaussian Elimination?

**Gaussian Elimination** (also called the **Row Reduction Method**) is a step-by-step algorithm that converts a system of linear equations into an equivalent, simpler system that is easy to solve. The method works on the **augmented matrix** of the system — a single matrix that combines the coefficient matrix `A` and the constants column `B`.

### Types of Solution Systems

Before we start, it is important to know that any system of linear equations will fall into one of three categories:

| Category                     | Description                         | Example                    |
| ---------------------------- | ----------------------------------- | -------------------------- |
| **Consistent & Independent** | Has exactly **one** unique solution | 3x + y = 7 and x - y = 1   |
| **Consistent & Dependent**   | Has **infinitely many** solutions   | 2x + y = 4 and 4x + 2y = 8 |
| **Inconsistent**             | Has **no solution**                 | x + y = 5 and x + y = 9    |

---

## 5.3.2 The Augmented Matrix

The first step in Gaussian Elimination is to represent the system as an **augmented matrix** `[A | B]`.

For a system of three equations:

```
a₁x + b₁y + c₁z = d₁
a₂x + b₂y + c₂z = d₂
a₃x + b₃y + c₃z = d₃
```

The augmented matrix is written as:

```
[ a₁  b₁  c₁ | d₁ ]
[ a₂  b₂  c₂ | d₂ ]
[ a₃  b₃  c₃ | d₃ ]
```

The vertical bar `|` separates the coefficient columns from the constants column. Each **row** of the matrix represents one equation.

<div class="example" style="color: white">
  <h4>Example: Writing the Augmented Matrix</h4>
  <p>Write the augmented matrix for the system:</p>
  <p><code>2x + y - z = 8</code></p>
  <p><code>-3x - y + 2z = -11</code></p>
  <p><code>-2x + y + 2z = -3</code></p>
  <p><strong>Solution:</strong> The augmented matrix is:</p>
  <pre>
[ 2   1  -1 |  8 ]
[-3  -1   2 | -11]
[-2   1   2 | -3 ]
  </pre>
</div>

---

## 5.3.3 Elementary Row Operations

The key to Gaussian Elimination is that the following three **elementary row operations** transform a matrix into an equivalent system (one with the same solution set) without changing the solution:

| Operation        | Notation       | Description                               |
| ---------------- | -------------- | ----------------------------------------- |
| **Row Swap**     | Rᵢ ↔ Rⱼ        | Swap two rows                             |
| **Row Scaling**  | Rᵢ → k·Rᵢ      | Multiply a row by a non-zero constant `k` |
| **Row Addition** | Rᵢ → Rᵢ + k·Rⱼ | Add a multiple of one row to another row  |

These operations are the building blocks of the entire method. You combine them to eliminate variables step by step.

---

## 5.3.4 Row Echelon Form (REF)

The goal of **Forward Elimination** (the first phase of Gaussian Elimination) is to transform the augmented matrix into **Row Echelon Form (REF)**, which has the following properties:

1. All zero rows (if any) are at the **bottom**.
2. The **leading entry** (first non-zero entry) of each non-zero row is to the **right** of the leading entry of the row above it.
3. All entries **below** a leading entry are **zero**.

This creates an **upper triangular** structure:

```
[ * * * | * ]    ← leading entry in column 1
[ 0 * * | * ]    ← leading entry in column 2
[ 0 0 * | * ]    ← leading entry in column 3
```

Once in REF, you solve from the bottom row upward using **Back-Substitution**.

---

## 5.3.5 Solving a 2×2 System — Full Worked Example

<div class="example">
  <h4>Example 1: Solve using Gaussian Elimination</h4>
  <p>Solve the system:</p>
  <p><code>x + 2y = 8</code></p>
  <p><code>3x + 4y = 18</code></p>

  <p><strong>Step 1: Write the Augmented Matrix</strong></p>
  <pre style="color: white">
[ 1  2 | 8 ]   ← R₁
[ 3  4 | 18]   ← R₂
  </pre>

  <p><strong>Step 2: Forward Elimination — Eliminate x from R₂</strong></p>
  <p>Apply: <code>R₂ → R₂ - 3·R₁</code></p>
  <pre style="color: white">
R₂ = [3 - 3(1),  4 - 3(2),  18 - 3(8)] = [0, -2, -6]
     [ 1  2  | 8 ]
     [ 0 -2  | -6]

  </pre>

  <p><strong>Step 3: Back-Substitution</strong></p>
  <p>From Row 2: <code>-2y = -6 → y = 3</code></p>
  <p>Substitute into Row 1: <code>x + 2(3) = 8 → x + 6 = 8 → x = 2</code></p>

  <p><strong>Solution: x = 2, y = 3 ✓</strong></p>
</div>

---

## 5.3.6 Solving a 3×3 System — Full Worked Example

This is the most important case, as it is the type used in exams and real-world problems.

<div class="example">
  <h4>Example 2: Solve the 3×3 System</h4>
  <p>Solve the system:</p>
  <p><code>2x + y - z = 8</code></p>
  <p><code>-3x - y + 2z = -11</code></p>
  <p><code>-2x + y + 2z = -3</code></p>

  <p><strong>Step 1: Write the Augmented Matrix</strong></p>
  <pre style="color: white">
[ 2   1  -1 |  8 ]   ← R₁
[-3  -1   2 | -11]   ← R₂
[-2   1   2 | -3 ]   ← R₃
  </pre>

  <p><strong>Step 2: Eliminate x from R₂ and R₃</strong></p>
  <p>Apply: <code>R₂ → R₂ + (3/2)·R₁</code> (to make the x-coefficient in R₂ zero)</p>
  <pre style="color: white">
R₂ = [-3 + (3/2)(2),  -1 + (3/2)(1),  2 + (3/2)(-1) | -11 + (3/2)(8)]
   = [-3 +      3,    -1 +    1.5,    2     - 1.5   | -11 +     12   ]
   = [0, 0.5, 0.5 | 1]
  </pre>
  <p>Apply: <code>R₃ → R₃ + R₁</code> (to make the x-coefficient in R₃ zero)</p>
  <pre style="color: white">
R₃ = [-2 + 2, 1 + 1, 2 + (-1) | -3 + 8]
   = [0, 2, 1 | 5]
Matrix is now:
[ 2 1 -1    | 8 ]
[ 0 0.5 0.5 | 1 ]
[ 0 2 1     | 5 ]

  </pre>

  <p><strong>Step 3: Eliminate y from R₃</strong></p>
  <p>Apply: <code>R₃ → R₃ - 4·R₂</code></p>
  <pre style="color: white">
R₃ = [0 - 4(0), 2 - 4(0.5), 1 - 4(0.5) | 5 - 4(1)]
   = [0, 0, -1 | 1]
Final REF Matrix:
[ 2 1 -1    | 8 ]
[ 0 0.5 0.5 | 1 ]
[ 0 0 -1    | 1 ]

  </pre>

  <p><strong>Step 4: Back-Substitution</strong></p>
  <p>From Row 3: <code>-z = 1 → z = -1</code></p>
  <p>From Row 2: <code>0.5y + 0.5(-1) = 1 → 0.5y - 0.5 = 1 → 0.5y = 1.5 → y = 3</code></p>
  <p>From Row 1: <code>2x + 3 - (-1) = 8 → 2x + 4 = 8 → 2x = 4 → x = 2</code></p>

  <p><strong>Solution: x = 2, y = 3, z = -1 ✓</strong></p>
</div>

---

## 5.3.7 Exam-Style Example: Matrix Form AX = B

University exams often ask you to first write the system in **matrix form**, then solve using Gaussian Elimination / RREF. Here is a complete exam-style walkthrough.

<div class="example">
  <h4>Example 3 (Exam Style): Solve the 3×3 System</h4>
  <p>Consider the following system of equations:</p>
  <p><code>2x + y - z = 3</code></p>
  <p><code>x - y + 2z = 4</code></p>
  <p><code>3x + 2y + z = 7</code></p>

  <p><strong>Part (a): Write in Matrix Form AX = B</strong></p>
  <pre style="color: white">
A = [[ 2,  1, -1],    X = [[x],    B = [[3],
     [ 1, -1,  2],         [y],         [4],
     [ 3,  2,  1]]         [z]]         [7]]
  </pre>

  <p><strong>Part (b): Solve using Gaussian Elimination (RREF)</strong></p>
  <p><strong>Step 1:</strong> Write the augmented matrix [A | B]:</p>
  <pre style="color: white">
[ 2   1  -1 | 3 ]
[ 1  -1   2 | 4 ]
[ 3   2   1 | 7 ]
  </pre>

  <p><strong>Step 2:</strong> Swap R₁ and R₂ to get a leading 1 in position (1,1):</p>
  <p><code>R₁ ↔ R₂</code></p>
  <pre style="color: white">
[ 1  -1   2 | 4 ]
[ 2   1  -1 | 3 ]
[ 3   2   1 | 7 ]
  </pre>

  <p><strong>Step 3:</strong> Eliminate x from R₂ and R₃:</p>
  <p><code>R₂ → R₂ - 2·R₁</code></p>
  <pre style="color: white">
R₂ = [2-2(1), 1-2(-1), -1-2(2) | 3-2(4)]
   = [0, 3, -5 | -5]
  </pre>
  <p><code>R₃ → R₃ - 3·R₁</code></p>
  <pre style="color: white">
R₃ = [3-3(1), 2-3(-1), 1-3(2) | 7-3(4)]
   = [0, 5, -5 | -5]
Matrix so far:
[ 1 -1 2 | 4 ]
[ 0 3 -5 | -5 ]
[ 0 5 -5 | -5 ]

  </pre>

  <p><strong>Step 4:</strong> Eliminate y from R₃:</p>
  <p><code>R₃ → 3·R₃ - 5·R₂</code></p>
  <pre style="color: white">
R₃ = [3(0)-5(0), 3(5)-5(3), 3(-5)-5(-5) | 3(-5)-5(-5)]
   = [0, 0, 10 | 10]
REF Matrix:
[ 1 -1 2 | 4 ]
[ 0 3 -5 | -5 ]
[ 0 0 10 | 10 ]

  </pre>

  <p><strong>Step 5: Back-Substitution</strong></p>
  <p>From Row 3: <code>10z = 10 → z = 1</code></p>
  <p>From Row 2: <code>3y - 5(1) = -5 → 3y = 0 → y = 0</code></p>
  <p>From Row 1: <code>x - 1(0) + 2(1) = 4 → x + 2 = 4 → x = 2</code></p>

  <p><strong>Solution: x = 2, y = 0, z = 1 ✓</strong></p>

  <p><strong>Part (c): Verify the solution</strong></p>
  <p>Equation 1: <code>2(2) + 0 - 1 = 4 + 0 - 1 = 3 ✓</code></p>
  <p>Equation 2: <code>2 - 0 + 2(1) = 2 + 0 + 2 = 4 ✓</code></p>
  <p>Equation 3: <code>3(2) + 2(0) + 1 = 6 + 0 + 1 = 7 ✓</code></p>
</div>

---

## 5.3.8 Reduced Row Echelon Form (RREF)

**RREF** (also called **Gauss-Jordan Elimination**) goes one step further than standard Gaussian Elimination. In addition to the REF conditions, RREF requires:

4. Each leading entry (pivot) is **1**.
5. All entries **above and below** each pivot are **zero**.

The result is an identity-like matrix that directly reads off the solution without any back-substitution:

```
[ 1  0  0 | x ]
[ 0  1  0 | y ]
[ 0  0  1 | z ]
```

> **Key Distinction:**
>
> - **Gaussian Elimination (REF)** → upper triangular + back-substitution
> - **Gauss-Jordan Elimination (RREF)** → identity matrix → direct reading of solution

<div class="example">
  <h4>Example 4: Continuing to RREF</h4>
  <p>Starting from the REF matrix of Example 3:</p>
  <pre style="color: white">
[ 1  -1   2 |  4 ]
[ 0   3  -5 | -5 ]
[ 0   0  10 | 10 ]
  </pre>

  <p><strong>Step 1:</strong> Make pivots equal to 1</p>
  <p><code>R₂ → R₂ / 3</code> → <code>[0, 1, -5/3 | -5/3]</code></p>
  <p><code>R₃ → R₃ / 10</code> → <code>[0, 0, 1 | 1]</code></p>
  <pre style="color: white">
[ 1  -1    2  |  4   ]
[ 0   1  -5/3 | -5/3 ]
[ 0   0    1  |  1   ]
  </pre>

  <p><strong>Step 2:</strong> Eliminate z from R₁ and R₂:</p>
  <p><code>R₁ → R₁ - 2·R₃</code>: <code>[1, -1, 0 | 2]</code></p>
  <p><code>R₂ → R₂ + (5/3)·R₃</code>: <code>[0, 1, 0 | 0]</code></p>
  <pre style="color: white">
[ 1  -1  0 | 2 ]
[ 0   1  0 | 0 ]
[ 0   0  1 | 1 ]
  </pre>

  <p><strong>Step 3:</strong> Eliminate y from R₁:</p>
  <p><code>R₁ → R₁ + R₂</code>: <code>[1, 0, 0 | 2]</code></p>
  <pre style="color: white">
[ 1  0  0 | 2 ]   → x = 2
[ 0  1  0 | 0 ]   → y = 0
[ 0  0  1 | 1 ]   → z = 1
  </pre>

  <p><strong>Solution directly reads: x = 2, y = 0, z = 1 ✓</strong></p>
</div>

---

## 5.3.9 Special Cases

### Case 1: No Solution (Inconsistent System)

If during elimination you obtain a row of the form:

```
[ 0  0  0 | k ]    where k ≠ 0
```

This reads as `0 = k` (a contradiction), meaning the system has **no solution**.

### Case 2: Infinitely Many Solutions

If during elimination you obtain a row of all zeros:

```
[ 0  0  0 | 0 ]
```

This means the system has **fewer equations than unknowns** (a free variable exists), leading to **infinitely many solutions**.

<div class="example">
  <h4>Example 5: Detecting No Solution</h4>
  <p>The augmented matrix reduces to:</p>
  <pre style="color: white">
[ 1   2 |  5 ]
[ 0   0 |  3 ]   ← Row 2 says 0x + 0y = 3, which is impossible!
  </pre>
  <p><strong>Conclusion: No solution. The system is inconsistent.</strong></p>
</div>

---

## 5.3.10 Summary and Key Steps

<div class="intro-box">
  <h2>Gaussian Elimination — Complete Algorithm</h2>
  <ol>
    <li><strong>Form the Augmented Matrix</strong> [A | B] from the system of equations.</li>
    <li><strong>Forward Elimination (REF):</strong> Use row operations to create zeros below each pivot, building an upper triangular matrix.</li>
    <li><strong>Back-Substitution:</strong> Starting from the last row, solve for each variable by substituting upward.</li>
    <li><em>(Optional — Gauss-Jordan)</em> <strong>Full Reduction (RREF):</strong> Also eliminate entries above each pivot and scale pivots to 1 for a direct read-off of the solution.</li>
    <li><strong>Verify:</strong> Always check your solution satisfies all original equations.</li>
  </ol>
</div>

### Applications in Computer Science

Gaussian Elimination is not just a mathematical technique — it is at the heart of many CS areas:

- **Numerical Analysis:** Solving large systems in simulations and finite element methods
- **Computer Graphics:** Transforming 3D coordinates and solving lighting equations
- **Machine Learning:** Linear regression, neural network weight solving
- **Cryptography:** Solving linear systems over finite fields (e.g., GF(2))
- **Robotics:** Kinematics and dynamics calculations
