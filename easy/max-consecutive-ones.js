// P: The parameter given is an array of binary numbers (0s and 1s);
// R: My return value is a number -- return the max number of consecutive 1s in the array
// E: [1] - 1; [1, 1, 1] - 3; [1, 2, 3] -1
// P: Use a for loop to traverse each element within the array and to check its value; create a counter variable that will increase each time there are consecutive ones; create a max variable that will hold the value of counter if counter is greater
// than the max variable; whenever counter reads a value of 0 in the array, then counter should be reset back to to zero to start the count again; use Math.max(counter, max) and return the result to determine the max number of consecutive 1s in array

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

// Practice Attempt - 1
const findMaxConsecutiveOnes = (nums) => {
  let counter = 0;
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      counter += 1;
    } else {
      if (counter > max) {
        max = counter;
      }
      counter = 0;
    }
  }

  const result = Math.max(counter, max);
  return result;
};
