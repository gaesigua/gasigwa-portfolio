# Chapter 5: Proof Techniques

<div class="">
  <h2>Overview</h2>
  <p>Logical proof techniques are essential tools in mathematics and computer science. In this chapter, you will learn the Principle of Mathematical Induction, Proof by Contrapositive, and Proof by Contradiction. These methods are particularly useful when direct proof is difficult or unclear.</p>
</div>

## 5.1 Principle of Mathematical Induction

The Principle of Mathematical Induction (PMI) is a powerful proof technique used to show that a mathematical statement is true for all natural numbers (usually n = 1, 2, 3, ...).

It is especially useful for proving:

- Algebraic formulas
- Summation formulas
- Inequalities
- Divisibility properties

<div class="concept-card">
  <div class="concept-header"><span class="concept-name">The Domino Effect Intuition</span></div>
  <p>Think of induction like a row of dominoes:</p>
  <ol>
    <li>If the first domino falls (<strong>Base Case</strong>)</li>
    <li>And each domino knocks down the next one (<strong>Inductive Step</strong>)</li>
    <li>Then all dominoes will fall.</li>
  </ol>
</div>

### Formal Steps of Induction

Let P(n) be a statement depending on a natural number n. To prove that P(n) is true for all n ≥ 1, we perform three steps:

<div class="steps">
  <div class="step">
    <strong>Step 1: Base Case</strong><br>
    Prove that the statement is true for the first value, usually <code>n = 1</code>. This verifies that the statement holds at the starting point.
  </div>
  <div class="step">
    <strong>Step 2: Inductive Hypothesis</strong><br>
    Assume that the statement is true for some arbitrary natural number <code>n = k</code>. That is, assume <code>P(k)</code> is true. This is not a proof, but a temporary assumption used to prove the next step.
  </div>
  <div class="step">
    <strong>Step 3: Inductive Step</strong><br>
    Using the inductive hypothesis, prove that the statement is true for <code>n = k + 1</code>. That is, show <code>P(k) ⇒ P(k + 1)</code>.
  </div>
</div>

<div class="example">
  <h4>Example: Sum of First n Natural Numbers</h4>
  <p>Prove that: <code>1 + 2 + 3 + ... + n = n(n + 1) / 2</code></p>
  <ul>
    <li><strong>Base Case (n=1):</strong> LHS = 1. RHS = 1(1+1)/2 = 1. True.</li>
    <li><strong>Inductive Hypothesis:</strong> Assume true for n=k: <code>1 + 2 + ... + k = k(k+1)/2</code></li>
    <li><strong>Inductive Step (n=k+1):</strong> Add (k+1) to both sides.<br>
      <code>k(k+1)/2 + (k+1) = (k+1)[k/2 + 1] = (k+1)(k+2)/2</code>. True!
    </li>
  </ul>
</div>

## 5.2 Proof by Contrapositive

As we learned in propositional logic, an implication <code>P ⇒ Q</code> is logically equivalent to its contrapositive <code>¬Q ⇒ ¬P</code>.

<div class="">
  <h4>Why use the Contrapositive?</h4>
  <p>Sometimes <code>¬Q ⇒ ¬P</code> is much easier to prove than <code>P ⇒ Q</code>. It is very common in proofs involving divisibility, inequalities, and set membership.</p>
</div>

### General Steps:

1. Identify the statement `P ⇒ Q`.
2. Write its contrapositive `¬Q ⇒ ¬P`.
3. Assume `¬Q` is true.
4. Deduce `¬P`.
5. Conclude that the original statement is true.

<div class="example">
  <h4>Example</h4>
  <p><strong>Statement:</strong> If `n²` is even, then `n` is even.</p>
  <p><strong>Contrapositive:</strong> If `n` is odd, then `n²` is odd.</p>
  <p><strong>Proof:</strong> Let `n = 2k + 1` (odd). Then `n² = (2k + 1)² = 4k² + 4k + 1 = 2(2k² + 2k) + 1`. This is clearly an odd number. Since the contrapositive is true, the original statement is true!</p>
</div>

## 5.3 Proof by Contradiction

In proof by contradiction, we assume the opposite of what we want to prove, and show that this assumption leads to a logical impossibility.

### General Steps:

1. Assume the negation of the statement is true.
2. Apply logical reasoning.
3. Reach a contradiction (a false or impossible result).
4. Reject the assumption.
5. Accept the original statement as true.

<div class="example">
  <h4>Example: Prove √2 is irrational</h4>
  <ul>
    <li><strong>Assume:</strong> √2 is rational. Thus, √2 = a/b, where a and b have no common factors.</li>
    <li><strong>Square both sides:</strong> 2 = a²/b² ⇒ a² = 2b²</li>
    <li><strong>Deduce:</strong> a² is even, which means `a` is even. Let `a = 2k`.</li>
    <li><strong>Substitute:</strong> (2k)² = 2b² ⇒ 4k² = 2b² ⇒ b² = 2k².</li>
    <li><strong>Deduce:</strong> b² is even, which means `b` is even.</li>
    <li><strong>Contradiction:</strong> Both a and b are even, which means they share a common factor of 2. This contradicts our assumption that they have no common factors!</li>
    <li><strong>Conclusion:</strong> √2 must be irrational.</li>
  </ul>
</div>
