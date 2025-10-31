# 1️⃣ Binary to Decimal

<!-- <div id="binary" class="section"> -->

<!-- <div class="module"> -->
                    
<!-- Binary to Decimal -->
    

<p><strong>Method:</strong> Multiply each digit by 2 raised to its position power (from right, starting at 0) and sum.</p>
                    
<div class="formula">
                        Result = (digit × 2ⁿ) + (digit × 2ⁿ⁻¹) + ... + (digit × 2⁰)
                    </div>
                    
<div class="steps">
                        <div class="step"><strong>Step 1:</strong> Write the binary number</div>
                        <div class="step"><strong>Step 2:</strong> Number positions from right to left starting with 0</div>
                        <div class="step"><strong>Step 3:</strong> Multiply each digit by 2^(position)</div>
                        <div class="step"><strong>Step 4:</strong> Add all the results</div>
                    </div>

**Example 1:** **Convert 1011₂ to Decimal**    

<div class="example">
    <div class="calculation">
Position:  3  2  1  0<br>
Binary:    1  0  1  1

Calculation:<br>
= (1 × 2³) + (0 × 2²) + (1 × 2¹) + (1 × 2⁰)<br>
= (1 × 8) + (0 × 4) + (1 × 2) + (1 × 1)<br>
= 8 + 0 + 2 + 1
= <strong>11</strong>

<strong>Answer: 1011₂ = 11₁₀</strong>
                        </div>
                    </div>

**Example 2:** **Convert 110101₂ to Decimal**

<div class="example">
    <div class="calculation">
Position:  5  4  3  2  1  0<br>
Binary  :  1  1  0  1  0  1

Calculation:<br>
= (1×2⁵) + (1×2⁴) + (0×2³) + (1×2²) + (0×2¹) + (1×2⁰)<br>
= 32 + 16 + 0 + 4 + 0 + 1<br>
= <strong>53</strong>

<strong>Answer: 110101₂ = 53₁₀</strong>
                        </div>
                    </div>