// Instructions:
//  At the beginning of the game, you start with an empty record. You are given a list of strings ops, where ops[i] is the ith operation you must apply to the record and is one of the following:
//    An integer x - Record a new score of x.
//    "+" - Record a new score that is the sum of the previous two scores. It is guaranteed there will always be two previous scores.
//    "D" - Record a new score that is double the previous score. It is guaranteed there will always be a previous score.
//    "C" - Invalidate the previous score, removing it from the record. It is guaranteed there will always be a previous score.

//P: an array of strings
//R: integer; sum of all the scores on the record
//E:
//P: create a stack variable; for loop that performs an action based on the value of the element at the ith index; add or remove scores to the record per the instructions (use push/pop method on the stack)

// Function declaration
function calPoints(ops) {
  let stack = [];
  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === "D") {
      let doubleScore = stack[stack.length - 1] * 2;
      stack.push(doubleScore);
    } else if (ops[i] === "C") {
      stack.pop();
    } else if (ops[i] === "+") {
      let lastScore = stack[stack.length - 1];
      let secondToLastScore = stack[stack.length - 2];
      let addingScores = lastScore + secondToLastScore;
      stack.push(addingScores);
    } else {
      stack.push(Number(ops[i]));
    }
  }
  const totalSum = stack.reduce((acc, currentVal) => acc + currentVal, 0);
  return totalSum;
}

// Function declaration; switch case
function calPoints(ops) {
  let stackRecord = [];
  for (let i = 0; i < ops.length; i++) {
    switch (ops[i]) {
      case "D":
        let doubleScore = stackRecord[stackRecord.length - 1] * 2;
        stackRecord.push(doubleScore);
        break;
      case "C":
        stackRecord.pop();
        break;
      case "+":
        let lastScore = stackRecord[stackRecord.length - 1];
        let secondToLastScore = stackRecord[stackRecord.length - 2];
        let addingScores = lastScore + secondToLastScore;
        stackRecord.push(addingScores);
        break;
      default:
        stackRecord.push(Number(ops[i]));
        break;
    }
  }
  const totalSum = stackRecord.reduce((acc, currentVal) => acc + currentVal, 0);
  return totalSum;
}
