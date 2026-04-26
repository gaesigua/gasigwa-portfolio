# Chapter 3.1: Introduction to Functions

<div class="intro-box">
  <h2>Overview</h2>
  <p>Functions form the backbone of both mathematics and computer science. In programming, we constantly write functions to take inputs and return outputs. In this section, we will formally define what a function is, explore its properties, and look at composite and inverse functions.</p>
</div>

## 3.1.1 Definition of a Function

Let `A` and `B` be sets. A **function** `f` from `A` to `B` is a rule that assigns exactly one element of `B` to each element of `A`.

If `b` is the unique element of `B` assigned by the function `f` to the element `a` of `A`, we write:
<code>f(a) = b</code>

### Terminology
If `f` is a function from `A` to `B` (written `f: A → B`):
- **Domain:** The set `A` is the domain of `f`.
- **Codomain:** The set `B` is the codomain of `f`.
- **Image:** If `f(a) = b`, then `b` is the *image* of `a`.
- **Pre-image:** `a` is the *pre-image* of `b`.
- **Range:** The set of all images of the elements of `A`. The range is a subset of the codomain.

### Representing a Function
There are four primary ways to represent a function:
1. **Verbally:** By a description in words (e.g., "p(t) is the population of the world at time t").
2. **Algebraically:** By an explicit formula (e.g., `f(x) = x²`).
3. **Visually:** By a graph.
4. **Numerically:** By a table of values.

---

## 3.1.2 Types of Functions

<div class="module">
  <h3>1. Onto Function (Surjective)</h3>
  <p>A function <code>f: A → B</code> is called <strong>onto</strong> or <strong>surjective</strong> if and only if for every element <code>b</code> in <code>B</code>, there is an element <code>a</code> in <code>A</code> such that <code>f(a) = b</code>.</p>
  <p>In simple terms: every member of the codomain is the image of some element of the domain. The range equals the codomain.</p>
</div>

<div class="module">
  <h3>2. One-to-One Function (Injective)</h3>
  <p>A function is <strong>one-to-one</strong> or <strong>injective</strong> if every element in the domain has a unique image. That means <code>f(x₁) = f(x₂)</code> implies <code>x₁ = x₂</code>.</p>
  <p><strong>Example:</strong> Determine whether <code>f(x) = x + 1</code> for <code>x ∈ {0, 1, 2, 3}</code> is one-to-one.</p>
  <ul>
    <li><code>f(0) = 0 + 1 = 1</code></li>
    <li><code>f(1) = 1 + 1 = 2</code></li>
    <li><code>f(2) = 2 + 1 = 3</code></li>
    <li><code>f(3) = 3 + 1 = 4</code></li>
  </ul>
  <p>Since all outputs `{1, 2, 3, 4}` are unique, the function is one-to-one.</p>
</div>

<div class="module">
  <h3>3. Bijection (One-to-One Correspondence)</h3>
  <p>A function is a <strong>bijection</strong> if it is both one-to-one (injective) AND onto (surjective).</p>
</div>

---

## 3.1.3 Composite Functions

If we have two functions `f` and `g`, we can create a new function by substituting the output of `g` as the input for `f`. This is called a composite function, denoted as `(f ◦ g)(x)` or `f(g(x))`.

<div class="example">
  <h4>Example: Composition</h4>
  <p>If <code>f(x) = x²</code> and <code>g(x) = x + 1</code>, find <code>f(g(x))</code>.</p>
  <p><strong>Solution:</strong></p>
  <ul>
    <li>Substitute <code>g(x)</code> into <code>f(x)</code>:</li>
    <li><code>f(g(x)) = f(x + 1)</code></li>
    <li><code>= (x + 1)²</code></li>
  </ul>
  <p><em>Note:</em> The commutative property does not hold for composition. <code>f(g(x))</code> is generally NOT equal to <code>g(f(x))</code>.</p>
</div>

---

## 3.1.4 Inverse Functions

The functions `f` and `g` are said to be inverses of each other if and only if:
1. `f(g(x)) = x` for every `x` in the domain of `g`.
2. `g(f(x)) = x` for every `x` in the domain of `f`.

If `g` is the inverse of `f`, we denote `g` by `f⁻¹`.

<div class="example">
  <h4>Example: Verifying Inverses</h4>
  <p>Show that <code>f(x) = 2x + 3</code> and <code>g(x) = ½(x - 3)</code> are inverses.</p>
  <p><strong>Solution:</strong></p>
  <p>1. Check <code>f(g(x))</code>:</p>
  <p><code>f(½(x - 3)) = 2[½(x - 3)] + 3 = (x - 3) + 3 = x</code></p>
  <p>2. Check <code>g(f(x))</code>:</p>
  <p><code>g(2x + 3) = ½[(2x + 3) - 3] = ½(2x) = x</code></p>
  <p>Since both compositions result in <code>x</code>, they are indeed inverses.</p>
</div>
