# 2. Decimal to Octal

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