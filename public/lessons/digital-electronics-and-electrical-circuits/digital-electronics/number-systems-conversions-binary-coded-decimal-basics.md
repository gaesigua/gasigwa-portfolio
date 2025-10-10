# 📟 Binary Coded Decimal (BCD)

## What is Binary Coded Decimal?
---

**Binary Coded Decimal (BCD)** is a method of encoding decimal numbers where each decimal digit is represented by its own 4-bit binary equivalent. Unlike pure binary representation, BCD maintains decimal digit boundaries, making it easier to convert between binary and decimal forms.

**Key Concept:** In BCD, we don't convert the entire decimal number to binary. Instead, we convert each decimal digit separately to its 4-bit binary form.

## Understanding BCD Fundamentals
---

Let's understand the key difference between BCD and the pure binary we studied in our previous course:
                    
<div class="example">
    <h4>Example: Number 25</h4>
    <div class="calculation">
<strong>Pure Binary:</strong>
25₁₀ = 11001₂ (5 bits needed)

<strong>BCD:</strong>
2 → 0010
5 → 0101
25₁₀ = 0010 0101 (BCD) (8 bits needed)
    </div>
</div>

## BCD Digit Encoding Table

---

<table class="comparison-table">
    <tr>
        <th>Decimal Digit</th>
        <th>BCD Code (4 bits)</th>
        <th>Binary (8421)</th>
    </tr>
    <tr><td>0</td><td>0000</td><td>0000</td></tr>
    <tr><td>1</td><td>0001</td><td>0001</td></tr>
    <tr><td>2</td><td>0010</td><td>0010</td></tr>
    <tr><td>3</td><td>0011</td><td>0011</td></tr>
    <tr><td>4</td><td>0100</td><td>0100</td></tr>
    <tr><td>5</td><td>0101</td><td>0101</td></tr>
    <tr><td>6</td><td>0110</td><td>0110</td></tr>
    <tr><td>7</td><td>0111</td><td>0111</td></tr>
    <tr><td>8</td><td>1000</td><td>1000</td></tr>
    <tr><td>9</td><td>1001</td><td>1001</td></tr>
    </table>
                    
<div class="warning">
    <strong>⚠️ Important:</strong> In BCD, codes 1010 (10), 1011 (11), 1100 (12), 1101 (13), 1110 (14), and 1111 (15) are <strong>invalid</strong> because they represent values greater than 9. These are called "forbidden" or "illegal" codes in BCD. </div>

## Why Use BCD?

---

<div class="advantages-disadvantages">
    <div class="advantage-box">
        <h4>✅ Advantages</h4>
            <ul style="margin-left: 20px;">
                <li>Easy conversion to/from decimal</li>
                <li>No rounding errors in decimal operations</li>
                <li>Simple to display on decimal devices</li>
                <li>Each digit is independent</li>
                <li>Better for financial calculations</li>
            </ul>
    </div>
    <div class="disadvantage-box">
        <h4>❌ Disadvantages</h4>
            <ul style="margin-left: 20px;">
                <li>Uses more bits than pure binary</li>
                <li>Arithmetic is more complex</li>
                <li>Wastes 6 out of 16 possible codes</li>
                <li>Less efficient storage</li>
                <li>Slower processing</li>
            </ul>
    </div>
</div>
                    
<div class="key-points">
    <h4>🔑 Key Points to Remember</h4>
        <ul>
            <li><strong>4 bits per digit:</strong> Each decimal digit requires exactly 4 bits in BCD</li>
            <li><strong>Range 0-9:</strong> Only decimal digits 0-9 are valid in BCD</li>
            <li><strong>8421 Code:</strong> BCD is also called 8421 code (weights: 8, 4, 2, 1)</li>
            <li><strong>Not the same as binary:</strong> 25 in BCD (00100101) ≠ 25 in binary (11001)</li>
        </ul>
</div>