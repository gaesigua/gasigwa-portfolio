# Examples - Combined Problems
                    
<div class="example">
    <h4>Example 4: Series Circuit</h4>
    <p><strong>Problem:</strong> Two resistors of 4 Ω and 6 Ω are connected in series to a 20 V battery. Calculate (a) total resistance, (b) current, (c) voltage across each resistor.</p>
                        
<div class="calculation">
<strong>Given:</strong>
R₁ = 4 Ω
R₂ = 6 Ω
V_total = 20 V

<strong>(a) Total Resistance:</strong>
R_total = R₁ + R₂
R_total = 4 + 6 = 10 Ω

<strong>(b) Current (same through all):</strong>
I = V_total / R_total
I = 20 V / 10 Ω
I = 2 A

<strong>(c) Voltage across each resistor:</strong>
V₁ = I × R₁ = 2 × 4 = 8 V
V₂ = I × R₂ = 2 × 6 = 12 V

<strong>Verification:</strong>
V₁ + V₂ = 8 + 12 = 20 V ✓ (equals battery voltage)

<strong>Answers: 
(a) Total resistance = 10 Ω
(b) Current = 2 A
(c) V₁ = 8 V, V₂ = 12 V</strong>
</div>
</div>
                    
<div class="example">
    <h4>Example 5: Parallel Circuit</h4>
    <p><strong>Problem:</strong> Two resistors of 12 Ω and 6 Ω are connected in parallel to a 12 V battery. Calculate (a) total resistance, (b) total current, (c) current through each resistor.</p>
                        
<div class="calculation">
<strong>Given:</strong>
R₁ = 12 Ω
R₂ = 6 Ω
V = 12 V (same across all in parallel)

<strong>(a) Total Resistance:</strong>
1/R_total = 1/R₁ + 1/R₂
1/R_total = 1/12 + 1/6
1/R_total = 1/12 + 2/12 = 3/12 = 1/4
R_total = 4 Ω

<strong>(b) Total Current:</strong>
I_total = V / R_total
I_total = 12 V / 4 Ω
I_total = 3 A

<strong>(c) Current through each resistor:</strong>
I₁ = V / R₁ = 12 / 12 = 1 A
I₂ = V / R₂ = 12 / 6 = 2 A

<strong>Verification:</strong>
I₁ + I₂ = 1 + 2 = 3 A ✓ (equals total current)

<strong>Answers:
(a) Total resistance = 4 Ω
(b) Total current = 3 A
(c) I₁ = 1 A, I₂ = 2 A</strong>
                        </div>
                    </div>
                    
<div class="example">
    <h4>Example 6: Power Calculations</h4>
    <p><strong>Problem:</strong> A 100 Ω resistor has a voltage of 10 V across it. Calculate (a) current, (b) power dissipated.</p>
                        
<div class="calculation">
<strong>Given:</strong>
R = 100 Ω
V = 10 V

<strong>(a) Current:</strong>
I = V / R
I = 10 / 100
I = 0.1 A = 100 mA

<strong>(b) Power (multiple formulas available):</strong>
P = V × I
P = 10 × 0.1
P = 1 W

<strong>Alternative methods:</strong>
P = I²R = (0.1)² × 100 = 0.01 × 100 = 1 W ✓
P = V²/R = (10)² / 100 = 100 / 100 = 1 W ✓

<strong>Answers:
(a) Current = 0.1 A or 100 mA
(b) Power = 1 Watt</strong>
                        </div>
                    </div>
                    
# Power Formulas (derived from Ohm's Law)

<div class="formula-box">
    <h4>Electrical Power Formulas</h4>
    <div style="font-size: 1.1em; line-height: 2;">
    <div class="formula">P = V × I</div>
    <p>Power = Voltage × Current</p>
                            
<div class="formula" style="margin-top: 15px;">P = I² × R</div>
    <p>Power = Current² × Resistance</p>
                            
<div class="formula" style="margin-top: 15px;">P = V² / R</div>
    <p>Power = Voltage² / Resistance</p>
                            
<p style="margin-top: 20px;"><strong>Unit:</strong> Watt (W)</p>
    <p>1 Watt = 1 Joule per second</p>
</div>
</div>
                    
<div class="warning">
    <strong>⚠️ Important Safety Note:</strong> When working with electrical circuits, always ensure power ratings are not exceeded. Excessive power causes heating and can damage components or cause fires.
</div>
                    
# Limitations of Ohm's Law

<div class="key-points">
    <h4>Ohm's Law Does NOT Apply To:</h4>
    <ul>
        <li><strong>Non-linear devices:</strong> Diodes, transistors, LEDs</li>
        <li><strong>Unilateral devices:</strong> Components that conduct differently in different directions</li>
        <li><strong>Temperature-dependent resistors:</strong> When temperature changes significantly</li>
        <li><strong>Voltage-dependent resistors:</strong> Varistors, Zener diodes</li>
        <li><strong>Some materials at extreme conditions:</strong> Superconductors, plasmas</li>
    </ul>
</div>
</div>
</div>