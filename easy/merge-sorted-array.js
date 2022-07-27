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
