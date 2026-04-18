# 20. Greedy Algorithms

## Definition

A **greedy algorithm** is a problem-solving technique that makes the **best possible choice at each step**, aiming to find a globally optimal solution by making locally optimal choices.

<div class="cp-definition">

#### Key Idea

"Choose the best option available right now — don't look back."

A greedy algorithm never revisits or reconsiders past choices. It commits to each decision immediately.

</div>

---

## When Greedy Works

Greedy algorithms produce correct optimal solutions **only when the problem has these two properties**:

| Property | Definition |
|----------|------------|
| **Greedy Choice Property** | A globally optimal solution can be built by making locally optimal choices at each step |
| **Optimal Substructure** | An optimal solution to the problem contains optimal solutions to its subproblems |

If either property is missing, greedy may give a *good* solution but not the *best* solution.

---

## Classic Greedy Algorithms

| Algorithm | Problem | Greedy Choice |
|-----------|---------|--------------|
| **Kruskal's** | Minimum Spanning Tree | Add the shortest edge that doesn't form a cycle |
| **Prim's** | Minimum Spanning Tree | Add the nearest unvisited vertex |
| **Huffman Coding** | Data compression | Combine two least-frequent nodes first |
| **Activity Selection** | Maximum non-overlapping activities | Always pick the activity that finishes earliest |
| **Fractional Knapsack** | Maximize value within weight limit | Pick by highest value/weight ratio |

---

## Greedy vs Dynamic Programming

| Aspect | Greedy | Dynamic Programming |
|--------|--------|-------------------|
| **Choices revisited?** | No — commit immediately | Yes — considers all subproblems |
| **Works when?** | Greedy choice property holds | Optimal substructure holds |
| **Time complexity** | Usually faster | Often slower (explores more) |
| **Example** | Fractional Knapsack | 0/1 Knapsack |

---

## Programming Examples

### Example 1: Kruskal's Algorithm — Minimum Spanning Tree (Python)

**Problem:** Find the Minimum Spanning Tree (MST) of a weighted graph — the set of edges that connects all vertices with minimum total weight, with no cycles.

```python
class Graph:
    def __init__(self, vertices):
        self.V     = vertices
        self.edges = []   # list of (weight, u, v)

    def add_edge(self, u, v, w):
        self.edges.append((w, u, v))

    def find_parent(self, parent, i):
        if parent[i] == i:
            return i
        return self.find_parent(parent, parent[i])

    def union(self, parent, rank, x, y):
        xroot = self.find_parent(parent, x)
        yroot = self.find_parent(parent, y)
        if   rank[xroot] < rank[yroot]: parent[xroot] = yroot
        elif rank[xroot] > rank[yroot]: parent[yroot] = xroot
        else:
            parent[yroot] = xroot
            rank[xroot]  += 1

    def kruskal_mst(self):
        result = []
        self.edges.sort()                           # greedy: sort by weight
        parent = list(range(self.V))
        rank   = [0] * self.V
        e      = 0    # edges in MST

        for w, u, v in self.edges:
            if e == self.V - 1: break
            x = self.find_parent(parent, u)
            y = self.find_parent(parent, v)
            if x != y:                              # no cycle
                e += 1
                result.append((u, v, w))
                self.union(parent, rank, x, y)

        print("Edges in MST:")
        total = 0
        for u, v, w in result:
            print(f"  {u} -- {v} = {w}")
            total += w
        print(f"  Total weight: {total}")

# Build graph
g = Graph(4)
g.add_edge(0, 1, 10)
g.add_edge(0, 2, 6)
g.add_edge(0, 3, 5)
g.add_edge(1, 3, 15)
g.add_edge(2, 3, 4)
g.kruskal_mst()
```

**Output:**
```
Edges in MST:
  2 -- 3 = 4
  0 -- 3 = 5
  0 -- 1 = 10
  Total weight: 19
```

---

### Example 2: Prim's Algorithm — MST from a Start Vertex (Python)

```python
import sys

def prim(graph, V):
    selected = [False] * V
    selected[0] = True
    edges_added = 0

    print("Edge : Weight")
    while edges_added < V - 1:
        minimum = sys.maxsize
        x = y   = 0
        for i in range(V):
            if selected[i]:
                for j in range(V):
                    if not selected[j] and graph[i][j]:
                        if graph[i][j] < minimum:
                            minimum = graph[i][j]
                            x, y    = i, j
        print(f"  {x} - {y} : {graph[x][y]}")
        selected[y] = True
        edges_added += 1

# Adjacency matrix (0 = no edge)
V = 5
graph = [
    [0, 2, 0, 6, 0],
    [2, 0, 3, 8, 5],
    [0, 3, 0, 0, 7],
    [6, 8, 0, 0, 9],
    [0, 5, 7, 9, 0]
]
prim(graph, V)
```

**Output:**
```
Edge : Weight
  0 - 1 : 2
  1 - 2 : 3
  1 - 4 : 5
  0 - 3 : 6
```

---

### Example 3: Activity Selection Problem (Python)

**Problem:** Given activities with start and finish times, select the **maximum** number of non-overlapping activities.

**Greedy strategy:** Always pick the activity that **finishes earliest** (and starts after the last selected activity ends).

```python
def activity_selection(start, finish):
    # Sort activities by finish time (greedy choice)
    activities = sorted(zip(start, finish), key=lambda x: x[1])
    
    selected     = [activities[0]]
    last_finish  = activities[0][1]

    for s, f in activities[1:]:
        if s >= last_finish:       # non-overlapping
            selected.append((s, f))
            last_finish = f

    return selected

start  = [1, 3, 0, 5, 8, 5]
finish = [2, 4, 6, 7, 9, 9]

result = activity_selection(start, finish)
print("Selected activities:", result)
# [(1, 2), (3, 4), (5, 7), (8, 9)] — 4 activities
```

---

### Example 4: Fractional Knapsack (Python)

**Problem:** Maximize total value of items in a knapsack given a weight limit. Fractions of items are allowed.

**Greedy strategy:** Take items in descending order of **value/weight** ratio.

```python
def fractional_knapsack(values, weights, capacity):
    # Pair items with their value/weight ratio
    index = list(range(len(values)))
    ratio = [v / w for v, w in zip(values, weights)]
    
    # Sort by ratio (descending) — greedy choice
    index.sort(key=lambda i: ratio[i], reverse=True)

    total_value = 0.0
    for i in index:
        if weights[i] <= capacity:
            # Take entire item
            total_value += values[i]
            capacity    -= weights[i]
        else:
            # Take fraction
            total_value += values[i] * (capacity / weights[i])
            break

    return total_value

values   = [60, 100, 120]
weights  = [10, 20,  30]
capacity = 50

result = fractional_knapsack(values, weights, capacity)
print(f"Maximum value: {result}")   # 240.0
```

---

### Example 5: Huffman Coding (Python)

**Problem:** Compress characters by assigning shorter binary codes to more frequent characters.

**Greedy strategy:** Always combine the two nodes with the **lowest frequency** first.

```python
import heapq
from collections import defaultdict

def huffman_coding(data):
    freq = defaultdict(int)
    for char in data:
        freq[char] += 1

    heap = [[weight, [char, ""]] for char, weight in freq.items()]
    heapq.heapify(heap)

    while len(heap) > 1:
        lo = heapq.heappop(heap)
        hi = heapq.heappop(heap)
        for pair in lo[1:]: pair[1] = '0' + pair[1]   # left = '0'
        for pair in hi[1:]: pair[1] = '1' + pair[1]   # right = '1'
        heapq.heappush(heap, [lo[0] + hi[0]] + lo[1:] + hi[1:])

    print("Huffman Codes:")
    for char, code in sorted(heapq.heappop(heap)[1:], key=lambda x: x[0]):
        print(f"  '{char}': {code}")

huffman_coding("greedyalgorithm")
```

---

## Practice Problems

<details>
<summary>🧩 Practice 1 — Activity Selection</summary>

**Problem:** Given activities: Start=[1,2,3], Finish=[3,4,5], find the maximum non-overlapping set.

**Greedy trace:**

Sort by finish time: (1,3), (2,4), (3,5)

- Select (1,3): last_finish = 3
- (2,4): start=2 < last_finish=3 → **skip** (overlaps)
- (3,5): start=3 >= last_finish=3 → **select**, last_finish = 5

**Selected: [(1,3), (3,5)] → 2 activities (max possible)**

</details>

<details>
<summary>🧩 Practice 2 — Fractional Knapsack</summary>

**Problem:** Items with values [30, 20, 15] and weights [5, 10, 15], capacity = 20.

```python
values  = [30, 20, 15]
weights = [5, 10, 15]
capacity = 20

# Ratios: 30/5=6, 20/10=2, 15/15=1
# Sorted: item0 (ratio=6), item1 (ratio=2), item2 (ratio=1)

# item0: w=5 <= 20 → take all, value=30, remaining=15
# item1: w=10 <= 15 → take all, value=20, remaining=5
# item2: w=15 > 5 → take 5/15 = 1/3 fraction, value=15*(1/3)=5

print(fractional_knapsack(values, weights, capacity))   # 55.0
```

</details>

<details>
<summary>🧩 Practice 3 — When Greedy Fails</summary>

**Question:** Show a case where greedy gives a suboptimal solution.

**Example — 0/1 Knapsack (items cannot be split):**

- Items: A=(value=6, weight=4), B=(value=5, weight=3), C=(value=4, weight=2)
- Capacity = 6

**Greedy (by ratio) picks:**
- Ratio A=1.5, C=2.0, B=1.67 → sorted: C, B, A
- Take C: weight=2, value=4, remaining=4
- Take B: weight=3, value=5, remaining=1
- A won't fit (weight=4 > 1)
- **Greedy total: 9**

**Optimal:**
- Take A + C: weight=4+2=6, value=6+4=**10** ← better!

**Conclusion:** For 0/1 Knapsack (fractional not allowed), greedy fails. Dynamic Programming is required to find the optimal solution.

</details>
