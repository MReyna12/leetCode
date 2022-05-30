//  Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//  An input string is valid if:
//    Open brackets must be closed by the same type of brackets.
//    Open brackets must be closed in the correct order.

//P: a string
//R: boolean; true if open brackets closed by same type of brackets AND in the correct order; false otherwise
//E: '()()()' // true; '{)}' // false
//P: first, we'll check to see if the length of the string is odd, if it is then we know there will be at least one unfinished bracket, so we return false. create a stack; create a hash with keys equivalent to closed brackets and their respective
// values will be open brackets. This will allow us to add open brackets to the stack and close them off in order

// Function declaration
function isValid(s) {
  if (s.length % 2 === 1) {
    return false;
  }
  let stack = [];
  const closeToOpen = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (const character of s) {
    if (character in closeToOpen) {
      if (stack && stack[stack.length - 1] === closeToOpen[character]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(character);
    }
  }
  return stack.length === 0;
}
