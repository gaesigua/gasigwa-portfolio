# ⚡ Electrical Circuits

Understanding electrical circuits is fundamental to electronics, electrical engineering, and modern technology. From the simplest flashlight to complex computers, everything relies on electrical circuits.

<div class="content">
            <!-- <div class="intro-box">
                <h2>Introduction to Electrical Circuits!</h2>
                <p style="margin-top: 15px;"><strong>In this course, you'll learn:</strong></p>
                <ul style="margin-top: 10px; margin-left: 20px; line-height: 2;">
                    <li>1. Basic electrical concepts: voltage, current, resistance, and power</li>
                    <li>2. Ohm's Law and Kirchhoff's Laws</li>
                    <li>3. Series and parallel circuits</li>
                    <li>4. Circuit components: resistors, capacitors, inductors</li>
                    <li>5. AC vs DC circuits</li>
                    <li>6. Circuit analysis techniques</li>
                    <li>7. Real-world applications and safety</li>
                </ul>
            </div> -->

<div id="basics" class="section active">
<div class="module">
                    
## What is an Electrical Circuit?

---

An <strong>electrical circuit</strong> is a closed pathway (or loop) that allows electric current to flow. It consists of a power source, conductors (wires), and usually some components that use the electrical energy.
                    
<div class="key-points">
    <h4>🔑 Essential Components of a Circuit</h4>
        <ul>
            <li><strong>1. Power Source:</strong> Provides electrical energy (battery, generator, power supply)</li>
            <li><strong>2. Conductors:</strong> Wires that carry current between components</li>
            <li><strong>3. Load:</strong> Devices that use electrical energy (light bulb, motor, resistor)</li>
            <li><strong>4. Control Device:</strong> Switches, buttons that control current flow</li>
            <li><strong>5. Protection:</strong> Fuses, circuit breakers that prevent damage</li>
        </ul>
</div>
                    
## The Four Fundamental Quantities

---
                                        
<!-- CURRENT -->

<div class="concept-card">
    <div class="concept-header">
        <div class="concept-name">1. Current (I)</div>
        <span style="background: #2196f3; color: white; padding: 5px 15px; border-radius: 20px; font-weight: bold;">FLOW</span>
    </div>
                        
<p><strong>Definition:</strong> Current is the rate of flow of electric charge through a conductor. It measures how many electrons pass through a point per second.</p>
                        
<div class="formula-box">
Symbol: I<br>
Unit: Ampere (A) or Amp<br>
Named after: André-Marie Ampère<br>
1 Ampere = 6.242 × 10¹⁸ electrons per second
</div>
                        
<div class="example">
<h4>💡 Analogy: Water Flow</h4>
    <p>Think of current like the flow rate of water in a pipe:</p>
    <ul style="margin-left: 20px; margin-top: 10px;">
                                <li><strong>High current (high flow):</strong> Many electrons moving per second</li>
                                <li><strong>Low current (low flow):</strong> Few electrons moving per second</li>
                                <li><strong>No current (no flow):</strong> No electron movement</li>
                            </ul>
                            <p style="margin-top: 10px;">A garden hose might flow 5 liters/minute, while a fire hose flows 500 liters/minute. Similarly, an LED might use 0.02A while an electric heater uses 10A.</p>
                        </div>
                        
<table class="data-table">
                            <tr>
                                <th>Device</th>
                                <th>Typical Current</th>
                                <th>Category</th>
                            </tr>
                            <tr><td>LED Light</td><td>0.02 A (20 mA)</td><td>Very Low</td></tr>
                            <tr><td>Smartphone Charging</td><td>1-2 A</td><td>Low</td></tr>
                            <tr><td>Laptop</td><td>2-4 A</td><td>Medium</td></tr>
                            <tr><td>Microwave</td><td>8-13 A</td><td>High</td></tr>
                            <tr><td>Electric Heater</td><td>10-15 A</td><td>Very High</td></tr>
                        </table>
                        
<div class="key-points">
                            <h4>Key Facts About Current</h4>
                            <ul>
                                <li>Measured through a conductor (flow through a point)</li>
                                <li>Direction: Conventional current flows from + to -, electron flow is opposite</li>
                                <li>Common units: milliamps (mA) = 0.001 A, microamps (μA) = 0.000001 A</li>
                                <li>Too much current can damage components or cause fires</li>
                            </ul>
                        </div>
                    </div>
                    
<!-- RESISTANCE -->
<div class="concept-card">
    <div class="concept-header">
        <div class="concept-name">2. Resistance (R)</div>
            <span style="background: #ff9800; color: white; padding: 5px 15px; border-radius: 20px; font-weight: bold;">OPPOSITION</span>
    </div>
                        
<p><strong>Definition:</strong> Resistance is the opposition to current flow in a circuit. Materials with high resistance make it difficult for current to pass through.</p>
                        
<div class="formula-box">
    Symbol: R<br>
    Unit: Ohm (Ω)<br>
    Named after: Georg Simon Ohm
</div>
                        
<div class="example">
                            <h4>💡 Analogy: Pipe Friction</h4>
                            <p>Think of resistance like friction in a water pipe:</p>
                            <ul style="margin-left: 20px; margin-top: 10px;">
                                <li><strong>Wide, smooth pipe (low resistance):</strong> Water flows easily</li>
                                <li><strong>Narrow, rough pipe (high resistance):</strong> Water flows with difficulty</li>
                                <li><strong>Blocked pipe (infinite resistance):</strong> No water can flow</li>
                            </ul>
                            <p style="margin-top: 10px;">Similarly, copper wire has low resistance (easy for electrons), while rubber has very high resistance (difficult for electrons).</p>
                        </div>
                        
<table class="data-table">
                            <tr>
                                <th>Material</th>
                                <th>Resistance Level</th>
                                <th>Use</th>
                            </tr>
                            <tr><td>Silver, Copper</td><td>Very Low (< 0.1 Ω/m)</td><td>Conductors / Wires</td></tr>
                            <tr><td>Aluminum, Gold</td><td>Low (< 1 Ω/m)</td><td>Conductors</td></tr>
                            <tr><td>Carbon, Nichrome</td><td>Medium (1-100 Ω)</td><td>Resistors, Heaters</td></tr>
                            <tr><td>Glass, Rubber</td><td>Very High (>10¹² Ω)</td><td>Insulators</td></tr>
                        </table>
                        
<div class="key-points">
                            <h4>Factors Affecting Resistance</h4>
                            <ul>
                                <li><strong>Material:</strong> Different materials have different resistivities</li>
                                <li><strong>Length:</strong> Longer wires have more resistance (R ∝ L)</li>
                                <li><strong>Cross-sectional Area:</strong> Thicker wires have less resistance (R ∝ 1/A)</li>
                                <li><strong>Temperature:</strong> Most materials increase resistance when heated</li>
                            </ul>
                        </div>
                        
<div class="formula-box" style="background: #fff3cd;">
                            R = ρ × (L / A)<br><br>
                            ρ (rho) = resistivity of material<br>
                            L = length of conductor<br>
                            A = cross-sectional area
                        </div>
                    </div>

<!-- VOLTAGE -->

<div class="concept-card">
    <div class="concept-header">
        <div class="concept-name">3. Voltage (V)</div>
            <span style="background: #4caf50; color: white; padding: 5px 15px; border-radius: 20px; font-weight: bold;">POTENTIAL</span>
    </div>
                        
<p><strong>Definition:</strong> Voltage is the electrical pressure or potential difference that pushes electrons through a circuit. It's the "force" that drives current.</p>
                        
<div class="formula-box">
Symbol: V (or E)<br>
Unit: Volt (V)<br>
Named after: Alessandro Volta
</div>
                        
<div class="example">
    <h4>💡 Analogy: Water Pressure</h4>
    <p>Think of voltage like water pressure in a pipe:</p>
    <ul style="margin-left: 20px; margin-top: 10px;">
        <li><strong>High pressure (high voltage):</strong> Water flows forcefully</li>
        <li><strong>Low pressure (low voltage):</strong> Water flows slowly</li>
        <li><strong>No pressure (no voltage):</strong> No water flow</li>
    </ul>
    <p style="margin-top: 10px;">Just as water needs pressure to flow, electrons need voltage to move through a circuit.</p>
</div>
                        
<div class="key-points">
                            <h4>Key Facts About Voltage</h4>
                            <ul>
                                <li>Measured across two points (potential difference)</li>
                                <li>Common voltages: 1.5V (AA battery), 9V (9V battery), 12V (car battery), 120V (US outlets), 230V (European outlets)</li>
                                <li>Voltage can be positive or negative (direction matters)</li>
                                <li>Higher voltage = more "push" for electrons</li>
                            </ul>
                        </div>
                    </div>
                    
<!-- POWER -->
<div class="concept-card">
                        <div class="concept-header">
                            <div class="concept-name">4. Power (P)</div>
                            <span style="background: #9c27b0; color: white; padding: 5px 15px; border-radius: 20px; font-weight: bold;">ENERGY RATE</span>
                        </div>
                        
<p><strong>Definition:</strong> Power is the rate at which electrical energy is transferred or consumed. It tells us how much energy is used per unit time.</p>
                        
<div class="formula-box">
                            Symbol: P<br>
                            Unit: Watt (W)<br>
                            Named after: James Watt<br>
                            1 Watt = 1 Joule per second
                        </div>
                        
<div class="example">
                            <h4>💡 Analogy: Work Rate</h4>
                            <p>Think of power like how fast you do work:</p>
                            <ul style="margin-left: 20px; margin-top: 10px;">
                                <li><strong>High power:</strong> Fast energy consumption (like sprinting)</li>
                                <li><strong>Low power:</strong> Slow energy consumption (like walking)</li>
                                <li><strong>Same energy, different power:</strong> Climbing stairs quickly vs. slowly uses same total energy but different power</li>
                            </ul>
                        </div>
                        
<table class="data-table">
                            <tr>
                                <th>Appliance</th>
                                <th>Typical Power</th>
                                <th>Cost Impact</th>
                            </tr>
                            <tr><td>LED Bulb</td><td>8-15 W</td><td>Very Low</td></tr>
                            <tr><td>Laptop</td><td>50-100 W</td><td>Low</td></tr>
                            <tr><td>Desktop Computer</td><td>200-500 W</td><td>Medium</td></tr>
                            <tr><td>Microwave</td><td>1000-1500 W</td><td>High</td></tr>
                            <tr><td>Electric Heater</td><td>1500-3000 W</td><td>Very High</td></tr>
                        </table>
                    </div>
                    

## Circuit Symbols

---

<p>Understanding circuit diagrams requires knowing standard symbols:</p>
                    
<div class="symbol-grid">
    <div class="symbol-card">
        <svg viewBox="0 0 100 60">
            <line x1="10" y1="30" x2="40" y2="30" stroke="#333" stroke-width="2"/>
            <line x1="60" y1="30" x2="90" y2="30" stroke="#333" stroke-width="2"/>
            <line x1="40" y1="20" x2="40" y2="40" stroke="#333" stroke-width="3"/>
            <line x1="60" y1="15" x2="60" y2="45" stroke="#333" stroke-width="3"/>
        </svg>
        <strong>Battery</strong><br>
        (Power Source)
    </div>
                        <div class="symbol-card">
                            <svg viewBox="0 0 100 60">
                                <line x1="10" y1="30" x2="30" y2="30" stroke="#333" stroke-width="2"/>
                                <rect x="30" y="20" width="40" height="20" fill="none" stroke="#333" stroke-width="2"/>
                                <line x1="70" y1="30" x2="90" y2="30" stroke="#333" stroke-width="2"/>
                            </svg>
                            <strong>Resistor</strong><br>
                            (Opposes current)
                        </div>
                        <div class="symbol-card">
                            <svg viewBox="0 0 100 60">
                                <line x1="10" y1="30" x2="35" y2="30" stroke="#333" stroke-width="2"/>
                                <circle cx="50" cy="30" r="15" fill="none" stroke="#333" stroke-width="2"/>
                                <line x1="65" y1="30" x2="90" y2="30" stroke="#333" stroke-width="2"/>
                                <line x1="45" y1="25" x2="55" y2="35" stroke="#333" stroke-width="2"/>
                                <line x1="45" y1="35" x2="55" y2="25" stroke="#333" stroke-width="2"/>
                            </svg>
                            <strong>Bulb</strong><br>
                            (Light source)
                        </div>
                        <div class="symbol-card">
                            <svg viewBox="0 0 100 60">
                                <line x1="10" y1="30" x2="40" y2="30" stroke="#333" stroke-width="2"/>
                                <circle cx="50" cy="30" r="8" fill="none" stroke="#333" stroke-width="2"/>
                                <line x1="60" y1="30" x2="90" y2="30" stroke="#333" stroke-width="2"/>
                            </svg>
                            <strong>Switch</strong><br>
                            (Control current)
                        </div>
                        <div class="symbol-card">
                            <svg viewBox="0 0 100 60">
                                <line x1="10" y1="30" x2="40" y2="30" stroke="#333" stroke-width="2"/>
                                <line x1="40" y1="20" x2="60" y2="20" stroke="#333" stroke-width="2"/>
                                <line x1="40" y1="40" x2="60" y2="40" stroke="#333" stroke-width="2"/>
                                <line x1="60" y1="30" x2="90" y2="30" stroke="#333" stroke-width="2"/>
                            </svg>
                            <strong>Capacitor</strong><br>
                            (Stores charge)
                        </div>
                        <div class="symbol-card">
                            <svg viewBox="0 0 100 60">
                                <path d="M 10,30 Q 30,10 50,30 T 90,30" fill="none" stroke="#333" stroke-width="2"/>
                            </svg>
                            <strong>Inductor</strong><br>
                            (Stores energy)
                        </div>
                    </div>
                    
<div class="note">
                        <strong>💡 Important:</strong> A complete circuit must form a closed loop for current to flow. If there's a break anywhere (open switch, disconnected wire), current stops flowing throughout the entire circuit.
                    </div>
                </div>
            </div>