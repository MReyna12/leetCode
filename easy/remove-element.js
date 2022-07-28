// P: An array of integers and an integer -- I must remove all instances of the integer in the array and shift the remaining values to the left, with underscores now in the place of the removed values
// R: Return the total number of element remaining after removing the duplicates
// E: [1, 2, 3, 4, 4, 4, 5] val = 4 - k = 4; [1, 1, 2, 2, 3] val = 1 - k = 3
// P: Edge case - If nums.length === 0, then return 0; if nums.length === 1 && nums[0] === val, then return 0;
// Create two pointers - one that starts at beginning of array and the other that starts at the end; if nums[beginningPointer] === val then swap nums[beginningPointer] with the last element of array and then decrease the tail pointer;
// If nums[beginningPointer] !== val, then increase beginningPointer;

function removeElement(nums, val) {
  // Create two pointers
  // First pointer will be the head and second pointer the tail
  let head = 0;
  let tail = nums.length;

  // While loop that runs while head is not greater than the tail
  while (head < tail) {
    // Conditional that checks if nums[head] is equal to the val, if so then swap nums[head] and nums[tail], decrease the tail
    if (nums[head] === val) {
      nums[head] = nums[tail];
      tail--;
    } else {
      // We DO NOT increase the head in the above condition in case the values at nums[head] and nums[tail] are the same, so we'll check nums[head] again and if it was equal to the previous tail, we swap it wit the new tail
      head++;
    }
  }

  // Since we only increase head when we know that a value does not need to be swapped, it can be used as a counter that holds the number of elements NOT equal to val
  return head;
}
