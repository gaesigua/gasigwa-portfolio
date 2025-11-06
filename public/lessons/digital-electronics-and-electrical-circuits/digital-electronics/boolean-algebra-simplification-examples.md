# Simplification Examples
                    
<div class="example">
    <h4>Example 1: Simplify A·B + A·B'</h4>
    <div class="boolean-algebra">
Step 1: A·B + A·B'
Step 2: Factor out A using distributive law
        = A(B + B')
Step 3: Apply complement law (B + B' = 1)
        = A · 1
Step 4: Apply identity law (A · 1 = A)
        = A

<strong>Result: A·B + A·B' = A</strong>
                        </div>
                    </div>
                    
<div class="example">
    <h4>Example 2: Simplify (A + B)(A + B')</h4>
    <div class="boolean-algebra">
Step 1: (A + B)(A + B')
Step 2: Apply distributive law
        = A·A + A·B' + B·A + B·B'
Step 3: Apply idempotent law (A·A = A) and complement (B·B' = 0)
        = A + A·B' + A·B + 0
Step 4: Factor out A
        = A(1 + B' + B)
Step 5: Since 1 + anything = 1
        = A · 1
        = A

<strong>Result: (A + B)(A + B') = A</strong>
                        </div>
                    </div>
                    
<div class="example">
    <h4>Example 3: Simplify A'BC + ABC + AB'C</h4>
    <div class="boolean-algebra">
Step 1: A'BC + ABC + AB'C
Step 2: Factor out BC from first two terms
        = BC(A' + A) + AB'C
Step 3: Apply complement law (A' + A = 1)
        = BC·1 + AB'C
        = BC + AB'C
Step 4: Factor out C
        = C(B + AB')
Step 5: Apply absorption law (B + AB' = B + A)
        = C(B + A)
        = AC + BC

<strong>Result: A'BC + ABC + AB'C = AC + BC</strong>
                        </div>
                    </div>
                    
<div class="note">
                        <strong>💡 Simplification Tips:</strong>
                        <ul style="margin-left: 20px; margin-top: 10px; line-height: 2;">
                            <li>Look for common factors to apply distributive law</li>
                            <li>Use complement laws when you see A and A' together</li>
                            <li>Apply absorption laws to eliminate redundant terms</li>
                            <li>Use De Morgan's theorems to convert between forms</li>
                            <li>Verify your answer using truth tables</li>
                        </ul>
                    </div>
                </div>
            </div>