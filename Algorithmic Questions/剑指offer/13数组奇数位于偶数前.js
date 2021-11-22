// 调整数组顺序是奇数位于偶数前面
//开辟新空间
function reOrderArray( array ) {
  const ji = [];      // 奇数数组
  const ou = [];      // 奇数数组
  array.forEach((item) => {
    item % 2 ? ji.push(item) : ou.push(item);
  });
  return ji.concat(ou);
}

//双指针交换
var exchange = function(nums) {
  const length = nums.length;
  if(!length) return [];
  let i = 0,
      j = length - 1;
  while(i < j){
    while(i < length && nums[i] % 2) i++;
    while(j >= 0 && nums[j] % 2 === 0) j--;
    if(i < j){
      [nums[i],nums[j]] = [nums[j],nums[i]];
      i++;
      j--;
    }
  }
  return nums;
};