// P: Four paramters - two arrays made of integers (in non-decreasing order) and two integers. integer m denotes how many elements greater than 0 are in the first array and n denotes how many elements greater than 0 are in the second array
// R: Merge and sort the two arrays, with a length of m + n, into the first array variable
// E:
// P: Create a new array with the length of m + n; compare

// Starts from the beginning of the temporary copy of nums1 array
const merge = (nums1, m, nums2, n) => {
  // Create copy of nums1 to reference values to be moved into nums1 (otherwise when overwriting values in nums1 you may lose a value that you need)
  let tempArray1 = nums1.slice();
  // Create an index value that increases every time a value is added to the corresponding index of nums1; create two pointers, one for the nums1 temporary array and the other for nums2 (these are used to compare values in the two arrays)
  let index = 0;
  let nums1Index = 0;
  let nums2Index = 0;

  // While the the two pointers are less than their corresponding m and n integers
  while (nums1Index < m && nums2Index < n) {
    if (tempArray1[nums1Index] < nums2[nums2Index]) {
      nums1[index] = tempArray1[nums1Index];
      nums1Index += 1;
    } else {
      nums1[index] = nums2[nums2Index];
      nums2Index += 1;
    }
    index += 1;
  }

  // If there are no more values in nums2 to be added, then add remaining nums1 values
  while (nums1Index < m) {
    nums1[index] = tempArray1[nums1Index];
    nums1Index += 1;
    index += 1;
  }

  // If there are no more values in nums1 to be added, then add remaining nums2 values to nums1
  while (nums2Index < n) {
    nums1[index] = nums2[nums2Index];
    nums2Index += 1;
    index += 1;
  }
};

// Practice Attempt - 1

const merge2 = (nums1, m, nums2, n) => {
  // Create a temporary array copy of nums1 to replace values in nums1 without replacing any values in nums1 without saving said values
  const tempNums1 = nums1.slice();

  // Create three indices - first to track index of tempNums1, second to track index of nums2, and third to track index of nums1 (because we need to put sorted values into nums1)
  let nums1Index = 0;
  let nums2Index = 0;
  let index = 0;

  // While loop that runs while nums1Index and nums2Index are less than their respective m and n integers
  while (nums1Index < m && nums2Index < n) {
    // If nums1 values is less than nums2 value, then nums1 value into nums1 at beginning of nums1
    if (tempNums1[nums1Index] < nums2[nums2Index]) {
      nums1[index] = tempNums1[nums1Index];
      // Increment the nums1Index
      nums1Index += 1;
    } else {
      nums1[index] = nums2[nums2Index];
      nums2Index += 1;
    }
    // Index should be increased by one each time regardless of the outcome of the conditional because we need to move to the next position in nums1 so the next value can be added
    index += 1;
  }

  // If there are still more values to be added from tempNums1, this loop runs
  while (nums1Index < m) {
    nums1[index] = tempNums1[nums1Index];
    nums1Index += 1;
    index += 1;
  }

  // If there are still more values to be added from nums2, this loop runs
  while (nums2Index < n) {
    nums1[index] = nums2[nums2Index];
    nums2Index += 1;
    index += 1;
  }
};

const merge3 = (nums1, m, nums2, n) => {
  // Use m and n to track indices of the two arrays
  // Use m + n - 1 to determine which index position the sorted value will go in for nums1
  let index = m + n - 1;

  // While loop that will run so long as m and n are greater than zero
  while (m > 0 && n > 0) {
    // Condition will check the values of nums1 and nums2 and the greater value will go at the end of nums1 and continue down from there
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[index] = nums1[m - 1];
      m--;
    } else {
      nums1[index] = nums2[n - 1];
      n--;
    }
    index--;
  }

  // If there are still values to be added from nums2, add remaining values from nums2 (do not need the same for nums1 because if only more values from nums1 then they are already in nums1 and sorted)
  while (n > 0) {
    nums1[index] = nums2[n - 1];
    n--;
    index--;
  }
};
