# 12. Information Technologies

## Definition

**Information Technology (IT)** is the use of computers, networks, storage, and software to manage, process, and distribute information. IT enables organizations and individuals to collect, store, analyze, and communicate data efficiently.

<div class="cp-definition">

#### Core Functions of IT

| Function | Description |
|----------|-------------|
| **Automate tasks** | Reduce manual, repetitive work |
| **Support decision-making** | Process data into useful insights |
| **Connect people globally** | Networks and internet |
| **Enhance productivity** | Tools that help people work faster |

**Examples:** Online banking systems, social media platforms, hospital management systems, e-learning platforms.

</div>

---

## The Five Components of IT

### 12.2.1 Hardware

**Physical devices** used in computing:
- Computers: PCs, laptops, servers
- Input devices: keyboard, mouse, scanner
- Output devices: monitor, printer
- Storage devices: hard drives, SSDs, USB drives

> **Example:** A company server storing employee data is hardware.

---

### 12.2.2 Software

**Programs and applications** that instruct hardware what to do.

| Type | Examples |
|------|---------|
| **System software** | Windows, Linux, macOS, device drivers |
| **Application software** | MS Office, databases, browsers, programming IDEs |

---

### 12.2.3 Data

**Raw facts and figures** that are processed into meaningful information.

| Type | Description | Example |
|------|-------------|---------|
| **Structured** | Organized in rows/columns | Employee ID, salary amounts |
| **Unstructured** | No fixed format | Text, images, video |

> The term "data" refers to raw values; "information" is data after it has been organized and interpreted.

---

### 12.2.4 Networks

Enable **communication between computers and devices**:

| Network Type | Scope |
|-------------|-------|
| LAN (Local Area Network) | Office or building |
| WAN (Wide Area Network) | Country or continent |
| Internet | Global |

> **Example:** An office LAN allows employees to share printers and files.

---

### 12.2.5 People

**End-users, IT professionals, and decision-makers** who use, manage, and maintain IT systems.

| Role | Responsibility |
|------|---------------|
| Software developers | Build applications |
| Network administrators | Maintain networks |
| Data analysts | Interpret data |
| IT managers | Plan and oversee IT infrastructure |

---

## Programming Examples

### Example 1: Data Component — Reading and Writing Files (Python)

```python
# Step 1: Open file in write mode
file = open("employee_data.txt", "w")

# Step 2: Write employee records
file.write("ID: 101, Name: John Doe, Department: IT\n")
file.write("ID: 102, Name: Jane Smith, Department: HR\n")

# Step 3: Close the file
file.close()

# Step 4: Read and display the data
file = open("employee_data.txt", "r")
print(file.read())
file.close()
```

**Output:**
```
ID: 101, Name: John Doe, Department: IT
ID: 102, Name: Jane Smith, Department: HR
```

**C equivalent:**

```c
#include <stdio.h>

int main() {
    /* Write employee data */
    FILE *f = fopen("employee_data.txt", "w");
    if (!f) { printf("Error opening file\n"); return 1; }

    fprintf(f, "ID: 101, Name: John Doe, Department: IT\n");
    fprintf(f, "ID: 102, Name: Jane Smith, Department: HR\n");
    fclose(f);

    /* Read and print */
    char line[256];
    f = fopen("employee_data.txt", "r");
    while (fgets(line, sizeof(line), f)) {
        printf("%s", line);
    }
    fclose(f);
    return 0;
}
```

---

### Example 2: Network Component — Ping Check (Python)

```python
import os

# Step 1: Specify the host
host = "google.com"

# Step 2: Ping the host
response = os.system("ping -c 1 " + host)

# Step 3: Check response
if response == 0:
    print(f"{host} is reachable")
else:
    print(f"{host} is not reachable")
```

---

### Example 3: Software Component — Task Automation (Python)

```python
import webbrowser

# Step 1: Open a website automatically
webbrowser.open("https://www.wikipedia.org")

# Step 2: Confirm
print("Website opened automatically!")
```

---

### Example 4: Hardware Component — Reading System Info (Python)

```python
import platform

# Get hardware and OS information
cpu_info = platform.processor()
os_info  = platform.system() + " " + platform.release()

print(f"CPU: {cpu_info}")
print(f"OS:  {os_info}")
```

**C equivalent using system() calls:**

```c
#include <stdio.h>

int main() {
    /* Query system information using shell commands */
    printf("=== System Information ===\n");
    system("uname -m");     /* CPU architecture */
    system("uname -s");     /* OS name */
    return 0;
}
```

---

### Example 5: People Component — User Interaction (Python)

```python
# Step 1: Collect user data
name = input("Enter your name: ")
role = input("Enter your role: ")

# Step 2: Display personalized message
print(f"Welcome {name}, you are logged in as {role}.")
```

**C equivalent:**

```c
#include <stdio.h>

int main() {
    char name[50], role[50];

    printf("Enter your name: ");
    scanf("%s", name);

    printf("Enter your role: ");
    scanf("%s", role);

    printf("Welcome %s, you are logged in as %s.\n", name, role);
    return 0;
}
```

---

## IT Components Summary Table

| Component | Description | Example |
|-----------|-------------|---------|
| **Hardware** | Physical devices | Servers, PCs, Printers |
| **Software** | Programs & applications | Python, MS Office, Linux |
| **Data** | Raw facts → meaningful info | Employee records, logs |
| **Networks** | Connectivity systems | LAN, Internet, Wi-Fi |
| **People** | Users & IT professionals | Developers, Analysts, Admins |

---

## Practice Problems

<details>
<summary>🧩 Practice 1 — Identify the Component</summary>

**Question:** Identify the IT component for each scenario:

1. A hospital's patient record database
2. The Wi-Fi network connecting hospital computers
3. The nurse who enters patient data
4. The monitor displaying patient information
5. The hospital management software

**Answers:**
1. **Data** — patient records are stored data
2. **Networks** — Wi-Fi is a networking component
3. **People** — the nurse is an end-user
4. **Hardware** — a monitor is a physical output device
5. **Software** — hospital management software is an application

</details>

<details>
<summary>🧩 Practice 2 — File I/O in C</summary>

**Problem:** Write a C program that stores 3 student names in a file `students.txt` and reads them back.

```c
#include <stdio.h>

int main() {
    /* Write to file */
    FILE *f = fopen("students.txt", "w");
    if (!f) return 1;

    fprintf(f, "Alice Mugisha\n");
    fprintf(f, "Bob Kabanda\n");
    fprintf(f, "Carol Mutoni\n");
    fclose(f);

    /* Read from file */
    char line[100];
    f = fopen("students.txt", "r");
    printf("=== Student List ===\n");
    while (fgets(line, sizeof(line), f))
        printf("%s", line);
    fclose(f);

    return 0;
}
```

**Output:**
```
=== Student List ===
Alice Mugisha
Bob Kabanda
Carol Mutoni
```

</details>

<details>
<summary>🧩 Practice 3 — System vs Application Software</summary>

**Question:** Classify each item as system software or application software, and explain:

| Item | Classification | Reason |
|------|---------------|--------|
| Ubuntu Linux 22.04 | **System software** | Operating system — manages hardware |
| Microsoft Word | **Application software** | Word processor for user tasks |
| GPU device driver | **System software** | Manages specific hardware (GPU) |
| Google Chrome | **Application software** | Web browser for user tasks |
| cp/mv/ls (Linux commands) | **System software** | Core OS utilities |
| MySQL database server | Both — mostly **System** | Manages data storage for other apps |

</details>
