# 📖 Quick Reference Guide

## 1. Conversion Summary Table

---

<div class="table-container">
    <table>
        <tr>
            <th>FROM → TO</th>
            <th>Method</th>
            <th>Quick Tip</th>
        </tr>
        <tr>
            <td>Decimal → Binary</td>
            <td>Divide by 2, record remainders</td>
            <td>Read remainders bottom to top</td>
        </tr>
        <tr>
            <td>Decimal → Octal</td>
            <td>Divide by 8, record remainders</td>
            <td>Read remainders bottom to top</td>
        </tr>
        <tr>
            <td>Decimal → Hex</td>
            <td>Divide by 16, record remainders</td>
            <td>Convert 10-15 to A-F</td>
        </tr>
        <tr>
            <td>Binary → Decimal</td>
            <td>Multiply by powers of 2</td>
            <td>Start with 2⁰ from right</td>
        </tr>
        <tr>
            <td>Binary → Octal</td>
            <td>Group in 3s from right</td>
            <td>Each group = 1 octal digit</td>
        </tr>
        <tr>
            <td>Binary → Hex</td>
            <td>Group in 4s from right</td>
            <td>Each group = 1 hex digit</td>
        </tr>
        <tr>
            <td>Octal → Decimal</td>
            <td>Multiply by powers of 8</td>
            <td>Start with 8⁰ from right</td>
        </tr>
        <tr>
            <td>Octal → Binary</td>
            <td>Each digit → 3 bits</td>
            <td>Direct conversion</td>
        </tr>
        <tr>
            <td>Octal → Hex</td>
            <td>Via Binary</td>
            <td>Octal → Binary → Hex</td>
        </tr>
        <tr>
            <td>Hex → Decimal</td>
            <td>Multiply by powers of 16</td>
            <td>Convert A-F to 10-15 first</td>
            </tr>
        <tr>
            <td>Hex → Binary</td>
            <td>Each digit → 4 bits</td>
            <td>Direct conversion</td>
        </tr>
        <tr>
            <td>Hex → Octal</td>
            <td>Via Binary</td>
            <td>Hex → Binary → Octal</td>
        </tr>
    </table>
</div>

## 2. Common Equivalents Reference

---

<div class="table-container">
    <table>
        <tr>
            <th>Decimal</th>
            <th>Binary</th>
            <th>Octal</th>
            <th>Hexadecimal</th>
        </tr>
        <tr><td>0</td><td>0000</td><td>0</td><td>0</td></tr>
        <tr><td>1</td><td>0001</td><td>1</td><td>1</td></tr>
        <tr><td>2</td><td>0010</td><td>2</td><td>2</td></tr>
        <tr><td>3</td><td>0011</td><td>3</td><td>3</td></tr>
        <tr><td>4</td><td>0100</td><td>4</td><td>4</td></tr>
        <tr><td>5</td><td>0101</td><td>5</td><td>5</td></tr>
        <tr><td>6</td><td>0110</td><td>6</td><td>6</td></tr>
        <tr><td>7</td><td>0111</td><td>7</td><td>7</td></tr>
        <tr><td>8</td><td>1000</td><td>10</td><td>8</td></tr>
        <tr><td>9</td><td>1001</td><td>11</td><td>9</td></tr>
        <tr><td>10</td><td>1010</td><td>12</td><td>A</td></tr>
        <tr><td>11</td><td>1011</td><td>13</td><td>B</td></tr>
        <tr><td>12</td><td>1100</td><td>14</td><td>C</td></tr>
        <tr><td>13</td><td>1101</td><td>15</td><td>D</td></tr>
        <tr><td>14</td><td>1110</td><td>16</td><td>E</td></tr>
        <tr><td>15</td><td>1111</td><td>17</td><td>F</td></tr>
        <tr><td>16</td><td>10000</td><td>20</td><td>10</td></tr>
        <tr><td>32</td><td>100000</td><td>40</td><td>20</td></tr>
        <tr><td>64</td><td>1000000</td><td>100</td><td>40</td></tr>
        <tr><td>128</td><td>10000000</td><td>200</td><td>80</td></tr>
        <tr><td>255</td><td>11111111</td><td>377</td><td>FF</td></tr>
    </table>
</div>

## 3. Important Formulas

---

<div class="steps">
    <div class="step"><strong>Any Base to Decimal:</strong> Sum of (digit × base^position)</div>
    <div class="step"><strong>Decimal to Any Base:</strong> Repeatedly divide by target base</div>
    <div class="step"><strong>Binary ↔ Octal:</strong> Group by 3 bits</div>
    <div class="step"><strong>Binary ↔ Hex:</strong> Group by 4 bits</div>
    <div class="step"><strong>Octal ↔ Hex:</strong> Use binary as intermediate</div>
</div>


