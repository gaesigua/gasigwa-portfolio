<div class="container">
    <div class="header">
            <h1>⚡ Electrical Circuits</h1>
            <p>Master the Fundamentals of Current Electricity and Circuit Analysis</p>
    </div>
    <div class="content">
            <div class="intro-box">
                <h2>Welcome to Electrical Circuits!</h2>
                <p>Electrical circuits are the foundation of all modern electronic devices and power systems. Understanding how electricity flows and how to analyze circuits is essential for anyone interested in electronics, electrical engineering, or physics.</p>
                <p style="margin-top: 15px;"><strong>In this comprehensive course, you'll learn:</strong></p>
                <ul style="margin-top: 10px; margin-left: 20px; line-height: 2;">
                    <li>The fundamentals of current electricity and charge flow</li>
                    <li>What electric current is and how to measure it</li>
                    <li>Understanding resistance and conductance</li>
                    <li>Ohm's Law - the most important relationship in circuits</li>
                    <li>How to perform simple electrical measurements</li>
                    <li>Practical applications and problem-solving techniques</li>
                </ul>
            </div>
    <div class="nav-tabs">
                <button class="tab-btn active" onclick="showSection('intro')">Introduction</button>
                <button class="tab-btn" onclick="showSection('current')">Electric Current</button>
                <button class="tab-btn" onclick="showSection('resistance')">Resistance</button>
                <button class="tab-btn" onclick="showSection('conductance')">Conductance</button>
                <button class="tab-btn" onclick="showSection('ohms')">Ohm's Law</button>
                <button class="tab-btn" onclick="showSection('measurements')">Measurements</button>
                <button class="tab-btn" onclick="showSection('practice')">Practice & Quizzes</button>
    </div>
            
<!-- INTRODUCTION SECTION -->
<div id="intro" class="section active">
                <div class="module">
                    <h2>📚 Introduction to Current Electricity</h2>
                    
<h3>What is Electricity?</h3>
    <p style="font-size: 1.1em; margin-bottom: 20px;">Electricity is a form of energy resulting from the presence and flow of electric charge. It is one of the most versatile forms of energy and powers much of modern civilization.</p>
                    
<h3>Two Types of Electricity</h3>
<div class="icon-grid">
                        <div class="icon-card">
                            <div class="icon">⚡</div>
                            <h5>Static Electricity</h5>
                            <p>Stationary electric charges that accumulate on the surface of materials. Example: Lightning, rubbing a balloon on hair</p>
                        </div>
                        <div class="icon-card">
                            <div class="icon">🔋</div>
                            <h5>Current Electricity</h5>
                            <p>Moving electric charges flowing through a conductor. Example: Electricity in wires, batteries powering devices</p>
                        </div>
                    </div>
                    
<div class="note">
                        <strong>💡 Focus of This Course:</strong> We will focus on <strong>current electricity</strong> - the continuous flow of electric charge through conductors.
                    </div>
                    
<h3>Fundamental Concepts</h3>
                    
<div class="definition-card">
                        <h4>Electric Charge</h4>
                        <p>Electric charge is a fundamental property of matter. There are two types of charges:</p>
                        <ul style="margin-left: 20px; margin-top: 10px;">
                            <li><strong>Positive Charge (+):</strong> Carried by protons</li>
                            <li><strong>Negative Charge (−):</strong> Carried by electrons</li>
                        </ul>
                        <p style="margin-top: 15px;"><strong>Unit:</strong> Coulomb (C)</p>
                        <p><strong>Symbol:</strong> Q or q</p>
                        <p style="margin-top: 10px;"><strong>Key Facts:</strong></p>
                        <ul style="margin-left: 20px; margin-top: 5px;">
                            <li>Like charges repel each other</li>
                            <li>Unlike charges attract each other</li>
                            <li>Charge is quantized (comes in discrete amounts)</li>
                            <li>Elementary charge (electron): e = 1.602 × 10⁻¹⁹ C</li>
                        </ul>
                    </div>
                    
<div class="definition-card">
                        <h4>Conductors vs Insulators</h4>
                        <table class="comparison-table">
                            <tr>
                                <th>Property</th>
                                <th>Conductors</th>
                                <th>Insulators</th>
                            </tr>
                            <tr>
                                <td><strong>Definition</strong></td>
                                <td>Materials that allow electric charge to flow easily</td>
                                <td>Materials that resist the flow of electric charge</td>
                            </tr>
                            <tr>
                                <td><strong>Free Electrons</strong></td>
                                <td>Many free electrons available</td>
                                <td>Very few or no free electrons</td>
                            </tr>
                            <tr>
                                <td><strong>Examples</strong></td>
                                <td>Copper, aluminum, silver, gold, iron, human body</td>
                                <td>Rubber, plastic, glass, wood, air, ceramic</td>
                            </tr>
                            <tr>
                                <td><strong>Applications</strong></td>
                                <td>Wires, cables, circuit components</td>
                                <td>Wire insulation, protective coatings, safety equipment</td>
                            </tr>
                        </table>
</div>
                    
<div class="definition-card">
                        <h4>Semiconductors</h4>
                        <p>Materials with conductivity between conductors and insulators. Their conductivity can be controlled.</p>
                        <p style="margin-top: 10px;"><strong>Examples:</strong> Silicon, Germanium</p>
                        <p><strong>Applications:</strong> Transistors, diodes, integrated circuits, computer chips</p>
</div>
                    
<h3>What is an Electric Circuit?</h3>
<div class="definition-card">
    <h4>Definition</h4>
    <p>An electric circuit is a closed path or loop through which electric current can flow. It consists of a source of electrical energy and components connected by conducting wires.</p>
                        
<div class="key-points" style="margin-top: 20px;">
    <h4>Essential Components of a Circuit:</h4>
                            <ul>
                                <li><strong>Power Source:</strong> Provides electrical energy (battery, generator, power supply)</li>
                                <li><strong>Conductors:</strong> Wires that carry electric current</li>
                                <li><strong>Load:</strong> Device that uses electrical energy (bulb, motor, resistor)</li>
                                <li><strong>Control Device:</strong> Switch to open or close the circuit</li>
                            </ul>
</div>
</div>
                    
<div class="circuit-diagram">
                        <h4 style="color: #667eea; margin-bottom: 20px;">Simple Circuit Diagram</h4>
                        <div style="font-size: 1.2em; line-height: 2;">
                            <p>┌─────────[Switch]─────────┐</p>
                            <p>│                           │</p>
                            <p>[Battery +−]            [Bulb 💡]</p>
                            <p>│                           │</p>
                            <p>└───────────────────────────┘</p>
                        </div>
                        <p style="margin-top: 20px; color: #666;">When the switch is closed, current flows from the battery through the bulb, making it light up.</p>
                    </div>
                    
<h3>Types of Circuits</h3>
                    <div class="icon-grid">
                        <div class="icon-card">
                            <div class="icon">🔴</div>
                            <h5>Open Circuit</h5>
                            <p>Incomplete path - current cannot flow. Switch is open or wire is broken.</p>
                        </div>
                        <div class="icon-card">
                            <div class="icon">🟢</div>
                            <h5>Closed Circuit</h5>
                            <p>Complete path - current flows continuously. Switch is closed.</p>
                        </div>
                        <div class="icon-card">
                            <div class="icon">⚠️</div>
                            <h5>Short Circuit</h5>
                            <p>Path of very low resistance, bypassing the load. Can cause damage.</p>
                        </div>
                    </div>
                    
<div class="warning">
                        <strong>⚠️ Safety Warning:</strong> Short circuits can cause excessive current flow, leading to overheating, fire, or damage to components. Always use proper fuses and circuit breakers for protection.
                    </div>
                    
<h3>Direct Current (DC) vs Alternating Current (AC)</h3>
                    <table class="comparison-table">
                        <tr>
                            <th>Property</th>
                            <th>Direct Current (DC)</th>
                            <th>Alternating Current (AC)</th>
                        </tr>
                        <tr>
                            <td><strong>Direction</strong></td>
                            <td>Flows in one direction only</td>
                            <td>Changes direction periodically</td>
                        </tr>
                        <tr>
                            <td><strong>Magnitude</strong></td>
                            <td>Constant over time</td>
                            <td>Varies sinusoidally with time</td>
                        </tr>
                        <tr>
                            <td><strong>Sources</strong></td>
                            <td>Batteries, solar cells, DC power supplies</td>
                            <td>Generators, wall outlets, power stations</td>
                        </tr>
                        <tr>
                            <td><strong>Applications</strong></td>
                            <td>Mobile devices, laptops, cars, flashlights</td>
                            <td>Household appliances, power transmission</td>
                        </tr>
                        <tr>
                            <td><strong>Frequency</strong></td>
                            <td>0 Hz (no frequency)</td>
                            <td>50 Hz or 60 Hz (depending on region)</td>
                        </tr>
                    </table>
                    
<div class="note">
                        <strong>💡 Course Focus:</strong> In this course, we will primarily focus on <strong>Direct Current (DC)</strong> circuits, which are easier to understand and form the foundation for studying AC circuits.
</div>
</div>
</div>