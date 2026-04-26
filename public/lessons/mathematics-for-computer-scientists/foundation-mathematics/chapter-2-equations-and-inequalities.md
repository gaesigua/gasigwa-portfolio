# Chapter 2: Equations and Inequalities

<div class="intro-box">
  <h2>Overview</h2>
  <p>An algebraic expression is a symbolic mathematical statement. An equation equates two expressions (using an equal sign). Solving an equation involves finding the set of all real numbers for which the statement is true.</p>
  <p>In this chapter, we will cover linear equations, simultaneous equations, quadratic equations, and inequalities.</p>
</div>

## 2.1 Linear Equations

Linear equations are equations of order one, meaning the highest power of the unknown variable is 1.
For example: `3x - 17 = 4` and `2n + 5 = 25` are linear equations. 
*Note:* A linear equation has exactly **one** solution value for its variable.

### Solving Linear Equations
Since an equation states equality, whatever operation is done on one side must also be done on the other side.

<div class="example">
  <h4>Example: Solving a Simple Equation</h4>
  <p>Solve: <code>8x - 6 = 5x + 9</code></p>
  <ul>
    <li>Add 6 to both sides: <code>8x = 5x + 15</code></li>
    <li>Subtract 5x from both sides: <code>3x = 15</code></li>
    <li>Divide both sides by 3: <code>x = 5</code></li>
  </ul>
</div>

<div class="example">
  <h4>Example: Word Problems</h4>
  <p>When 55 is added to a certain number and the sum is divided by 3, the result is 4 times the original number. What is the original number?</p>
  <p><strong>Solution:</strong> Let the number be <code>x</code>.<br>
  Equation: <code>(x + 55) / 3 = 4x</code><br>
  Multiply by 3: <code>x + 55 = 12x</code><br>
  Subtract x: <code>55 = 11x</code><br>
  Divide by 11: <code>x = 5</code></p>
</div>

## 2.2 Simultaneous Equations

Sometimes we have two linear equations with two unknown variables (e.g. `x` and `y`). We must solve them together "simultaneously". There are two primary methods: Elimination and Substitution.

<div class="module">
  <h3>1. Elimination Method</h3>
  <p>We eliminate one of the variables by adding or subtracting the two equations. We may need to multiply the equations by constants first to make the coefficients of one variable match.</p>
  <p><strong>Example:</strong><br>
  1) <code>3x - 2y = 8</code><br>
  2) <code>x + 5y = -3</code></p>
  <p>Multiply eq(2) by 3: <code>3x + 15y = -9</code> (eq 3)<br>
  Subtract eq(3) from eq(1): <code>-17y = 17</code>, so <code>y = -1</code>.<br>
  Substitute <code>y = -1</code> back into eq(1) to find <code>x</code>.</p>
</div>

<div class="module">
  <h3>2. Substitution Method</h3>
  <p>We rearrange one equation to make one variable the subject, then substitute this expression into the other equation.</p>
</div>

## 2.3 Quadratic Equations

A quadratic equation contains an unknown variable to the second power. The standard form is:
<code>ax² + bx + c = 0</code>
where `a`, `b`, and `c` are constants and `a ≠ 0`.

### Solving by Factoring
Consider `x² + 5x + 6 = 0`. In factored form, this becomes:
<code>(x + 2)(x + 3) = 0</code>

If the product of two real numbers is zero (`A × B = 0`), then either `A = 0` or `B = 0`.
Therefore: 
- `x + 2 = 0 ⇒ x = -2`
- `x + 3 = 0 ⇒ x = -3`

### The Quadratic Formula
When a quadratic equation cannot be easily factored, we use the quadratic formula to find the solutions:

<code>x = [ -b ± √(b² - 4ac) ] / 2a</code>

<div class="example">
  <h4>Example: Using the Formula</h4>
  <p>Solve: <code>2x² - 5x - 3 = 0</code></p>
  <p>Here, <code>a=2</code>, <code>b=-5</code>, <code>c=-3</code>.</p>
  <ul>
    <li>Substitute into formula: <code>x = [ 5 ± √((-5)² - 4(2)(-3)) ] / 2(2)</code></li>
    <li>Simplify: <code>x = [ 5 ± √(25 + 24) ] / 4</code></li>
    <li><code>x = (5 ± √49) / 4 = (5 ± 7) / 4</code></li>
  </ul>
  <p>Solutions: <code>x = 12/4 = 3</code> OR <code>x = -2/4 = -1/2</code>.</p>
</div>

## 2.4 Inequalities

An inequality compares two values, showing if one is less than, greater than, or not equal to another.

### Linear Inequalities
Solved much the same way as linear equations.
<strong>Important Rule:</strong> If you multiply or divide both sides of an inequality by a **negative** number, you must flip the inequality sign!

<div class="example">
  <p>Solve: <code>3x - 4 ≥ 5</code></p>
  <p>Add 4: <code>3x ≥ 9</code><br>
  Divide by 3: <code>x ≥ 3</code></p>
</div>

### Quadratic and Cubic Inequalities
To solve higher-order inequalities (e.g. `2x² - x - 3 < 0`), we find the "critical numbers" (where the equation equals 0) and test the intervals between them on a number line.

1. Find critical numbers: `(x + 1)(2x - 3) = 0` ⇒ `x = -1` and `x = 3/2`.
2. These numbers divide the real number line into three intervals: `(-∞, -1)`, `(-1, 3/2)`, and `(3/2, ∞)`.
3. Test a value in each interval. For `(-1, 3/2)`, we test `x = 0`. The result is negative (`< 0`), which satisfies our inequality!
4. Solution: `(-1, 3/2)` or `-1 < x < 3/2`.
