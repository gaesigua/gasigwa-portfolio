# 14. Queues

## Definition

A **queue** is a linear data structure that follows the **First-In, First-Out (FIFO)** principle:

> The first element added is the first element removed.

**Analogy:** A queue of people at a ticket counter — the first person to join the line is the first to be served.

<div class="cp-definition">

#### Characteristics

| Property | Explanation |
|----------|-------------|
| **Insertion** | At the **rear** (back) end |
| **Deletion** | From the **front** end |
| **Access** | Only front and rear — no random access |
| **Order** | Strict FIFO |

</div>

---

## Queue Operations

| Operation | Description |
|-----------|-------------|
| **Enqueue** | Add element at the rear |
| **Dequeue** | Remove element from the front |
| **Front** | View front element without removing it |
| **isEmpty** | Check if queue has no elements |
| **isFull** | Check if fixed-size queue is at capacity |

---

## Types of Queues

### A. Linear Queue

Simple FIFO queue. **Limitation:** After many dequeues, space at the front is wasted even if the queue looks empty.

### B. Circular Queue

Front wraps around using modulo arithmetic. **Solves** the wasted space problem of linear queues.

### C. Priority Queue

Each element has a **priority**. Elements with higher priority are dequeued first, regardless of insertion order.

---

## Applications of Queues

| Application | Description |
|-------------|-------------|
| **CPU scheduling** | Round Robin / FCFS — processes wait in a queue |
| **Print queue** | Print jobs processed in order received |
| **Network buffers** | Packets queued when bandwidth is limited |
| **BFS graph traversal** | Breadth-First Search uses a queue |
| **Simulation systems** | Bank/hospital customer service modeling |

---

## Queue Implementation in C (Array-Based)

```c
#include <stdio.h>
#include <stdlib.h>

#define MAX_SIZE 100

typedef struct {
    int items[MAX_SIZE];
    int front;
    int rear;
    int size;
} Queue;

void initQueue(Queue *q) {
    q->front = 0;
    q->rear  = -1;
    q->size  = 0;
}

int isEmptyQ(Queue *q) { return q->size == 0; }
int isFullQ(Queue *q)  { return q->size == MAX_SIZE; }

void enqueue(Queue *q, int value) {
    if (isFullQ(q)) {
        printf("Queue is Full!\n");
        return;
    }
    q->rear = (q->rear + 1) % MAX_SIZE;   /* circular indexing */
    q->items[q->rear] = value;
    q->size++;
    printf("Enqueued: %d\n", value);
}

int dequeue(Queue *q) {
    if (isEmptyQ(q)) {
        printf("Queue is Empty!\n");
        return -1;
    }
    int val = q->items[q->front];
    q->front = (q->front + 1) % MAX_SIZE;
    q->size--;
    return val;
}

int frontElement(Queue *q) {
    if (isEmptyQ(q)) return -1;
    return q->items[q->front];
}
```

---

## Programming Examples

### Example 1: Linear Queue (Python)

```python
# Step 1: Initialize queue
queue = []

# Step 2: Enqueue elements
queue.append(10)   # Add 10 at rear
queue.append(20)   # Add 20
queue.append(30)   # Add 30
print("Queue after enqueues:", queue)   # [10, 20, 30]

# Step 3: Dequeue (FIFO — remove front)
dequeued = queue.pop(0)
print("Dequeued:", dequeued)            # 10
print("Queue after dequeue:", queue)   # [20, 30]
```

**C variant — basic enqueue/dequeue:**

```c
int main() {
    Queue q;
    initQueue(&q);

    enqueue(&q, 10);    /* Enqueued: 10 */
    enqueue(&q, 20);    /* Enqueued: 20 */
    enqueue(&q, 30);    /* Enqueued: 30 */

    printf("Front: %d\n",     frontElement(&q));          /* 10 */
    printf("Dequeued: %d\n",  dequeue(&q));               /* 10 */
    printf("Dequeued: %d\n",  dequeue(&q));               /* 20 */
    printf("Front now: %d\n", frontElement(&q));           /* 30 */
    return 0;
}
```

---

### Example 2: Circular Queue (Python)

```python
size = 5
queue = [None] * size
front = -1
rear  = -1

def enqueue(item):
    global front, rear
    if (rear + 1) % size == front:
        print("Queue is Full")
        return
    if front == -1:
        front = 0
    rear = (rear + 1) % size
    queue[rear] = item
    print(f"Enqueued: {item}")

def dequeue():
    global front, rear
    if front == -1:
        print("Queue is Empty")
        return None
    item = queue[front]
    if front == rear:
        front = rear = -1    # queue becomes empty
    else:
        front = (front + 1) % size
    return item

enqueue(10)
enqueue(20)
enqueue(30)
print("Dequeued:", dequeue())   # 10
enqueue(40)
print("Queue:", queue)
```

---

### Example 3: Priority Queue (Python using heapq)

```python
import heapq

priority_queue = []

# Enqueue elements: (priority, value)
heapq.heappush(priority_queue, (3, "Low priority task"))
heapq.heappush(priority_queue, (1, "High priority task"))
heapq.heappush(priority_queue, (2, "Medium priority task"))

# Dequeue — smallest priority number = highest priority
while priority_queue:
    priority, task = heapq.heappop(priority_queue)
    print(f"Processing ({priority}): {task}")
```

**Output:**
```
Processing (1): High priority task
Processing (2): Medium priority task
Processing (3): Low priority task
```

---

### Example 4: Queue using collections.deque (Python) — O(1) Operations

```python
from collections import deque

queue = deque()

# Enqueue
queue.append(1)
queue.append(2)
queue.append(3)
print("Queue:", queue)        # deque([1, 2, 3])

# Dequeue (O(1) — unlike list.pop(0) which is O(n))
print("Dequeued:", queue.popleft())    # 1
print("Queue:", queue)                 # deque([2, 3])
```

<div class="cp-note">

**Note:** Prefer `collections.deque` for production Python queues — `popleft()` is O(1), while `list.pop(0)` is O(n) since it shifts all elements.

</div>

---

### Example 5: Print Job Queue Simulation (Python)

```python
class PrintQueue:
    def __init__(self):
        self.queue = []

    def add_job(self, job_name):
        self.queue.append(job_name)
        print(f"Added job: {job_name}")

    def print_next(self):
        if self.queue:
            job = self.queue.pop(0)   # FIFO
            print(f"Printing: {job}")
        else:
            print("No jobs in queue")

pq = PrintQueue()
pq.add_job("Report.pdf")
pq.add_job("Invoice.xlsx")
pq.add_job("Photo.png")

pq.print_next()   # Printing: Report.pdf (first in)
pq.print_next()   # Printing: Invoice.xlsx
pq.print_next()   # Printing: Photo.png
pq.print_next()   # No jobs in queue
```

**C variant — Print Queue:**

```c
#include <stdio.h>
#include <string.h>

#define MAX_JOBS 10
#define MAX_NAME 50

char printJobs[MAX_JOBS][MAX_NAME];
int jobFront = 0, jobRear = 0;

void addJob(const char *name) {
    if (jobRear < MAX_JOBS) {
        strcpy(printJobs[jobRear++], name);
        printf("Added: %s\n", name);
    }
}

void processJob() {
    if (jobFront >= jobRear) {
        printf("No jobs.\n");
    } else {
        printf("Printing: %s\n", printJobs[jobFront++]);
    }
}

int main() {
    addJob("Report.pdf");
    addJob("Invoice.xlsx");
    processJob();   /* Printing: Report.pdf */
    processJob();   /* Printing: Invoice.xlsx */
    processJob();   /* No jobs. */
    return 0;
}
```

---

## Stacks vs Queues

| Feature | Stack (LIFO) | Queue (FIFO) |
|---------|-------------|-------------|
| **Insertion** | Top | Rear |
| **Deletion** | Top | Front |
| **Order** | Last in, first out | First in, first out |
| **Use case** | Function calls, undo | Scheduling, BFS |

---

## Practice Problems

<details>
<summary>🧩 Practice 1 — Trace the Queue</summary>

**Problem:** Trace this sequence of operations on an empty queue: Enqueue(5), Enqueue(10), Dequeue(), Enqueue(15), Front(), Dequeue()

| Operation | Queue State | Return |
|-----------|-------------|--------|
| Enqueue(5) | [5] | — |
| Enqueue(10) | [5, 10] | — |
| Dequeue() | [10] | 5 |
| Enqueue(15) | [10, 15] | — |
| Front() | [10, 15] | 10 |
| Dequeue() | [15] | 10 |

</details>

<details>
<summary>🧩 Practice 2 — Circular Queue Advantage</summary>

**Question:** Show how a circular queue solves the wasted space problem of a linear queue.

**Answer:**

In a linear queue of size 5, after 5 enqueues and 3 dequeues:
```
front=3, rear=4 → indices 0,1,2 are "wasted" (dequeued)
Only 2 elements remain but 3 slots look "used"
Cannot enqueue even though space exists!
```

In a circular queue:
```
rear = (rear + 1) % size
After rear reaches index 4, next enqueue wraps to index 0
Indices 0,1,2 are reused!
```

The modulo operation (`%`) allows the pointers to wrap around, reusing freed positions at the front.

</details>

<details>
<summary>🧩 Practice 3 — BFS Using a Queue</summary>

**Question:** Explain how a queue is used in Breadth-First Search (BFS) of a graph.

```python
from collections import deque

def bfs(graph, start):
    visited = set()
    queue = deque([start])
    visited.add(start)
    result = []

    while queue:
        node = queue.popleft()          # dequeue front node
        result.append(node)

        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)  # enqueue unvisited neighbors

    return result

# Example graph (adjacency list)
graph = {
    0: [1, 2],
    1: [0, 3],
    2: [0, 4],
    3: [1],
    4: [2]
}

print("BFS from 0:", bfs(graph, 0))   # [0, 1, 2, 3, 4]
```

**Why a queue?** BFS visits nodes **level by level**. The FIFO property ensures nodes at the current level are processed before any nodes at the next level — a property stacks cannot guarantee.

</details>
