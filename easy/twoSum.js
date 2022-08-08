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

// Practice Attempt - 1

// P: Two parameters - an array of integers (at least two) and an integer target
// R: Return the indices of the two numbers such that they add up to the target; the order of the indices does not matter
// E: [0, 1, 2, 3, 4], 7 - [3, 4]
// P: Create an empty object that will store the values of the array and their respective indices if they do not already exist in the object; within the loop check if the target - current number in the loop exists in the object, if it does return that value of that key and the current i value
function twoSum(nums, target) {
  let object = {};

  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];
    if (object[target - number] !== undefined) {
      return [object[target - number], i];
    }
    object[number] = i;
    console.log(object);
  }
}

const twoSum = (nums, target) => {
  // Create the object that will hold the key/value pairs - key being an element of the input array and value being its index position in said array
  let object = {};

  // Use a for loop to check if an element of the input array is already in the object as a key, if not add the element as a key and its value shall be its index in the input array; conditional will check to see if target minus current element
  // in the array exists as a key, if so we return said value of that key (aka its index position) and the index position of said current element
  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];
    if (object[target - number] !== undefined) {
      return [object[target - number], i];
    }
    object[number] = i;
  }
};

twoSum([2, 7, 11, 15], 9);
