# 11. Sets

## Definition

A **set** is an unordered collection of **distinct elements**, meaning:

- **No element repeats** in a set
- **The order of elements does not matter**

<div class="cp-definition">

#### Examples:

```python
Set A = {1, 2, 3, 4}
Set B = {4, 2, 1, 3}   # Same as Set A — order doesn't matter
Set C = {1, 2, 2, 3}   # Invalid — 2 repeats (Python auto-removes duplicates)
```

#### Key Characteristics

| Property | Explanation |
|----------|-------------|
| **Unordered** | {1, 2} is the same set as {2, 1} |
| **Distinct elements** | {1, 2, 2, 3} is automatically simplified to {1, 2, 3} |
| **No index** | Elements cannot be accessed by position |

</div>

---

## Set Operations

### A. Union ( ∪ )

Combines all elements from two sets, **without duplicates**.

```
A = {1, 2, 3},  B = {3, 4, 5}
A ∪ B = {1, 2, 3, 4, 5}
```

### B. Intersection ( ∩ )

Returns elements **common to both** sets.

```
A ∩ B = {3}
```

### C. Difference ( − )

Elements in the **first set but not second**.

```
A − B = {1, 2}
B − A = {4, 5}
```

### D. Symmetric Difference ( △ )

Elements in **either set but not both**.

```
A △ B = {1, 2, 4, 5}
```

### E. Membership Test

Checks if an element exists in a set.
```
2 ∈ A → True
5 ∈ A → False
```

---

## Applications of Sets

<div class="cp-definition">

| Application | Example |
|-------------|---------|
| **Databases** | SELECT DISTINCT — filter unique records |
| **Compilers** | Track unique keywords, tokens, or symbol names |
| **Networking** | Unique IP addresses, connected nodes in a graph |
| **Mathematics** | Model relationships between groups |
| **Search engines** | Term matching with union/intersection logic |

</div>

---

## Programming Examples (Python)

### Example 1: Creating a Set

```python
# Step 1: Create two sets
A = {1, 2, 3, 4, 5}
B = {4, 5, 6, 7}

# Step 2: Print sets
print("Set A:", A)   # Set A: {1, 2, 3, 4, 5}
print("Set B:", B)   # Set B: {4, 5, 6, 7}

# Note: Python automatically removes duplicates
C = {1, 2, 2, 3}
print("Set C:", C)   # Set C: {1, 2, 3}
```

---

### Example 2: Union

```python
union_set = A.union(B)            # or: A | B
print("A ∪ B:", union_set)        # {1, 2, 3, 4, 5, 6, 7}
```

---

### Example 3: Intersection

```python
intersection_set = A.intersection(B)   # or: A & B
print("A ∩ B:", intersection_set)       # {4, 5}
```

---

### Example 4: Difference

```python
diff_A_minus_B = A.difference(B)   # or: A - B
print("A - B:", diff_A_minus_B)     # {1, 2, 3}

diff_B_minus_A = B.difference(A)
print("B - A:", diff_B_minus_A)     # {6, 7}
```

---

### Example 5: Membership Test

```python
element = 3
if element in A:
    print(f"{element} is in set A")    # 3 is in set A
else:
    print(f"{element} is not in set A")
```

---

## Advanced Operations

```python
# Symmetric Difference — elements in A or B but not both
sym_diff = A.symmetric_difference(B)   # or: A ^ B
print("A △ B:", sym_diff)              # {1, 2, 3, 6, 7}

# Subset / Superset
small = {1, 2}
print(small.issubset(A))      # True  — every element of small is in A
print(A.issuperset(small))    # True  — A contains all elements of small
print(A.issubset(small))      # False — A has elements not in small
```

---

## C Language Implementation of Sets (Using Arrays)

Python has built-in sets, but in C we simulate them with sorted arrays or bit vectors.

### Set Implemented with Bit Array in C

```c
#include <stdio.h>
#include <string.h>

#define MAX_SIZE 100

/* Represent a set as a boolean array */
typedef struct {
    int elements[MAX_SIZE];
    int count;
} Set;

/* Add element to set (no duplicates) */
void addElement(Set *s, int val) {
    int i;
    for (i = 0; i < s->count; i++) {
        if (s->elements[i] == val) return;   /* already in set */
    }
    s->elements[s->count++] = val;
}

/* Check membership */
int isMember(Set *s, int val) {
    int i;
    for (i = 0; i < s->count; i++)
        if (s->elements[i] == val) return 1;
    return 0;
}

/* Union of two sets */
Set unionSets(Set *a, Set *b) {
    Set result;
    result.count = 0;
    int i;
    /* Add all elements from A */
    for (i = 0; i < a->count; i++)
        addElement(&result, a->elements[i]);
    /* Add elements from B (no duplicates) */
    for (i = 0; i < b->count; i++)
        addElement(&result, b->elements[i]);
    return result;
}

/* Print a set */
void printSet(Set *s, const char *name) {
    int i;
    printf("%s = {", name);
    for (i = 0; i < s->count; i++) {
        printf("%d", s->elements[i]);
        if (i < s->count - 1) printf(", ");
    }
    printf("}\n");
}

int main() {
    Set A, B, C;
    A.count = 0;
    B.count = 0;

    addElement(&A, 1); addElement(&A, 2); addElement(&A, 3);
    addElement(&B, 3); addElement(&B, 4); addElement(&B, 5);

    printSet(&A, "A");     /* A = {1, 2, 3} */
    printSet(&B, "B");     /* B = {3, 4, 5} */

    C = unionSets(&A, &B);
    printSet(&C, "A ∪ B"); /* A ∪ B = {1, 2, 3, 4, 5} */

    printf("Is 3 in A? %s\n", isMember(&A, 3) ? "Yes" : "No");   /* Yes */
    printf("Is 5 in A? %s\n", isMember(&A, 5) ? "Yes" : "No");   /* No  */

    return 0;
}
```

---

## Practice Problems

<details>
<summary>🧩 Practice 1 — Set Operations</summary>

**Problem:** Given `X = {10, 20, 30, 40}` and `Y = {30, 40, 50, 60}`, compute in Python:
1. X ∪ Y
2. X ∩ Y
3. X − Y
4. Y − X
5. X △ Y

```python
X = {10, 20, 30, 40}
Y = {30, 40, 50, 60}

print("X ∪ Y:", X | Y)          # {10, 20, 30, 40, 50, 60}
print("X ∩ Y:", X & Y)          # {30, 40}
print("X - Y:", X - Y)          # {10, 20}
print("Y - X:", Y - X)          # {50, 60}
print("X △ Y:", X ^ Y)          # {10, 20, 50, 60}
```

</details>

<details>
<summary>🧩 Practice 2 — Unique Students</summary>

**Problem:** Two classes share student IDs. Find all unique students enrolled in either class, and students enrolled in both classes.

```python
class_a = {101, 102, 103, 104}
class_b = {103, 104, 105, 106}

# All unique students
all_students = class_a | class_b
print("All students:", all_students)      # {101, 102, 103, 104, 105, 106}

# Students in both classes
both_classes = class_a & class_b
print("In both classes:", both_classes)   # {103, 104}

# Only in class_a
only_a = class_a - class_b
print("Only in A:", only_a)               # {101, 102}
```

</details>

<details>
<summary>🧩 Practice 3 — Conceptual Question</summary>

**Question:** A web search engine uses set operations to process Boolean queries. Explain how it would process the query: `"Python AND (web OR data)"`.

**Answer:**

1. Let:
   - `P` = set of documents containing "Python"
   - `W` = set of documents containing "web"
   - `D` = set of documents containing "data"

2. Process inner OR first:
   ```
   web_or_data = W ∪ D   (documents with "web" OR "data" or both)
   ```

3. Process AND:
   ```
   result = P ∩ web_or_data
   ```

This gives the set of documents containing "Python" AND at least one of "web" or "data" — exactly the intended query. Set operations make this computationally efficient using inverted index structures.

</details>
