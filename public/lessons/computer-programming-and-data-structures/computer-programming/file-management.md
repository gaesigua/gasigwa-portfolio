# 14. File Management

## Why File Management?

Variables and data in a program exist only while the program runs — they disappear when it exits. **Files** provide **persistent storage**: data survives program termination and can be shared between programs.

<div class="cp-definition">

#### File Types

| Type | Description | Example |
|------|-------------|---------|
| **Text files** | Human-readable characters; use newlines | `.txt`, `.csv`, `.c` source files |
| **Binary files** | Raw bytes; compact, not human-readable | `.exe`, `.jpg`, `.dat` |

</div>

---

## File Operations in C

C handles files through the `<stdio.h>` library using a `FILE *` pointer.

### The File Operation Lifecycle

```
fopen()  →  read/write operations  →  fclose()
```

### `fopen()` — Opening a File

```c
FILE *fopen(const char *filename, const char *mode);
```

| Mode | Meaning |
|------|---------|
| `"r"` | Read (file must exist) |
| `"w"` | Write (creates or overwrites) |
| `"a"` | Append (adds to end; creates if not exist) |
| `"r+"` | Read and write (file must exist) |
| `"w+"` | Read and write (creates or overwrites) |
| `"rb"`, `"wb"` | Binary read/write |

---

## Writing to a Text File

```c
#include <stdio.h>

int main() {
    FILE *file = fopen("students.txt", "w");

    if (file == NULL) {
        printf("Error: Could not create file!\n");
        return 1;
    }

    /* Write formatted data to the file */
    fprintf(file, "Name,ID,Grade\n");
    fprintf(file, "Alice,1001,A\n");
    fprintf(file, "Bob,1002,B\n");
    fprintf(file, "Carol,1003,A\n");

    fclose(file);
    printf("File written successfully.\n");
    return 0;
}
```

---

## Reading from a Text File

```c
#include <stdio.h>

int main() {
    FILE *file = fopen("students.txt", "r");
    char line[100];

    if (file == NULL) {
        printf("Error: Could not open file!\n");
        return 1;
    }

    printf("=== File Contents ===\n");
    while (fgets(line, sizeof(line), file) != NULL) {
        printf("%s", line);  /* fgets includes the newline */
    }

    fclose(file);
    return 0;
}
```

---

## Reading Structured Data from File

```c
#include <stdio.h>

typedef struct {
    char name[50];
    int  id;
    char grade;
} Student;

int main() {
    FILE *file = fopen("student_records.dat", "w");
    if (file == NULL) { printf("Error!\n"); return 1; }

    /* Write structured records */
    Student students[] = {
        {"Alice",   1001, 'A'},
        {"Bob",     1002, 'B'},
        {"Carol",   1003, 'A'},
    };

    int i, n = 3;
    for (i = 0; i < n; i++) {
        fprintf(file, "%s %d %c\n",
                students[i].name, students[i].id, students[i].grade);
    }
    fclose(file);

    /* Read back */
    file = fopen("student_records.dat", "r");
    Student s;
    printf("\n=== Student Records ===\n");
    while (fscanf(file, "%49s %d %c",
                  s.name, &s.id, &s.grade) == 3) {
        printf("%-10s | ID: %4d | Grade: %c\n",
               s.name, s.id, s.grade);
    }
    fclose(file);

    return 0;
}
```

---

## Appending to a File

```c
#include <stdio.h>

int main() {
    FILE *file = fopen("log.txt", "a");  /* "a" = append */
    if (file == NULL) { printf("Error!\n"); return 1; }

    fprintf(file, "New entry: User logged in at 08:30\n");
    fclose(file);

    printf("Log updated.\n");
    return 0;
}
```

---

## Binary File I/O

Binary files store raw bytes — more compact and faster than text for structured data:

```c
#include <stdio.h>

typedef struct {
    char name[50];
    int  age;
    float salary;
} Employee;

int main() {
    Employee emp = {"David", 35, 120000.0f};
    FILE *file;

    /* Write binary */
    file = fopen("employee.bin", "wb");
    if (!file) { printf("Error!\n"); return 1; }
    fwrite(&emp, sizeof(Employee), 1, file);
    fclose(file);

    /* Read back binary */
    Employee readEmp;
    file = fopen("employee.bin", "rb");
    fread(&readEmp, sizeof(Employee), 1, file);
    fclose(file);

    printf("Name  : %s\n", readEmp.name);
    printf("Age   : %d\n", readEmp.age);
    printf("Salary: %.2f\n", readEmp.salary);

    return 0;
}
```

---

## File Access Modes: Sequential vs Random

<div class="cp-comparison">
<div class="cp-comparison-left">
<h5>Sequential Access</h5>

- Read/write from start to end
- Simple; most text files
- `fgets`, `fscanf`, `fprintf`
</div>
<div class="cp-comparison-right">
<h5>Random Access</h5>

- Jump to any position
- Binary files; databases
- `fseek`, `ftell`, `rewind`
</div>
</div>

```c
/* Random access — jump to specific record */
#include <stdio.h>

typedef struct { int id; float value; } Record;

int main() {
    FILE *f = fopen("records.bin", "rb");
    if (!f) return 1;

    int recordNum = 2;  /* 0-indexed: jump to 3rd record */
    fseek(f, recordNum * sizeof(Record), SEEK_SET);

    Record r;
    fread(&r, sizeof(Record), 1, f);
    printf("Record %d: id=%d, value=%.2f\n", recordNum, r.id, r.value);

    fclose(f);
    return 0;
}
```

---

## File Error Handling

Always check if `fopen` returned `NULL`:

```c
FILE *file = fopen("data.txt", "r");

if (file == NULL) {
    perror("Error opening file");  /* prints system error message */
    /* perror output example: "Error opening file: No such file or directory" */
    return 1;
}
```

Other useful functions:
- `feof(file)` — returns non-zero if end-of-file reached
- `ferror(file)` — returns non-zero if an error occurred
- `rewind(file)` — resets file position to the beginning

---

## Practice Problems

<details>
<summary>🧩 Practice 1 — Write and Read</summary>

**Problem:** Write a C program that:
1. Creates `numbers.txt` and writes numbers 1–10 (one per line)
2. Reads the file back and displays the sum

```c
#include <stdio.h>

int main() {
    int i;
    FILE *f;

    /* Write */
    f = fopen("numbers.txt", "w");
    for (i = 1; i <= 10; i++)
        fprintf(f, "%d\n", i);
    fclose(f);

    /* Read and sum */
    int num, sum = 0;
    f = fopen("numbers.txt", "r");
    while (fscanf(f, "%d", &num) == 1)
        sum += num;
    fclose(f);

    printf("Sum = %d\n", sum);  /* 55 */
    return 0;
}
```

</details>

<details>
<summary>🧩 Practice 2 — Student File System</summary>

**Problem:** Build a mini student record system that:
- Lets the user add students to `students.txt`
- Can display all students from the file

```c
#include <stdio.h>

void addStudent() {
    FILE *f = fopen("students.txt", "a");
    char name[50]; int id; float gpa;

    printf("Name: "); scanf("%49s", name);
    printf("ID: ");   scanf("%d", &id);
    printf("GPA: ");  scanf("%f", &gpa);

    fprintf(f, "%s %d %.2f\n", name, id, gpa);
    fclose(f);
    printf("Student added.\n");
}

void displayAll() {
    FILE *f = fopen("students.txt", "r");
    if (!f) { printf("No records yet.\n"); return; }

    char name[50]; int id; float gpa;
    printf("\n%-15s %-8s %-6s\n", "Name", "ID", "GPA");
    printf("--------------------------------\n");
    while (fscanf(f, "%49s %d %f", name, &id, &gpa) == 3)
        printf("%-15s %-8d %.2f\n", name, id, gpa);

    fclose(f);
}

int main() {
    int choice;
    do {
        printf("\n1. Add student  2. View all  3. Exit\nChoice: ");
        scanf("%d", &choice);
        if (choice == 1) addStudent();
        else if (choice == 2) displayAll();
    } while (choice != 3);
    return 0;
}
```

</details>

<details>
<summary>🧩 Practice 3 — File Error Handling</summary>

**Problem:** Explain what happens with this code if `data.txt` does not exist, and fix it:

```c
/* BUGGY CODE */
FILE *f = fopen("data.txt", "r");
int x;
fscanf(f, "%d", &x);  /* What happens here if file doesn't exist? */
printf("Value: %d\n", x);
fclose(f);
```

**Answer:**

If `data.txt` does not exist, `fopen` returns `NULL`. Calling `fscanf(NULL, ...)` causes **undefined behavior** — likely a program crash (segmentation fault).

**Fixed version:**

```c
#include <stdio.h>

int main() {
    FILE *f = fopen("data.txt", "r");
    if (f == NULL) {
        perror("Error");
        return 1;  /* exit safely */
    }

    int x;
    if (fscanf(f, "%d", &x) == 1)
        printf("Value: %d\n", x);
    else
        printf("Could not read a value from file.\n");

    fclose(f);
    return 0;
}
```

</details>
