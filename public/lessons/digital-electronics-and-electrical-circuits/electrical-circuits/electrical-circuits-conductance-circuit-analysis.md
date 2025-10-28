<!-- CIRCUIT ANALYSIS SECTION -->

# Circuit Analysis with Conductance
                    
<p style="font-size: 1.1em; margin-bottom: 25px;">Conductance is particularly useful when analyzing parallel circuits, where conductances add directly - making calculations simpler than using resistance.</p>
                    
<h3>Series Circuits</h3>
                    <div class="formula-box">
                        <h4>Total Conductance in Series</h4>
                        <div class="formula">1/G_total = 1/G₁ + 1/G₂ + 1/G₃ + ...</div>
                        <p style="margin-top: 15px;">For series circuits, conductances combine like resistances in parallel.</p>
                        
<div class="formula" style="margin-top: 15px; font-size: 1.3em;">For two conductances:</div>
                        <div class="formula">G_total = (G₁ × G₂)/(G₁ + G₂)</div>
                    </div>
                    
<div class="note">
                        <strong>⚠️ Important:</strong> Series conductance calculations are more complex than series resistance. For series circuits, it's usually easier to work with resistance. However, parallel circuits are where conductance really shines!
                    </div>
                    
<h3>Parallel Circuits</h3>
                    <div class="formula-box">
                        <h4>Total Conductance in Parallel</h4>
                        <div class="formula">G_total = G₁ + G₂ + G₃ + ...</div>
                        <p style="margin-top: 15px;"><strong>This is the main advantage of using conductance!</strong> In parallel circuits, conductances add directly, making calculations much simpler than using resistance.</p>
                    </div>
                    
<div class="key-points">
                        <h4>Why Conductance is Useful in Parallel Circuits:</h4>
                        <ul>
                            <li><strong>Simple Addition:</strong> Just add conductances directly - no reciprocals needed</li>
                            <li><strong>Intuitive:</strong> More parallel paths = higher total conductance (easier current flow)</li>
                            <li><strong>Current Division:</strong> Current splits proportionally to conductances</li>
                            <li><strong>Fewer Calculations:</strong> Eliminates the need for complex fraction manipulation</li>
                        </ul>
                    </div>
                    
<h3>Current Division in Parallel Circuits</h3>
                    <div class="formula-box">
                        <h4>Current Division Using Conductance</h4>
                        <div class="formula">I₁ = I_total × (G₁/G_total)</div>
                        <p style="margin-top: 15px;">Current through each branch is proportional to its conductance.</p>
                    </div>
                    
<h3>Worked Examples</h3>
                    
<div class="example">
                        <h4>Example 1: Two Resistors in Parallel (Using Conductance)</h4>
                        <p><strong>Problem:</strong> Two resistors, R₁ = 10 Ω and R₂ = 15 Ω, are connected in parallel. Find the total conductance and equivalent resistance.</p>
                        
<div class="calculation">
<strong>Given:</strong>
R₁ = 10 Ω
R₂ = 15 Ω

<strong>Step 1: Convert to conductances</strong>
G₁ = 1/R₁ = 1/10 = 0.1 S
G₂ = 1/R₂ = 1/15 = 0.0667 S

<strong>Step 2: Add conductances (parallel)</strong>
G_total = G₁ + G₂
G_total = 0.1 + 0.0667
G_total = 0.1667 S

<strong>Step 3: Convert back to resistance</strong>
R_total = 1/G_total
R_total = 1/0.1667
R_total = 6 Ω

<strong>Answer: Total conductance = 0.1667 S (or 166.7 mS)</strong>
<strong>        Equivalent resistance = 6 Ω</strong>

<strong>Verification using resistance formula:</strong>
R_total = (R₁ × R₂)/(R₁ + R₂) = (10 × 15)/(10 + 15)
        = 150/25 = 6 Ω ✓
                        </div>
                    </div>
                    
<div class="example">
                        <h4>Example 2: Three Conductances in Parallel</h4>
                        <p><strong>Problem:</strong> Three components with conductances G₁ = 0.2 S, G₂ = 0.3 S, and G₃ = 0.5 S are connected in parallel across a 12 V source. Find: (a) Total conductance, (b) Total current, (c) Current through each component.</p>
                        
<div class="calculation">
<strong>Given:</strong>
G₁ = 0.2 S, G₂ = 0.3 S, G₃ = 0.5 S
V = 12 V

<strong>(a) Total Conductance:</strong>
G_total = G₁ + G₂ + G₃
G_total = 0.2 + 0.3 + 0.5
G_total = 1.0 S

<strong>(b) Total Current:</strong>
I_total = G_total × V
I_total = 1.0 × 12
I_total = 12 A

<strong>(c) Current through each component:</strong>
I₁ = G₁ × V = 0.2 × 12 = 2.4 A
I₂ = G₂ × V = 0.3 × 12 = 3.6 A
I₃ = G₃ × V = 0.5 × 12 = 6.0 A

<strong>Verification:</strong>
I_total = I₁ + I₂ + I₃ = 2.4 + 3.6 + 6.0 = 12 A ✓

<strong>Answers:
(a) Total conductance = 1.0 S
(b) Total current = 12 A
(c) I₁ = 2.4 A, I₂ = 3.6 A, I₃ = 6.0 A</strong>
                        </div>
                    </div>
                    
<div class="example">
                        <h4>Example 3: Current Division</h4>
                        <p><strong>Problem:</strong> A 10 A current divides between two parallel branches with conductances G₁ = 0.4 S and G₂ = 0.6 S. Find the current in each branch.</p>
                        
<div class="calculation">
<strong>Given:</strong>
I_total = 10 A
G₁ = 0.4 S
G₂ = 0.6 S

<strong>Step 1: Find total conductance</strong>
G_total = G₁ + G₂ = 0.4 + 0.6 = 1.0 S

<strong>Step 2: Apply current division</strong>
I₁ = I_total × (G₁/G_total)
I₁ = 10 × (0.4/1.0)
I₁ = 10 × 0.4 = 4 A

I₂ = I_total × (G₂/G_total)
I₂ = 10 × (0.6/1.0)
I₂ = 10 × 0.6 = 6 A

<strong>Verification:</strong>
I₁ + I₂ = 4 + 6 = 10 A ✓

<strong>Answers: I₁ = 4 A, I₂ = 6 A</strong>

<strong>Note:</strong> Current divides proportionally to conductances.
Branch with higher conductance carries more current.
                        </div>
                    </div>
                    
<div class="example">
                        <h4>Example 4: Series-Parallel Combination</h4>
                        <p><strong>Problem:</strong> Two conductances G₁ = 0.5 S and G₂ = 0.3 S are in parallel, and this combination is in series with G₃ = 0.2 S. Find the total conductance.</p>
                        
<div class="calculation">
<strong>Given:</strong>
G₁ = 0.5 S (parallel with G₂)
G₂ = 0.3 S (parallel with G₁)
G₃ = 0.2 S (in series with parallel combination)

<strong>Step 1: Find parallel combination</strong>
G_parallel = G₁ + G₂
G_parallel = 0.5 + 0.3 = 0.8 S

<strong>Step 2: Combine with series conductance</strong>
1/G_total = 1/G_parallel + 1/G₃
1/G_total = 1/0.8 + 1/0.2
1/G_total = 1.25 + 5
1/G_total = 6.25
G_total = 1/6.25 = 0.16 S

<strong>Answer: Total conductance = 0.16 S or 160 mS</strong>

<strong>Alternative: Convert to resistance first</strong>
R_parallel = 1/0.8 = 1.25 Ω
R₃ = 1/0.2 = 5 Ω
R_total = R_parallel + R₃ = 1.25 + 5 = 6.25 Ω
G_total = 1/6.25 = 0.16 S ✓
                        </div>
                    </div>
                    
<div class="note">
                        <strong>💡 Strategy Tip:</strong> Use conductance for parallel circuits (direct addition) and resistance for series circuits (direct addition). Convert between them as needed for mixed circuits.
                    </div>
                </div>
            </div>
