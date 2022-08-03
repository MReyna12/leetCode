// P: Integer of nums sorted in non-decreasing order
// R: Return the number of unique elements
// E:
// P:

const removeDuplicates = (nums) => {
  let left = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[left] !== nums[i]) {
      nums[left + 1] = nums[i];
      left++;
    }
  }

  return left + 1;
};

// Practice Attempt - 1

// P: Array of integers sorted in non-decreasing order
// R: Return the number of unique elements; need to remove any duplicates (this prompt allows duplicates to remain in the array, but they must be shifted to the right until only the number of unique values are in the beginning of the array)
// E: [0, 0, 1, 1, 2] // [0, 1, 2, 0, 1] - 3
// P:

const removeDuplicates1 = (nums) => {
  let left = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[left] !== nums[i]) {
      nums[left + 1] = nums[i];
      left++;
    }
  }
  return left + 1;
};

// Practice Attempt - 2

// P: Array of integers sorted in non-decreasing order
// R:
// E:
// P: Create a left pointer that is only increased when nums[left] !== nums[i]; nums[left] holds the value we want to swap out; run a for loop that starts at 1 and compare nums[left] to nums[i]; if not equal then swap left + 1 with nums[i] and increase left by 1;

const removeDuplicates2 = (nums) => {
  let left = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[left] !== nums[i]) {
      nums[left + 1] = nums[i];
      left++;
    }
  }

  return left + 1;
};
