# 15. Lists

## Definition

A **list** (or **linked list**) is an ordered collection of elements where each element is connected to the next through **pointers**. Unlike arrays, linked lists do not require contiguous memory — nodes can be scattered anywhere in the heap and are linked together logically.

<div class="cp-definition">

**Key Idea:** Each element in a linked list is a **node** containing:

| Field | Purpose |
|-------|---------|
| `data` | The actual stored value |
| `next` | Pointer to the next node |
| `prev` *(doubly)* | Pointer to the previous node |

</div>

---

## Types of Linked Lists

### 15.1.1 Singly Linked List (SLL)

Each node has a pointer to the **next node only**.

```
[Data|Next] → [Data|Next] → [Data|Next] → NULL
    10             20             30
```

✅ Simple, efficient insert/delete at front  
⚠️ Cannot traverse backward; must start from head

---

### 15.1.2 Doubly Linked List (DLL)

Each node has pointers to both the **next** and **previous** nodes.

```
NULL ← [Prev|Data|Next] ↔ [Prev|Data|Next] ↔ [Prev|Data|Next] → NULL
            10                  20                  30
```

✅ Bidirectional traversal, easier node deletion  
⚠️ Extra memory for `prev` pointer

---

### 15.1.3 Circular Linked List (CLL)

The **last node** points back to the **head**, forming a circle.

```
[Data|Next] → [Data|Next] → [Data|Next] ↗
    10             20             30       (points back to 10)
```

✅ Traverse entire list from any node; useful for round-robin  
⚠️ Risk of infinite loop if not handled carefully

---

## Operations on Lists

| Operation | Description |
|-----------|-------------|
| **Insert at beginning** | New node becomes the head |
| **Insert at end** | New node becomes the last node |
| **Insert at position** | New node inserted after a given node |
| **Delete from beginning** | Head removed; next node becomes head |
| **Delete from end** | Last node freed |
| **Delete by value** | Find node with value; bypass and free it |
| **Traversal** | Visit each node from head to tail (or circular) |
| **Search** | Find a node with a given value |

---

## Programming Examples

### Example 1: Singly Linked List — Insertion and Traversal (C)

```c
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

/* Insert at beginning */
struct Node* insertAtBeginning(struct Node* head, int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->next = head;
    return newNode;          /* new node is now the head */
}

/* Traverse and print */
void traverse(struct Node* head) {
    struct Node* current = head;
    while (current != NULL) {
        printf("%d -> ", current->data);
        current = current->next;
    }
    printf("NULL\n");
}

int main() {
    struct Node* head = NULL;

    head = insertAtBeginning(head, 10);
    head = insertAtBeginning(head, 20);
    head = insertAtBeginning(head, 30);

    printf("Singly Linked List: ");
    traverse(head);   /* 30 -> 20 -> 10 -> NULL */
    return 0;
}
```

**Step-by-step:**
1. Define node structure with `data` and `next`
2. Dynamically allocate memory with `malloc()`
3. New node's `next` = old head
4. Head pointer updated to new node

---

### Example 2: Doubly Linked List — Insertion at End (Python)

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.prev = None
        self.next = None

class DoublyLinkedList:
    def __init__(self):
        self.head = None

    def insert_end(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        current = self.head
        while current.next:
            current = current.next
        current.next   = new_node
        new_node.prev  = current

    def traverse(self):
        current = self.head
        while current:
            print(current.data, end=" <-> ")
            current = current.next
        print("None")

dll = DoublyLinkedList()
dll.insert_end(10)
dll.insert_end(20)
dll.insert_end(30)
dll.traverse()   # 10 <-> 20 <-> 30 <-> None
```

**C variant — Doubly Linked List:**

```c
struct DNode {
    int data;
    struct DNode* prev;
    struct DNode* next;
};

void insertEndDLL(struct DNode** head, int data) {
    struct DNode* newNode = (struct DNode*)malloc(sizeof(struct DNode));
    newNode->data = data;
    newNode->next = NULL;
    newNode->prev = NULL;

    if (*head == NULL) {
        *head = newNode;
        return;
    }

    struct DNode* current = *head;
    while (current->next != NULL)
        current = current->next;

    current->next  = newNode;
    newNode->prev  = current;
}

void traverseDLL(struct DNode* head) {
    while (head != NULL) {
        printf("%d <-> ", head->data);
        head = head->next;
    }
    printf("NULL\n");
}
```

---

### Example 3: Circular Linked List — Traversal (C)

```c
#include <stdio.h>
#include <stdlib.h>

struct CNode {
    int data;
    struct CNode* next;
};

void traverseCircular(struct CNode* head) {
    if (!head) return;
    struct CNode* current = head;
    do {
        printf("%d -> ", current->data);
        current = current->next;
    } while (current != head);   /* stop when we circle back */
    printf("(back to head)\n");
}

int main() {
    /* Create 3 nodes manually */
    struct CNode* head   = (struct CNode*)malloc(sizeof(struct CNode));
    struct CNode* second = (struct CNode*)malloc(sizeof(struct CNode));
    struct CNode* third  = (struct CNode*)malloc(sizeof(struct CNode));

    head->data   = 1;  head->next   = second;
    second->data = 2;  second->next = third;
    third->data  = 3;  third->next  = head;   /* circular! */

    printf("Circular Linked List: ");
    traverseCircular(head);   /* 1 -> 2 -> 3 -> (back to head) */
    return 0;
}
```

---

### Example 4: Deletion from a Singly Linked List (Python)

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def insert_end(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        current = self.head
        while current.next:
            current = current.next
        current.next = new_node

    def delete_value(self, key):
        current = self.head

        # Case 1: Delete head node
        if current and current.data == key:
            self.head = current.next
            return

        # Case 2: Find node to delete
        prev = None
        while current and current.data != key:
            prev = current
            current = current.next

        if current:
            prev.next = current.next   # bypass the node

    def traverse(self):
        current = self.head
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")

ll = LinkedList()
ll.insert_end(10)
ll.insert_end(20)
ll.insert_end(30)
ll.traverse()          # 10 -> 20 -> 30 -> None
ll.delete_value(20)
ll.traverse()          # 10 -> 30 -> None
```

---

### Example 5: Insert at a Specific Position (C)

```c
struct Node* insertAtPosition(struct Node* head, int data, int pos) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;

    /* Insert at beginning */
    if (pos == 1) {
        newNode->next = head;
        return newNode;
    }

    /* Navigate to node just before position */
    struct Node* current = head;
    int i;
    for (i = 1; i < pos - 1 && current != NULL; i++)
        current = current->next;

    if (current == NULL) return head;  /* position out of range */

    newNode->next  = current->next;
    current->next  = newNode;
    return head;
}

int main() {
    /* Build list: 10 -> 20 -> NULL */
    struct Node* head = NULL;
    head = insertAtBeginning(head, 20);
    head = insertAtBeginning(head, 10);

    /* Insert 15 at position 2 */
    head = insertAtPosition(head, 15, 2);
    traverse(head);   /* 10 -> 15 -> 20 -> NULL */
    return 0;
}
```

---

## Comparison: SLL, DLL, CLL

| Feature | Singly | Doubly | Circular |
|---------|--------|--------|----------|
| **Memory per node** | 1 pointer | 2 pointers | 1 pointer |
| **Traversal direction** | Forward only | Both directions | Full circle |
| **Insert at end** | O(n) without tail | O(1) with tail | O(n) or O(1) |
| **Delete any node** | O(n) | O(1) with node ref | O(n) |
| **Use case** | Stacks, simple lists | Deques, browser history | Round-robin scheduling |

---

## Practice Problems

<details>
<summary>🧩 Practice 1 — Delete the Head</summary>

**Problem:** Write a C function that deletes the head node of a singly linked list.

```c
struct Node* deleteHead(struct Node* head) {
    if (head == NULL) {
        printf("List is empty!\n");
        return NULL;
    }
    struct Node* temp = head;
    head = head->next;  /* move head to next node */
    free(temp);         /* free old head memory */
    return head;
}

/* Usage:
   head = insertAtBeginning(head, 10);
   head = insertAtBeginning(head, 20);
   head = deleteHead(head);   // 10 -> NULL
*/
```

</details>

<details>
<summary>🧩 Practice 2 — Reverse a Linked List</summary>

**Problem:** Write a C function that reverses a singly linked list in-place.

```c
struct Node* reverseList(struct Node* head) {
    struct Node *prev = NULL, *current = head, *next = NULL;

    while (current != NULL) {
        next          = current->next;  /* save next */
        current->next = prev;           /* reverse link */
        prev          = current;        /* move prev forward */
        current       = next;           /* move current forward */
    }

    return prev;   /* prev is now the new head */
}

/* Before: 1 -> 2 -> 3 -> 4 -> NULL
   After:  4 -> 3 -> 2 -> 1 -> NULL */
```

**Trace:**
```
Initially: prev=NULL, current=1
Step 1: next=2, 1→NULL, prev=1, current=2
Step 2: next=3, 2→1, prev=2, current=3
Step 3: next=4, 3→2, prev=3, current=4
Step 4: next=NULL, 4→3, prev=4, current=NULL
Return: prev=4 (new head)
```

</details>

<details>
<summary>🧩 Practice 3 — Circular List Application</summary>

**Question:** Explain how a circular linked list is used in Round-Robin CPU scheduling.

**Answer:**

In Round-Robin scheduling, each process gets a fixed time slice (quantum). After its slice, it goes to the end of the queue; if not finished, it gets another turn later.

A circular linked list models this perfectly:
- Each node = one process (with PID, remaining time)
- The scheduler starts at `head` (current process)
- Executes for one quantum
- Moves head to `head->next` (circular — wraps from last to first)
- Repeats until all processes complete

```c
/* Round-robin traverse */
struct Process *current = head;
do {
    execute_one_quantum(current);
    current = current->next;
} while (processes_remaining > 0);
```

The circular nature means no special case for "going past the end" — the last process automatically links back to the first, perfectly modeling the cyclic scheduling behavior.

</details>
