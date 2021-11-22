// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
// 建模 h[i] = Math.min(左边柱子最大值, 右边柱子最大值)(h为下雨之后的水位)
// 动态规划 时间复杂度：O(n)。空间复杂度：O(n)。
var trap = function(height) {
  let volumn = 0;
  const leftMax = [];
  const rightMax = [];
  leftMax[0] = height[0];
  rightMax[height.length - 1] = height[height.length - 1];
  
  for(let i = 1; i < height.length; i++) {
      leftMax[i] = Math.max(height[i], leftMax[i-1]);
  }

  for(let i = height.length - 2; i >= 0; i--) {
      rightMax[i] = Math.max(height[i], rightMax[i+1]);
  }

  for(let i = 0; i < height.length; i++) {
      volumn += Math.min(leftMax[i], rightMax[i]) - height[i]
  }
  return volumn;
};
