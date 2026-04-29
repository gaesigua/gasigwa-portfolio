const foundationMathFinal1 = {
  id: "foundation-math-final-1",
  title: "Foundation Mathematics — Final Exam 1",
  courseSlug: "mathematics-for-computer-scientists",
  description:
    "A comprehensive, exam-style written assessment covering all chapters of the Foundation Mathematics module: numbers, equations, functions, logarithms, matrices, and combinatorics.",
  durationMinutes: 180,
  parts: [
    {
      title: "Part 1: Numbers, Equations & Functions",
      questions: [
        {
          number: 1,
          marks: 6,
          text: `**[6 marks]**

Given the following sets:

$$A = \\{1, 2, 3, 4, 5, 6\\}$$
$$B = \\{2, 4, 6, 8, 10\\}$$
$$C = \\{1, 3, 5, 7, 9\\}$$

**(a)** Find $A \\cap B$. &nbsp; *[1 mark]*

**(b)** Find $A \\cup C$. &nbsp; *[1 mark]*

**(c)** Find $A \\setminus B$ (A minus B). &nbsp; *[1 mark]*

**(d)** Find $B \\cap C$. &nbsp; *[1 mark]*

**(e)** Find $(A \\cup B) \\setminus C$. &nbsp; *[2 marks]*`,
        },
        {
          number: 2,
          marks: 8,
          text: `**[8 marks]**

Solve the following equations:

**(a)** $3x - 7 = 2x + 5$ &nbsp; *[2 marks]*

**(b)** $x^2 - 5x + 6 = 0$ &nbsp; *[3 marks]*

**(c)** Solve simultaneously: &nbsp; *[3 marks]*
$$2x + y = 7$$
$$x - y = 2$$`,
        },
        {
          number: 3,
          marks: 6,
          text: `**[6 marks]**

Given $f(x) = 2x + 3$ and $g(x) = x^2 - 1$:

**(a)** Find $f(g(x))$ — the composite function. &nbsp; *[2 marks]*

**(b)** Find $g(f(x))$. &nbsp; *[2 marks]*

**(c)** Find $f^{-1}(x)$, the inverse of $f$. &nbsp; *[2 marks]*`,
        },
        {
          number: 4,
          marks: 5,
          text: `**[5 marks]**

Solve the following inequalities and represent your answer on a number line:

**(a)** $2x - 3 > 7$ &nbsp; *[2 marks]*

**(b)** $-3 \\leq 2x + 1 < 9$ &nbsp; *[3 marks]*`,
        },
        {
          number: 5,
          marks: 5,
          text: `**[5 marks]**

**(a)** Simplify $\\sqrt{50} - \\sqrt{18} + \\sqrt{8}$. &nbsp; *[3 marks]*

**(b)** Rationalise the denominator: $\\dfrac{3}{2 + \\sqrt{5}}$. &nbsp; *[2 marks]*`,
        },
      ],
    },
    {
      title: "Part 2: Logarithms, Matrices & Combinatorics",
      questions: [
        {
          number: 6,
          marks: 8,
          text: `**[8 marks]**

**(a)** Evaluate $\\log_2 64$. &nbsp; *[1 mark]*

**(b)** Simplify $\\log_3 27 + \\log_3 3 - \\log_3 9$. &nbsp; *[3 marks]*

**(c)** Solve for $x$: $5^x = 125$. &nbsp; *[2 marks]*

**(d)** Solve for $x$: $\\log_2(3x - 1) = 4$. &nbsp; *[2 marks]*`,
        },
        {
          number: 7,
          marks: 10,
          text: `**[10 marks]**

Given the matrices:

$$A = \\begin{pmatrix} 2 & -1 \\\\ 3 & 4 \\end{pmatrix}, \\quad B = \\begin{pmatrix} 1 & 2 \\\\ -1 & 3 \\end{pmatrix}$$

**(a)** Compute $A + B$. &nbsp; *[1 mark]*

**(b)** Compute $A \\times B$. &nbsp; *[3 marks]*

**(c)** Find $\\det(A)$. &nbsp; *[2 marks]*

**(d)** Find $A^{-1}$, the inverse of matrix $A$. &nbsp; *[4 marks]*`,
        },
        {
          number: 8,
          marks: 8,
          text: `**[8 marks]**

Use **Gaussian Elimination** to solve the following system:

$$x + y + z = 6$$
$$2x + y - z = 3$$
$$x - y + 2z = 2$$

Show all row operations clearly and state the final solution.`,
        },
        {
          number: 9,
          marks: 6,
          text: `**[6 marks]**

**(a)** In how many ways can 5 students be arranged in a row? &nbsp; *[2 marks]*

**(b)** A committee of 3 people is chosen from a group of 8. How many different committees are possible? &nbsp; *[2 marks]*

**(c)** How many 4-digit numbers can be formed from the digits 1, 2, 3, 4, 5 if **no digit repeats**? &nbsp; *[2 marks]*`,
        },
        {
          number: 10,
          marks: 4,
          text: `**[4 marks]**

A binary relation $R$ is defined on the set $\\mathbb{Z}$ (integers) by: $aRb \\iff a - b$ is divisible by 3.

**(a)** Show that $R$ is **reflexive**. &nbsp; *[1 mark]*

**(b)** Show that $R$ is **symmetric**. &nbsp; *[1 mark]*

**(c)** Show that $R$ is **transitive**. &nbsp; *[2 marks]*`,
        },
      ],
    },
  ],

  // ─────────────────────────────────────────────────────────────────────────────
  // ANSWER KEY
  // ─────────────────────────────────────────────────────────────────────────────
  answerKey: [
    {
      number: 1,
      answer: `**(a)** $A \\cap B = \\{2, 4, 6\\}$

**(b)** $A \\cup C = \\{1, 2, 3, 4, 5, 6, 7, 9\\}$

**(c)** $A \\setminus B = \\{1, 3, 5\\}$ (elements in A but not in B)

**(d)** $B \\cap C = \\{\\}$ (empty set — B has only even numbers, C has only odd numbers)

**(e)** $A \\cup B = \\{1, 2, 3, 4, 5, 6, 8, 10\\}$

$(A \\cup B) \\setminus C = \\{2, 4, 6, 8, 10\\}$ (remove 1, 3, 5 which are in C)`,
    },
    {
      number: 2,
      answer: `**(a)**
$$3x - 7 = 2x + 5$$
$$3x - 2x = 5 + 7$$
$$x = 12$$

**(b)** $x^2 - 5x + 6 = 0$

Factorise: $(x - 2)(x - 3) = 0$

$$\\therefore x = 2 \\text{ or } x = 3$$

**(c)** Simultaneous equations:
$$2x + y = 7 \\quad (1)$$
$$x - y = 2 \\quad (2)$$

Add (1) + (2): $3x = 9 \\Rightarrow x = 3$

Substitute into (2): $3 - y = 2 \\Rightarrow y = 1$

$$\\therefore x = 3, \\; y = 1$$`,
    },
    {
      number: 3,
      answer: `**(a)** $f(g(x)) = f(x^2 - 1) = 2(x^2 - 1) + 3 = 2x^2 - 2 + 3 = 2x^2 + 1$

**(b)** $g(f(x)) = g(2x + 3) = (2x + 3)^2 - 1 = 4x^2 + 12x + 9 - 1 = 4x^2 + 12x + 8$

**(c)** To find $f^{-1}(x)$:

Let $y = 2x + 3$

Swap $x$ and $y$: $x = 2y + 3$

Solve for $y$: $y = \\dfrac{x - 3}{2}$

$$\\therefore f^{-1}(x) = \\frac{x - 3}{2}$$`,
    },
    {
      number: 4,
      answer: `**(a)**
$$2x - 3 > 7$$
$$2x > 10$$
$$x > 5$$

**(b)**
$$-3 \\leq 2x + 1 < 9$$

Subtract 1 from all parts:
$$-4 \\leq 2x < 8$$

Divide by 2:
$$-2 \\leq x < 4$$`,
    },
    {
      number: 5,
      answer: `**(a)**
$$\\sqrt{50} = 5\\sqrt{2}, \\quad \\sqrt{18} = 3\\sqrt{2}, \\quad \\sqrt{8} = 2\\sqrt{2}$$

$$5\\sqrt{2} - 3\\sqrt{2} + 2\\sqrt{2} = 4\\sqrt{2}$$

**(b)** Rationalise by multiplying by the conjugate $\\dfrac{2 - \\sqrt{5}}{2 - \\sqrt{5}}$:

$$\\frac{3}{2 + \\sqrt{5}} \\times \\frac{2 - \\sqrt{5}}{2 - \\sqrt{5}} = \\frac{3(2 - \\sqrt{5})}{4 - 5} = \\frac{3(2 - \\sqrt{5})}{-1} = -3(2 - \\sqrt{5}) = -6 + 3\\sqrt{5}$$`,
    },
    {
      number: 6,
      answer: `**(a)** $\\log_2 64 = 6$ &nbsp; (since $2^6 = 64$)

**(b)**
$$\\log_3 27 + \\log_3 3 - \\log_3 9 = 3 + 1 - 2 = 2$$

(Since $\\log_3 27 = 3$, $\\log_3 3 = 1$, $\\log_3 9 = 2$)

**(c)**
$$5^x = 125 = 5^3 \\Rightarrow x = 3$$

**(d)**
$$\\log_2(3x - 1) = 4$$
$$3x - 1 = 2^4 = 16$$
$$3x = 17$$
$$x = \\frac{17}{3}$$`,
    },
    {
      number: 7,
      answer: `**(a)**
$$A + B = \\begin{pmatrix} 2+1 & -1+2 \\\\ 3+(-1) & 4+3 \\end{pmatrix} = \\begin{pmatrix} 3 & 1 \\\\ 2 & 7 \\end{pmatrix}$$

**(b)**
$$A \\times B = \\begin{pmatrix} (2)(1)+(-1)(-1) & (2)(2)+(-1)(3) \\\\ (3)(1)+(4)(-1) & (3)(2)+(4)(3) \\end{pmatrix} = \\begin{pmatrix} 3 & 1 \\\\ -1 & 18 \\end{pmatrix}$$

**(c)**
$$\\det(A) = (2)(4) - (-1)(3) = 8 + 3 = 11$$

**(d)**
$$A^{-1} = \\frac{1}{\\det(A)} \\begin{pmatrix} 4 & 1 \\\\ -3 & 2 \\end{pmatrix} = \\frac{1}{11} \\begin{pmatrix} 4 & 1 \\\\ -3 & 2 \\end{pmatrix}$$

$$A^{-1} = \\begin{pmatrix} \\frac{4}{11} & \\frac{1}{11} \\\\ -\\frac{3}{11} & \\frac{2}{11} \\end{pmatrix}$$`,
    },
    {
      number: 8,
      answer: `Write the augmented matrix:

$$\\begin{pmatrix} 1 & 1 & 1 & | & 6 \\\\ 2 & 1 & -1 & | & 3 \\\\ 1 & -1 & 2 & | & 2 \\end{pmatrix}$$

**Step 1:** $R_2 \\leftarrow R_2 - 2R_1$

$$\\begin{pmatrix} 1 & 1 & 1 & | & 6 \\\\ 0 & -1 & -3 & | & -9 \\\\ 1 & -1 & 2 & | & 2 \\end{pmatrix}$$

**Step 2:** $R_3 \\leftarrow R_3 - R_1$

$$\\begin{pmatrix} 1 & 1 & 1 & | & 6 \\\\ 0 & -1 & -3 & | & -9 \\\\ 0 & -2 & 1 & | & -4 \\end{pmatrix}$$

**Step 3:** $R_3 \\leftarrow R_3 - 2R_2$

$$\\begin{pmatrix} 1 & 1 & 1 & | & 6 \\\\ 0 & -1 & -3 & | & -9 \\\\ 0 & 0 & 7 & | & 14 \\end{pmatrix}$$

**Back-substitution:**

From $R_3$: $7z = 14 \\Rightarrow z = 2$

From $R_2$: $-y - 3(2) = -9 \\Rightarrow -y = -3 \\Rightarrow y = 3$

From $R_1$: $x + 3 + 2 = 6 \\Rightarrow x = 1$

$$\\boxed{x = 1, \\; y = 3, \\; z = 2}$$`,
    },
    {
      number: 9,
      answer: `**(a)** Arranging 5 students in a row = $5! = 120$ ways

**(b)** Choosing 3 from 8 (order doesn't matter):

$$\\binom{8}{3} = \\frac{8!}{3! \\cdot 5!} = \\frac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1} = 56$$

**(c)** 4-digit numbers from 5 digits, no repetition = $P(5, 4)$:

$$P(5,4) = \\frac{5!}{(5-4)!} = \\frac{5!}{1!} = 120$$`,
    },
    {
      number: 10,
      answer: `The relation is $aRb \\iff 3 \\mid (a - b)$.

**(a) Reflexive:** For any $a \\in \\mathbb{Z}$, $a - a = 0$ and $3 \\mid 0$. So $aRa$ holds. ✓

**(b) Symmetric:** Suppose $aRb$, so $3 \\mid (a - b)$.
Then $a - b = 3k$ for some integer $k$, so $b - a = -3k = 3(-k)$.
Thus $3 \\mid (b - a)$, meaning $bRa$. ✓

**(c) Transitive:** Suppose $aRb$ and $bRc$.
Then $a - b = 3k$ and $b - c = 3m$ for integers $k, m$.
Adding: $a - c = (a - b) + (b - c) = 3k + 3m = 3(k + m)$.
So $3 \\mid (a - c)$, meaning $aRc$. ✓

Since $R$ is reflexive, symmetric, and transitive, it is an **equivalence relation**.`,
    },
  ],
};

export default foundationMathFinal1;
