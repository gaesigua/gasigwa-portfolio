<div class="container">
        <header>
            <h1>🚀 Big O Notation: From Zero to Hero</h1>
            <p class="subtitle">Master algorithm analysis and write efficient code</p>
            <div class="course-info">
                <div class="info-item">⏱️ <strong>Duration:</strong> 6-8 hours</div>
                <div class="info-item">📊 <strong>Level:</strong> Beginner</div>
                <div class="info-item">💻 <strong>Prerequisites:</strong> Basic programming</div>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" id="progressBar" style="width: 0%"></div>
            </div>
        </header>
<nav>
            <div class="nav-title">📚 Course Modules</div>
            <div class="module-nav" id="moduleNav"></div>
        </nav>

<div class="content">
            <!-- Module 1 -->
            <div class="module active" id="module1">
                <h2>Module 1: Introduction to Algorithm Analysis</h2>
                
<h3>Lesson 1.1: Why Algorithm Efficiency Matters</h3>
                
<div class="learning-objectives">
                    <h4>Learning Objectives:</h4>
                    <ul>
                        <li>Understand why we need to measure algorithm performance</li>
                        <li>Learn the difference between working code and efficient code</li>
                        <li>Recognize real-world impacts of algorithm efficiency</li>
                    </ul>
                </div>

<p>Imagine you're building a social media app. Your first version works fine with 100 users, but when you reach 10,000 users, it starts freezing. What went wrong? The answer often lies in algorithm efficiency.</p>

<div class="example-box">
                    <h4>📖 Real-World Scenario: The Library Problem</h4>
                    <p>You need to find a specific book in a library with 1,000 books:</p>
                    <ul>
                        <li><strong>Method A:</strong> Check every book one by one (could take 1,000 checks)</li>
                        <li><strong>Method B:</strong> Use the catalog system (might take only 10 checks)</li>
                    </ul>
                    <p>Both methods work, but Method B is far more efficient. This is what algorithm analysis helps us understand and measure.</p>
                </div>

<h4>Why This Matters:</h4>
                <ul>
                    <li>⚡ Faster applications mean happier users</li>
                    <li>💰 Efficient code saves money on server costs</li>
                    <li>📈 Scalability: your app can handle growth</li>
                    <li>🎯 Better job prospects: tech interviews heavily focus on this</li>
                </ul>

<div class="practice-exercise">
                    <h4>🎯 Practice Exercise 1.1</h4>
                    <p>Think of three everyday tasks where efficiency matters. How would doing them inefficiently waste time?</p>
                </div>

<h3>Lesson 1.2: Traditional Performance Measurement Problems</h3>

<p><strong>Method 1: Timing Code Execution</strong></p>

<pre><code>import time

start = time.time()
# Run some code here
end = time.time()
print(f"Time taken: {end - start} seconds")</code></pre>

<div class="warning-box">
                    <h4>⚠️ Problems with Timing:</h4>
                    <ul>
                        <li>Different computers produce different results</li>
                        <li>Same computer, different times (background processes)</li>
                        <li>Small inputs might not show meaningful differences</li>
                        <li>Doesn't tell us how performance scales</li>
                    </ul>
                </div>

<p><strong>Method 2: Counting Operations</strong></p>
                <p>Instead of measuring time, we count how many basic operations the algorithm performs.</p>

<div class="example-box">
                    <h4>Example: Finding maximum in a list of n numbers</h4>
                    <ul>
                        <li>Comparisons needed: n - 1</li>
                        <li>Variable assignments: 2</li>
                        <li>Total operations: approximately n</li>
                    </ul>
                </div>

<p>This is better, but still complex to communicate. We need something simpler: <strong>Big O Notation</strong>.</p>

<div class="practice-exercise">
                    <h4>🎯 Practice Exercise 1.2</h4>
                    <p>Count the number of operations:</p>
                    <pre><code>sum = 0
for i from 1 to n:
    sum = sum + i
return sum</code></pre>
                </div>
            </div>
