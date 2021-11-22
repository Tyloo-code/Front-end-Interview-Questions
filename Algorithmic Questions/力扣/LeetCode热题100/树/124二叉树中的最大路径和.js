// 路径 被定义为一条从树中任意节点出发，沿父节点-子节点连接，达到任意节点的序列。同一个节点在一条路径序列中 至多出现一次 。该路径 至少包含一个 节点，且不一定经过根节点。
// 路径和 是路径中各节点值的总和。
// 给你一个二叉树的根节点 root ，返回其 最大路径和 。

// 时间复杂度 O(N)，每个节点都要遍历，空间复杂度是 O(H)，递归树的深度。
// https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/solution/shou-hui-tu-jie-hen-you-ya-de-yi-dao-dfsti-by-hyj8/
var maxPathSum = function(root) {
  let maxSum = Number.MIN_SAFE_INTEGER;   //最大路径和
  const dfs = (root) => {
    if(root === null) return 0;           // 遍历到null节点，收益0
    const left = dfs(root.left);          // 左子树提供的最大路径和
    const right = dfs(root.right);        // 右子树提供的最大路径和

    const innerMaxSum = left + root.val + right;   // 当前子树内部的最大路径和
    maxSum = Math.max(maxSum, innerMaxSum);        // 挑战最大纪录
    
    const outputMaxSum = root.val + Math.max(left, right);  // 当前子树对外提供的最大和
    // 对外提供的路径和为负，直接返回0。否则正常返回
    return outputMaxSum < 0 ? 0 :outputMaxSum;
  }  
  dfs(root);                              // 递归的入口
  return maxSum
};