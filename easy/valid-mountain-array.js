// P: Array of integers
// R: True if valid mountain, meaning we have an strict increase and then a strict decrease
// E: [1, 2, 3, 4, 3, 2, 1, 0] // true; [1, 2, 2, 3, 4, 1, 0] // false
// P: Create two variables, one for increasing and the other for decreasing and set them equal to false as they will track if the array values are increasing or decreasing; if we go up then down and then back up return false; if we go
// parallel return false; if we go down and then up return false

const validMountainArray = (arr) => {
  if (arr.length < 3) return false;

  let isIncreasing = false;
  let isDecreasing = false;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) return false;

    if (arr[i] < arr[i + 1]) {
      isIncreasing = true;

      if (isDecreasing) return false; // isIncreasing and isDecreasing can both be true; however, if we have increased AND already decreased, then that is not a mountain (not strict increase then decrease)
    } else if (arr[i] > arr[i + 1]) {
      isDecreasing = true;

      if (!isIncreasing) return false;
    }
  }

  return isDecreasing && isIncreasing;
};

// Practice Attempt - 1

// P: An array of integers with a length of at least 1
// R: True if a valid mountain array, false otherwise
// E: [0, 1, 2, 3, 2, 1, 0] // True; [0, 1, 1, 2, 3, 1] // False
// P: Create two variables that will hold boolean values to track if the array is increase or decreasing; if next value is greater than current value, then increasing; if next value is less than current value then decreasing

const validMountainArray1 = (arr) => {
  // Since we know that the array needs to have a length of at least 3, create a quick test
  if (arr.length < 3) return false;

  // Boolean variables - These values will be set to true once scenario applies (inc or dec)
  let isIncreasing = false;
  let isDecreasing = false;

  for (let i = 0; i < arr.length - 1; i++) {
    // We only go until arr.length - 1 because we are going to track two values arr[i] and arr[i + 1], eventually we'll get to the end of the array and if we didn't do -1 then arr[i + 1] would be undefined
    if (arr[i] === arr[i + 1]) return false;

    if (arr[i] < arr[i + 1]) {
      isIncreasing = true;

      if (isDecreasing) return false; // Once we start decreasing, we should never increase, so if isDecreasing is truthy when we run through the above conditional, that means we did not have a strict increase and strict decrease
    } else if (arr[i] > arr[i + 1]) {
      isDecreasing = true;

      if (!isIncreasing) return false; // Once decreasing, isIncreasing should be set to true, if it is not then we never increased.
    }
  }

  return isIncreasing && isDecreasing;
};
