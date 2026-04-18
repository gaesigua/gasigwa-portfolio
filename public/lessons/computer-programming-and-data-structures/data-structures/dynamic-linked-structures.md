# 1. Dynamic Linked Structures

## Definition

**Dynamic linked structures** are data structures whose size can change during program execution. Their elements — called **nodes** — are connected using pointers or references rather than being stored at contiguous memory addresses.

Unlike arrays (which have a fixed size allocated before the program runs), dynamic linked structures allocate and free memory at runtime, linking nodes together through pointer fields.

<div class="cp-definition">

#### What a Node Contains

Each node in a dynamic linked structure typically holds:

| Field | Purpose |
|-------|---------|
| **Data field** | Stores the actual value (int, float, struct, etc.) |
| **Link field (pointer)** | Stores the memory address of the next (or previous) node |

</div>

---

## Characteristics

<div class="cp-definition">

### i. Dynamic Memory Allocation

Memory for each node is allocated at runtime using `malloc()` in C (or `new` in C++). Nodes are freed using `free()` when no longer needed.

### ii. No Fixed Size Limitation

Unlike arrays, the structure can grow to hold any number of elements (limited only by available RAM) or shrink to zero.

### iii. Non-Contiguous Memory Storage

Nodes can be located anywhere in the heap. They are linked logically via pointers, not physically adjacent in memory.

### iv. Efficient Insertion and Deletion

Elements can be added or removed at any position by simply updating pointer fields — no need to shift other elements.

</div>

---

## Examples of Dynamic Linked Structures

<div class="cp-definition">

**A. Linked Lists**
- Singly linked list
- Doubly linked list
- Circular linked list

**B. Trees**
- Binary trees
- Binary Search Trees (BST)
- AVL trees

**C. Graphs**
- Directed graphs
- Undirected graphs
- Weighted graphs

</div>

---

## Advantages vs Disadvantages

<div class="cp-comparison">
<div class="cp-comparison-left">
<h5>✅ Advantages</h5>

- **Better memory utilization** — only allocated when needed
- **Flexible size** — no need to declare size in advance
- **Efficient insertion/deletion** — O(1) at known position vs O(n) for arrays
</div>
<div class="cp-comparison-right">
<h5>⚠️ Disadvantages</h5>

- **Extra memory overhead** — each node needs a pointer field
- **More complex code** — pointer manipulation is error-prone
- **Slower access** — no direct indexing; O(n) traversal to reach element n
</div>
</div>

---

## Programming Examples in C

### Example 1: Creating a Singly Linked List Node

```c
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;  /* pointer to next node */
};

int main() {
    struct Node* node1;

    /* Step 1: Allocate memory for the node */
    node1 = (struct Node*)malloc(sizeof(struct Node));

    /* Step 2: Assign data */
    node1->data = 10;

    /* Step 3: Set next pointer to NULL (no next node yet) */
    node1->next = NULL;

    printf("Node Data: %d\n", node1->data);

    free(node1);  /* always free dynamically allocated memory */
    return 0;
}
```

**Output:**
```
Node Data: 10
```

---

### Example 2: Insert at the Beginning of a Linked List

```c
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

/* Insert a new node at the beginning (updates head pointer) */
void insertAtBeginning(struct Node** head, int value) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data  = value;
    newNode->next  = *head;   /* new node points to current head */
    *head          = newNode; /* head now points to new node */
}
```

**Step-by-step:**
1. Allocate memory for new node
2. Store the value
3. Set new node's `next` to the current head
4. Update head to point to the new node

---

### Example 3: Traversing a Singly Linked List

```c
void traverseList(struct Node* head) {
    while (head != NULL) {
        printf("%d -> ", head->data);
        head = head->next;  /* move to next node */
    }
    printf("NULL\n");
}
```

---

### Example 4: Deleting a Node

```c
void deleteNode(struct Node** head, int key) {
    struct Node *temp = *head, *prev = NULL;

    /* Case: node to delete is the head */
    if (temp != NULL && temp->data == key) {
        *head = temp->next;
        free(temp);
        return;
    }

    /* Find the node with key, track previous */
    while (temp != NULL && temp->data != key) {
        prev = temp;
        temp = temp->next;
    }

    if (temp == NULL) return;  /* key not found */

    prev->next = temp->next;   /* bypass the node */
    free(temp);                /* release memory */
}
```

---

### Example 5: Complete Program — Build and Display a List

```c
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

void insert(struct Node** head, int value) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;
    newNode->next = *head;
    *head = newNode;
}

void traverse(struct Node* head) {
    while (head != NULL) {
        printf("%d -> ", head->data);
        head = head->next;
    }
    printf("NULL\n");
}

void freeList(struct Node* head) {
    struct Node* temp;
    while (head != NULL) {
        temp = head;
        head = head->next;
        free(temp);
    }
}

int main() {
    struct Node* head = NULL;

    insert(&head, 10);
    insert(&head, 20);
    insert(&head, 30);

    printf("Linked List: ");
    traverse(head);  /* 30 -> 20 -> 10 -> NULL */

    freeList(head);
    return 0;
}
```

**Output:**
```
Linked List: 30 -> 20 -> 10 -> NULL
```

---

## Arrays vs Linked Lists

| Feature | Array | Linked List |
|---------|-------|-------------|
| Memory layout | Contiguous | Non-contiguous |
| Size | Fixed at allocation | Dynamic |
| Access time | O(1) — direct index | O(n) — sequential |
| Insertion/deletion | O(n) — must shift | O(1) — update pointer |
| Memory overhead | None (just data) | Extra pointer per node |

---

## Practice Problems

<details>
<summary>🧩 Practice 1 — Build a Linked List</summary>

**Problem:** Write a complete C program that builds a linked list with 4 nodes (values 5, 10, 15, 20) by inserting at the end, then traverses and prints the list.

```c
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

void insertAtEnd(struct Node** head, int value) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;
    newNode->next = NULL;

    if (*head == NULL) {
        *head = newNode;
        return;
    }

    struct Node* temp = *head;
    while (temp->next != NULL)
        temp = temp->next;
    temp->next = newNode;
}

void traverse(struct Node* head) {
    while (head != NULL) {
        printf("%d -> ", head->data);
        head = head->next;
    }
    printf("NULL\n");
}

int main() {
    struct Node* head = NULL;
    insertAtEnd(&head, 5);
    insertAtEnd(&head, 10);
    insertAtEnd(&head, 15);
    insertAtEnd(&head, 20);

    printf("List: ");
    traverse(head);  /* 5 -> 10 -> 15 -> 20 -> NULL */
    return 0;
}
```

</details>

<details>
<summary>🧩 Practice 2 — Count Nodes</summary>

**Problem:** Write a C function `countNodes(head)` that returns the number of nodes in a linked list.

```c
int countNodes(struct Node* head) {
    int count = 0;
    while (head != NULL) {
        count++;
        head = head->next;
    }
    return count;
}

/* Usage: printf("Nodes: %d\n", countNodes(head)); */
```

</details>

<details>
<summary>🧩 Practice 3 — Conceptual Question</summary>

**Question:** Why can't you use `arr[5]` to access the 6th element of a singly linked list directly?

**Answer:** A singly linked list stores nodes in non-contiguous memory locations. There is no mathematical formula to compute the address of the 6th node from the address of the head. You must start at the head and follow the `next` pointer 5 times — O(n) traversal. This is unlike arrays, where element i is at address `base + i * element_size`, enabling O(1) direct access.

</details>
