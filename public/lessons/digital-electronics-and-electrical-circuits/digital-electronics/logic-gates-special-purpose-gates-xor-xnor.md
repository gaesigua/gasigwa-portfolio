<!-- SPECIAL GATES SECTION -->
            
<!-- <div id="special" class="section"> -->
<!-- <div class="module"> -->
<!-- <h2>⭐ Special Purpose Logic Gates</h2> -->

# Special Purpose Logic Gates
                    
<!-- XOR GATE -->
                    
<div class="gate-card">
    <div class="gate-header">
        <div class="gate-name">6. XOR Gate (Exclusive OR)</div>
    </div>
                        
<p><strong>Description:</strong> XOR stands for "Exclusive OR". The output is HIGH (1) when the inputs are DIFFERENT. If both inputs are the same, the output is LOW (0).</p>
                        
<div class="logic-expression">
                            Y = A ⊕ B  or  Y = A'B + AB'
                        </div>
                        
<h4 style="margin-top: 20px; color: #667eea;">Truth Table (2 Inputs)</h4>
                        <table class="truth-table">
                            <tr>
                                <th>Input A</th>
                                <th>Input B</th>
                                <th>Output Y</th>
                                <th>Meaning</th>
                            </tr>
                            <tr><td>0</td><td>0</td><td>0</td><td>Same</td></tr>
                            <tr><td>0</td><td>1</td><td style="background: #c8e6c9; font-weight: bold;">1</td><td>Different</td></tr>
                            <tr><td>1</td><td>0</td><td style="background: #c8e6c9; font-weight: bold;">1</td><td>Different</td></tr>
                            <tr><td>1</td><td>1</td><td>0</td><td>Same</td></tr>
                        </table>
                        
<div class="example">
                            <h4>Real-World Example: Change Detector</h4>
                            <p>A security system that detects when a door state changes from its previous state.</p>
                            <ul style="margin-left: 20px; margin-top: 10px;">
                                <li>Input A = Previous state (1 = Open, 0 = Closed)</li>
                                <li>Input B = Current state (1 = Open, 0 = Closed)</li>
                                <li>Output Y = Change detected (1 = Changed, 0 = No change)</li>
                            </ul>
                            <p style="margin-top: 10px;"><strong>Applications:</strong></p>
                            <ul style="margin-left: 20px;">
                                <li>Parity checkers (error detection)</li>
                                <li>Half adders in arithmetic circuits</li>
                                <li>Encryption algorithms</li>
                                <li>Comparators</li>
                            </ul>
                        </div>
                        
<div class="example">
                            <h4>XOR as Binary Adder</h4>
                            <div class="boolean-algebra">
<strong>Addition without carry:</strong>
0 + 0 = 0  (XOR: 0 ⊕ 0 = 0) ✓
0 + 1 = 1  (XOR: 0 ⊕ 1 = 1) ✓
1 + 0 = 1  (XOR: 1 ⊕ 0 = 1) ✓
1 + 1 = 0  (XOR: 1 ⊕ 1 = 0, carry 1) ✓

XOR gives the SUM bit in binary addition!
                            </div>
                        </div>
                        
<div class="key-points">
                            <h4>Key Properties</h4>
                            <ul>
                                <li><strong>Odd function:</strong> Output is 1 when odd number of inputs are 1</li>
                                <li>Commutative: A ⊕ B = B ⊕ A</li>
                                <li>Associative: A ⊕ (B ⊕ C) = (A ⊕ B) ⊕ C</li>
                                <li>Identity: A ⊕ 0 = A</li>
                                <li>Self-inverse: A ⊕ A = 0</li>
                                <li>Complement: A ⊕ 1 = A'</li>
                            </ul>
                        </div>
                    </div>
                    
<!-- XNOR GATE -->
                    
<div class="gate-card">
                        <div class="gate-header">
                            <div class="gate-name">7. XNOR Gate (Exclusive NOR)</div>
                        </div>
                        
<p><strong>Description:</strong> XNOR is the complement of XOR. The output is HIGH (1) when the inputs are the SAME (both 0 or both 1). If inputs are different, the output is LOW (0).</p>
                        
<div class="logic-expression">
                            Y = (A ⊕ B)'  or  Y = A ⊙ B  or  Y = AB + A'B'
                        </div>
                        
<h4 style="margin-top: 20px; color: #667eea;">Truth Table (2 Inputs)</h4>
                        <table class="truth-table">
                            <tr>
                                <th>Input A</th>
                                <th>Input B</th>
                                <th>Output Y</th>
                                <th>Meaning</th>
                            </tr>
                            <tr><td>0</td><td>0</td><td style="background: #c8e6c9; font-weight: bold;">1</td><td>Same</td></tr>
                            <tr><td>0</td><td>1</td><td>0</td><td>Different</td></tr>
                            <tr><td>1</td><td>0</td><td>0</td><td>Different</td></tr>
                            <tr><td>1</td><td>1</td><td style="background: #c8e6c9; font-weight: bold;">1</td><td>Same</td></tr>
                        </table>
                        
<div class="example">
                            <h4>Real-World Example: Equality Checker</h4>
                            <p>A system that checks if two binary values are equal.</p>
                            <ul style="margin-left: 20px; margin-top: 10px;">
                                <li>Input A = First bit</li>
                                <li>Input B = Second bit</li>
                                <li>Output Y = 1 if equal, 0 if different</li>
                            </ul>
                            <p style="margin-top: 10px;"><strong>Applications:</strong></p>
                            <ul style="margin-left: 20px;">
                                <li>Digital comparators</li>
                                <li>Code converters</li>
                                <li>Error detection (even parity)</li>
                                <li>Pattern matching</li>
                            </ul>
                        </div>
                        
<div class="key-points">
                            <h4>Key Properties</h4>
                            <ul>
                                <li><strong>Even function:</strong> Output is 1 when even number of inputs are 1</li>
                                <li>Also called: Equivalence gate, Equality gate</li>
                                <li>Commutative: A ⊙ B = B ⊙ A</li>
                                <li>A ⊙ A = 1 (always equal to itself)</li>
                                <li>A ⊙ A' = 0 (never equal to complement)</li>
                                <li>XNOR = NOT(XOR)</li>
                            </ul>
                        </div>
                    </div>
                    
# XOR vs XNOR Comparison

<div class="comparison-grid">
                        <div class="comparison-card" style="border: 3px solid #4caf50;">
                            <h5>XOR Gate</h5>
                            <p><strong>Output = 1 when DIFFERENT</strong></p>
                            <table style="width: 100%; margin-top: 15px;">
                                <tr><td>0 ⊕ 0 = 0</td></tr>
                                <tr style="background: #c8e6c9;"><td><strong>0 ⊕ 1 = 1</strong></td></tr>
                                <tr style="background: #c8e6c9;"><td><strong>1 ⊕ 0 = 1</strong></td></tr>
                                <tr><td>1 ⊕ 1 = 0</td></tr>
                            </table>
                            <p style="margin-top: 10px;">Used for: Addition, Change detection</p>
                        </div>
                        <div class="comparison-card" style="border: 3px solid #2196f3;">
                            <h5>XNOR Gate</h5>
                            <p><strong>Output = 1 when SAME</strong></p>
                            <table style="width: 100%; margin-top: 15px;">
                                <tr style="background: #bbdefb;"><td><strong>0 ⊙ 0 = 1</strong></td></tr>
                                <tr><td>0 ⊙ 1 = 0</td></tr>
                                <tr><td>1 ⊙ 0 = 0</td></tr>
                                <tr style="background: #bbdefb;"><td><strong>1 ⊙ 1 = 1</strong></td></tr>
                            </table>
                            <p style="margin-top: 10px;">Used for: Comparison, Equality checking</p>
                        </div>
                    </div>
                </div>
            </div>