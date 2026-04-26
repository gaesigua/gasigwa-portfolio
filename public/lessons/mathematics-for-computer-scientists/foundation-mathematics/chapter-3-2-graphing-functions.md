# Chapter 3.2: Graphing Functions

<div class="intro-box">
  <h2>Overview</h2>
  <p>Visualizing functions through graphs is one of the most powerful tools in mathematics. By graphing a function on a Cartesian coordinate system, we can instantly see its behavior, its roots, and its symmetry. In this section, we will cover function symmetry, standard graphing shapes, and asymptotes.</p>
</div>

## 3.2.1 Symmetry of Functions

Intercepts, symmetry, and equation recognition can aid us greatly in sketching the graphs of functions.

<div class="module">
  <h3>1. Even Functions</h3>
  <p>A function is <strong>even</strong> if its graph is symmetric with respect to the Y-axis. Algebraically, a function <code>f</code> is even if, for every <code>x</code> in its domain:</p>
  <p><code>f(-x) = f(x)</code></p>
  <p><strong>Example:</strong> <code>f(x) = x²</code> is even because <code>f(-x) = (-x)² = x² = f(x)</code>.</p>
</div>

<div class="module">
  <h3>2. Odd Functions</h3>
  <p>A function is <strong>odd</strong> if its graph is symmetric with respect to the origin (a 180-degree rotation). Algebraically, a function <code>f</code> is odd if, for every <code>x</code> in its domain:</p>
  <p><code>f(-x) = -f(x)</code></p>
  <p><strong>Example:</strong> <code>f(x) = x³ - x</code> is odd because <code>f(-x) = (-x)³ - (-x) = -x³ + x = -(x³ - x) = -f(x)</code>.</p>
</div>

*Note:* A function can be neither even nor odd (e.g., `f(x) = x³ - 1`).

---

## 3.2.2 Standard Function Graphs

It is important to recognize the basic shapes of common functions that occur frequently in applications:

1. **Constant Function:** `f(x) = c`. The graph is a horizontal line intercepting the y-axis at `c`.
2. **Identity Function:** `f(x) = x`. The graph is a diagonal line passing through the origin with a slope of 1.
3. **Absolute Value Function:** `f(x) = |x|`. The graph forms a "V" shape with the vertex at the origin.
4. **Square Root Function:** `f(x) = √x`. The graph is a curve starting at the origin and sweeping upwards to the right. (Domain: `x ≥ 0`).
5. **Squaring Function:** `f(x) = x²`. The graph is a standard parabola opening upwards with its vertex at the origin.
6. **Cubing Function:** `f(x) = x³`. The graph curves from the bottom-left quadrant through the origin up into the top-right quadrant.

---

## 3.2.3 Asymptotes

When graphing rational functions (functions that are a fraction where the numerator and denominator are polynomials), we often encounter asymptotes. An asymptote is a line that the graph of a function approaches but never touches as it heads towards infinity.

### Vertical Asymptotes
A vertical asymptote occurs where the denominator of a rational function is zero (and the numerator is not zero at that same point). 

<div class="example">
  <h4>Example</h4>
  <p>Find the vertical asymptote of <code>y = 1 / (x - 1)</code>.</p>
  <p><strong>Solution:</strong> The denominator is zero when <code>x - 1 = 0</code>, so <code>x = 1</code>. Therefore, the line <code>x = 1</code> is a vertical asymptote.</p>
  <p><em>Note:</em> If both numerator and denominator are zero at the same point (e.g., <code>y = (x² - x) / (x - 1)</code> at <code>x = 1</code>), there is a "hole" in the graph, not an asymptote.</p>
</div>

### Horizontal Asymptotes
A horizontal asymptote describes the behavior of the function as `x` goes to positive or negative infinity.

To graph a complex equation, it helps to:
1. Find any vertical or horizontal asymptotes.
2. Select arbitrary values for the variable (`x`).
3. Compute the corresponding values for `y = f(x)`.
4. Arrange them in a tabular form and plot the points.
