<!-- Module 3 -->
<div class="module" id="module3">
                <h2>Module 3: Common Time Complexities</h2>

<table class="complexity-table">
                    <thead>
                        <tr>
                            <th>Complexity</th>
                            <th>Name</th>
                            <th>Example</th>
                            <th>n=10</th>
                            <th>n=100</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>O(1)</strong></td>
                            <td>Constant</td>
                            <td>Array access</td>
                            <td>1</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td><strong>O(log n)</strong></td>
                            <td>Logarithmic</td>
                            <td>Binary search</td>
                            <td>3</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td><strong>O(n)</strong></td>
                            <td>Linear</td>
                            <td>Simple loop</td>
                            <td>10</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td><strong>O(n log n)</strong></td>
                            <td>Linearithmic</td>
                            <td>Merge sort</td>
                            <td>33</td>
                            <td>664</td>
                        </tr>
                        <tr>
                            <td><strong>O(n²)</strong></td>
                            <td>Quadratic</td>
                            <td>Nested loops</td>
                            <td>100</td>
                            <td>10,000</td>
                        </tr>
                        <tr>
                            <td><strong>O(2ⁿ)</strong></td>
                            <td>Exponential</td>
                            <td>Recursive fibonacci</td>
                            <td>1,024</td>
                            <td>1.27×10³⁰</td>
                        </tr>
                    </tbody>
                </table>

<h3>Lesson 3.1: O(1) - Constant Time</h3>

<p><strong>Definition:</strong> The algorithm takes the same amount of time regardless of input size.</p>

<pre><code>// Example 1: Array access
function getFirstElement(arr) {
    return arr[0];  // O(1)
}

// Example 2: Hash table lookup
function getValue(dictionary, key) {
    return dictionary[key];  // O(1)
}

// Example 3: Multiple constant operations
function processFirstThree(arr) {
    let first = arr[0];    // O(1)
    let second = arr[1];   // O(1)
    let third = arr[2];    // O(1)
    return first + second + third;  // Still O(1)!
}</code></pre>

<div class="tip-box">
                    <h4>💡 Common Misconception:</h4>
                    <p>O(1) doesn't mean "1 operation." It could be 1000 operations, as long as that number doesn't change with input size.</p>
                </div>

<h3>Lesson 3.2: O(n) - Linear Time</h3>

<p><strong>Definition:</strong> The runtime grows proportionally with the input size. Double the input, double the time.</p>

<pre><code>// Example 1: Sum all elements
function sumArray(arr) {
    let total = 0;
    for (let num of arr) {  // Loop runs n times
        total += num;
    }
    return total;  // O(n)
}

// Example 2: Find maximum
function findMax(arr) {
    let maxVal = arr[0];
    for (let num of arr) {
        if (num > maxVal) {
            maxVal = num;
        }
    }
    return maxVal;  // O(n)
}</code></pre>

<h3>Lesson 3.3: O(n²) - Quadratic Time</h3>

<p><strong>Definition:</strong> The runtime grows proportionally to the square of the input size. Double the input, quadruple the time.</p>

<pre><code>// Example: Nested loops
function printPairs(arr) {
    for (let i = 0; i < arr.length; i++) {      // n times
        for (let j = 0; j < arr.length; j++) {  // n times
            console.log(arr[i], arr[j]);
        }
    }
}  // Total: n × n = O(n²)</code></pre>

<div class="warning-box">
                    <h4>⚠️ Watch Out!</h4>
                    <p>O(n²) scales poorly! For n = 10,000:</p>
                    <ul>
                        <li>O(n): ~10,000 operations ✅</li>
                        <li>O(n²): ~100,000,000 operations ❌</li>
                    </ul>
                </div>

<h3>Lesson 3.4: O(log n) - Logarithmic Time</h3>

<p><strong>What is a Logarithm?</strong> A logarithm answers: "How many times do I need to divide n by 2 to get to 1?"</p>

<div class="example-box">
                    <h4>Examples:</h4>
                    <ul>
                        <li>log₂(8) = 3 because 8 ÷ 2 ÷ 2 ÷ 2 = 1</li>
                        <li>log₂(16) = 4 because 16 ÷ 2 ÷ 2 ÷ 2 ÷ 2 = 1</li>
                        <li>log₂(1000) ≈ 10</li>
                    </ul>
                </div>

<pre><code>// Binary Search - O(log n)
function binarySearch(sortedArr, target) {
    let left = 0;
    let right = sortedArr.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (sortedArr[mid] === target) {
            return mid;
        } else if (sortedArr[mid] < target) {
            left = mid + 1;  // Search right half
        } else {
            right = mid - 1;  // Search left half
        }
    }
    return -1;
}  // O(log n) - eliminates half each time</code></pre>

<div class="tip-box">
                    <h4>🚀 Efficiency Comparison</h4>
                    <p>For n = 1,000,000:</p>
                    <ul>
                        <li>O(n): ~1,000,000 operations</li>
                        <li>O(log n): ~20 operations 🎉</li>
                    </ul>
                </div>
            </div>
