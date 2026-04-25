# Chapter 4: Relations and Posets

<div class="intro-box">
  <h2>Overview</h2>
  <p>In discrete mathematics, many situations involve ordering elements or establishing relationships between them. In this chapter, you will learn about Relations, their core properties (Reflexivity, Symmetry, Transitivity), Partially Ordered Sets (Posets), and Lattices.</p>
</div>

## 4.1 Relations

<div class="">
  <h4>Definition of a Relation</h4>
  <p>Let A and B be two sets. A relation R from A to B is any subset of the Cartesian product <code>A × B</code>.</p>
  <p>If <code>(a, b) ∈ R</code>, we say "a is related to b" and write <code>aRb</code>.</p>
  <p>Relations can be represented as sets of ordered pairs, arrow diagrams, matrices, or directed graphs.</p>
</div>

### Properties of Relations

When a relation is on a single set A (`A × A`), it can have specific properties:

<div class="module">
  <h3>1. Reflexive Relation</h3>
  <p>Every element is related to itself.</p>
  <code>(a, a) ∈ R for all a ∈ A</code>
  <p><em>Example:</em> <code>R = {(1,1), (2,2), (3,3)}</code> on set <code>A = {1, 2, 3}</code>.</p>
</div>

<div class="module">
  <h3>2. Symmetric Relation</h3>
  <p>The relationship works in both directions.</p>
  <code>If (a, b) ∈ R, then (b, a) ∈ R</code>
  <p><em>Example:</em> <code>R = {(1,2), (2,1), (3,3)}</code>.</p>
</div>

<div class="module">
  <h3>3. Transitive Relation</h3>
  <p>The relationship carries over through a middle element.</p>
  <code>If (a, b) ∈ R and (b, c) ∈ R, then (a, c) ∈ R</code>
  <p><em>Example:</em> <code>R = {(1,2), (2,3), (1,3)}</code>.</p>
</div>

## 4.2 Partially Ordered Sets (Posets)

Many real-world relationships involve ordering elements, but not necessarily in a strict sequence (e.g., file directory structures, task prerequisites, divisibility).

<div class="concept-card">
  <div class="concept-header"><span class="concept-name">Poset Definition</span></div>
  <p>A partially ordered set (poset) is a pair <code>(P, ≤)</code> where <code>≤</code> is a binary relation on P that satisfies three properties:</p>
  <ol>
    <li><strong>Reflexive:</strong> <code>a ≤ a</code></li>
    <li><strong>Antisymmetric:</strong> If <code>a ≤ b</code> and <code>b ≤ a</code>, then <code>a = b</code>. (If two elements are related in both directions, they must be the same).</li>
    <li><strong>Transitive:</strong> If <code>a ≤ b</code> and <code>b ≤ c</code>, then <code>a ≤ c</code>.</li>
  </ol>
</div>

<div class="example">
  <h4>Examples of Posets</h4>
  <ul>
    <li><strong>Divisibility:</strong> Let `P = {1, 2, 3, 6}`. The relation `a | b` ("a divides b") is reflexive, antisymmetric, and transitive.</li>
    <li><strong>Subsets:</strong> The power set `P(A)` under the relation `⊆` (subset) forms a poset.</li>
  </ul>
</div>

<div class="warning">
  <strong>Partial Order vs Total Order:</strong> In a partial order, not every pair of elements must be comparable. For example, under divisibility, neither 2 divides 3 nor 3 divides 2. They are not comparable.
</div>

## 4.3 Lattices

<div class="">
  <h4>What is a Lattice?</h4>
  <p>A lattice is a special type of partially ordered set (poset) in which <strong>every pair of elements</strong> has both:</p>
  <ul>
    <li>A <strong>Least Upper Bound (Join)</strong>: denoted <code>a ∨ b</code></li>
    <li>A <strong>Greatest Lower Bound (Meet)</strong>: denoted <code>a ∧ b</code></li>
  </ul>
</div>

<div class="example">
  <h4>Example: Divisibility Lattice</h4>
  <p>Consider the set of divisors of 12: <code>L = {1, 2, 3, 4, 6, 12}</code> under the "divides" relation.</p>
  <ul>
    <li>The Join <code>(a ∨ b)</code> is the Least Common Multiple (LCM).</li>
    <li>The Meet <code>(a ∧ b)</code> is the Greatest Common Divisor (GCD).</li>
  </ul>
  <p>Example: <code>2 ∨ 3 = 6</code> and <code>2 ∧ 3 = 1</code>.</p>
</div>

### Hasse Diagrams

A Hasse diagram is a graphical representation of a poset. Higher elements are drawn above lower elements, edges indicate direct ordering, and transitive edges are omitted for simplicity. Lattices are commonly visualized using Hasse diagrams.
