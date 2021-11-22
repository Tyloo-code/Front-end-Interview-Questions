// 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
var lengthOfLIS = function(nums) {
  if(!nums.length) return 0;
  let dp = new Array(nums.length).fill(1);
  let res = 0;
  for(let i = 0; i < nums.length; i++){
    for(let j = 0; j < i; j++){
      if(nums[j] < nums[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
    }
    res = Math.max(res, dp[i]);
  }
  return res;
};