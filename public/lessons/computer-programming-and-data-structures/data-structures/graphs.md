# 17. Graphs

## Definition

A **graph** is a mathematical and computational structure used to model **relationships between objects**.

<div class="cp-definition">

Formally: **G = (V, E)**, where:
- **V** = a set of **vertices** (nodes) — represent objects or entities (cities, people, pages)
- **E ⊆ V × V** = a set of **edges** (links) — represent connections (roads, friendships, links)

</div>

---

## Types of Graphs

### A. Directed Graph (Digraph)

Edges have a **direction** — represented as arrows.

```
A → B → C
↑       ↓
D ←─────┘
```

**Example:** Twitter follow relationships, web page links, task dependencies.

---

### B. Undirected Graph

Edges have **no direction** — connection goes both ways.

```
A ─── B
│     │
C ─── D
```

**Example:** Facebook friendships, network cables, roads bidirectional.

---

### C. Weighted Graph

Edges carry a **weight or cost** (distance, time, capacity).

```
A ──5── B
│       │
10      3
│       │
C ──1── D
```

**Example:** Road map with distances, network bandwidth, flight routes.

---

## Applications of Graphs

| Domain | Application |
|--------|-------------|
| **Networks** | Internet topology, computer networks |
| **Navigation** | GPS shortest path, GPS routing |
| **Social media** | Friend suggestions, influencer ranking |
| **Scheduling** | Project task dependencies (PERT/CPM) |
| **Recommendation** | Netflix/Amazon: items and user connections |
| **Compilers** | Control flow graphs, dependency graphs |

---

## Graph Representations

### A. Adjacency Matrix

A 2D boolean matrix where `matrix[i][j] = 1` if an edge exists from vertex `i` to vertex `j`.

**Pros:** O(1) edge lookup  
**Cons:** O(V²) space — inefficient for sparse graphs

```c
/* Adjacency matrix (4 vertices: 0,1,2,3) */
int adj[4][4] = {
    {0, 1, 1, 0},   /* 0 connects to 1, 2 */
    {1, 0, 0, 1},   /* 1 connects to 0, 3 */
    {1, 0, 0, 1},   /* 2 connects to 0, 3 */
    {0, 1, 1, 0}    /* 3 connects to 1, 2 */
};
```

### B. Adjacency List

Each vertex stores a list of its neighbors.

**Pros:** O(V + E) space — efficient for sparse graphs  
**Cons:** O(degree) for edge lookup

---

## Programming Examples

### Example 1: Undirected Graph — Adjacency List (Python)

```python
# Step 1: Define graph as dictionary
graph = {
    "A": ["B", "C"],
    "B": ["A", "D"],
    "C": ["A", "D"],
    "D": ["B", "C"]
}

# Step 2: Print adjacency list
for node, neighbors in graph.items():
    print(f"{node} -> {neighbors}")
```

**Output:**
```
A -> ['B', 'C']
B -> ['A', 'D']
C -> ['A', 'D']
D -> ['B', 'C']
```

**C variant — adjacency matrix:**

```c
#include <stdio.h>
#define V 4

int adj[V][V] = {
    {0, 1, 1, 0},
    {1, 0, 0, 1},
    {1, 0, 0, 1},
    {0, 1, 1, 0}
};

void printAdjacencyMatrix() {
    int i, j;
    printf("Adjacency Matrix:\n");
    for (i = 0; i < V; i++) {
        for (j = 0; j < V; j++)
            printf("%d ", adj[i][j]);
        printf("\n");
    }
}
```

---

### Example 2: Depth-First Search (DFS) — Python

DFS explores **as deeply as possible** before backtracking. Uses a stack (or recursion).

```python
def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()
    visited.add(start)
    print(start, end=" ")

    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)

graph = {
    "A": ["B", "C"],
    "B": ["A", "D"],
    "C": ["A", "D"],
    "D": ["B", "C"]
}

print("DFS from A:"); dfs(graph, "A")   # A B D C
```

**C variant — DFS using recursion:**

```c
#include <stdio.h>
#define V 4

int visited[V];
int adjMatrix[V][V] = {
    {0,1,1,0},
    {1,0,0,1},
    {1,0,0,1},
    {0,1,1,0}
};

void dfs(int v) {
    visited[v] = 1;
    printf("Visited: %d\n", v);
    int i;
    for (i = 0; i < V; i++)
        if (adjMatrix[v][i] && !visited[i])
            dfs(i);
}

int main() {
    int i;
    for (i = 0; i < V; i++) visited[i] = 0;
    dfs(0);   /* DFS from vertex 0 */
    return 0;
}
```

---

### Example 3: Breadth-First Search (BFS) — Python

BFS explores **level by level**. Uses a queue.

```python
from collections import deque

def bfs(graph, start):
    visited = set()
    queue   = deque([start])
    visited.add(start)

    while queue:
        node = queue.popleft()
        print(node, end=" ")
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)

print("BFS from A:"); bfs(graph, "A")   # A B C D
```

---

### Example 4: Weighted Graph and Dijkstra's Shortest Path (Python)

```python
import heapq

def dijkstra(graph, start):
    # Initialize distances: infinity for all except start
    distances = {node: float('inf') for node in graph}
    distances[start] = 0
    heap = [(0, start)]   # (distance, node)

    while heap:
        curr_dist, node = heapq.heappop(heap)

        for neighbor, weight in graph[node]:
            distance = curr_dist + weight
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(heap, (distance, neighbor))

    return distances

# Weighted adjacency list: (neighbor, weight)
weighted_graph = {
    "A": [("B", 1), ("C", 4)],
    "B": [("A", 1), ("C", 2), ("D", 5)],
    "C": [("A", 4), ("B", 2), ("D", 1)],
    "D": [("B", 5), ("C", 1)]
}

distances = dijkstra(weighted_graph, "A")
print("Shortest distances from A:", distances)
# {'A': 0, 'B': 1, 'C': 3, 'D': 4}
```

---

### Example 5: Cycle Detection in a Directed Graph (Python)

```python
def has_cycle(graph):
    visited   = set()
    rec_stack = set()   # nodes in current DFS path

    def dfs(v):
        visited.add(v)
        rec_stack.add(v)

        for neighbor in graph.get(v, []):
            if neighbor not in visited:
                if dfs(neighbor):
                    return True
            elif neighbor in rec_stack:
                return True   # back edge → cycle!

        rec_stack.remove(v)
        return False

    for node in graph:
        if node not in visited:
            if dfs(node):
                return True
    return False

# Graph with cycle: A → B → C → A
cyclic_graph = {
    "A": ["B"],
    "B": ["C"],
    "C": ["A"],   # creates cycle
    "D": []
}

print("Has cycle:", has_cycle(cyclic_graph))   # True
```

---

## BFS vs DFS Comparison

| Property | BFS | DFS |
|----------|-----|-----|
| **Data structure** | Queue | Stack (or recursion) |
| **Exploration** | Level by level | Deep first, then backtrack |
| **Shortest path?** | Yes (unweighted graphs) | No |
| **Memory usage** | Higher (stores entire level) | Lower (only current path) |
| **Best for** | Shortest path, network traversal | Cycle detection, topological sort |

---

## Practice Problems

<details>
<summary>🧩 Practice 1 — Adjacency List</summary>

**Problem:** Represent this weighted directed graph as a Python adjacency list:

- A→B (weight 5)
- A→C (weight 10)
- B→C (weight 3)

```python
graph = {
    "A": [("B", 5), ("C", 10)],
    "B": [("C", 3)],
    "C": []
}

for node, edges in graph.items():
    print(f"{node} -> {[(n, w) for n, w in edges]}")
```

**Output:**
```
A -> [('B', 5), ('C', 10)]
B -> [('C', 3)]
C -> []
```

</details>

<details>
<summary>🧩 Practice 2 — BFS Level Order</summary>

**Problem:** Using BFS, list the order in which nodes are visited in this graph starting from "A":

```
A — B — D
|       |
C ————— E
```

**Graph:**
```python
graph = {
    "A": ["B", "C"],
    "B": ["A", "D"],
    "C": ["A", "E"],
    "D": ["B", "E"],
    "E": ["D", "C"]
}
```

**BFS from A:**
- Level 0: A
- Level 1: B, C
- Level 2: D, E

**Output:** `A B C D E`

</details>

<details>
<summary>🧩 Practice 3 — Dijkstra Trace</summary>

**Problem:** Given the weighted graph from Example 4, trace Dijkstra's algorithm from "A" step by step.

**Trace:**

| Step | Current Node | Distances Dict |
|------|-------------|---------------|
| Init | — | A=0, B=∞, C=∞, D=∞ |
| Pop A (dist=0) | A | B=1, C=4 |
| Pop B (dist=1) | B | C=3 (improved!), D=6 |
| Pop C (dist=3) | C | D=4 (improved!) |
| Pop D (dist=4) | D | No improvement |

**Final distances from A:** `{A:0, B:1, C:3, D:4}`

</details>
