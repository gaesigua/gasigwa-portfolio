# 1️⃣ Hexadecimal to Decimal

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