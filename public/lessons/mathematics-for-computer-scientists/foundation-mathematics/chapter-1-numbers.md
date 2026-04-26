# Chapter 1: Numbers

<div class="intro-box">
  <h2>Overview</h2>
  <p>The word "number" comes from the Latin word "numerus" which means "to apportion", to assign, to allot, and to take. Therefore, a number is something that measures the size of an allotment. A numeral is any symbol that can represent a number (e.g. five is represented by the numeral 5 or V).</p>
  <p>In this chapter, we will study different number systems, the algebra of real numbers, properties of operations, and sets of real numbers.</p>
</div>

## 1.1 Types of Numbers

Man started with counting numbers `1, 2, 3, 4, 5...` denoted by **N**. These are called **Natural numbers**, positive integers, or positive whole numbers.

<div class="steps">
  <div class="step">
    <strong>1. Integers (Z)</strong><br>
    When we combine positive counting numbers, negative whole numbers (`-3, -2, -1`), and zero (`0`), we get the set of Integers, denoted by **Z**.
  </div>
  <div class="step">
    <strong>2. Rational Numbers (Q)</strong><br>
    Fractions formed as a part of a whole, written as `numerator/denominator` (e.g., `3/4`, `-2/3`), along with terminating and recurring decimals. A rational number can be expressed in the form `a/b` where `a` and `b` are integers.
  </div>
  <div class="step">
    <strong>3. Irrational Numbers</strong><br>
    Numbers that cannot be expressed as a simple fraction `a/b`. Their decimals go on forever without repeating. Examples include `√2`, `π`, and `e`.
  </div>
  <div class="step">
    <strong>4. Real Numbers (R)</strong><br>
    The combination of all rational and irrational numbers. A real number is any number that can be written as a decimal and placed on a number line.
  </div>
</div>

## 1.2 Surds

Roots such as `√2`, `√3`, and `√5` are called surds. They are examples of irrational numbers. While you can use a calculator to find a decimal equivalent, a rounded decimal is not completely accurate. It is most accurate in surd form.

<div class="concept-card">
  <div class="concept-header"><span class="concept-name">Properties of Surds</span></div>
  <ul>
    <li><code>√a × √b = √(a × b)</code></li>
    <li><code>√a / √b = √(a / b)</code></li>
    <li><code>a√c ± b√c = (a ± b)√c</code></li>
  </ul>
</div>

<div class="example">
  <h4>Example: Simplifying Surds</h4>
  <p>Simplify <code>√48</code>.</p>
  <p><strong>Solution:</strong> Rewrite the quantity using its largest square factor.<br>
  <code>48 = 16 × 3 = 4² × 3</code><br>
  Therefore, <code>√48 = √16 × √3 = 4√3</code>.</p>
</div>

### Rationalizing the Denominator
When surds appear in the denominator of a fraction, it is usual to eliminate them. This is called rationalizing the denominator.
For example, to rationalize `3 / 2√7`, multiply both the numerator and denominator by `√7`:
<code>(3 × √7) / (2√7 × √7) = 3√7 / 14</code>

To rationalize a fraction like `1 / (a ± √b)`, multiply its numerator and denominator by the conjugate `a ∓ √b`.

## 1.3 Complex Numbers

It's possible to take the square root of any non-negative real number. However, for negative numbers, there is no real solution. 
Consider `√-1`. We let `i = √-1`. Then `i² = -1`. But there is no such real number `i`. 

<div class="definition-card">
  <h4>Complex Numbers</h4>
  <p>The collection of numbers of the form <code>a + bi</code>, where <code>a</code> and <code>b</code> are real numbers, forms the set of complex numbers.</p>
  <p>Example: <code>2 + 3i</code>, or <code>-3/4 + 5i</code>.</p>
</div>

<div class="example">
  <h4>Example: Solving Roots of Negative Numbers</h4>
  <p>Solve <code>√-16</code>.</p>
  <p><strong>Solution:</strong> <code>√-16 = √(16 × -1) = √16 × √-1</code>.<br>
  Since <code>√16 = 4</code> and <code>√-1 = i</code>, the answer is <code>4i</code>.</p>
</div>

## 1.4 Properties of Real Numbers

If `a` and `b` represent real numbers, there are four basic arithmetic operations: Addition (`a + b`), Subtraction (`a - b`), Multiplication (`ab` or `a × b`), and Division (`a / b`).

<div class="module">
  <h3>1. Commutative Properties</h3>
  <p>Allows you to add or multiply numbers in any order.</p>
  <code>a + b = b + a</code> (e.g. 5 + 3 = 3 + 5)<br>
  <code>a × b = b × a</code> (e.g. 2 × 5 = 5 × 2)
</div>

<div class="module">
  <h3>2. Associative Properties</h3>
  <p>Allows you to change the grouping of quantities to be added or multiplied.</p>
  <code>(a + b) + c = a + (b + c)</code><br>
  <code>(ab)c = a(bc)</code><br>
  <em>Note: There are no associative properties for subtraction or division.</em>
</div>

<div class="module">
  <h3>3. Distributive Properties</h3>
  <p>Ties together multiplication and addition (or subtraction).</p>
  <code>a(b + c) = ab + ac</code><br>
  <code>a(b - c) = ab - ac</code>
</div>

<div class="module">
  <h3>4. Identity & Inverse Properties</h3>
  <ul>
    <li><strong>Identity:</strong> <code>0 + a = a</code> (Addition) and <code>1 × a = a</code> (Multiplication).</li>
    <li><strong>Inverse:</strong> Every number `a` has an opposite `-a` such that <code>a + (-a) = 0</code>. Every non-zero number `a` has a reciprocal `1/a` such that <code>a × (1/a) = 1</code>.</li>
  </ul>
</div>

## 1.5 Algebra of Sets of Real Numbers

Given two sets A and B:
- **Intersection (A ∩ B):** Consists of elements which belong to both A and B.
- **Union (A ∪ B):** Consists of elements which belong to A or B, or both.
- **Universal Set (ε):** Represents the set of all elements under consideration.
- **Complement (A'):** All elements of the universal set which are not contained in A.

<div class="concept-card">
  <div class="concept-header"><span class="concept-name">Intervals</span></div>
  <p><strong>Open Interval:</strong> <code>(a, b) = {x : a < x < b}</code>. The endpoints are NOT included.</p>
  <p><strong>Closed Interval:</strong> <code>[a, b] = {x : a ≤ x ≤ b}</code>. The endpoints ARE included.</p>
</div>

## 1.6 Absolute Value and Distance

<div class="definition-card">
  <h4>Absolute Value</h4>
  <p>If <code>a ∈ R</code>, then the absolute value of <code>a</code>, denoted by <code>|a|</code>, is defined as:</p>
  <ul>
    <li><code>|a| = a</code> if <code>a ≥ 0</code></li>
    <li><code>|a| = -a</code> if <code>a < 0</code></li>
  </ul>
  <p>Example: <code>|3| = 3</code>, and <code>|-3| = 3</code>.</p>
</div>

The distance between two points A and B with coordinates `a` and `b` on a coordinate line is defined as:
<code>d(A, B) = |b - a|</code>

<div class="example">
  <h4>Example: Distance</h4>
  <p>Let A and B have coordinates -5 and -3. Find d(A, B).</p>
  <p><strong>Solution:</strong> <code>d(A, B) = |-3 - (-5)| = |-3 + 5| = |2| = 2</code></p>
</div>
