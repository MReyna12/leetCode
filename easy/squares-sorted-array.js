// P: Parameter is an array of numbers in non-decreasing order
// R: Square each number in the array and sort the new numbers in non-decreasing order
// E: [1, 2] - [1, 4]
// P: Let's start by squaring each number within the array; merge sort the newly square array

/*const sortedSquares = (nums) => {
  // Create an array to hold the squared values
  let squaredArray = [];

  // Loop through the original array and square each value; push the squared value into squaredArray
  for (let i = 0; i < nums.length; i++) {
    const squaredNum = nums[i] * nums[i];
    squaredArray.push(squaredNum);
  }

  return sortMerge(squaredArray);
};*/

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

//sortedSquares([-4, -1, 0, 3, 10, 20]);

// Two pointers

const sortedSquares = (nums) => {
  // Create new array with a length the size of the array to be squared & sorted
  const sorted = new Array(nums.length);

  // Create two pointers, one beginning at the start and the other beginning at the end
  let head = 0;
  let tail = sorted.length - 1;

  // Loop through the elements, comparing the squared values of the start and end and place the greater value in the last index. Once value added the index is decreased by one and the process is ran again
  for (let i = nums.length - 1; i >= 0; i--) {
    const squaredHead = Math.pow(nums[head], 2);
    const squaredTail = Math.pow(nums[tail], 2);

    if (squaredHead > squaredTail) {
      sorted[i] = squaredHead;
      head++;
    } else {
      sorted[i] = squaredTail;
      tail--;
    }
  }

  return sorted;
};

sortedSquares([-4, -1, 0, 3, 10, 20]);
