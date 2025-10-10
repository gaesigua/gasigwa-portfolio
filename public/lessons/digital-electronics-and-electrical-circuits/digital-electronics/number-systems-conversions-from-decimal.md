# 🔄Converting FROM DECIMAL

In this lesson, let's learn how to convert numbers from **Decimal** to other number systems (**Binary**,**Octal**,**Hexadecimal**).

Understanding these conversions is essential for computer science, programming, and digital electronics.

Let's recall what we have learned previously, the four main number systems are:

**- Binary (Base 2)**: Uses digits 0 and 1

**- Octal (Base 8)**: Uses digits 0-7

**- Decimal (Base 10)**: Uses digits 0-9

**- Hexadecimal (Base 16)**: Uses digits 0-9 and A-F

## 1. Decimal to Binary

---

To convert a Decimal number to **any** base, we **REPEATEDLY divide** the decimal number by that base and record the **remainders** until the quotient is **0**. The result is the sequence of remainders, read from **bottom to top**.

**Method:** So, to convert a **Decimal** number to **binary**, we repeatedly divide the decimal number by **2** and record the remainders from bottom to top.

<div class="steps">
   <div class="step"><strong>Step 1:</strong> Divide the decimal number by 2</div>
   <div class="step"><strong>Step 2:</strong> Write down the remainder (0 or 1)</div>
   <div class="step"><strong>Step 3:</strong> Divide the quotient by 2</div>
   <div class="step"><strong>Step 4:</strong> Repeat until quotient is 0</div>
   <div class="step"><strong>Step 5:</strong> Write remainders from bottom to top</div>
</div>

<div class="example">
    <h4>Example 1: Convert 45₁₀ to Binary</h4>
    <div class="calculation">
45 ÷ 2 = 22 remainder <strong>1</strong> ←
22 ÷ 2 = 11 remainder <strong>0</strong> ←
11 ÷ 2 = 5  remainder <strong>1</strong> ←
5  ÷ 2 = 2  remainder <strong>1</strong> ←
2  ÷ 2 = 1  remainder <strong>0</strong> ←
1  ÷ 2 = 0  remainder <strong>1</strong> ← (start reading from here)

<strong>Answer: 45₁₀ = 101101₂</strong>

   </div>
</div>

**Example 2:** **Convert 100₁₀ to Binary**

<div class="example">
<div class="calculation">
100 ÷ 2 = 50 remainder <strong>0</strong>
50 ÷ 2 = 25 remainder <strong>0</strong>
25 ÷ 2 = 12 remainder <strong>1</strong>
12 ÷ 2 = 6 remainder <strong>0</strong>
6 ÷ 2 = 3 remainder <strong>0</strong>
3 ÷ 2 = 1 remainder <strong>1</strong>
1 ÷ 2 = 0 remainder <strong>1</strong>

<strong>Answer: 100₁₀ = 1100100₂</strong>

</div>

</div>
<div class="example>

**Example 3:** **Convert 25<sub>10</sub> to Binary**

<div class="calculation">

| **Division** | **Quotient** | **Remainder (Bit)** |
| :----------- | :----------- | :------------------ |
| **25/2**     | **12**       | **1(LSB)**          |
| **12/2**     | **6**        | **0**               |
| **6/2**      | **3**        | **0**               |
| **3/2**      | **1**        | **1**               |
| **1/2**      | **0**        | **1(MSB)**          |

</div>
</div>

Reading the remainders bottom-up: **25<sub>10</sub> = 11001<sub>2</sub>**

## 2. Decimal to Octal

---

**Method:** Repeatedly divide the decimal number by **8** and record the remainders from bottom to top.

<div class="steps">
   <div class="step"><strong>Step 1:</strong> Divide the decimal number by 8</div>
   <div class="step"><strong>Step 2:</strong> Write down the remainder (0-7)</div>
   <div class="step"><strong>Step 3:</strong> Divide the quotient by 8</div>
   <div class="step"><strong>Step 4:</strong> Repeat until quotient is 0</div>
   <div class="step"><strong>Step 5:</strong> Write remainders from bottom to top</div>
</div>

**Example 1:** **Convert 156₁₀ to Octal**
<div class="example">
   <div class="calculation">
156 ÷ 8 = 19 remainder <strong>4</strong> ←
19  ÷ 8 = 2  remainder <strong>3</strong> ←
2   ÷ 8 = 0  remainder <strong>2</strong> ← (start reading from here)

<strong>Answer: 156₁₀ = 234₈</strong>
    </div>
    </div>

**Example 2:** **Convert 512₁₀ to Octal**
<div class="example">
    <div class="calculation">
512 ÷ 8 = 64 remainder <strong>0</strong>
64  ÷ 8 = 8  remainder <strong>0</strong>
8   ÷ 8 = 1  remainder <strong>0</strong>
1   ÷ 8 = 0  remainder <strong>1</strong>

<strong>Answer: 512₁₀ = 1000₈</strong>
    </div>
    </div>

## 3. Decimal to Hexadecimal

---

**Method:** Repeatedly divide the decimal number by **16** and record the remainders (convert 10-15 to A-F) from bottom to top.

<div class="steps">
    <div class="step"><strong>Step 1:</strong> Divide the decimal number by 16</div>
    <div class="step"><strong>Step 2:</strong> Write down the remainder (0-9, A-F)</div>
    <div class="step"><strong>Step 3:</strong> If remainder ≥ 10, convert to letter (10=A, 11=B, 12=C, 13=D, 14=E, 15=F)</div>
    <div class="step"><strong>Step 4:</strong> Divide the quotient by 16</div>
    <div class="step"><strong>Step 5:</strong> Repeat until quotient is 0</div>
    <div class="step"><strong>Step 6:</strong> Write remainders from bottom to top</div>
</div>

**Example 1:** **Convert 254₁₀ to Hexadecimal**

<div class="example">
     <div class="calculation">
254 ÷ 16 = 15 remainder <strong>14</strong> = <strong>E</strong> ←
15  ÷ 16 = 0  remainder <strong>15</strong> = <strong>F</strong> ← (start reading from here)

<strong>Answer: 254₁₀ = FE₁₆</strong>
    </div>
</div>

**Example 2:** **Convert 1000₁₀ to Hexadecimal**                    
<div class="example">
     <div class="calculation">
1000 ÷ 16 = 62 remainder <strong>8</strong>
62   ÷ 16 = 3  remainder <strong>14</strong> = <strong>E</strong>
3    ÷ 16 = 0  remainder <strong>3</strong>

<strong>Answer: 1000₁₀ = 3E8₁₆</strong>
        </div>
</div>