//  What is a valid parentheses string?
//    Empty string or a character NOT equal to '(' or ')'

//P: string parameter
//R:
//E:
//P:

// Function declaration
function maxDepth(s) {
  let stack = [];
  let depth = 0;

  for (let i = 0; i < s.length; i++) {
    let character = s[i];
    if (character === "(") {
      stack.push(character);
      if (depth < stack.length) {
        depth = stack.length;
      }
    } else if (character === ")") {
      stack.pop();
    }
  }
  return depth;
}
