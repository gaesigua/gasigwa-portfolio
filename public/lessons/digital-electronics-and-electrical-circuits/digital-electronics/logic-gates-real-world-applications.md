<!-- APPLICATIONS SECTION -->
            
<!-- <div id="applications" class="section"> -->
<!-- <div class="module"> -->
<!-- <h2>🌍 Real-World Applications</h2> -->

# Real-World Applications
                    
## Where Logic Gates Are Used
                    
<div class="application-box">
                        <h4>1. Computer Processors (CPUs)</h4>
                        <p>Modern processors contain billions of logic gates working together to perform calculations and execute instructions.</p>
                        <div class="key-points">
                            <ul>
                                <li><strong>Arithmetic Logic Unit (ALU):</strong> Uses gates to perform addition, subtraction, and logical operations</li>
                                <li><strong>Control Unit:</strong> Uses gates to decode instructions and control data flow</li>
                                <li><strong>Registers:</strong> Built from flip-flops (which are made from gates) to store data</li>
                                <li><strong>Cache Memory:</strong> Uses gate arrays for fast data storage and retrieval</li>
                            </ul>
                        </div>
                    </div>
                    
<div class="application-box">
                        <h4>2. Memory Devices</h4>
                        <p>All forms of digital memory are built using logic gates.</p>
                        <div class="key-points">
                            <ul>
                                <li><strong>RAM:</strong> Each bit stored using gate configurations (SRAM uses 6 transistors/gates per bit)</li>
                                <li><strong>ROM:</strong> Uses decoder circuits (made from gates) to access stored data</li>
                                <li><strong>Flash Memory:</strong> NAND flash uses NAND gate architecture</li>
                                <li><strong>Cache:</strong> Built with SRAM gate arrays for high-speed access</li>
                            </ul>
                        </div>
                    </div>
                    
<div class="application-box">
                        <h4>3. Digital Communication</h4>
                        <div class="key-points">
                            <ul>
                                <li><strong>Error Detection:</strong> XOR gates in parity checkers</li>
                                <li><strong>Encryption:</strong> XOR operations in cryptographic algorithms</li>
                                <li><strong>Data Encoding:</strong> Gates in encoder/decoder circuits</li>
                                <li><strong>Signal Processing:</strong> Logic gates in digital signal processors (DSPs)</li>
                            </ul>
                        </div>
                    </div>
                    
<div class="application-box">
                        <h4>4. Control Systems</h4>
                        <div class="example">
                            <h4>Example: Automatic Car Door Lock System</h4>
                            <div class="boolean-algebra">
<strong>Requirements:</strong>
- Lock doors when speed > 10 km/h AND all doors closed
- Unlock when speed = 0 AND driver door opened

<strong>Logic Design:</strong>
Input A = Speed > 10 km/h (1 = Yes, 0 = No)
Input B = All doors closed (1 = Yes, 0 = No)
Input C = Speed = 0 (1 = Yes, 0 = No)
Input D = Driver door opened (1 = Yes, 0 = No)

LOCK = A · B
UNLOCK = C · D

Gates needed: 2 AND gates
                            </div>
                        </div>
                    </div>
                    
<div class="application-box">
                        <h4>5. Calculators and Displays</h4>
                        <div class="key-points">
                            <ul>
                                <li><strong>BCD to 7-Segment Decoder:</strong> Converts binary to display segments</li>
                                <li><strong>Arithmetic Circuits:</strong> Half adders, full adders for calculations</li>
                                <li><strong>Button Matrix:</strong> Encoder circuits to identify pressed keys</li>
                                <li><strong>Display Multiplexing:</strong> Uses decoders to control multiple displays</li>
                            </ul>
                        </div>
                    </div>
                    
<div class="application-box">
                        <h4>6. Industrial Automation</h4>
                        <div class="example">
                            <h4>Example: Conveyor Belt Control</h4>
                            <div class="boolean-algebra">
<strong>System Requirements:</strong>
Start conveyor when:
- Emergency stop NOT pressed AND
- Product detected on belt AND
- Destination ready

<strong>Logic Expression:</strong>
START = E' · P · D

Where:
E = Emergency stop (1 = Pressed)
P = Product detected (1 = Yes)
D = Destination ready (1 = Yes)

Gates needed: 1 NOT, 1 three-input AND
                            </div>
                        </div>
                    </div>
                    
<div class="application-box">
                        <h4>7. Digital Watches and Timers</h4>
                        <div class="key-points">
                            <ul>
                                <li><strong>Counters:</strong> Built from flip-flops and gates to count time pulses</li>
                                <li><strong>Dividers:</strong> Logic gates divide clock frequency for seconds, minutes, hours</li>
                                <li><strong>Comparators:</strong> Check when alarm time matches current time</li>
                                <li><strong>Display Drivers:</strong> Decoder circuits to show digits</li>
                            </ul>
                        </div>
                    </div>
                    
<div class="application-box">
                        <h4>8. Smartphone and Mobile Devices</h4>
                        <div class="key-points">
                            <ul>
                                <li><strong>Touchscreen Controllers:</strong> Logic gates process touch coordinates</li>
                                <li><strong>Power Management:</strong> Gates control charging, battery monitoring</li>
                                <li><strong>Audio/Video Processing:</strong> Digital signal processing using gate arrays</li>
                                <li><strong>Network Interfaces:</strong> Gates in WiFi, Bluetooth, cellular chips</li>
                            </ul>
                        </div>
                    </div>