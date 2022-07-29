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
