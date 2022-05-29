//  Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
//  The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
//  You must write an algorithm that runs in O(n) time and without using the division operation.

//  Additional Notes:
//    I need to be able to multiply all of the numbers in the answer array except for the number with the same index of the number in the nums array.

//P: one parameter = array that can contain negative and positive integers, as well as zero
//R: return an array. The elements of the answer array must follow this pattern: answer[i] must be equal to the product of all the elements of the parameter array except the element that has the same index as the answer index
//E: [1, 2, 3, 4] // [24, 12, 8, 6] ignore nums[0], so 2 x 3 x 4 is 24; ignore nums[1], 1 x 3 x 4 = 12; ignore nums[2], 1 x 2 x 4; ignore nums[3], 1 x 2 x 3
//P:

function productExceptSelf(nums) {
  let output = [];
  let leftMult = 1;
  let rightMult = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] = rightMult;
    rightMult *= nums[i];
  }
  console.log(output);
  for (let j = 0; j < nums.length; j++) {
    output[j] *= leftMult;
    leftMult *= nums[j];
  }
  return output;
}
