// 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。
var maxSubArray = function(nums) {
  let res = nums[0];
  for(let i = 0; i < nums.length; i++){
    nums[i] += Math.max(0, nums[i - 1]);
    res = Math.max(res, nums[i]);
  }
  return res;
}