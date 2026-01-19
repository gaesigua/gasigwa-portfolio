<!-- Module 4 -->
<div class="module" id="module4">
                <h2>Module 4: Space Complexity</h2>

<h3>Lesson 4.1: Introduction to Space Complexity</h3>

<p><strong>Definition:</strong> Space complexity measures how much additional memory an algorithm needs relative to its input size.</p>

<h4>Why Space Matters:</h4>
                <ul>
                    <li>💾 Memory is limited, especially on mobile devices</li>
                    <li>⚖️ Space-time tradeoffs are common in algorithm design</li>
                    <li>💰 Memory costs money in cloud environments</li>
                </ul>

<div class="example-box">
                    <h4>Space Complexity Examples:</h4>
                    <pre><code>// O(1) Space - Constant
function sumArray(arr) {
    let total = 0;  // Only one variable
    for (let num of arr) {
        total += num;
    }
    return total;
}

// O(n) Space - Linear
function doubleArray(arr) {
let result = []; // New array of size n
for (let num of arr) {
result.push(num \* 2);
}
return result;
}

// O(n) Space - Recursive Stack
function factorial(n) {
if (n <= 1) return 1;
return n \* factorial(n - 1);
} // n recursive calls on the stack</code></pre>
</div>

<h4>Space-Time Tradeoff Example:</h4>
                <p>Finding duplicates in an array - you can choose!</p>

<pre><code>// Approach 1: Less Space, More Time
function hasDuplicates1(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) return true;
        }
    }
    return false;
}  // Time: O(n²), Space: O(1)

// Approach 2: More Space, Less Time
function hasDuplicates2(arr) {
    let seen = new Set();
    for (let num of arr) {
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false;
}  // Time: O(n), Space: O(n)</code></pre>

            </div>
