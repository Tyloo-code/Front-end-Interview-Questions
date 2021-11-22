// 给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过也可能不穿过根结点。

var diameterOfBinaryTree = function(root) {
  let ans = 0;
  const depth = (rootNode) => {
    if(!rootNode) return 0;                // 如果不存在根节点，则深度为0
    let left = depth(rootNode.left);       // 递归，获取左子树的深度
    let right = depth(rootNode.right);     // 递归，获取右子树的深度
    ans = Math.max(ans, left + right);     // 获取该树的最长路径和现有最长路径中最大的那个
    return Math.max(left, right) + 1;      //已知根节点的左右子树的深度，左右子树深度的最大值 + 1，便是以根节点为数的最大深度
  }
  depth(root);
  return ans;
};