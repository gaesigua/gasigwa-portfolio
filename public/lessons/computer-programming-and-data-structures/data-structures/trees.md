# 16. Trees

## Definition

A **tree** is a hierarchical data structure consisting of **nodes** connected by **edges**, where:

- One node is called the **root** (top-most node — has no parent)
- Each node may have zero or more **child nodes**
- Nodes with no children are called **leaves**  
- Each child has exactly **one parent**

<div class="cp-definition">

#### Key Tree Terminology

| Term | Definition |
|------|------------|
| **Root** | Top node with no parent |
| **Parent** | Node with children below it |
| **Child** | Node directly connected below a parent |
| **Leaf** | Node with no children |
| **Height** | Maximum depth from root to a leaf |
| **Depth of a node** | Number of edges from root to that node |
| **Degree** | Number of children a node has |
| **Subtree** | A node and all its descendants |

</div>

---

## Types of Trees

### 1. Binary Tree

Each node has **at most two children**: a left child and a right child.

**Special types:**
- **Full Binary Tree** — every node has 0 or 2 children (never 1)
- **Complete Binary Tree** — all levels fully filled except possibly the last (filled left to right)
- **Perfect Binary Tree** — all internal nodes have 2 children; all leaves at same level

```
        10          ← root
       /  \
      5    20       ← internal nodes
     / \   / \
    3   7 15  25    ← leaves
```

---

### 2. Binary Search Tree (BST)

A binary tree with the ordering property:

> **Left child < Parent < Right child**

This enables efficient **O(log n)** average search, insert, and delete.

```
        15
       /  \
      10   20
     / \   / \
    8  12 17  25
```

**Inorder traversal of a BST yields sorted output:** 8 10 12 15 17 20 25

---

### 3. AVL Tree

A **self-balancing BST** where for every node, the height difference between left and right subtrees is at most 1. This guarantees **O(log n)** time for all operations even in the worst case.

---

### 4. Heap

A **complete binary tree** satisfying the heap property:
- **Max-Heap:** Parent ≥ children (root is maximum)
- **Min-Heap:** Parent ≤ children (root is minimum)

**Uses:** Priority queues, heap sort, finding kth largest/smallest element.

---

## Tree Traversal Orders

| Traversal | Order | Use case |
|-----------|-------|---------|
| **Inorder (L-Root-R)** | Left, Root, Right | Sorted output from BST |
| **Preorder (Root-L-R)** | Root, Left, Right | Copy/serialize a tree |
| **Postorder (L-R-Root)** | Left, Right, Root | Delete tree, evaluate expressions |
| **Level-order (BFS)** | Level by level | Shortest path, printing tree |

---

## Applications of Trees

| Application | Tree Type |
|-------------|----------|
| File systems (directories) | General tree |
| Database indexing | B-Tree, B+-Tree |
| Auto-complete / dictionary | Trie |
| Expression parsing (compilers) | Expression tree |
| Priority queues | Heap |
| Network routing | Spanning tree |

---

## Programming Examples

### Example 1: Simple Binary Tree and Traversal (Python)

```python
class Node:
    def __init__(self, data):
        self.data  = data
        self.left  = None
        self.right = None

# Build tree manually
root = Node(10)
root.left  = Node(5)
root.right = Node(20)
root.left.left  = Node(3)
root.left.right = Node(7)

# Three traversal orders
def inorder(node):   # Left → Root → Right
    if node:
        inorder(node.left)
        print(node.data, end=" ")
        inorder(node.right)

def preorder(node):  # Root → Left → Right
    if node:
        print(node.data, end=" ")
        preorder(node.left)
        preorder(node.right)

def postorder(node): # Left → Right → Root
    if node:
        postorder(node.left)
        postorder(node.right)
        print(node.data, end=" ")

print("Inorder:",   end=" "); inorder(root)   # 3 5 7 10 20
print()
print("Preorder:",  end=" "); preorder(root)  # 10 5 3 7 20
print()
print("Postorder:", end=" "); postorder(root) # 3 7 5 20 10
```

---

### Example 2: Binary Search Tree — Insert and Search (Python)

```python
class BSTNode:
    def __init__(self, key):
        self.key   = key
        self.left  = None
        self.right = None

def insert(node, key):
    if node is None:
        return BSTNode(key)
    if key < node.key:
        node.left  = insert(node.left, key)
    else:
        node.right = insert(node.right, key)
    return node

def search(node, key):
    if node is None or node.key == key:
        return node
    if key < node.key:
        return search(node.left, key)
    return search(node.right, key)

# Build BST
root = None
for k in [15, 10, 20, 8, 12, 17, 25]:
    root = insert(root, k)

# Inorder (sorted output)
def inorder(node):
    if node:
        inorder(node.left)
        print(node.key, end=" ")
        inorder(node.right)

print("BST Inorder:"); inorder(root)   # 8 10 12 15 17 20 25

# Search
result = search(root, 12)
print("\nSearch 12:", "Found" if result else "Not found")   # Found
```

**C implementation — BST insert and inorder:**

```c
#include <stdio.h>
#include <stdlib.h>

struct BSTNode {
    int key;
    struct BSTNode *left, *right;
};

struct BSTNode* createNode(int key) {
    struct BSTNode* node = (struct BSTNode*)malloc(sizeof(struct BSTNode));
    node->key = key;
    node->left = node->right = NULL;
    return node;
}

struct BSTNode* insert(struct BSTNode* root, int key) {
    if (root == NULL) return createNode(key);
    if (key < root->key)
        root->left  = insert(root->left, key);
    else
        root->right = insert(root->right, key);
    return root;
}

void inorder(struct BSTNode* root) {
    if (root) {
        inorder(root->left);
        printf("%d ", root->key);
        inorder(root->right);
    }
}

int main() {
    struct BSTNode* root = NULL;
    int keys[] = {15, 10, 20, 8, 12, 17, 25};
    int i;
    for (i = 0; i < 7; i++)
        root = insert(root, keys[i]);

    printf("BST Inorder: ");
    inorder(root);    /* 8 10 12 15 17 20 25 */
    printf("\n");
    return 0;
}
```

---

### Example 3: Check if a Binary Tree is a BST (Python)

```python
def isBST(node, min_val=float('-inf'), max_val=float('inf')):
    if node is None:
        return True
    if not (min_val < node.key < max_val):
        return False
    return (isBST(node.left,  min_val, node.key) and
            isBST(node.right, node.key, max_val))

print("Is BST?", isBST(root))   # True
```

---

### Example 4: Max-Heap Implementation (Python)

```python
import heapq

# Python's heapq is a min-heap. Use negative values for max-heap.
heap = []
numbers = [10, 20, 5, 15, 30]

for num in numbers:
    heapq.heappush(heap, -num)   # negate to simulate max-heap

print("Max-Heap output (largest first):")
while heap:
    print(-heapq.heappop(heap), end=" ")   # 30 20 15 10 5
```

---

### Example 5: Expression Tree Evaluation (Python)

An **expression tree** stores an arithmetic expression: operators at internal nodes, operands at leaves.

```python
class ExprNode:
    def __init__(self, value):
        self.value = value
        self.left  = None
        self.right = None

def evaluate(node):
    # Leaf node — return the number
    if node.left is None and node.right is None:
        return int(node.value)
    left_val  = evaluate(node.left)
    right_val = evaluate(node.right)
    if   node.value == '+': return left_val + right_val
    elif node.value == '-': return left_val - right_val
    elif node.value == '*': return left_val * right_val
    elif node.value == '/': return left_val // right_val

# Build expression tree for: ((3+5)*2)
#         *
#        / \
#       +   2
#      / \
#     3   5

root = ExprNode('*')
root.left  = ExprNode('+')
root.left.left  = ExprNode('3')
root.left.right = ExprNode('5')
root.right = ExprNode('2')

print("((3+5)*2) =", evaluate(root))   # 16
```

---

## Comparison: Binary Tree Types

| Property | Binary Tree | BST | AVL Tree | Max-Heap |
|----------|-------------|-----|----------|---------|
| **Left < Parent < Right?** | No | Yes | Yes | No |
| **Self-balancing?** | No | No | Yes | N/A |
| **Search time** | O(n) | O(log n) avg | O(log n) guaranteed | O(n) |
| **Insertion time** | O(1) with pointer | O(log n) avg | O(log n) | O(log n) |
| **Primary use** | General hierarchy | Sorted data lookup | Balanced lookup | Priority queues |

---

## Practice Problems

<details>
<summary>🧩 Practice 1 — Trace Traversals</summary>

**Problem:** For this tree:
```
        1
       / \
      2   3
     / \
    4   5
```

Write the output of:
1. Inorder traversal
2. Preorder traversal
3. Postorder traversal

**Answers:**
1. **Inorder (L-Root-R):** 4 2 5 1 3
2. **Preorder (Root-L-R):** 1 2 4 5 3
3. **Postorder (L-R-Root):** 4 5 2 3 1

</details>

<details>
<summary>🧩 Practice 2 — BST Insertion</summary>

**Problem:** Insert the values [50, 30, 70, 20, 40, 60, 80] into an empty BST (in that order). Draw the resulting tree and write the inorder traversal.

**Answer:**

```
          50
         /  \
        30   70
       / \   / \
      20  40 60  80
```

**Inorder:** 20 30 40 50 60 70 80 ← sorted order!

</details>

<details>
<summary>🧩 Practice 3 — Evaluate Expression Tree</summary>

**Problem:** Build and evaluate the expression tree for `((7−3)×(2+5))`:

```python
# Build the tree
root = ExprNode('*')
root.left        = ExprNode('-')
root.left.left   = ExprNode('7')
root.left.right  = ExprNode('3')
root.right       = ExprNode('+')
root.right.left  = ExprNode('2')
root.right.right = ExprNode('5')

print("((7-3)*(2+5)) =", evaluate(root))
```

**Output:** `((7-3)*(2+5)) = 28`

**Step trace:**
- Left subtree: 7 − 3 = 4
- Right subtree: 2 + 5 = 7
- Root: 4 × 7 = **28**

</details>
