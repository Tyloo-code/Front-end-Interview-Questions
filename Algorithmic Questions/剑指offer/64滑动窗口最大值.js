// 给定一个数组和滑动窗口的大小，找出所有滑动窗口里数值的最大值。
// 窗口对应的数据结构为 双端队列 ，本题使用 单调队列 即可解决以上问题。
// 给定一个数组和滑动窗口的大小，找出所有滑动窗口里数值的最大值。

// 暴力解法 时间复杂度是O(kN)，其中 k 是滑动窗口的长度。空间复杂度是O(N)。
function maxInWindows(num, size)
{
    if(size < 1) return [];
    const res = [];
    for(let i = 0; i < num.length - size + 1; i++){
      res.push(Math.max(...num.slice(i, i + size)));
    }
    return res;
}

// 双端队列 时间复杂度O(N),空间复杂度是O(N)。
// https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof/solution/jian-zhi-offer-59-i-hua-dong-chuang-kou-9flhu/
// https://blog.csdn.net/qq_37288477/article/details/85331102
// https://leetcode-cn.com/problems/sliding-window-maximum/solution/shuang-xiang-dui-lie-jie-jue-hua-dong-chuang-kou-2/
function maxInWindows(num, size){
  if(!size) return [];
  const numLength = num.length;
  let window = [],       //队列用来存放下标
      res = [];
  for(let i = 0; i < numLength; i++){
    if(i >= size + window[0]) window.shift();    // 如果 i 比窗口最大范围大, 移除队头
    while(window && num[i] > num[window[window.length - 1]]){
      window.pop();                   // 如果 nums[i] 比窗口中的值大，将窗口中的值删除
    }
    window.push(i);                   // 窗口中加入当前元素
    if(i >= size - 1) res.push(num[window[0]])   // 如果 i > size - 1，每次都记录最大值
  }
 return res;
}