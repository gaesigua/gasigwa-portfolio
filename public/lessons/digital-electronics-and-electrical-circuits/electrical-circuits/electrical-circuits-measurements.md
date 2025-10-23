# 📏 Simple Electrical Measurements

<!-- <div id="measurements" class="section"> -->
<!-- <div class="module"> -->
                    
                    
<p style="font-size: 1.1em; margin-bottom: 25px;">Measuring electrical quantities accurately is essential for circuit analysis, troubleshooting, and verification. Let's explore the key instruments and techniques.</p>
                    
## Basic Measuring Instruments
                    
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
                    
## Comparison of Measuring Instruments

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