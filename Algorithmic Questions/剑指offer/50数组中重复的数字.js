// 数组中重复的数字
function duplicate( nums ) {
  let map = new Map();
  for(let i of nums){
    if(map.has(i)) return i;
    map.set(i, 1);
  }
  return -1;
};