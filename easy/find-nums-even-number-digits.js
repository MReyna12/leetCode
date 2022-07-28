// P: Parameter is an array of integers
// R: Return the total number of integers in the array that contain an even number of digits
// E: [0, 1, 2, 12] - 1 (12); [0] - 0; [23, 42, 4444] - 3
// P: Convert each integer in the array to a string; determine the length of each string, with any being mod 2 === 0 added to a counter; return the counter

function findNumbers(nums) {
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    const stringLength = `${nums[i]}`.length;
    if (stringLength % 2 === 0) {
      counter += 1;
    }
  }

  return counter;
}

// Practice Attempt - 1
const findNumbers = (nums) => {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    const length = `${nums[i]}`.length;
    if (length % 2 === 0) {
      count += 1;
    }
  }

  return count;
};

// Practice Attempt - 2
const findNumbers = (nums) => {
  // Create counter to hold total number of even number digits
  let count = 0;

  // for loop that will convert each integer into a string, determine its length, and determine if it is even or odd
  for (let i = 0; i < nums.length; i++) {
    const stringLength = `${nums[i]}`.length;
    if (stringLength % 2 === 0) {
      count += 1;
    }
  }

  return count;
};
