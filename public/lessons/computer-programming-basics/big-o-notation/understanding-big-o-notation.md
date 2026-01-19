<!-- Module 2 -->
<div class="module" id="module2">
                <h2>Module 2: Understanding Big O Notation</h2>
                
<h3>Lesson 2.1: What is Big O Notation?</h3>

<div class="learning-objectives">
                    <h4>Learning Objectives:</h4>
                    <ul>
                        <li>Define Big O Notation</li>
                        <li>Understand the concept of "order of magnitude"</li>
                        <li>Learn why we focus on worst-case scenarios</li>
                    </ul>
                </div>

<p><strong>Definition:</strong> Big O Notation describes how the runtime or space requirements of an algorithm grow as the input size increases. It's written as O(something), like O(n) or O(n²).</p>

<div class="tip-box">
                    <h4>💡 Key Principles:</h4>
                    <ol>
                        <li><strong>We focus on growth rate, not exact numbers</strong>
                            <ul>
                                <li>O(n) means "grows linearly with input size"</li>
                                <li>O(n²) means "grows quadratically with input size"</li>
                            </ul>
                        </li>
                        <li><strong>We care about large inputs</strong>
                            <ul>
                                <li>For small inputs, everything is fast</li>
                                <li>Big O tells us what happens when n gets really big</li>
                            </ul>
                        </li>
                        <li><strong>We describe the worst-case scenario</strong>
                            <ul>
                                <li>Sometimes you get lucky and find what you need immediately</li>
                                <li>Big O assumes you're unlucky</li>
                            </ul>
                        </li>
                    </ol>
                </div>

<div class="example-box">
                    <h4>📚 Teacher Grading Analogy:</h4>
                    <ul>
                        <li><strong>O(1):</strong> Reading your name on the cover (same time, regardless of paper count)</li>
                        <li><strong>O(n):</strong> Reading every student's name once (time increases with student count)</li>
                        <li><strong>O(n²):</strong> Comparing every student's paper with every other student's paper</li>
                    </ul>
                </div>

<div class="visualization">
                    <h4>Growth Rate Visualization</h4>
                    <div class="complexity-chart">
                        <div class="chart-bar" style="height: 10%;">
                            <div class="chart-label">O(1)</div>
                        </div>
                        <div class="chart-bar" style="height: 30%;">
                            <div class="chart-label">O(log n)</div>
                        </div>
                        <div class="chart-bar" style="height: 50%;">
                            <div class="chart-label">O(n)</div>
                        </div>
                        <div class="chart-bar" style="height: 70%;">
                            <div class="chart-label">O(n log n)</div>
                        </div>
                        <div class="chart-bar" style="height: 100%;">
                            <div class="chart-label">O(n²)</div>
                        </div>
                    </div>
                </div>

<div class="practice-exercise">
                    <h4>🎯 Practice Exercise 2.1</h4>
                    <p>If an O(n) algorithm takes 1 second for 1,000 items, approximately how long will it take for 10,000 items?</p>
                </div>

<h3>Lesson 2.2: Big O Rules and Simplification</h3>

<h4>Rule 1: Drop Constants</h4>
                <p>If an algorithm does 3n operations, we write it as O(n), not O(3n).</p>
                <p><strong>Why?</strong> Because Big O focuses on the growth rate. Whether it's 3n or 300n, it still grows linearly.</p>

<div class="example-box">
                    <h4>Examples:</h4>
                    <ul>
                        <li>O(2n) → O(n)</li>
                        <li>O(500) → O(1)</li>
                        <li>O(13n²) → O(n²)</li>
                    </ul>
                </div>

<h4>Rule 2: Drop Smaller Terms</h4>
                <p>If an algorithm does n² + n operations, we write it as O(n²).</p>
                <p><strong>Why?</strong> As n gets large, the n² term dominates completely.</p>

<div class="example-box">
                    <h4>Example with n = 1000:</h4>
                    <ul>
                        <li>n² = 1,000,000</li>
                        <li>n = 1,000</li>
                        <li>The n term is only 0.1% of the total!</li>
                    </ul>
                    <h4>More Examples:</h4>
                    <ul>
                        <li>O(n² + n) → O(n²)</li>
                        <li>O(n + 1000) → O(n)</li>
                        <li>O(n³ + n² + n) → O(n³)</li>
                    </ul>
                </div>

<h4>Rule 3: Different Inputs Use Different Variables</h4>
                <p>If you have two different inputs, use different variables:</p>
                <ul>
                    <li>Processing array A of size n and array B of size m: O(n + m) or O(n × m)</li>
                </ul>

<h4>Rule 4: Sequential vs Nested Operations</h4>

<div class="example-box">
                    <h4>Sequential (one after another): Add the complexities</h4>
                    <pre><code># First loop: O(n)
for i in range(n):
    print(i)

# Second loop: O(m)

for j in range(m):
print(j)

# Total: O(n + m)</code></pre>

                    <h4>Nested (one inside another): Multiply the complexities</h4>
                    <pre><code># Outer loop: O(n)

for i in range(n): # Inner loop: O(m)
for j in range(m):
print(i, j)

# Total: O(n × m)</code></pre>

                </div>

<div class="practice-exercise">
                    <h4>🎯 Practice Exercise 2.2</h4>
                    <p>Simplify these Big O expressions:</p>
                    <ol>
                        <li>O(5n + 1000)</li>
                        <li>O(n² + 50n + 200)</li>
                        <li>O(3n³ + 2n² + n + 100)</li>
                    </ol>
                </div>
            </div>
