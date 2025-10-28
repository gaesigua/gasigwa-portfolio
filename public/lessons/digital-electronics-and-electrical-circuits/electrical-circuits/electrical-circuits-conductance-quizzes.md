<!-- PRACTICE & QUIZZES SECTION -->

# Practice Problems & Quizzes
                    
<p style="font-size: 1.1em; margin-bottom: 25px;">Test your understanding of conductance with these practice problems. Try to solve them before checking the answers!</p>
                    
<div class="quiz-box">
                        <h3>Practice Problems - Basic Concepts</h3>
                        
<div class="quiz-question">
                            <h5>Problem 1: Basic Conversion</h5>
                            <p>A resistor has a resistance of 50 Ω. Calculate its conductance in Siemens and millisiemens.</p>
                            <button class="show-answer-btn" onclick="toggleAnswer('answer1')">Show Answer</button>
                            <div id="answer1" class="quiz-answer">
                                <strong>Solution:</strong><br>
                                G = 1/R = 1/50 = 0.02 S<br>
                                G = 0.02 × 1000 = 20 mS<br><br>
                                <strong>Answer: 0.02 S or 20 mS</strong>
                            </div>
                        </div>
                        
<div class="quiz-question">
                            <h5>Problem 2: Using Ohm's Law</h5>
                            <p>A current of 5 A flows when 20 V is applied across a component. Find: (a) Conductance, (b) Resistance, (c) Power dissipated.</p>
                            <button class="show-answer-btn" onclick="toggleAnswer('answer2')">Show Answer</button>
                            <div id="answer2" class="quiz-answer">
                                <strong>Solution:</strong><br>
                                (a) G = I/V = 5/20 = 0.25 S<br>
                                (b) R = 1/G = 1/0.25 = 4 Ω (or R = V/I = 20/5 = 4 Ω)<br>
                                (c) P = V × I = 20 × 5 = 100 W<br>
                                    (or P = V² × G = 400 × 0.25 = 100 W)<br><br>
                                <strong>Answers: (a) 0.25 S, (b) 4 Ω, (c) 100 W</strong>
                            </div>
                        </div>
                        
<div class="quiz-question">
                            <h5>Problem 3: Physical Dimensions</h5>
                            <p>An aluminum wire (σ = 3.5 × 10⁷ S/m) is 8 m long with cross-sectional area 4 × 10⁻⁶ m². Calculate its conductance.</p>
                            <button class="show-answer-btn" onclick="toggleAnswer('answer3')">Show Answer</button>
                            <div id="answer3" class="quiz-answer">
                                <strong>Solution:</strong><br>
                                G = σA/L<br>
                                G = (3.5 × 10⁷ × 4 × 10⁻⁶)/8<br>
                                G = (140)/8<br>
                                G = 17.5 S<br><br>
                                <strong>Answer: 17.5 S</strong>
                            </div>
                        </div>
                    </div>
                    
<div class="quiz-box">
                        <h3>Practice Problems - Circuit Analysis</h3>
                        
<div class="quiz-question">
                            <h5>Problem 4: Parallel Conductances</h5>
                            <p>Three conductances G₁ = 0.1 S, G₂ = 0.15 S, and G₃ = 0.25 S are connected in parallel. Find the total conductance and equivalent resistance.</p>
                            <button class="show-answer-btn" onclick="toggleAnswer('answer4')">Show Answer</button>
                            <div id="answer4" class="quiz-answer">
                                <strong>Solution:</strong><br>
                                G_total = G₁ + G₂ + G₃<br>
                                G_total = 0.1 + 0.15 + 0.25 = 0.5 S<br>
                                R_total = 1/G_total = 1/0.5 = 2 Ω<br><br>
                                <strong>Answers: G_total = 0.5 S, R_total = 2 Ω</strong>
                            </div>
                        </div>
                        
<div class="quiz-question">
                            <h5>Problem 5: Current Division</h5>
                            <p>A 15 A current splits between two parallel branches with G₁ = 0.3 S and G₂ = 0.7 S. Calculate the current in each branch.</p>
                            <button class="show-answer-btn" onclick="toggleAnswer('answer5')">Show Answer</button>
                            <div id="answer5" class="quiz-answer">
                                <strong>Solution:</strong><br>
                                G_total = 0.3 + 0.7 = 1.0 S<br>
                                I₁ = I_total × (G₁/G_total) = 15 × (0.3/1.0) = 4.5 A<br>
                                I₂ = I_total × (G₂/G_total) = 15 × (0.7/1.0) = 10.5 A<br>
                                Check: 4.5 + 10.5 = 15 A ✓<br><br>
                                <strong>Answers: I₁ = 4.5 A, I₂ = 10.5 A</strong>
                            </div>
                        </div>
<div class="quiz-question">
                            <h5>Problem 6: Series Conductances</h5>
                            <p>Two conductances G₁ = 0.4 S and G₂ = 0.6 S are connected in series. Find the total conductance.</p>
                            <button class="show-answer-btn" onclick="toggleAnswer('answer6')">Show Answer</button>
                            <div id="answer6" class="quiz-answer">
                                <strong>Solution:</strong><br>
                                For series: 1/G_total = 1/G₁ + 1/G₂<br>
                                1/G_total = 1/0.4 + 1/0.6<br>
                                1/G_total = 2.5 + 1.667 = 4.167<br>
                                G_total = 1/4.167 = 0.24 S<br><br>
                                Alternative (product over sum):<br>
                                G_total = (G₁ × G₂)/(G₁ + G₂)<br>
                                G_total = (0.4 × 0.6)/(0.4 + 0.6) = 0.24/1.0 = 0.24 S<br><br>
                                <strong>Answer: 0.24 S or 240 mS</strong>
                            </div>
                        </div>
                    </div>
                    
<div class="quiz-box">
                        <h3>Practice Problems - Advanced Applications</h3>
                        
<div class="quiz-question">
                            <h5>Problem 7: Effect of Temperature</h5>
                            <p>A copper conductor has conductance 10 S at 20°C. If the temperature coefficient is 0.004 per °C, what is the conductance at 60°C?</p>
                            <button class="show-answer-btn" onclick="toggleAnswer('answer7')">Show Answer</button>
                            <div id="answer7" class="quiz-answer">
                                <strong>Solution:</strong><br>
                                G(T) = G₀[1 - α(T - T₀)]<br>
                                G(60) = 10[1 - 0.004(60 - 20)]<br>
                                G(60) = 10[1 - 0.004(40)]<br>
                                G(60) = 10[1 - 0.16]<br>
                                G(60) = 10 × 0.84<br>
                                G(60) = 8.4 S<br><br>
                                <strong>Answer: 8.4 S</strong><br>
                                <em>Note: Conductance decreased because temperature increased (typical for metals)</em>
                            </div>
                        </div>
                        
<div class="quiz-question">
                            <h5>Problem 8: Comparing Materials</h5>
                            <p>Two wires of equal dimensions are made of different materials. Wire A has conductance 8 S and Wire B has conductance 12 S. What is the ratio of their conductivities?</p>
                            <button class="show-answer-btn" onclick="toggleAnswer('answer8')">Show Answer</button>
                            <div id="answer8" class="quiz-answer">
                                <strong>Solution:</strong><br>
                                Since dimensions are equal: G = σA/L<br>
                                For same A and L: G ∝ σ<br>
                                Therefore: σ_B/σ_A = G_B/G_A<br>
                                σ_B/σ_A = 12/8 = 1.5<br><br>
                                <strong>Answer: Wire B has 1.5 times the conductivity of Wire A</strong>
                            </div>
                        </div>
                        
<div class="quiz-question">
                            <h5>Problem 9: Power Loss Comparison</h5>
                            <p>A transmission line carries 100 A. Calculate the power loss when: (a) G = 0.1 S, (b) G = 0.2 S. What percentage reduction in loss occurs when conductance doubles?</p>
                            <button class="show-answer-btn" onclick="toggleAnswer('answer9')">Show Answer</button>
                            <div id="answer9" class="quiz-answer">
                                <strong>Solution:</strong><br>
                                Power loss P = I²/G<br><br>
                                (a) P₁ = (100)²/0.1 = 10,000/0.1 = 100,000 W = 100 kW<br>
                                (b) P₂ = (100)²/0.2 = 10,000/0.2 = 50,000 W = 50 kW<br><br>
                                Reduction = [(P₁ - P₂)/P₁] × 100%<br>
                                Reduction = [(100 - 50)/100] × 100% = 50%<br><br>
                                <strong>Answers:</strong><br>
                                (a) 100 kW<br>
                                (b) 50 kW<br>
                                50% reduction in power loss
                            </div>
                        </div>
                        
<div class="quiz-question">
                            <h5>Problem 10: Complex Circuit</h5>
                            <p>Four conductances form a circuit: G₁ = 0.2 S and G₂ = 0.3 S are in parallel, G₃ = 0.4 S and G₄ = 0.6 S are in parallel. These two parallel combinations are then connected in series. Find the total conductance.</p>
                            <button class="show-answer-btn" onclick="toggleAnswer('answer10')">Show Answer</button>
                            <div id="answer10" class="quiz-answer">
                                <strong>Solution:</strong><br>
                                Step 1: First parallel combination<br>
                                G_parallel1 = G₁ + G₂ = 0.2 + 0.3 = 0.5 S<br><br>
                                Step 2: Second parallel combination<br>
                                G_parallel2 = G₃ + G₄ = 0.4 + 0.6 = 1.0 S<br><br>
                                Step 3: Series combination of the two groups<br>
                                1/G_total = 1/G_parallel1 + 1/G_parallel2<br>
                                1/G_total = 1/0.5 + 1/1.0<br>
                                1/G_total = 2 + 1 = 3<br>
                                G_total = 1/3 = 0.333 S<br><br>
                                <strong>Answer: 0.333 S or 333 mS</strong>
                            </div>
                        </div>
                    </div>
                    
<div class="quiz-box">
                        <h3>Conceptual Quiz</h3>
                        
<div class="quiz-question">
                            <h5>Question 1: True or False?</h5>
                            <p>"A material with high conductance will also have high resistance."</p>
                            <button class="show-answer-btn" onclick="toggleAnswer('answer11')">Show Answer</button>
                            <div id="answer11" class="quiz-answer">
                                <strong>Answer: FALSE</strong><br><br>
                                Explanation: Conductance and resistance are inversely related (G = 1/R). A material with high conductance has LOW resistance, not high resistance. Good conductors like copper have high conductance but low resistance.
                            </div>
                        </div>
                        
<div class="quiz-question">
                            <h5>Question 2: Multiple Choice</h5>
                            <p>Which material has the highest electrical conductivity?<br>
                            A) Copper<br>
                            B) Silver<br>
                            C) Gold<br>
                            D) Aluminum</p>
                            <button class="show-answer-btn" onclick="toggleAnswer('answer12')">Show Answer</button>
                            <div id="answer12" class="quiz-answer">
                                <strong>Answer: B) Silver</strong><br><br>
                                Silver has the highest electrical conductivity of all metals (σ ≈ 6.3 × 10⁷ S/m), followed by copper, gold, and then aluminum. However, copper is more commonly used due to its lower cost.
                            </div>
                        </div>
                        
<div class="quiz-question">
                            <h5>Question 3: Explain</h5>
                            <p>Why is conductance particularly useful when analyzing parallel circuits compared to using resistance?</p>
                            <button class="show-answer-btn" onclick="toggleAnswer('answer13')">Show Answer</button>
                            <div id="answer13" class="quiz-answer">
                                <strong>Answer:</strong><br><br>
                                In parallel circuits, conductances add directly (G_total = G₁ + G₂ + G₃ + ...), which is much simpler than the reciprocal formula needed for resistances (1/R_total = 1/R₁ + 1/R₂ + ...). This makes calculations faster and more intuitive. Additionally, current division is proportional to conductance, making it easy to determine how current splits among parallel branches.
                            </div>
                        </div>
                    </div>
                    
<div class="note" style="margin-top: 30px;">
                        <strong>🎓 Study Tips:</strong>
                        <ul style="margin-left: 20px; margin-top: 10px; line-height: 1.8;">
                            <li>Practice converting between resistance and conductance regularly</li>
                            <li>Remember: parallel conductances add directly (like series resistances)</li>
                            <li>Use conductance for parallel circuits, resistance for series circuits</li>
                            <li>Understand the physical meaning: high G = easy current flow</li>
                            <li>Review the units: Siemens (S) for conductance, Ω for resistance</li>
                        </ul>
                    </div>
                    
<div class="key-points" style="margin-top: 25px;">
                        <h4>Summary of Key Formulas:</h4>
                        <div style="line-height: 2.2; margin-top: 15px;">
                            <strong>Basic:</strong> G = 1/R<br>
                            <strong>Ohm's Law:</strong> G = I/V<br>
                            <strong>Physical:</strong> G = σA/L<br>
                            <strong>Power:</strong> P = V²G or P = I²/G<br>
                            <strong>Parallel:</strong> G_total = G₁ + G₂ + G₃ + ...<br>
                            <strong>Series:</strong> 1/G_total = 1/G₁ + 1/G₂ + 1/G₃ + ...<br>
                            <strong>Conductivity:</strong> σ = 1/ρ
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>