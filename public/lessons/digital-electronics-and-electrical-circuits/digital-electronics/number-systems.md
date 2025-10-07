# Number Systems

In digital electronics, information is represented and processed using the **binary** system. 
However, for humans to efficiently read and write this information, we use other number systems like **Decimal**, **Octal**, and **Hexadecimal**.

## The Concept of Base (Radix)
---

Every number system has a **base** (or **radix**), which determines the number of unique digits used in that system.

For any number, its value is determined by the sum of its digits multiplied by the base raised to the power of the digit's position.

_**N <sub>Base</sub> = (d<sub>n</sub> . Base<sup>n</sup>) + (d<sub>n-1</sub> . Base<sup>n-1</sup>) + ... + (d<sub>0</sub> . Base<sup>0</sup>)**_

## 1. Decimal System (Base 10)

**- Digits:** 10 unique digits (0,1,2,3,4,5,6,7,8,9).

**- Example:** The number **235<sub>10</sub>** is calculated as:
    **(2 . 10<sup>2</sup>) + (3 . 10<sup>1</sup>) + (5 . 10<sup>0</sup>) = 200 + 30 + 5 = 235**
	
## 2. Binary System (Base 2)

**- Digits:** 2 unique digits (0,1). These are called **bits** (**Binary Digits**).

**- Core Concept:** This is the language of digital circuits.

**- Example 1:** The number **1011<sub>2</sub>** is calculated as:
    **(1 . 2<sup>3</sup>) + (0 . 2<sup>2</sup>) + (1 . 2<sup>1</sup>) + (1 . 2<sup>0</sup>) = 8 + 0 + 2 + 1 = 11<sub>10</sub>**

**- The leftmost bit** also known as the **Most Significant Bit (MSB)**, is the bit in a binary number with the highest positional value, contributing the most to the number's overall magnitude. It represents the highest power of 2, meaning its value, whether 0 or 1, has the largest impact on the binary number's total value. In our example above, it is 1 on the **left side**. 

**- The rightmost bit** also known as the **Least Significant Bit (LSB)**, is the bit in a binary number with the lowest positional value; meaning it corresponds to the smallest power of 2, which is **2<sup>0</sup>**, or **1**. In our example above, it is 1 on the **right side**.


**- Example 2:** The number **11010110** is calculated as:
**(1. 2<sup>7</sup>) + (1. 2<sup>6</sup>) + (0. 2<sup>5</sup>) + (1. 2<sup>4</sup>) + (0. 2<sup>3</sup>) + (1. 2<sup>2</sup>) + (1. 2<sup>1</sup>) + (0. 2<sup>0</sup>) = 128 + 64 + 0 + 16 + 0 + 4 + 2 + 0 = 214**

In the 8-bit binary number **11010110**, the **leftmost bit** is **1** (first number on the left side). This 1 is the **MSB** and has the highest value, representing **2<sup>7</sup>** (**128** in **decimal**). The **rightmost bit**, **0**, is the **LSB** and represents **0. 2<sup>0</sup>** (**0** in **decimal**).

**- Example 3:**
Consider another 8-bit binary number **11010101**; The rightmost bit is **1**, and this is the Least Significant Bit (LSB). The positional value of this bit is 2<sup>0</sup> = 1.
If the bit were changed from 1 to 0, the number would become **11010100**, changing the decimal value by only 1.

![Alt Binary]( /images/binary.png "Binary System")


## 3. Octal System (Base 8)

**-Digits:** 8 unique digits (0,1,2,3,4,5,6,7).

**-Use Case:** This is a convenient shorthand (way of writing) for binary, as **three** binary bits (e.g., 111<sub>2</sub>) map directly to **one octal** digit (5<sub>8</sub>).

**-Example:** The number **743<sub>8</sub>** is an Octal number. 

<!-- and it is calculated as: **(7. 8<sup>2</sup>) + (4. 8<sup>1</sup>) + (3. 8<sup>0</sup>) = 448 + 32 + 3 = 483<sub>10</sub>**  -->

## 4. Hexadecimal System (Base 16)

**-Digits:** 16 unique digits (0,1,2,3,4,5,6,7,8,9, and A,B,C,D,E,F).

**-Use Case:** The most common shorthand in computing. **Four** binary bits (a **nibble**) map directly to **one hexadecimal** digit (e.g., 1101<sub>2</sub> = D<sub>16</sub>).

**-Example:**
* **A<sub>16</sub>**
* **F<sub>16</sub>**
* **A4D15<sub>16</sub>**


<!-- * **A<sub>16</sub> = 10<sub>10</sub>**
* **F<sub>16</sub> = 15<sub>10</sub>** -->