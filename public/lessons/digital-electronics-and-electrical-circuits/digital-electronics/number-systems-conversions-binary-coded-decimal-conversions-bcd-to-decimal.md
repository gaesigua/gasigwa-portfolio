# 🔓 BCD to Decimal Conversion

<div id="decoding" class="section">
                <div class="module">                    
<h3>Conversion Process</h3>
                    <div class="steps">
                        <div class="step">
                            <div class="step-number">1</div>
                            <div class="step-content">
                                <strong>Group the bits into sets of 4</strong><br>
                                Starting from the right, divide into 4-bit groups
                            </div>
                        </div>
                        <div class="step">
                            <div class="step-number">2</div>
                            <div class="step-content">
                                <strong>Validate each group</strong><br>
                                Ensure each group represents 0-9 (no invalid codes)
                            </div>
                        </div>
                        <div class="step">
                            <div class="step-number">3</div>
                            <div class="step-content">
                                <strong>Convert each group to decimal</strong><br>
                                Translate each 4-bit code to its decimal digit
                            </div>
                        </div>
                        <div class="step">
                            <div class="step-number">4</div>
                            <div class="step-content">
                                <strong>Write digits together</strong><br>
                                Combine all decimal digits to form the final number
                            </div>
                        </div>
                    </div>
                    
<div class="example">
                        <h4>Example 1: Convert 0110 0011 (BCD) to Decimal</h4>
                        <div class="calculation">
<strong>Step 1 - Groups are already formed:</strong>
Group 1: 0110
Group 2: 0011

<strong>Step 2 - Validate:</strong>
0110 = 6 ✓ (valid, ≤ 9)
0011 = 3 ✓ (valid, ≤ 9)

<strong>Step 3 - Convert each group:</strong>
0110 = 6
0011 = 3

<strong>Step 4 - Combine:</strong>
Answer: 63₁₀
                        </div>
                    </div>
                    
<div class="example">
                        <h4>Example 2: Convert 1000 0101 0110 (BCD) to Decimal</h4>
                        <div class="calculation">
<strong>Step 1 - Groups:</strong>
Group 1: 1000
Group 2: 0101
Group 3: 0110

<strong>Step 2 - Validate:</strong>
1000 = 8 ✓
0101 = 5 ✓
0110 = 6 ✓

<strong>Step 3 - Convert:</strong>
1000 = 8
0101 = 5
0110 = 6

<strong>Step 4 - Combine:</strong>
Answer: 856₁₀
                        </div>
                    </div>
                    
<div class="example">
                        <h4>Example 3: Convert 0100 0010 1001 0111 (BCD) to Decimal</h4>
                        <div class="calculation">
<strong>Step 1 - Groups:</strong>
0100 | 0010 | 1001 | 0111

<strong>Step 2 - Validate:</strong>
All groups ≤ 9 ✓

<strong>Step 3 - Convert:</strong>
0100 = 4
0010 = 2
1001 = 9
0111 = 7

<strong>Step 4 - Combine:</strong>
Answer: 4297₁₀
                        </div>
                    </div>
                    
<div class="warning">
                        <strong>⚠️ Invalid BCD Example:</strong>
                        <div class="calculation" style="margin-top: 10px;">
Try to convert: 1011 0101 (BCD) to Decimal

Group 1: 1011 = 11 ❌ (INVALID! Greater than 9)
Group 2: 0101 = 5 ✓

<strong>This is NOT a valid BCD code!</strong>
The code 1011 cannot exist in BCD.
                        </div>
                    </div>
                    
<h3>Practice Problems</h3>
                    <div class="key-points">
                        <h4>🎯 Try Converting These BCD Codes:</h4>
                        <ul>
                            <li>0111 1000 (BCD) → ?</li>
                            <li>0001 0101 0010 (BCD) → ?</li>
                            <li>1001 0000 0100 0011 (BCD) → ?</li>
                            <li>0010 0110 0011 (BCD) → ?</li>
                            <li>Is 1100 0101 a valid BCD code?</li>
                        </ul>
                    </div>
                    
<div class="success">
                        <strong>✓ Answers:</strong>
                        <div style="margin-top: 10px;">
                            <p>1. 78₁₀</p>
                            <p>2. 152₁₀</p>
                            <p>3. 9043₁₀</p>
                            <p>4. 263₁₀</p>
                            <p>5. No! (1100 = 12, which is > 9)</p>
                        </div>
                    </div>
                </div>
            </div>