# Logic Gates and Boolean Algebra

Digital circuits are built using fundamental switching devices called **Logic Gates**. These gates perform basic logic operations on one or more binary inputs and produce a single binary output.

## The Three Basic Logic Gates



|**Gate Name**|**Operation**|**Boolean Expression**|**Graphic Symbol**|**Truth Table**|
|:-----|:-----|:-------|:------|:------|
|**AND**| Output is HIGH only if all inputs are HIGH. (Logical Multiplication) | Y = A . B (or Y = AB) | empty | $\begin{array}{ |
|**OR**| Output is HIGH if any input is HIGH. (Logical Addition) | Y = A + B | empty | $\begin{array}{ |
|**NOT**| Output is the inverse of the input. (Inversion/Complement) | Y = incomplete | empty | $\begin{array}{ |

## Universal Gates (NAND and NOR)

These gates are called **Universal** because any other logic function (including AND, OR, and NOT) can be constructed solely by using multiple instances of just one of them.

**1. NAND Gate (NOT-AND)**

Operation: The inverse of an AND gate. The output is LOW only if all inputs are HIGH.

Expression: 

**2. NOR Gate (NOT-OR)**

Operation: The inverse of an OR gate. The output is HIGH only if all inputs are LOW.

Expression: 

## Special Gates (XOR and XNOR)

**1. XOR Gate (Exclusive-OR)**

Operation: The output is HIGH if the inputs are different. It's an odd-number-of-ones detector.

Expression: 

**2. XNOR Gate (Exclusive-NOR)**

Operation: The output is HIGH if the inputs are the same (equal). It's a binary comparator.

Expression: 

## Boolean Algebra

**Boolean Algebra** is a mathematical system for analyzing and simplifying digital (logic) circuits. It was developed by George Boole in the mid-19th century and is built on only two states: True (1) and False (0).

### Key Laws and Theorems

These laws are essential for simplifying complex circuits and minimizing the number of gates required.

|**Law/Theorem**|**OR/Addition (Dual)**|**AND/Multiplication (Dual)**|
|:-------|:-----|:-------|
| Identity | 
| Null | 
| Idempotent | 
| Complement | 
| Involution (Double Inversion) | 
| Commutative | 
| Associative | 
| Distributive | (Rarely used)
| Absorption | 


### De Morgan's Theorems

De Morgan's theorems are the most powerful tool for simplifying expressions that involve complements of sums or products.

**1.** Complement of a sum: The complement of a sum is equal to the product of the complements.

**2.** Complement of a product: The complement of a product is equal to the sum of the complements.

**Example of Algebraic Simplification**

**Problem**: Simplify the Boolean expression 

**Solution**:

**1.** Apply De Morgan's Theorem to the second term:

**2.** Rearrange the terms:

**3.** Use the Distributive Law/Absorption Property . A more general form is . Here, let  and .

The sub-expression  can be factored using :

**4.** Substitute back:

The original circuit, requiring two AND gates, one NOT gate, one NAND gate, and one OR gate, can be replaced by a single NOR gate ( is equivalent to  by De Morgan's) or an OR gate with inverted inputs.
