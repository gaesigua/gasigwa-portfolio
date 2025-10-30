# 📟 Binary Coded Decimal (BCD)

## What is Binary Coded Decimal?

**Binary Coded Decimal (BCD)** is a method of encoding decimal numbers where each decimal digit is represented by its own 4-bit binary equivalent. Unlike pure binary representation, BCD maintains decimal digit boundaries, making it easier to convert between binary and decimal forms.

<div class="steps">

**Key Concept:** In BCD, we don't convert the entire decimal number to binary. Instead, we convert each decimal digit separately to its 4-bit binary form.

</div>

## Understanding BCD Fundamentals

Let's understand the key difference between BCD and the pure binary we studied in our previous course:

**Example:** **Number 25**

<div class="example">
    <!-- <h4>Example: Number 25</h4> -->
    <div class="calculation">
<strong>Pure Binary:</strong>
25₁₀ = 11001₂ (5 bits needed)

<strong>BCD:</strong>
2 → 0010
5 → 0101
25₁₀ = 0010 0101 (BCD) (8 bits needed)
    </div>
</div>