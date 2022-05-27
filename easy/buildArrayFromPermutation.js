const buildArray = function (nums) {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    console.log(i);
    ans[i] = nums[nums[i]];
  }
  return ans;
};
