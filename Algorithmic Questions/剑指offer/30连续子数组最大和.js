// 连续子数组最大和
var maxSubArray = function(nums) {
  let res = nums[0];
  for(let i = 1; i < nums.length; i++){
    nums[i] = Math.max(0, nums[i - 1]) + nums[i];
    res = Math.max(res, nums[i]);
  } 
  return res;
};