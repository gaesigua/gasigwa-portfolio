<!-- Final Module: Summary & Resources -->
<div class="module" id="module7">
                <h2>🎓 Course Summary & Next Steps</h2>

<h3>What You've Learned</h3>

<div class="example-box">
                    <h4>✅ Core Concepts Mastered:</h4>
                    <ul>
                        <li>Why algorithm efficiency matters</li>
                        <li>How to read and write Big O notation</li>
                        <li>Common time complexities (O(1), O(n), O(n²), O(log n), O(n log n))</li>
                        <li>Space complexity analysis</li>
                        <li>Pattern recognition in code</li>
                        <li>Optimization strategies</li>
                        <li>Real-world applications</li>
                    </ul>
                </div>

<h3>Quick Reference Cheat Sheet</h3>

<table class="complexity-table">
                    <thead>
                        <tr>
                            <th>Complexity</th>
                            <th>Quick Check</th>
                            <th>When to Use</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>O(1)</strong></td>
                            <td>No loops, direct access</td>
                            <td>Hash tables, array access, math operations</td>
                        </tr>
                        <tr>
                            <td><strong>O(log n)</strong></td>
                            <td>Halving problem each step</td>
                            <td>Binary search, balanced trees</td>
                        </tr>
                        <tr>
                            <td><strong>O(n)</strong></td>
                            <td>Single loop through data</td>
                            <td>Simple searches, traversals</td>
                        </tr>
                        <tr>
                            <td><strong>O(n log n)</strong></td>
                            <td>Divide and process all</td>
                            <td>Efficient sorting (merge, quick, heap)</td>
                        </tr>
                        <tr>
                            <td><strong>O(n²)</strong></td>
                            <td>Nested loops</td>
                            <td>Comparing all pairs (optimize if possible!)</td>
                        </tr>
                        <tr>
                            <td><strong>O(2ⁿ)</strong></td>
                            <td>Each step doubles work</td>
                            <td>Avoid! Find better algorithm</td>
                        </tr>
                    </tbody>
                </table>

<h3>Practice Problems</h3>

<div class="practice-exercise">
                    <h4>🎯 Final Challenge Problems</h4>
                    
<p><strong>Problem 1: Analyze this function</strong></p>
                    <pre><code>function mysteryFunction(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            result.push(arr[i]);
        }
    }
    result.sort((a, b) => a - b);
    return result[0];
}</code></pre>
                    
<p><strong>Problem 2: Find the pair</strong></p>
<p>Write a function that finds two numbers in an array that add up to a target sum. Optimize for O(n) time complexity.</p>
                    
<p><strong>Problem 3: String permutations</strong></p>
                    <p>What's the time complexity of generating all permutations of a string of length n?</p>
                </div>

<h3>Next Steps in Your Journey</h3>

<div class="tip-box">
                    <h4>🚀 Continue Learning:</h4>
                    <ol>
                        <li><strong>Practice on coding platforms:</strong>
                            <ul>
                                <li>LeetCode (filter by difficulty)</li>
                                <li>HackerRank (algorithm challenges)</li>
                                <li>CodeWars</li>
                            </ul>
                        </li>
                        <li><strong>Study data structures:</strong>
                            <ul>
                                <li>Arrays, Linked Lists, Stacks, Queues</li>
                                <li>Trees, Graphs, Heaps</li>
                                <li>Hash Tables in depth</li>
                            </ul>
                        </li>
                        <li><strong>Learn classic algorithms:</strong>
                            <ul>
                                <li>Sorting algorithms in detail</li>
                                <li>Graph algorithms (BFS, DFS, Dijkstra)</li>
                                <li>Dynamic programming</li>
                            </ul>
                        </li>
                        <li><strong>Interview preparation:</strong>
                            <ul>
                                <li>Cracking the Coding Interview (book)</li>
                                <li>System design basics</li>
                                <li>Mock interviews</li>
                            </ul>
                        </li>
                    </ol>
                </div>

<h3>Key Takeaways</h3>

<div class="example-box">
                    <h4>Remember These Golden Rules:</h4>
                    <ol>
                        <li><strong>Big O describes growth rate</strong>, not exact time</li>
                        <li><strong>Focus on large inputs</strong> - that's where complexity matters</li>
                        <li><strong>Drop constants and smaller terms</strong> when simplifying</li>
                        <li><strong>Nested loops often mean trouble</strong> - look for optimizations</li>
                        <li><strong>Hash tables are your friend</strong> for O(1) lookups</li>
                        <li><strong>Sorting enables many optimizations</strong></li>
                        <li><strong>Consider both time AND space</strong> complexity</li>
                        <li><strong>Know your data</strong> - expected input sizes matter</li>
                        <li><strong>Practice, practice, practice!</strong></li>
                    </ol>
                </div>

<div style="text-align: center; margin: 40px 0;">
                    <h2 style="color: var(--primary);">🎉 Congratulations!</h2>
                    <p style="font-size: 1.2em; color: var(--gray);">You've completed the Big O Notation course!</p>
                    <p>You now have the foundational knowledge to analyze algorithms and write efficient code.</p>
                </div>
            </div>
        </div>

<div class="btn-group">
            <button class="btn btn-secondary" id="prevBtn" onclick="previousModule()">← Previous</button>
            <button class="btn btn-primary" id="nextBtn" onclick="nextModule()">Next →</button>
        </div>

<footer>
            <h3>📚 Additional Resources</h3>
            <p>Continue your learning journey with these resources:</p>
            <ul style="list-style: none; padding: 0;">
                <li>📖 "Introduction to Algorithms" by CLRS</li>
                <li>💻 Practice on LeetCode, HackerRank, and CodeWars</li>
                <li>🎥 Watch MIT OpenCourseWare Algorithm lectures</li>
                <li>📝 Keep a complexity journal for code you write</li>
            </ul>
            <p style="margin-top: 20px; color: var(--gray);">
                Made with ❤️ for aspiring developers | © 2026 Your EdTech Platform
            </p>
        </footer>
    </div>

<script>
        let currentModule = 1;
        const totalModules = 7;

        const moduleData = [
            { id: 1, title: "Module 1: Introduction" },
            { id: 2, title: "Module 2: Understanding Big O" },
            { id: 3, title: "Module 3: Time Complexities" },
            { id: 4, title: "Module 4: Space Complexity" },
            { id: 5, title: "Module 5: Practical Applications" },
            { id: 6, title: "Module 6: Advanced Topics" },
            { id: 7, title: "Module 7: Summary & Next Steps" }
        ];

        function initializeNav() {
            const nav = document.getElementById('moduleNav');
            moduleData.forEach(module => {
                const btn = document.createElement('button');
                btn.className = 'nav-btn';
                btn.textContent = module.title;
                btn.onclick = () => goToModule(module.id);
                if (module.id === 1) btn.classList.add('active');
                nav.appendChild(btn);
            });
        }

        function goToModule(moduleNum) {
            document.querySelectorAll('.module').forEach(m => m.classList.remove('active'));
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            
            document.getElementById(`module${moduleNum}`).classList.add('active');
            document.querySelectorAll('.nav-btn')[moduleNum - 1].classList.add('active');
            
            currentModule = moduleNum;
            updateButtons();
            updateProgress();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function nextModule() {
            if (currentModule < totalModules) {
                goToModule(currentModule + 1);
            }
        }

        function previousModule() {
            if (currentModule > 1) {
                goToModule(currentModule - 1);
            }
        }

        function updateButtons() {
            document.getElementById('prevBtn').disabled = currentModule === 1;
            document.getElementById('nextBtn').textContent = 
                currentModule === totalModules ? 'Complete Course 🎉' : 'Next →';
        }

        function updateProgress() {
            const progress = (currentModule / totalModules) * 100;
            document.getElementById('progressBar').style.width = progress + '%';
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') nextModule();
            if (e.key === 'ArrowLeft') previousModule();
        });

        // Initialize
        initializeNav();
        updateButtons();
        updateProgress();
    </script>
</body>
</html>
