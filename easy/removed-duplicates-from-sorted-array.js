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
