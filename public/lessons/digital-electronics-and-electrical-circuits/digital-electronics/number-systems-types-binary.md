# Types of Number Systems: Binary

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