# 📝 Decimal to BCD Conversion

<div id="encoding" class="section">
    <div class="module">
            <h3>Conversion Process</h3>
                <div class="steps">
                    <div class="step">
                        <div class="step-number">1</div>
                        <div class="step-content">
                            <strong>Separate the decimal digits</strong><br>
                                Break the decimal number into individual digits
                            </div>
                        </div>
                        <div class="step">
                            <div class="step-number">2</div>
                            <div class="step-content">
                                <strong>Convert each digit to 4-bit binary</strong><br>
                                Use the BCD table to find the 4-bit code for each digit
                            </div>
                        </div>
                        <div class="step">
                            <div class="step-number">3</div>
                            <div class="step-content">
                                <strong>Combine the codes</strong><br>
                                Write all 4-bit codes together (with spaces for clarity)
                            </div>
                        </div>
                    </div>
                    
                    <div class="example">
                        <h4>Example 1: Convert 47₁₀ to BCD</h4>
                        <div class="calculation">
<strong>Step 1 - Separate digits:</strong>
Digits: 4 and 7

<strong>Step 2 - Convert each digit:</strong>
4 → 0100
7 → 0111

<strong>Step 3 - Combine:</strong>
47₁₀ = 0100 0111 (BCD)

<strong>Verification:</strong>
0100 = 4
0111 = 7
Result: 47 ✓
                        </div>
                    </div>
<div class="example">
                        <h4>Example 2: Convert 139₁₀ to BCD</h4>
                        <div class="calculation">
<strong>Step 1 - Separate digits:</strong>
Digits: 1, 3, and 9

<strong>Step 2 - Convert each digit:</strong>
1 → 0001
3 → 0011
9 → 1001

<strong>Step 3 - Combine:</strong>
139₁₀ = 0001 0011 1001 (BCD)

<strong>Verification:</strong>
0001 = 1
0011 = 3
1001 = 9
Result: 139 ✓
                        </div>
                    </div>
                    
<div class="example">
                        <h4>Example 3: Convert 2024₁₀ to BCD</h4>
                        <div class="calculation">
<strong>Step 1 - Separate digits:</strong>
Digits: 2, 0, 2, and 4

<strong>Step 2 - Convert each digit:</strong>
2 → 0010
0 → 0000
2 → 0010
4 → 0100

<strong>Step 3 - Combine:</strong>
2024₁₀ = 0010 0000 0010 0100 (BCD)
                        </div>
                    </div>
                    
<div class="example">
                        <h4>Example 4: Convert 9876₁₀ to BCD</h4>
                        <div class="calculation">
<strong>Step 1 - Separate digits:</strong>
Digits: 9, 8, 7, and 6

<strong>Step 2 - Convert each digit:</strong>
9 → 1001
8 → 1000
7 → 0111
6 → 0110

<strong>Step 3 - Combine:</strong>
9876₁₀ = 1001 1000 0111 0110 (BCD)
                        </div>
                    </div>
                    
<h3>Comparison: BCD vs Pure Binary</h3>
                    <table class="comparison-table">
                        <tr>
                            <th>Decimal</th>
                            <th>BCD Code</th>
                            <th>Pure Binary</th>
                            <th>Bits Used (BCD)</th>
                            <th>Bits Used (Binary)</th>
                        </tr>
                        <tr>
                            <td>15</td>
                            <td>0001 0101</td>
                            <td>1111</td>
                            <td>8</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>99</td>
                            <td>1001 1001</td>
                            <td>1100011</td>
                            <td>8</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>128</td>
                            <td>0001 0010 1000</td>
                            <td>10000000</td>
                            <td>12</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>255</td>
                            <td>0010 0101 0101</td>
                            <td>11111111</td>
                            <td>12</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>1000</td>
                            <td>0001 0000 0000 0000</td>
                            <td>1111101000</td>
                            <td>16</td>
                            <td>10</td>
                        </tr>
                    </table>
                    
<div class="note">
                        <strong>💡 Quick Tip:</strong> To quickly check if a BCD code is valid, ensure that no 4-bit group has a value greater than 9 (1001). If you see 1010, 1011, 1100, 1101, 1110, or 1111, it's an invalid BCD code!
                    </div>
                </div>
            </div>