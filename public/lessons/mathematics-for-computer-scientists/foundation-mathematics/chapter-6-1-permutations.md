# Chapter 6.1: Arrangements and Permutations

<div class="intro-box">
  <h2>Overview</h2>
  <p>How many different passwords can you create? How many ways can runners finish a race? These questions belong to the world of <strong>combinatorics</strong> — the mathematics of counting. This chapter introduces systematic methods for counting arrangements and selections, which are crucial skills in probability, algorithm design, and cryptography.</p>
</div>

## 6.1.1 The Fundamental Counting Principle

Before we dive into formulas, the key insight is this: **if an event can happen in multiple stages, the total number of outcomes is the product of the number of choices at each stage.**

<div class="example">
  <h4>Example 1: Choosing Playing Cards in a Row</h4>
  <p>From a pack of playing cards, the Ace (A), King (K), Queen (Q), Jack (J), and Ten (10) of Spades are taken. In how many ways can three of these five cards be placed in a row from left to right?</p>
  <p><strong>Reasoning step by step:</strong></p>
  <ul>
    <li><strong>1st card:</strong> Any of the 5 cards → <strong>5 choices</strong></li>
    <li><strong>2nd card:</strong> Any of the remaining 4 cards → <strong>4 choices</strong></li>
    <li><strong>3rd card:</strong> Any of the remaining 3 cards → <strong>3 choices</strong></li>
  </ul>
  <p>Total ways = 5 × 4 × 3 = <strong>60</strong></p>
</div>

<div class="example">
  <h4>Example 2: Schools in a Cross-Country Race</h4>
  <p>Three schools each have a team in a race. In how many ways can the first six places be taken by the three schools (allowing dead heats — i.e., multiple runners from the same school)?</p>
  <ul>
    <li>Each of the 6 places can be taken by any of the 3 schools.</li>
    <li>Total ways = 3 × 3 × 3 × 3 × 3 × 3 = 3⁶ = <strong>729</strong></li>
  </ul>
</div>

<div class="example">
  <h4>Example 3: Even Numbers Greater than 2000</h4>
  <p>How many even numbers, greater than 2000, can be formed with the digits 1, 2, 4, 8, if each digit may be used only once?</p>
  <p><strong>Strategy:</strong> Work out constraints first. The number must be 4 digits (since digits go up to 8, a 4-digit number exceeds 2000 if the first digit is ≥ 2). It must end in an even digit (2, 4, or 8).</p>
  <ul>
    <li><strong>First digit</strong> (must be 2, 4, or 8): 3 choices</li>
    <li><strong>Last digit</strong> (must be even, and different from the first): 2 choices</li>
    <li><strong>Second digit</strong> (any of the remaining 2 digits): 2 choices</li>
    <li><strong>Third digit</strong> (the 1 remaining digit): 1 choice</li>
  </ul>

  | Position | First | Last | Second | Third |
  |---|---|---|---|---|
  | Possibilities | 3 | 2 | 2 | 1 |

  <p>Total = 3 × 2 × 2 × 1 = <strong>12 even numbers</strong></p>
</div>

---

## 6.1.2 Factorial Notation

When we count arrangements of all objects in a set, the products involved grow very large quickly. The **factorial** of a positive integer `n` (written `n!`, read "n factorial") is defined as:

`n! = n × (n-1) × (n-2) × ... × 3 × 2 × 1`

**Special cases:**
- `0! = 1` (defined by convention)
- `1! = 1`
- `7! = 7 × 6 × 5 × 4 × 3 × 2 × 1 = 5040`

<div class="example">
  <h4>Example 4: Factorials and Abbreviation</h4>
  <p>The 13 cards of one suit from a pack can be arranged in a row in:</p>
  <p>13 × 12 × 11 × 10 × ... × 2 × 1 = <strong>13!</strong> ways</p>
  <p>This equals 6,227,020,800 — and you can see why the short notation is so useful!</p>
</div>

<div class="example">
  <h4>Example 5: Simplifying with Factorials</h4>
  <p>(a) Evaluate <code>9! / (2! × 7!)</code></p>
  <p>Write out the top and bottom, and cancel common factors:</p>
  <p><code>(9 × 8 × 7!) / (2 × 1 × 7!) = (9 × 8) / 2 = 72 / 2 = 36</code></p>
  <p>(b) Write <code>40 × 39 × 38 × 37</code> in factorial notation.</p>
  <p>Multiply top and bottom by <code>36!</code>: <code>(40 × 39 × 38 × 37 × 36!) / 36! = 40! / 36!</code></p>
</div>

---

## 6.1.3 Permutations

An arrangement of objects in a **specific order** is called a **permutation**. Since the order matters, the arrangement "ABC" is different from "BAC".

**Key facts:**
- `n` unlike objects can be arranged among themselves in `n!` ways.
- The number of permutations of `r` objects chosen from `n` unlike objects is:

<div class="module">
  <h3>The Permutation Formula: ⁿPᵣ</h3>
  <p><code>ⁿPᵣ = n! / (n - r)!</code></p>
  <p>Where <code>n</code> is the total number of distinct objects and <code>r</code> is the number of objects being arranged.</p>
</div>

**Derivation:** When choosing `r` objects from `n` to arrange in a row:
- 1st place: `n` choices
- 2nd place: `n - 1` choices
- ...continuing...
- r-th place: `n - r + 1` choices

So ⁿPᵣ = `n × (n-1) × (n-2) × ... × (n-r+1)` = `n! / (n-r)!`

<div class="example">
  <h4>Example 6: Books with Restrictions</h4>
  <p>There are 20 books on a shelf, but the red covers of two of them clash and must not be placed together. In how many ways can the books be arranged?</p>
  <p><strong>Strategy — use subtraction:</strong></p>
  <ol>
    <li>Total arrangements with no restrictions: <code>20!</code></li>
    <li>Arrangements where the two red books ARE together: Treat them as 1 object → 19 objects → <code>19!</code> arrangements, and the 2 red books can be swapped internally → <code>2 × 19!</code></li>
    <li>Arrangements where they are NOT together: <code>20! - 2 × 19! = 20 × 19! - 2 × 19! = 18 × 19!</code></li>
  </ol>
</div>

<div class="example">
  <h4>Example 7: Circular Permutations</h4>
  <p>In how many ways can 8 people sit at a round table?</p>
  <p>For circular arrangements, we fix one person's position (since rotations of the same arrangement are considered identical). The remaining 7 people can then be arranged in:</p>
  <p><code>7! = 5040 ways</code></p>
  <blockquote>💡 <strong>Rule:</strong> The number of circular permutations of <code>n</code> objects is <code>(n-1)!</code></blockquote>
</div>

<div class="example">
  <h4>Example 8: Permutations with Repeated Objects</h4>
  <p>In how many ways can the letters of the word BESIEGE be arranged?</p>
  <p>BESIEGE has 7 letters, but the letter 'E' appears 3 times. If we treat all 7 letters as distinct, they'd arrange in <code>7!</code> ways. But since the 3 E's are identical, we divide by <code>3!</code> (the number of ways to rearrange those 3 E's among themselves, which produce no new unique word).</p>
  <p>Total distinct arrangements = <code>7! / 3! = 5040 / 6 = 840</code></p>
  <blockquote>💡 <strong>Rule:</strong> For <code>n</code> objects where one object repeats <code>k</code> times, the distinct arrangements = <code>n! / k!</code></blockquote>
</div>
