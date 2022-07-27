// P: Four paramters - two arrays made of integers (in non-decreasing order) and two integers. integer m denotes how many elements greater than 0 are in the first array and n denotes how many elements greater than 0 are in the second array
// R: Merge and sort the two arrays, with a length of m + n, into the first array variable
// E:
// P: Create a new array with the length of m + n; compare

const merge = (nums1, m, nums2, n) => {
  let tempArray1 = nums1.slice();
  let tempArray2 = nums2.slice();
  let index = 0;
  let nums1Index = 0;
  let nums2Index = 0;

  while (nums1Index < m && nums2Index < n) {
    if (tempArray1[nums1Index] < tempArray2[nums2Index]) {
      nums1[index] = tempArray1[nums1Index];
      nums1Index += 1;
    } else {
      nums1[index] = tempArray2[nums2Index];
      nums2Index += 1;
    }
    index += 1;
  }

  while (nums1Index < m) {
    nums1[index] = tempArray1[nums1Index];
    nums1Index += 1;
    index += 1;
  }

  while (nums2Index < n) {
    nums1[index] = tempArray2[nums2Index];
    nums2Index += 1;
    index += 1;
  }
};
