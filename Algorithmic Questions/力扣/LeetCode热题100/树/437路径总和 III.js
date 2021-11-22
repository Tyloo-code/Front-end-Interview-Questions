// 给定一个二叉树，它的每个结点都存放着一个整数值。
// 找出路径和等于给定数值的路径总数。
// 路径不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。

// 时间复杂度分析：外层递归遍历所有节点，内层节点遍历子树节点，所以最终是 1+2+3+...+N,所以平均O(N^2)
// 空间复杂度：O(1)
/**
 * @分析
 * 1. 必须注意到，方向是向下的，这是解决很多情况的关键
 * 2. 使用双递归,外层递归是前序遍历整棵树的节点，内层递归是以当前节点为根节点，找出满足路径和的数量
 * 3. 最后得到全部的路径总和
 */
var pathSum = function(root, targetSum) {
  const recursion = (root) => {
    if(!root) return 0;                   // 从根节点起，符合的有要求的递归
    const dfs = (cRoot, leave) => {       // 内层递归
      if(!cRoot) return 0;                // 从当前节点为起点，符合条件的格式
      const flag = (cRoot.val === leave) ? 1 : 0;           // 当前节点值 等于 剩余总和值
      const cLeft = dfs(cRoot.left, leave - cRoot.val);         // 先遍历左节点 判断值是否满足
      const cRight = dfs(cRoot.right, leave - cRoot.val);       // 再遍历右节点 判断值是否满足
      return flag + cLeft + cRight;
    }
    const page = dfs(root, targetSum);    // 以当前节点为起点，满足条件的个数
    const left = recursion(root.left);
    const right = recursion(root.right);
    return page + left + right;
  }
  return recursion(root);
};

