# Chapter 1.8: Relations

<div class="intro-box">
  <h2>Overview</h2>
  <p>In mathematics, a <strong>relation</strong> formalises the idea of one thing being connected to another — "x divides y", "student x is enrolled in course y", "city x has a direct flight to city y". Relations appear everywhere in computer science: database foreign keys, graph edges, dependency graphs, and type hierarchies are all relations. This chapter studies relations rigorously, examining their key properties, and builds up to two especially important special cases: <em>equivalence relations</em> and <em>partial orders</em>.</p>
</div>

## 1.8.1 Definition of a Relation

Recall that the **Cartesian product** `A × B` is the set of all ordered pairs `(a, b)` with `a ∈ A` and `b ∈ B`.

<div class="definition-card">
  <h4>Binary Relation</h4>
  <p>A <strong>binary relation</strong> from set <code>A</code> to set <code>B</code> is any subset <code>R ⊆ A × B</code>.</p>
  <p>We write <code>a R b</code> (or <code>(a, b) ∈ R</code>) to say "<code>a</code> is related to <code>b</code>".</p>
  <p>A relation <strong>on</strong> a set <code>A</code> is a relation from <code>A</code> to <code>A</code>, i.e., <code>R ⊆ A × A</code>.</p>
</div>

### Everyday Examples of Relations

| Relation                 | Set A    | Set B   | Example pair      |
| ------------------------ | -------- | ------- | ----------------- | --- |
| "is enrolled in"         | Students | Courses | (Alice, CS101)    |
| "has a direct flight to" | Cities   | Cities  | (Kigali, Nairobi) |
| "divides"                | ℕ        | ℕ       | (3, 12) since 3   | 12  |
| "is less than" (< )      | ℝ        | ℝ       | (2, 5)            |
| "likes"                  | People   | People  | (Bob, Carol)      |

---

## 1.8.2 Representing Relations

### As a Set of Pairs

The most explicit representation. Example: The "less-than-or-equal" relation on `{1, 2, 3}` is:
`R = { (1,1), (1,2), (1,3), (2,2), (2,3), (3,3) }`

### As a Matrix (Zero-One Matrix)

For a relation `R` from `A = {a₁, …, aₘ}` to `B = {b₁, …, bₙ}`, create an m × n matrix where entry `Mᵢⱼ = 1` if `(aᵢ, bⱼ) ∈ R`, and `0` otherwise.

<div class="example">
  <h4>Example: Matrix Representation</h4>
  <p>Let <code>A = {1, 2, 3}</code> and <code>R</code> be "divides" on A. Then:</p>
  <ul>
    <li>1 divides 1, 2, 3 → row 1: <code>[1, 1, 1]</code></li>
    <li>2 divides 2 → row 2: <code>[0, 1, 0]</code></li>
    <li>3 divides 3 → row 3: <code>[0, 0, 1]</code></li>
  </ul>
</div>

### As a Directed Graph (Digraph)

Each element of `A` is a **vertex**. Draw a directed arrow (edge) from `a` to `b` whenever `(a, b) ∈ R`. This visual representation makes relation properties immediately visible.

---

## 1.8.3 Properties of Relations

A relation `R` on a set `A` can have the following key properties:

<div class="steps">
  <div class="step">
    <strong>1. Reflexive</strong><br>
    Every element is related to itself: <code>∀a ∈ A: (a, a) ∈ R</code>.<br>
    <em>Example:</em> "≤" on ℝ is reflexive because <code>a ≤ a</code> for all <code>a</code>.<br>
    <em>In a digraph:</em> every vertex has a self-loop.
  </div>
  <div class="step">
    <strong>2. Symmetric</strong><br>
    If <code>a</code> is related to <code>b</code>, then <code>b</code> is related to <code>a</code>: <code>∀a,b: (a,b) ∈ R ⇒ (b,a) ∈ R</code>.<br>
    <em>Example:</em> "is a sibling of" — if Alice is Bob's sibling, then Bob is Alice's sibling.<br>
    <em>In a digraph:</em> every edge has a matching reverse edge.
  </div>
  <div class="step">
    <strong>3. Antisymmetric</strong><br>
    If <code>(a,b) ∈ R</code> and <code>(b,a) ∈ R</code>, then <code>a = b</code>.<br>
    <em>Example:</em> "≤" is antisymmetric: if <code>a ≤ b</code> and <code>b ≤ a</code>, then <code>a = b</code>.<br>
    <em>Note:</em> Antisymmetric ≠ "not symmetric" — a relation can be both (only on self-loops) or neither.
  </div>
  <div class="step">
    <strong>4. Transitive</strong><br>
    If <code>a R b</code> and <code>b R c</code>, then <code>a R c</code>: <code>∀a,b,c: (a,b) ∈ R ∧ (b,c) ∈ R ⇒ (a,c) ∈ R</code>.<br>
    <em>Example:</em> "is an ancestor of" — if X is an ancestor of Y and Y is an ancestor of Z, then X is an ancestor of Z.<br>
    <em>Example:</em> "is less than" (<) on ℝ is transitive: <code>a < b</code> and <code>b < c</code> implies <code>a < c</code>.
  </div>
</div>

<div class="example">
  <h4>Property Check: Classifying Relations</h4>

| Relation          | Reflexive | Symmetric | Antisymmetric | Transitive |
| ----------------- | :-------: | :-------: | :-----------: | :--------: |
| = (equality) on ℝ |     ✓     |     ✓     |       ✓       |     ✓      |
| < on ℝ            |     ✗     |     ✗     |       ✓       |     ✓      |
| ≤ on ℝ            |     ✓     |     ✗     |       ✓       |     ✓      |
| "is a sibling of" |     ✗     |     ✓     |       ✗       |     ✓      |
| "is a parent of"  |     ✗     |     ✗     |       ✓       |     ✗      |

</div>

---

## 1.8.4 Equivalence Relations

An **equivalence relation** is a relation that is simultaneously **reflexive**, **symmetric**, and **transitive**. It captures the idea of "being essentially the same" in some respect.

<div class="concept-card">
  <div class="concept-header"><span class="concept-name">Equivalence Relation Definition</span></div>
  <p>A relation <code>R</code> on set <code>A</code> is an <strong>equivalence relation</strong> if it is:</p>
  <ul>
    <li>Reflexive: <code>∀a: a R a</code></li>
    <li>Symmetric: <code>a R b ⇒ b R a</code></li>
    <li>Transitive: <code>a R b ∧ b R c ⇒ a R c</code></li>
  </ul>
</div>

### The Canonical Example: Congruence Modulo n

For a fixed integer `n > 0`, define `a ≡ b (mod n)` if `n` divides `(a − b)`.

<div class="example">
  <h4>Congruence mod 3</h4>
  <p>For <code>n = 3</code>, the integers split into three groups:</p>
  <ul>
    <li><code>[0]₃ = {…, -6, -3, 0, 3, 6, …}</code> — multiples of 3</li>
    <li><code>[1]₃ = {…, -5, -2, 1, 4, 7, …}</code> — leave remainder 1</li>
    <li><code>[2]₃ = {…, -4, -1, 2, 5, 8, …}</code> — leave remainder 2</li>
  </ul>
  <p>Any two numbers in the same group are related. The groups are called <strong>equivalence classes</strong>.</p>
</div>

### Equivalence Classes and Partitions

Given an equivalence relation `R` on `A`, the **equivalence class** of element `a` is:
`[a] = { x ∈ A | x R a }`

The collection of all distinct equivalence classes **partitions** the set `A` into non-overlapping, non-empty subsets that together cover all of `A`.

<div class="definition-card">
  <h4>Partition ↔ Equivalence Relation</h4>
  <p>Every equivalence relation on <code>A</code> corresponds to a unique partition of <code>A</code>, and every partition of <code>A</code> defines a unique equivalence relation. They are two sides of the same coin.</p>
</div>

<div class="example">
  <h4>Example: Partitioning {1,2,3,4,5,6}</h4>
  <p>Define: <code>a R b</code> if <code>a</code> and <code>b</code> have the same remainder when divided by 2.</p>
  <ul>
    <li>Even class: <code>[0] = {2, 4, 6}</code></li>
    <li>Odd class: <code>[1] = {1, 3, 5}</code></li>
  </ul>
  <p>This is a valid partition — the two classes are disjoint and together cover all of <code>{1,2,3,4,5,6}</code>.</p>
</div>

---

## 1.8.5 Partial Orders

A **partial order** is a relation that is **reflexive**, **antisymmetric**, and **transitive**. It captures the idea of "ordering" elements without requiring that every pair be comparable.

<div class="definition-card">
  <h4>Partial Order (Poset)</h4>
  <p>A relation <code>R</code> on set <code>A</code> is a <strong>partial order</strong> if it is reflexive, antisymmetric, and transitive. The pair <code>(A, R)</code> is called a <strong>partially ordered set</strong> or <strong>poset</strong>.</p>
</div>

### Examples of Partial Orders

<div class="steps">
  <div class="step">
    <strong>"≤" on ℝ</strong><br>
    The classic example. Every pair of real numbers is comparable: either <code>a ≤ b</code> or <code>b ≤ a</code>. This makes it a <em>total order</em> (a special case of partial order).
  </div>
  <div class="step">
    <strong>"Divides" on ℕ</strong><br>
    <code>a | b</code> means "<code>a</code> divides <code>b</code>". This is a partial order: reflexive (<code>a | a</code>), antisymmetric (<code>a | b</code> and <code>b | a</code> implies <code>a = b</code> for positives), and transitive (<code>a | b</code> and <code>b | c</code> implies <code>a | c</code>). But 3 and 5 are not comparable (neither divides the other), so it's a <em>partial</em> order, not total.
  </div>
  <div class="step">
    <strong>"⊆" (subset) on a power set</strong><br>
    The subset relation on <code>pow(A)</code> is a partial order. Sets <code>{1}</code> and <code>{2}</code> are incomparable — neither is a subset of the other.
  </div>
  <div class="step">
    <strong>Task dependencies in a project</strong><br>
    "Task X must be completed before Task Y" defines a partial order over project tasks — a direct application in software engineering and scheduling algorithms (topological sort).
  </div>
</div>

### Hasse Diagrams

A **Hasse diagram** is a compact visual representation of a poset. We draw it with:

- Each element as a node.
- An upward edge from `a` to `b` if `a < b` and there is no `c` with `a < c < b` (no elements in between).
- Self-loops and implied transitive edges are omitted.

<div class="example">
  <h4>Example: Hasse Diagram for Divisors of 12</h4>
  <p>The divisors of 12 are <code>{1, 2, 3, 4, 6, 12}</code> ordered by divisibility:</p>
  <pre style="color: white;">
        12
       /  \
      4    6
      |   / \
      2  3   |
       \ |  /
         1
  </pre>
  <p>Reading up: 1 divides everything, 2 and 3 divide 4, 6, and 12 respectively, and 12 is at the top.</p>
</div>

---

## 1.8.6 Why Relations Matter in Computing

<div class="concept-card">
  <div class="concept-header"><span class="concept-name">Relations in Computer Science</span></div>
  <ul>
    <li><strong>Relational Databases:</strong> Every table is a relation; SQL queries compute new relations via join (Cartesian product + selection), union, and difference.</li>
    <li><strong>Graph Theory:</strong> A directed graph is simply a relation on a set of vertices. Graph algorithms (BFS, DFS, Dijkstra's) operate on relations.</li>
    <li><strong>Type Systems:</strong> "is a subtype of" is a partial order; compilers use it during type checking.</li>
    <li><strong>Equivalence Classes:</strong> Hash tables group keys by hash value — items in the same bucket form an equivalence class under "same hash".</li>
    <li><strong>Scheduling:</strong> Build systems (make, gradle) and task schedulers use partial orders and topological sort to determine valid execution orders.</li>
  </ul>
</div>
