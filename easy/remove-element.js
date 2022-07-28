// P: An array of integers and an integer -- I must remove all instances of the integer in the array while keeping the length of the original array; cannot use a new array
// R: Return the total number of element remaining after removing the duplicates
// E: [1, 2, 3, 4, 4, 4, 5] val = 4 - k = 4; [1, 1, 2, 2, 3] val = 1 - k = 3
// P: Edge case - If nums.length === 0, then return 0; if nums.length === 1 && nums[0] === val, then return 0;
// Create two pointers - one that starts at beginning of array and the other that starts at the end; if nums[beginningPointer] === val then swap nums[beginningPointer] with the last element of array and then decrease the tail pointer;
// If nums[beginningPointer] !== val, then increase beginningPointer;

function removeElement(nums, val) {
  // Create two pointers
  let head = 0;
  let tail = nums.length;

  while (head < tail) {
    // Conditional that will check if nums[head] is equal to the val, if so we will swap nums[head] with the nums[tail - 1] (aka the element at the end of the array) and then decrease the tail value;
    // The head pointer will NOT be increased if the above is true because we need to make sure the value that was swapped is not equal to val as well, if it is then swap nums[head] with the tail (which was previously decreased by 1 to avoid an endless loop)
    if (nums[head] === val) {
      nums[head] = nums[tail - 1];
      tail--;
    } else {
      head++;
    }
  }

  // Head is only increased when an element of the array does not equal the val argument, so we return this variable
  return head;
}
