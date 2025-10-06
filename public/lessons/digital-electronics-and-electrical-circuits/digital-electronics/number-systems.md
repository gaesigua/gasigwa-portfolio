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

**- Example:** The number **1011<sub>2</sub>** is calculated as:
    **(1 . 2<sup>3</sup>) + (0 . 2<sup>2</sup>) + (1 . 2<sup>1</sup>) + (1 . 2<sup>0</sup>) = 8 + 0 + 2 + 1 = 11<sub>10</sub>**

**- The leftmost** bit (1 in this case) is the **Most Significant Bit (MSB)**. The rightmost bit (1) is the **Least Significant Bit (LSB)**.

## 3. Octal System (Base 8)

**-Digits:** 8 unique digits (0,1,2,3,4,5,6,7).

**-Use Case:** A convenient shorthand for binary, as **three** binary bits (e.g., 111<sub>2</sub>) map directly to **one octal** digit (5<sub>8</sub>).

## 4. Hexadecimal System (Base 16)

**-Digits:** 16 unique digits (0 through 9, and A,B,C,D,E,F).
* **A<sub>16</sub> = 10<sub>10</sub>**
* **F<sub>16</sub> = 15<sub>10</sub>**

**-Use Case:** The most common shorthand in computing. **Four** binary bits (a **nibble**) map directly to **one hexadecimal** digit (e.g., 1101<sub>2</sub> = D<sub>16</sub>).

## Number System Conversions
---

## 1. Decimal to Any Base (The Division Method)

To convert a Decimal number to any base (Base _B_), repeatedly divide the decimal number by _B_ and record the **remainders** until the quotient is **0**. The result is the sequence of remainders, read from bottom to top.

**Example:** **Convert 25<sub>10</sub> to Binary**

| **Division** | **Quotient** | **Remainder (Bit)** |
| :---- | :------ | :---- |
|**25/2**| **12** | **1(LSB)** |
|**12/2**| **6** | **0** |
|**6/2**| **3** | **0** |
|**3/2**| **1** | **1** |
|**1/2**| **0** | **1(MSB)** |
Reading the remainders bottom-up: **25<sub>10</sub> = 11001<sub>2</sub>**


## 2. Binary to Octal and Hexadecimal (The Grouping Method)

These conversions are the easiest due to the relationship between the bases: **2<sup>3</sup> = 8** and **2<sup>4</sup> = 16**.

**Binary to Octal:** Group the binary bits in sets of **three** starting from the LSB.

**Example:** **Convert 11010110<sub>2</sub>** to **Octal**

**1.** Add leading zero to make the groups complete: **011 010 110**

**2.** Convert each group to its Octal equivalent: **3 2 6**

**3.** Result: **11010110<sub>2</sub>** = **326<sub>8</sub>** 

**Binary to Hexadecimal:** Group the binary bits in sets of **four** starting from the LSB.

**Example:** **Convert 11010110<sub>2</sub>** to **Hexadecimal**

**1.** Group the bits: **1101 0110**

**2.** Convert each group to its Hex equivalent: 

**- 1101<sub>2</sub> = 13<sub>10</sub> = D<sub>16</sub>**

**- 0110<sub>2</sub> = 6<sub>10</sub> = 6<sub>16</sub>**

**3.** Result: **11010110<sub>2</sub>** = **D6<sub>16</sub>**
​
  

## Binary Arithmetic: 2's Complement
---

Digital circuits need a way to perform subtraction. Instead of direct subtraction, which is complex, we use **addition** combined with the **2's Complement** method.

**1. 1's Complement**

The **1's complement** of a binary number is found by simply *inverting every* bit (**0** -> **1** and **1** -> **0**).

**Example:** **10101<sub>2</sub>** ---------**1’s Complement**---------> **01010<sub>2</sub>**


**2. 2's Complement**

The **2's complement** is found by *adding 1* to the 1's complement.

**2's Complement = 1's Complement + 1**

**Example:** **Find** the **2's Complement of 10101<sub>2</sub>**

**1.** 1's Complement: **01010**

**2.** **Add 1**:  &emsp;**+1**

**3.** 2's Complement: **01011<sub>2</sub>**

**Subtraction using 2's Complement**

To calculate **_A_ − _B_**:

**1.** Find the 2's Complement of **_B_**.

**2.** Add **_A_** to the 2's Complement of **_B_**.

**3.** If a final **carry-out** is generated, it is **ignored** (this means the result is **positive**).

**4.** If no carry-out is generated, the result is **negative** and is given by the 2's Complement of the final sum.

**Example:** 6<sub>10</sub> − 4<sub>10​</sub>(**using 4 bits**: 6<sub>10</sub> = 0110<sub>2</sub>, 4<sub>10</sub> = 0100<sub>2</sub>)

**1.** **_B_** = **0100<sub>2</sub>**. 2's Complement of **_B_**: **1011+1=1100<sub>2</sub>**.

**2.** Add **_A_** and 2's Comp(**_B_**):

          0110    (6)
        + 1100    (-4)
        -------------
        1 0010    (2)


**3. The final carry-out (1)** is ignored. The result is **0010<sub>2</sub>** = **2<sub>10</sub>**

