<!-- Module 5: Practical Applications -->
<div class="module" id="module5">
                <h2>Module 5: Practical Applications & Problem Solving</h2>

<h3>Lesson 5.1: Recognizing Patterns</h3>

<div class="learning-objectives">
                    <h4>Learning Objectives:</h4>
                    <ul>
                        <li>Identify complexity patterns in code</li>
                        <li>Choose appropriate algorithms for different scenarios</li>
                        <li>Optimize existing code</li>
                    </ul>
                </div>

<h4>Pattern Recognition Guide:</h4>

<table class="complexity-table">
                    <thead>
                        <tr>
                            <th>Pattern</th>
                            <th>Complexity</th>
                            <th>Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Direct access/calculation</td>
                            <td>O(1)</td>
                            <td>array[index], hash lookup</td>
                        </tr>
                        <tr>
                            <td>Single loop</td>
                            <td>O(n)</td>
                            <td>Iterate through array once</td>
                        </tr>
                        <tr>
                            <td>Nested loops (same size)</td>
                            <td>O(n²)</td>
                            <td>Compare all pairs</td>
                        </tr>
                        <tr>
                            <td>Halving input each iteration</td>
                            <td>O(log n)</td>
                            <td>Binary search</td>
                        </tr>
                        <tr>
                            <td>Divide and process all</td>
                            <td>O(n log n)</td>
                            <td>Merge sort, quick sort</td>
                        </tr>
                        <tr>
                            <td>Two branches per call</td>
                            <td>O(2ⁿ)</td>
                            <td>Naive Fibonacci</td>
                        </tr>
                    </tbody>
                </table>

<h3>Lesson 5.2: Optimization Strategies</h3>

<h4>Strategy 1: Use Hash Tables for O(1) Lookups</h4>

<pre><code>// Bad: O(n²)
function findPairSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }
    return null;
}

// Good: O(n)
function findPairSumOptimized(arr, target) {
    let seen = new Map();
    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i];
        if (seen.has(complement)) {
            return [seen.get(complement), i];
        }
        seen.set(arr[i], i);
    }
    return null;
}</code></pre>

<h4>Strategy 2: Sort When Appropriate</h4>

<pre><code>// Finding if array has duplicates
// Option 1: O(n²) nested loops
// Option 2: O(n) with hash set
// Option 3: O(n log n) sort first

function hasDuplicatesSorted(arr) {
    arr.sort((a, b) => a - b);  // O(n log n)
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i-1]) return true;
    }
    return false;
}  // Total: O(n log n)</code></pre>

<h4>Strategy 3: Two Pointer Technique</h4>

<pre><code>// Reverse array in-place: O(n) time, O(1) space
function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;
}</code></pre>

<div class="practice-exercise">
                    <h4>🎯 Practice Challenge</h4>
                    <p>Optimize this function that finds the maximum subarray sum:</p>
                    <pre><code>// Current: O(n²)
function maxSubarraySum(arr) {
    let maxSum = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        let currentSum = 0;
        for (let j = i; j < arr.length; j++) {
            currentSum += arr[j];
            maxSum = Math.max(maxSum, currentSum);
        }
    }
    return maxSum;
}</code></pre>
                    <p><em>Hint: Can you do it in O(n) time?</em></p>
                </div>

<h3>Lesson 5.3: Interview Problem Patterns</h3>

<h4>Common Interview Problems by Complexity:</h4>

<div class="example-box">
                    <h4>O(1) - Constant Time Problems:</h4>
                    <ul>
                        <li>Check if number is even/odd</li>
                        <li>Get first/last element</li>
                        <li>Swap two variables</li>
                    </ul>

<h4>O(n) - Linear Time Problems:</h4>
                    <ul>
                        <li>Find max/min in array</li>
                        <li>Check if array contains value</li>
                        <li>Two sum (with hash table)</li>
                        <li>Reverse a string</li>
                    </ul>

<h4>O(n log n) - Linearithmic Problems:</h4>
                    <ul>
                        <li>Sorting an array</li>
                        <li>Merge intervals</li>
                        <li>Find median</li>
                    </ul>

<h4>O(n²) - Quadratic Problems (to optimize!):</h4>
                    <ul>
                        <li>Bubble sort (use merge sort instead)</li>
                        <li>Naive duplicate finder (use hash set)</li>
                        <li>Matrix operations</li>
                    </ul>
                </div>
            </div>
