
PART 1

**Question 1 Solution**.

### **Part (a)**
**Given sets:**
* $A = \{1, 5, 8\}$
* $B = \{1, 3, 5\}$
* $C = \{1, 2, 4, 8, 16\}$

**1. Find $A \cup B$ (Union of A and B):**
The union includes all unique elements present in either set $A$ or set $B$.
$$A \cup B = \{1, 3, 5, 8\}$$

**2. Find $C - (A \cup B)$ (Set Difference):**
This includes elements that are in $C$ but **not** in the result of $A \cup B$.
* $C = \{1, 2, 4, 8, 16\}$
* $A \cup B = \{1, 3, 5, 8\}$
* Removing $1$ and $8$ from $C$:
$$C - (A \cup B) = \{2, 4, 16\}$$

---

### **Part (b)**
**Given function:** $f(x) = 2x - 7$ where $f: \mathbb{R} \rightarrow \mathbb{R}$

#### **i) Show that if $f(a) = f(b)$, then $a = b$.**
Assume $f(a) = f(b)$:
$$2a - 7 = 2b - 7$$
Add $7$ to both sides:
$$2a = 2b$$
Divide by $2$:
$$a = b$$
**Implication:** This implies that the function $f$ is **injective** (or one-to-one). Each element in the codomain is mapped to by at most one element in the domain.

#### **ii) For any $y \in \mathbb{R}$, determine a value of $x$ such that $f(x) = y$.**
Set the function equal to $y$ and solve for $x$:
$$y = 2x - 7$$
Add $7$ to both sides:
$$y + 7 = 2x$$
Divide by $2$:
$$x = \frac{y + 7}{2}$$

#### **iii) Determine whether $f$ is bijective.**
A function is **bijective** if it is both **injective** and **surjective**.

* **Injective:** Proven in part **(i)** ($f(a) = f(b) \implies a = b$).
* **Surjective:** In part **(ii)**, we found that for any real number $y$, there exists a real number $x = \frac{y+7}{2}$ such that $f(x) = y$. Since this $x$ is always a real number, the range equals the codomain.
* **Conclusion:** Since $f$ is both injective and surjective, it is **bijective**.

Let's tackle **Question 2**, which focuses on solving a system of linear equations using matrix methods.

**Question 2 Solution**

**Given System:**
$$\begin{cases} 2x + y - z = 3 \\ x - y + 2z = 4 \\ 3x + 2y + z = 7 \end{cases}$$

#### **a) Write the system in matrix form $AX = B$**
To represent this as a matrix equation, we extract the coefficients of $x, y,$ and $z$ for matrix $A$, the variables for matrix $X$, and the constants for matrix $B$.

$$
\begin{bmatrix} 
2 & 1 & -1 \\ 
1 & -1 & 2 \\ 
3 & 2 & 1 
\end{bmatrix} 
\begin{bmatrix} 
x \\ 
y \\ 
z 
\end{bmatrix} 
= 
\begin{bmatrix} 
3 \\ 
4 \\ 
7 
\end{bmatrix}
$$

---

#### **b) Solve using Reduced Row Echelon Form (Gaussian elimination)**
We start with the augmented matrix $[A|B]$ and perform row operations:
$$\left[ \begin{array}{ccc|c} 2 & 1 & -1 & 3 \\ 1 & -1 & 2 & 4 \\ 3 & 2 & 1 & 7 \end{array} \right]$$

**Step 1: Swap $R_1$ and $R_2$ to get a leading 1 in the first row.**
$$\left[ \begin{array}{ccc|c} 1 & -1 & 2 & 4 \\ 2 & 1 & -1 & 3 \\ 3 & 2 & 1 & 7 \end{array} \right]$$

**Step 2: Eliminate elements below the leading 1 ($R_2 \to R_2 - 2R_1$ and $R_3 \to R_3 - 3R_1$).**
$$\left[ \begin{array}{ccc|c} 1 & -1 & 2 & 4 \\ 0 & 3 & -5 & -5 \\ 0 & 5 & -5 & -5 \end{array} \right]$$

**Step 3: Simplify $R_3$ by dividing by 5 ($R_3 \to \frac{1}{5}R_3$).**
$$\left[ \begin{array}{ccc|c} 1 & -1 & 2 & 4 \\ 0 & 3 & -5 & -5 \\ 0 & 1 & -1 & -1 \end{array} \right]$$

**Step 4: Swap $R_2$ and $R_3$ for an easier leading coefficient.**
$$\left[ \begin{array}{ccc|c} 1 & -1 & 2 & 4 \\ 0 & 1 & -1 & -1 \\ 0 & 3 & -5 & -5 \end{array} \right]$$

**Step 5: Eliminate below $R_2$ ($R_3 \to R_3 - 3R_2$).**
$$\left[ \begin{array}{ccc|c} 1 & -1 & 2 & 4 \\ 0 & 1 & -1 & -1 \\ 0 & 0 & -2 & -2 \end{array} \right]$$

**Step 6: Get leading 1 for $R_3$ ($R_3 \to -\frac{1}{2}R_3$).**
$$\left[ \begin{array}{ccc|c} 1 & -1 & 2 & 4 \\ 0 & 1 & -1 & -1 \\ 0 & 0 & 1 & 1 \end{array} \right] \rightarrow \text{This gives } \mathbf{z = 1}$$

**Step 7: Back-substitution (or continue to RREF):**
* From $R_2$: $y - z = -1 \implies y - 1 = -1 \implies \mathbf{y = 0}$
* From $R_1$: $x - y + 2z = 4 \implies x - 0 + 2(1) = 4 \implies x + 2 = 4 \implies \mathbf{x = 2}$

**Solution:** $x = 2, y = 0, z = 1$

---

#### **c) Verify the solution**
Substitute $(2, 0, 1)$ into the original equations:
1.  $2(2) + 0 - 1 = 4 - 1 = 3$ (Correct)
2.  $2 - 0 + 2(1) = 2 + 2 = 4$ (Correct)
3.  $3(2) + 2(0) + 1 = 6 + 1 = 7$ (Correct)

The solution is verified!


Let's wrap up Unit 1 with **Question 3**. This one covers a recursive function and discrete structures (relations and digraphs).


**Question 3 Solution**

#### **a) Compute the value of $f(8)$**
We are given a recursive definition:
* $f(1) = 2$
* $f(n) = f(n-1) + 3n$ for $n \ge 2$

Let's calculate the values sequentially until we reach $n = 8$:
* $f(1) = 2$
* $f(2) = f(1) + 3(2) = 2 + 6 = 8$
* $f(3) = f(2) + 3(3) = 8 + 9 = 17$
* $f(4) = f(3) + 3(4) = 17 + 12 = 29$
* $f(5) = f(4) + 3(5) = 29 + 15 = 44$
* $f(6) = f(5) + 3(6) = 44 + 18 = 62$
* $f(7) = f(6) + 3(7) = 62 + 21 = 83$
* $f(8) = f(7) + 3(8) = 83 + 24 = 107$

**Result:** $f(8) = 107$

---

#### **b) Relation $R$ on $A = \{0, 1, 2, 3\}$**
The relation is $R = \{(0,1), (1,0), (1,1), (2,3)\}$.

**i) Represent the relation $R$ using a digraph (directed graph).**
To draw this:
1.  Draw four nodes (vertices) labeled **0, 1, 2,** and **3**.
2.  Draw a directed arrow from **0 to 1** and another from **1 to 0**.
3.  Draw a **self-loop** at node **1** (because of $(1,1)$).
4.  Draw a directed arrow from **2 to 3**.



**ii) Determine whether $R$ is reflexive, symmetric, or transitive.**

* **Reflexive:** **No.**
    * *Reason:* For $R$ to be reflexive, every element $a \in A$ must have a self-loop $(a,a)$. Here, $(0,0), (2,2),$ and $(3,3)$ are missing.
* **Symmetric:** **No.**
    * *Reason:* While we have both $(0,1)$ and $(1,0)$, we have $(2,3)$ but the reverse pair **$(3,2)$ is missing**. Therefore, it is not symmetric.
* **Transitive:** **No.**
    * *Reason:* For transitivity, if $(a,b) \in R$ and $(b,c) \in R$, then $(a,c)$ must be in $R$. 
    * Looking at $(0,1)$ and $(1,0)$, the transitive pair $(0,0)$ should be there, but it is not. Also, $(1,0)$ and $(0,1)$ exist, but $(1,1)$ is the only transitive result present. Because $(0,0)$ is missing, it fails.


PART 2

**Question 1 Solution**

### **Part A: Prove the Tautology**
We need to show that $\{(p \wedge q) \rightarrow r\} \rightarrow \{p \rightarrow (q \vee r)\}$ is a tautology (always true) using a truth table.

| $p$ | $q$ | $r$ | $p \wedge q$ | $(p \wedge q) \rightarrow r$ | $q \vee r$ | $p \rightarrow (q \vee r)$ | **Final Result** |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| T | T | T | T | T | T | T | **T** |
| T | T | F | T | F | T | T | **T** |
| T | F | T | F | T | T | T | **T** |
| T | F | F | F | T | F | F | **T** |
| F | T | T | F | T | T | T | **T** |
| F | T | F | F | T | T | T | **T** |
| F | F | T | F | T | T | T | **T** |
| F | F | F | F | T | F | T | **T** |

**Conclusion:** Since the final column consists only of "True" values, the expression is a **tautology**.

---

### **Part B: Construct Truth Table**
Construct the table for: $(p \vee q) \wedge \{(\sim q) \vee (\sim r)\}$

| $p$ | $q$ | $r$ | $p \vee q$ | $\sim q$ | $\sim r$ | $(\sim q) \vee (\sim r)$ | **Result** |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| T | T | T | T | F | F | F | **F** |
| T | T | F | T | F | T | T | **T** |
| T | F | T | T | T | F | T | **T** |
| T | F | F | T | T | T | T | **T** |
| F | T | T | T | F | F | F | **F** |
| F | T | F | T | F | T | T | **T** |
| F | F | T | F | T | F | T | **F** |
| F | F | F | F | T | T | T | **F** |

---

### **Part C: Simplify using Set Algebra**
**Expression:** $(A \cap B) \cup (A \cap B \cap C) \cup A = U$

Wait, looking at the expression, the left side simplifies significantly. Let's break it down:

1.  **Absorption Law:** $(A \cap B) \cup (A \cap B \cap C)$ 
    Since $(A \cap B \cap C)$ is a subset of $(A \cap B)$, their union is just $(A \cap B)$.
    * *Result:* $(A \cap B) \cup A$
2.  **Absorption Law (again):** $(A \cap B) \cup A$
    Since $(A \cap B)$ is a subset of $A$, their union is simply $A$.
    * *Result:* $A$

**Final Simplified Statement:** $A = U$

**Laws Used:**
* **Absorption Law:** $X \cup (X \cap Y) = X$
* **Commutative Law:** (Used implicitly to rearrange terms if needed).

** Question 2 Solution **

### **A) & B) The Digraph Adjacency Matrix**

We are given the following adjacency matrix for a digraph (directed graph) with 4 vertices ($V_1, V_2, V_3, V_4$):

$$
\begin{bmatrix} 
1 & 0 & 1 & 0 \\ 
0 & 1 & 0 & 1 \\ 
1 & 1 & 0 & 0 \\ 
0 & 1 & 0 & 0 
\end{bmatrix}
$$

In an adjacency matrix, a $1$ at position $(i, j)$ means there is a directed edge from $V_i$ to $V_j$.

**Mapping the edges:**
* **From $V_1$:** $1 \to 1$ (self-loop), $1 \to 3$
* **From $V_2$:** $2 \to 2$ (self-loop), $2 \to 4$
* **From $V_3$:** $3 \to 1$, $3 \to 2$
* **From $V_4$:** $4 \to 2$



**B) Draw a path from 1 to 4:**
To get from 1 to 4, we need to follow the directed arrows. Based on the mapping above:
1.  Start at **1**.
2.  From **1**, we can go to **3**.
3.  From **3**, we can go to **2**.
4.  From **2**, we can go to **4**.

**The path is:** $1 \to 3 \to 2 \to 4$.

---

### **C) Proof by Induction**
**Proposition:** $11^n - 4^n$ is divisible by $7$ for all natural numbers $n$.

#### **Step 1: Base Case ($n = 1$)**
Substitute $n = 1$:
$11^1 - 4^1 = 11 - 4 = 7$.
Since $7$ is divisible by $7$, the base case holds.

#### **Step 2: Inductive Hypothesis**
Assume the proposition is true for $n = k$. 
That is, $11^k - 4^k = 7m$ for some integer $m$.
*(Rearranging this gives: $11^k = 7m + 4^k$)*.

#### **Step 3: Inductive Step**
We must prove it is true for $n = k + 1$. We need to show $11^{k+1} - 4^{k+1}$ is divisible by $7$.
$$11^{k+1} - 4^{k+1}$$
Using exponent rules:
$$(11 \cdot 11^k) - 4^{k+1}$$
Substitute our hypothesis ($11^k = 7m + 4^k$):
$$11(7m + 4^k) - 4^{k+1}$$
Expand the bracket:
$$77m + 11(4^k) - 4(4^k)$$
Factor out $4^k$:
$$77m + (11 - 4)4^k$$
$$77m + 7(4^k)$$
Factor out $7$:
$$7(11m + 4^k)$$
Since $11m + 4^k$ is an integer, the expression is divisible by $7$.

**Conclusion:** By the principle of mathematical induction, $11^n - 4^n$ is divisible by $7$ for all $n \in \mathbb{N}$.

** Question 3 Solution **

### **A. Prove the following is a tautology**
**Expression:** $\sim(p \vee q) \vee \{(\sim p) \wedge q\} \vee p$

We can solve this using **Boolean Algebra (Laws of Logic)** to see if it simplifies to $T$ (True).

1.  **De Morgan's Law** on the first term:
    $\sim(p \vee q)$ becomes $(\sim p \wedge \sim q)$.
    *Expression:* $(\sim p \wedge \sim q) \vee ((\sim p) \wedge q) \vee p$

2.  **Distributive Law** (factoring out $\sim p$ from the first two terms):
    $\sim p \wedge (\sim q \vee q) \vee p$

3.  **Negation Law:**
    We know that $(\sim q \vee q)$ is always **True (T)**.
    *Expression:* $(\sim p \wedge T) \vee p$

4.  **Identity Law:**
    $(\sim p \wedge T)$ is just $\sim p$.
    *Expression:* $\sim p \vee p$

5.  **Negation Law:**
    $\sim p \vee p$ is always **True (T)**.

**Conclusion:** Since the expression simplifies to $T$, it is a **tautology**.

---

### **B. Use induction to establish the Sum of Squares**
**Proposition $P(n)$:** $\sum_{k=1}^{n} k^2 = \frac{1}{6}n(n+1)(2n+1)$

#### **Step 1: Base Case ($n = 1$)**
* **LHS:** $1^2 = 1$
* **RHS:** $\frac{1}{6}(1)(1+1)(2(1)+1) = \frac{1}{6}(1)(2)(3) = \frac{6}{6} = 1$
LHS = RHS. The base case holds.

#### **Step 2: Inductive Hypothesis**
Assume $P(n)$ is true for $n = m$:
$$\sum_{k=1}^{m} k^2 = \frac{1}{6}m(m+1)(2m+1)$$

#### **Step 3: Inductive Step**
We must show $P(m+1)$ is true: $\sum_{k=1}^{m+1} k^2 = \frac{1}{6}(m+1)(m+2)(2m+3)$.

$$\sum_{k=1}^{m+1} k^2 = \left(\sum_{k=1}^{m} k^2\right) + (m+1)^2$$
Substitute the hypothesis:
$$= \frac{1}{6}m(m+1)(2m+1) + (m+1)^2$$
Factor out $(m+1)$:
$$= (m+1) \left[ \frac{m(2m+1)}{6} + (m+1) \right]$$
Find a common denominator inside the bracket:
$$= (m+1) \left[ \frac{2m^2 + m + 6m + 6}{6} \right]$$
$$= \frac{(m+1)(2m^2 + 7m + 6)}{6}$$
Factor the quadratic $2m^2 + 7m + 6$ (which splits into $(m+2)(2m+3)$):
$$= \frac{1}{6}(m+1)(m+2)(2m+3)$$

**Conclusion:** This matches the required form for $P(m+1)$. By the principle of mathematical induction, the formula is true for all natural numbers $n$.


** Question 4 Solution **

Let's finish off the paper with **Question 4**. This covers Boolean logic, a classic application of Graph Theory, and vertex degrees.

---

### **a) Simplify the Boolean function**
**Expression:** $Z = AB + A \cdot B \cdot C + \bar{A} \cdot \bar{B}$

1.  **Look at the first two terms:** $AB + ABC$.
2.  **Apply the Absorption Law:** $X + XY = X$. 
    In this case, let $X = AB$ and $Y = C$. 
    So, $AB + (AB)C = AB$.
3.  **Combine with the remaining term:**
    *Result:* $Z = AB + \bar{A}\bar{B}$

**Note:** This is the simplified form, which represents the **XNOR** (Equivalence) operation ($A \odot B$). It returns true only when $A$ and $B$ are the same.

---

### **b) The Handshake Problem and Graph Theory**
**Problem:** If 10 people each shake hands with each other, how many handshakes took place?

1.  **The Calculation:** This is a "combinations" problem where we choose 2 people out of 10.
    $$\text{Handshakes} = \binom{10}{2} = \frac{10 \times 9}{2} = 45$$
    Alternatively, the first person shakes 9 hands, the second shakes 8 new hands, and so on: $9+8+7+6+5+4+3+2+1 = 45$.

2.  **Relation to Graph Theory:**
    * This problem represents a **Complete Graph ($K_{10}$)**.
    * In this graph, each of the **10 vertices** (people) is connected by an **edge** (handshake) to every other vertex.
    * The question is essentially asking for the total number of edges in a $K_{10}$ graph, which follows the formula $\frac{n(n-1)}{2}$.



---

### **c) In-degrees and Out-degrees of Fig. 1**
Based on the description of the graph in the image:
* **Vertex 1:** * Has an arrow pointing to Vertex 2.
    * **In-degree:** 0 | **Out-degree:** 1
* **Vertex 2:** * Receives an arrow from Vertex 1.
    * Has an arrow pointing to Vertex 3.
    * Has a **self-loop** (an arrow from itself to itself). A self-loop counts as 1 for both in-degree and out-degree.
    * **In-degree:** 2 (from Vertex 1 and from itself) | **Out-degree:** 2 (to Vertex 3 and to itself)
* **Vertex 3:** * Receives an arrow from Vertex 2.
    * Has a **self-loop**.
    * **In-degree:** 2 (from Vertex 2 and from itself) | **Out-degree:** 1 (to itself)



---

**Summary Table:**

| Vertex | In-degree | Out-degree |
| :--- | :--- | :--- |
| 1 | 0 | 1 |
| 2 | 2 | 2 |
| 3 | 2 | 1 |

