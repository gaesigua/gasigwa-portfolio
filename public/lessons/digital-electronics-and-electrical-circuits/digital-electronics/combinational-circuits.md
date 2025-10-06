# Combinational Logic Circuits

A **Combinational Logic Circuit** is a type of digital circuit where the output is _purely a function of the current inputs_. It has no memory; the past history of inputs does not affect the current output.

## Characteristics

**1.** **Memoryless**: Outputs depend only on the combination of current inputs.

**2.** **Logic Gates**: Composed entirely of logic gates (AND, OR, NOT, NAND, NOR, etc.).

**3.** **No Feedback**: There are no feedback paths from the output back to the input.

## General Combinational Circuit Design Procedure

**1.** **Define the Problem**: Clearly state the desired relationship between inputs and outputs.

**2.** **Determine Number of Variables**: Identify the required number of inputs () and outputs ().

**3.** **Derive the Truth Table**: List all  possible input combinations and the corresponding desired output for each.

**4.** **Derive Boolean Expressions**: Write a Sum-of-Products (SOP) or Product-of-Sums (POS) expression for each output from the truth table

**5.** **Simplify the Expressions**: Use Boolean algebra or, more commonly, a Karnaugh Map (K-Map) to minimize the expression.

**6.** **Draw the Logic Diagram**: Implement the minimized expression using the required logic gates.

## Common Combinational Circuits

**1.** **Adders**

**A. Half Adder** 

A circuit that performs the addition of **two** single bits.

Inputs: Two bits,  and .

Outputs: A Sum () and a Carry ().

Truth Table:| A | B | S | C_{out} || :--- | :--- | :--- | :--- || 0 | 0 | 0 | 0 || 0 | 1 | 1 | 0 || 1 | 0 | 1 | 0 || 1 | 1 | 0 | 1 |

Minimized Expressions:

Implementation: An XOR gate for  and an AND gate for .

**B. Full Adder**

A circuit that performs the addition of three bits: two data bits ( and ) and a Carry-in () from a previous addition stage. Full Adders are cascaded to add multi-bit numbers.

Inputs: , , and .

Outputs: Sum (S) and Carry-out (Cout​).

Expressions (Minimized):

2. Decoders

A **Decoder** converts binary information from  input lines to a maximum of  unique output lines.

Example: 3-to-8 Decoder

Inputs ():  (8 possible combinations,  to ).

Outputs ():  through .

Operation: For any given input combination, only one output line will be HIGH (1), while all others are LOW (0). For instance, if the input is  (Decimal 5), then only the output line  will be HIGH.

3. Multiplexers (MUX)

A **Multiplexer** (or **Data Selector**) selects one of  input data lines and routes it to a single output line.

Inputs:  data inputs ( to ) and  select lines ( to ).

Output: Single output ().

Operation: The  select lines determine which of the  data inputs is passed to the output.

Example: 4-to-1 MUX select lines (). 

data inputs ().

If  (Decimal 2), then the data on input line  is passed to the output .

4. Demultiplexers (DEMUX)

A **Demultiplexer** (or **Data Distributor**) takes a single input data line and routes it to one of  possible output lines.

Inputs: Single data input (), and  select lines ( to ).

Outputs:  output lines ( to ).

Operation: The single input  is routed to the output line specified by the  select lines.
