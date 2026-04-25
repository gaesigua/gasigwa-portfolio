DISCRETE MATHEMATICS & LOGIC


1. Boolean Algebra
1. Definition of Boolean Algebra
1.1 What is Boolean Algebra?

Boolean algebra is a branch of algebra that deals with variables that take only two possible values:
i. 1 → TRUE / ON / HIGH
ii. 0 → FALSE / OFF / LOW

Boolean algebra is widely used in:

a. Digital electronics
b. Computer architecture
c. Logic circuits
d. Programming and algorithms

1.2 Formal Definition

A Boolean algebra is an algebraic structure defined as: (B, +,⋅,′, 0,1)

Where:
i. B is a non-empty set
ii. + is the OR operation
iii. ⋅ is the AND operation
iv. ′(or a ̅) is the NOT (complement) operation
v. 0 and 1are distinct elements in B
vi.

1.3 Boolean Algebra Axioms

Let a, b, c ∈ B

1. Closure Law

The result of any Boolean operation remains in the set B.
a + b ∈ B, a ⋅ b ∈ B

Meaning: Combining Boolean variables always produces a Boolean result.

2. Commutative Laws

The order of variables does not affect the result.
a + b = b + a
a ⋅ b = b ⋅ a
Meaning: OR and AND operations are order-independent.

3. Associative Laws

Grouping of variables does not affect the result.

(a + b) + c = a + (b + c)
(a ⋅ b) ⋅ c = a ⋅ (b ⋅ c)

Meaning: Parentheses can be rearranged.

4. Distributive Laws

Each operation distributes over the other.

a ⋅ (b + c) = (a ⋅ b) + (a ⋅ c)
a + (b ⋅ c) = (a + b) ⋅ (a + c)

Meaning: Unlike ordinary algebra, both distributive laws apply.

5. Identity Laws

Identity elements leave a variable unchanged.
a + 0 = a
a ⋅ 1 = a

Meaning:
i. OR with 0 does nothing
ii. AND with 1 does nothing

6. Complement Laws

Every element has a complement.

a + a′ = 1
a ⋅ a′ = 0

Meaning:
i. A variable OR its complement is always TRUE
ii. A variable AND its complement is always FALSE

1.4 Importance of Boolean Algebra
Boolean algebra is the foundation of digital systems, including:
i. Logic gates (AND, OR, NOT)
ii. CPU design
iii. Memory circuits
iv. Software logic and decision making

1.5 Example Quiz with Step-by-Step Solutions

Question 1: Verify Commutative Law

Show that:
a + b = b + a

Solution:
i. By the commutative law of OR
ii. Order of variables does not matter
a + b = b + a

Question 2: Evaluate a Boolean Expression
Given: a = 1, b = 0
Find a ⋅ b.
Solution:
1 ⋅ 0 = 0

Answer: 0

Question 3: Use Identity Law
Simplify:
a + 0

Solution:
Using identity law:
a + 0 = a
Answer:
a

Question 4: Use Complement Law
Simplify:
a + a′

Solution:
Using complement law:

a + a′ = 1

Answer: 1

Question 5: Simplify Using Distributive Law
Simplify:
a ⋅ (b + c)

Solution:
a ⋅ (b + c) = (a ⋅ b) + (a ⋅ c)

Answer:
ab + ac

Question 6: Simplify Expression
Simplify:
a + a ⋅ b

Solution:
Using distributive law:
a + ab = a(1 + b) = a
Since 1 + b = 1:
a ⋅ 1 = a
Answer: a

Question 7: Evaluate Expression
Given: a = 0
Evaluate:
a ⋅ a′

Solution:
0 ⋅ 1 = 0
Answer: 0

Question 8: Verify Associative Law
Show that:
(a + b) + c = a + (b + c)
Solution:
i. Grouping does not change OR operation
ii. Both expressions yield the same result

Question 9: Simplify Boolean Expression
Simplify:
(a + b)(a + b
′
)

Solution:
Apply distributive law:
= a + ab
′ + ba + bb
′
Using Boolean rules:
bb
′ = 0, ab
′ + ab = a

Final:
a

Question 10: Complement of a Complement
Find:
(a′)′
Solution:
Complement of complement returns original variable

Answer: a

2. Propositions and Proposition Functions
2.1.1 Proposition
Definition
A proposition is a declarative statement that has a definite truth value — it is either true or
false, but not both.
Declarative means the statement asserts a fact.
Questions, commands, or exclamations are not propositions.

Examples of Propositions

Statement Truth Value
“2 + 3 = 5” True
“5 is an even number” False
“The Earth revolves around the Sun” True
“10 > 20” False

Non-proposition Examples (Not Propositions)
i. “What time is it?” (question)
ii. “Close the door.” (command)
iii. “x + 2 = 7” (contains a variable, truth not fixed)
iv. “Wow, that’s amazing!” (exclamation)

Importance of Propositions
Propositions form the basic building blocks of logic and are used in:
i. Mathematics proofs
ii. Computer programming conditions
iii. Digital circuit design
iv. Artificial intelligence and reasoning systems

12.1.2 Proposition Function (Open Sentence)
Definition
A proposition function (also called an open sentence) is a statement that contains one or more
variables and does not have a truth value until specific values are assigned to the variables.
General Form
P(x), Q(x, y), R(n)
Example
Let:
P(x): x > 5
i. If x = 3:
3 > 5 ⇒ False
ii. If x = 8:
8 > 5 ⇒ True
Once a value is substituted, the proposition function becomes a proposition.

Truth Set
The truth set of a proposition function is the set of all values that make the statement true.
Example:
P(x): x > 5
Truth set:
{6,7,8,9,... }

Key Difference: Proposition vs Proposition Function
Feature Proposition Proposition Function
Contains variables No Yes
Has a truth value Always Only after substitution
Example “7 is odd” “x is odd”

Example Quiz with Solutions

Question 1: Identifying Propositions
Question:
State whether each of the following is a proposition. Give reasons.
a) “7 + 5 = 12”
b) “Is 10 a prime number?”
c) “x − 3 = 4”
d) “Rwanda is in Africa”
Solution:
a) Proposition — declarative and true
b) Not a proposition — it is a question
c) Not a proposition — contains a variable
d) Proposition — declarative and true

Question 2: Truth Value of Propositions
Question:
Determine whether the following propositions are true or false.
a) “9 is a prime number”
b) “4 × 5 = 20”
c) “All triangles have four sides”
Solution:
a) False (9 = 3 × 3)
b) True
c) False (triangles have three sides)

Question 3: Proposition Function Evaluation
Question:
Given the proposition function:

P(x): x + 2 = 7

Determine its truth value when:
a) x = 5
b) x = 3

Solution:
a) Substitute x = 5:
5 + 2 = 7 ⇒ 7 = 7 ⇒ True
b) Substitute x = 3:
3 + 2 = 7 ⇒ 5 = 7 ⇒ False

Question 4: Truth Set of a Proposition Function
Question:
Find the truth set of the proposition function:
P(x): x
2 = 9

Solution:
Solve:
x
2 = 9 ⇒ x = ±3
Answer:
{−3,3}

Question 5: From Proposition Function to Proposition
Question:
Let:

Q(x): x is an even number

a) Is Q(x)a proposition?
b) What is the truth value of Q(6)?
c) What is the truth value of Q(7)?
Solution:
a) No — it is a proposition function (contains variable)
b) Q(6): 6 is even → True
c) Q(7): 7 is odd → False

3: Truth Values and Truth Tables
Logical reasoning is based on determining whether statements are true or false. Truth values
and truth tables provide a systematic way to analyze logical statements and their combinations.

3.1 Truth Values
A proposition is a declarative statement that has exactly one truth value.
Possible Truth Values
Truth Value Symbol Binary Representation
True T 1
False F 0

Examples of Propositions
i. “5 is greater than 3” → True
ii. “7 is an even number” → False
iii. “Rwanda is in Africa” → True
Statements such as questions or commands are not propositions:
i. “What time is it?” (not a proposition)
ii. “Close the door.” (not a proposition)

3.2 Logical Connectives
Propositions can be combined using logical connectives to form compound propositions.
Connective Name Symbol
Negation NOT ¬
Conjunction AND ∧
Disjunction OR ∨
Implication IF...THEN →
Biconditional IF AND ONLY IF ↔

3.3 Truth Tables
A truth table is a table that lists all possible combinations of truth values of propositions and
shows the resulting truth value of a compound statement.

Number of Rows in a Truth Table
For npropositions:

Number of rows = 2
n

3.4 Truth Table for Basic Logical Operations
(a) Negation (¬P)
P ¬P
T F
F T

(b) Conjunction (P ∧ Q)
A conjunction is true only when both propositions are true.
P Q P ∧ Q
T T T
T F F
F T F
F F F

(c) Disjunction (P ∨ Q)
A disjunction is true if at least one proposition is true.
P Q P ∨ Q
T T T
T F T
F T T
F F F

(d) Implication (P → Q)
An implication is false only when P is true and Q is false.
P Q P → Q
T T T
T F F

F T T
F F T

Example Quiz with Solutions

Question 1: Identifying Truth Values
Question:
Determine the truth value of the following statements:
a) “9 is a multiple of 3”
b) “10 is a prime number”
Solution:
a) 9 ÷ 3 = 3 → divisible
True
b) 10 has factors 1, 2, 5, 10
False

Question 2: Constructing a Truth Table (Conjunction)
Question:
Construct a truth table for the compound proposition:
P ∧ Q
Solution:
P Q P ∧ Q
T T T
T F F
F T F
F F F
Answer:
P ∧ Q is true only when both P and Q are true

Question 3: Truth Table for Negation and Disjunction
Question:
Construct a truth table for the expression:

¬P ∨ Q

Solution:
P Q ¬P ¬P ∨ Q
T T F T
T F F F
F T T T
F F T T
Answer:

¬P ∨ Q is false only when P is true and Q is false

Question 4: Evaluating a Logical Statement
Question:
Given:
P = “It is raining” (True)
Q = “The ground is wet” (False)
Evaluate the truth value of:
P ∧ Q
Solution:
i. P = True
ii. Q = False
Using conjunction rule:
T ∧ F = F
Answer:
False

Question 5: Determining Logical Validity Using Truth Tables
Question:
Is the statement P ∧ Q → P always true?

Solution:
P Q P ∧ Q (P ∧ Q) → P
T T T T
T F F T
F T F T
F F F T
Answer:

Yes, the statement is always true (a tautology)

4. Logic and Predicate Logic
4.1 Propositional Logic
4.1 Introduction to Propositional Logic
Propositional logic is a branch of logic that studies propositions and how they can be combined
to form more complex statements.
Proposition
A proposition is a statement that is either true or false, but not both.
Examples:
i. “2 + 3 = 5” → True
ii. “7 is an even number” → False
iii. “Open the door” → Not a proposition (command)
4.2 Logical Connectives
Logical connectives are symbols used to combine or modify propositions.

4.2.1 Negation (¬P)
Negation means “not P”.
P ¬P
T F
F T
Negation reverses the truth value of a proposition.

4.2.2 Conjunction (P ∧ Q)
Conjunction means “P and Q”.
P Q P ∧ Q
T T T
T F F
F T F
F F F
A conjunction is true only when both statements are true.

4.2.3 Disjunction (P ∨ Q)
Disjunction means “P or Q” (inclusive OR).
P Q P ∨ Q
T T T
T F T
F T T
F F F
The disjunction is false only when both P and Q are false.

4.2.4 Implication (P → Q)
Implication means “If P, then Q”.
P Q P → Q
T T T
T F F
F T T
F F T
The implication is false only when P is true and Q is false.

4.2.5 Biconditional (P ↔ Q)
Biconditional means “P if and only if Q”.
P Q P ↔ Q

T T T
T F F
F T F
F F T
True when P and Q have the same truth value.

4.3 Example Quiz with Solutions
Question 1: Identifying Propositions
Question:
Which of the following are propositions?
a) 5 + 3 = 8
b) Close the window
c) x + 2 = 5
d) The sun rises in the east
Solution:
i. (a) Has a definite truth value → Proposition
ii. (b) Command → Not a proposition
iii. (c) Depends on x → Not a proposition
iv. (d) Has a definite truth value → Proposition
Answer:

(a) and (d) are propositions

Question 2: Negation of a Statement
Question:
Let P: “It is raining.”
Write the negation of P.
Solution:
Negation of Pis:

¬P:“It is not raining.”

Answer:

¬P = “It is not raining”

Question 3: Truth Value of a Conjunction
Question:
Let:
i. P: “7 is a prime number” (True)
ii. Q: “7 is an even number” (False)
Find the truth value of P ∧ Q.
Solution:
Using conjunction rule:

T ∧ F = F

Answer:

P ∧ Q is False

Question 4: Evaluating an Implication
Question:
Let:
i. P: “A number is divisible by 4” (False)
ii. Q: “The number is even” (True)
Find the truth value of P → Q.
Solution:
From implication truth table:

F → T = T
When the antecedent is false, the implication is always true.
Answer:

P → Q is True

Question 5: Biconditional Statement
Question:
Let:
i. P: “2 + 2 = 4” (True)
ii. Q: “4 is an even number” (True)
Evaluate P ↔ Q.
Solution:
From biconditional rule:

T ↔ T = T

Answer:

P ↔ Q is True

4.4 Importance of Propositional Logic
Propositional logic is fundamental in:
i. Computer programming (conditions, loops)
ii. Digital circuit design
iii. Artificial intelligence
iv. Mathematical proofs
v. Database queries

.2 Logical Reasoning
4.2.1 Introduction to Logical Reasoning
Logical reasoning is the process of using known facts or premises to arrive at valid
conclusions. It forms the foundation of:
i. Mathematical proofs
ii. Computer algorithms
iii. Digital circuit design
iv. Artificial intelligence
v. Problem solving and decision making
Logical reasoning relies on rules of inference, which are valid argument forms that guarantee
true conclusions if the premises are true.

4.2.2 Rules of Inference
A rule of inference is a logical pattern that allows us to derive conclusions from given
statements.
The most commonly used rules include:
i. Modus Ponens
ii. Modus Tollens
iii. Hypothetical Syllogism

4.2.3 Modus Ponens (Affirming the Antecedent)
Definition
Modus Ponens has the form:

Premise 1: P → Q
Premise 2: P
Conclusion: ∴ Q

Meaning
If a statement Pimplies Q, and Pis true, then Qmust also be true.
Example (Conceptual)
i. If it rains, the ground gets wet.
ii. It is raining.
iii. Therefore, the ground is wet.

4.2.4 Modus Tollens (Denying the Consequent)
Definition
Modus Tollens has the form:

Premise 1: P → Q
Premise 2: ¬Q
Conclusion: ∴ ¬P

Meaning
If Pimplies Q, and Qis false, then Pmust also be false.
Example (Conceptual)
i. If the circuit is closed, current flows.
ii. Current is not flowing.
iii. Therefore, the circuit is not closed.
4.2.5 Hypothetical Syllogism (Chain Rule)
Definition
Hypothetical syllogism has the form:

P → Q
Q → R
∴ P → R

Meaning
If Pleads to Q, and Qleads to R, then Pleads to R.
Example (Conceptual)
i. If I study, I pass the exam.
ii. If I pass the exam, I graduate.
iii. Therefore, if I study, I graduate.

Example Quiz with Solutions
Question 1: Identifying Modus Ponens
Question:
Given the statements:
i. If a student studies hard, then the student passes the exam.
ii. The student studies hard.
What conclusion can be drawn?
Solution:
Step 1: Identify the structure

P → QandP

Step 2: Apply Modus Ponens

∴ Q

Answer:

The student passes the exam.

Question 2: Applying Modus Tollens
Question:
Given:
i. If a computer is connected to the internet, then it can access websites.
ii. The computer cannot access websites.
What can you conclude?
Solution:
Step 1: Identify the form

P → Qand¬Q

Step 2: Apply Modus Tollens

∴ ¬P

Answer:

The computer is not connected to the internet.

Question 3: Using Hypothetical Syllogism
Question:
Given:
i. If electricity flows, the bulb lights up.
ii. If the bulb lights up, the room becomes bright.
What logical conclusion can be drawn?
Solution:
Step 1: Identify the structure

P → QandQ → R

Step 2: Apply hypothetical syllogism

∴ P → R

Answer:

If electricity flows, the room becomes bright.

Question 4: Determining the Rule of Inference
Question:
Which rule of inference is used in the following argument?
“If a device is faulty, then it will not work.
The device does not work.
Therefore, the device is faulty.”
Solution:
Step 1: Identify the logical form

P → QandQ

Step 2: Analyze validity
This is not Modus Tollens (which requires ¬Q).
The conclusion is invalid.

Answer:

This argument is invalid; no valid rule of inference applies.

Question 5: Mixed Logical Reasoning
Question:
Given:
i. If a number is divisible by 4, then it is even.
ii. If a number is even, then it is divisible by 2.
What conclusion can be drawn?
Solution:
Step 1: Identify structure

P → QandQ → R

Step 2: Apply hypothetical syllogism

∴ P → R

Answer:

If a number is divisible by 4, then it is divisible by 2.

4.3 Logical Equivalence (Expanded Lecture Note)
4.3.1 Meaning of Logical Equivalence
Two propositions are said to be logically equivalent if they always have the same truth value,
regardless of the truth values of their component propositions.
If two statements are logically equivalent, then one can replace the other in logical reasoning,
proofs, and circuit design without changing the meaning.
Notation
Logical equivalence is denoted by:

P ≡ Q

4.3.2 Methods of Showing Logical Equivalence
Logical equivalence can be demonstrated using:
i. Truth tables
ii. Logical identities (laws of logic)
iii. Algebraic manipulation

In introductory courses, truth tables are the most direct and reliable method.

4.3.3 Important Logical Identity
One of the most important logical equivalences is:
P → Q ≡ ¬P ∨ Q

Interpretation
i. “If P, then Q” is logically the same as
ii. “Either Pis false, or Qis true”
This equivalence is fundamental in:
i. Proof techniques
ii. Digital logic design
iii. Programming conditions
iv. Artificial intelligence reasoning

4.3.4 Truth Table for P → Q ≡ ¬P ∨ Q
P Q ¬P ¬P ∨ Q P → Q
T T F T T
T F F F F
F T T T T
F F T T T
Observation
The columns for P → Qand ¬P ∨ Qare identical.
Therefore:

P → Q ≡ ¬P ∨ Q
4.3.5 Why Logical Equivalence Is Important
i. Simplifies complex logical expressions
ii. Helps in writing clearer proofs
iii. Enables optimization of logical circuits
iv. Used in programming (if–else conditions)
v. Forms the basis of logical reasoning and inference

Example Quiz with Solutions
Question 1: Verifying Logical Equivalence Using a Truth Table
Question:
Verify using a truth table that:

P → Q ≡ ¬P ∨ Q

Solution:
Step 1: List all possible truth values for Pand Q
P Q
T T
T F
F T
F F
Step 2: Compute ¬P, ¬P ∨ Q, and P → Q
P Q ¬P ¬P ∨ Q P → Q
T T F T T
T F F F F
F T T T T
F F T T T
Step 3: Compare final columns
The columns are identical.
Answer:

P → Q ≡ ¬P ∨ Q
Question 2: Translating a Conditional Statement
Question:
Rewrite the statement
“If it rains, then the ground is wet”
using logical OR (∨) and negation (¬).
Solution:
Let:
i. P: It rains
ii. Q: The ground is wet

Original statement:

P → Q

Using logical equivalence:

P → Q ≡ ¬P ∨ Q

Answer:

Either it does not rain or the ground is wet

Question 3: Determining Truth Value Using Logical Equivalence
Question:
Given P = Falseand Q = False, determine the truth value of
P → Q.
Solution:
Step 1: Use the equivalent form

P → Q ≡ ¬P ∨ Q

Step 2: Substitute values
i. ¬P = True
ii. Q = False

¬P ∨ Q = True ∨ False = True

Answer:

P → Q is True
Question 4: Simplifying a Logical Expression
Question:
Simplify the expression:

(P → Q) ∧ P

Solution:
Step 1: Replace implication

(P → Q) ≡ (¬P ∨ Q)
(¬P ∨ Q) ∧ P

Step 2: Distribute

(¬P ∧ P) ∨ (Q ∧ P)

Step 3: Apply contradiction law

¬P ∧ P = False
False ∨ (P ∧ Q) = P ∧ Q

Answer:

P ∧ Q

Question 5: Real-Life Reasoning Application
Question:
Explain why the statement
“If I study, then I will pass the exam”
is considered true when the student does not study.
Solution:
Let:
i. P: I study
ii. Q: I pass the exam
Logical form:

P → Q ≡ ¬P ∨ Q

If the student does not study:
i. P = False
ii. ¬P = True
Thus:

¬P ∨ Q = True ∨ (anything) = True

Answer:

A conditional statement is true whenever its premise is false

5. Tautology, Contradiction, and Contingency
Logical statements can be classified based on their truth values under all possible conditions.
These classifications are tautology, contradiction, and contingency.

5.1 Tautology
Definition
A tautology is a compound logical statement that is always true, regardless of the truth values
of its component propositions.
Key Idea
A tautology evaluates to True (T) for all possible combinations of truth values.
Example

P ∨ ¬P

This statement reads:
“P or not P”
This is always true because:
i. If Pis true → the statement is true
ii. If Pis false → ¬Pis true
5.2 Contradiction
Definition
A contradiction is a compound logical statement that is always false, no matter what truth
values its components take.
Key Idea
A contradiction evaluates to False (F) for all possible combinations.
Example

P ∧ ¬P

This reads:
“P and not P”
A statement cannot be both true and false at the same time.

5.3 Contingency
Definition
A contingency is a logical statement that is true for some truth values and false for others.
Key Idea
i. Most real-world logical expressions are contingencies.
ii. The truth value depends on the specific situation.

Example

P ∧ Q
This is true only when both Pand Qare true.

5.4 Using Truth Tables
Truth tables are used to systematically determine whether a logical statement is a tautology,
contradiction, or contingency.

Example Quiz with Solutions
Question 1: Identifying a Tautology
Question:
Show that the statement P ∨ ¬Pis a tautology using a truth table.
Solution:
P ¬P P ∨ ¬P
T F T
F T T
Conclusion:
Since the final column is always true, the statement is a tautology.
Answer:

Tautology

Question 2: Identifying a Contradiction
Question:
Determine whether the statement P ∧ ¬Pis a contradiction.
Solution:
P ¬P P ∧ ¬P
T F F
F T F
Conclusion:
The statement is false in all cases, hence a contradiction.
Answer:

Contradiction

Question 3: Classifying a Logical Statement
Question:
Classify the statement (P ∨ Q) ∧ Pas a tautology, contradiction, or contingency.
Solution:
P Q P ∨ Q (P ∨ Q) ∧ P
T T T T
T F T T
F T T F
F F F F
Conclusion:
i. True in some cases
ii. False in some cases
Answer:

Contingency

Question 4: Real-Life Interpretation
Question:
Let P: “It is raining.”
Explain whether the statement P ∨ ¬Pis a tautology.
Solution:
i. Either it is raining (P is true), or
ii. It is not raining (¬P is true)
There is no possible situation where both are false.
Answer:

The statement is a tautology

Question 5: Determining Statement Type
Question:
Determine whether the statement (P ∧ Q) ∨ ¬Pis a tautology, contradiction, or contingency.

Solution:
P Q P ∧ Q ¬P Final
T T T F T
T F F F F
F T F T T
F F F T T
Conclusion:
i. True in some rows
ii. False in one row
Answer:

Contingency
Lecture Notes: Negation, Converse, Inverse, and Contrapositive
1. Introduction
In logic, understanding conditional statements (implications) and their related forms is
fundamental to reasoning, proofs, and mathematics.
A conditional statement (implication) is of the form:
P → Q

where:
i. P= hypothesis (or antecedent)
ii. Q= conclusion (or consequent)
It reads: “If P, then Q.”
2. Related Forms of Implication
For a statement P → Q:
Form Symbolic Representation Meaning
Original Implication P → Q If P is true, then Q is true
Converse Q → P If Q is true, then P is true
Inverse ¬P → ¬Q If P is not true, then Q is not true
Contrapositive ¬Q → ¬P If Q is not true, then P is not true

Key fact: Only the contrapositive is logically equivalent to the original implication.
The converse and inverse may not have the same truth value as the original statement.

3. Truth Table Overview
P Q P→Q Q→P ¬P→¬Q ¬Q→¬P
T T T T T T
T F F T T F
F T T F F T
F F T T T T
Observation: P → Qand ¬Q → ¬Phave the same truth values, confirming equivalence.
4. Step-by-Step Construction
4.1 Converse
i. Swap hypothesis and conclusion
ii. P → Q→ Q → P
4.2 Inverse
i. Negate both hypothesis and conclusion
ii. P → Q→ ¬P → ¬Q
4.3 Contrapositive
i. Swap and negate both hypothesis and conclusion
ii. P → Q→ ¬Q → ¬P
5. Examples
Example 1: Simple Conditional Statement
Statement:
If it is raining (P), then the ground is wet (Q).
i. Original: P → Q: If it is raining, then the ground is wet.
ii. Converse: Q → P: If the ground is wet, then it is raining. (not always true)
iii. Inverse: ¬P → ¬Q: If it is not raining, then the ground is not wet.
iv. Contrapositive: ¬Q → ¬P: If the ground is not wet, then it is not raining. (logically
equivalent)

Example 2: Mathematical Statement
Statement:
If a number nis divisible by 4 (P), then nis even (Q).
i. Converse: If nis even, then nis divisible by 4 (wrong)
ii. Inverse: If nis not divisible by 4, then nis not even (wrong)
iii. Contrapositive: If nis not even, then nis not divisible by 4 (correct)

Example 3: Classroom Logic
Statement:
If a student passes the final exam (P), then they pass the course (Q).
i. Converse: If a student passes the course, then they passed the final exam
ii. Inverse: If a student does not pass the final, then they do not pass the course
iii. depends on policy
iv. Contrapositive: If a student does not pass the course, then they did not pass the final
exam
Example 4: Daily Life Statement
Statement:
If a person is a doctor (P), then they have a degree in medicine (Q).
i. Converse: If someone has a degree in medicine, then they are a doctor (could be a
researcher, nurse, or student)
ii. Inverse: If someone is not a doctor, then they do not have a degree in medicine
iii. Contrapositive: If someone does not have a degree in medicine, then they are not a doctor
Example 5: Logical Problem Solving
Statement:
If a figure is a square (P), then it has four sides (Q).
i. Converse: If a figure has four sides, then it is a square (could be a rectangle, rhombus,
trapezoid)
ii. Inverse: If a figure is not a square, then it does not have four sides
iii. Contrapositive: If a figure does not have four sides, then it is not a square

6. Step-by-Step Method to Determine Equivalence
i. Write original statement P → Q
ii. Negate as required for inverse/contrapositive
iii. Swap P and Q for converse/contrapositive
iv. Check truth table (optional) to confirm logical equivalence
Always remember: Only the contrapositive is guaranteed to have the same truth value as the
original implication.
7.1 Basic Concepts
Set Theory is the branch of mathematics that deals with collections of objects. Sets provide the
foundation for nearly all areas of mathematics, including logic, probability, and discrete
mathematics.
7.1.1 Set
i. A set is a well-defined collection of distinct objects, called elements or members.
ii. Example:

A = {1,2,3,4,5}(set of first five natural numbers)

Notation:
i. Curly braces: { }
ii. Capital letters for sets (e.g., A, B, C)
iii. Lowercase letters or numbers for elements (e.g., a, 1, x)
7.1.2 Element
i. An element is an individual object that belongs to a set.
ii. Notation:
a. a ∈ A→ "a is an element of set A"
b. b ∉ A→ "b is not an element of set A"

Example:

A = {2,4,6,8} ⟹ 4 ∈ A, 5 ∉ A

7.1.3 Universal Set
i. The universal set Uis the set containing all elements under discussion.
ii. All other sets in a particular context are subsets of U.
iii. Example:

U = {1,2,3,4,5,6,7,8,9,10}

If A = {2,4,6}, then A ⊆ U.

7.1.4 Empty Set
i. The empty set, denoted ∅or { }, is a set with no elements.
ii. Example:

B = {x ∣ x is a prime number divisible by 2 and 3} = {}

Special property: ∅ ⊆ Ufor any universal set U
7.2 Types of Sets
i. Finite set: Contains a finite number of elements
Example: A = {1,2,3}
ii. Infinite set: Contains infinitely many elements
Example: N = {1,2,3,... }
iii. Equal sets: Sets with the same elements
Example: A = {1,2,3},B = {3,2,1} ⟹ A = B
iv. Subset: Every element of Ais in B
Notation: A ⊆ B
v. Power set: The set of all subsets of a set
Example: A = {1,2} ⟹ P(A) = {∅,{1},{2},{1,2}}
7.3 Set Operations
Union (∪): Elements in Aor B

A ∪ B = {x ∣ x ∈ A or x ∈ B}

Intersection (∩): Elements in both Aand B

A ∩ B = {x ∣ x ∈ A and x ∈ B}

Difference (∖): Elements in Anot in B

A ∖ B = {x ∣ x ∈ A and x ∉ B}

Complement (A
′
): Elements not in A but in the universal set

A
′ = U ∖ A
7.4 Five Example Quiz with Solutions

Question 1: Identify Elements
Problem:
Let A = {2,4,6,8}. Determine if:
(a) 6 ∈ A
(b) 5 ∈ A
Solution:
(a) 6 ∈ A True
(b) 5 ∈ A False, so 5 ∉ A
Answer:
(a) True
(b) False

Question 2: Subsets and Power Set
Problem: Let B = {a, b}. Find:
i. All subsets of B
ii. Number of subsets
Solution:
Step 1: List subsets

∅,{a},{b},{a, b}

Step 2: Count subsets
Number of subsets = 2
n = 2
2 = 4

Answer:
(a) ∅,{a},{b},{a, b}
(b) 4 subsets
Question 3: Union and Intersection
Problem:
Let A = {1,2,3,4}and B = {3,4,5,6}. Find:
(a) A ∪ B
(b) A ∩ B
Solution:
(a) Union: All elements in either set

A ∪ B = {1,2,3,4,5,6}

(b) Intersection: Elements in both sets

A ∩ B = {3,4}

Answer:
(a) {1
, 2
, 3
, 4
, 5
, 6}

(b) {3
, 4}
Question 4: Complement of a Set
Problem:
Universal set: U = {1,2,3,4,5,6,7,8,9}
Set: C = {2,4,6,8}
Find C
′
(complement of C)
Solution:
C
′= Elements in Unot in C
C
′ = {1,3,5,7,9}

Answer:

{1
, 3
, 5
, 7
, 9}

Question 5: Set Difference
Problem:
Let X = {1,2,3,4,5}and Y = {4,5,6,7}. Find X ∖ Yand Y ∖ X
Solution:
X ∖ Y= Elements in Xnot in Y

X ∖ Y = {1,2,3}

Y ∖ X= Elements in Ynot in X

Y ∖ X = {6,7}

Answer:

X ∖ Y = {1,2,3},Y ∖ X = {6,7}

Types of Sets

2.1 Finite and Infinite Sets
(a) Finite Sets
i. Contain a countable number of elements.

ii. Example: A = {1,2,3,4,5}
iii. Cardinality (number of elements): ∣ A ∣= 5
(b) Infinite Sets
i. Have unlimited elements; cannot be counted completely.
ii. Examples:
a. Natural numbers: N = {1,2,3,... }
b. Integers: Z = {... , −2,−1,0,1,2,... }

2.2 Subsets and Proper Subsets
Subset
A set Ais a subset of Bif all elements of Aare in B.
A ⊆ B ⟺ (∀x ∈ A) ⟹ x ∈ B

Proper Subset
A is a proper subset of Bif A ⊆ Band A ≠ B.
A ⊂ B

Example:

A = {1,2}, B = {1,2,3} ⟹ A ⊂ B

2.3 Disjoint Sets
Two sets are disjoint if they have no elements in common.

A ∩ B = ∅

Example:

A = {1,2}, B = {3,4} ⟹ A ∩ B = ∅

2.4 Sets of Sets
A set can contain other sets as elements.
Example:

A = {{1,2},{3,4}}

Here, {1,2} ∈ A, but 1 ∉ Adirectly.

3. Example Quiz with Solutions
Question 1: Finite vs Infinite Sets
Question:
Classify the following sets as finite or infinite:

i. A = {2,4,6,8,10}
ii. B = {x ∣ x is an even natural number}
Solution:
i. Set A: Contains 5 elements → Finite
ii. Set B: Contains all even natural numbers → Infinite
Answer:

A is finite, B is infinite

Question 2: Subset Identification
Question:
Determine if A ⊆ B:

A = {1,3},B = {1,2,3,4}

Solution:
Check each element of Ain B:
a. 1 ∈ B
b. 3 ∈ B
ii. All elements of Aare in B→ A ⊆ B
iii. Check proper subset: A ≠ B→ A ⊂ B
Answer:

A ⊆ B and A is a proper subset of B

Question 3: Disjoint Sets
Question:
Are the following sets disjoint?

A = {1,2,3},B = {4,5,6}

Solution:
Find intersection:

A ∩ B = {} = ∅
No elements in common → Sets are disjoint
Answer:

A and B are disjoint sets

Question 4: Set of Sets
Question:
Let A = {{1,2},{3}}. Determine whether:
i. {1,2} ∈ A
ii. 1 ∈ A
Solution:
i. {1,2} ∈ A
ii. 1 is an element of a subset but not directly in A→
Answer:
i. {1,2} ∈ A
ii. 1 ∉ A

Question 5: Cardinality and Proper Subsets
Question:
Set B = {a, b, c, d}. List all proper subsets of Bcontaining 2 elements.
Solution:
All 2-element subsets:

{a, b},{a, c},{a, d},{b, c},{b, d},{c, d}

Answer:

{{a, b},{a, c},{a, d},{b, c},{b, d},{c, d}}

4. Summary of Key Concepts
Concept Definition Example
Finite Set Contains countable number of elements {1
, 2
, 3}
Infinite Set Contains uncountable elements {1
, 2
, 3
,
. . .}
Subset All elements of A are in B {1,2} ⊆ {1,2,3}
Proper Subset Subset not equal to B {1,2} ⊂ {1,2,3}
Disjoint Set No common elements {1,2},{3,4}
Set of Sets Sets as elements {{1,2},{3,4}}

7.3 Set Operations

i. Universal Set
ii. Union (A ∪ B)
iii. Intersection (A ∩ B)
iv. Difference (A − B)
v. Complement (A
′
)
2. Universal Set
i. Denoted as U
ii. Example:

If we consider students in a class as elements:

U = {all students in the class}

iii. All other sets are subsets of U.
3. Union of Sets (A ∪ B)
Definition:
The union of two sets and is the set of all elements that are in , or in , or in both. Think of it as
combining everything together.

A ∪ B = {x: x ∈ A or x ∈ B}

i. Notation: A ∪ B
ii. Key Word: "OR"
Example:

A = {1,2,3},B = {3,4,5} ⇒ A ∪ B = {1,2,3,4,5}

4. Intersection of Sets (A ∩ B)
Definition:
The intersection of two sets and is the set of all elements that are in both and simultaneously.
These are the shared elements.
The intersection of two sets A and Bis the set of elements that are common to both sets.

A ∩ B = {x: x ∈ A and x ∈ B}

i. Notation: A ∩ B
ii. Key Word: "AND"

Example:

A = {1,2,3},B = {3,4,5} ⇒ A ∩ B = {3}

5. Difference of Sets (A − B)
Definition:
The difference (also written as A \ B ) is the set of elements that belong to but not to . It is like
taking set and "subtracting" any part of that was inside it.
The difference of two sets Aand Bis the set of elements that are in A but not in B.

A − B = {x: x ∈ A and x ∉ B}

i. Notation: A − B
ii. Key Word: "Only in A"

Example:

A = {1,2,3},B = {3,4,5} ⇒ A − B = {1,2},B − A = {4,5}

6. Complement of a Set (A
′
)

Definition:
The complement of set consists of all elements in the Universal Set (U) that are not in the
reference set.
The complement of a set A (denoted A
′
) is the set of all elements in the universal set U that are

not in A.

A
′ = {x: x ∈ U and x ∉ A}

i. Notation: or
ii. Key Word: "NOT"
Example:

U = {1,2,3,4,5},A = {1,2,3} ⇒ A
′ = {4,5}

9. Example Quiz with Solutions
Question 1: Union and Intersection
Question:
Let A = {1,2,3,4}, B = {3,4,5,6}. Find:
i. A ∪ B
ii. A ∩ B
Solution:
Union: Include all distinct elements:

A ∪ B = {1,2,3,4,5,6}
Intersection: Include only common elements:
A ∩ B = {3,4}

Answer:

A ∪ B = {1,2,3,4,5,6},A ∩ B = {3,4}

Question 2: Set Difference
Question:
Using the same sets Aand B, find A − Band B − A.
Solution:
i. A − B = {x ∈ A, x ∉ B} = {1,2}
ii. B − A = {x ∈ B, x ∉ A} = {5,6}
Answer:

A − B = {1,2},B − A = {5,6}

Question 3: Complement of a Set
Question:
Let the universal set U = {1,2,3,4,5,6,7,8}and A = {2,4,6,8}. Find A
′
.

Solution:
Complement = all elements in Unot in A
A
′ = {1,3,5,7}

Answer:

A
′ = {1,3,5,7}

Question 4: De Morgan’s Law Verification
Question:
Verify De Morgan’s law for:

(A ∪ B)
′ = A
′ ∩ B
′

Given U = {1,2,3,4,5}, A = {1,2},B = {2,3}
Solution:
1. Find A ∪ B:

A ∪ B = {1,2,3}

2. Find (A ∪ B)
′
:
(A ∪ B)
′ = U − (A ∪ B) = {4,5}

3. Find A
′
and B
′
:

A
′ = {3,4,5},B

′ = {1,4,5}

4. Find A
′ ∩ B
′
:

A
′ ∩ B
′ = {4,5}

5. Compare:

(A ∪ B)
′ = A
′ ∩ B
′ = {4,5} verified

Question 5: Combined Set Operations
Question:
Given U = {1,2,3,4,5,6,7},A = {1,3,5},B = {2,3,6}. Find:

(A ∩ B)
′ ∪ (B − A)

Solution:
i. Intersection A ∩ B = {3}
ii. Complement (A ∩ B)

′ = U − {3} = {1,2,4,5,6,7}

iii. Difference B − A = {2,6}
iv. Union (A ∩ B)

′ ∪ (B − A) = {1,2,4,5,6,7} ∪ {2,6} = {1,2,4,5,6,7}

Answer:

(A ∩ B)
′ ∪ (B − A) = {1,2,4,5,6,7}

Represented using Venn diagrams.
Venn Diagram Representation
Universal set

Union: Shaded area of all circles

Intersection: Overlapping area

Difference: Area of A excluding B

Complement: Area outside A within U

7.4 Set Algebra
Laws of Set Algebra
1. Commutative Laws
The order of sets does not affect the result.

A ∪ B = B ∪ A
A ∩ B = B ∩ A

2. Associative Laws
The grouping of sets does not affect the result.

(A ∪ B) ∪ C = A ∪ (B ∪ C)
(A ∩ B) ∩ C = A ∩ (B ∩ C)

3. Distributive Laws
Union distributes over intersection and vice versa.

A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)
A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)

4. De Morgan’s Laws
De Morgan’s laws relate complements of unions and intersections.

(A ∪ B)
′ = A
′ ∩ B
′

(A ∩ B)
′ = A
′ ∪ B
′

These laws are crucial in:
i. Logic simplification
ii. Digital circuit design
iii. Probability theory
9.4.4 Importance of Set Algebra
Set algebra allows us to:
i. Simplify complex set expressions
ii. Prove identities
iii. Model logical conditions
iv. Translate problems between sets, logic, and circuits
Example Quiz with Solutions
Question 1: Commutative Law Verification
Question:
Let

A = {1,2,3},B = {3,4,5}

Verify the commutative law for union.
Solution:
Step 1: Find A ∪ B

A ∪ B = {1,2,3,4,5}

Step 2: Find B ∪ A

B ∪ A = {3,4,5,1,2} = {1,2,3,4,5}

Conclusion:

A ∪ B = B ∪ A

Question 2: Associative Law Verification
Question:
Let

A = {1,2},B = {2,3},C = {3,4}

Verify:

(A ∪ B) ∪ C = A ∪ (B ∪ C)

Solution:
Step 1: Compute A ∪ B

A ∪ B = {1,2,3}

Step 2: Compute (A ∪ B) ∪ C

= {1,2,3,4}

Step 3: Compute B ∪ C

B ∪ C = {2,3,4}

Step 4: Compute A ∪ (B ∪ C)

= {1,2,3,4}

Conclusion:

(A ∪ B) ∪ C = A ∪ (B ∪ C)

Question 3: Distributive Law Application
Question:
Simplify:

A ∩ (B ∪ C)

Solution:
Step 1: Apply distributive law

A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)

Answer:

(A ∩ B) ∪ (A ∩ C)

Question 4: De Morgan’s Law Verification
Question:
Let the universal set be

U = {1,2,3,4,5}

and

A = {1,2},B = {2,3}

Verify:

(A ∪ B)
′ = A
′ ∩ B
′

Solution:
Step 1: Compute A ∪ B

A ∪ B = {1,2,3}

Step 2: Compute (A ∪ B)
′

= {4,5}

Step 3: Compute complements
A
′ = {3,4,5},B

′ = {1,4,5}

Step 4: Find intersection

A
′ ∩ B
′ = {4,5}

Conclusion:

(A ∪ B)
′ = A
′ ∩ B
′
Question 5: Simplification Using De Morgan’s Law
Question:
Simplify:

(A ∩ B)
′

Solution:
Step 1: Apply De Morgan’s law

(A ∩ B)
′ = A
′ ∪ B
′

Answer:

A
′ ∪ B
′

7.5 Power Set and Cartesian Product

1 Power Set
Definition
Let Abe any set.
The power set of A, denoted by P(A)or P(A), is the set of all possible subsets of A, including:
i. The empty set ∅
ii. The set Aitself

P(A) = {all subsets of A}

Important Properties of Power Sets
1. If a set Ahas nelements, then:

∣ P(A) ∣= 2
n
2. The empty set is always a subset of every set:
∅ ⊆ A
3. Every element of P(A)is itself a set.
Example
Let:

A = {a, b}

Subsets of A:
i. ∅
ii. {a}
iii. {b}
iv. {a
, b}

P(A) = {∅,{a},{b},{a, b}}

9.2 Cartesian Product
Definition
Let Aand Bbe two sets.
The Cartesian product of Aand B, denoted by A × B, is the set of all ordered pairs:

A × B = {(a, b) ∣ a ∈ A, b ∈ B}

The order matters:
(a, b) ≠ (b, a)in general

Important Properties of Cartesian Products
1. If:

∣ A ∣= mand ∣ B ∣= n

then:

∣ A × B ∣= m × n

In general:

A × B ≠ B × A

3. If A = ∅or B = ∅, then:

A × B = ∅

Example
Let:

A = {1,2},B = {x, y}
A × B = {(1, x), (1, y), (2, x), (2, y)}

Example Quiz with Solutions
Question 1: Finding a Power Set
Question:
Let A = {1,2,3}.
Find the power set P(A).
Solution:
Step 1: Identify all subsets
i. Empty set: ∅
ii. Single-element subsets:

{1},{2},{3}

iii. Two-element subsets:

{1,2},{1,3},{2,3}

iv. Full set:

{1
, 2
, 3}

Step 2: Write the power set

P(A) = {∅,{1},{2},{3},{1,2},{1,3},{2,3},{1,2,3}}

Question 2: Number of Subsets
Question:
How many elements are in the power set of a set with 5 elements?
Solution:
Step 1: Use the power set formula

∣ P(A) ∣= 2
n

Step 2: Substitute n = 5

∣ P(A) ∣= 2
5 = 32

Answer:

32 subsets

Question 3: Forming a Cartesian Product
Question:
Let A = {a, b}and B = {1,2,3}.
Find A × B.
Solution:
Step 1: Pair each element of Awith each element of B

A × B = {(a, 1), (a, 2), (a, 3), (b, 1), (b, 2), (b, 3)}

Question 4: Cardinality of a Cartesian Product
Question:
If ∣ A ∣= 4and ∣ B ∣= 6, find ∣ A × B ∣.
Solution:
Step 1: Apply the formula

∣ A × B ∣=∣ A ∣×∣ B ∣

Step 2: Substitute values

∣ A × B ∣= 4 × 6 = 24

Answer:

24

Question 5: Comparing A × Band B × A
Question:
Let A = {1,2}and B = {x, y}.
Show that A × B ≠ B × A.
Solution:
Step 1: Find A × B

A × B = {(1, x), (1, y), (2, x), (2, y)}

Step 2: Find B × A

B × A = {(x, 1), (x, 2), (y, 1), (y, 2)}

Step 3: Compare

(1, x) ≠ (x, 1)

Conclusion:

A × B ≠ B × A

8. Relations and Orderings
Relations
9.1.1 Definition of a Relation
Let Aand Bbe two sets.
A relation Rfrom Ato Bis any subset of the Cartesian product:
A × B = {(a, b) ∣ a ∈ A, b ∈ B}

If (a, b) ∈ R, we say:
“a is related to b”
and write aRb.
When A = B, the relation is called a relation on a set A.

9.1.2 Representation of Relations
Relations can be represented in several ways:
A. Set of ordered pairs

R = {(1,1), (2,2), (3,3)}

B. Arrow diagrams

i. Arrows show how elements are related
C. Matrices
i. Useful for finite sets
D. Directed graphs
i. Vertices represent elements
ii. Directed edges represent relations
9.1.3 Types of Relations
(a) Reflexive Relation
A relation Ron a set Ais reflexive if:

(a, a) ∈ Rfor all a ∈ A

Every element is related to itself.
Example:

R = {(1,1), (2,2), (3,3)}

on A = {1,2,3}is reflexive.
(b) Symmetric Relation
A relation Ris symmetric if:

(a, b) ∈ R ⇒ (b, a) ∈ R

Relationship works in both directions.
Example:

R = {(1,2), (2,1), (3,3)}

is symmetric.
(c) Transitive Relation
A relation Ris transitive if:

(a, b) ∈ R and (b, c) ∈ R ⇒ (a, c) ∈ R

Relationship carries over through a middle element.
Example:

R = {(1,2), (2,3), (1,3)}

is transitive.

9.1.4 Importance of Relations
Relations are used to:

i. Describe data connections
ii. Define orderings
iii. Model databases and networks
iv. Represent equivalence and hierarchy

Example Quiz with Solutions
Question 1: Identifying a Relation
Question:
Let A = {1,2,3}. Is the set

R = {(1,2), (2,3)}

a relation on A?
Solution:
Step 1: Compute A × A

A × A = {(1,1), (1,2), (1,3), (2,1), (2,2), (2,3), (3,1), (3,2), (3,3)}

Step 2: Check if R ⊆ A × A
All ordered pairs in Rbelong to A × A.
Answer:

R is a relation on A

Question 2: Testing Reflexivity
Question:
Let A = {a, b, c}and

R = {(a, a), (b, b)}

Determine whether Ris reflexive.
Solution:
Step 1: Reflexive condition:

(a, a), (b, b), (c, c) ∈ R

Step 2: Check missing elements
(c
, c)is not in R
Answer:

R is not reflexive

Question 3: Testing Symmetry
Question:
Let

R = {(1,2), (2,1), (3,3)}

Check whether the relation is symmetric.
Solution:
Step 1: Check each ordered pair
i. (1
, 2)→ (2
, 1)exists ✔

ii. (2
, 1)→ (1
, 2)exists ✔

iii. (3
, 3)→ symmetric by itself ✔
Answer:

R is symmetric

Question 4: Testing Transitivity
Question:
Let

R = {(a, b), (b, c), (a, c)}

Check whether Ris transitive.
Solution:
Step 1: Look for pairs of the form:

(a, b) and (b, c)

Step 2: Check if (a
, c)exists

Yes, (a
, c)is in R
Answer:

R is transitive

Question 5: Multiple Properties
Question:
Let A = {1,2}and

R = {(1,1), (2,2), (1,2), (2,1)}
Determine whether Ris reflexive, symmetric, and transitive.

Solution:
Reflexive:
(1
, 1)and (2
, 2)are present ✔

Symmetric:
(1
, 2)and (2
, 1)are both present ✔

Transitive:
(1
, 2)and (2
, 1)imply (1
, 1)✔

(2
, 1)and (1
, 2)imply (2
, 2)✔

Answer:

R is reflexive, symmetric, and transitive

8.2 Partially Ordered Sets (Posets)
9.2.1 Introduction
In discrete mathematics, many situations involve ordering elements, but not necessarily in a
strict sequence.
For example:
i. Divisibility among numbers
ii. Task scheduling with prerequisites
iii. File directory structures
Such situations are modeled using partially ordered sets, commonly called posets.
9.2.2 Definition of a Partially Ordered Set
A partially ordered set (poset) is a pair:

(P,≤)

where:
i. Pis a non-empty set
ii. ≤ is a binary relation on Pthat satisfies three properties:
a. Reflexive
b. Antisymmetric
c. Transitive

9.2.3 Properties of a Partial Order
1. Reflexive Property
A relation Ron a set Pis reflexive if:

∀a ∈ P, aRa

Every element is related to itself.
Example:
For the relation ≤on real numbers:

5 ≤ 5(true)

2. Antisymmetric Property
A relation Ris antisymmetric if:

∀a, b ∈ P, (aRb and bRa) ⇒ a = b
If two elements are related in both directions, they must be the same.
Example:
If a ≤ band b ≤ a, then a = b.
3. Transitive Property
A relation Ris transitive if:

∀a, b, c ∈ P, (aRb and bRc) ⇒ aRc

The order is consistent across chains of elements.
Example:
If 2 ≤ 4and 4 ≤ 6, then 2 ≤ 6.
9.2.4 Examples of Posets
Example 1: Divisibility
Let:

P = {1,2,3,6}

Define relation a ∣ b(“a divides b”).
i. Reflexive: a ∣ a
ii. Antisymmetric: If a ∣ band b ∣ a, then a = b
iii. Transitive: If a ∣ band b ∣ c, then a ∣ c
Thus, (P, ∣) is a poset.

Example 2: Subset Relation
For the power set P(A), define:

A ⊆ B

This forms a poset.
9.2.5 Total Order vs Partial Order
i. Partial Order: Not every pair of elements is comparable
ii. Total Order: Every pair of elements is comparable
Example of partial order:

{a, b}with neither a ≤ b nor b ≤ a

Example Quiz with Step-by-Step Solutions
Question 1: Identifying a Poset
Question:
Let P = {1,2,4}with relation aRbif a ≤ b.
Determine whether (P

, R)is a poset.

Solution:
Step 1: Check reflexivity

1 ≤ 1, 2 ≤ 2, 4 ≤ 4 ⇒ Reflexive

Step 2: Check antisymmetry
If a ≤ band b ≤ a, then a = b→ true.
Step 3: Check transitivity

1 ≤ 2, 2 ≤ 4 ⇒ 1 ≤ 4

Answer:

(P, R) is a poset

Question 2: Testing Antisymmetry
Question:
Let P = {a, b}and R = {(a, b), (b, a)}.
Is Rantisymmetric?
Solution:
Step 1:
We have aRband bRa

Step 2:
But a ≠ b
Answer:

The relation is NOT antisymmetric

Question 3: Divisibility Relation
Question:
Show that the relation “divides” on P = {1,2,3,6}is a partial order.
Solution:
Reflexive:

a ∣ afor all a

Antisymmetric:
If a ∣ band b ∣ a, then a = b
Transitive:
If a ∣ band b ∣ c, then a ∣ c
Answer:

Divisibility is a partial order

Question 4: Finding Comparable Elements
Question:
Let P = {2,3,6}under divisibility.
Are 2 and 3 comparable?
Solution:
i. 2 ∤ 3
ii. 3 ∤ 2
Answer:

2 and 3 are not comparable
Question 5: Determining Whether a Relation Is a Poset
Question:
Let P = {1,2,3}and

R = {(1,1), (2,2), (3,3), (1,2), (2,3)}

Is Ra partial order?
Solution:
Reflexive:
All (a
, a)are present → ✔
Antisymmetric:
No pair (a
, b)and (b
, a)for a ≠ b→ ✔

Transitive:

(1,2) and (2,3) ⇒ (1,3)

But (1,3) ∉ R
Answer:

R is NOT a poset (fails transitivity)

8.3 Lattices
1. Introduction to Lattices
In order theory, a lattice is a special type of partially ordered set (poset) in which every pair
of elements has both:
i. a least upper bound, called the join
ii. a greatest lower bound, called the meet
Lattices are important in:
i. Boolean algebra
ii. Logic circuits
iii. Data organization
iv. Optimization problems
v. Computer science and mathematics

2. Review: Partially Ordered Sets (Posets)
A poset is a set Ptogether with a relation ≤that satisfies:
i. Reflexive: a ≤ a
ii. Antisymmetric: If a ≤ band b ≤ a, then a = b
iii. Transitive: If a ≤ band b ≤ c, then a ≤ c
A lattice is a special kind of poset.

3. Least Upper Bound (Join)
Definition
For elements aand bin a poset:
An upper bound of {a

, b}is an element usuch that:
a ≤ uandb ≤ u

The least upper bound (LUB) is the smallest such element.
Notation

a ∨ b(read as “a join b”)

4. Greatest Lower Bound (Meet)
Definition
For elements aand b:
A lower bound of {a

, b}is an element lsuch that:
l ≤ aandl ≤ b

The greatest lower bound (GLB) is the largest such element.
Notation

a ∧ b(read as “a meet b”)

5. Definition of a Lattice
A poset (L, ≤)is called a lattice if for every pair of elements a, b ∈ L:
i. a ∨ bexists
ii. a ∧ bexists

6. Example of a Lattice
Example: Set of Divisors of 12
Let:

L = {1,2,3,4,6,12}

Order relation:

a ≤ b ⟺ a divides b

i. Join (a ∨ b) = Least Common Multiple (LCM)
ii. Meet (a ∧ b) = Greatest Common Divisor (GCD)

7. Hasse Diagrams
A Hasse diagram is a graphical representation of a poset.
i. Higher elements are drawn above lower elements
ii. Edges indicate direct ordering
iii. Transitive edges are omitted
Hasse diagrams are commonly used to visualize lattices.
8. Properties of Lattices
For all a, b, c ∈ L:
1. Idempotent laws

a ∨ a = a, a ∧ a = a

2. Commutative laws

a ∨ b = b ∨ a, a ∧ b = b ∧ a

3. Associative laws

(a ∨ b) ∨ c = a ∨ (b ∨ c)

4. Absorption laws

a ∨ (a ∧ b) = a

Example Quiz with Solutions
Question 1: Identifying Join and Meet
Question:
Let L = {1,2,4,8}with the divisibility relation.
Find:
i. 2 ∨ 4
ii. 2 ∧ 4
Solution:
Step 1: Determine join (LCM)

2 ∨ 4 = LCM(2,4) = 4

Step 2: Determine meet (GCD)

2 ∧ 4 = GCD(2,4) = 2

Answer:

2 ∨ 4 = 4,2 ∧ 4 = 2

Question 2: Checking if a Poset is a Lattice
Question:
Given the set A = {1,2,3}with the usual ≤relation, determine whether Ais a lattice.
Solution:
Step 1: Check joins
i. max (1,2) = 2
ii. max (2,3) = 3
Step 2: Check meets
i. min (1,2) = 1
ii. min (2,3) = 2
Step 3: All pairs have join and meet
Answer:

A is a lattice
Question 3: Join and Meet in Power Set Lattice
Question:
Let P({a, b, c})be ordered by subset inclusion ⊆.
Find:
i. {a} ∨ {b}
ii. {a} ∧ {b}
Solution:
Step 1: Join = union

{a} ∨ {b} = {a, b}

Step 2: Meet = intersection

{a} ∧ {b} = ∅

Answer:

{a} ∨ {b} = {a, b},{a} ∧ {b} = ∅

Question 4: Using Absorption Law
Question:
Verify the absorption law:

a ∨ (a ∧ b) = a

for a = 6, b = 9in the divisor lattice.
Solution:
Step 1: Compute meet

a ∧ b = gcd (6,9) = 3

Step 2: Compute join

a ∨ 3 = lcm(6,3) = 6

Answer:

a ∨ (a ∧ b) = 6 = a

Question 5: Identifying a Non-Lattice
Question:
Given a poset with elements {a
, b
, c}where:

i. a ≤ c
ii. b ≤ c
iii. No order relation between aand b
Is this poset a lattice?
Solution:
Step 1: Upper bounds of aand b
Upper bound exists: c
Step 2: Lower bounds of aand b
No common lower bound
Step 3: Meet does not exist
Answer:

The poset is NOT a lattice

9. Mathematical Induction

9.1 Principle of Mathematical Induction
Introduction
The Principle of Mathematical Induction (PMI) is a powerful proof technique used to show
that a mathematical statement is true for all natural numbers (usually n = 1,2,3,...).
It is especially useful for proving:
i. Algebraic formulas
ii. Summation formulas
iii. Inequalities
iv. Divisibility properties
v. Properties of sequences and series
Basic Idea (Intuition)
Think of induction like a row of dominoes:
i. If the first domino falls (base case),
ii. And each domino knocks down the next one (inductive step),
iii. Then all dominoes will fall.
Formal Statement of the Principle
Let P(n)be a statement depending on a natural number n.
To prove that P(n)is true for all n ≥ 1, we perform the following steps:
Step 1: Base Case
Prove that the statement is true for the first value, usually n = 1.
This verifies that the statement holds at the starting point.
Step 2: Inductive Hypothesis
Assume that the statement is true for some arbitrary natural number n = k.
That is, assume:

P(k) is true
This assumption is called the inductive hypothesis.
It is not a proof, but a temporary assumption used to prove the next step.

Step 3: Inductive Step
Using the inductive hypothesis, prove that the statement is true for:

n = k + 1

That is, show:

P(k) ⇒ P(k + 1)

Conclusion
If all three steps are completed successfully, then the statement is true for all natural numbers
n ≥ 1.
Example Quiz with Full Solutions
Example 1: Sum of First nNatural Numbers
Question:
Prove by mathematical induction that:

1 + 2 + 3 + ⋯ + n =
n(n + 1)
2

Solution:
Step 1: Base Case (n = 1)

LHS = 1
RHS =
1(1 + 1)
2
= 1

✔ Base case holds.
Step 2: Inductive Hypothesis
Assume true for n = k:

1 + 2 + ⋯ + k =
k(k + 1)
2

Step 3: Inductive Step
Prove for n = k + 1:

1 + 2 + ⋯ + k + (k + 1)

Using the hypothesis:

=
k(k + 1)
2
+ (k + 1)

= (k + 1) (
k
2
+1)

=
(k + 1)(k + 2)
2

✔ True for k + 1

Conclusion:
The formula is true for all n ≥ 1.

Example 2: Sum of First nOdd Numbers
Question:
Prove that the sum of the first nodd numbers is:

1 + 3 + 5 + ⋯ + (2n − 1) = n
2

Solution:
Base Case (n = 1)

1 = 1
2

✔ True
Inductive Hypothesis

1 + 3 + ⋯ + (2k − 1) = k
2

Inductive Step

1 + 3 + ⋯ + (2k − 1) + (2k + 1)
= k
2 + (2k + 1)
= (k + 1)
2

✔ True
Conclusion:
The statement holds for all n ≥ 1.

Example 3: Divisibility Property
Question:
Prove that 7

n − 1is divisible by 6 for all natural numbers n.

Solution:
Base Case (n = 1)

7
1 − 1 = 6

✔ Divisible by 6
Inductive Hypothesis

7
k − 1 = 6mfor some integer m

Inductive Step

7
k+1 − 1 = 7 ⋅ 7
k − 1

= 7(7
k − 1) + 6
= 7(6m) + 6 = 6(7m + 1)

✔ Divisible by 6
Conclusion:
The statement is true for all n ≥ 1.

Example 4: Power of 2 Inequality
Question:
Prove that:

2
n ≥ n + 1for all n ≥ 1

Solution:
Base Case (n = 1)

2
1 = 2 ≥ 2

✔ True
Inductive Hypothesis

2
k ≥ k + 1

Inductive Step

2
k+1 = 2 ⋅ 2
k
≥ 2(k + 1)
= 2k + 2 ≥ k + 2

✔ True

Conclusion:
The inequality holds for all n ≥ 1.

Example 5: Sum of a Geometric Sequence
Question:
Prove that:

1 + 2 + 4 + ⋯ + 2
n = 2
n+1 − 1

Solution:
Base Case (n = 1)

1 + 2 = 3
2
2 − 1 = 3

✔ True

Inductive Hypothesis

1 + 2 + 4 + ⋯ + 2
k = 2
k+1 − 1

Inductive Step

1 + 2 + ⋯ + 2
k + 2
k+1

= (2
k+1 − 1) + 2
k+1

= 2
k+2 − 1

✔ True
9.2 Proof by Contrapositive and Contradiction
Proof by Contrapositive and Proof by Contradiction
Logical proof techniques are essential tools in mathematics and computer science. Two powerful
indirect proof methods are proof by contrapositive and proof by contradiction. These methods
are particularly useful when direct proof is difficult or unclear.
9.1 Proof by Contrapositive
9.1.1 Logical Background
A statement of the form:

P ⇒ Q

means “If P is true, then Q is true.”
The contrapositive of this statement is:

¬Q ⇒ ¬P

which reads “If Q is false, then P is false.”

A statement and its contrapositive are logically equivalent.
Proving one automatically proves the other.

9.1.2 Why Use the Contrapositive?
i. Sometimes ¬Q ⇒ ¬Pis easier to prove than P ⇒ Q
ii. Common in proofs involving:
a. Divisibility
b. Inequalities
c. Set membership
9.1.3 General Steps (Contrapositive)
i. Identify the statement P ⇒ Q
ii. Write its contrapositive ¬Q ⇒ ¬P
iii. Assume ¬Qis true
iv. Deduce ¬P
v. Conclude that the original statement is true

Examples: Proof by Contrapositive (5 Questions)

Example 1
Statement:
If a number is divisible by 6, then it is divisible by 3.
Solution (Contrapositive):
Step 1: Original statement

P ⇒ Q

Step 2: Contrapositive
If a number is not divisible by 3, then it is not divisible by 6.
Step 3: Assume number is not divisible by 3
⇒ It cannot be written as 3k
Step 4: Since 6 = 2 × 3, a number divisible by 6 must be divisible by 3
⇒ Contradiction

Conclusion:

The statement is true

Example 2
Statement:
If n
2
is even, then nis even.
Solution:
Contrapositive:
If nis odd, then n
2
is odd.

Proof:
Let n = 2k + 1(odd)
n
2 = (2k + 1)
2 = 4k
2 + 4k + 1 = 2(2k

2 + 2k) + 1

Thus, n
2
is odd.

Statement proved

Example 3
Statement:
If a graph is complete, then it is connected.
Solution:
Contrapositive:
If a graph is not connected, then it is not complete.
Proof:
i. A disconnected graph has at least two vertices with no path between them
ii. Therefore, no edge exists between some vertex pairs
iii. Hence, the graph cannot be complete
Example 4
Statement:
If a real number is irrational, then it cannot be expressed as a ratio of integers.

Solution:
Contrapositive:
If a number can be expressed as a ratio of integers, then it is rational.
Proof:
This follows directly from the definition of rational numbers.
Statement holds

Example 5
Statement:
If a function is differentiable at a point, then it is continuous at that point.
Solution:
Contrapositive:
If a function is not continuous, then it is not differentiable.
Proof:
Differentiability implies continuity; lack of continuity prevents differentiability.

Statement is true

9.2 Proof by Contradiction

9.2.1 Concept
In proof by contradiction, we:
i. Assume the given statement is false
ii. Use logical reasoning to derive a contradiction
iii. Conclude the original statement must be true

9.2.2 Why Use Contradiction?
Effective when:
a. Proving impossibility
b. Establishing uniqueness
c. Proving irrationality
ii. Common in number theory and logic

9.2.3 General Steps (Contradiction)
1. Assume the negation of the statement
2. Apply logical reasoning
3. Reach a contradiction (false or impossible result)
4. Reject the assumption
5. Accept the original statement as true

Examples: Proof by Contradiction (5 Quiz)
Example 6
Statement:

√2 is irrational

Solution:
Step 1: Assume √2
is rational
⇒ √2 =
a
b
, where a, b have no common factors
Step 2: Square both sides

2 =
a
2
b
2 ⇒ a
2 = 2b
2

Step 3: a
2
is even ⇒ ais even

⇒ Let a = 2k
Step 4: Substitute

(2k)
2 = 2b
2 ⇒ b
2 = 2k
2

⇒ bis even
Contradiction:
Both a and b are even, contradicting the assumption
√2 is irrational

Example 7
Statement:
There is no smallest positive rational number.
Solution:
Assume: There exists a smallest positive rational number r
Then:

r
2
< r

and r
2
is also positive and rational
Contradiction:
rcannot be the smallest

Statement is true

Example 8
Statement:
An integer cannot be both even and odd.
Solution:
Assume:
nis both even and odd
⇒ n = 2kand n = 2m + 1
Equating:

2k = 2m + 1
⇒ Left side is even, right side is odd — impossible
Contradiction reached

Example 9
Statement:
There are infinitely many prime numbers.
Solution:
Assume: There are finitely many primes:
p1
, p2
,... , pn

Construct:

N = p1p2 ⋯ pn + 1

Then Nis not divisible by any listed prime
Contradiction:
Nmust be prime or divisible by another prime

Infinitely many primes exist

Example 10
Statement:
If x
2 = 0, then x = 0.
Solution:
Assume:
x
2 = 0but x ≠ 0
But:

x
2 > 0 if x ≠ 0

Contradiction:
Cannot have x
2 = 0

x = 0

10. Permutations and Combinations
10.1 Permutations
Arrangements where order matters:

nPr =
n!
(n − r)!

10.1 Permutations
10.1.1 Meaning of Permutation
A permutation is an arrangement of objects where the order of arrangement is important.
If changing the order produces a different outcome, then the problem involves permutations.
Simple Illustration
i. Arranging students in a line
ii. Assigning positions such as 1st, 2nd, and 3rd
iii. Forming passwords or PIN codes
For example:
ABC and ACB are different arrangements → permutation

10.1.2 Permutation of All Objects
If there are n distinct objects, the number of ways to arrange all of them is:
n! = n × (n − 1) × (n − 2) × ⋯ × 1

Example:
Number of ways to arrange 4 books:

4! = 4 × 3 × 2 × 1 = 24

10.1.3 Permutation of r Objects Taken from n Objects
When selecting and arranging r objects from n distinct objects, the number of permutations is:

nPr =
n!
(n − r)!

Where:
i. n= total number of objects
ii. r= number of objects selected
iii. != factorial
10.1.4 When to Use Permutations
Use permutations when:
i. Order matters
ii. There are positions or rankings
iii. Objects are distinct

Example Quiz with Step-by-Step Solutions
Question 1: Simple Permutation of All Objects
Question:
In how many ways can 5 different books be arranged on a shelf?
Solution:
Step 1: Identify total objects

n = 5

Step 2: Use factorial formula

5! = 5 × 4 × 3 × 2 × 1 = 120

Answer:

120 arrangements

Question 2: Permutation of r Objects from n
Question:
How many different 3-letter codes can be formed from 7 distinct letters, if no letter is repeated?
Solution:
Step 1: Identify values

n = 7, r = 3

Step 2: Apply permutation formula
7P3 =
7!
(7 − 3)!

Step 3: Simplify

7P3 =
7!
4!
= 7 × 6 × 5 = 210

Answer:

210 different codes

Question 3: Selection with Positions
Question:
From 8 students, how many ways can a president, vice-president, and secretary be chosen?
Solution:
Step 1: Recognize that order matters
(Each role is different)
Step 2: Identify values

n = 8, r = 3

Step 3: Use permutation formula
8P3 =
8!
5!
= 8 × 7 × 6 = 336

Answer:

336 possible selections

Question 4: Arrangement of Digits
Question:
How many 3-digit numbers can be formed using digits 1, 2, 3, 4, and 5, without repetition?
Solution:
Step 1: Identify values

n = 5, r = 3

Step 2: Apply formula

5P3 =
5!
2!

Step 3: Calculate

5 × 4 × 3 = 60

Answer:

60 three-digit numbers

Question 5: Seating Arrangement
Question:
In how many ways can 4 people be seated on 4 chairs in a row?
Solution:
Step 1: Total objects

n = 4

Step 2: Arrange all objects

4! = 4 × 3 × 2 × 1 = 24

Answer:

24 seating arrangements

10.2 Combinations
Selections where order does not matter:
nCr =
n!
r! (n − r)!

10.2.1 Meaning of Combinations
A combination is a selection of objects from a larger group where the order of selection does
not matter.
Example:
i. Selecting 3 students from a class of 10 → Combination
ii. Arranging 3 students in seats → Permutation
In combinations:
i. Selecting A, B, C is the same as selecting C, B, A
ii. Only which objects are chosen matters, not the order

10.2.2 Formula for Combinations
The number of ways of selecting r objects from n distinct objects is given by:

nCr = (
n
r
) =
n!
r! (n − r)!

Where:
i. n= total number of objects
ii. r= number of objects selected
iii. !(factorial) means:

n! = n(n − 1)(n − 2) ⋯ 1

10.2.3 Why the Formula Works (Intuition)
1. First count all possible arrangements (permutations):
P(n, r) =
n!
(n − r)!

2. Since order does not matter, each group of robjects is counted r!times.
3. Divide by r!to remove repetition:
nCr =
P(n, r)
r!
=
n!
r! (n − r)!

10.2.4 Important Properties of Combinations
1. Symmetry Property

(
n
r
) = (
n
n − r
)

2. Boundary Conditions

(
n
0
) = (
n
n
) = 1

3. Relation with Permutations

P(n, r) = r! × C(n, r)

Example Quiz with Solutions
Example 1: Simple Combination Calculation
Question:
How many ways can 3 books be selected from 8 different books?
Solution:
Given:
i. n = 8
ii. r = 3
Formula:

8C3 =
8!
3! (8 − 3)!

Step-by-step:

8! = 8 × 7 × 6 × 5!
3! = 3 × 2 × 1
(8 − 3)! = 5!

Substitute:

8C3 =
8 × 7 × 6 × 5!
3 × 2 × 1 × 5!

Cancel 5!:

8C3 =
8 × 7 × 6
6
= 56

Answer:

56

Example 2: Committee Selection
Question:
A committee of 4 people is to be chosen from 10 candidates. How many different committees
are possible?

Solution:
Since order does not matter → Combination
10C4 =
10!
4! 6!

Simplify:

10C4 =
10 × 9 × 8 × 7
4 × 3 × 2 × 1
=
5040
24 = 210

Answer:

210
Example 3: Using the Symmetry Property
Question:
Evaluate 12C10.
Solution:
Using the symmetry property:

12C10 = 12C(12 − 10) = 12C2

Now compute:

12C2 =
12 × 11
2 × 1
= 66

Answer:

66
Example 4: Combination with Zero Selection
Question:
How many ways are there to select 0 students from a class of 15 students?
Solution:
By definition:

15C0 = 1

Reason:
There is only one way to select nothing (choose no one).

Answer:

1
Example 5: Selecting Male and Female Students
Question:
A group consists of 5 boys and 4 girls. How many ways can a team of 3 students be selected
containing 2 boys and 1 girl?
Solution:
Step 1: Select boys

5C2 =
5 × 4
2 × 1
= 10

Step 2: Select girls

4C1 = 4

Step 3: Use multiplication principle

Total ways = 10 × 4 = 40

Answer:

40

11. Graph Theory
11.1 Graphs
11.1 Graphs – Introduction
A graph is a mathematical representation of a set of objects and their relationships. Graphs are
widely used in computer science, engineering, transport networks, social networks, and
data modeling.
Components of a Graph
A. Vertices (Nodes):
i. Points representing objects, locations, or entities.
ii. Denoted by V = {v1
, v2
, . . . , vn}

B. Edges (Links):
i. Connections between vertices representing relationships or interactions.
ii. Denoted by E = {e1
,e2
, . . . ,em}

Example:

In a social network graph:
i. Vertices = people
ii. Edges = friendships

Types of Graphs
(a) Undirected Graph
i. Edges have no direction.
ii. If vertex vi

is connected to vertex vj

, we write:
(vi
, vj
) = (vj
, vi)

iii. Example: Friendship between two people (mutual)
Diagram:
v1 --- v2
|
v3
(b) Directed Graph (Digraph)
i. Edges have direction, represented by arrows.
ii. If vertex vipoints to vj

, it does not imply vjpoints to vi
.
iii. Example: One-way streets, follower relationships on social media
Diagram:
v1 → v2
↑
v3
11.2 Terminology
Term Meaning
Degree of a vertex Number of edges incident on it
In-degree Number of incoming edges (digraph)
Out-degree Number of outgoing edges (digraph)
Path Sequence of vertices connected by edges
Circuit Path that starts and ends at the same vertex

Cycle Circuit with no repeated vertices except start/end
Connected graph Path exists between every pair of vertices
Disconnected graph At least one pair of vertices has no path

11.3 Representations of Graphs
1. Adjacency List:

Each vertex stores a list of neighboring vertices.

2. Adjacency Matrix:

Square matrix Aof size n × n
Aij = {
1, if there is an edge from vi
to vj

0, otherwise

3. Incidence Matrix:
i. Rows = vertices
ii. Columns = edges
iii. Entry = 1 if vertex is incident to the edge, else 0

11.4 Applications of Graphs
i. Computer networks
ii. Transport and logistics networks
iii. Social networks
iv. Scheduling problems
v. Electrical circuits (nodes & connections)
11.5 Example Quiz with Solutions

Example 1: Identifying Graph Types
Question:
Given a network of roads connecting cities:
i. City A → City B (one-way)
ii. City B → City C (two-way)
iii. City C → City A (one-way)

Determine the type of graph and its edges.
Solution:
A. Identify edges:
i. A → B (directed)
ii. B ↔ C (both directions → can be represented as two directed edges: B → C, C →
B)
iii. C → A (directed)
B. Graph type:

Directed graph (digraph) because edges have direction.

Answer:
i. Type: Directed graph
ii. Edges: A→B, B→C, C→B, C→A

Example 2: Drawing an Undirected Graph
Question:
Draw an undirected graph for vertices V = {1,2,3,4}with edges E = {(1,2), (2,3), (3,4), (4,1)}.
Solution:
i. Vertices: 1, 2, 3, 4
ii. Connect edges as listed
Diagram:
1 --- 2
| |
4 --- 3
Answer:
Square-shaped undirected graph connecting all four vertices.

Example 3: Adjacency Matrix
Question:
Construct the adjacency matrix for the undirected graph in Example 2.
Solution:
Vertices: 1, 2, 3, 4

Matrix A(1 if connected, 0if not):

A = [
0 1 0 1
1 0 1 0
0 1 0 1
1 0 1 0
]

0101101001011010
Answer:

[
0 1 0 1
1 0 1 0
0 1 0 1
1 0 1 0
]

0101101001011010

Example 4: Calculating Vertex Degrees
Question:
Consider the following undirected graph:
Vertices V = {A, B, C,D}, edges E = {(A, B), (A, C), (B, C), (C,D)}
Find the degree of each vertex.
Solution:
Degree of a vertex = number of incident edges
Vertex Incident edges Degree
A (A,B), (A,C) 2
B (A,B), (B,C) 2
C (A,C), (B,C), (C,D) 3
D (C,D) 1
Answer:
Degrees: A=2, B=2, C=3, D=1

Example 5: Identifying Paths and Circuits
Question:
Given the graph in Example 4, determine:
1. A path from A to D
2. Any circuit in the graph

Solution:
1. Path from A to D:
o A → C → D
2. Circuit (starts and ends at same vertex, edges used once per path):

A → B → C → A

Answer:
i. Path A to D: A → C → D
ii. Circuit: A → B → C → A

11.2 Subgraphs, Paths, and Circuits
11.2.1 Subgraphs
Definition
A subgraph G
′ = (V
′
, E
′
)of a graph G = (V,E)is a graph formed by:

i. V
′ ⊆ V(a subset of vertices)
ii. E
′ ⊆ E(edges connecting vertices in V
′
)

Key Points
i. Subgraphs inherit edges from the original graph
ii. A spanning subgraph contains all vertices of the original graph but may have fewer
edges
iii. Useful for analyzing parts of a network
Example:
Graph Ghas vertices V = {A, B, C,D}and edges E = {AB, AC, BD, CD}.
A subgraph could have V

′ = {A,B, C}and E

′ = {AB, AC}

11.2.2 Paths
Definition
A path in a graph is a sequence of vertices such that each consecutive pair is connected by an
edge.
Key Points
i. Path length = number of edges in the sequence
ii. Simple path: No repeated vertices

iii. Directed path: Follows the direction of edges in a digraph
Example:
i. Path: A → B → D
ii. Length = 2 edges
11.2.3 Circuits
Definition
A circuit is a path that starts and ends at the same vertex.
Key Points
i. Circuits may repeat vertices or edges, but in a simple circuit, no edge is repeated
ii. A circuit is called a closed path
Example:
i. Circuit: A → B → C → A
ii. Length = 3 edges

11.2.4 Cycles
Definition
A cycle is a closed path with no repeated vertices or edges except the start/end vertex.
Key Points
i. Every cycle is a circuit, but not every circuit is a cycle
ii. Important in detecting loops in networks, circuits, and routing
Example:
i. Cycle: A → B → C → A
ii. Simple, with no repeated vertices or edges

11.2.5 Illustrative Figure (Conceptual)
Graph G:
Vertices: A, B, C, D
Edges: AB, AC, BD, CD

Subgraph Example:
Vertices: A, B, C

Edges: AB, AC

Path Example: A → C → D
Circuit Example: A → B → D → A
Cycle Example: B → D → C → B

11.2.6 Worked Example Quiz
Question 1: Identify Subgraphs
Question:
Given a graph Gwith V = {1,2,3,4,5}and E = {12,13,24,35}, list all subgraphs containing
vertices {1
, 2
, 3}.
Solution:
Step 1: Consider vertices V

′ = {1,2,3}

Step 2: Identify edges connecting these vertices: 12,13
Step 3: Subgraph G
′ = (V
′
, E
′
)with E
′ = {12,13}

Answer:
Subgraph: V

′ = {1,2,3},E

′ = {12,13}

Question 2: Determine Path Length
Question:
In a graph with vertices A, B, C,Dand edges AB,BC,CD, find the length of the path A → B →
C → D.
Solution:
Step 1: Count edges along the path: AB, BC, CD
Step 2: Number of edges = 3
Answer:
Path length = 3 edges

Question 3: Find a Circuit
Question:
For a graph with vertices P, Q,R, Sand edges PQ, QR, RS, SP, PR, identify a circuit.

Solution:
Step 1: Circuit starts and ends at the same vertex
Step 2: Example circuit: P → Q → R → S → P
Answer:
Circuit: P → Q → R → S → P
Question 4: Identify a Cycle
Question:
Given vertices X, Y, Zand edges XY, YZ, ZX, determine a cycle.
Solution:
Step 1: Start at X
Step 2: Move along edges: X → Y → Z → X
No vertex repeated except start/end
Answer:
Cycle: X → Y → Z → X
Question 5: Distinguish Path, Circuit, and Cycle
Question:
Graph with vertices A, B, C,Dand edges AB, BC, CD,DA, AC.
Classify the following sequences:
i. A → B → C
ii. A → B → C → D → A
iii. A → C → D → A
Solution:
i. A → B → C→ Path (not closed)
ii. A → B → C → D → A→ Circuit (closed, repeats start/end)
iii. A → C → D → A→ Cycle (closed, no repeated vertices except start/end)
Answer:
i. 1 → Path
ii. 2 → Circuit
iii. 3 → Cycle

11.3 Connectivity

11.1 Definition
A graph G = (V, E)is connected if there exists at least one path between every pair of
vertices.
i. A path is a sequence of edges connecting two vertices.
ii. If any vertex cannot be reached from another, the graph is disconnected.
Key Points:
i. Applies to undirected graphs.
ii. Connectivity ensures communication between all nodes in networks.

1.2 Example Illustration (Undirected Graph)
Vertices: A, B, C, D
Edges: {A-B, B-C, C-D}
A. Path exists between:
i. A and B → direct edge
ii. A and C → A-B-C
iii. A and D → A-B-C-D
B. Graph is connected

2. Directed Graphs and Connectivity
Directed graphs (digraphs) have edges with a direction (arrows).
2.1 Strongly Connected
A directed graph is strongly connected if there exists a directed path from every vertex to
every other vertex.
For every pair u, v ∈ V:

u → vandv → u

2.2 Weakly Connected
A directed graph is weakly connected if:
i. Replacing all directed edges with undirected edges makes the graph connected.
ii. In other words, there is some path ignoring direction, but not necessarily along the
arrows.

2.3 Illustrative Examples
Strongly connected digraph:
Vertices: A, B, C
Edges: A→B, B→C, C→A
Path exists in both directions for all pairs → strongly connected
Weakly connected digraph:
Vertices: A, B, C
Edges: A→B, B→C
i. A path exists if we ignore directions → weakly connected
ii. Cannot travel from C→A following the arrows → not strongly connected

3. Why Connectivity Matters
i. Network design: Ensure all nodes can communicate.
ii. Transport networks: Ensure routes connect all cities.
iii. Computer networks: Data packets can reach all devices.
iv. Social networks: Strong connections allow information to flow in all directions.

4. Example Quiz with Solutions
Question 1: Connected Undirected Graph
Question:
Determine if the following undirected graph is connected:
i. Vertices: V = {A, B, C,D}
ii. Edges: E = {A − B, B − C}
Solution:
i. Check paths:
a. A → B (direct)
b. A → C (via B)
c. A → D → No edge connecting D
ii. Conclusion: D cannot be reached from others
Answer:

Graph is disconnected.

Question 2: Strong Connectivity in a Directed Graph
Question:
Consider the digraph:
i. Vertices: V = {A, B, C}
ii. Edges: A → B, B → C, C → A
Is this graph strongly connected?
Solution:
Check paths for each pair:
a. A → B → exists
b. B → A → B→C→A exists
c. C → B → C→A→B exists

Answer:

Graph is strongly connected.

Question 3: Weak Connectivity in a Directed Graph
Question:
Vertices: V = {A, B, C,D}
Edges: A → B, B → C, C → D
Determine if the graph is weakly or strongly connected.
Solution:
i. Strong connectivity:

Can we go from D → A following directions? No → not strongly connected

ii. Weak connectivity:
a. Replace directed edges with undirected: {A-B, B-C, C-D}
b. Check paths:

A ↔ B ↔ C ↔ D → all connected

Answer:

Graph is weakly connected.

Question 4: Finding Components in a Disconnected Graph
Question:
Vertices: V = {1,2,3,4,5}
Edges: E = {1 − 2,2 − 3,4 − 5}
How many connected components exist?
Solution:
i. Component 1: {1,2,3} → connected via edges
ii. Component 2: {4,5} → connected via edge
iii. No connections between components
Answer:

Number of connected components = 2

Question 5: Strong Connectivity Check for a Digraph
Question:
Vertices: V = {X, Y, Z}
Edges: X → Y, Y → Z
Is the digraph strongly connected? If not, is it weakly connected?
Solution:
A. Strong connectivity:
i. X → Z → exists
ii. Z → X → does not exist along edges → not strongly connected
B. Weak connectivity:
i. Replace edges with undirected: {X-Y, Y-Z}
ii. X ↔ Y ↔ Z → connected
Answer:

Not strongly connected, but weakly connected.

11.4 Adjacency and Incidence Matrices
. Introduction
In graph theory, matrices are used to represent graphs numerically. They are particularly
useful for:

i. Computers and algorithms
ii. Analyzing connectivity
iii. Solving network problems
Two primary matrices are:
i. Adjacency Matrix (A)
ii. Incidence Matrix (B)

2. Adjacency Matrix
2.1 Definition
An adjacency matrix is a square matrix that shows which vertices are adjacent (connected
by an edge) in a graph.
For a graph with n vertices:

A = [aij],i,j = 1,2,... , n
aij = {
1, if there is an edge from vertex vi
to vj

0, otherwise

Properties:
i. For undirected graphs, Ais symmetric
ii. For directed graphs, Amay not be symmetric
iii. Diagonal entries: 1 if there is a self-loop, otherwise 0

2.2 Example Graph
Consider an undirected graph:
Vertices: V = {v1
, v2
, v3
}
Edges: E = {(v1
, v2
), (v2
, v3
)}

Adjacency Matrix:

A = [
0 1 0
1 0 1
0 1 0
]

010101010
Explanation:
i. a12 = 1because v1

is adjacent to v2

ii. a23 = 1because v2

is adjacent to v3

iii. Other entries are 0

2.3 Example Quiz (Adjacency Matrix)
Q1: Construct the adjacency matrix for a graph with vertices V = {A, B, C,D}and edges E =
{(A, B), (B, C), (C,D)}.
Solution:

A = [
0 1 0 0
1 0 1 0
0 1 0 1
0 0 1 0
]

0100101001010010

Q2: Determine if the adjacency matrix below represents an undirected graph:

A = [
0 1 0
0 0 1
1 0 0
]

001100010
Solution:
i. Check symmetry: a12 ≠ a21→ Not symmetric
ii. Answer: Directed graph
Q3: How many edges are in a simple undirected graph with adjacency matrix:

A = [
0 1 1
1 0 1
1 1 0
]

011101110
Solution:
i. Sum of all 1’s = 6
ii. Each edge counted twice → Number of edges = 6/2 = 3
iii. Answer: 3 edges
Q4: Find if there is a self-loop in the graph:
A = [
1 0 1
0 0 1
1 1 0
]

101001110
Solution:

i. Check diagonal entries: a11 = 1→ Self-loop at vertex 1
ii. Answer: Self-loop exists at vertex 1

Q5: For a directed graph with adjacency matrix:
A = [
0 1 0
0 0 1
1 0 0
]

001100010
Question: List the edges in the graph.
Solution:
i. a12 = 1→ Edge v1 → v2
ii. a23 = 1→ Edge v2 → v3
iii. a31 = 1→ Edge v3 → v1
Answer: E = {v1 → v2
, v2 → v3
, v3 → v1
}

i. Incidence Matrix
3.1 Definition
An incidence matrix shows the relationship between vertices and edges.
For a graph with nvertices and medges:

B = [bij], i = 1,... , n, j = 1, ... , m
bij = {
1, if vertex vi

is incident to edge ej

0, otherwise

Properties:
i. Rows → vertices
ii. Columns → edges
iii. For undirected graphs, each edge column has exactly two 1’s (vertices it connects)
iv. For directed graphs: +1 for source, –1 for destination (sometimes used)

3.2 Example Graph
Vertices: V = {v1
, v2
, v3
}
Edges: E = {e1 = (v1
, v2
),e2 = (v2
, v3
)}

Incidence Matrix:

B = [
1 0
1 1
0 1
]

110011
Explanation:
i. Column 1 (edge v1 − v2

) → row 1 & 2 = 1

ii. Column 2 (edge v2 − v3

) → row 2 & 3 = 1

3.3 Example Quiz (Incidence Matrix)
Q1: Construct the incidence matrix for graph:
Vertices: V = {A, B, C}
Edges: E = {e1 = (A, B),e2 = (B,C),e3 = (C, A)}
Solution:

B = [
1 0 1
1 1 0
0 1 1
]

110011101

Q2: How many edges are incident on vertex B?
B = [
1 0 1
1 1 0
0 1 1
]

110011101
Solution:
i. Row 2 (vertex B) → entries: 1,1,0 → sum = 2
ii. Answer: 2 edges incident on B

Q3: Determine if edge e2connects vertices B and C.
Solution:
i. Column 2 (edge e2

) → rows with 1: row 2 (B), row 3 (C)

ii. Answer: Yes, e2 = B − C

Q4: Find the vertex with the highest degree:
B = [
1 0 1 0
1 1 0 1
0 1 1 1
]

110011101011
Solution:
i. Degree = sum of row entries
ii. Vertex A: 1+0+1+0=2
iii. Vertex B: 1+1+0+1=3
iv. Vertex C: 0+1+1+1=3
v. Answer: Vertices B and C (degree 3)

Q5: Convert the incidence matrix to an adjacency matrix:

B = [
1 0 1
1 1 0
0 1 1
]

110011101
Solution:
i. Column 1 → vertices 1 & 2 → adjacency: A-B
ii. Column 2 → vertices 2 & 3 → adjacency: B-C
iii. Column 3 → vertices 1 & 3 → adjacency: A-C
Adjacency matrix:

A = [
0 1 1
1 0 1
1 1 0
]

011101110

11.5 Transport Networks
11.5.1 Introduction
Transport networks are systems used to move people, goods, or information from one
location to another.
Examples:
i. Road networks (cities connected by roads)
ii. Railway systems

iii. Airline routes
iv. Internet or communication networks
v. Supply chains (factories, warehouses, and shops)
Key Idea:
Transport networks can be modeled as graphs, which allows us to analyze connectivity,
optimize routes, and solve logistical problems.

11.5.2 Graph Representation of Transport Networks
Vertices (Nodes): Represent locations such as:
i. Cities
ii. Railway stations
iii. Airports
iv. Warehouses
Edges (Links): Represent routes or connections such as:
v. Roads, railways, or air routes
vi. Communication lines
vii. Shipping lanes
Weighted edges: Sometimes edges carry weights representing:
viii. Distance
ix. Travel time
x. Cost
xi. Capacity
Example:
A road network connecting four cities A, B,C,Dcan be represented as:
Edge Distance (km)
A–B 50
B–C 30
C–D 40
A–D 100
This can be drawn as a graph and analyzed for shortest paths, connectivity, or flow optimization.

11.5.3 Directed vs. Undirected Transport Networks
i. Undirected network: Roads or railways allow travel in both directions.
ii. Directed network: One-way streets or one-way communication lines.
Directed graphs are particularly useful for:
i. One-way traffic systems
ii. Flow of goods in supply chains
iii. Packet routing in communication networks
11.5.4 Network Metrics
Key aspects of a transport network that can be analyzed:
1. Path: A sequence of edges connecting two vertices.
2. Circuit / Cycle: A path that starts and ends at the same vertex.
3. Connectivity: Whether there is a path between all pairs of nodes.
4. Shortest path: The path with the minimum total weight (distance, time, or cost).
5. Adjacency matrix: Representation of direct connections between nodes.
6. Incidence matrix: Representation of which edges connect to which vertices.
11.5.5 Applications
A. Road networks
i. Optimize travel routes
ii. Plan traffic control
B. Communication systems
i. Analyze connectivity
ii. Design resilient networks
C. Supply chains
i. Minimize cost
ii. Ensure timely delivery
D. Urban planning
i. Place facilities to optimize access

11.5.6 Example Quiz with Solutions
Question 1: Constructing a Transport Network Graph
Problem:
Cities A, B,C,Dare connected as follows:
A–B (50 km), A–C (60 km), B–C (40 km), C–D (30 km)
Draw a graph and list its vertices and edges.
Solution:
Step 1: Vertices

V = {A,B, C,D}

Step 2: Edges

E = {A − B, A − C, B − C, C − D}

Step 3: Draw the graph
i. Place vertices A, B, C, D
ii. Connect edges with distances as labels
Answer:
Graph with 4 vertices and 4 edges as above.

Question 2: Adjacency Matrix
Problem:
Using the same network as Question 1, construct the adjacency matrix assuming distances are
weights.
Solution:
Vertices: A, B, C,D

Adjacency Matrix A = [

0 50 60 0
50 0 40 0
60 40 0 30
0 0 30 0
]

050600500400604003000300
i. Entry Aij= distance if connected, 0 otherwise
ii. Symmetric because it is undirected

Answer:
The adjacency matrix is as above.
Question 3: Shortest Path Using Dijkstra’s Algorithm
Problem:
Find the shortest path from city A to city D using the graph from Question 1.
Solution:
A. Initialize distances from A:

A = 0,B = ∞, C = ∞,D = ∞

B. Update neighbors of A: B = 50, C = 60
C. Next closest: B (50)
Update C via B: 50 + 40 = 90 → C remains 60 (shorter)
D. Next closest: C (60)

Update D via C: 60 + 30 = 90

E. D = 90
Shortest Path:

A → C → D(Distance 90 km)

Question 4: Determine Connectivity
Problem:
Check if the network from Question 1 is connected.
Solution:
A. A path exists between all pairs of cities:
o A–B, A–C, B–C, C–D
B. Every vertex can be reached from any other
Answer:

The network is connected.

Question 5: Weighted Sum of Paths
Problem:
A delivery truck must travel from A → B → C → D. Compute the total distance.
Solution:
• A–B = 50 km
• B–C = 40 km
• C–D = 30 km
Step 1: Sum distances

50 + 40 + 30 = 120 km

Answer:

Total distance = 120 km