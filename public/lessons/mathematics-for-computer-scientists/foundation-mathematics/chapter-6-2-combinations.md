# Chapter 6.2: Combinations

<div class="intro-box">
  <h2>Overview</h2>
  <p>In the previous section, we focused on <strong>permutations</strong>, where the <em>order</em> of selection matters. Now we turn to <strong>combinations</strong>, where order does <em>not</em> matter. This distinction is fundamental — choosing a committee of 3 from 10 people is very different from awarding them 1st, 2nd, and 3rd place medals.</p>
</div>

## 6.2.1 Permutations vs. Combinations: The Key Difference

| Feature | Permutation | Combination |
|---|---|---|
| Order matters? | **Yes** | **No** |
| ABC ≠ BAC? | Yes, different | No, the same |
| Formula | `n! / (n-r)!` | `n! / (n-r)! × r!` |
| Notation | ⁿPᵣ | ⁿCᵣ or C(n, r) |

Consider choosing 3 letters from {A, B, C}:
- As **permutations**: ABC, ACB, BAC, BCA, CAB, CBA → **6 arrangements**
- As a **combination**: {A, B, C} → just **1 group** (order doesn't matter)

---

## 6.2.2 The Combination Formula

When a selection is made with no regard to order, it is called a **combination**.

The number of combinations of `r` objects chosen from `n` unlike objects is written **ⁿCᵣ** and equals:

<div class="module">
  <h3>The Combination Formula: ⁿCᵣ</h3>
  <p><code>ⁿCᵣ = n! / ((n - r)! × r!)</code></p>
  <p><strong>Also written as:</strong> C(n, r), nCr, or the binomial coefficient notation (n choose r).</p>
</div>

**Intuition behind the formula:**
1. Start with the permutations of `r` objects from `n`: `n! / (n-r)!`
2. Each combination of `r` objects has been counted `r!` times (once for every order they could be arranged).
3. Divide by `r!` to count each unique group only once.

---

## 6.2.3 Derivation from Permutations

From the last section, we know there are `n!/(n−r)!` permutations of `r` objects from `n`. Each unique *combination* of `r` objects can be arranged in `r!` ways (giving `r!` permutations per combination). Therefore:

`n! / (n-r)! = r! × (number of combinations)`

Solving for combinations:
`ⁿCᵣ = n! / ((n-r)! × r!)`

<div class="example">
  <h4>Example 10: Selecting Cards</h4>
  <p>In how many ways can 13 cards be selected from a pack of 52 playing cards?</p>
  <p>The number of permutations of 13 from 52 is <code>52! / 39!</code>.</p>
  <p>Each combination of 13 cards can be arranged in <code>13!</code> ways, so:</p>
  <p><code>ⁿCᵣ = 52! / (39! × 13!)</code></p>
</div>

---

## 6.2.4 Worked Examples

<div class="example">
  <h4>Example 11: Choosing a Mixed Hockey Team</h4>
  <p>A mixed hockey team of 5 men and 6 women is to be chosen from 7 men and 9 women. In how many ways can this be done?</p>
  <p><strong>Key insight:</strong> The selection of men and women are independent events. We multiply their separate counts.</p>
  <ul>
    <li>Ways to choose 5 men from 7: <code>⁷C₅ = 7! / (2! × 5!) = 21</code></li>
    <li>Ways to choose 6 women from 9: <code>⁹C₆ = 9! / (3! × 6!) = 84</code></li>
    <li>Total ways = <code>⁷C₅ × ⁹C₆ = 21 × 84 = 1764</code></li>
  </ul>
  <p><strong>The team can be chosen in 1764 ways.</strong></p>
</div>

---

## 6.2.5 Useful Properties of ⁿCᵣ

These properties are handy for simplifying calculations:

<div class="module">
  <ul>
    <li><strong>Symmetry Property:</strong> <code>ⁿCᵣ = ⁿC(n-r)</code><br>
    Choosing 3 from 10 is the same count as choosing 7 from 10 (you're always splitting into a chosen and an unchosen group).</li>
    <li><strong>Identity:</strong> <code>ⁿC₀ = 1</code> and <code>ⁿCₙ = 1</code><br>
    There is exactly one way to choose none, and exactly one way to choose all.</li>
    <li><strong>Pascal's Identity:</strong> <code>ⁿCᵣ = ⁽ⁿ⁻¹⁾C(r-1) + ⁽ⁿ⁻¹⁾Cᵣ</code><br>
    This builds the famous Pascal's Triangle and is foundational to the Binomial Theorem.</li>
  </ul>
</div>

---

## 6.2.6 Permutations vs Combinations: Deciding Which to Use

The most important skill in counting problems is recognising which method applies.

> **Ask yourself: Does changing the order create a new outcome?**
> - **YES** → Use **Permutations** (ⁿPᵣ)
> - **NO** → Use **Combinations** (ⁿCᵣ)

| Scenario | Order Matters? | Method |
|---|---|---|
| Awarding 1st, 2nd, 3rd place medals to 3 from 10 runners | Yes (different medals) | Permutation |
| Choosing 3 people from 10 for a committee | No | Combination |
| Arranging 5 books on a shelf | Yes | Permutation (n!) |
| Choosing 5 books from a library to take home | No | Combination |
| Creating a 4-digit PIN from digits 0-9 | Yes (1234 ≠ 4321) | Permutation |
| Picking a lottery ticket with 6 numbers from 49 | No (order doesn't matter) | Combination |
