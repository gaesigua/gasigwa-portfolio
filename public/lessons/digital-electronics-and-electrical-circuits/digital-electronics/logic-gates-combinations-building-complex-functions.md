<!-- GATE COMBINATIONS SECTION -->
            
<!-- <div id="combinations" class="section"> -->
<!-- <div class="module"> -->
<!-- <h2>🔗 Logic Gate Combinations</h2> -->

# Logic Gate Combinations
                    
## Building Complex Functions

<p>Complex digital circuits are built by combining basic logic gates. Let's explore some common combinations and their applications.</p>
                    
<div class="circuit-example">
                        <h4>1. Half Adder</h4>
                        <p><strong>Purpose:</strong> Adds two single bits and produces a sum and carry output.</p>
                        
<div class="key-points">
                            <h4>Circuit Components</h4>
                            <ul>
                                <li>1 XOR gate (for SUM)</li>
                                <li>1 AND gate (for CARRY)</li>
                            </ul>
                        </div>
                        
<div class="logic-expression">
                            SUM = A ⊕ B<br>
                            CARRY = A · B
                        </div>
                        
<table class="truth-table">
                            <tr>
                                <th>A</th>
                                <th>B</th>
                                <th>SUM</th>
                                <th>CARRY</th>
                                <th>Decimal</th>
                            </tr>
                            <tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0 + 0 = 0</td></tr>
                            <tr><td>0</td><td>1</td><td>1</td><td>0</td><td>0 + 1 = 1</td></tr>
                            <tr><td>1</td><td>0</td><td>1</td><td>0</td><td>1 + 0 = 1</td></tr>
                            <tr><td>1</td><td>1</td><td>0</td><td>1</td><td>1 + 1 = 2 (10 in binary)</td></tr>
                        </table>
                        
<div class="example">
    <h4>Why it's called "Half" Adder</h4>
    <p>It can add two bits but cannot handle a carry input from a previous addition. For multi-bit addition, we need a Full Adder.</p>
                        </div>
                    </div>
                    
<div class="circuit-example">
                        <h4>2. Full Adder</h4>
                        <p><strong>Purpose:</strong> Adds three bits (two inputs + carry from previous stage) and produces sum and carry outputs.</p>
                        
<div class="key-points">
                            <h4>Circuit Components</h4>
                            <ul>
                                <li>2 XOR gates</li>
                                <li>2 AND gates</li>
                                <li>1 OR gate</li>
                            </ul>
                        </div>
                        
<div class="logic-expression">
                            SUM = A ⊕ B ⊕ C<sub>in</sub><br>
                            CARRY<sub>out</sub> = (A · B) + (C<sub>in</sub> · (A ⊕ B))
                        </div>
                        
<table class="truth-table">
                            <tr>
                                <th>A</th>
                                <th>B</th>
                                <th>C<sub>in</sub></th>
                                <th>SUM</th>
                                <th>C<sub>out</sub></th>
                            </tr>
                            <tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
                            <tr><td>0</td><td>0</td><td>1</td><td>1</td><td>0</td></tr>
                            <tr><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td></tr>
                            <tr><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td></tr>
                            <tr><td>1</td><td>0</td><td>0</td><td>1</td><td>0</td></tr>
                            <tr><td>1</td><td>0</td><td>1</td><td>0</td><td>1</td></tr>
                            <tr><td>1</td><td>1</td><td>0</td><td>0</td><td>1</td></tr>
                            <tr><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td></tr>
                        </table>
                    </div>
                    
<div class="circuit-example">
                        <h4>3. 2-to-1 Multiplexer (MUX)</h4>
                        <p><strong>Purpose:</strong> Selects one of two inputs based on a select line.</p>
                        
<div class="key-points">
                            <h4>Circuit Components</h4>
                            <ul>
                                <li>2 AND gates</li>
                                <li>1 OR gate</li>
                                <li>1 NOT gate</li>
                            </ul>
                        </div>
                        
<div class="logic-expression">
                            Y = (S' · A) + (S · B)<br>
                            If S=0, output Y=A<br>
                            If S=1, output Y=B
                        </div>
                        
<table class="truth-table">
                            <tr>
                                <th>Select (S)</th>
                                <th>Input A</th>
                                <th>Input B</th>
                                <th>Output Y</th>
                            </tr>
                            <tr><td>0</td><td>0</td><td>X</td><td>0</td></tr>
                            <tr><td>0</td><td>1</td><td>X</td><td>1</td></tr>
                            <tr><td>1</td><td>X</td><td>0</td><td>0</td></tr>
                            <tr><td>1</td><td>X</td><td>1</td><td>1</td></tr>
                        </table>
                        
<div class="example">
                            <h4>Application: Data Routing</h4>
                            <p>A multiplexer can route data from multiple sources to a single destination, like selecting between different input devices (keyboard or mouse).</p>
                        </div>
                    </div>
                    
<div class="circuit-example">
                        <h4>4. 1-to-2 Demultiplexer (DEMUX)</h4>
                        <p><strong>Purpose:</strong> Routes one input to one of two outputs based on a select line.</p>
                        
<div class="logic-expression">
                            Y0 = S' · D<br>
                            Y1 = S · D
                        </div>
                        
<table class="truth-table">
                            <tr>
                                <th>Select (S)</th>
                                <th>Input D</th>
                                <th>Output Y0</th>
                                <th>Output Y1</th>
                            </tr>
                            <tr><td>0</td><td>0</td><td>0</td><td>0</td></tr>
                            <tr><td>0</td><td>1</td><td>1</td><td>0</td></tr>
                            <tr><td>1</td><td>0</td><td>0</td><td>0</td></tr>
                            <tr><td>1</td><td>1</td><td>0</td><td>1</td></tr>
                        </table>
                    </div>
                    
<div class="circuit-example">
                        <h4>5. Encoder (4-to-2)</h4>
                        <p><strong>Purpose:</strong> Converts 4 input lines into 2-bit binary code.</p>
                        
<table class="truth-table">
                            <tr>
                                <th>I0</th>
                                <th>I1</th>
                                <th>I2</th>
                                <th>I3</th>
                                <th>Y1</th>
                                <th>Y0</th>
                            </tr>
                            <tr><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
                            <tr><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>1</td></tr>
                            <tr><td>0</td><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td></tr>
                            <tr><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td><td>1</td></tr>
                        </table>
                        
<div class="logic-expression">
                            Y1 = I2 + I3<br>
                            Y0 = I1 + I3
                        </div>
                    </div>
                    
<div class="circuit-example">
                        <h4>6. Decoder (2-to-4)</h4>
                        <p><strong>Purpose:</strong> Converts 2-bit binary input into 4 output lines (only one active at a time).</p>
                        
<table class="truth-table">
                            <tr>
                                <th>A1</th>
                                <th>A0</th>
                                <th>Y0</th>
                                <th>Y1</th>
                                <th>Y2</th>
                                <th>Y3</th>
                            </tr>
                            <tr><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td></tr>
                            <tr><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td></tr>
                            <tr><td>1</td><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td></tr>
                            <tr><td>1</td><td>1</td><td>0</td><td>0</td><td>0</td><td>1</td></tr>
                        </table>
                        
<div class="logic-expression">
                            Y0 = A1' · A0'<br>
                            Y1 = A1' · A0<br>
                            Y2 = A1 · A0'<br>
                            Y3 = A1 · A0
                        </div>
                    </div>