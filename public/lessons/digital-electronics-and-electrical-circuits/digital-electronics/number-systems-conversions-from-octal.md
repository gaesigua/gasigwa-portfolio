# Converting FROM DECIMAL

In this lesson, let's learn how to convert numbers between different number systems. Understanding these conversions is essential for computer science, programming, and digital electronics.
As we mentioned in our previous lesson, the four main number systems we'll cover are: 

**- Binary (Base 2)**: Uses digits 0 and 1

**- Octal (Base 8)**: Uses digits 0-7

**- Decimal (Base 10)**: Uses digits 0-9

**- Hexadecimal (Base 16)**: Uses digits 0-9 and A-F

## 1. Decimal to Any Base (The Division Method)
---

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
---

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

