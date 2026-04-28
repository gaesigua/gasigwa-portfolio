# Chapter 1.7: Sets

<div class="intro-box">
  <h2>Overview</h2>
  <p>A <strong>set</strong> is one of the most fundamental concepts in mathematics and computer science. Almost every data structure — arrays, hash tables, databases — is ultimately a collection of elements, making sets the mathematical bedrock beneath all of computing. In this chapter we will define sets rigorously, explore how to describe and combine them, and study the powerful laws that govern set algebra.</p>
</div>

## 1.7.1 What Is a Set?

A **set** is an unordered collection of distinct objects, called **elements** (or *members*). Sets are usually denoted by capital letters and their elements are listed inside curly braces `{ }`.

<div class="steps">
  <div class="step">
    <strong>Notation</strong><br>
    If <code>a</code> is an element of set <code>A</code>, we write <code>a ∈ A</code>.<br>
    If <code>b</code> is <em>not</em> an element of <code>A</code>, we write <code>b ∉ A</code>.
  </div>
  <div class="step">
    <strong>Two Key Properties</strong><br>
    1. <strong>Unordered:</strong> <code>{1, 2, 3}</code> and <code>{3, 1, 2}</code> are the same set.<br>
    2. <strong>No duplicates:</strong> <code>{1, 2, 2, 3}</code> is simply <code>{1, 2, 3}</code>.
  </div>
</div>

### Common Examples

| Set | Symbol | Members |
|---|---|---|
| Empty set | ∅ or `{}` | No elements |
| Natural numbers | ℕ | `{0, 1, 2, 3, …}` |
| Integers | ℤ | `{…, -2, -1, 0, 1, 2, …}` |
| Rationals | ℚ | All fractions `a/b`, `b ≠ 0` |
| Reals | ℝ | All points on the number line |
| Complex | ℂ | Numbers of the form `a + bi` |

<div class="concept-card">
  <div class="concept-header"><span class="concept-name">Sets of Sets</span></div>
  <p>A set can itself contain other sets as elements. For example:</p>
  <code>C = { {a, b}, {a, c}, {b, c} }</code>
  <p>This is perfectly valid — <code>C</code> has three elements, each of which is a two-element set.</p>
</div>

---

## 1.7.2 Set-Builder Notation

Instead of listing every element, we can **describe** a set using a **predicate** — a rule that all members satisfy. The general form is:

<code>A = { x ∈ S | P(x) }</code>

Read as: "The set of all <code>x</code> in <code>S</code> such that property <code>P(x)</code> holds."

<div class="example">
  <h4>Examples of Set-Builder Notation</h4>
  <ul>
    <li>Even integers: <code>E = { n ∈ ℤ | n = 2k for some k ∈ ℤ }</code></li>
    <li>Prime naturals of the form 4k+1: <code>A = { n ∈ ℕ | n is prime and n = 4k+1 }</code> → <code>{5, 13, 17, 29, …}</code></li>
    <li>Reals greater than 5: <code>B = { x ∈ ℝ | x > 5 }</code></li>
    <li>Squares of the first five naturals: <code>C = { n² | n ∈ {1,2,3,4,5} }</code> → <code>{1, 4, 9, 16, 25}</code></li>
  </ul>
</div>

---

## 1.7.3 Subsets and Set Equality

<div class="module">
  <h3>Subsets</h3>
  <p>Set <code>S</code> is a <strong>subset</strong> of set <code>T</code>, written <code>S ⊆ T</code>, when every element of <code>S</code> is also an element of <code>T</code>.</p>
  <ul>
    <li><strong>Proper subset:</strong> <code>S ⊂ T</code> means <code>S ⊆ T</code> and <code>S ≠ T</code>.</li>
    <li>The empty set <code>∅</code> is a subset of <strong>every</strong> set: <code>∅ ⊆ A</code> for any <code>A</code>.</li>
    <li>Every set is a subset of itself: <code>A ⊆ A</code>.</li>
  </ul>
</div>

<div class="module">
  <h3>Set Equality</h3>
  <p>Two sets <code>X</code> and <code>Y</code> are <strong>equal</strong> (<code>X = Y</code>) if and only if they contain exactly the same elements — equivalently, <code>X ⊆ Y</code> AND <code>Y ⊆ X</code>.</p>
</div>

<div class="example">
  <h4>Example</h4>
  <p>Let <code>A = {1, 2, 3}</code> and <code>B = {3, 1, 2}</code>. Since both contain exactly 1, 2, and 3, we have <code>A = B</code>.</p>
  <p>Let <code>C = {1, 2}</code>. Then <code>C ⊂ A</code> (proper subset) because every element of C is in A, but A has the additional element 3.</p>
</div>

---

## 1.7.4 Set Operations

Given two sets <code>A</code> and <code>B</code> within a universal set <code>U</code>:

<div class="steps">
  <div class="step">
    <strong>1. Union (A ∪ B)</strong><br>
    All elements that are in <code>A</code> OR in <code>B</code> (or both).<br>
    <code>{1,2,3} ∪ {2,3,4} = {1,2,3,4}</code>
  </div>
  <div class="step">
    <strong>2. Intersection (A ∩ B)</strong><br>
    Elements that are in <code>A</code> AND in <code>B</code>.<br>
    <code>{1,2,3} ∩ {2,3,4} = {2,3}</code>
  </div>
  <div class="step">
    <strong>3. Difference (A − B)</strong><br>
    Elements in <code>A</code> that are NOT in <code>B</code>.<br>
    <code>{1,2,3} − {2,3,4} = {1}</code>
  </div>
  <div class="step">
    <strong>4. Complement (A')</strong><br>
    All elements in the universal set <code>U</code> that are NOT in <code>A</code>.<br>
    If <code>U = {1,2,3,4,5}</code> and <code>A = {1,2}</code>, then <code>A' = {3,4,5}</code>.
  </div>
  <div class="step">
    <strong>5. Symmetric Difference (A △ B)</strong><br>
    Elements in <code>A</code> or <code>B</code> but NOT in both — the "exclusive or" of sets.<br>
    <code>A △ B = (A − B) ∪ (B − A)</code><br>
    <code>{1,2,3} △ {2,3,4} = {1,4}</code>
  </div>
</div>

---

## 1.7.5 The Power Set

The **power set** of a set <code>A</code>, written <code>pow(A)</code> or <code>𝒫(A)</code>, is the set of ALL subsets of <code>A</code>, including the empty set and <code>A</code> itself.

<div class="concept-card">
  <div class="concept-header"><span class="concept-name">Key Fact: Size of the Power Set</span></div>
  <p>If <code>A</code> has <code>n</code> elements, then <code>pow(A)</code> has <strong>2ⁿ</strong> elements.</p>
</div>

<div class="example">
  <h4>Example: Power Set of {a, b}</h4>
  <p><code>A = {a, b}</code> has <code>n = 2</code> elements, so <code>pow(A)</code> has <code>2² = 4</code> subsets:</p>
  <code>pow({a, b}) = { ∅, {a}, {b}, {a, b} }</code>
</div>

<div class="example">
  <h4>Example: Power Set of {1, 2, 3}</h4>
  <p><code>A = {1, 2, 3}</code> → <code>2³ = 8</code> subsets:</p>
  <code>pow(A) = { ∅, {1}, {2}, {3}, {1,2}, {1,3}, {2,3}, {1,2,3} }</code>
</div>

---

## 1.7.6 Set Laws (Algebra of Sets)

Sets obey a rich set of algebraic laws that mirror Boolean algebra. These are essential for simplifying expressions and writing correct programs.

<div class="module">
  <h3>1. Commutative Laws</h3>
  <code>A ∪ B = B ∪ A</code><br>
  <code>A ∩ B = B ∩ A</code>
</div>

<div class="module">
  <h3>2. Associative Laws</h3>
  <code>A ∪ (B ∪ C) = (A ∪ B) ∪ C</code><br>
  <code>A ∩ (B ∩ C) = (A ∩ B) ∩ C</code>
</div>

<div class="module">
  <h3>3. Distributive Laws</h3>
  <code>A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)</code><br>
  <code>A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)</code>
</div>

<div class="module">
  <h3>4. Identity Laws</h3>
  <code>A ∪ ∅ = A</code><br>
  <code>A ∩ U = A</code>
</div>

<div class="module">
  <h3>5. Complement Laws</h3>
  <code>A ∪ A' = U</code> &nbsp;(union with complement gives the universal set)<br>
  <code>A ∩ A' = ∅</code> &nbsp;(intersection with complement gives the empty set)<br>
  <code>(A')' = A</code> &nbsp;(double complement cancels out)
</div>

<div class="module">
  <h3>6. De Morgan's Laws</h3>
  <p>These are among the most important and widely used laws in both set theory and logic:</p>
  <code>(A ∪ B)' = A' ∩ B'</code><br>
  <code>(A ∩ B)' = A' ∪ B'</code>
  <p><em>In plain English:</em> The complement of a union is the intersection of the complements, and vice versa.</p>
</div>

<div class="example">
  <h4>Example: Applying De Morgan's Law</h4>
  <p>Let <code>U = {1,2,3,4,5}</code>, <code>A = {1,2,3}</code>, <code>B = {3,4,5}</code>.</p>
  <p>Verify: <code>(A ∪ B)' = A' ∩ B'</code></p>
  <ul>
    <li><code>A ∪ B = {1,2,3,4,5} = U</code>, so <code>(A ∪ B)' = ∅</code></li>
    <li><code>A' = {4,5}</code> and <code>B' = {1,2}</code></li>
    <li><code>A' ∩ B' = {4,5} ∩ {1,2} = ∅</code> ✓</li>
  </ul>
</div>

---

## 1.7.7 Cartesian Product

The **Cartesian product** of sets <code>A</code> and <code>B</code>, written <code>A × B</code>, is the set of all ordered pairs <code>(a, b)</code> where <code>a ∈ A</code> and <code>b ∈ B</code>.

<code>A × B = { (a, b) | a ∈ A and b ∈ B }</code>

<div class="concept-card">
  <div class="concept-header"><span class="concept-name">Cardinality of Cartesian Product</span></div>
  <p>If <code>|A| = m</code> and <code>|B| = n</code>, then <code>|A × B| = m × n</code>.</p>
</div>

<div class="example">
  <h4>Example</h4>
  <p>Let <code>A = {1, 2}</code> and <code>B = {a, b, c}</code>.</p>
  <code>A × B = { (1,a), (1,b), (1,c), (2,a), (2,b), (2,c) }</code>
  <p>So <code>|A × B| = 2 × 3 = 6</code>.</p>
  <p><em>Note:</em> Order matters — <code>(1, a) ≠ (a, 1)</code>, and in general <code>A × B ≠ B × A</code>.</p>
</div>

<div class="definition-card">
  <h4>Connection to Computer Science</h4>
  <p>The Cartesian product is the mathematical foundation of relational databases. A database <strong>table</strong> is conceptually a subset of the Cartesian product of its column domains. Every SQL JOIN operation is built on this concept.</p>
</div>
