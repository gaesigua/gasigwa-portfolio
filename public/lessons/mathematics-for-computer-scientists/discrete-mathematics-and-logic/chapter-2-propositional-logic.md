# Chapter 2: Propositional Logic and Truth Tables

<div class="intro-box">
  <h2>Overview</h2>
  <p>Logical reasoning is based on determining whether statements are true or false. In this chapter, you will learn about propositions, truth tables, logical connectives, tautologies, contradictions, and how to deduce validity using the Contrapositive and Inverse methods.</p>
</div>

## 2.1 Propositions

<div class="">
  <h4>Definition of a Proposition</h4>
  <p>A proposition is a declarative statement that has a definite truth value — it is either true or false, but not both.</p>
  <p>Questions, commands, or exclamations are <strong>not</strong> propositions.</p>
</div>

<div class="example">
  <h4>Examples of Propositions:</h4>
  <ul>
    <li>"2 + 3 = 5" (True)</li>
    <li>"5 is an even number" (False)</li>
    <li>"The Earth revolves around the Sun" (True)</li>
  </ul>
  <h4>Not Propositions:</h4>
  <ul>
    <li>"What time is it?" (question)</li>
    <li>"Close the door." (command)</li>
    <li>"x + 2 = 7" (contains a variable, truth not fixed)</li>
  </ul>
</div>

### Proposition Function (Open Sentence)

A proposition function is a statement that contains one or more variables and does not have a truth value until specific values are assigned to the variables. E.g., `P(x): x > 5`. Once a value is substituted (e.g. `x = 8`), it becomes a proposition (`True`).

## 2.2 Logical Connectives & Truth Tables

A truth table lists all possible combinations of truth values of propositions and shows the resulting truth value of a compound statement. For `n` propositions, the number of rows is `2^n`.

<table class="data-table">
  <thead>
    <tr>
      <th>Connective Name</th>
      <th>Symbol</th>
      <th>Meaning</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Negation</td>
      <td><code>¬</code></td>
      <td>NOT</td>
    </tr>
    <tr>
      <td>Conjunction</td>
      <td><code>∧</code></td>
      <td>AND (True only if both are True)</td>
    </tr>
    <tr>
      <td>Disjunction</td>
      <td><code>∨</code></td>
      <td>OR (False only if both are False)</td>
    </tr>
    <tr>
      <td>Implication</td>
      <td><code>→</code></td>
      <td>IF...THEN (False only when P is True and Q is False)</td>
    </tr>
    <tr>
      <td>Biconditional</td>
      <td><code>↔</code></td>
      <td>IF AND ONLY IF (True when P and Q have the same value)</td>
    </tr>
  </tbody>
</table>

### Implication Truth Table (`P → Q`)

<div class="example">
  <pre><code>P      Q      P → Q
T      T        T
T      F        F
F      T        T
F      F        T</code></pre>
</div>

## 2.3 Logical Equivalence

Two propositions are logically equivalent if they always have the same truth value, regardless of the truth values of their component propositions. Denoted by `P ≡ Q`.

<div class="concept-card">
  <div class="concept-header"><span class="concept-name">Important Logical Identity</span></div>
  <p><code>P → Q ≡ ¬P ∨ Q</code></p>
  <p>"If P, then Q" is logically the same as "Either P is false, or Q is true".</p>
</div>

## 2.4 Tautology, Contradiction, and Contingency

<div class="steps">
  <div class="step">
    <strong>1. Tautology:</strong> A statement that is always true, regardless of its components. Example: <code>P ∨ ¬P</code> ("P or not P").
  </div>
  <div class="step">
    <strong>2. Contradiction:</strong> A statement that is always false. Example: <code>P ∧ ¬P</code> ("P and not P").
  </div>
  <div class="step">
    <strong>3. Contingency:</strong> A statement that is true for some values and false for others. Example: <code>P ∧ Q</code>.
  </div>
</div>

## 2.5 Converse, Inverse, and Contrapositive

For a conditional statement `P → Q` ("If P, then Q"):

<div class="comparison-grid">
  <div class="comparison-card">
    <h5>Original Implication</h5>
    <code>P → Q</code>
    <p>If P is true, then Q is true.</p>
  </div>
  <div class="comparison-card">
    <h5>Converse</h5>
    <code>Q → P</code>
    <p>If Q is true, then P is true.</p>
  </div>
  <div class="comparison-card">
    <h5>Inverse</h5>
    <code>¬P → ¬Q</code>
    <p>If P is not true, then Q is not true.</p>
  </div>
  <div class="comparison-card">
    <h5>Contrapositive</h5>
    <code>¬Q → ¬P</code>
    <p>If Q is not true, then P is not true.</p>
  </div>
</div>

<div class="warning">
  <strong>Key Fact:</strong> Only the <strong>Contrapositive</strong> is logically equivalent to the original implication! The converse and inverse may not have the same truth value as the original statement.
</div>

<div class="example">
  <h4>Example in Real Life</h4>
  <p><strong>Original:</strong> If a figure is a square (P), then it has four sides (Q).</p>
  <ul>
    <li><strong>Converse:</strong> If a figure has four sides, then it is a square. (False - could be a rectangle)</li>
    <li><strong>Inverse:</strong> If a figure is not a square, then it does not have four sides. (False - could be a rectangle)</li>
    <li><strong>Contrapositive:</strong> If a figure does not have four sides, then it is not a square. (True - Logically equivalent!)</li>
  </ul>
</div>
