// 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

// 如果候选人不是maj 则 maj,会和其他非候选人一起反对 会反对候选人,所以候选人一定会下台(maj==0时发生换届选举)
// 如果候选人是maj , 则maj 会支持自己，其他候选人会反对，同样因为maj 票数超过一半，所以maj 一定会成功当选

// 时间复杂度：O(n) Boyer-Moore 算法只对数组进行了一次遍历。
// 空间复杂度：O(1) Boyer-Moore 算法只需要常数级别的额外空间。
var majorityElement = function(nums) {
  let count = 1,
      maj = nums[0];
  for(let i = 1; i < nums.length; i++){
    if(count === 0) maj = nums[i];
    if(nums[i] === maj) count++;
    else count--;
  }
  return maj;
};
