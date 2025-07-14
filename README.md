## 🧩 Pattern: Stack (Check Parentheses)

**Problem:**  
Check if a string has **balanced parentheses** – every opening `'('` has a matching closing `')'`.

---

### ✅ Pattern Details

- **Name:** Check Parentheses  
- **Difficulty:** Easy  
- **Tags:** `String`, `Stack`  
- **Language:** JavaScript  

---

### 🧠 Approach

- Use a **stack** to track open parentheses.
- Traverse the string:
  - Push `'('` onto the stack.
  - On `')'`, pop from the stack:
    - ❌ If the stack is empty → unmatched closing parenthesis.
- ✅ Return `true` if the stack is empty at the end (all matched).

---

### ⏱️ Time & Space Complexity

- **Time Complexity:** O(n) – One pass through the string  
- **Space Complexity:** O(n) – Stack may store all `(` in worst case

---

### 📎 Code Snippet (JavaScript)

```js
function checkParentheses(str) {
    const stack = [];
    for (let char of str) {
        if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            if (stack.length === 0) return false; // Unmatched closing parenthesis
            stack.pop();
        }
    }
    return stack.length === 0; // All parentheses matched
}
