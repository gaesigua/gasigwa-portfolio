# 3. Decimal to Hexadecimal


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