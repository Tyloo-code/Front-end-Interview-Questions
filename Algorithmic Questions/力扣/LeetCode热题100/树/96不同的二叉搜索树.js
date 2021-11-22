// 给你一个整数 n ，求恰由 n 个节点组成且节点值从 1 到 n 互不相同的 二叉搜索树 有多少种？返回满足题意的二叉搜索树的种数。
// 时间复杂度 : O(n^2)，其中 n 表示二叉搜索树的节点个数。G(n) 函数一共有 n 个值需要求解，每次求解需要 O(n)O(n) 的时间复杂度，因此总时间复杂度为 O(n^2)。
// 空间复杂度 : O(n)。我们需要 O(n) 的空间存储 G 数组。
// https://leetcode-cn.com/problems/unique-binary-search-trees/solution/er-cha-sou-suo-shu-fu-xi-li-zi-jie-shi-si-lu-by-xi/
var numTrees = function(n) {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  for(let i = 2; i <= n; i++){
    for(let j = 0; j <= i - 1; j++){
      dp[i] += dp[j] * dp[i - j - 1];
    }
  }
  return dp[n];
};