<!-- BASIC GATES SECTION -->

<!-- <div id="basic" class="section"> -->
<!-- <div class="module"> -->
<!-- <h2>🔷 Basic Logic Gates</h2> -->

# Basic Logic Gates
                    
<!-- AND GATE -->
                    
<div class="gate-card">
    <div class="gate-header">
        <div class="gate-name">1. AND Gate</div>
    </div>
    <p><strong>Description:</strong> The AND gate produces a HIGH output (1) only when ALL inputs are HIGH. If any input is LOW (0), the output is LOW.</p>
    <div class="logic-expression">
                            Y = A · B  or  Y = A ∧ B  or  Y = AB
                        </div>
                        
<h4 style="margin-top: 20px; color: #667eea;">Truth Table (2 Inputs)</h4>
    <table class="truth-table">
                            <tr>
                                <th>Input A</th>
                                <th>Input B</th>
                                <th>Output Y</th>
                            </tr>
                            <tr><td>0</td><td>0</td><td>0</td></tr>
                            <tr><td>0</td><td>1</td><td>0</td></tr>
                            <tr><td>1</td><td>0</td><td>0</td></tr>
                            <tr><td>1</td><td>1</td><td>1</td></tr>
                        </table>
                        
<div class="example">
                            <h4>Real-World Example: Security System</h4>
                            <p>A safe opens only when BOTH the correct key is inserted AND the correct code is entered.</p>
                            <ul style="margin-left: 20px; margin-top: 10px;">
                                <li>Input A = Key inserted (1 = Yes, 0 = No)</li>
                                <li>Input B = Correct code (1 = Yes, 0 = No)</li>
                                <li>Output Y = Safe opens (1 = Open, 0 = Locked)</li>
                            </ul>
                            <p style="margin-top: 10px;"><strong>Result:</strong> Safe opens only when BOTH conditions are met.</p>
                        </div>
                        
<div class="key-points">
                            <h4>Key Properties</h4>
                            <ul>
                                <li>Minimum inputs: 2</li>
                                <li>Also called: Logical conjunction, multiplication</li>
                                <li>Output is 1 only when ALL inputs are 1</li>
                                <li>Identity: A · 1 = A</li>
                                <li>Zero property: A · 0 = 0</li>
                            </ul>
                        </div>
                    </div>
                    
<!-- OR GATE -->
                    
<div class="gate-card">
    <div class="gate-header">
            <div class="gate-name">2. OR Gate</div>
    </div>
                        
<p><strong>Description:</strong> The OR gate produces a HIGH output (1) when AT LEAST ONE input is HIGH. The output is LOW only when ALL inputs are LOW.</p>
                        
<div class="logic-expression">
                            Y = A + B  or  Y = A ∨ B
                        </div>
                        
<h4 style="margin-top: 20px; color: #667eea;">Truth Table (2 Inputs)</h4>
                        <table class="truth-table">
                            <tr>
                                <th>Input A</th>
                                <th>Input B</th>
                                <th>Output Y</th>
                            </tr>
                            <tr><td>0</td><td>0</td><td>0</td></tr>
                            <tr><td>0</td><td>1</td><td>1</td></tr>
                            <tr><td>1</td><td>0</td><td>1</td></tr>
                            <tr><td>1</td><td>1</td><td>1</td></tr>
                        </table>
                        
<div class="example">
    <h4>Real-World Example: Automatic Door</h4>
    <p>An automatic door opens if EITHER a person approaches OR the exit button is pressed.</p>
    <ul style="margin-left: 20px; margin-top: 10px;">
                                <li>Input A = Motion sensor (1 = Person detected, 0 = No person)</li>
                                <li>Input B = Exit button (1 = Pressed, 0 = Not pressed)</li>
                                <li>Output Y = Door opens (1 = Open, 0 = Closed)</li>
                            </ul>
                            <p style="margin-top: 10px;"><strong>Result:</strong> Door opens if ANY condition is met.</p>
                        </div>
                        
<div class="key-points">
                            <h4>Key Properties</h4>
                            <ul>
                                <li>Minimum inputs: 2</li>
                                <li>Also called: Logical disjunction, addition</li>
                                <li>Output is 1 when ANY input is 1</li>
                                <li>Identity: A + 0 = A</li>
                                <li>One property: A + 1 = 1</li>
                            </ul>
                        </div>
                    </div>
                    
<!-- NOT GATE -->
                    
<div class="gate-card">
                        <div class="gate-header">
                            <div class="gate-name">3. NOT Gate (Inverter)</div>
                        </div>
                        
<p><strong>Description:</strong> The NOT gate, also called an inverter, has only ONE input. It produces the opposite (complement) of the input. If input is 0, output is 1, and vice versa.</p>
                        
<div class="logic-expression">
                            Y = A'  or  Y = Ā  or  Y = ¬A  or  Y = !A
                        </div>
                        
<h4 style="margin-top: 20px; color: #667eea;">Truth Table</h4>
                        <table class="truth-table">
                            <tr>
                                <th>Input A</th>
                                <th>Output Y</th>
                            </tr>
                            <tr><td>0</td><td>1</td></tr>
                            <tr><td>1</td><td>0</td></tr>
                        </table>
                        
<div class="example">
                            <h4>Real-World Example: Light Switch with Indicator</h4>
                            <p>When the main light is ON, the indicator light is OFF, and vice versa.</p>
                            <ul style="margin-left: 20px; margin-top: 10px;">
                                <li>Input A = Main light (1 = ON, 0 = OFF)</li>
                                <li>Output Y = Indicator light (opposite state)</li>
                            </ul>
                            <p style="margin-top: 10px;"><strong>Result:</strong> Indicator shows opposite state of main light.</p>
                        </div>
                        
<div class="key-points">
                            <h4>Key Properties</h4>
                            <ul>
                                <li>Number of inputs: 1 (only gate with single input)</li>
                                <li>Also called: Inverter, Complement</li>
                                <li>Double inversion: (A')' = A</li>
                                <li>Involution law: NOT(NOT(A)) = A</li>
                                <li>Complement: A · A' = 0, A + A' = 1</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>