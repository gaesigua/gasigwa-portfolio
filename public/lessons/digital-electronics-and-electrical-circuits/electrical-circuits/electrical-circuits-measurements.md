<!-- MEASUREMENTS SECTION -->
<div id="measurements" class="section">
                <div class="module">
                    <h2>📏 Simple Electrical Measurements</h2>
                    
<p style="font-size: 1.1em; margin-bottom: 25px;">Measuring electrical quantities accurately is essential for circuit analysis, troubleshooting, and verification. Let's explore the key instruments and techniques.</p>
                    
<h3>Basic Measuring Instruments</h3>
                    
<div class="definition-card">
    <h4>1. Ammeter</h4>
    <p><strong>Purpose:</strong> Measures electric current flowing through a circuit</p>
                        
<div class="key-points" style="margin-top: 15px;">
    <h4>Key Characteristics:</h4>
                            <ul>
                                <li><strong>Unit:</strong> Amperes (A)</li>
                                <li><strong>Connection:</strong> Must be connected in SERIES with the circuit</li>
                                <li><strong>Internal Resistance:</strong> Very low (ideally zero) to avoid affecting circuit current</li>
                                <li><strong>Symbol in Circuit:</strong> A in a circle</li>
                                <li><strong>Polarity:</strong> Must be connected correctly (+ to + terminal)</li>
                            </ul>
                        </div>
                        
<div class="warning" style="margin-top: 15px;">
                            <strong>⚠️ Warning:</strong> NEVER connect an ammeter in parallel with a power source! This creates a short circuit and can destroy the ammeter and cause danger.
                        </div>
                        
<div class="example" style="margin-top: 15px;">
                            <h4>How to Use an Ammeter:</h4>
                            <ol style="margin-left: 20px;">
                                <li>Break the circuit at the point where current is to be measured</li>
                                <li>Connect the ammeter in series (current must flow through it)</li>
                                <li>Ensure correct polarity (current enters at + terminal)</li>
                                <li>Start with the highest range, then switch to lower ranges for accuracy</li>
                                <li>Read the measurement</li>
                            </ol>
                        </div>
                    </div>
                    
<div class="definition-card">
                        <h4>2. Voltmeter</h4>
                        <p><strong>Purpose:</strong> Measures voltage (potential difference) between two points in a circuit</p>
                        
<div class="key-points" style="margin-top: 15px;">
                            <h4>Key Characteristics:</h4>
                            <ul>
                                <li><strong>Unit:</strong> Volts (V)</li>
                                <li><strong>Connection:</strong> Must be connected in PARALLEL across the component</li>
                                <li><strong>Internal Resistance:</strong> Very high (ideally infinite) to draw minimal current</li>
                                <li><strong>Symbol in Circuit:</strong> V in a circle</li>
                                <li><strong>Polarity:</strong> Connect + terminal to higher potential point</li>
                            </ul>
                        </div>
                        
<div class="example" style="margin-top: 15px;">
                            <h4>How to Use a Voltmeter:</h4>
                            <ol style="margin-left: 20px;">
                                <li>Identify the two points where voltage is to be measured</li>
                                <li>Connect the voltmeter in parallel (without breaking the circuit)</li>
                                <li>Connect + terminal to the higher potential point</li>
                                <li>Select appropriate range</li>
                                <li>Read the measurement</li>
                            </ol>
                        </div>
                    </div>
                    
<div class="definition-card">
                        <h4>3. Ohmmeter</h4>
                        <p><strong>Purpose:</strong> Measures resistance of a component</p>
                        
<div class="key-points" style="margin-top: 15px;">
                            <h4>Key Characteristics:</h4>
                            <ul>
                                <li><strong>Unit:</strong> Ohms (Ω)</li>
                                <li><strong>Connection:</strong> Component must be ISOLATED from circuit (no power)</li>
                                <li><strong>Internal Power:</strong> Has its own battery to provide test current</li>
                                <li><strong>Symbol in Circuit:</strong> Ω in a circle</li>
                            </ul>
                        </div>
                        
<div class="warning" style="margin-top: 15px;">
                            <strong>⚠️ Warning:</strong> NEVER use an ohmmeter on a powered circuit! Always disconnect power and discharge capacitors before measuring resistance.
                        </div>
                        
<div class="example" style="margin-top: 15px;">
                            <h4>How to Use an Ohmmeter:</h4>
                            <ol style="margin-left: 20px;">
                                <li>Disconnect power from the circuit completely</li>
                                <li>Remove or isolate the component if possible</li>
                                <li>Discharge any capacitors</li>
                                <li>Connect ohmmeter leads across the component</li>
                                <li>Read the resistance value</li>
                            </ol>
                        </div>
                    </div>
                    
<div class="definition-card">
                        <h4>4. Multimeter (Digital/Analog)</h4>
                        <p><strong>Purpose:</strong> A versatile instrument that can measure voltage, current, and resistance</p>
                        
<div class="key-points" style="margin-top: 15px;">
                            <h4>Features:</h4>
                            <ul>
                                <li>Combines ammeter, voltmeter, and ohmmeter in one device</li>
                                <li>Can measure both AC and DC quantities</li>
                                <li>Multiple ranges for each measurement type</li>
                                <li>Some models include additional features (capacitance, frequency, diode test, continuity)</li>
                                <li><strong>Digital:</strong> LCD display, more accurate, easier to read</li>
                                <li><strong>Analog:</strong> Moving needle, good for observing fluctuations</li>
                            </ul>
                        </div>
                    </div>
                    
<h3>Comparison of Measuring Instruments</h3>
                    <table class="comparison-table">
                        <tr>
                            <th>Instrument</th>
                            <th>Measures</th>
                            <th>Connection</th>
                            <th>Internal Resistance</th>
                            <th>Power Required</th>
                        </tr>
                        <tr>
                            <td><strong>Ammeter</strong></td>
                            <td>Current (A)</td>
                            <td>Series</td>
                            <td>Very Low (≈0)</td>
                            <td>Circuit provides</td>
                        </tr>
                        <tr>
                            <td><strong>Voltmeter</strong></td>
                            <td>Voltage (V)</td>
                            <td>Parallel</td>
                            <td>Very High (≈∞)</td>
                            <td>Circuit provides</td>
                        </tr>
                        <tr>
                            <td><strong>Ohmmeter</strong></td>
                            <td>Resistance (Ω)</td>
                            <td>Isolated component</td>
                            <td>Variable</td>
                            <td>Own battery</td>
                        </tr>
                        <tr>
                            <td><strong>Multimeter</strong></td>
                            <td>V, I, R, more</td>
                            <td>Depends on mode</td>
                            <td>Depends on mode</td>
                            <td>Own battery</td>
                        </tr>
                    </table>
                    
<h3>Practical Measurement Examples</h3>
                    
<div class="example">
                        <h4>Example 1: Measuring Current</h4>
                        <p><strong>Scenario:</strong> You want to measure the current flowing through a light bulb in a circuit.</p>
                        
<div class="calculation">
<strong>Steps:</strong>
1. Turn off the power supply
2. Break the circuit - disconnect one wire from the bulb
3. Connect ammeter in series:
   - One lead to the disconnected point
   - Other lead to the bulb terminal
4. Ensure correct polarity (current flows from + to -)
5. Set ammeter to appropriate range (e.g., 10 A range)
6. Turn on power supply
7. Read the current value
8. If reading is low, switch to lower range for better accuracy

<strong>Example Reading:</strong>
If ammeter shows 0.5 A on the 10 A range
You could switch to 1 A range for more precise reading

<strong>Result:</strong> Current through bulb = 0.5 A
                        </div>
                    </div>
                    
<div class="example">
                        <h4>Example 2: Measuring Voltage</h4>
                        <p><strong>Scenario:</strong> You want to measure the voltage across a resistor in a circuit.</p>
                        
<div class="calculation">
<strong>Steps:</strong>
1. Keep the circuit connected and powered
2. Identify the two points across the resistor
3. Connect voltmeter in parallel:
   - Connect + lead to the point closer to battery +
   - Connect - lead to the point closer to battery -
4. Set voltmeter to appropriate range (e.g., 20 V)
5. Read the voltage
6. Adjust range if necessary for accuracy

<strong>Example Reading:</strong>
Circuit has 12 V battery, resistor shows 8 V drop

<strong>Result:</strong> Voltage across resistor = 8 V
<strong>Note:</strong> Remaining 4 V is dropped across other 
components or internal resistance
                        </div>
                    </div>
                    
<div class="example">
                        <h4>Example 3: Measuring Resistance</h4>
                        <p><strong>Scenario:</strong> You want to verify the resistance of a resistor marked as 100 Ω.</p>
                        
<div class="calculation">
<strong>Steps:</strong>
1. Completely disconnect resistor from any circuit
2. Ensure no power is connected
3. If resistor was in a circuit with capacitors, 
   wait for capacitors to discharge
4. Set multimeter/ohmmeter to resistance mode
5. Select appropriate range (e.g., 200 Ω range)
6. Connect leads to both ends of resistor
7. Read the resistance value

<strong>Example Reading:</strong>
Meter shows 98.5 Ω

<strong>Analysis:</strong>
Marked value: 100 Ω
Measured value: 98.5 Ω
Tolerance: Most resistors have ±5% or ±10% tolerance
100 Ω ± 5% = 95 to 105 Ω ✓

<strong>Result:</strong> Resistor is within tolerance, functioning correctly
                        </div>
                    </div>
                    
<h3>Safety Guidelines for Measurements</h3>
                    <div class="warning">
                        <h5 style="margin-bottom: 10px;">⚠️ Safety First!</h5>
                        <ul style="margin-left: 20px;">
                            <li><strong>Never touch bare wires</strong> or exposed connections when power is on</li>
                            <li><strong>Always start with highest range</strong> when unsure of expected values</li>
                            <li><strong>Check meter settings</strong> before connecting to circuit</li>
                            <li><strong>Use proper leads</strong> - check for damage before use</li>
                            <li><strong>Discharge capacitors</strong> before measuring resistance</li>
                            <li><strong>Don't measure resistance</strong> in powered circuits</li>
                            <li><strong>Observe polarity</strong> for DC measurements</li>
                            <li><strong>Keep one hand in pocket</strong> when measuring high voltages</li>
                            <li><strong>Use insulated tools</strong> and work on insulated surfaces</li>
                            <li><strong>Know your instrument limits</strong> - don't exceed maximum ratings</li>
                        </ul>
                    </div>
                    
<h3>Common Measurement Errors</h3>
                    <div class="key-points">
                        <h4>Avoid These Mistakes:</h4>
                        <ul>
                            <li><strong>Wrong Connection:</strong> Ammeter in parallel or voltmeter in series</li>
                            <li><strong>Wrong Range:</strong> Using too high a range reduces accuracy</li>
                            <li><strong>Reversed Polarity:</strong> Can damage analog meters or give negative readings</li>
                            <li><strong>Loading Effect:</strong> Meter changes circuit behavior (especially with high-resistance circuits)</li>
                            <li><strong>Parallax Error:</strong> Reading analog meters from wrong angle</li>
                            <li><strong>Zero Error:</strong> Not zeroing the meter before measurement</li>
                            <li><strong>Contact Resistance:</strong> Poor connections giving false readings</li>
                        </ul>
                    </div>
                    
<div class="note">
                        <strong>💡 Pro Tip:</strong> Always double-check your meter connections and settings before applying power. A moment of verification can prevent damaged equipment and ensure accurate measurements.
                    </div>
                </div>
            </div>
            