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

const findMaxConsecutiveOnes = (nums) => {
  let counter = 0;
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      counter = 0;
    } else {
      counter++;
      result = Math.max(result, counter);
    }
  }

  return result;
};

// Practice Attempt - 2
const findMaxConsecutiveOnes = (nums) => {
  if (nums.length === 1 && nums[0] === 1) return 1;

  // Create my counter that increases each time there are consecutive 1s; will reset upon hitting a 0
  // Create a result variable that holds counter value assuming that counter is greater than result
  let counter = 0;
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      counter = 0;
    } else {
      counter += 1;
      result = Math.max(counter, result);
    }
  }

  return result;
};

// Practice Attempt - 3
// P: An array with binary integers
// R: Return value is an integer and should be the maximum number of consecutive 1s in the array
// E: [1, 1, 1, 0, 1, 1] // 3
// P: Create two counters; one counter will increase each time an element is equal to one so long as the next value is not a zero; if zero, said counter resets; the second counter will hold the max of itself and the counter;
// for loop will be used to traverse each value of the array; if element === 0 then reset counter; otherwise increase counter and check which counter is the max value; return the second counter

const findMaxConsecutiveOnes = (nums) => {
  // Two counters
  let count = 0;
  let result = 0;

  // For loop to traverse array
  for (let i = 0; i < nums.length; i++) {
    // Conditional to determine what happens if value is 0 or 1
    if (nums[i] === 0) {
      count = 0;
    } else {
      count += 1;
      result = Math.max(count, result);
    }
  }

  return result;
};
