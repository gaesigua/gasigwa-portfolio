# 13. Data Abstraction

## What is Abstraction?

**Abstraction** is the process of hiding complex implementation details and exposing only the essential, relevant features of an object or system. It allows programmers to work at a higher level of thinking without worrying about low-level implementation.

<div class="cp-definition">

#### Real-World Analogies of Abstraction

| Real World | Abstraction | Hidden Details |
|-----------|-------------|----------------|
| Driving a car | Steering wheel, pedals | Engine combustion, gear ratios |
| Using an ATM | Insert card, press buttons | Database queries, network protocols |
| Calling `printf` | Format string + data | System calls, buffer management |
| Using `sqrt(x)` | Pass a number, get the root | Newton-Raphson iteration algorithm |

</div>

<div class="cp-tip">

💡 Abstraction lets you focus on **what** a component does, not **how** it does it.

</div>

---

## Abstract Data Types (ADTs)

An **Abstract Data Type (ADT)** defines a data type by:
1. **What data it stores** (the values)
2. **What operations it supports** (the interface)

...without specifying the implementation.

<div class="cp-definition">

#### Common ADTs

| ADT | Operations | Possible Implementations |
|-----|-----------|--------------------------|
| **Stack** | push, pop, peek, isEmpty | Array or Linked List |
| **Queue** | enqueue, dequeue, front, isEmpty | Array or Linked List |
| **Set** | insert, delete, contains, union, intersection | Hash Table or BST |
| **List** | insert, delete, get(i), size | Array or Linked List |
| **Map/Dictionary** | put(key,val), get(key), remove(key) | Hash Table or BST |

</div>

---

## Implementing the Stack ADT in C

The **stack** is a Last-In, First-Out (LIFO) data structure. No matter how it's implemented internally, the user only needs to know: push, pop, peek, isEmpty.

```c
#include <stdio.h>
#define MAX 100

/* --- Stack ADT: the "what" --- */
typedef struct {
    int data[MAX];
    int top;
} Stack;

/* --- Stack Operations (the interface) --- */

void initStack(Stack *s) {
    s->top = -1;
}

int isEmpty(Stack *s) {
    return s->top == -1;
}

int isFull(Stack *s) {
    return s->top == MAX - 1;
}

void push(Stack *s, int value) {
    if (isFull(s)) {
        printf("Stack overflow!\n");
        return;
    }
    s->data[++(s->top)] = value;
}

int pop(Stack *s) {
    if (isEmpty(s)) {
        printf("Stack underflow!\n");
        return -1;
    }
    return s->data[(s->top)--];
}

int peek(Stack *s) {
    if (isEmpty(s)) {
        printf("Stack is empty!\n");
        return -1;
    }
    return s->data[s->top];
}

/* --- Usage (the "what", not the "how") --- */
int main() {
    Stack s;
    initStack(&s);

    push(&s, 10);
    push(&s, 20);
    push(&s, 30);

    printf("Top: %d\n", peek(&s));    /* 30 */
    printf("Pop: %d\n", pop(&s));     /* 30 */
    printf("Pop: %d\n", pop(&s));     /* 20 */
    printf("Top: %d\n", peek(&s));    /* 10 */

    return 0;
}
```

**The user of this stack does NOT need to know:**
- That `data[]` is the underlying array
- That `top` tracks the last element
- How push/pop manipulate the array index

This is abstraction in action!

---

## Application: Using Stack to Check Balanced Brackets

```c
#include <stdio.h>
#include <string.h>
#define MAX 200

/* (Reuse Stack from above) */
typedef struct { char data[MAX]; int top; } CharStack;

void charInit(CharStack *s) { s->top = -1; }
int charIsEmpty(CharStack *s) { return s->top == -1; }
void charPush(CharStack *s, char c) { s->data[++(s->top)] = c; }
char charPop(CharStack *s) { return s->data[(s->top)--]; }

int isBalanced(const char *expr) {
    CharStack s;
    charInit(&s);
    int i, len = strlen(expr);

    for (i = 0; i < len; i++) {
        char c = expr[i];
        if (c == '(' || c == '[' || c == '{')
            charPush(&s, c);
        else if (c == ')' || c == ']' || c == '}') {
            if (charIsEmpty(&s)) return 0;
            char top = charPop(&s);
            if ((c == ')' && top != '(') ||
                (c == ']' && top != '[') ||
                (c == '}' && top != '{'))
                return 0;
        }
    }
    return charIsEmpty(&s);
}

int main() {
    printf("{[()]} -> %s\n", isBalanced("{[()]}") ? "Balanced" : "Unbalanced");
    printf("{(})  -> %s\n", isBalanced("{(]}")   ? "Balanced" : "Unbalanced");
    printf("((()  -> %s\n", isBalanced("((()") ? "Balanced" : "Unbalanced");
    return 0;
}
```

---

## Encapsulation and Information Hiding

**Encapsulation** bundles data and the functions that operate on it into a single unit. **Information hiding** restricts access to internal details, exposing only a clean interface.

In C, this is achieved through:
- Keeping internal data inside a `struct`
- Only providing specific functions to manipulate that struct
- Placing the implementation in a separate `.c` file with a `.h` header

```c
/* counter.h — the PUBLIC interface */
typedef struct Counter Counter;
Counter* counterCreate(int initial);
void     counterIncrement(Counter *c);
void     counterDecrement(Counter *c);
int      counterGet(Counter *c);
void     counterFree(Counter *c);

/* counter.c — the PRIVATE implementation */
#include <stdlib.h>
struct Counter { int value; };  /* hidden from users */

Counter* counterCreate(int initial) {
    Counter *c = malloc(sizeof(Counter));
    c->value = initial;
    return c;
}
void counterIncrement(Counter *c) { c->value++; }
void counterDecrement(Counter *c) { c->value--; }
int  counterGet(Counter *c)       { return c->value; }
void counterFree(Counter *c)      { free(c); }
```

---

## Practice Problems

<details>
<summary>🧩 Practice 1 — ADT Design</summary>

**Problem:** Define the ADT for a "Queue" — list the operations and their purpose.

**Answer:**

| Operation | Description |
|-----------|-------------|
| `initQueue(q)` | Initialize the queue to empty state |
| `enqueue(q, val)` | Add `val` to the rear of the queue |
| `dequeue(q)` | Remove and return the front element |
| `front(q)` | Return the front element without removing it |
| `isEmpty(q)` | Return true if the queue has no elements |
| `isFull(q)` | Return true if the queue has reached capacity |
| `size(q)` | Return the number of elements in the queue |

</details>

<details>
<summary>🧩 Practice 2 — Implement a Queue</summary>

**Problem:** Implement a Queue ADT using an array in C (FIFO — First In, First Out).

```c
#include <stdio.h>
#define MAX 5

typedef struct {
    int data[MAX];
    int front, rear, count;
} Queue;

void initQueue(Queue *q) { q->front = q->rear = q->count = 0; }
int qIsEmpty(Queue *q)   { return q->count == 0; }
int qIsFull(Queue *q)    { return q->count == MAX; }

void enqueue(Queue *q, int val) {
    if (qIsFull(q)) { printf("Queue full!\n"); return; }
    q->data[q->rear] = val;
    q->rear = (q->rear + 1) % MAX;
    q->count++;
}

int dequeue(Queue *q) {
    if (qIsEmpty(q)) { printf("Queue empty!\n"); return -1; }
    int val = q->data[q->front];
    q->front = (q->front + 1) % MAX;
    q->count--;
    return val;
}

int main() {
    Queue q;
    initQueue(&q);

    enqueue(&q, 10);
    enqueue(&q, 20);
    enqueue(&q, 30);

    printf("%d\n", dequeue(&q));  /* 10 — FIFO */
    printf("%d\n", dequeue(&q));  /* 20 */

    enqueue(&q, 40);
    printf("%d\n", dequeue(&q));  /* 30 */

    return 0;
}
```

</details>

<details>
<summary>🧩 Practice 3 — Abstraction Analysis</summary>

**Question:** Explain how the C `printf` function demonstrates abstraction.

**Answer:**

When you call `printf("Score: %d\n", score)`, you only need to know:
- What it does: formats and prints text to the screen
- The format string syntax
- What arguments to provide

You do NOT need to know:
- How `printf` internally builds the output string
- How it calls the operating system to write to the terminal
- How it handles format specifier parsing
- What system calls (like `write()`) it uses internally

This is abstraction — a complex, multi-layered operation is presented through a simple, clean interface.

</details>
