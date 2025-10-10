# 🔄Converting FROM OCTAL

In this lesson, let's learn how to convert numbers from **Octal** to other number systems (**Decimal**,**Binary**,**Hexadecimal**).

## 1. Octal to Decimal

---

**Method:** Multiply each digit by 8 raised to its position power (from right, starting at 0) and sum.
                    
<div class="formula"> Result = (digit × 8ⁿ) + (digit × 8ⁿ⁻¹) + ... + (digit × 8⁰) </div>
                    
<div class="steps">
    <div class="step"><strong>Step 1:</strong> Write the octal number</div>
    <div class="step"><strong>Step 2:</strong> Number positions from right to left starting with 0</div>
    <div class="step"><strong>Step 3:</strong> Multiply each digit by 8^(position)</div>
    <div class="step"><strong>Step 4:</strong> Add all the results</div>
</div>

**Example 1:** **Convert 157₈ to Decimal**                    

<div class="example">
    <div class="calculation">
Position:  2  1  0
Octal:     1  5  7

Calculation:
(1 × 8²) + (5 × 8¹) + (7 × 8⁰)
= (1 × 64) + (5 × 8) + (7 × 1)
= 64 + 40 + 7
= <strong>111</strong>

<strong>Answer: 157₈ = 111₁₀</strong>
    </div>
</div>
                    
**Example 2:** **Convert 742₈ to Decimal**

<div class="example">
    <div class="calculation">
Position:  2  1  0
Octal:     7  4  2

Calculation:
(7 × 8²) + (4 × 8¹) + (2 × 8⁰)
= (7 × 64) + (4 × 8) + (2 × 1)
= 448 + 32 + 2
= <strong>482</strong>

<strong>Answer: 742₈ = 482₁₀</strong>
    </div>
</div>
                    
## 2. Octal to Binary

---

**Method:** Convert each octal digit to its 3-bit binary equivalent.
                    
<div class="steps">
    <div class="step"><strong>Step 1:</strong> Take each octal digit separately</div>
    <div class="step"><strong>Step 2:</strong> Convert it to 3-bit binary</div>
    <div class="step"><strong>Step 3:</strong> Combine all binary groups</div>
    <div class="step"><strong>Step 4:</strong> Remove leading zeros if desired</div>
</div>

**Example 1:** **Convert 347₈ to Binary**

<div class="example">
    <div class="calculation">
Octal digits: 3    4    7

Convert each to 3-bit binary:
3₈ = 011₂
4₈ = 100₂
7₈ = 111₂

Combine: 011 100 111

<strong>Answer: 347₈ = 011100111₂ or 11100111₂</strong>
    </div>
</div>
                    
**Example 2:** **Convert 625₈ to Binary**

<div class="example">
    <div class="calculation">
Octal digits: 6    2    5

Convert each:
6₈ = 110₂
2₈ = 010₂
5₈ = 101₂

Combine: 110 010 101

<strong>Answer: 625₈ = 110010101₂</strong>
    </div>
</div>
                    

## 3. Octal to Hexadecimal

---

**Method:** Convert octal to binary first, then binary to hexadecimal.
                    
<div class="steps">
    <div class="step"><strong>Step 1:</strong> Convert octal to binary (each digit → 3 bits)</div>
    <div class="step"><strong>Step 2:</strong> Group binary into sets of 4 from right</div>
    <div class="step"><strong>Step 3:</strong> Convert each 4-bit group to hexadecimal</div>
</div>

**Example 1:** **Convert 157₈ to Hexadecimal**

<div class="example">
    <div class="calculation">
Step 1 - Octal to Binary:
1₈ = 001₂
5₈ = 101₂
7₈ = 111₂
Binary: 001101111

Step 2 - Group into 4s from right:
0110 1111

Step 3 - Convert to hex:
0110₂ = 6₁₆
1111₂ = 15 = F₁₆

<strong>Answer: 157₈ = 6F₁₆</strong>
    </div>
</div>

**Example 2:** **Convert 764₈ to Hexadecimal**
                    
<div class="example">
    <div class="calculation">
Step 1 - Octal to Binary:
7₈ = 111₂
6₈ = 110₂
4₈ = 100₂
Binary: 111110100

Step 2 - Group into 4s:
0001 1111 0100

Step 3 - Convert to hex:
0001₂ = 1₁₆
1111₂ = F₁₆
0100₂ = 4₁₆

<strong>Answer: 764₈ = 1F4₁₆</strong>
    </div>
</div>