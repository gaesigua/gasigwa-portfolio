# Chapter 4: Logarithmic and Exponential Notation

<div class="intro-box">
  <h2>Overview</h2>
  <p>In this chapter, we explore exponents (indices) and logarithms. These mathematical tools are essential for representing and manipulating very large or very small numbers, and they form the foundation for analyzing algorithms with exponential or logarithmic time complexities in computer science.</p>
</div>

## 4.1 Exponents

Recall that repeated multiplication can be expressed using an exponent:
<code>2³ = 2 × 2 × 2</code> (3 factors)
<code>3⁵ = 3 × 3 × 3 × 3 × 3</code> (5 factors)

In general:
<code>aⁿ = a × a × a ... × a</code> (n factors)
where `a` is the **base** and `n` is the **exponent** (or power, or index).

### Laws of Indices (Exponents)

To manipulate exponential expressions, we rely on the following fundamental laws:

<div class="module">
  <ul>
    <li><strong>Multiplication Law:</strong> <code>aᵐ × aⁿ = aᵐ⁺ⁿ</code><br>
    <em>Example:</em> <code>2³ × 2⁵ = 2⁸</code></li>
    <li><strong>Division Law:</strong> <code>aᵐ ÷ aⁿ = aᵐ⁻ⁿ</code><br>
    <em>Example:</em> <code>3⁷ ÷ 3⁴ = 3³</code></li>
    <li><strong>Power of a Power:</strong> <code>(aˣ)ʸ = aˣʸ</code><br>
    <em>Example:</em> <code>(2²)³ = 2⁶</code></li>
    <li><strong>Zero Exponent:</strong> <code>a⁰ = 1</code> (where a ≠ 0)<br>
    <em>Example:</em> <code>3⁴ ÷ 3⁴ = 3⁰ = 1</code></li>
    <li><strong>Negative Exponent:</strong> <code>a⁻ˣ = 1 / aˣ</code> (where a ≠ 0)</li>
    <li><strong>Fractional Exponent (Roots):</strong> <code>a^(1/n) = ⁿ√a</code><br>
    <em>Note:</em> <code>ⁿ√a</code> means the n-th root of a.</li>
  </ul>
</div>

<div class="example">
  <h4>Example: Evaluating Expressions</h4>
  <p>Evaluate: <code>(1/27)⁻ⁿ × 81⁻ⁿ = 243</code></p>
  <ul>
    <li>Rewrite bases using powers of 3: <code>1/27 = 3⁻³</code>, <code>81 = 3⁴</code>, <code>243 = 3⁵</code></li>
    <li>Substitute: <code>(3⁻³)⁻ⁿ × (3⁴)⁻ⁿ = 3⁵</code></li>
    <li>Apply Power Law: <code>3³ⁿ × 3⁻⁴ⁿ = 3⁵</code></li>
    <li>Apply Multiplication Law: <code>3³ⁿ⁻⁴ⁿ = 3⁵</code></li>
    <li><code>3⁻ⁿ = 3⁵</code></li>
    <li>Therefore: <code>-n = 5</code>, which means <code>n = -5</code>.</li>
  </ul>
</div>

---

## 4.2 Logarithms

A logarithm is simply the inverse operation to exponentiation. It answers the question: _To what exponent must we raise the base to get a certain number?_

**Definition:**
If <code>aᵐ = b</code>, then the logarithm of `b` to base `a` is `m`.
This is written as:
<code>logₐ b = m</code>

<div class="example">
  <h4>Example: Converting to Logarithms</h4>
  <p>Solve for x given: <code>log₃ 9 = x</code></p>
  <p><strong>Solution:</strong> Convert to exponential form:</p>
  <p><code>3ˣ = 9</code></p>
  <p>Since <code>3² = 9</code>, then <code>x = 2</code>.</p>
</div>

### Laws of Logarithms

Just as exponents have laws, logarithms have corresponding laws (assuming `A` and `B` are positive real numbers):

<div class="module">
  <ul>
    <li><strong>Product Rule:</strong> <code>logₐ(AB) = logₐ A + logₐ B</code></li>
    <li><strong>Quotient Rule:</strong> <code>logₐ(A/B) = logₐ A - logₐ B</code></li>
    <li><strong>Power Rule:</strong> <code>logₐ(Aᵖ) = p × logₐ A</code></li>
    <li><strong>Log of Base:</strong> <code>logₐ a = 1</code> (since a¹ = a)</li>
    <li><strong>Log of One:</strong> <code>logₐ 1 = 0</code> (since a⁰ = 1)</li>
  </ul>
</div>

---

## 4.3 Common and Natural Logarithms

While a logarithm can have any positive base (except 1), there are two bases that are used most frequently in mathematics and computer science.

### Common Logarithms (Base 10)

The system of logarithms with 10 as the base is called common logarithms: <code>log₁₀ A</code>.
If the base is not explicitly written, it is generally understood to be 10.
For example, <code>log 2</code> is understood to mean <code>log₁₀ 2</code>.
Common logarithms are widely used in scientific notation and engineering.

### Natural Logarithms (Base e)

Another extremely common system uses the irrational number `e` (Euler's number, approximately `2.71828...`) as its base.
The logarithm with base `e` is denoted as <code>ln A</code>.
Natural logarithms are fundamental in calculus, continuous growth modeling, and complex algorithmic analysis.
