# Implementing Gates Using Universal Gates
                    
<div class="example">
    <h4>Creating All Gates from NAND</h4>
    <div class="boolean-algebra">
<strong>NOT from NAND:</strong>
Connect both inputs: Y = (A·A)' = A'

<strong>AND from NAND:</strong>
NAND + NOT: Y = ((A·B)')' = A·B
Use 2 NAND gates

<strong>OR from NAND:</strong>
Apply De Morgan: Y = (A'·B')' = A+B
Use 3 NAND gates (2 as NOT, 1 as NAND)

<strong>NOR from NAND:</strong>
Create OR then invert
Use 4 NAND gates

<strong>XOR from NAND:</strong>
Y = A'B + AB'
Use 4 NAND gates

<strong>XNOR from NAND:</strong>
Y = AB + A'B'
Use 5 NAND gates
                        </div>
                    </div>
                    
<div class="example">
    <h4>Creating All Gates from NOR</h4>
    <div class="boolean-algebra">
<strong>NOT from NOR:</strong>
Connect both inputs: Y = (A+A)' = A'

<strong>OR from NOR:</strong>
NOR + NOT: Y = ((A+B)')' = A+B
Use 2 NOR gates

<strong>AND from NOR:</strong>
Apply De Morgan: Y = (A'+B')' = A·B
Use 3 NOR gates (2 as NOT, 1 as NOR)

<strong>NAND from NOR:</strong>
Create AND then invert
Use 4 NOR gates

<strong>XOR from NOR:</strong>
Y = A'B + AB'
Use 5 NOR gates

<strong>XNOR from NOR:</strong>
Y = AB + A'B'
Use 4 NOR gates
                        </div>
                    </div>
                    
<div class="note">
                        <strong>💡 Design Tip:</strong> When designing circuits, try to minimize the number of gates and gate delays (propagation time). Using universal gates (NAND or NOR) throughout your design simplifies manufacturing and reduces costs.
                    </div>
                </div>
            </div>
            