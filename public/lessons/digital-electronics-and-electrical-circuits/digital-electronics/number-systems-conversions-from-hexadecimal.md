# 🔄Converting FROM HEXADECIMAL

In this lesson, let's learn how to convert numbers from **Hexadecimal** to other number systems (**Decimal**,**Binary**,**Octal**).

## 1. Hexadecimal to Decimal

---

**Method:** Multiply each digit by 16 raised to its position power (from right, starting at 0) and sum.
                    
<div class="formula"> Result = (digit × 16ⁿ) + (digit × 16ⁿ⁻¹) + ... + (digit × 16⁰) </div>
                    
<div class="steps">
    <div class="step"><strong>Step 1:</strong> Write the hexadecimal number</div>
    <div class="step"><strong>Step 2:</strong> Convert letters to numbers (A=10, B=11, C=12, D=13, E=14, F=15)</div>
    <div class="step"><strong>Step 3:</strong> Number positions from right to left starting with 0</div>
    <div class="step"><strong>Step 4:</strong> Multiply each digit by 16^(position)</div>
    <div class="step"><strong>Step 5:</strong> Add all the results</div>
</div>
                    
**Example 1:** **Convert 2A3₁₆ to Decimal**

<div class="example">
                        
<div class="calculation">
Position:  2   1   0
Hex:       2   A   3
Decimal:   2   10  3

Calculation:
(2 × 16²) + (10 × 16¹) + (3 × 16⁰)
= (2 × 256) + (10 × 16) + (3 × 1)
= 512 + 160 + 3
= <strong>675</strong>

<strong>Answer: 2A3₁₆ = 675₁₀</strong>
    </div>
</div>

**Example 2:** **Convert F5C₁₆ to Decimal**
                    
<div class="example">
    <div class="calculation">
Position:  2   1   0
Hex:       F   5   C
Decimal:   15  5   12

Calculation:
(15 × 16²) + (5 × 16¹) + (12 × 16⁰)
= (15 × 256) + (5 × 16) + (12 × 1)
= 3840 + 80 + 12
= <strong>3932</strong>

<strong>Answer: F5C₁₆ = 3932₁₀</strong>
    </div>
</div>

## 2. Hexadecimal to Binary

---

**Method:** Convert each hexadecimal digit to its 4-bit binary equivalent.
                    
<div class="steps">
    <div class="step"><strong>Step 1:</strong> Take each hex digit separately</div>
    <div class="step"><strong>Step 2:</strong> Convert it to 4-bit binary</div>
    <div class="step"><strong>Step 3:</strong> Combine all binary groups</div>
    <div class="step"><strong>Step 4:</strong> Remove leading zeros if desired</div>
</div>

**Example 1:** **Convert A7₁₆ to Binary**
                    
<div class="example">
    <div class="calculation">
Hex digits: A      7

Convert each to 4-bit binary:
A₁₆ = 10₁₀ = 1010₂
7₁₆ = 0111₂

Combine: 1010 0111

<strong>Answer: A7₁₆ = 10100111₂</strong>
    </div>
</div>

**Example 2:** **Convert 3E9₁₆ to Binary**
                    
<div class="example">
    <div class="calculation">
Hex digits: 3      E      9

Convert each:
3₁₆ = 0011₂
E₁₆ = 14₁₀ = 1110₂
9₁₆ = 1001₂

Combine: 0011 1110 1001

<strong>Answer: 3E9₁₆ = 001111101001₂ or 1111101001₂</strong>
    </div>
</div>


## 3. Hexadecimal to Octal

---
    
**Method:**</strong> Convert hexadecimal to binary first, then binary to octal.
                    
<div class="steps">
    <div class="step"><strong>Step 1:</strong> Convert hex to binary (each digit → 4 bits)</div>
    <div class="step"><strong>Step 2:</strong> Group binary into sets of 3 from right</div>
    <div class="step"><strong>Step 3:</strong> Convert each 3-bit group to octal</div>
</div>

**Example 1:** **Convert 1A₁₆ to Octal**
                    
<div class="example">                     
    <div class="calculation">
Step 1 - Hex to Binary:
1₁₆ = 0001₂
A₁₆ = 1010₂
Binary: 00011010

Step 2 - Group into 3s from right:
000 011 010

Step 3 - Convert to octal:
000₂ = 0₈
011₂ = 3₈
010₂ = 2₈

<strong>Answer: 1A₁₆ = 032₈ or 32₈</strong>
    </div>
</div>

**Example 2:** **Convert 2F8₁₆ to Octal**
                    
<div class="example">                        
    <div class="calculation">
Step 1 - Hex to Binary:
2₁₆ = 0010₂
F₁₆ = 1111₂
8₁₆ = 1000₂
Binary: 001011111000

Step 2 - Group into 3s:
001 011 111 000

Step 3 - Convert to octal:
001₂ = 1₈
011₂ = 3₈
111₂ = 7₈
000₂ = 0₈

<strong>Answer: 2F8₁₆ = 1370₈</strong>
    </div>
</div>