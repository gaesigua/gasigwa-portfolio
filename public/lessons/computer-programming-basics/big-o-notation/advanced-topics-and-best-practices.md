<!-- Module 6: Advanced Topics -->
<div class="module" id="module6">
                <h2>Module 6: Advanced Topics & Best Practices</h2>

<h3>Lesson 6.1: Amortized Analysis</h3>

<p><strong>Definition:</strong> Average time per operation over a sequence of operations, even if individual operations vary.</p>

<div class="example-box">
                    <h4>Dynamic Array Example:</h4>
                    <p>Adding elements to a dynamic array (like JavaScript's Array or Python's list):</p>
                    <ul>
                        <li>Most insertions: O(1)</li>
                        <li>Occasional resize: O(n) when array is full</li>
                        <li><strong>Amortized:</strong> O(1) per insertion</li>
                    </ul>
                    <p>Over many operations, the expensive resizes are rare enough that the average remains constant time.</p>
                </div>

<h3>Lesson 6.2: Best, Average, and Worst Case</h3>

<table class="complexity-table">
                    <thead>
                        <tr>
                            <th>Algorithm</th>
                            <th>Best Case</th>
                            <th>Average Case</th>
                            <th>Worst Case</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Linear Search</td>
                            <td>O(1)</td>
                            <td>O(n)</td>
                            <td>O(n)</td>
                        </tr>
                        <tr>
                            <td>Binary Search</td>
                            <td>O(1)</td>
                            <td>O(log n)</td>
                            <td>O(log n)</td>
                        </tr>
                        <tr>
                            <td>Quick Sort</td>
                            <td>O(n log n)</td>
                            <td>O(n log n)</td>
                            <td>O(n²)</td>
                        </tr>
                        <tr>
                            <td>Merge Sort</td>
                            <td>O(n log n)</td>
                            <td>O(n log n)</td>
                            <td>O(n log n)</td>
                        </tr>
                    </tbody>
                </table>

<div class="tip-box">
                    <h4>💡 When to Consider Each Case:</h4>
                    <ul>
                        <li><strong>Worst Case:</strong> Most important for critical systems (medical, financial)</li>
                        <li><strong>Average Case:</strong> Most realistic for general applications</li>
                        <li><strong>Best Case:</strong> Usually not very informative</li>
                    </ul>
                </div>

<h3>Lesson 6.3: Real-World Algorithm Selection</h3>

<div class="example-box">
                    <h4>Scenario: Sorting 1 million records</h4>
                    
<p><strong>Option 1: Bubble Sort - O(n²)</strong></p>
                    <ul>
                        <li>❌ 1,000,000² = 1 trillion operations</li>
                        <li>❌ Would take hours or days</li>
                    </ul>

<p><strong>Option 2: Merge Sort - O(n log n)</strong></p>
                    <ul>
                        <li>✅ 1,000,000 × log(1,000,000) ≈ 20 million operations</li>
                        <li>✅ Takes seconds</li>
                        <li>✅ Stable sort, guaranteed performance</li>
                    </ul>

<p><strong>Option 3: Quick Sort - O(n log n) average</strong></p>
                    <ul>
                        <li>✅ Usually faster than merge sort in practice</li>
                        <li>✅ Less memory overhead</li>
                        <li>⚠️ Worst case O(n²) if poorly implemented</li>
                    </ul>
                </div>

<h3>Lesson 6.4: Common Pitfalls & Mistakes</h3>

<div class="warning-box">
                    <h4>⚠️ Mistake 1: Ignoring Hidden Complexity</h4>
                    <pre><code>// Looks like O(n), but...
function processStrings(arr) {
    for (let str of arr) {
        let reversed = str.split('').reverse().join('');
        console.log(reversed);
    }
}
// Actually O(n × m) where m is average string length!</code></pre>
                </div>

<div class="warning-box">
                    <h4>⚠️ Mistake 2: Premature Optimization</h4>
                    <p>"Premature optimization is the root of all evil" - Donald Knuth</p>
                    <ul>
                        <li>First: Make it work</li>
                        <li>Second: Make it right</li>
                        <li>Third: Make it fast (if needed)</li>
                    </ul>
                </div>

<div class="warning-box">
                    <h4>⚠️ Mistake 3: Not Considering the Input Size</h4>
                    <ul>
                        <li>O(n²) is fine for n = 100</li>
                        <li>O(n²) is terrible for n = 100,000</li>
                        <li>Know your expected input sizes!</li>
                    </ul>
                </div>

<h3>Lesson 6.5: Best Practices</h3>

<div class="tip-box">
                    <h4>✅ Best Practice Checklist:</h4>
                    <ol>
                        <li><strong>Understand the problem</strong> before coding</li>
                        <li><strong>Identify the input size</strong> variable(s)</li>
                        <li><strong>Count loops</strong> and their relationships</li>
                        <li><strong>Look for hidden operations</strong> (string manipulation, etc.)</li>
                        <li><strong>Consider space</strong> as well as time</li>
                        <li><strong>Think about edge cases</strong> (empty input, single element, etc.)</li>
                        <li><strong>Test with different input sizes</strong></li>
                        <li><strong>Document your complexity</strong> in comments</li>
                    </ol>
                </div>
            </div>
