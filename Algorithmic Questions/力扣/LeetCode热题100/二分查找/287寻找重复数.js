// 给定一个包含 n + 1 个整数的数组 nums ，其数字都在 1 到 n 之间（包括 1 和 n），可知至少存在一个重复的整数。
// 假设 nums 只有 一个重复的整数 ，找出 这个重复的数 。

// 时间复杂度：二分法O(logN)，但二分法内部遍历了一次数组O(N)，综合为O(NlogN)
// 空间复杂度：O(1)

var findDuplicate = function(nums) {
  let low = 1;
  let high = nums.length - 1;           //题目注明了：nums.length == n + 1
  while(low < high){
    const mid = (low + high) >>> 1;     // 求中间索引
    let count = 0;
    for(let i = 0; i < nums.length; i++){
      if(nums[i] <= mid) count++;
    }
    if(count > mid) high = mid;
    else low = mid + 1;
  }
  return low;
};