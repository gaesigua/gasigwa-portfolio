## De Morgan's Theorems
                    
<div class="gate-card" style="background: linear-gradient(135deg, #fff5f7 0%, #fef5ff 100%);">
    <p style="font-size: 1.1em; margin-bottom: 20px;"><strong>De Morgan's Theorems are extremely important for converting between AND/OR gates and NAND/NOR gates.</strong></p>
                        
<div class="logic-expression" style="background: #764ba2; color: white;">
                            Theorem 1: (A + B)' = A' · B'<br>
                            NOT(A OR B) = (NOT A) AND (NOT B)
                        </div>
                        
<div class="logic-expression" style="background: #667eea; color: white; margin-top: 15px;">
                            Theorem 2: (A · B)' = A' + B'<br>
                            NOT(A AND B) = (NOT A) OR (NOT B)
                        </div>
                        
<div class="example">
    <h4>Proof of De Morgan's First Theorem</h4>
                            <table class="truth-table">
                                <tr>
                                    <th>A</th>
                                    <th>B</th>
                                    <th>A + B</th>
                                    <th>(A + B)'</th>
                                    <th>A'</th>
                                    <th>B'</th>
                                    <th>A' · B'</th>
                                </tr>
                                <tr><td>0</td><td>0</td><td>0</td><td style="background: #c8e6c9;">1</td><td>1</td><td>1</td><td style="background: #c8e6c9;">1</td></tr>
                                <tr><td>0</td><td>1</td><td>1</td><td style="background: #ffcdd2;">0</td><td>1</td><td>0</td><td style="background: #ffcdd2;">0</td></tr>
                                <tr><td>1</td><td>0</td><td>1</td><td style="background: #ffcdd2;">0</td><td>0</td><td>1</td><td style="background: #ffcdd2;">0</td></tr>
                                <tr><td>1</td><td>1</td><td>1</td><td style="background: #ffcdd2;">0</td><td>0</td><td>0</td><td style="background: #ffcdd2;">0</td></tr>
                            </table>
                            <p style="margin-top: 15px;"><strong>Conclusion:</strong> Columns (A + B)' and A' · B' are identical! ✓</p>
                        </div>
                        
<div class="example">
    <h4>Practical Application: Converting NOR to AND</h4>
                            <div class="boolean-algebra">
<strong>Problem:</strong> Implement Y = A · B using only NOR gates

<strong>Solution using De Morgan's Theorem:</strong>
Step 1: Start with A · B
Step 2: Apply double negation: A · B = ((A · B)')'
Step 3: Apply De Morgan: (A · B)' = A' + B'
Step 4: So: A · B = (A' + B')'
Step 5: This is NOR(NOT A, NOT B)

<strong>Circuit:</strong>
Input A → NOT → NOR → Output Y
Input B → NOT → ↗

We need 2 NOT gates and 1 NOR gate!
                            </div>
                        </div>
                    </div>