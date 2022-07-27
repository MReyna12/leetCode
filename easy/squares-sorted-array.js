// P: Parameter is an array of numbers in non-decreasing order
// R: Square each number in the array and sort the new numbers in non-decreasing order
// E: [1, 2] - [1, 4]
// P: Let's start by squaring each number within the array; merge sort the newly square array

const sortedSquares = (nums) => {
  // Create an array to hold the squared values
  let squaredArray = [];

  // Loop through the original array and square each value; push the squared value into squaredArray
  for (let i = 0; i < nums.length; i++) {
    const squaredNum = nums[i] * nums[i];
    squaredArray.push(squaredNum);
  }

  return sortMerge(squaredArray);
};

function sortMerge(array) {
  console.log(array);
  if (array.length <= 1) return array;

  // Implement merge sort
  // Divide - get the middle point of the array and split in half; save those halves into two variables (left/right)
  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  let leftValues = sortMerge(left);
  let rightValues = sortMerge(right);

  // Create an empty array for sorted values to be put in and a left/right index to target the split values to be compare
  let sortedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // While loop to compare the values in left/right
  while (leftIndex < leftValues.length && rightIndex < rightValues.length) {
    if (leftValues[leftIndex] < rightValues[rightIndex]) {
      sortedArray.push(leftValues[leftIndex]);
      leftIndex += 1;
    } else {
      sortedArray.push(rightValues[rightIndex]);
      rightIndex += 1;
    }
  }

  while (leftIndex < leftValues.length) {
    sortedArray.push(leftValues[leftIndex]);
    leftIndex += 1;
  }

  while (rightIndex < rightValues.length) {
    sortedArray.push(rightValues[rightIndex]);
    rightIndex += 1;
  }

  console.log(sortedArray);
  return sortedArray;
}

sortedSquares([-4, -1, 0, 3, 10, 20]);
