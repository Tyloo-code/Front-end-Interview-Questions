// 我们遍历到数字a时，用target减去a，就会得到b，若b存在于哈希表中，我们就可以直接返回结果了。若b不存在，那么我们需要将a存入哈希表，好让后续遍历的数字使用。
var twoSum = function(nums, target) {
  let map = new Map();
  for(let i = 0; i < nums.length; i++){
    if(map.has(target - nums[i])) return [map.get(target - nums[i]), i];
    else map.set(nums[i], i);
  }
  return [];
}
