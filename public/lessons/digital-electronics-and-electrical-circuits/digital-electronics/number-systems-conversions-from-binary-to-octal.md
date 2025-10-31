# 2️⃣ Binary to Octal

<p><strong>Method:</strong> Group binary digits in sets of 3 (from right to left), then convert each group to octal.</p>
                    
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