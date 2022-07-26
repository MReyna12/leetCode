// P: The parameter given is an array of binary numbers (0s and 1s);
// R: My return value is a number -- return the max number of consecutive 1s in the array
// E: [1] - 1; [1, 1, 1] - 3; [1, 2, 3] -1
// P: Iterate from beginning to the end of the array; store count of consecutive 1s in variable; have a second variable that is set to the count variable if the count variable is greater than the second variable,
// and then count is reset if value is zero; once loop finishes, return whichever variable is greater

function findMaxConsecutiveOnes(nums) {
  if (nums[0] === 1 && nums.length === 1) return 1;

  let firstCounter = 0;
  let secondCounter = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      firstCounter += 1;
    } else {
      if (firstCounter > secondCounter) {
        secondCounter = firstCounter;
      }

      firstCounter = 0;
    }
  }

  let result = Math.max(firstCounter, secondCounter);
  return result;
}
