// 数组中出现次数超过一半的数字
function MoreThanHalfNum_Solution(nums)
{
  let ans = 0, count = 0;
  for(let i = 0; i < nums.length; i++){
    if(!count){
      ans = nums[i];
      count++;
    }else{
      count += nums[i] === ans ? 1 : -1;
    }
  }
  return ans;
}