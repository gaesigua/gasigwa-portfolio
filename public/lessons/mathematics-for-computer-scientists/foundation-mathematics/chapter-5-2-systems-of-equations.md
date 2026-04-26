# Chapter 5.2: Systems of Linear Equations

<div class="intro-box">
  <h2>Overview</h2>
  <p>A <strong>system of equations</strong> is a set of two or more equations that share the same variables. Finding the values of those variables that satisfy all equations simultaneously is one of the most important problems in mathematics, engineering, and computer science. We will explore three powerful methods for solving them.</p>
</div>

## 5.2.1 What is a System of Equations?

A **system of two equations** in `x` and `y` is any pair of equations in those variables. A **solution** to the system is an ordered pair `(x, y)` that satisfies *both* equations at the same time.

There are several methods to solve systems of equations:
1. **Method of Substitution**
2. **Method of Elimination**
3. **Matrix Methods** (Inverse Matrix Method)

---

## 5.2.2 Method of Substitution

This method works best when one of the equations can be easily rearranged to isolate a single variable.

**Steps:**
1. Choose one equation and rearrange it to express one variable in terms of the other (e.g., `y = ...`).
2. **Substitute** that expression into the other equation.
3. Solve the resulting single-variable equation.
4. Substitute that value back to find the other variable.
5. State the solution as an ordered pair `(x, y)`.

<div class="example">
  <h4>Example 1 (a): Simple Linear System</h4>
  <p>Solve the system:</p>
  <p><code>x + y = 4</code> ... (eq. 1)</p>
  <p><code>x - y = 2</code> ... (eq. 2)</p>
  <p><strong>Solution:</strong></p>
  <ol>
    <li>From eq. 1: <code>y = 4 - x</code></li>
    <li>Substitute into eq. 2: <code>x - (4 - x) = 2</code></li>
    <li>Simplify: <code>x - 4 + x = 2 → 2x = 6 → x = 3</code></li>
    <li>Back-substitute: <code>y = 4 - 3 = 1</code></li>
  </ol>
  <p><strong>Solution: (x, y) = (3, 1)</strong></p>
</div>

<div class="example">
  <h4>Example 1 (b): Non-Linear System</h4>
  <p>Solve the system:</p>
  <p><code>x² - x - y = 1</code></p>
  <p><code>-x + y = -1</code></p>
  <p><strong>Solution:</strong></p>
  <ol>
    <li>From the second equation: <code>y = x - 1</code></li>
    <li>Substitute into the first: <code>x² - x - (x - 1) = 1</code></li>
    <li>Simplify: <code>x² - 2x = 0 → x(x - 2) = 0</code></li>
    <li>So <code>x = 0</code> or <code>x = 2</code></li>
    <li>If <code>x = 0</code>: <code>y = 0 - 1 = -1</code> → solution <code>(0, -1)</code></li>
    <li>If <code>x = 2</code>: <code>y = 2 - 1 = 1</code> → solution <code>(2, 1)</code></li>
  </ol>
  <p><strong>Solutions: (0, −1) and (2, 1)</strong></p>
</div>

<div class="example">
  <h4>Example 2: Word Problem — Simple Interest</h4>
  <p>A total of $12,000 is invested in two funds paying 9% and 11% simple interest. If the total year's interest is $1,180, how much is invested in each fund?</p>
  <p><strong>Solution:</strong></p>
  <ol>
    <li>Let `x` = amount at 9% and `y` = amount at 11%.</li>
    <li>System: <code>x + y = 12,000</code> and <code>0.09x + 0.11y = 1,180</code></li>
    <li>From first: <code>y = 12,000 - x</code></li>
    <li>Substitute: <code>0.09x + 0.11(12,000 - x) = 1,180</code></li>
    <li>Simplify: <code>0.09x + 1,320 - 0.11x = 1,180 → -0.02x = -140 → x = 7,000</code></li>
    <li>Therefore: <code>y = 12,000 - 7,000 = 5,000</code></li>
  </ol>
  <p><strong>Solution: $7,000 at 9% and $5,000 at 11%.</strong></p>
</div>

---

## 5.2.3 Method of Elimination

The **key idea** of the elimination method is to multiply the equations by constants so that the coefficients of one variable differ only in sign. Adding those equations together then **eliminates** that variable entirely.

**Steps:**
1. If necessary, multiply one or both equations by a constant so one variable's coefficients are equal and opposite.
2. **Add** the equations to eliminate that variable.
3. Solve for the remaining variable.
4. Back-substitute to find the other variable.

<div class="example">
  <h4>Example A: Coefficients already opposite</h4>
  <p>Solve: <code>3x + 2y = 4</code> and <code>5x - 2y = 8</code></p>
  <p><strong>Solution:</strong></p>
  <p>Note the coefficients of `y` are +2 and -2 (already opposite!)</p>
  <p>Add the equations: <code>8x + 0 = 12 → x = 12/8 = 3/2</code></p>
  <p>Substitute into first equation: <code>3(3/2) + 2y = 4 → 9/2 + 2y = 4 → 2y = -1/2 → y = -1/4</code></p>
  <p><strong>Solution: (3/2, -1/4)</strong></p>
</div>

<div class="example">
  <h4>Example B: Multiplying first to match coefficients</h4>
  <p>Solve: <code>2x - 3y = -7</code> and <code>3x + y = -5</code></p>
  <p><strong>Solution:</strong></p>
  <p>Multiply the second equation by 3 to match the `y` coefficient:</p>
  <p><code>9x + 3y = -15</code></p>
  <p>Now add to first equation: <code>2x - 3y = -7</code> + <code>9x + 3y = -15</code> gives <code>11x = -22 → x = -2</code></p>
  <p>Substitute into <code>2x - 3y = -7</code>: <code>2(-2) - 3y = -7 → -4 - 3y = -7 → -3y = -3 → y = 1</code></p>
  <p><strong>Solution: (-2, 1)</strong></p>
</div>

---

## 5.2.4 Matrix Methods (Inverse Matrix Method)

Matrix methods are especially powerful when working with systems that have 2 or more variables. The key idea is to write the system as a **matrix equation** `AX = B`, and then solve for `X` by multiplying both sides by `A⁻¹`.

`AX = B → A⁻¹AX = A⁻¹B → Iₙ X = A⁻¹B → X = A⁻¹B`

**Steps:**
1. Write the system in matrix form: `A` is the coefficient matrix, `X` is the variable column, `B` is the constants column.
2. Find the inverse `A⁻¹`.
3. Compute `X = A⁻¹B`.

<div class="example">
  <h4>Example 1: Solving with the Inverse Matrix</h4>
  <p>Solve the system:</p>
  <p><code>x + 4y = 2</code></p>
  <p><code>-x - 3y = 1</code></p>
  <p><strong>Solution:</strong></p>
  <p>Write in matrix form:</p>
  <p><code>A = [[1, 4], [-1, -3]]</code>, <code>B = [[2], [1]]</code>, <code>X = [[x], [y]]</code></p>
  <p>Find A⁻¹:</p>
  <ul>
    <li>det(A) = (1)(-3) - (-1)(4) = -3 + 4 = 1</li>
    <li>A⁻¹ = (1/1) × [[-3, -4], [1, 1]] = [[-3, -4], [1, 1]]</li>
  </ul>
  <p>Compute X = A⁻¹B:</p>
  <p><code>X = [[-3, -4], [1, 1]] × [[2], [1]] = [[-3×2 + -4×1], [1×2 + 1×1]] = [[-10], [3]]</code></p>
  <p><strong>Solution: x = -10 and y = 3</strong></p>
</div>

<div class="example">
  <h4>Example 2: Solving with the Inverse Matrix</h4>
  <p>Use the matrix method to solve:</p>
  <p><code>3a + 2b = 12</code></p>
  <p><code>4a - b = 5</code></p>
  <p><strong>Solution:</strong></p>
  <p>Coefficient matrix: <code>A = [[3, 2], [4, -1]]</code>, <code>B = [[12], [5]]</code></p>
  <p>det(A) = (3)(-1) - (4)(2) = -3 - 8 = -11</p>
  <p>A⁻¹ = (-1/11) × [[-1, -2], [-4, 3]]</p>
  <p>Compute X = A⁻¹B:</p>
  <p><code>[a, b] = (−1/11) × [[-1, -2], [-4, 3]] × [[12], [5]]</code></p>
  <p><code>= (−1/11) × [(-1×12) + (-2×5), (-4×12) + (3×5)]</code></p>
  <p><code>= (−1/11) × [-22, -33] = [2, 3]</code></p>
  <p><strong>Solution: a = 2 and b = 3</strong></p>
</div>
