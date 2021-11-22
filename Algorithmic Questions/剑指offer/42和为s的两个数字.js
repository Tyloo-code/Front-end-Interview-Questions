// 和为s的两个数字
// 对撞双指针 时间复杂度O(n)，空间复杂度O(1)
function FindNumbersWithSum(nums, target){
  let l = 0, r = nums.length - 1;
  while(l < r){
      if(nums[l] + nums[r] === target) return [nums[l], nums[r]];
      else if (nums[l] + nums[r] > target) r--;
      else l++;
  }
  return [];
}