// 给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。
// 解法一：map+数组 时间复杂度：O(nlogn)  空间复杂度：O(n)
var topKFrequent = function(nums, k) {
  let map = new Map(),
      arr = [...new Set(nums)];
  nums.map((num) => {
    if(map.has(num)) map.set(num, map.get(num) + 1);
    else map.set(num, 1);
  })
  return arr.sort((a,b) => map.get(b) - map.get(a)).slice(0, k);
};

// 解法二：桶排序   时间复杂度：O(n) 空间复杂度：O(n)
// 桶排序 (Bucket sort)的工作的原理：假设输入数据服从均匀分布，将数据分到有限数量的桶里，每个桶再分别排序（有可能再使用别的排序算法或是以递归方式继续使用桶排序进行排）。
// 首先使用 map 来存储频率
// 然后创建一个数组（有数量的桶），将频率作为数组下标，对于出现频率不同的数字集合，存入对应的数组下标（桶内）即可。
var topKFrequent = function(nums, k) {
  let map = new Map(),
      arr = [...new Set(nums)];
  nums.map((num) => {
    if(map.has(num)) map.set(num, map.get(num) + 1);
    else map.set(num, 1);
  })
  // 如果元素数量小于等于 k
  if(map.size <= k) return [...map.keys()];
  return bucketSort(map, k);
};

let bucketSort = (map, k) => {
  let arr = [],
      res = [];
  map.forEach((value, key) => {
     // 利用映射关系（出现频率作为下标）将数据分配到各个桶中
     if(!arr[value]){
       arr[value] = [key];
     }else{
       arr[value].push(key);
     }
  })
   // 倒序遍历获取出现频率最大的前k个数
   for(let i = arr.length - 1; i >= 0 && res.length < k; i--){
     if(arr[i]){
       res.push(...arr[i])
     }
   }
   return res;
}