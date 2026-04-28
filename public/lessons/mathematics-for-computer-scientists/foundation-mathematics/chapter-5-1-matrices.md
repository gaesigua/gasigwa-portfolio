# Chapter 5.1: Introduction to Matrices

<div class="intro-box">
  <h2>Overview</h2>
  <p>A <strong>matrix</strong> is one of the most powerful tools in mathematics and computer science. From representing images and data tables, to solving complex systems of equations and performing 3D transformations in graphics, matrices are everywhere. In this section, we will build a solid understanding of what a matrix is and how to perform operations on them.</p>
</div>

## 5.1.1 What is a Matrix?

**Definition:** If `m` and `n` are positive integers, then an **m × n matrix** (read "m by n") is a rectangular array of numbers arranged in `m` rows (horizontal lines) and `n` columns (vertical lines).

A general matrix looks like this:

```
     column 1   column 2  ...  column n
row 1 [ a₁₁     a₁₂     ...   a₁ₙ ]
row 2 [ a₂₁     a₂₂     ...   a₂ₙ ]
```

The entry in the **i-th row** and **j-th column** is written as `aᵢⱼ`. We call `i` the **row subscript** and `j` the **column subscript**.

### Key Vocabulary

- If `m = n` (equal rows and columns), the matrix is called a **square matrix** of order `n`.
- A matrix with only one row is a **row matrix**.
- A matrix with only one column is a **column matrix**.

### Concrete Examples

| Name               | Order | Matrix                         |
| ------------------ | ----- | ------------------------------ |
| Row matrix         | 1 × 4 | `[ 1, -3, 0, ½ ]`              |
| Zero matrix        | 2 × 2 | `[ [0, 0], [0, 0] ]`           |
| Rectangular matrix | 2 × 3 | `[ [-1, 0, 5], [2, 1, -4] ]`   |
| Rectangular matrix | 3 × 2 | `[ [5, 0], [2, -2], [-7, 4] ]` |

---

## 5.1.2 Matrix Addition

**Rule:** If `A = [aᵢⱼ]` and `B = [bᵢⱼ]` are both of order `m × n`, then their **sum** is the `m × n` matrix:
`A + B = [aᵢⱼ + bᵢⱼ]`

You simply add the corresponding entries together.

> **Important:** The sum of two matrices of _different orders_ is **undefined**. You can only add matrices of the same dimensions!

<div class="example">
  <h4>Example A: Adding 2×2 Matrices</h4>
  <p>Given A = <code>[[-1, 2], [0, 1]]</code> and B = <code>[[1, 3], [-1, 2]]</code>:</p>
  <p><code>A + B = [[-1+1, 2+3], [0+(-1), 1+2]] = [[0, 5], [-1, 3]]</code></p>
</div>

<div class="example">
  <h4>Example B: Adding 3×3 Matrices</h4>
  <p>Given A = <code>[[1, 2, 0], [1, 4, 1], [2, 1, 4]]</code> and B = <code>[[2, 1, 0], [4, 0, 1], [1, 2, 3]]</code>:</p>
  <p>Add each position: A + B = <code>[[3, 3, 0], [5, 4, 2], [3, 3, 7]]</code></p>
</div>

---

## 5.1.3 Matrix Subtraction

**Rule:** If `A = [aᵢⱼ]` and `B = [bᵢⱼ]` are both of order `m × n`, their **difference** is:
`A - B = [aᵢⱼ - bᵢⱼ]`

Again, you simply subtract corresponding entries.

<div class="example">
  <h4>Example: Subtracting 2×2 Matrices</h4>
  <p>Given A = <code>[[-1, 2], [0, 1]]</code> and B = <code>[[1, 3], [-1, 3]]</code>:</p>
  <p><code>A - B = [[-1-1, 2-3], [0-(-1), 1-3]] = [[-2, -1], [1, -2]]</code></p>
</div>

---

## 5.1.4 Matrix Multiplication (The Product)

Matrix multiplication is more involved than addition, and it does NOT simply multiply corresponding entries. Instead, it follows a **row-by-column** rule.

**Rule:** If `A` is an `m × n` matrix and `B` is an `n × p` matrix, then the product `A × B` is an `m × p` matrix. The entry `cᵢⱼ` in the product is obtained by:

- Taking the i-th row of A and the j-th column of B
- Multiplying their corresponding entries
- Summing the results

<code>cᵢⱼ = a₁ᵢb₁ⱼ + a₂ᵢb₂ⱼ + ... + aₙᵢbₙⱼ</code>

> **Note:** For multiplication to be possible, the **number of columns in A** must equal the **number of rows in B**.

<div class="example" style="color: white">
  <h4>Example: Multiplying a 3×2 by a 2×1 (result is 3×1)</h4>
  <pre>
A = [[1, 2],      B = [[2],
     [2, 1],          [3]]
     [3, 0]]
AB = [[(1×2)+(2×3)],    [[2+6],     [[8],
      [(2×2)+(1×3)],  =  [4+3],  =   [7],
      [(3×2)+(0×3)]] [6+0]] [6]]

  </pre>
  <p>The result is a <strong>3×1</strong> column matrix.</p>
</div>

---

## 5.1.5 The Identity Matrix

The **identity matrix** `Iₙ` is a special square matrix of order `n` that has **1's on its main diagonal** (top-left to bottom-right) and **0's everywhere else**.

```
I₂ = [[1, 0],     I₃ = [[1, 0, 0],
      [0, 1]]            [0, 1, 0],
                         [0, 0, 1]]
```

The identity matrix behaves like the number `1` in multiplication. For any square matrix `A` of order `n`:
`A × Iₙ = Iₙ × A = A`

<div class="example">
  <h4>Example: Multiplying by Identity</h4>
  <p>Given A = <code>[[2, 4], [3, 2]]</code>:</p>
  <p><code>A × I₂ = [[2, 4], [3, 2]] × [[1, 0], [0, 1]] = [[2, 4], [3, 2]] = A</code> ✓</p>
</div>

---

## 5.1.6 The Determinant of a Matrix

Every **square matrix** has an associated number called its **determinant**, denoted `|A|` or `det(A)`.

### Determinant of a 2×2 Matrix

For a 2×2 matrix:

```
A = [[a₁₁, a₁₂],
     [a₂₁, a₂₂]]
```

The determinant is defined as:
`|A| = a₁₁a₂₂ - a₂₁a₁₂`

_Think of it as: (top-left × bottom-right) minus (bottom-left × top-right)._

<div class="example">
  <h4>Example: Finding a Determinant</h4>
  <p>Find |A| for A = <code>[[2, -1], [4, -3]]</code>:</p>
  <p><code>|A| = (2)(-3) - (4)(-1) = -6 + 4 = -2</code></p>
</div>

---

## 5.1.7 The Inverse of a 2×2 Matrix

Just like the number `x` has a multiplicative inverse `x⁻¹` such that `x × x⁻¹ = 1`, a matrix `A` can have an **inverse** `A⁻¹` such that `A × A⁻¹ = I`.

**Definition:** Let `A` be a square matrix of order `n`. If there exists a matrix `A⁻¹` such that `A × A⁻¹ = Iₙ = A⁻¹ × A`, then `A⁻¹` is the **inverse** of `A`.

For a 2×2 matrix `A = [[a, b], [c, d]]`, the **shortcut formula** for the inverse is:

`A⁻¹ = (1 / |A|) × [[d, -b], [-c, a]]`

> **Note:** A matrix is only invertible if its determinant is **not zero** (`|A| ≠ 0`). If `|A| = 0`, the matrix has no inverse and is called a **singular matrix**.

<div class="example">
  <h4>Example 1: Finding the Inverse</h4>
  <p>Find A⁻¹ for A = <code>[[1, 4], [-1, -3]]</code>.</p>
  <ol>
    <li>Find the determinant: <code>|A| = (1)(-3) - (-1)(4) = -3 + 4 = 1</code></li>
    <li>Apply the formula: <code>A⁻¹ = (1/1) × [[-3, -4], [1, 1]] = [[-3, -4], [1, 1]]</code></li>
  </ol>
</div>

<div class="example">
  <h4>Example 2: Another Inverse</h4>
  <p>Find A⁻¹ for A = <code>[[3, -2], [-2, 2]]</code>.</p>
  <ol>
    <li>Find the determinant: <code>|A| = (3)(2) - (-2)(-2) = 6 - 4 = 2... wait, recalculate: (3)(2) - (-2)(-2) = 6 - 4 = 2</code></li>
    <li>Apply the formula: <code>A⁻¹ = (1/4) × [[2, 2], [2, 3]] = [[½, ½], [½, ¾]]</code></li>
  </ol>
</div>
