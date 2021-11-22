// 扑克牌顺子 (四个王)


var isStraight = function(nums) {
  const set = new Set();
  let min = 14, max = 0;            // min和max的初始值是两个边界值[0, 13]
  for(const num of nums){
    if(!num) continue;              // 遇到大小王 跳过
    if(set.has(num)) return false;  // 遇到重复则直接 返回false
    set.add(num);
    min = Math.min(min, num);
    max = Math.max(max, num);
  }
  return max - min < 5;
};