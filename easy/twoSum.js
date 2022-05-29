//  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//  You may assume that each input would have exactly one solution, and you may not use the same element twice.
//  You can return the answer in any order.

//P: two parameters; first parameter is an array of integers and second parameter is an integer
//R: return two indices of the two numbers in the array that add up to the target (second parameter)
//E: [1,2,3], 4 // [0, 2]
//P: for loops that starts with adding the value at the first index and the next index and increases by one each time

// Function expression; nested for loop; conditional
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      console.log(i, j);
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

function twoSum(nums, target) {
  const object = {};

  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];
    if (object[target - number] !== undefined) {
      return [object[target - number], i];
    }
    object[number] = i;
  }
  return [];
}
