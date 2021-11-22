// 给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。
// 给你一个整数 n ，返回和为 n 的完全平方数的 最少数量 。
// 时间复杂度：O(n*sqrt{n})，其中 n 为给定的正整数。状态转移方程的时间复杂度为 O(sqrt{n})，共需要计算 n 个状态，因此总时间复杂度为 O(n*sqrt{n})
// 空间复杂度：O(n)。我们需要 O(n) 的空间保存状态。
  
var numSquares = function(n) {
  const dp = new Array(n+1).fill(0);                  // 数组长度为n+1，值均为0
  for(let i = 1; i <= n; i++){
    dp[i] = i;                                        // 最坏的情况就是每次+1
    for(let j = 1; i - j * j >= 0; j++){
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);     // 动态转移方程
    }
  }
  return dp[n];
};