# 1. Octal to Decimal


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