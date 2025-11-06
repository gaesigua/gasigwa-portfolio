# Practical Circuit Design Example
                    
<div class="circuit-example">
                        <h4>Security Alarm System</h4>
                        <p><strong>Scenario:</strong> Design a home security system that triggers an alarm.</p>
                        
<div class="key-points">
                            <h4>Requirements:</h4>
                            <ul>
                                <li>Alarm sounds if door sensor OR window sensor is triggered</li>
                                <li>But only when system is armed</li>
                                <li>Override button can disable alarm even when sensors triggered</li>
                            </ul>
                        </div>
                        
<div class="example">
                            <h4>Solution:</h4>
                            <div class="boolean-algebra">
<strong>Inputs:</strong>
D = Door sensor (1 = Open, 0 = Closed)
W = Window sensor (1 = Open, 0 = Closed)
A = System armed (1 = Armed, 0 = Disarmed)
O = Override button (1 = Pressed, 0 = Not pressed)

<strong>Logic Analysis:</strong>
Sensor_Triggered = D + W (OR gate)
System_Active = Sensor_Triggered · A (AND gate)
Alarm = System_Active · O' (AND with NOT)

<strong>Final Expression:</strong>
Alarm = (D + W) · A · O'

<strong>Circuit Components:</strong>
1. OR gate (for D + W)
2. AND gate (for result · A)
3. NOT gate (for O')
4. AND gate (for final result · O')

Total: 1 OR, 2 AND, 1 NOT gate
                            </div>
                        </div>
                        
<table class="truth-table">
                            <tr>
                                <th>D</th>
                                <th>W</th>
                                <th>A</th>
                                <th>O</th>
                                <th>Alarm</th>
                                <th>Meaning</th>
                            </tr>
                            <tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>Disarmed, no alarm</td></tr>
                            <tr><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>Disarmed, no alarm</td></tr>
                            <tr><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td><td>Armed but no intrusion</td></tr>
                            <tr><td>1</td><td>0</td><td>1</td><td>0</td><td style="background: #ffcdd2; font-weight: bold;">1</td><td>Door open, armed, ALARM!</td></tr>
                            <tr><td>0</td><td>1</td><td>1</td><td>0</td><td style="background: #ffcdd2; font-weight: bold;">1</td><td>Window open, armed, ALARM!</td></tr>
                            <tr><td>1</td><td>1</td><td>1</td><td>0</td><td style="background: #ffcdd2; font-weight: bold;">1</td><td>Both open, armed, ALARM!</td></tr>
                            <tr><td>1</td><td>1</td><td>1</td><td>1</td><td style="background: #c8e6c9;">0</td><td>Override pressed, no alarm</td></tr>
                        </table>
                    </div>