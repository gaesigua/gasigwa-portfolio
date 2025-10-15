# Number Systems

## Why Do We Need Different Number Systems?

---

In digital electronics, computers process information using the **binary**. While this is efficient for machines, binary numbers can become long and burdensome for us humans to understand. 

This is why, for humans to efficiently read and write that information (in other words, be able to understand and speak with the computer), we use other number systems like **Decimal**, **Octal**, and **Hexadecimal**.


## The Concept of Base (or Radix)
---

A number system is a way of representing numbers using a specific set of symbols or digits. The number of unique digits used in a number system is called **base** or **radix**.
Every number system must have a **base**, and this base will determine the number of unique digits used in that system.

<div class="table-container">
    <table>
        <tr>
            <th>System</th>
            <th>Base</th>
            <th>Digits Used</th>
            <th>Example</th>
        </tr>
        <tr>
            <td>Decimal</td>
            <td>10</td>
            <td>0, 1, 2, 3, 4, 5, 6, 7, 8, 9</td>
            <td>87₁₀</td>
        </tr>
        <tr>
            <td>Binary</td>
            <td>2</td>
            <td>0, 1</td>
            <td>1011₂</td>
        </tr>
        <tr>
            <td>Octal</td>
            <td>8</td>
            <td>0, 1, 2, 3, 4, 5, 6, 7</td>
            <td>127₈</td>
        </tr>
        <tr>
            <td>Hexadecimal</td>
            <td>16</td>
            <td>0-9, A, B, C, D, E, F</td>
            <td>2F₁₆</td>
        </tr>
    </table>
</div>

<div class="note">
    <strong>💡 Important:</strong> The subscript number indicates the base of the number system. For example, 101₂ means 101 in binary (base 2).
</div>
<!-- <div style="border: 1px solid #1b65b9ff; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 10px; border-radius: 0px; color: white">
    **NOTE:** The subscript number indicates the base of the number system. For example, 101₂ means 101 in binary (base 2).
</div> -->


<!-- <div style="border: 1px solid #1b65b9ff; background-color: #595e6dff; padding: 10px; border-radius: 0px; color: white">
    **NOTE:** This action is irreversible and may result in data loss. Proceed with caution.
</div> -->

For any number, its value is determined by the sum of its digits multiplied by the base raised to the power of the digit's position.

<div class="formula">

_**N <sub>Base</sub> = (d<sub>n</sub> . Base<sup>n</sup>) + (d<sub>n-1</sub> . Base<sup>n-1</sup>) + ... + (d<sub>0</sub> . Base<sup>0</sup>)**_

</div>

Don't worry if you don't understand this formula now, we will learn more about it in the coming sections.