# 1. Decimal to Binary


To convert a Decimal number to **any** base, we **REPEATEDLY divide** the decimal number by that base and record the **remainders** until the quotient is **0**. The result is the sequence of remainders, read from **bottom to top**.

**Method:** So, to convert a **Decimal** number to **binary**, we repeatedly divide the decimal number by **2** and record the remainders from bottom to top.

<div class="steps">
   <div class="step"><strong>Step 1:</strong> Divide the decimal number by 2</div>
   <div class="step"><strong>Step 2:</strong> Write down the remainder (0 or 1)</div>
   <div class="step"><strong>Step 3:</strong> Divide the quotient by 2</div>
   <div class="step"><strong>Step 4:</strong> Repeat until quotient is 0</div>
   <div class="step"><strong>Step 5:</strong> Write remainders from bottom to top</div>
</div>

**Example 1:** **Convert 45₁₀ to Binary**

<div class="example">
    <!-- <h4>Example 1: Convert 45₁₀ to Binary</h4> -->
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