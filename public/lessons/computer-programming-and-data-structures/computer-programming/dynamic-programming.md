# 18. Dynamic Programming

## What is Dynamic Programming?

**Dynamic Programming (DP)** is an algorithmic technique for solving complex optimization problems by breaking them into simpler overlapping subproblems, solving each subproblem exactly once, and storing the results to avoid redundant computation.

<div class="cp-definition">

#### Two Key Properties for DP

| Property | Meaning |
|----------|---------|
| **Optimal Substructure** | The optimal solution to the problem contains the optimal solutions to its subproblems |
| **Overlapping Subproblems** | The same subproblems are solved multiple times in a naive recursive solution |

If a problem has BOTH properties → Dynamic Programming applies and gives massive speedup.

</div>

---

## Two Approaches to DP

<div class="cp-comparison">
<div class="cp-comparison-left">
<h5>Top-Down (Memoization)</h5>

- Write the recursive formula naturally
- Cache (memo) results as you compute them
- Only compute subproblems that are actually needed
- Easier to write; may have recursion overhead
</div>
<div class="cp-comparison-right">
<h5>Bottom-Up (Tabulation)</h5>

- Fill a table iteratively from the smallest subproblems up
- No recursion; no stack overflow risk
- Slight extra work: computes ALL subproblems
- Usually faster in practice
</div>
</div>

---

## Example 1: Fibonacci Numbers

The Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...

**Naive Recursion — O(2ⁿ):**
```c
int fib(int n) {
    if (n <= 1) return n;
    return fib(n-1) + fib(n-2);  /* fib(5) calls fib(3) THREE times! */
}
```

The problem: `fib(n-2)` is computed many times over and over.

**Top-Down DP (Memoization) — O(n):**
```c
#include <stdio.h>
#define MAXN 100

long memo[MAXN];

void initMemo() {
    int i;
    for (i = 0; i < MAXN; i++) memo[i] = -1;
}

long fibMemo(int n) {
    if (n <= 1) return n;
    if (memo[n] != -1) return memo[n];  /* already computed! */
    memo[n] = fibMemo(n-1) + fibMemo(n-2);
    return memo[n];
}

int main() {
    initMemo();
    printf("fib(10) = %ld\n", fibMemo(10));  /* 55 */
    printf("fib(40) = %ld\n", fibMemo(40));  /* 102334155 — instant! */
    return 0;
}
```

**Bottom-Up DP (Tabulation) — O(n) time, O(n) space:**
```c
#include <stdio.h>

long fibTable(int n) {
    if (n <= 1) return n;
    long dp[n + 1];
    dp[0] = 0;
    dp[1] = 1;
    int i;
    for (i = 2; i <= n; i++)
        dp[i] = dp[i-1] + dp[i-2];
    return dp[n];
}

/* Further optimized: O(1) space */
long fibOptimal(int n) {
    if (n <= 1) return n;
    long a = 0, b = 1, c;
    int i;
    for (i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}

int main() {
    printf("fib(10) = %ld\n", fibTable(10));    /* 55 */
    printf("fib(50) = %ld\n", fibOptimal(50));  /* 12586269025 */
    return 0;
}
```

---

## Example 2: Longest Common Subsequence (LCS)

Given two strings, find the length of their longest common subsequence (not necessarily contiguous).

**Example:** `"ABCBDAB"` and `"BDCABA"` → LCS = `"BCBA"` or `"BDAB"`, length = 4.

**Recurrence:**
```
LCS(i, j):
  - if s1[i] == s2[j]: 1 + LCS(i-1, j-1)
  - else: max(LCS(i-1, j), LCS(i, j-1))
```

**Bottom-Up DP Solution — O(m×n):**
```c
#include <stdio.h>
#include <string.h>

int max(int a, int b) { return a > b ? a : b; }

int lcs(const char *s1, const char *s2) {
    int m = strlen(s1), n = strlen(s2);
    int dp[m+1][n+1];
    int i, j;

    /* Initialize: empty string has LCS = 0 */
    for (i = 0; i <= m; i++) dp[i][0] = 0;
    for (j = 0; j <= n; j++) dp[0][j] = 0;

    /* Fill table bottom-up */
    for (i = 1; i <= m; i++) {
        for (j = 1; j <= n; j++) {
            if (s1[i-1] == s2[j-1])
                dp[i][j] = 1 + dp[i-1][j-1];
            else
                dp[i][j] = max(dp[i-1][j], dp[i][j-1]);
        }
    }

    return dp[m][n];
}

int main() {
    printf("LCS(\"ABCBDAB\", \"BDCABA\") = %d\n",
           lcs("ABCBDAB", "BDCABA"));  /* 4 */
    printf("LCS(\"AGGTAB\", \"GXTXAYB\") = %d\n",
           lcs("AGGTAB", "GXTXAYB")); /* 4 */
    return 0;
}
```

---

## Example 3: 0/1 Knapsack Problem

**Problem:** Given n items each with a weight and value, choose items (can't split) to maximize total value without exceeding capacity W.

**Recurrence:**
```
knapsack(i, W):
  - if i == 0 or W == 0: 0
  - if weight[i] > W: knapsack(i-1, W)
  - else: max(knapsack(i-1, W),
              value[i] + knapsack(i-1, W - weight[i]))
```

```c
#include <stdio.h>

int max(int a, int b) { return a > b ? a : b; }

int knapsack(int values[], int weights[], int n, int W) {
    int dp[n+1][W+1];
    int i, w;

    for (i = 0; i <= n; i++) {
        for (w = 0; w <= W; w++) {
            if (i == 0 || w == 0)
                dp[i][w] = 0;
            else if (weights[i-1] <= w)
                dp[i][w] = max(values[i-1] + dp[i-1][w - weights[i-1]],
                               dp[i-1][w]);
            else
                dp[i][w] = dp[i-1][w];
        }
    }

    return dp[n][W];
}

int main() {
    int values[]  = {60, 100, 120};
    int weights[] = {10,  20,  30};
    int n = 3, W = 50;

    printf("Maximum value = %d\n",          /* 220 */
           knapsack(values, weights, n, W));
    return 0;
}
```

**Trace for n=3, W=50:**
- Take item 3 (weight=30, value=120) + item 2 (weight=20, value=100) = 220 ✅

---

## Example 4: Coin Change Problem

**Problem:** Given coins of several denominations and a target amount, find the minimum number of coins to make that amount.

```c
#include <stdio.h>
#include <limits.h>

int coinChange(int coins[], int numCoins, int amount) {
    int dp[amount + 1];
    int i, j;

    dp[0] = 0;  /* 0 coins needed to make amount 0 */
    for (i = 1; i <= amount; i++) dp[i] = INT_MAX;  /* impossible initially */

    for (i = 1; i <= amount; i++) {
        for (j = 0; j < numCoins; j++) {
            if (coins[j] <= i && dp[i - coins[j]] != INT_MAX) {
                if (dp[i - coins[j]] + 1 < dp[i])
                    dp[i] = dp[i - coins[j]] + 1;
            }
        }
    }

    return dp[amount] == INT_MAX ? -1 : dp[amount];
}

int main() {
    int coins[] = {1, 5, 10, 25};  /* coin denominations */
    printf("Min coins for 30: %d\n",
           coinChange(coins, 4, 30));   /* 2: 25+5 */
    printf("Min coins for 11: %d\n",
           coinChange(coins, 4, 11));   /* 2: 10+1 */
    printf("Min coins for 41: %d\n",
           coinChange(coins, 4, 41));   /* 4: 25+10+5+1 */
    return 0;
}
```

---

## When to Use Dynamic Programming

<div class="cp-tip">

✅ **Use DP when you see:**

1. **Optimization** — "maximize", "minimize", "find the best..."
2. **Counting** — "how many ways to..."
3. **Recursive structure** — problem breaks into smaller versions of itself
4. **Overlapping subproblems** — same sub-calculation appears multiple times

</div>

<div class="cp-warning">

⚠️ **DP is NOT appropriate when:**
- Subproblems are independent (use Divide and Conquer)
- You need the globally optimal greedy choice at each step (use Greedy)
- The problem has no optimal substructure

</div>

---

## Practice Problems

<details>
<summary>🧩 Practice 1 — Memoize This Function</summary>

**Problem:** Add memoization to this recursive function that counts the number of ways to climb n stairs (taking 1 or 2 steps at a time):

```c
/* Without memoization — O(2^n) */
int climbStairs(int n) {
    if (n <= 1) return 1;
    return climbStairs(n-1) + climbStairs(n-2);
}
```

**With memoization — O(n):**
```c
#include <stdio.h>
#define MAXN 100
int cache[MAXN];

int climbStairsMemo(int n) {
    if (n <= 1) return 1;
    if (cache[n] != 0) return cache[n];
    cache[n] = climbStairsMemo(n-1) + climbStairsMemo(n-2);
    return cache[n];
}

int main() {
    int i;
    for (i = 0; i < MAXN; i++) cache[i] = 0;

    printf("Ways to climb 5  stairs: %d\n", climbStairsMemo(5));   /* 8 */
    printf("Ways to climb 10 stairs: %d\n", climbStairsMemo(10));  /* 89 */
    return 0;
}
```

</details>

<details>
<summary>🧩 Practice 2 — Identify DP Problems</summary>

**Question:** Which of these problems are good candidates for Dynamic Programming? Explain.

1. Find the minimum path sum through a grid (moving only right or down)
2. Find the maximum element in an unsorted array
3. Find the length of the longest increasing subsequence in an array
4. Check whether a string is a palindrome

**Answers:**

1. **YES** — Optimal substructure (minimum path to cell (i,j) depends on optimal paths to (i-1,j) and (i,j-1)); overlapping subproblems
2. **No** — Linear scan is optimal O(n); no overlapping subproblems
3. **YES** — Classic DP problem with optimal substructure O(n²) DP or O(n log n) with patience sorting
4. **No** — Can be solved in O(n) with two-pointer technique; no optimization needed

</details>

<details>
<summary>🧩 Practice 3 — Minimum Grid Path</summary>

**Problem:** Given a m×n grid filled with non-negative numbers, find the path from top-left to bottom-right (moving only right or down) that minimizes the sum. Implement using DP.

```c
#include <stdio.h>

#define ROWS 3
#define COLS 3

int min(int a, int b) { return a < b ? a : b; }

int minPathSum(int grid[ROWS][COLS]) {
    int dp[ROWS][COLS];
    int i, j;

    dp[0][0] = grid[0][0];

    /* Fill first row (can only come from the left) */
    for (j = 1; j < COLS; j++)
        dp[0][j] = dp[0][j-1] + grid[0][j];

    /* Fill first column (can only come from above) */
    for (i = 1; i < ROWS; i++)
        dp[i][0] = dp[i-1][0] + grid[i][0];

    /* Fill the rest */
    for (i = 1; i < ROWS; i++)
        for (j = 1; j < COLS; j++)
            dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1]);

    return dp[ROWS-1][COLS-1];
}

int main() {
    int grid[ROWS][COLS] = {
        {1, 3, 1},
        {1, 5, 1},
        {4, 2, 1}
    };

    printf("Minimum path sum = %d\n", minPathSum(grid));
    /* Path: 1→3→1→1→1 = 7 */
    return 0;
}
```

</details>
