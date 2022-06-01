//  Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

//P: array of integers
//R: boolean; true if any number returns twice; false otherwise
//E: [1,2,3,1] // true; [1,2,3,4] // false
//P: create an empty object; for loop that loops so long as i less than array length; check if object contains key/value pair, if it does then add 1 to value of respective key, if it does not set key name and equal it to 1;
// conditional, if any value greater than 1 return true otherwise false

// Function declaration; sort method
function containsDuplicate(nums) {
  const sortedArray = nums.sort((a, b) => a - b);
  return sortedArray[0] === sortedArray[1];
}

// Function declaration; for loop; conditional statement; add key/values to object
function containsDuplicate(nums) {
  let numberCount = {};

  for (let i = 0; i < nums.length; i++) {
    if (numberCount[nums[i]]) {
      return true;
    }
    numberCount[nums[i]] ? numberCount[nums[i]]++ : (numberCount[nums[i]] = 1);
    console.log(numberCount[nums[i]]);
  }
  return false;
}

// Function declaration; for loop; conditional statement; add key/values to object
function containsDuplicate(nums) {
  let numberCount = {};

  for (let i = 0; i < nums.length; i++) {
    numberCount[nums[i]] ? numberCount[nums[i]]++ : (numberCount[nums[i]] = 1);
  }
  for (const number in numberCount) {
    if (numberCount[number] > 1) {
      return true;
    }
  }
  return false;
}

// Arrays/Hashing DSA Practice
function containsDuplicate(nums) {
  let numberCount = {};

  for (let i = 0; i < nums.length; i++) {
    numberCount[nums[i]] ? numberCount[nums[i]]++ : (numberCount[nums[i]] = 1);
  }

  for (const number in numberCount) {
    if (numberCount[number] > 1) {
      return true;
    }
  }
  return false;
}

function containsDupleicate(nums) {
  let numberCount = {};
  for (let i = 0; i < nums.length; i++) {
    if (numberCount[nums[i]]) {
      return true;
    } else {
      numberCount[nums[i]]
        ? numberCount[nums[i]]++
        : (numberCount[nums[i]] = 1);
    }
  }
  return false;
}
