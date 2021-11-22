// 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
// 求在该柱状图中，能够勾勒出来的矩形的最大面积。
// 时间复杂度O(N)，空间复杂度O(N)
var largestRectangleArea = function(heights) {
  let maxArea = 0;
  const stack = [];
  heights = [0,...heights,0];
  for(let i = 0; i < heights.length; i++){
    while(heights[i] < heights[stack[stack.length - 1]]){        // 当前bar比栈顶bar矮
      const stackTopIndex = stack.pop();                         // 栈顶元素出栈，并保存栈顶bar的索引
      maxArea = Math.max(maxArea, heights[stackTopIndex] * (i-stack[stack.length-1]-1));// 计算出栈的bar形成的长方形面积
    }
    stack.push(i);                          // 当前bar比栈顶bar高了，入栈
  }
  return maxArea;
};