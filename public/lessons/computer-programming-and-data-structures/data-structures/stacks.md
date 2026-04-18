# 13. Stacks

## Definition

A **stack** is a linear data structure that follows the **Last-In, First-Out (LIFO)** principle:

> The last element added to the stack is the first one removed.

**Analogy:** A stack of plates — you always add and remove from the top. The last plate placed is the first one taken.

---

## Stack Operations

<div class="cp-definition">

| Operation | Description |
|-----------|-------------|
| **Push** | Add a new element to the top |
| **Pop** | Remove and return the top element |
| **Peek / Top** | Return the top element without removing it |
| **isEmpty** | Check if the stack has no elements |
| **isFull** | Check if a fixed-size stack is full (array implementation) |

</div>

---

## Applications of Stacks

| Application | How Stacks Are Used |
|-------------|-------------------|
| **Function call stack** | Each call is pushed; return pops it |
| **Expression evaluation** | Convert/evaluate infix to postfix expressions |
| **Undo operations** | Text editors store actions on a stack |
| **Backtracking** | Maze solving, depth-first search |
| **Syntax parsing** | Compilers check balanced brackets |
| **Browser history** | Back button pops previous page |

---

## Stack Implementation in C (Array-Based)

```c
#include <stdio.h>
#include <stdlib.h>

#define MAX_SIZE 100

typedef struct {
    int items[MAX_SIZE];
    int top;
} Stack;

/* Initialize the stack */
void initStack(Stack *s) {
    s->top = -1;
}

/* Check if stack is empty */
int isEmpty(Stack *s) {
    return s->top == -1;
}

/* Check if stack is full */
int isFull(Stack *s) {
    return s->top == MAX_SIZE - 1;
}

/* Push element onto stack */
void push(Stack *s, int value) {
    if (isFull(s)) {
        printf("Stack Overflow!\n");
        return;
    }
    s->items[++(s->top)] = value;
    printf("Pushed: %d\n", value);
}

/* Pop element from stack */
int pop(Stack *s) {
    if (isEmpty(s)) {
        printf("Stack Underflow!\n");
        return -1;
    }
    return s->items[(s->top)--];
}

/* Peek at top element */
int peek(Stack *s) {
    if (isEmpty(s)) {
        printf("Stack is empty!\n");
        return -1;
    }
    return s->items[s->top];
}
```

---

## Programming Examples

### Example 1: Basic Push, Pop, Peek in C

```c
int main() {
    Stack s;
    initStack(&s);

    push(&s, 10);     /* Pushed: 10 */
    push(&s, 20);     /* Pushed: 20 */
    push(&s, 30);     /* Pushed: 30 */

    printf("Top element: %d\n", peek(&s));      /* 30 */
    printf("Popped: %d\n",     pop(&s));         /* 30 */
    printf("Top after pop: %d\n", peek(&s));     /* 20 */
    printf("Stack empty? %s\n", isEmpty(&s) ? "Yes" : "No");  /* No */

    return 0;
}
```

**Output:**
```
Pushed: 10
Pushed: 20
Pushed: 30
Top element: 30
Popped: 30
Top after pop: 20
Stack empty? No
```

---

### Example 2: Check Balanced Parentheses (Python)

```python
def is_balanced(expression):
    stack = []
    opening = "({["
    closing = ")}]"
    pairs  = {')': '(', '}': '{', ']': '['}

    for char in expression:
        if char in opening:
            stack.append(char)
        elif char in closing:
            if not stack:
                return False
            if stack[-1] != pairs[char]:
                return False
            stack.pop()

    return len(stack) == 0

# Tests
print(is_balanced("{[()()]}"))   # True
print(is_balanced("{[(])}"))     # False — mismatched
print(is_balanced("((()"))       # False — unclosed
```

**C variant:**

```c
#include <stdio.h>
#include <string.h>

int isBalanced(char *expr) {
    Stack s;
    initStack(&s);

    int i;
    for (i = 0; expr[i]; i++) {
        char ch = expr[i];
        if (ch == '(' || ch == '[' || ch == '{') {
            push(&s, (int)ch);
        } else if (ch == ')' || ch == ']' || ch == '}') {
            if (isEmpty(&s)) return 0;
            int top = pop(&s);
            if ((ch == ')' && top != '(') ||
                (ch == ']' && top != '[') ||
                (ch == '}' && top != '{'))
                return 0;
        }
    }
    return isEmpty(&s);
}

int main() {
    printf("Balanced: %s\n", isBalanced("{[()()]}") ? "Yes" : "No");  /* Yes */
    printf("Balanced: %s\n", isBalanced("(()")       ? "Yes" : "No");  /* No  */
    return 0;
}
```

---

### Example 3: Reverse a String (Python)

```python
def reverse_string(s):
    stack = []
    for char in s:
        stack.append(char)   # push each character

    reversed_str = ''
    while stack:
        reversed_str += stack.pop()   # pop in LIFO order = reverse

    return reversed_str

print(reverse_string("STACK"))   # KCATS
```

**C variant:**

```c
void reverseString(char *str) {
    Stack s;
    initStack(&s);
    int i;

    /* Push each character */
    for (i = 0; str[i]; i++)
        push(&s, (int)str[i]);

    /* Pop to reconstruct reversed string */
    i = 0;
    while (!isEmpty(&s))
        str[i++] = (char)pop(&s);
}

/* Usage:
   char word[] = "HELLO";
   reverseString(word);       → word = "OLLEH"
*/
```

---

### Example 4: Evaluate Postfix Expression (Python)

```python
def evaluate_postfix(expr):
    stack = []
    for char in expr.split():
        if char.lstrip('-').isdigit():
            stack.append(int(char))        # operand → push
        else:
            b = stack.pop()
            a = stack.pop()
            if   char == '+': stack.append(a + b)
            elif char == '-': stack.append(a - b)
            elif char == '*': stack.append(a * b)
            elif char == '/': stack.append(a // b)
    return stack[0]

# Postfix for: (2 + 3) * 1 - 9 = -4
print(evaluate_postfix("2 3 1 * + 9 -"))   # -4
```

---

### Example 5: Stack using Linked List in C (No Size Limit)

```c
#include <stdio.h>
#include <stdlib.h>

struct StackNode {
    int data;
    struct StackNode* next;
};

struct StackNode* createNode(int value) {
    struct StackNode* node = (struct StackNode*)malloc(sizeof(struct StackNode));
    node->data = value;
    node->next = NULL;
    return node;
}

void pushLL(struct StackNode **top, int value) {
    struct StackNode *newNode = createNode(value);
    newNode->next = *top;
    *top = newNode;
    printf("Pushed: %d\n", value);
}

int popLL(struct StackNode **top) {
    if (*top == NULL) { printf("Underflow\n"); return -1; }
    int val = (*top)->data;
    struct StackNode *temp = *top;
    *top = (*top)->next;
    free(temp);
    return val;
}

int main() {
    struct StackNode *top = NULL;

    pushLL(&top, 5);    /* Pushed: 5 */
    pushLL(&top, 15);   /* Pushed: 15 */
    pushLL(&top, 25);   /* Pushed: 25 */

    printf("Popped: %d\n", popLL(&top));   /* Popped: 25 */
    printf("Popped: %d\n", popLL(&top));   /* Popped: 15 */
    return 0;
}
```

---

## Practice Problems

<details>
<summary>🧩 Practice 1 — Trace the Stack</summary>

**Problem:** Trace the state of a stack through these operations: Push(1), Push(2), Push(3), Pop(), Push(4), Peek(), Pop(), Pop()

**Answer:**

| Operation | Stack State | Return Value |
|-----------|-------------|-------------|
| Push(1) | [1] | — |
| Push(2) | [1, 2] | — |
| Push(3) | [1, 2, 3] | — |
| Pop() | [1, 2] | 3 |
| Push(4) | [1, 2, 4] | — |
| Peek() | [1, 2, 4] | 4 |
| Pop() | [1, 2] | 4 |
| Pop() | [1] | 2 |

</details>

<details>
<summary>🧩 Practice 2 — Balanced Brackets</summary>

**Problem:** Is the expression `{[(a+b)*(c-d)]}` balanced? Trace the stack.

**Trace:**
```
Character  Stack
{          [{]
[          [{, []
(          [{, [, (]
a,+,b      [{, [, (]  (letters/operators ignored)
)          [{, []       ← pop (, matches )  ✅
*,          unchanged
(          [{, [, (]
c,-,d      [{, [, (]
)          [{, []       ← pop (, matches )  ✅
]          [{]          ← pop [, matches ]  ✅
}          []           ← pop {, matches }  ✅
```

**Final stack is empty → expression is BALANCED ✅**

</details>

<details>
<summary>🧩 Practice 3 — Implement a Stack-Based Calculator</summary>

**Problem:** Write a C function that evaluates the postfix expression `"5 3 + 2 *"` (= 16) using the array-based Stack.

```c
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

/* Assumes Stack and push/pop/initStack from earlier are available */

int evaluatePostfix(const char *expr) {
    Stack s;
    initStack(&s);

    char token[20];
    char expCopy[100];
    strcpy(expCopy, expr);

    char *tok = strtok(expCopy, " ");
    while (tok != NULL) {
        if (tok[0] >= '0' && tok[0] <= '9') {
            /* Operand — push it */
            push(&s, atoi(tok));
        } else {
            /* Operator — pop two, compute, push result */
            int b = pop(&s);
            int a = pop(&s);
            int result;
            if      (tok[0] == '+') result = a + b;
            else if (tok[0] == '-') result = a - b;
            else if (tok[0] == '*') result = a * b;
            else                    result = a / b;
            push(&s, result);
        }
        tok = strtok(NULL, " ");
    }

    return pop(&s);
}

int main() {
    printf("5 3 + 2 * = %d\n", evaluatePostfix("5 3 + 2 *"));   /* 16 */
    return 0;
}
```

</details>
