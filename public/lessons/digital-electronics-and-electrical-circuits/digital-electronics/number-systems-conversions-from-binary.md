# Converting FROM BINARY

In this lesson, let's learn how to convert numbers from **Binary** to other number systems (**Decimal**,**Octal**,**Hexadecimal**).

## 1. Binary to Decimal

---

**Method:** Multiply each digit by 2 raised to its position power (from right, starting at 0) and sum.

<div class="formula"> Result = (digit × 2ⁿ) + (digit × 2ⁿ⁻¹) + ... + (digit × 2⁰) </div>

<div class="steps">
  <div class="step"><strong>Step 1:</strong> Write the binary number</div>
  <div class="step"><strong>Step 2:</strong> Number positions from right to left starting with 0</div>
  <div class="step"><strong>Step 3:</strong> Multiply each digit by 2^(position)</div>
  <div class="step"><strong>Step 4:</strong> Add all the results</div>
</div>

**Example 1:** **Convert 1011₂ to Decimal**

<div class="example">
  <div class="calculation">
Position:  3  2  1  0 <br>
Binary:    1  0  1  1

Calculation:
(1 × 2³) + (0 × 2²) + (1 × 2¹) + (1 × 2⁰)
= (1 × 8) + (0 × 4) + (1 × 2) + (1 × 1)
= 8 + 0 + 2 + 1
= <strong>11</strong>

<strong>Answer: 1011₂ = 11₁₀</strong>

  </div>
</div>

**Example 2:** **Convert 110101₂ to Decimal**

<div class="example">
<div class="calculation">
Position:  5  4  3  2  1  0 <br>
Binary:    1  1  0  1  0  1

Calculation:
(1×2⁵) + (1×2⁴) + (0×2³) + (1×2²) + (0×2¹) + (1×2⁰)
= 32 + 16 + 0 + 4 + 0 + 1
= <strong>53</strong>

<strong>Answer: 110101₂ = 53₁₀</strong>

  </div>
</div>

## 2. Binary to Octal (The Grouping Method)

---

Binary to **Octal** and Binary to **Hexadecimal** are the easiest conversions due to the relationship between the bases: **2<sup>3</sup> = 8** and **2<sup>4</sup> = 16**.

**Method:** Group binary digits in sets of **3** from the LSB (from right to left), then convert each group to octal.

<div class="steps">
  <div class="step"><strong>Step 1:</strong> Start from the rightmost bit</div>
  <div class="step"><strong>Step 2:</strong> Make groups of 3 bits (add leading zeros if needed)</div>
  <div class="step"><strong>Step 3:</strong> Convert each group to its octal equivalent (0-7)</div>
  <div class="step"><strong>Step 4:</strong> Write the octal digits together</div>
</div>
                    
<div class="table-container">
  <table>
    <tr>
      <th>Binary (3 bits)</th>
      <td>000</td>
      <td>001</td>
      <td>010</td>
      <td>011</td>
      <td>100</td>
      <td>101</td>
      <td>110</td>
      <td>111</td>
    </tr>
    <tr>
      <th>Octal</th>
      <td>0</td>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
      <td>5</td>
      <td>6</td>
      <td>7</td>
      </tr>
  </table>
</div>

**Example 1:** **Convert 101110₂ to Octal**

<div class="example">
   <div class="calculation">
Binary: 101110

Group into 3s from right: <strong>101</strong> <strong>110</strong>

Convert each group:
101₂ = 5₈
110₂ = 6₈

<strong>Answer: 101110₂ = 56₈</strong>
</div>

</div>

**Example 2:** **Convert 11011011₂ to Octal**

<div class="example">
   <div class="calculation">
Binary: 11011011

Group into 3s: <strong>011</strong> <strong>011</strong> <strong>011</strong>
(Added leading zero to make complete group)

Convert each group:
011₂ = 3₈
011₂ = 3₈
011₂ = 3₈

<strong>Answer: 11011011₂ = 333₈</strong>

  </div>
</div>

**Example 3:** **Convert 11010110<sub>2</sub> to Octal**

<div class="example">
   <div class="calculation">
Binary: 11010110

**1.** Group into 3s, and add leading zero to make the groups complete: **011 010 110**

**2.** Convert each group to its Octal equivalent: **3 2 6**

**3.** Result: **11010110<sub>2</sub>** = **326<sub>8</sub>**

   </div>
</div>

## 3. Binary to Hexadecimal (The Grouping Method)

---

**Method:** Group binary digits in sets of 4 (from right to left), then convert each group to hexadecimal.

<div class="steps">
  <div class="step"><strong>Step 1:</strong> Start from the rightmost bit</div>
  <div class="step"><strong>Step 2:</strong> Make groups of 4 bits (add leading zeros if needed)</div>
  <div class="step"><strong>Step 3:</strong> Convert each group to its hex equivalent (0-F)</div>
  <div class="step"><strong>Step 4:</strong> Write the hex digits together</div>
</div>
                    
<div class="table-container">
  <table>
    <tr>
      <th>Binary</th>
      <td>0000</td>
      <td>0001</td>
      <td>0010</td>
      <td>0011</td>
      <td>0100</td>
      <td>0101</td>
      <td>0110</td>
      <td>0111</td>
    </tr>
    <tr>
      <th>Hex</th>
      <td>0</td>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
      <td>5</td>
      <td>6</td>
      <td>7</td>
    </tr>
  </table>
  <table style="margin-top: 10px;">
    <tr>
      <th>Binary</th>
        <td>1000</td>
        <td>1001</td>
        <td>1010</td>
        <td>1011</td>
        <td>1100</td>
        <td>1101</td>
        <td>1110</td>
        <td>1111</td>
    </tr>
    <tr>
        <th>Hex</th>
        <td>8</td>
        <td>9</td>
        <td>A</td>
        <td>B</td>
        <td>C</td>
        <td>D</td>
        <td>E</td>
        <td>F</td>
      </tr>
  </table>
</div>

**Example 1:** **Convert 11010110₂ to Hexadecimal**

<div class="example">
  <div class="calculation">
Binary: 11010110

Group into 4s: <strong>1101</strong> <strong>0110</strong>

Convert each group:
1101₂ = 13 = D₁₆
0110₂ = 6₁₆

<strong>Answer: 11010110₂ = D6₁₆</strong>
</div>
</div>

**Example 2:** **Convert 1011111010₂ to Hexadecimal**

<div class="example">
  <div class="calculation">

Binary: 1011111010

Group into 4s: <strong>0010</strong> <strong>1111</strong> <strong>1010</strong>
(Added leading zeros)

Convert each group:
0010₂ = 2₁₆
1111₂ = 15 = F₁₆
1010₂ = 10 = A₁₆

<strong>Answer: 1011111010₂ = 2FA₁₆</strong>
   </div>
</div>
