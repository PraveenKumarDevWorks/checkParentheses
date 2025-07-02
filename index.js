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
    return stack.length === 0; // True if all parentheses are matched
}
// Test cases
console.log(checkParentheses("()")); // true
console.log(checkParentheses("(())")); // true
console.log(checkParentheses("(()")); // false
console.log(checkParentheses(")(")); // false
console.log(checkParentheses("()()")); // true
console.log(checkParentheses(")(")); // false
console.log(checkParentheses("((()))")); // true
console.log(checkParentheses(")(")); // false
console.log(checkParentheses("(()())")); // true
console.log(checkParentheses(")(")); // false

// pattern name  = "Check Parentheses";
// pattern description = "Check if a string has balanced parentheses.";
// pattern difficulty = "Easy";
// pattern tags = ["String", "Stack"];
// pattern code = "javascript";
// pattern codeSnippet = checkParentheses.toString();
// pattern example = {
//     input: "str = \"()\"",
//     output: "true"
// };
// pattern example2 = {
//     input: "str = \"(())\"",
//     output: "true"
// };
// pattern example3 = {
//     input: "str = \"(()\"",
//     output: "false"
// };