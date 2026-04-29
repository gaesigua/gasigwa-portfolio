## FINAL EXAM: MATHEMATICS FOR COMPUTER SCIENTISTS**

### **PART 1: FOUNDATION MATHEMATICS**

#### **Question 1**
**a.** Let $A = \{1, 5, 8\}$, $B = \{1, 3, 5\}$, and $C = \{1, 2, 4, 8, 16\}$. Find $A \cup B$ and $C - (A \cup B)$.

**b.** Consider the function $f: \mathbb{R} \rightarrow \mathbb{R}$ defined by $f(x) = 2x - 7$
* **i)** Show that if $f(a) = f(b)$, then $a = b$. What does this imply about the function $f$?
* **ii)** For any $y \in \mathbb{R}$, determine a value of $x$ such that $f(x) = y$.
* **iii)** Using the result above, determine whether $f$ is bijective and justify your answer.

---

#### **Question 2**
Consider the following system of equations:
$$\begin{cases} 2x + y - z = 3 \\ x - y + 2z = 4 \\ 3x + 2y + z = 7 \end{cases}$$

**a.** Write the system in matrix form $AX = B$.

**b.** Using Reduced Row Echelon Form (Gaussian elimination method), solve the system.

**c.** Verify that your solution satisfies all three equations.

---

#### **Question 3**
**a.** A function $f: \mathbb{N} \rightarrow \mathbb{N}$ is defined recursively as follows:
$$f(1) = 2$$
$$f(n) = f(n-1) + 3n \text{ for } n \ge 2$$
Compute the value of $f(8)$.

**b.** Let $A = \{0, 1, 2, 3\}$ and define a relation $R$ on $A$ by $R = \{(0,1), (1,0), (1,1), (2,3)\}$
* **i)** Represent the relation $R$ using a digraph (directed graph).
* **ii)** Based on your digraph, determine whether $R$ is **reflexive**, **symmetric**, or **transitive** on $A$. Justify your answer and support it with reasoning from the digraph.



Here is the extraction for the second page of your examination paper.

## **UNIT 2: BASIC DISCRETE MATHEMATICS**

---

### **QUESTION 1 (10 marks)**
**A.** Prove that $\{(p \wedge q) \rightarrow r\} \rightarrow \{p \rightarrow (q \vee r)\}$ is a tautology using truth table. **(3 marks)**

**B.** Construct truth table for the following: **(3 marks)**
$$(p \vee q) \wedge \{(\sim q) \vee (\sim r)\}$$

**C.** Using the laws of set algebra, simplify the following: **(4 marks)**
$$(A \cap B) \cup (A \cap B \cap C) \cup A = U$$
State the laws used clearly.

---

### **QUESTION 2 (10 marks)**
**A)** Consider the digraph adjacency matrix:
$$\begin{bmatrix} 1 & 0 & 1 & 0 \\ 0 & 1 & 0 & 1 \\ 1 & 1 & 0 & 0 \\ 0 & 1 & 0 & 0 \end{bmatrix}$$

**B)** Draw a path from 1 to 4. **(4 marks)**

**C)** Prove that $11^n - 4^n$ is divisible by seven (7) for all natural numbers $n$. **(6 marks)**

---

### **QUESTION 3 (10 marks)**
**A.** Prove that the following is a tautology: **(4 marks)**
$$\sim(p \vee q) \vee \{(\sim p) \wedge q\} \vee p$$

**B.** Use induction to establish that: **(6 marks)**
$$\sum_{k=1}^{n} k^2 = \frac{1}{6}n(n+1)(2n+1) \quad (n \text{ is natural})$$

---

### **QUESTION 4 (10 marks)**
**a)** Simplify the Boolean function: **(3 marks)**
$$Z = AB + A \cdot B \cdot C + \bar{A} \cdot \bar{B}$$

**b)** If 10 people each shake hands with each other, how many handshakes took place? What does this question have to do with graph theory? **(3 marks)**

**c)** what are the in-degrees and out-degrees of all the vertices of the graph below: **(4 marks)**
*(Note: Refers to **Fig. 1**, a directed graph with 3 vertices)*
* Node 1 connects to Node 2.
* Node 2 has a self-loop and connects to Node 3.
* Node 3 has a self-loop.

---

This page looks like it gets into the heavy lifting of Discrete Math—Logic, Induction, and Graph Theory. Which one of these would you like to solve first? (Question 1's tautology proof is a classic place to start!)