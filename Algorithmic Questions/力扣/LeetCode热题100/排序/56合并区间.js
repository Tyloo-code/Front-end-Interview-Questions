// 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。

// https://leetcode-cn.com/problems/merge-intervals/solution/shou-hua-tu-jie-56he-bing-qu-jian-by-xiao_ben_zhu/
// 但如果先按区间的左端排升序，就能保证 prev[0] < cur[0]
// 所以合并只需这条：prev[1] = max(prev[1], cur[1])

// 时间复杂度：O(nlogn)，其中 n 为区间的数量。除去排序的开销，我们只需要一次线性扫描，所以主要的时间开销是排序的 O(nlogn)。
// 空间复杂度：O(logn)，其中 n 为区间的数量。这里计算的是存储答案之外，使用的额外空间。O(logn) 即为排序所需要的空间复杂度。
var merge = function(intervals) {
  intervals.sort((a,b) => a[0] - b[0]); //按照数组左端升序排序
  let res = [];
  let prev = intervals[0];
  for(let i = 0; i < intervals.length; i++){
    let cur = intervals[i];
    // 有重合
    if(prev[1] >= cur[0])  prev[1] = Math.max(cur[1], prev[1]);
    else{               // 不重合，prev推入res数组 
      res.push(prev);
      prev = cur;       // 更新 prev
    }      
  }
  res.push(prev);
  return res;
};