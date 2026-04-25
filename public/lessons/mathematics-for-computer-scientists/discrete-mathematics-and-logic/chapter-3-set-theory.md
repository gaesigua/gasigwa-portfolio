# Chapter 3: Set Theory

<div class="intro-box">
  <h2>Overview</h2>
  <p>Set Theory is the branch of mathematics that deals with collections of objects. Sets provide the foundation for nearly all areas of mathematics, including logic, probability, and discrete mathematics. In this chapter, you will learn about set types, operations, Set Algebra, Power Sets, and Cartesian Products.</p>
</div>

## 3.1 Basic Concepts

<div class="definition-card">
  <h4>What is a Set?</h4>
  <p>A set is a well-defined collection of distinct objects, called elements or members. For example: <code>A = {1, 2, 3, 4, 5}</code></p>
  <ul>
    <li>We use curly braces `{ }` to denote sets.</li>
    <li><code>a ∈ A</code> means "a is an element of set A".</li>
    <li><code>b ∉ A</code> means "b is not an element of set A".</li>
  </ul>
</div>

<div class="module">
  <h3>Universal and Empty Sets</h3>
  <ul>
    <li><strong>Universal Set (U):</strong> The set containing all elements under discussion. All other sets in a context are subsets of U.</li>
    <li><strong>Empty Set (∅ or { }):</strong> A set with no elements. <em>Special property: ∅ is a subset of every set.</em></li>
  </ul>
</div>

## 3.2 Types of Sets

<div class="steps">
  <div class="step">
    <strong>1. Finite vs Infinite:</strong> Finite sets contain a countable number of elements (e.g. <code>{1, 2, 3}</code>). Infinite sets have unlimited elements (e.g. all natural numbers).
  </div>
  <div class="step">
    <strong>2. Subset (⊆):</strong> Set A is a subset of B if all elements of A are in B.
  </div>
  <div class="step">
    <strong>3. Proper Subset (⊂):</strong> Set A is a proper subset of B if A is a subset of B, but A is NOT equal to B.
  </div>
  <div class="step">
    <strong>4. Disjoint Sets:</strong> Two sets are disjoint if they have no elements in common.
  </div>
</div>

## 3.3 Set Operations

<table class="data-table">
  <thead>
    <tr>
      <th>Operation</th>
      <th>Symbol</th>
      <th>Meaning</th>
      <th>Keyword</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Union</strong></td>
      <td><code>A ∪ B</code></td>
      <td>Elements in A or B (or both).</td>
      <td>OR</td>
    </tr>
    <tr>
      <td><strong>Intersection</strong></td>
      <td><code>A ∩ B</code></td>
      <td>Elements in both A and B.</td>
      <td>AND</td>
    </tr>
    <tr>
      <td><strong>Difference</strong></td>
      <td><code>A − B</code></td>
      <td>Elements in A that are not in B.</td>
      <td>Only in A</td>
    </tr>
    <tr>
      <td><strong>Complement</strong></td>
      <td><code>A′</code></td>
      <td>Elements in the Universal set U that are not in A.</td>
      <td>NOT</td>
    </tr>
  </tbody>
</table>

## 3.4 Set Algebra

Set operations follow algebraic laws similar to Boolean logic.

<div class="comparison-grid">
  <div class="comparison-card">
    <h5>Commutative & Associative</h5>
    <p>Order and grouping don't matter for Union and Intersection.</p>
    <code>A ∪ B = B ∪ A</code><br>
    <code>(A ∪ B) ∪ C = A ∪ (B ∪ C)</code>
  </div>
  <div class="comparison-card">
    <h5>De Morgan's Laws</h5>
    <p>Relates complements of unions and intersections.</p>
    <code>(A ∪ B)′ = A′ ∩ B′</code><br>
    <code>(A ∩ B)′ = A′ ∪ B′</code>
  </div>
</div>

## 3.5 Power Sets and Cartesian Products

<div class="concept-card">
  <div class="concept-header"><span class="concept-name">Power Set: P(A)</span></div>
  <p>The power set of A is the set of <strong>all possible subsets</strong> of A, including the empty set ∅ and the set A itself.</p>
  <p><strong>Property:</strong> If A has <code>n</code> elements, the power set has <code>2^n</code> elements.</p>
  <p><em>Example:</em> If A = {a, b}, then P(A) = { ∅, {a}, {b}, {a, b} }</p>
</div>

<div class="concept-card">
  <div class="concept-header"><span class="concept-name">Cartesian Product: A × B</span></div>
  <p>The Cartesian product of A and B is the set of all ordered pairs (a, b) where a ∈ A and b ∈ B.</p>
  <p><strong>Property:</strong> If |A| = m and |B| = n, then |A × B| = m × n.</p>
  <p><em>Example:</em> If A = {1, 2} and B = {x, y}, then A × B = {(1,x), (1,y), (2,x), (2,y)}</p>
  <p><em>Note:</em> Order matters! A × B ≠ B × A.</p>
</div>
