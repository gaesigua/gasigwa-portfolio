# Chapter 6: Combinatorics

<div class="intro-box">
  <h2>Overview</h2>
  <p>Combinatorics is the study of counting, arranging, and selecting objects. In this chapter, you will learn how to calculate the number of possible outcomes using Permutations (when order matters) and Combinations (when order does not matter).</p>
</div>

## 6.1 Permutations

<div class="">
  <h4>Meaning of Permutation</h4>
  <p>A permutation is an arrangement of objects where the <strong>order of arrangement is important</strong>.</p>
  <p>If changing the order produces a different outcome (e.g., forming a password, ranking 1st, 2nd, and 3rd), then the problem involves permutations.</p>
</div>

### Permutation of All Objects

If there are `n` distinct objects, the number of ways to arrange ALL of them in a line is:
<code>n! = n × (n - 1) × (n - 2) × ... × 1</code>

<div class="example">
  <h4>Example:</h4>
  <p>Number of ways to arrange 4 books on a shelf:</p>
  <p><code>4! = 4 × 3 × 2 × 1 = 24</code></p>
</div>

### Permutation of r Objects from n Objects

When selecting and arranging `r` objects from a pool of `n` distinct objects, the formula is:

<code>nPr = n! / (n - r)!</code>

<div class="example">
  <h4>Example: Forming Codes</h4>
  <p>How many different 3-letter codes can be formed from 7 distinct letters, if no letter is repeated?</p>
  <ul>
    <li>Identify values: <code>n = 7, r = 3</code></li>
    <li>Formula: <code>7P3 = 7! / (7 - 3)! = 7! / 4!</code></li>
    <li>Calculate: <code>7 × 6 × 5 = 210</code> codes.</li>
  </ul>
</div>

## 6.2 Combinations

<div class="">
  <h4>Meaning of Combination</h4>
  <p>A combination is a selection of objects from a larger group where the <strong>order of selection does NOT matter</strong>.</p>
  <p>Example: Selecting a committee of 3 students from a class of 10. Selecting students A, B, and C is exactly the same team as selecting C, B, and A.</p>
</div>

### Formula for Combinations

The number of ways to select `r` objects from `n` distinct objects is given by:

<code>nCr = n! / [r! × (n - r)!]</code>

<div class="note">
  <strong>Why divide by r!?</strong><br>
  First, we count all possible arrangements (permutations). Since order does not matter, each group of `r` objects has been counted `r!` times (because there are `r!` ways to arrange those specific `r` objects). We divide by `r!` to remove these duplicates.
</div>

<div class="example">
  <h4>Example: Committee Selection</h4>
  <p>A committee of 4 people is to be chosen from 10 candidates. How many different committees are possible?</p>
  <ul>
    <li>Identify values: <code>n = 10, r = 4</code></li>
    <li>Formula: <code>10C4 = 10! / [4! × 6!]</code></li>
    <li>Simplify: <code>(10 × 9 × 8 × 7) / (4 × 3 × 2 × 1)</code></li>
    <li>Calculate: <code>5040 / 24 = 210</code> possible committees.</li>
  </ul>
</div>

### Important Properties of Combinations

<div class="steps">
  <div class="step">
    <strong>1. Symmetry Property:</strong> <code>nCr = nC(n-r)</code><br>
    Selecting `r` objects to keep is the same as selecting `n-r` objects to leave behind.
  </div>
  <div class="step">
    <strong>2. Boundary Conditions:</strong> <code>nC0 = 1</code> and <code>nCn = 1</code><br>
    There is only 1 way to select nothing, and 1 way to select everything.
  </div>
</div>
