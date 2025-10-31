# 3️⃣ Binary to Hexadecimal
                    
<p><strong>Method:</strong> Group binary digits in sets of 4 (from right to left), then convert each group to hexadecimal.</p>
                    
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
                


