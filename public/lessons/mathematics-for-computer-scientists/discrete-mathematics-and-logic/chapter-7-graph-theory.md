# Chapter 7: Graph Theory

<div class="intro-box">
  <h2>Overview</h2>
  <p>A graph is a mathematical representation of a set of objects and their relationships. Graphs are widely used in computer science, engineering, transport networks, and social networks. By the end of this chapter, you will understand the components of graphs, connectivity, matrix representations, and real-world applications.</p>
</div>

## 7.1 Introduction to Graphs

A graph consists of two main components:
- **Vertices (Nodes):** Points representing objects, locations, or entities (e.g., people in a social network). Denoted by `V`.
- **Edges (Links):** Connections between vertices representing relationships or interactions. Denoted by `E`.

### Types of Graphs

<div class="comparison-grid">
  <div class="comparison-card">
    <h5>Undirected Graph</h5>
    <p>Edges have no direction. The relationship is mutual.</p>
    <p><em>Example:</em> A friendship between two people. If A is friends with B, B is friends with A.</p>
  </div>
  <div class="comparison-card">
    <h5>Directed Graph (Digraph)</h5>
    <p>Edges have direction, represented by arrows. Not necessarily mutual.</p>
    <p><em>Example:</em> One-way streets, or follower relationships on social media (A follows B, but B may not follow A).</p>
  </div>
</div>

## 7.2 Terminology: Subgraphs, Paths, and Circuits

<table class="data-table">
  <thead>
    <tr>
      <th>Term</th>
      <th>Meaning</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Degree</strong></td>
      <td>The number of edges incident on a vertex.</td>
    </tr>
    <tr>
      <td><strong>Path</strong></td>
      <td>A sequence of vertices connected by edges. (Length = number of edges)</td>
    </tr>
    <tr>
      <td><strong>Circuit</strong></td>
      <td>A closed path that starts and ends at the SAME vertex.</td>
    </tr>
    <tr>
      <td><strong>Cycle</strong></td>
      <td>A circuit with no repeated vertices except the start/end vertex.</td>
    </tr>
    <tr>
      <td><strong>Subgraph</strong></td>
      <td>A smaller graph formed by taking a subset of the vertices and edges of the original graph.</td>
    </tr>
  </tbody>
</table>

## 7.3 Connectivity

A graph `G = (V, E)` is **connected** if there exists at least one path between every pair of vertices. If any vertex cannot be reached, the graph is **disconnected**.

### Connectivity in Directed Graphs
- **Strongly Connected:** There exists a directed path from every vertex to every other vertex following the arrows.
- **Weakly Connected:** It is not strongly connected, but if you replaced all the directed arrows with undirected lines, the resulting graph would be connected.

## 7.4 Graph Representation Matrices

In computer science, algorithms cannot process pictures of graphs. Graphs must be converted into numerical matrices.

<div class="module">
  <h3>1. Adjacency Matrix</h3>
  <p>A square matrix that shows which vertices are directly connected by an edge. For a graph with `n` vertices, it is an `n × n` matrix.</p>
  <ul>
    <li>Entry is <code>1</code> if there is an edge connecting the row's vertex to the column's vertex.</li>
    <li>Entry is <code>0</code> otherwise.</li>
  </ul>
  <p><em>Note: For undirected graphs, the adjacency matrix is always symmetrical.</em></p>
</div>

<div class="module">
  <h3>2. Incidence Matrix</h3>
  <p>A matrix showing the relationship between vertices and edges.</p>
  <ul>
    <li>Rows = Vertices</li>
    <li>Columns = Edges</li>
    <li>Entry is <code>1</code> if the vertex touches the edge, <code>0</code> otherwise.</li>
  </ul>
</div>

## 7.5 Transport Networks

Transport networks (road systems, railways, supply chains, internet routing) are heavily modeled using graph theory to optimize travel routes.

<div class="concept-card">
  <div class="concept-header"><span class="concept-name">Weighted Edges</span></div>
  <p>In transport networks, edges often carry "weights" representing <strong>distance, time, cost, or capacity</strong>.</p>
  <p>Instead of just asking "Is there a path?", algorithms like Dijkstra's algorithm ask "What is the <strong>shortest</strong> or <strong>cheapest</strong> path?".</p>
</div>
