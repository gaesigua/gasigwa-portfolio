# 3. Octal to Hexadecimal

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