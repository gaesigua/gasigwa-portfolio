# 3️⃣ Hexadecimal to Octal
    
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