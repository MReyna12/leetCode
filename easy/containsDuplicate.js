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

function containsDuplicate(nums) {
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

// Practice Attempt - 1

// P: array of integers
// R: True if any value appears at least twice; false otherwise
// E: [0, 1, 1, 2] // True; [0, 1, 2, 3] // False
// P: Create an empty object; check to see if the value in the array exists in the object, if it does return true, if it does not add the array element as the key and its value shall be 1.

const containsDuplicate = (nums) => {
  // Hash table
  let object = {};

  // Loop through array to add key/values to object
  for (const num of nums) {
    if (object[num]) {
      return true;
    } else {
      object[num] = 1;
    }
  }

  return false;
};

function containsDuplicate(nums) {
  // Create object that array elements will be added to
  let object = {};

  // For loop to check if elements exist in the object as a key, if so, return true; otherwise set value of key to 1; if true never returned then return false
  for (const num of nums) {
    if (object[num]) {
      return true;
    } else {
      object[num] = 1;
    }
  }

  return false;
}

containsDuplicate([1, 2, 3, 1]);
