<!-- UNIVERSAL GATES SECTION -->
            
<!-- <div id="universal" class="section"> -->
<!-- <div class="module"> -->
<!-- <h2>🌟 Universal Logic Gates</h2> -->

# Universal Logic Gates
                    
<p style="font-size: 1.1em; margin-bottom: 20px;">Universal gates are special because they can be used to implement ANY other logic gate or Boolean function. The two universal gates are <strong>NAND</strong> and <strong>NOR</strong>.</p>
                    
<!-- NAND GATE -->
                    
<div class="gate-card">
    <div class="gate-header">
        <div class="gate-name">4. NAND Gate</div>
            <span style="background: #ff6b6b; color: white; padding: 5px 15px; border-radius: 20px; font-weight: bold;">UNIVERSAL</span>
                        </div>
                        
<p><strong>Description:</strong> NAND stands for "NOT AND". It produces the opposite output of an AND gate. The output is LOW (0) only when ALL inputs are HIGH. It's HIGH for any other combination.</p>
                        
<div class="logic-expression">
                            Y = (A · B)'  or  Y = A ⊼ B  or  Y = ‾‾‾‾‾<br>AB
                        </div>
                        
<h4 style="margin-top: 20px; color: #667eea;">Truth Table (2 Inputs)</h4>
                        <table class="truth-table">
                            <tr>
                                <th>Input A</th>
                                <th>Input B</th>
                                <th>AND Output</th>
                                <th>NAND Output Y</th>
                            </tr>
                            <tr><td>0</td><td>0</td><td>0</td><td style="background: #c8e6c9; font-weight: bold;">1</td></tr>
                            <tr><td>0</td><td>1</td><td>0</td><td style="background: #c8e6c9; font-weight: bold;">1</td></tr>
                            <tr><td>1</td><td>0</td><td>0</td><td style="background: #c8e6c9; font-weight: bold;">1</td></tr>
                            <tr><td>1</td><td>1</td><td>1</td><td style="background: #ffcdd2; font-weight: bold;">0</td></tr>
                        </table>
                        
<div class="example">
    <h4>Why NAND is Universal</h4>
    <p>NAND can implement ALL other gates:</p>

<div class="boolean-algebra">
<strong>NOT gate from NAND:</strong>
Connect both inputs together: Y = (A · A)' = A'

<strong>AND gate from NAND:</strong>
NAND followed by NOT: Y = ((A · B)')'= A · B

<strong>OR gate from NAND:</strong>
Y = (A' · B')' = A + B (De Morgan's Law)

<strong>NOR gate from NAND:</strong>
Combine NAND gates to create OR, then invert

<strong>XOR gate from NAND:</strong>
Y = A'B + AB' (using 4 NAND gates)
                            </div>
                        </div>
                        
<div class="key-points">
                            <h4>Key Properties</h4>
                            <ul>
                                <li><strong>Universal gate:</strong> Can implement any Boolean function</li>
                                <li>Output is 0 only when ALL inputs are 1</li>
                                <li>Cheaper to manufacture than other gates</li>
                                <li>Used extensively in IC design</li>
                                <li>NAND flash memory is named after this gate</li>
                            </ul>
                        </div>
                    </div>
                    
<!-- NOR GATE -->
                    
<div class="gate-card">
                        <div class="gate-header">
                            <div class="gate-name">5. NOR Gate</div>
                            <span style="background: #ff6b6b; color: white; padding: 5px 15px; border-radius: 20px; font-weight: bold;">UNIVERSAL</span>
                        </div>
                        
<p><strong>Description:</strong> NOR stands for "NOT OR". It produces the opposite output of an OR gate. The output is HIGH (1) only when ALL inputs are LOW. Otherwise, it's LOW.</p>
                        
<div class="logic-expression">
                            Y = (A + B)'  or  Y = A ⊽ B  or  Y = ‾‾‾‾‾<br>A+B
                        </div>
                        
<h4 style="margin-top: 20px; color: #667eea;">Truth Table (2 Inputs)</h4>
                        <table class="truth-table">
                            <tr>
                                <th>Input A</th>
                                <th>Input B</th>
                                <th>OR Output</th>
                                <th>NOR Output Y</th>
                            </tr>
                            <tr><td>0</td><td>0</td><td>0</td><td style="background: #c8e6c9; font-weight: bold;">1</td></tr>
                            <tr><td>0</td><td>1</td><td>1</td><td style="background: #ffcdd2; font-weight: bold;">0</td></tr>
                            <tr><td>1</td><td>0</td><td>1</td><td style="background: #ffcdd2; font-weight: bold;">0</td></tr>
                            <tr><td>1</td><td>1</td><td>1</td><td style="background: #ffcdd2; font-weight: bold;">0</td></tr>
                        </table>
                        
<div class="example">
                            <h4>Why NOR is Universal</h4>
                            <p>NOR can also implement ALL other gates:</p>
                            <div class="boolean-algebra">
<strong>NOT gate from NOR:</strong>
Connect both inputs together: Y = (A + A)' = A'

<strong>OR gate from NOR:</strong>
NOR followed by NOT: Y = ((A + B)')' = A + B

<strong>AND gate from NOR:</strong>
Y = (A' + B')' = A · B (De Morgan's Law)

<strong>NAND gate from NOR:</strong>
Combine NOR gates to create AND, then invert

<strong>XOR gate from NOR:</strong>
Y = A'B + AB' (using 5 NOR gates)
                            </div>
                        </div>
                        
<div class="key-points">
                            <h4>Key Properties</h4>
                            <ul>
                                <li><strong>Universal gate:</strong> Can implement any Boolean function</li>
                                <li>Output is 1 only when ALL inputs are 0</li>
                                <li>Widely used in CMOS technology</li>
                                <li>Essential in memory circuits (SR latch)</li>
                                <li>Preferred in some IC designs</li>
                            </ul>
                        </div>
                    </div>
                    
<div class="note">
                        <strong>💡 Why Universal Gates Matter:</strong> In practical circuit design, it's often more cost-effective to use only one type of gate (NAND or NOR) throughout the entire circuit. This simplifies manufacturing, reduces costs, and makes circuit boards easier to design and troubleshoot.
                    </div>
                </div>
            </div>