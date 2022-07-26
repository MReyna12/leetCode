// P: Parameter is an array of integers
// R: Return the total number of integers in the array that contain an even number of digits
// E: [0, 1, 2, 12] - 1 (12); [0] - 0; [23, 42, 4444] - 3
// P: Use a for loop to traverse each element of the array; check if the length of the element is divisible by 0 (even) or 1 (odd); if even add 1 to the counter; return counter

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
