# Chapter 1: Boolean Algebra

<div class="intro-box">
  <h2>Overview</h2>
  <p>Boolean algebra is a branch of algebra that deals with variables that take only two possible values: <strong>1 (TRUE/ON/HIGH)</strong> and <strong>0 (FALSE/OFF/LOW)</strong>. By the end of this chapter, you will understand the formal definition of Boolean Algebra, its core axioms, and its importance in digital systems.</p>
</div>

## 1.1 What is Boolean Algebra?

Boolean algebra is widely used in:

- Digital electronics
- Computer architecture
- Logic circuits
- Programming and algorithms

### Formal Definition

A Boolean algebra is an algebraic structure defined as: `(B, +, ⋅, ′, 0, 1)`

Where:

- `B` is a non-empty set
- `+` is the OR operation
- `⋅` is the AND operation
- `′` (or a bar over the variable) is the NOT (complement) operation
- `0` and `1` are distinct elements in `B`

## 1.2 Boolean Algebra Axioms

Let `a`, `b`, and `c` be elements of `B`. The following core laws govern Boolean algebra:

<div class="module">
  <h3>1. Closure Law</h3>
  <p>The result of any Boolean operation remains in the set `B`.</p>
  <code>a + b ∈ B, a ⋅ b ∈ B</code>
  <p><strong>Meaning:</strong> Combining Boolean variables always produces a Boolean result.</p>
</div>

<div class="module">
  <h3>2. Commutative Laws</h3>
  <p>The order of variables does not affect the result.</p>
  <code>a + b = b + a</code><br>
  <code>a ⋅ b = b ⋅ a</code>
  <p><strong>Meaning:</strong> OR and AND operations are order-independent.</p>
</div>

<div class="module">
  <h3>3. Associative Laws</h3>
  <p>Grouping of variables does not affect the result.</p>
  <code>(a + b) + c = a + (b + c)</code><br>
  <code>(a ⋅ b) ⋅ c = a ⋅ (b ⋅ c)</code>
  <p><strong>Meaning:</strong> Parentheses can be rearranged without changing the truth value.</p>
</div>

<div class="module">
  <h3>4. Distributive Laws</h3>
  <p>Each operation distributes over the other. Unlike ordinary algebra, BOTH distributive laws apply here.</p>
  <code>a ⋅ (b + c) = (a ⋅ b) + (a ⋅ c)</code><br>
  <code>a + (b ⋅ c) = (a + b) ⋅ (a + c)</code>
</div>

<div class="module">
  <h3>5. Identity Laws</h3>
  <p>Identity elements leave a variable unchanged.</p>
  <code>a + 0 = a</code> (OR with 0 does nothing)<br>
  <code>a ⋅ 1 = a</code> (AND with 1 does nothing)
</div>

<div class="module">
  <h3>6. Complement Laws</h3>
  <p>Every element has a complement.</p>
  <code>a + a′ = 1</code> (A variable OR its complement is always TRUE)<br>
  <code>a ⋅ a′ = 0</code> (A variable AND its complement is always FALSE)
</div>

<div class="success">
  <strong>Importance of Boolean Algebra:</strong>
  It is the absolute foundation of digital systems. Logic gates (AND, OR, NOT), CPU design, memory circuits, and software decision-making are all built on these simple Boolean axioms!
</div>

## 1.3 Worked Examples

<div class="example">
  <h4>Example 1: Simplify Using Distributive Law</h4>
  <p>Simplify: <code>a ⋅ (b + c)</code></p>
  <p><strong>Solution:</strong> By applying the distributive law, the expression expands to: <code>ab + ac</code></p>
</div>

<div class="example">
  <h4>Example 2: Simplify Expression</h4>
  <p>Simplify: <code>a + a ⋅ b</code></p>
  <p><strong>Solution:</strong></p>
  <ul>
    <li>Using distributive law: <code>a + ab = a(1 + b)</code></li>
    <li>Since <code>1 + b = 1</code>, it becomes: <code>a ⋅ 1</code></li>
    <li>By Identity law: <code>a ⋅ 1 = a</code></li>
  </ul>
  <p><strong>Answer:</strong> <code>a</code></p>
</div>

<div class="example">
  <h4>Example 3: Simplify Boolean Expression</h4>
  <p>Simplify: <code>(a + b)(a + b′)</code></p>
  <p><strong>Solution:</strong></p>
  <ul>
    <li>Apply distributive law: <code>a + ab′ + ba + bb′</code></li>
    <li>Using Boolean rules: <code>bb′ = 0</code> and <code>ab′ + ab = a(b′ + b) = a(1) = a</code></li>
    <li>Final simplification: <code>a + a = a</code></li>
  </ul>
  <p><strong>Answer:</strong> <code>a</code></p>
</div>
